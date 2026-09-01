import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import type { ReactNode } from "react";

import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
});

const geistMono = Geist_Mono({
  subsets: ["latin"],
  variable: "--font-geist-mono",
});

const description =
  "Paper.tips — an unofficial field guide to Paper: shortcuts, tips, and gotchas from the build log and docs, arranged like a Paper canvas.";

export const metadata: Metadata = {
  metadataBase: new URL("https://paper.tips"),
  title: "Paper.tips",
  description,
  openGraph: {
    title: "Paper.tips",
    description,
    url: "/",
    siteName: "Paper.tips",
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html lang="en" className={`${inter.variable} ${geistMono.variable}`}>
      <body>{children}</body>
    </html>
  );
}
