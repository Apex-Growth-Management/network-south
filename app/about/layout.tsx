import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About Us | Network South, Inc.",
  description: "Learn about Network South, Inc. — Raleigh-Durham's trusted telecom and IT partner since 1994. 30+ years serving businesses across Wake and Durham counties.",
  openGraph: {
    title: "About Us | Network South, Inc.",
    description: "30+ years serving businesses across Raleigh-Durham with VoIP, managed IT, network infrastructure, and security solutions.",
    url: "https://network-south.com/about",
  },
  alternates: { canonical: "https://network-south.com/about" },
};

export default function AboutLayout({ children }: { children: React.ReactNode }) {
  return children;
}
