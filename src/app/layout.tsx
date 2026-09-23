import type { Metadata, Viewport } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { ThemeProvider } from "@/context/ThemeContext";
import { SoundProvider } from "@/context/SoundContext";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Kriti Rawani | Full Stack Developer & AI Systems Engineer",
  description: "Personal portfolio of Kriti Rawani, Full-Stack Developer & AI Engineer specializing in React.js, Next.js 15, FastAPI, Node.js, Real-Time AI Voice Agents (Whisper STT, Azure TTS), MongoDB, and AWS cloud deployments.",
  keywords: [
    "Kriti Rawani",
    "Full Stack Developer",
    "AI Engineer",
    "FastAPI",
    "React Developer",
    "Next.js Portfolio",
    "OpenAI Whisper",
    "Microsoft TTS",
    "WebSockets",
    "Node.js",
    "AWS",
    "Python Developer",
    "Bangalore Developer"
  ],
  authors: [{ name: "Kriti Rawani" }],
  creator: "Kriti Rawani",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://kritirawani.dev",
    title: "Kriti Rawani | Full Stack Developer & AI Engineer",
    description: "Full Stack Developer specializing in FastAPI, React, Node.js, and Real-Time AI Voice Systems.",
    siteName: "Kriti Rawani Portfolio",
  },
  twitter: {
    card: "summary_large_image",
    title: "Kriti Rawani | Full Stack Developer & AI Engineer",
    description: "Explore the portfolio of Kriti Rawani featuring real-time AI voice agents, full-stack financial platforms, and cloud microservices.",
  },
  icons: {
    icon: "/favicon.ico",
  },
};

export const viewport: Viewport = {
  themeColor: "#0F172A",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${geistSans.variable} ${geistMono.variable} dark scroll-smooth`}>
      <body className="min-h-screen antialiased selection:bg-indigo-500 selection:text-white flex flex-col font-sans">
        <ThemeProvider>
          <SoundProvider>
            {children}
          </SoundProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
