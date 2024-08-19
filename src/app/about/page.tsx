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
        "▸ A command-line interface to interact with the Al-Qur'an using the API from quran.com.",
      languages: [mdiLanguageRust],
    },
    {
      title: "Memoir",
      description:
        "▸ Memoir 'メモワール' is a website where I have space to express my complaints. This site uses Next.js and Sanity.",
      languages: [mdiLanguageTypescript],
      link: "https://memo-ir.vercel.app",
    },
    {
      title: "Pootoforio",
      description:
        "▸ An interactive personal portfolio website. This website showcases my projects in Japanese style. I'm using GSAP and Framer Motion for animated text and transitions.",
      languages: [mdiLanguageTypescript],
      link: "https://pootoforio.vercel.app",
    },
    {
      title: "Michie Only",
      description:
        "▸ Fan platform for JKT48 members with profiles, Showroom integration, and live stream. Uses Rust for backend and SHOWROOM API.",
      languages: [mdiLanguageRust, mdiLanguageTypescript],
      link: "https://michie-only.vercel.app",
    },
    {
      title: "Kostera Web Application",
      description:
        "▸ A command-line interface to interact with the Al-Qur'an using the API from quran.com.",
      languages: [mdiLanguagePython, mdiLanguageTypescript],
    },
    {
      title:
        "Secure Text Messages in Images by Integrating AES Cryptography (CBC) and DCT Steganography Method",
      description:
        "▸ A command-line interface to interact with the Al-Qur'an using the API from quran.com.",
      languages: [mdiLanguagePython],
    },
    {
      title: "bmkg atomic clock",
      description:
        "▸ A command-line interface to interact with the Al-Qur'an using the API from quran.com.",
      languages: [mdiLanguagePython, mdiLanguageJavascript],
    },
    {
      title: "Simple Mobile Application",
      description:
        "▸ A command-line interface to interact with the Al-Qur'an using the API from quran.com.",
      languages: [mdiLanguagePython, mdiLanguageTypescript],
    },
    {
      title: "Space Battle",
      description:
        "▸ A command-line interface to interact with the Al-Qur'an using the API from quran.com.",
      languages: [mdiLanguagePython],
    },
  ];

  return (
    <main className="mx-auto p-4">
      <section className="mb-6">
        <h2>Platfrom Badge</h2>
        <div className="flex flex-col gap-4 justify-center items-center">
          <a href="https://app.daily.dev/caamvilvact">
            <Image
              src="https://api.daily.dev/devcards/v2/vRUs99OBcXAqCpPlgOml4.png?type=wide&r=yaz"
              className="w-auto h-auto"
              width={100}
              height={100}
              alt="c.a ._. a.m's Dev Card"
            />
          </a>
          <Image
            src="https://www.codewars.com/users/CaamVilvactDJavu/badges/large?theme=light"
            alt="CodeWars Badge"
            className="w-auto h-auto"
            width={100}
            height={100}
          />
        </div>
      </section>

      <section className="prose prose-lg">
        <h2>Programming Languages</h2>
        <div className="flex gap-2 mb-6">
          {languages.map((language, index) => (
            <span key={index} className="px-2 py-1">
              {language.icon && <Icon path={language.icon} size={2} />}
            </span>
          ))}
        </div>
      </section>

      <section className="mt-8">
        <h2>Projects</h2>
        <div className="space-y-4">
          {projects.map((project, index) => (
            <div
              key={index}
              className="shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <Link
                href={project.link || "#"}
                className="font-bold"
                target={project.link ? "_blank" : ""}
                rel="noopener noreferrer"
              >
                <h3 className="text-lg mb-2 border-b-2 border-dashed border-[#1f1f1f]">
                  {project.title}
                </h3>
              </Link>
              <p className="text-gray-700 text-sm line-clamp-2 mb-2">
                {project.description}
              </p>
              <div className="flex flex-wrap gap-2">
                {project.languages.map((icon, languageIndex) => (
                  <span key={languageIndex} className="px-2 py-1">
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
