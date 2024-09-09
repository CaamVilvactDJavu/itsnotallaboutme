import Link from "next/link";
import React from "react";
import Icon from "@mdi/react";
import {
  mdiLanguagePython,
  mdiLanguageRust,
  mdiLanguageTypescript,
  mdiLanguageJavascript,
} from "@mdi/js";
import Image from "next/image";

export default function About() {
  const languages = [
    { icon: mdiLanguageRust },
    { icon: mdiLanguagePython },
    { icon: mdiLanguageTypescript },
    { icon: mdiLanguageJavascript },
  ];

  const projects = [
    {
      title: "Dialectic Solver",
      description:
        "Dialectic Solver is a repository dedicated to solving challenging coding problems on Codewars. This project aims to solve programming challenges through reasoned analysis, elegant code, and step-by-step refinement of solutions.",
      languages: [mdiLanguageRust],
      image: "/dialectic-solver.jpeg",
    },
    {
      title: "Eudaimonia Files",
      description:
        "Eudaimonia Files is a simple, efficient, and user-friendly file manager built to provide an intuitive experience for organizing, browsing, and managing files on your system. It focuses on offering essential file operations with a clean and minimalistic interface.",
      languages: [mdiLanguageRust],
      image: "/eudaimonia-files.jpeg",
    },
    {
      title: "Memoir",
      description:
        "Memoir 'メモワール' is a website where I have space to express my complaints. This site uses Next.js and Sanity.",
      languages: [mdiLanguageTypescript],
      link: "https://memo-ir.vercel.app",
    },
    {
      title: "Pootoforio",
      description:
        "An interactive personal portfolio website. This website showcases my projects in Japanese style. I'm using GSAP and Framer Motion for animated text and transitions.",
      languages: [mdiLanguageTypescript],
      link: "https://pootoforio.vercel.app",
    },
    {
      title: "Michie Only",
      description:
        "Fan platform for JKT48 members with profiles, Showroom integration, and live stream. Uses Rust for backend and SHOWROOM API.",
      languages: [mdiLanguageRust, mdiLanguageTypescript],
      link: "https://michie-only.vercel.app",
    },
    {
      title: "Kostera Web Application",
      description:
        "A web application that displays boarding houses located near ITERA, can create, edit, update and delete boarding houses",
      languages: [mdiLanguagePython, mdiLanguageTypescript],
    },
    {
      title:
        "Secure Text Messages in Images by Integrating AES Cryptography (CBC) and DCT Steganography Method",
      description:
        "A task focused on enhancing the security of text messages by embedding them within images using AES cryptography and DCT steganography techniques.",
      languages: [mdiLanguagePython],
    },
    {
      title: "BMKG Atomic Clock",
      description:
        "A website that displays atomic clocks taken from the BMKG atomic clock website.",
      languages: [mdiLanguagePython, mdiLanguageJavascript],
    },
    {
      title: "Simple Mobile Application",
      description:
        "A basic mobile application designed with Python and TypeScript, offering core functionalities for mobile users.",
      languages: [mdiLanguagePython, mdiLanguageTypescript],
    },
    {
      title: "Space Battle",
      description:
        "A project that explores game development with Python, featuring a space-themed battle game.",
      languages: [mdiLanguagePython],
    },
  ];

  return (
    <main className="py-4">
      <section className="mb-6">
        <h2 className="text-2xl"># Platfrom Badge</h2>
        <div className="flex flex-col gap-6">
          <Image
            src="https://api.daily.dev/devcards/v2/vRUs99OBcXAqCpPlgOml4.png?type=default&r=ge5"
            width={345}
            height={200}
            className="w-345 h-200"
            alt="c.a ._. a.m's Dev Card"
          />
          <Image
            src="https://www.codewars.com/users/CaamVilvactDJavu/badges/large?theme=light"
            alt="CodeWars Badge"
            className="w-300 h-300"
            width={300}
            height={300}
          />
          <Image
            src="https://wakatime.com/share/@ca_am/08eca406-cbc9-4867-a385-3de33f121e8e.svg"
            alt="Wakatime"
            width={800}
            height={800}
          />
          <Image
            src="https://wakatime.com/share/@ca_am/987d9ce5-308b-4c9f-8c8e-23c6323816f9.svg"
            alt="Wakatime"
            width={800}
            height={800}
          />
        </div>
      </section>

      <section className="prose prose-lg">
        <h2 className="text-2xl"># Programming Languages</h2>
        <div className="flex gap-6 my-6">
          {languages.map((language, index) => (
            <span
              key={index}
              className="px-2 py-1 border-[#1f1f1f] border-dashed border-2 shadow-lg rounded-xl hover:bg-[#1f1f1f] hover:text-[#cccccc]"
            >
              {language.icon && <Icon path={language.icon} size={2} />}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2 className="text-2xl"># Projects</h2>
        <div className="grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 gap-6">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg p-4 hover:bg-[#1f1f1f] hover:text-[#cccccc]"
            >
              {project.image && (
                <Image
                  src={project.image}
                  alt={`${project.title} Image`}
                  width={1000}
                  height={1000}
                  className="w-auto h-auto mb-4 rounded-lg"
                />
              )}
              <Link
                href={project.link || "#"}
                className="font-bold"
                target={project.link ? "_blank" : ""}
                rel="noopener noreferrer"
              >
                <h1 className="text-lg mb-2 border-b-2 border-dashed border-[#1f1f1f] hover:bg-#1f1f1f">
                  {project.title}
                </h1>
              </Link>
              <p className="font-bold hover:text-[#cccccc] text-sm line-clamp-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-4">
                {project.languages.map((icon, languageIndex) => (
                  <span
                    key={languageIndex}
                    className="mt-2 border-[#1f1f1f] border-dashed border-2 shadow-lg hover:bg-[#1f1f1f] hover:text-[#cccccc]"
                  >
                    <Icon path={icon} size={1} />
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
    </main>
  );
}
