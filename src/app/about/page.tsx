// src/app/about.tsx
export default function About() {
  const skills = [
    "Rust",
    "Python",
    "JavaScript",
    "Linux",
    "Terminal",
    "Next.js",
    "Django",
    "GSAP",
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
    },
    {
      title: "Potoforio",
      description:
        "An interactive personal portfolio website. This website showcases my projects in Japanese style. I'm using GSAP and Framer Motion for animated text and transitions.",
      skills: ["TypeScript", "Tailwind CSS", "Framer Motion", "GSAP"],
    },
    {
      title: "Michie Only",
      description:
        "Fan platform for JKT48 members with profiles, Showroom integration, and live stream. Uses Rust for backend and SHOWROOM API.",
      skills: ["Rust"],
    },
    {
      title: "Kostera Web Application",
      description:
        "A command-line interface to interact with the Al-Qur'an using the API from quran.com.",
      skills: ["Python", "TypeScript", "JavaScript", "HTML"],
    },
    {
      title:
        "Secure Text Messages in Images by Integrating AES Cryptography (CBC) and DCT Steganography Method",
      description:
        "A command-line interface to interact with the Al-Qur'an using the API from quran.com.",
      skills: [],
    },
  ];

  return (
    <main className="p-4">
      <div>
        <h1 className="text-3xl font-bold">About</h1>
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Skills</h2>
          <p className="text-red-500 mt-2">Disclaimer!</p>
          <p>
            I dont know the right title for this section, but I just want to
            show the programming languages and technology skills that I have
            tried. One more time, Ive only ever tried them.
          </p>
          <div className="flex flex-wrap mt-4 space-x-2">
            {skills.map((skill, index) => (
              <span key={index} className="bg-gray-200 rounded px-2 py-1">
                {skill}
              </span>
            ))}
          </div>
        </section>
        <section className="mt-8">
          <h2 className="text-2xl font-bold">Projects</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 mt-4">
            {projects.map((project, index) => (
              <div key={index} className="border p-4 rounded">
                <h3 className="text-xl font-bold">{project.title}</h3>
                <p>{project.description}</p>
                <div className="mt-2 flex flex-wrap space-x-2">
                  {project.skills.map((skill, skillIndex) => (
                    <span
                      key={skillIndex}
                      className="bg-gray-200 rounded px-2 py-1"
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
