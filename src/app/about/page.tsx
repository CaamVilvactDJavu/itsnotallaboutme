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
      title: "Al-Qur'an CLI",
      description:
        "A command-line interface to interact with the Al-Qur'an using the API from quran.com.",
      languages: [mdiLanguageRust],
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
        <div className="flex flex-col">
          <a href="https://app.daily.dev/caamvilvact">
            <Image
              src="https://www.codewars.com/users/CaamVilvactDJavu/badges/large?theme=light"
              alt="CodeWars Badge"
              className="w-300 h-300 mb-4"
              width={300}
              height={300}
            />
            <Image
              src="https://api.daily.dev/devcards/v2/vRUs99OBcXAqCpPlgOml4.png?type=default&r=ge5"
              width={345}
              height={200}
              className="w-345 h-200"
              alt="c.a ._. a.m's Dev Card"
            />
          </a>
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
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="rounded-lg p-4 hover:bg-[#1f1f1f] hover:text-[#cccccc]"
            >
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
                    <Icon path={icon} size={1} /> {/* Adjust size as needed */}
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
