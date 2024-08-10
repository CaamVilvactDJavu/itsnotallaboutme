export default function About() {
  const skills = [
    { name: "Rust", icon: RustIcon },
    { name: "Python", icon: PythonIcon },
    { name: "JavaScript", icon: JavascriptIcon },
    { name: "Linux", icon: LinuxIcon },
    { name: "Terminal", icon: TerminalIcon },
    { name: "Next.js", icon: NextJsIcon },
    { name: "Django", icon: DjangoIcon },
    { name: "GSAP", icon: GsapIcon },
  ];

  const projects = [
    {
      title: "Al-Qur'an CLI",
      description:
        "A command-line interface to interact with the Al-Qur'an using the API from quran.com.",
      skills: ["Rust"],
    },
    {
      title: "Memoir",
      description:
        "Memoir 'メモワール' is a website where I have space to express my complaints. This site uses Next.js and Sanity.",
      skills: ["TypeScript", "Tailwind CSS", "Sanity", "Next.js"],
      link: "https://memo-ir.vercel.app",
    },
    {
      title: "Pootoforio",
      description:
        "An interactive personal portfolio website. This website showcases my projects in Japanese style. I'm using GSAP and Framer Motion for animated text and transitions.",
      skills: ["TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
      link: "https://pootoforio.vercel.app",
    },
    {
      title: "Michie Only",
      description:
        "Fan platform for JKT48 members with profiles, Showroom integration, and live stream. Uses Rust for backend and SHOWROOM API.",
      skills: ["Rust", "TypeScript", "Tailwind CSS", "Next.js"],
      link: "https://michie-only.vercel.app",
    },
    {
      title: "Kostera Web Application",
      description:
        "A command-line interface to interact with the Al-Qur'an using the API from quran.com.",
      skills: [
        "Python",
        "TypeScript",
        "JavaScript",
        "HTML",
        "CSS",
        "Tailwind CSS",
        "Pyramid",
      ],
    },
    {
      title:
        "Secure Text Messages in Images by Integrating AES Cryptography (CBC) and DCT Steganography Method",
      description:
        "A command-line interface to interact with the Al-Qur'an using the API from quran.com.",
      skills: ["Python"],
    },
    {
      title: "BMKG Atomic Clock",
      description:
        "A command-line interface to interact with the Al-Qur'an using the API from quran.com.",
      skills: ["Python", "JavaScript", "HTML", "CSS"],
    },
    {
      title: "Simple Mobile Application",
      description:
        "A command-line interface to interact with the Al-Qur'an using the API from quran.com.",
      skills: ["Python", "TypeScript", "JavaScript", "Expo"],
    },
    {
      title: "Space Battle",
      description:
        "A command-line interface to interact with the Al-Qur'an using the API from quran.com.",
      skills: ["Python", "Pygame"],
    },
  ];

  return (
    <main className="p-4">
      <div>
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Skills</h2>
          <p className="text-red-500 mt-2">Disclaimer!</p>
          <p>
            I don&apos;t know the right title for this section, but I just want
            to show the programming languages and technology skills that I have
            tried. One more time, I&apos;ve only ever tried them.
          </p>
          <div className="flex flex-wrap mt-4 space-x-2">
            {skills.map((skill, index) => (
              <div
                key={index}
                className="border border-dashed border-[#050505] justify-center flex items-center space-x-2 rounded px-2"
              >
                <skill.icon />
                <span>{skill.name}</span>
              </div>
            ))}
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {projects.map((project, index) => (
              <div
                key={index}
                className="border border-dashed border-[#050505] p-4 rounded"
              >
                <h3 className="text-xl font-bold">
                  {project.link ? (
                    <a
                      href={project.link}
                      className="underline decoration-wavy hover:no-underline"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      {project.title} *
                    </a>
                  ) : (
                    project.title
                  )}
                </h3>
                <p>{project.description}</p>
                <div className="mt-2 flex flex-wrap space-x-2">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="px-2 py-1 border border-dashed border-[#050505] flex items-center space-x-2 rounded"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}

function RustIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 10 50 30"
      width="20"
      height="50"
      strokeWidth="1"
    >
      <path
        d="m47.781 31.608-1.343-.832a18.57 18.57 0 0 0-.038-.391l1.154-1.077a.46.46 0 0 0-.153-.771l-1.476-.552a16.798 16.798 0 0 0-.115-.381l.92-1.279a.462.462 0 0 0-.3-.727l-1.557-.253c-.06-.118-.123-.234-.187-.35l.654-1.435a.46.46 0 0 0-.437-.654l-1.579.055a12.482 12.482 0 0 0-.25-.302l.363-1.539a.461.461 0 0 0-.556-.556l-1.538.362c-.1-.084-.2-.167-.303-.25l.055-1.578a.46.46 0 0 0-.654-.437l-1.435.654a16.712 16.712 0 0 0-.35-.188l-.253-1.556a.462.462 0 0 0-.726-.301l-1.28.92a14.31 14.31 0 0 0-.38-.115l-.552-1.476a.461.461 0 0 0-.771-.154l-1.077 1.156c-.13-.014-.26-.028-.391-.038l-.832-1.344a.462.462 0 0 0-.786 0l-.832 1.344c-.13.01-.261.024-.391.038l-1.077-1.155a.464.464 0 0 0-.771.153l-.552 1.476c-.128.037-.255.076-.38.116l-1.28-.921a.46.46 0 0 0-.727.3l-.254 1.557c-.117.061-.233.124-.35.188l-1.434-.654a.46.46 0 0 0-.654.436l.055 1.58c-.102.082-.203.165-.303.25l-1.538-.363a.464.464 0 0 0-.557.556l.363 1.539c-.085.1-.168.2-.25.302l-1.579-.055a.462.462 0 0 0-.437.654l.654 1.436c-.063.115-.126.231-.187.35l-1.556.252a.462.462 0 0 0-.301.727l.92 1.279c-.04.126-.078.253-.115.38l-1.476.553a.462.462 0 0 0-.153.771l1.155 1.077c-.015.13-.028.26-.039.391l-1.343.832a.462.462 0 0 0 0 .786l1.343.831c.011.131.024.262.039.392l-1.155 1.077a.462.462 0 0 0 .153.771l1.476.552c.037.128.076.255.116.38l-.921 1.28a.462.462 0 0 0 .301.726l1.556.253c.061.118.123.235.188.35l-.655 1.435a.462.462 0 0 0 .437.654l1.579-.055c.082.103.165.203.25.303l-.363 1.539a.46.46 0 0 0 .557.555l1.538-.362c.1.085.201.167.303.249l-.055 1.58a.461.461 0 0 0 .654.436l1.435-.654c.115.064.232.127.35.188l.253 1.555a.461.461 0 0 0 .727.302l1.279-.922c.126.04.253.08.38.116l.552 1.476a.46.46 0 0 0 .771.153l1.078-1.155c.13.015.26.028.391.04l.832 1.343a.463.463 0 0 0 .786 0l.831-1.344c.131-.011.262-.024.392-.039l1.077 1.155a.46.46 0 0 0 .77-.153l.553-1.476c.127-.036.254-.076.38-.116l1.28.922a.463.463 0 0 0 .726-.302l.254-1.556c.117-.06.233-.124.349-.187l1.435.654a.461.461 0 0 0 .654-.437l-.055-1.58c.102-.08.203-.163.303-.248l1.538.362a.46.46 0 0 0 .556-.555l-.362-1.539c.084-.1.167-.2.249-.303l1.58.055a.46.46 0 0 0 .436-.654l-.654-1.435c.064-.115.126-.232.187-.35l1.556-.253a.46.46 0 0 0 .301-.726l-.92-1.28a17.5 17.5 0 0 0 .115-.38l1.476-.552a.46.46 0 0 0 .153-.771l-1.155-1.077c.014-.13.027-.261.039-.392l1.343-.831a.462.462 0 0 0 0-.786zM38.79 42.752a.952.952 0 0 1 .399-1.861.952.952 0 0 1-.4 1.861zm-.457-3.087a.866.866 0 0 0-1.028.666l-.477 2.226A11.649 11.649 0 0 1 32 43.597c-1.76 0-3.43-.39-4.929-1.087l-.477-2.225a.866.866 0 0 0-1.028-.667l-1.965.422a11.68 11.68 0 0 1-1.016-1.197h9.561c.108 0 .18-.02.18-.118v-3.382c0-.099-.072-.118-.18-.118H29.35V33.08h3.024c.276 0 1.476.079 1.86 1.613.12.471.384 2.006.564 2.497.18.551.912 1.652 1.692 1.652h4.764a.977.977 0 0 0 .173-.017c-.33.449-.693.874-1.083 1.27l-2.01-.431zm-13.223 3.04a.952.952 0 0 1-.399-1.861.95.95 0 0 1 .398 1.862zm-3.627-14.707a.95.95 0 1 1-1.737.771.95.95 0 1 1 1.737-.771zm-1.115 2.643 2.047-.91a.868.868 0 0 0 .44-1.145l-.421-.953h1.658v7.474h-3.345a11.714 11.714 0 0 1-.38-4.466zm8.983-.726v-2.203h3.948c.204 0 1.44.236 1.44 1.16 0 .767-.948 1.043-1.728 1.043h-3.66zM43.7 31.898c0 .292-.011.581-.033.868h-1.2c-.12 0-.168.08-.168.197v.551c0 1.298-.732 1.58-1.373 1.652-.61.068-1.288-.256-1.371-.63-.36-2.025-.96-2.458-1.908-3.206 1.176-.746 2.4-1.848 2.4-3.323 0-1.593-1.092-2.596-1.836-3.088-1.044-.688-2.2-.826-2.512-.826H23.285a11.684 11.684 0 0 1 6.545-3.694l1.463 1.535c.331.346.88.36 1.225.028l1.638-1.566a11.71 11.71 0 0 1 8.009 5.704l-1.121 2.532a.869.869 0 0 0 .44 1.145l2.159.958c.037.383.056.77.056 1.163zM31.294 19.093a.95.95 0 0 1 1.344.031.952.952 0 0 1-.032 1.346.949.949 0 0 1-1.343-.032.953.953 0 0 1 .031-1.345zm11.123 8.951a.95.95 0 1 1 1.737.772.95.95 0 1 1-1.737-.772z"
        fill="#000000"
      ></path>
    </svg>
  );
}

function PythonIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      fill="currentColor"
      viewBox="0 10 50 30"
      width="20"
      height="50"
      strokeWidth="1"
    >
      <path d="M 24 3 C 20.271429 3 18.240267 3.9470561 16.792969 4.5742188 L 16.791016 4.5742188 C 15.488673 5.1421213 14.704771 6.3187748 14.365234 7.4296875 C 14.025697 8.5406002 14 9.6506515 14 10.640625 L 14 14 L 10.640625 14 C 9.6506515 14 8.5406002 14.0257 7.4296875 14.365234 C 6.3187748 14.704771 5.1421212 15.488626 4.5742188 16.791016 L 4.5742188 16.792969 C 3.947056 18.24022 3 20.271429 3 24 C 3 27.728571 3.9470561 29.759733 4.5742188 31.207031 L 4.5742188 31.208984 C 5.1421212 32.511374 6.3187748 33.295229 7.4296875 33.634766 C 8.5406002 33.974256 9.6506515 34 10.640625 34 L 14 34 L 14 37.359375 C 14 38.349349 14.0257 39.459401 14.365234 40.570312 C 14.704771 41.681225 15.488626 42.857879 16.791016 43.425781 L 16.792969 43.425781 C 18.24022 44.052944 20.271429 45 24 45 C 27.728571 45 29.759733 44.052944 31.207031 43.425781 L 31.208984 43.425781 C 32.511374 42.857879 33.295229 41.681225 33.634766 40.570312 C 33.974256 39.459401 34 38.349349 34 37.359375 L 34 34 L 37.359375 34 C 38.349349 34 39.459401 33.9743 40.570312 33.634766 C 41.681225 33.295229 42.857879 32.511374 43.425781 31.208984 L 43.425781 31.207031 C 44.052944 29.75978 45 27.728571 45 24 C 45 20.271429 44.052944 18.240267 43.425781 16.792969 L 43.425781 16.791016 C 42.857879 15.488673 41.681225 14.704771 40.570312 14.365234 C 39.459401 14.025697 38.349349 14 37.359375 14 L 34 14 L 34 10.640625 C 34 9.6506515 33.974303 8.5406002 33.634766 7.4296875 C 33.295229 6.3187748 32.511374 5.1421213 31.208984 4.5742188 L 31.207031 4.5742188 C 29.75978 3.9470561 27.728571 3 24 3 z M 24 6 C 27.268623 6 28.459017 6.6519922 30.009766 7.3242188 C 30.427376 7.5063161 30.590162 7.7325533 30.765625 8.3066406 C 30.941088 8.8807279 31 9.7405985 31 10.640625 L 31 15.253906 A 1.50015 1.50015 0 0 0 31 15.740234 L 31 19 C 31 20.950062 29.450062 22.5 27.5 22.5 L 20.5 22.5 C 16.928062 22.5 14 25.428062 14 29 L 14 31 L 10.640625 31 C 9.7405985 31 8.8807279 30.941088 8.3066406 30.765625 C 7.7325533 30.590162 7.5063162 30.427376 7.3242188 30.009766 C 6.6519921 28.459017 6 27.268623 6 24 C 6 20.731377 6.6519921 19.540983 7.3242188 17.990234 C 7.5063161 17.572624 7.7325533 17.409838 8.3066406 17.234375 C 8.8807279 17.058912 9.7405985 17 10.640625 17 L 23.5 17 A 1.50015 1.50015 0 1 0 23.5 14 L 17 14 L 17 10.640625 C 17 9.7405985 17.058912 8.8807279 17.234375 8.3066406 C 17.409838 7.7325533 17.572624 7.5063162 17.990234 7.3242188 C 19.540983 6.6519921 20.731377 6 24 6 z M 20.5 9 A 1.5 1.5 0 0 0 20.5 12 A 1.5 1.5 0 0 0 20.5 9 z M 34 17 L 37.359375 17 C 38.259401 17 39.119272 17.05891 39.693359 17.234375 C 40.267447 17.409838 40.493684 17.572624 40.675781 17.990234 C 41.348008 19.540983 42 20.731377 42 24 C 42 27.268623 41.348008 28.459017 40.675781 30.009766 C 40.493684 30.427376 40.267447 30.590162 39.693359 30.765625 C 39.119272 30.941088 38.259401 31 37.359375 31 L 24.5 31 A 1.50015 1.50015 0 1 0 24.5 34 L 31 34 L 31 37.359375 C 31 38.259401 30.94109 39.119272 30.765625 39.693359 C 30.590162 40.267447 30.427376 40.493684 30.009766 40.675781 C 28.459017 41.348008 27.268623 42 24 42 C 20.731377 42 19.540983 41.348008 17.990234 40.675781 C 17.572624 40.493684 17.409838 40.267447 17.234375 39.693359 C 17.058912 39.119272 17 38.259401 17 37.359375 L 17 29 C 17 27.049938 18.549938 25.5 20.5 25.5 L 27.5 25.5 C 31.071938 25.5 34 22.571938 34 19 L 34 17 z M 27.5 36 A 1.5 1.5 0 0 0 27.5 39 A 1.5 1.5 0 0 0 27.5 36 z"></path>
    </svg>
  );
}

function JavascriptIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* JavaScript icon path */}
    </svg>
  );
}

function LinuxIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Linux icon path */}
    </svg>
  );
}

function TerminalIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Terminal icon path */}
    </svg>
  );
}

function NextJsIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Next.js icon path */}
    </svg>
  );
}

function DjangoIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* Django icon path */}
    </svg>
  );
}

function GsapIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      {/* GSAP icon path */}
    </svg>
  );
}
