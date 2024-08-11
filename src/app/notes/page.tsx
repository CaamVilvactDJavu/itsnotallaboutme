"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface Note {
  filename: string;
  title: string;
  content: string;
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function fetchNotes() {
      const url =
        process.env.NEXT_PUBLIC_API_LOCAL ||
        process.env.NEXT_PUBLIC_API_BASE_URL;

      try {
        const response = await fetch(`${url}/api/notes`);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Note[] = await response.json();
        setNotes(data);
      } catch (error) {
        console.error("Error fetching notes:", error);
      }
    }

    fetchNotes();
  }, []);

  return (
    <main className="mx-auto p-4">
      <div>
        <ul className="space-y-4">
          {notes.map((note) => (
            <li
              key={note.filename}
              className="shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow"
            >
              <Link href={`/notes/${note.filename}`} className="font-bold">
                <h2 className="text-lg mb-2 border-b-2 border-dashed border-[#1f1f1f]">
                  {note.title}
                </h2>
                <p className="text-gray-700 text-sm line-clamp-2">
                  {note.content}
                </p>
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </main>
  );
}
