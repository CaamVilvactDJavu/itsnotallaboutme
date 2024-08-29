"use client";

import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import Head from "next/head";

export default function MemoirPage({
  memoir: initialMemoir,
  filename,
}: {
  memoir: { title: string; content: string };
  filename: string;
}) {
  const [memoir, setMemoir] = useState(initialMemoir);

  const postTitle = memoir.title || "Memoir";
  const postDescription = memoir.content.slice(0, 150) || "Memoir description";
  const postUrl = `https://itsnotallaboutme.shuttleapp.rs/memoirs/${filename}`;
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
