import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

async function getNoteContent(filename: string) {
  const url =
    process.env.NEXT_PUBLIC_API_LOCAL || process.env.NEXT_PUBLIC_API_BASE_URL;

  try {
    const response = await fetch(`${url}/api/notes/${filename}`);

    if (!response.ok) {
      throw new Error(`Failed to fetch note: ${response.statusText}`);
    }

    const note = await response.json();
    return note;
  } catch (error) {
    console.error("Error fetching note content:", error);
    return { title: "Error", content: "Could not load content." };
  }
}

export async function generateStaticParams() {
  const notes = ["linux"];
  return notes.map((note) => ({ filename: note }));
}

export default async function NotePage({
  params,
}: {
  params: { filename: string };
}) {
  const note = await getNoteContent(params.filename);
  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">{note.title}</h1>
      <div className="prose prose-xl max-w-none">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>
          {note.content}
        </ReactMarkdown>
      </div>
    </div>
  );
}
