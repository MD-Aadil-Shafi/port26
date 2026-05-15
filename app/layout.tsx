import type { Metadata, Viewport } from "next";
import { Inter, JetBrains_Mono } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-sans",
  subsets: ["latin"],
});

const jetbrains = JetBrains_Mono({
  variable: "--font-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Aadil Shafi — Senior Software Engineer",
  description:
    "Portfolio of Aadil Shafi, a senior software engineer with 5+ years of experience building scalable products with React, Next.js, Node.js, Express, FastAPI, MongoDB, Postgres, AWS, Docker, Python, JavaScript and TypeScript.",
  keywords: [
    "Software Engineer",
    "React",
    "Next.js",
    "Node.js",
    "Express",
    "AWS",
    "Docker",
    "FastAPI",
    "Python",
    "TypeScript",
    "JavaScript",
    "Portfolio",
    "Full Stack",
  ],
  authors: [{ name: "Mohd Aadil Shafi" }],
  openGraph: {
    title: "Aadil Shafi — Senior Software Engineer",
    description:
      "5+ years building production-grade web apps with React, Next.js, Node.js, and Python.",
    type: "website",
  },
};

export const viewport: Viewport = {
  themeColor: "#05060a",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${jetbrains.variable} h-full antialiased scroll-smooth`}
    >
      <body className="min-h-full bg-[#05060a] text-zinc-200 font-sans selection:bg-fuchsia-500/30 selection:text-white overflow-x-hidden">
        {children}
      </body>
    </html>
  );
}
