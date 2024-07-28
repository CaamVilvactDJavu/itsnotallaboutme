"use client";

import Link from "next/link";
import { useState, useEffect } from "react";

export default function NotesPage() {
  const [notes, setNotes] = useState<string[]>([]);

  useEffect(() => {
    setNotes(["sample", "helloworld"]);
  }, []);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Notes Page</h1>
      <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
        {notes.map((note) => (
          <li
            key={note}
            className="border border-[#050505] border-dashed shadow-md rounded-lg p-4 hover:shadow-lg transition-shadow text-xl"
          >
            <Link href={`/notes/${note}`} className="underline-wavy">
              {note}
            </Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
