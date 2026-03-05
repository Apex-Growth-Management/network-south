import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Network South, Inc. | Business Communications & Security",
  description: "Raleigh-Durham's foremost telecommunications partner. VoIP, managed IT, network infrastructure, video surveillance, and cybersecurity for businesses since 1994.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-[#080c14] text-white`}>
        <Navbar />
        {children}
      </body>
    </html>
  );
}
