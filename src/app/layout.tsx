import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Warp Overlay - Interactive Animated Overlay",
  description: "An interactive overlay that smoothly expands and transitions between states with natural motion design. Experience fluid animations and responsive interactions.",
  keywords: ["warp overlay", "interactive animation", "motion design", "framer motion", "next.js", "react"],
  openGraph: {
    title: "Warp Overlay - Interactive Animated Overlay",
    description: "An interactive overlay that smoothly expands and transitions between states with natural motion design.",
    type: "website",
    url: "https://warp-overlay.vercel.app",
    siteName: "Warp Overlay",
  },
  twitter: {
    card: "summary_large_image",
    title: "Warp Overlay - Interactive Animated Overlay",
    description: "An interactive overlay that smoothly expands and transitions between states with natural motion design.",
  }
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-svh grid`}
      >
        {children}
      </body>
    </html>
  );
}
