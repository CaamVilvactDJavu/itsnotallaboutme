import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

async function getMemoirContent(filename: string) {
  // const url = process.env.NEXT_PUBLIC_API_LOCAL;
  const url = process.env.NEXT_PUBLIC_API_BASE_URL;

  try {
    const response = await fetch(`${url}/api/memoirs/${filename}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch note: ${response.statusText}`);
    }

    const memoir = await response.json();
    return memoir;
  } catch (error) {
    console.error("Error fetching note content:", error);
    return { title: "Error", content: "Could not load content." };
  }
}

export async function generateStaticParams() {
  const memoirs = ["entah-siapa-yang-harus-disalahkan", "renungan-malam"];
  return memoirs.map((memoir) => ({ filename: memoir }));
}

export default async function MemoirPage({
  params,
}: {
  params: { filename: string };
}) {
  const memoir = await getMemoirContent(params.filename);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{memoir.title}</h1>
      <div className="prose prose-xl max-w-none space-y-4">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {memoir.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
