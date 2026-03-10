import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Get a Free Consultation | Network South, Inc.",
  description: "Contact Network South for a free, no-obligation consultation. Our telecom specialists serve businesses across Raleigh-Durham, NC — 24/7 on-call support.",
  openGraph: {
    title: "Get a Free Consultation | Network South, Inc.",
    description: "Request a free consultation with a Network South telecom specialist. We serve businesses across Raleigh-Durham, NC.",
    url: "https://network-south.com/support",
  },
  alternates: { canonical: "https://network-south.com/support" },
};

export default function SupportLayout({ children }: { children: React.ReactNode }) {
  return children;
}
