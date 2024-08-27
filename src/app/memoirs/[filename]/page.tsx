"use client";

import { useState, useEffect } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { memoirs } from "../../../data/memoirsList";
import Head from "next/head";

async function getMemoirContent(filename: string) {
  // const url = process.env.NEXT_PUBLIC_API_LOCAL;
  const url = process.env.NEXT_PUBLIC_API_BASE_URL;

  try {
    const response = await fetch(`${url}/api/memoirs/${filename}`, {
      next: { revalidate: 60 },
    });

    if (!response.ok) {
      throw new Error(`Failed to fetch memoir: ${response.statusText}`);
    }

    const memoir = await response.json();
    return memoir;
  } catch (error) {
    console.error("Error fetching memoir content:", error);
    return { title: "Error", content: "Could not load content." };
  }
}

export async function generateStaticParams() {
  return memoirs.map((memoir) => ({ filename: memoir }));
}

export const revalidate = 60;

export default function MemoirPage({
  params,
}: {
  params: { filename: string };
}) {
  const [memoir, setMemoir] = useState({ title: "", content: "" });
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    async function fetchMemoir() {
      setIsLoading(true);
      const fetchedMemoir = await getMemoirContent(params.filename);
      setMemoir(fetchedMemoir);
      setIsLoading(false);
    }
    fetchMemoir();
  }, [params.filename]);

  if (isLoading) {
    return <div>Loading...</div>;
  }

  const postTitle = memoir.title || "Memoir";
  const postDescription = memoir.content.slice(0, 150) || "Memoir description";
  const postUrl = `https://itsnotallaboutme.shuttleapp.rs/memoirs/${params.filename}`;
  const postImage = "/icon.png";

  return (
    <>
      <Head>
        <title>{postTitle}</title>
        <meta name="format-detection" content="telephone=no" />
        <meta name="theme-color" content="#0f1e36" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:image" content={postImage} />
        <meta name="twitter:site" content="@CaamVilvact" />
        <meta name="twitter:url" content={postUrl} />
        <meta name="twitter:description" content={postDescription} />
        <meta name="viewport" content="width=375" />
        <meta property="og:url" content={postUrl} />
        <meta property="og:type" content="article" />
        <meta name="description" content={postDescription} />
        <meta property="og:description" content={postDescription} />
        <meta property="og:title" content={postTitle} />
        <meta property="og:image" content={postImage} />
      </Head>
      <main className="py-4">
        <h1 className="text-2xl font-bold mb-4">{memoir.title}</h1>
        <div className="text-justify prose-sm sm:prose-lg md:prose-md xl:prose-lg max-w-none space-y-4">
          <ReactMarkdown remarkPlugins={[remarkGfm]}>
            {memoir.content}
          </ReactMarkdown>
        </div>
      </main>
    </>
  );
}
