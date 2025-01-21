import { memoirs } from "../../../data/memoirsList";
import MemoirPage from "./MemoirPage";

async function getMemoirContent(filename: string) {
  // const url = process.env.NEXT_PUBLIC_API_LOCAL;
  const url = process.env.NEXT_PUBLIC_API_BASE_URL;

  try {
    const fullUrl = `${url}/api/memoirs/${filename}`;
    console.log("Fetching memoir content from:", fullUrl);

    const response = await fetch(fullUrl, {
      mode: "cors",
      next: { revalidate: 60 },
    });
    if (!response.ok) {
      console.error(`Response not ok: ${response.statusText}`);
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

export default async function Page({
  params,
}: {
  params: { filename: string };
}) {
  const memoir = await getMemoirContent(params.filename);
  return <MemoirPage memoir={memoir} filename={params.filename} />;
}
