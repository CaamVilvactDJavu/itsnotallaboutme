import React from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { Metadata } from "next";

async function getNoteContent(filename: string): Promise<string> {
  const url =
    process.env.NEXT_PUBLIC_API_BASE_URL || process.env.NEXT_PUBLIC_API_LOCAL;
  console.log(`Fetching note content from: ${url}/api/notes/${filename}`);
  try {
    const response = await fetch(`${url}/api/notes/${filename}`);
    if (!response.ok) {
      throw new Error("Note not found");
    }
    const text = await response.text();
    console.log("Fetched content:", text);
    return text;
  } catch (error) {
    console.error("Error fetching note content:", error);
    return "Note content could not be loaded.";
  }
}

export async function generateStaticParams() {
  const notes = ["sample", "helloworld"];
  return notes.map((note) => ({ filename: note }));
}

export async function generateMetadata({
  params,
}: {
  params: { filename: string };
}): Promise<Metadata> {
  return {
    title: `${params.filename}`,
  };
}

export default async function NotePage({
  params,
}: {
  params: { filename: string };
}) {
  const content = await getNoteContent(params.filename);

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{params.filename}</h1>
      <div className="prose prose-xl max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{content}</ReactMarkdown>
      </div>
    </div>
  );
}
