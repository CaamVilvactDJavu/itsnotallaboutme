import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

async function getMemoirContent(filename: string) {
  // const url = process.env.NEXT_PUBLIC_API_LOCAL;
  const url = process.env.NEXT_PUBLIC_API_BASE_URL;

  try {
    const response = await fetch(`${url}/api/memoirs/${filename}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch note: ${response.statusText}`);
    }

    const memoir = await response.json();
    return memoir;
  } catch (error) {
    console.error("Error fetching note content:", error);
    return { title: "Error", content: "Could not load content." };
  }
}

export async function generateStaticParams() {
  const memoirs = [
    "saat-hati-terguncang",
    "renungan-malam",
    "entah-siapa-yang-harus-disalahkan",
  ];
  return memoirs.map((memoir) => ({ filename: memoir }));
}

export default async function MemoirPage({
  params,
}: {
  params: { filename: string };
}) {
  // const url = process.env.NEXT_PUBLIC_API_BASE_URL;
  const memoir = await getMemoirContent(params.filename);
  const postTitle = memoir.title || "Memoir";
  const postDescription = memoir.content.slice(0, 150) || "Memoir description";
  // const postUrl = `${url}/memoirs/${params.filename}`;
  const postUrl = `https://itsnotallaboutme.shuttleapp.rs/memoirs/${params.filename}`;
  const postImage = "/icon.png";

  return (
    <>
      <head>
        <title>{postTitle}</title>
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#0f1e36" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={postImage} />
        <meta name="twitter:site" content="@CaamVilvact" />
        <meta name="viewport" content="width=375" />
        <meta property="og:url" content={postUrl} />
        <meta property="og:type" content="article" />
        <meta name="description" content={postDescription} />
        <meta property="og:description" content={postDescription} />
        <meta property="og:title" content={postTitle} />
        <meta property="og:image" content={postImage} />
      </head>
      <main>
        <div className="container mx-auto p-4">
          <h1 className="text-2xl font-bold mb-4">{memoir.title}</h1>
          <div className="prose prose-xl max-w-none space-y-4">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>
              {memoir.content}
            </ReactMarkdown>
          </div>
        </div>
      </main>
    </>
  );
}
