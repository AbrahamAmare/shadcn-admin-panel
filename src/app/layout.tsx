import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Sidebar from "@/components/Sidebar";
import Header from "@/components/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} flex items-start justify-between bg-zinc-100 w-screen`}>
        <Sidebar />
        <main className="flex flex-col lg:pl-72">
          <Header />
          <div className="flex-1 pt-20 px-4">
            {children}
          </div>
        </main>
      </body>
    </html>
  );
}
