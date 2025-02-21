import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import SlideBar from '@/components/SlideBar';

export const metadata: Metadata = {
  title: "前端知识点",
  description: "前端知识点",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        <div className="main">
          <div className="gradient"></div>
        </div>
        <main className="app">
          <SlideBar />
          <div className="w-full h-full">{children}</div>
        </main>
      </body>
    </html>
  );
}
