import type { Metadata } from "next";
import { JetBrains_Mono } from "next/font/google";
import "./globals.css";
import Navbar from "./navbar";

const jetbrains = JetBrains_Mono({ subsets: ["latin"], weight: "400" });

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
        className={`${jetbrains.className} antialiased ml-auto mr-auto flex flex-col max-w-[80rem] px-4 min-h-screen bg-[#dbd9c2] text-[#050505]`}
      >
        <div className="flex flex-col md:flex-row w-full">
          <Navbar />
          <main className="flex-grow p-4">{children}</main>
        </div>
      </body>
    </html>
  );
}
