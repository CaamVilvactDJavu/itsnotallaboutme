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
        <meta charSet="utf-8" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <meta name="description" content={postDescription} />
        <meta property="og:title" content={postTitle} />
        <meta property="og:description" content={postDescription} />
        <meta property="og:image" content={postImage} />
        <meta property="og:url" content={postUrl} />
        <meta property="og:type" content="article" />
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content={postTitle} />
        <meta name="twitter:description" content={postDescription} />
        <meta name="twitter:image" content={postImage} />
        <meta name="twitter:site" content="@CaamVilvact" />
        <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
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
