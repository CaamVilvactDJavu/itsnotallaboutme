"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface Memoir {
  filename: string;
  title: string;
  content: string;
}

export default function MemoirPage() {
  const [memoirs, setMemoirs] = useState<Memoir[]>([]);

  useEffect(() => {
    async function fetchMemoirs() {
      // const url = process.env.NEXT_PUBLIC_API_LOCAL;
      const url = process.env.NEXT_PUBLIC_API_BASE_URL;

      try {
        const response = await fetch(`${url}/api/memoirs`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Memoir[] = await response.json();
        setMemoirs(data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    }

    fetchMemoirs();
  }, []);

  return (
    <main className="mx-auto p-4">
      <div>
        <ul className="space-y-4">
          {memoirs.map((memoir) => (
            <li
              key={memoir.filename}
              className="shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <Link href={`/memoirs/${memoir.filename}`} className="font-bold">
                <h2 className="text-lg mb-2 border-b-2 border-dashed border-[#1f1f1f]">
                  {memoir.title}
                </h2>
                <p className="text-gray-700 text-sm line-clamp-2">
                  {memoir.content}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
