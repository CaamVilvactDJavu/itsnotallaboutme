"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

interface Note {
  filename: string;
  title: string;
  date: string;
  content: string;
}

export default function NotesPage() {
  const [notes, setNotes] = useState<Note[]>([]);

  useEffect(() => {
    async function fetchNotes() {
      const url = process.env.NEXT_PUBLIC_API_BASE_URL;

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
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notes Page</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <li
            key={note.filename}
            className="border border-[#050505] border-dashed shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow text-xl"
          >
            <Link href={`/notes/${note.filename}`} className="underline-wavy">
              <h2 className="font-bold">{note.title}</h2>
              <p className="text-sm text-gray-500">{note.date}</p>
              <p>{note.content.substring(0, 100)}...</p>
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
