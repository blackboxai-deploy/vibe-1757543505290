import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "TaskMama - The Ultimate Productivity App for Moms",
  description: "Balance family, business, and personal tasks with ease. AI-powered task management, shared calendars, meal planning, and business tools - all in one app designed for moms.",
  keywords: "productivity app, mom app, task management, family organizer, business tools, meal planning, AI assistant",
  openGraph: {
    title: "TaskMama - The Ultimate Productivity App for Moms",
    description: "Balance family, business, and personal tasks with ease. AI-powered productivity tools designed specifically for busy moms.",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${inter.className} antialiased bg-white text-gray-900`}>
        {children}
      </body>
    </html>
  );
}