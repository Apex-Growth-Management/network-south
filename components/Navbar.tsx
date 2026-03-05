"use client";

import { useState } from "react";
import Link from "next/link";

const navLinks = [
  { label: "About", href: "/about" },
  { label: "Industries", href: "/industries" },
  { label: "Solutions", href: "/solutions" },
  { label: "Support", href: "/support" },
];

export default function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-[#080c14]/95 backdrop-blur border-b border-white/10">
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between h-16">
        <Link href="/" className="flex items-center gap-2">
          <span className="text-xl font-bold tracking-tight">
            <span className="text-blue-400">Network</span>
            <span className="text-white"> South</span>
            <span className="text-white/40 text-sm font-normal ml-1">Inc.</span>
          </span>
        </Link>

        {/* Desktop nav */}
        <div className="hidden md:flex items-center gap-8 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-white/60 hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
          <Link
            href="/payment"
            className="text-white/60 hover:text-white transition-colors"
          >
            Payment
          </Link>
          <Link
            href="/support"
            className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full transition-colors"
          >
            Get a Quote
          </Link>
        </div>

        {/* Mobile hamburger */}
        <button
          className="md:hidden text-white/70 hover:text-white"
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
        <div className="md:hidden border-t border-white/10 bg-[#080c14] px-6 py-4 flex flex-col gap-4 text-sm font-medium">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setOpen(false)} className="text-white/60 hover:text-white transition-colors">
              {link.label}
            </Link>
          ))}
          <Link href="/payment" onClick={() => setOpen(false)} className="text-white/60 hover:text-white transition-colors">
            Payment
          </Link>
          <Link href="/support" onClick={() => setOpen(false)} className="bg-blue-600 hover:bg-blue-500 text-white px-5 py-2 rounded-full text-center transition-colors">
            Get a Quote
          </Link>
        </div>
      )}
    </nav>
  );
}
