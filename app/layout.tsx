import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import ScrollProgress from "@/components/ScrollProgress";
import SmoothScroll from "@/components/SmoothScroll";
import PageTransition from "@/components/PageTransition";
import StickyCTA from "@/components/StickyCTA";
import CustomCursor from "@/components/CustomCursor";
import LocalBusinessSchema from "@/components/LocalBusinessSchema";
import { SanityLive } from "@/sanity/lib/live";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Network South, Inc. | Business Communications & Security",
  description: "Raleigh-Durham's foremost telecommunications partner. VoIP, managed IT, network infrastructure, video surveillance, and cybersecurity for businesses since 1994.",
  openGraph: {
    title: "Network South, Inc. | Business Communications & Security",
    description: "Raleigh-Durham's foremost telecommunications partner. VoIP, managed IT, network infrastructure, video surveillance, and cybersecurity for businesses since 1994.",
    url: "https://network-south.com",
    siteName: "Network South, Inc.",
    locale: "en_US",
    type: "website",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} antialiased bg-white text-gray-900`}>
        <LocalBusinessSchema />
        <CustomCursor />
        <SmoothScroll>
          <ScrollProgress />
          <Navbar />
          <PageTransition>
            {children}
          </PageTransition>
          <StickyCTA />
          <SanityLive />
        </SmoothScroll>
      </body>
    </html>
  );
}
