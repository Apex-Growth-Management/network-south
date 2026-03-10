import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Industries We Serve | Network South, Inc.",
  description: "Network South provides telecom and IT solutions for healthcare, legal, automotive, education, transportation, technology, and retail businesses in North Carolina.",
  openGraph: {
    title: "Industries Served | Network South, Inc.",
    description: "Specialized telecom and IT solutions for 7+ industries across Raleigh-Durham, NC.",
    url: "https://network-south.com/industries",
  },
  alternates: { canonical: "https://network-south.com/industries" },
};

export default function IndustriesLayout({ children }: { children: React.ReactNode }) {
  return children;
}
