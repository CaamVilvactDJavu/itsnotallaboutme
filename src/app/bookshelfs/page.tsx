"use client";
import { useEffect, useState } from "react";

interface Book {
  title: string;
  author: string;
  genre: string;
}

interface GroupedBooks {
  [key: string]: Book[];
}

export default function BookshelfPage() {
  const [bookshelfs, setBookshelfs] = useState<Book[]>([]);

  useEffect(() => {
    async function fetchBookshelfs() {
      try {
        const url = process.env.NEXT_PUBLIC_API_BASE_URL;
        // const url = process.env.NEXT_PUBLIC_API_LOCAL;

        const response = await fetch(`${url}/api/bookshelfs`);

        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const data: Book[] = await response.json();
        setBookshelfs(data);
      } catch (error) {
        console.error("Error fetching note content:", error);
      }
    }
    fetchBookshelfs();
  }, []);

  const symbols = [" ♠ ", " ❤ ", " ♦ ", " ♣ "];

  const groupedBooks: GroupedBooks = bookshelfs.reduce((acc, book) => {
    if (!acc[book.genre]) {
      acc[book.genre] = [];
    }
    acc[book.genre].push(book);
    return acc;
  }, {} as GroupedBooks);

  return (
    <main className="py-4">
      {Object.keys(groupedBooks).map((genre) => (
        <section key={genre}>
          <h2 className="pt-2">{genre}</h2>
          <ul className="space-y-2">
            {groupedBooks[genre].map((book, bookIndex) => (
              <li key={bookIndex}>
                {bookIndex % symbols.length === 0 && <span>{symbols[0]}</span>}
                {bookIndex % symbols.length === 1 && <span>{symbols[1]}</span>}
                {bookIndex % symbols.length === 2 && <span>{symbols[2]}</span>}
                {bookIndex % symbols.length === 3 && <span>{symbols[3]}</span>}
                <strong>{book.title}</strong> by {book.author}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </main>
  );
}
