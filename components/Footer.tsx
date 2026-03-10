import Link from "next/link";
import UptimeBadge from "@/components/UptimeBadge";

export default function Footer() {
  return (
    <footer className="border-t border-gray-200 py-10 px-6 bg-white">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm">
        <div>
          <span className="text-[#CC0000] font-semibold">Network</span>
          <span className="text-gray-600"> South, Inc.</span>
          <span className="ml-3">© {new Date().getFullYear()} All rights reserved.</span>
        </div>
        <div className="flex flex-wrap justify-center gap-x-6 gap-y-2">
          <span>457 Park Ave, Youngsville, NC 27596</span>
          <a href="tel:8009489914" className="hover:text-gray-600 transition-colors">800.948.9914</a>
          <a href="tel:9198724771" className="hover:text-gray-600 transition-colors">(919) 872-4771</a>
        </div>
        <div className="flex items-center gap-6">
          <Link href="/support" className="hover:text-gray-600 transition-colors">Support</Link>
          <Link href="/payment" className="hover:text-gray-600 transition-colors">Payment</Link>
          <UptimeBadge />
        </div>
      </div>
    </footer>
  );
}
