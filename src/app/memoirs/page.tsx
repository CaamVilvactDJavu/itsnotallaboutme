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
    <main className="py-4">
      <div>
        <ul className="space-y-4">
          {memoirs.map((memoir) => (
            <li
              key={memoir.filename}
              className="rounded-lg p-4 hover:bg-[#1f1f1f] hover:text-[#cccccc]"
            >
              <Link href={`/memoirs/${memoir.filename}`} className="font-bold">
                <p className="text-lg mb-2 border-b-2 border-dashed border-[#1f1f1f] hover:bg-#1f1f1f">
                  {memoir.title}
                </p>
                <p className="hover:text-[#cccccc] text-sm line-clamp-2">
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
