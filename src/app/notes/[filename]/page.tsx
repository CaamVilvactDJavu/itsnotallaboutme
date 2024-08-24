import Image from "next/image";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";

async function getNoteContent(filename: string) {
  const url = process.env.NEXT_PUBLIC_API_LOCAL;
  // const url = process.env.NEXT_PUBLIC_API_BASE_URL;

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
  const notes = ["dotfiles"];
  return notes.map((note) => ({ filename: note }));
}

export default async function NotePage({
  params,
}: {
  params: { filename: string };
}) {
  const note = await getNoteContent(params.filename);
  return (
    <main className="py-4">
      <h1 className="text-2xl font-bold mb-4">{note.title}</h1>
      <div className="text-justify  prose-sm sm:prose-lg md:prose-md xl:prose-lg max-w-none space-y-4">
        <ReactMarkdown
          remarkPlugins={[remarkGfm]}
          components={{
            img: ({ node, ...props }) => (
              <Image
                {...props}
                alt={props.alt || "Image"}
                src={props.src as string}
                width={600}
                height={400}
                className="rounded-md"
                layout="responsive"
              />
            ),
          }}
        >
          {note.content}
        </ReactMarkdown>
      </div>
    </main>
  );
}
