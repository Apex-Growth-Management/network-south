import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Make a Payment | Network South, Inc.",
  description: "Securely pay your Network South invoice online. Questions? Call 800.948.9914 or (919) 872-4771.",
  openGraph: {
    title: "Make a Payment | Network South, Inc.",
    url: "https://network-south.com/payment",
  },
  alternates: { canonical: "https://network-south.com/payment" },
};

export default function PaymentLayout({ children }: { children: React.ReactNode }) {
  return children;
}
