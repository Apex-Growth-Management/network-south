"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Solutions", href: "/solutions" },
  { label: "Support", href: "/support" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-white/95 backdrop-blur border-b border-gray-200">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center">
          <Image src="/logo.png" alt="Network South Inc." width={130} height={44} style={{ objectFit: "contain" }} />
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-600 hover:text-gray-900 transition-colors">
              {link.label}
            </Link>
          ))}
          <Link href="/payment" className="text-gray-600 hover:text-gray-900 transition-colors">
            Payment
          </Link>
          <Link href="/support" className="bg-[#CC0000] hover:bg-[#b30000] text-white px-5 py-2 rounded-full transition-colors">
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-gray-600 hover:text-gray-900"
          onClick={() => setOpen(!open)}
          aria-label="Toggle menu"
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {open ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>
      </div>

      {/* Mobile menu */}
      {open && (
        <div className="md:hidden border-t border-gray-200 bg-white px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-gray-600 hover:text-gray-900 transition-colors">
              {link.label}
            </Link>
          ))}
          <Link href="/payment" onClick={() => setOpen(false)} className="text-gray-600 hover:text-gray-900 transition-colors">
            Payment
          </Link>
          <Link href="/support" onClick={() => setOpen(false)} className="bg-[#CC0000] hover:bg-[#b30000] text-white px-5 py-2 rounded-full text-center transition-colors">
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
