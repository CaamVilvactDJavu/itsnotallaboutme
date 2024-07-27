import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./Navbar";

const inter = JetBrains_Mono({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "itsnotallaboutme",
  description: "",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased ml-auto mr-auto flex flex-col max-w-[80rem] selection:bg-[#f54e1e] px-4 min-h-screen`}
      >
        <div className="flex flex-row w-full">
          <Navbar />
          <main className="flex-grow p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
