document.addEventListener("DOMContentLoaded", function () {
  let currentRequest = null;

  function debounce(func, wait) {
    let timeout;
    return function executedFunction(...args) {
      const later = () => {
        clearTimeout(timeout);
        func(...args);
      };
      clearTimeout(timeout);
      timeout = setTimeout(later, wait);
    };
  }

  async function fetchPageContent(page, id = null) {
    if (currentRequest) {
      currentRequest.abort();
    }
    const controller = new AbortController();
    currentRequest = controller;
    try {
      const url = id ? `/?page=${page}&id=${id}` : `/?page=${page}`;
      const response = await fetch(url, { signal: controller.signal });
      const html = await response.text();
      const parser = new DOMParser();
      const doc = parser.parseFromString(html, "text/html");
      document.getElementById("content").innerHTML =
        doc.getElementById("content").innerHTML;
      document.title = doc.title;
      history.pushState(null, "", url);
      doc.querySelectorAll("script").forEach((script) => {
        eval(script.textContent);
      });
      attachEventListeners();
    } catch (error) {
      if (error.name === "AbortError") {
        console.log("Fetch aborted");
      } else {
        console.error("Fetch error:", error);
      }
    } finally {
      currentRequest = null;
    }
  }

  const debouncedFetchPageContent = debounce(fetchPageContent, 300);

  function attachEventListeners() {
    document.querySelectorAll("a[data-page]").forEach((link) => {
      link.removeEventListener("click", handleLinkClick);
      link.addEventListener("click", handleLinkClick);
    });
  }

  function handleLinkClick(e) {
    e.preventDefault();
    const page = this.getAttribute("data-page");
    const id = this.getAttribute("data-id");
    debouncedFetchPageContent(page, id);
  }

  attachEventListeners();

  window.addEventListener("popstate", (event) => {
    const url = new URL(window.location);
    const page = url.searchParams.get("page") || "home";
    const id = url.searchParams.get("id");
    debouncedFetchPageContent(page, id);
  });
});
