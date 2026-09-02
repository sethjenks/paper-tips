import type { Metadata } from "next";
import { Geist_Mono, Inter } from "next/font/google";
import type { ReactNode } from "react";

import { IconSprite } from "../components/IconSprite";

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
  title: {
    default: "Paper.tips",
    template: "%s · Paper.tips",
  },
  description,
  openGraph: {
    title: "Paper.tips",
    description,
    url: "/",
    siteName: "Paper.tips",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Paper.tips",
    description,
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({ children }: Readonly<{ children: ReactNode }>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${geistMono.variable}`}
      data-scroll-behavior="smooth"
    >
      <body>
        <IconSprite />
        {children}
      </body>
    </html>
  );
}
