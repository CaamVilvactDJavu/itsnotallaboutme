import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: "400" });

export const metadata: Metadata = {
  title: "itsnotallaboutme",
  description: "",
  icons: "/icon.png",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <link rel="icon" href="/icon.png" type="image/png" sizes="32x32" />
      <body
        className={`${jetbrains.className} antialiased ml-auto mr-auto flex flex-col max-w-[80rem] px-4 min-h-screen bg-[#cccccc] text-[#1f1f1f] border-[#1f1f1f] border-dashed border-r border-l selection:bg-[#eae7de]`}
      >
        <div className="flex flex-col md:flex-row w-full">
          <Navbar />
          <main className="flex-grow p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
