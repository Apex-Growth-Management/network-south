import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Solutions | Network South, Inc.",
  description: "VoIP phone systems, cybersecurity, network infrastructure, video surveillance, access control, and managed IT services for businesses in Raleigh-Durham, NC.",
  openGraph: {
    title: "Business Technology Solutions | Network South, Inc.",
    description: "Complete telecom and IT solutions for Raleigh-Durham businesses — from VoIP to cybersecurity to managed IT.",
    url: "https://network-south.com/solutions",
  },
  alternates: { canonical: "https://network-south.com/solutions" },
};

export default function SolutionsLayout({ children }: { children: React.ReactNode }) {
  return children;
}
