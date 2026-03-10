import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Free Technology Assessment | Network South, Inc.",
  description: "Get a free technology assessment for your business. Our telecom specialists will evaluate your current communications, network, and security infrastructure — no obligation.",
  openGraph: {
    title: "Free Technology Assessment | Network South, Inc.",
    description: "Get a free technology assessment for your business. Our telecom specialists will evaluate your current communications, network, and security infrastructure — no obligation.",
    url: "https://network-south.com/audit",
  },
  alternates: {
    canonical: "https://network-south.com/audit",
  },
};

export default function AuditLayout({ children }: { children: React.ReactNode }) {
  return children;
}
