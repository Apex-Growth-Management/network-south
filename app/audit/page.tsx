"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Phone, Network, Shield, Camera, Monitor, KeyRound, CheckCircle, XCircle, AlertTriangle, Zap } from "lucide-react";
import Footer from "@/components/Footer";

const assessmentChecks = [
  {
    icon: Phone,
    title: "Phone System Evaluation",
    desc: "We assess your current phone system for cost efficiency, features, reliability, and scalability.",
    flags: ["Outdated PBX or analog systems", "High monthly carrier bills", "Missing features like voicemail-to-email or auto-attendant"],
  },
  {
    icon: Network,
    title: "Network Infrastructure Review",
    desc: "We review your cabling, switches, routers, and Wi-Fi to identify bottlenecks and vulnerabilities.",
    flags: ["Slow or unreliable internet connectivity", "Outdated network hardware", "Poor Wi-Fi coverage or dead zones"],
  },
  {
    icon: Shield,
    title: "Cybersecurity Assessment",
    desc: "We identify security gaps in your current setup — firewalls, access policies, and threat exposure.",
    flags: ["No managed firewall in place", "Lack of multi-factor authentication", "No endpoint security monitoring"],
  },
  {
    icon: Camera,
    title: "Surveillance & Access Control Audit",
    desc: "We evaluate your physical security — cameras, DVR/NVR systems, and door access control.",
    flags: ["Outdated analog cameras with low resolution", "No remote monitoring capability", "Unsecured entry points"],
  },
];

const commonIssues = [
  { icon: XCircle, color: "text-red-500", text: "Outdated phone systems costing 3–5× more than modern VoIP" },
  { icon: XCircle, color: "text-red-500", text: "Network infrastructure not sized for current staff or bandwidth" },
  { icon: AlertTriangle, color: "text-amber-500", text: "No centralized IT management or monitoring" },
  { icon: AlertTriangle, color: "text-amber-500", text: "Security cameras that can't be accessed remotely" },
  { icon: CheckCircle, color: "text-green-500", text: "After assessment: average 30% reduction in telecom costs" },
  { icon: CheckCircle, color: "text-green-500", text: "After assessment: unified communications on a single platform" },
];

export default function Audit() {
  const [form, setForm] = useState({ name: "", company: "", email: "", phone: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, service: "FREE_ASSESSMENT", message: "Requested a Free Technology Assessment via /audit page." }),
    }).catch(() => {});
    setLoading(false);
    setSubmitted(true);
  }

  return (
    <main className="bg-white text-gray-900 pt-16">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80&fit=crop"
          alt="Network infrastructure"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 grid-overlay opacity-30" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <div className="inline-flex items-center gap-2 bg-[#CC0000]/20 border border-[#CC0000]/30 text-red-300 text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <Zap className="w-3.5 h-3.5" />
            No cost. No obligation.
          </div>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl leading-tight">
            Free Technology<br />
            <span className="text-[#CC0000]">Assessment</span>
          </h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed mb-10">
            Our telecom specialists will evaluate your current communications, network, and security infrastructure — and show you exactly where you can save money and improve performance.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <a href="#request" className="bg-[#CC0000] hover:bg-[#b30000] text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-red-900/30 text-center">
              Request Your Assessment
            </a>
            <a href="tel:8009489914" className="border border-white/30 hover:border-white/60 hover:bg-white/10 text-white/80 hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 text-center">
              Call 800.948.9914
            </a>
          </div>
        </div>
      </section>

      {/* ── What We Assess ────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#CC0000] text-sm font-semibold tracking-widest uppercase mb-3">What We Evaluate</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">A Complete Technology Review</h2>
            <p className="text-gray-500 text-lg max-w-2xl mx-auto">We go deep on every layer of your business technology — from the phones on your desks to the security on your doors.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {assessmentChecks.map(({ icon: Icon, title, desc, flags }) => (
              <div key={title} className="bg-gray-50 border border-gray-200 rounded-2xl p-8 hover:border-[#CC0000]/30 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 group">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-5 group-hover:border-[#CC0000]/30 group-hover:bg-red-50 transition-all shadow-sm">
                  <Icon className="w-5 h-5 text-[#CC0000]" />
                </div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#CC0000] transition-colors">{title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed mb-4">{desc}</p>
                <ul className="space-y-2">
                  {flags.map((flag) => (
                    <li key={flag} className="flex items-start gap-2 text-sm text-gray-400">
                      <XCircle className="w-4 h-4 text-red-400 shrink-0 mt-0.5" />
                      {flag}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Common Issues ──────────────────────────────────────────── */}
      <section className="py-20 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#CC0000] text-sm font-semibold tracking-widest uppercase mb-3">What We Find</p>
              <h2 className="text-3xl md:text-4xl font-bold mb-6">Most Businesses Are Overpaying or Underprotected</h2>
              <p className="text-gray-500 leading-relaxed">After 30+ years of assessing business technology in the Raleigh-Durham area, we know the patterns. Here&apos;s what we typically find — and fix.</p>
            </div>
            <div className="space-y-4">
              {commonIssues.map(({ icon: Icon, color, text }) => (
                <div key={text} className="flex items-start gap-3 bg-white border border-gray-200 rounded-xl p-4">
                  <Icon className={`w-5 h-5 shrink-0 mt-0.5 ${color}`} />
                  <span className="text-sm text-gray-600 leading-relaxed">{text}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Request Form ───────────────────────────────────────────── */}
      <section id="request" className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">
          <div>
            <p className="text-[#CC0000] text-sm font-semibold tracking-widest uppercase mb-3">Get Started</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Request Your Free Assessment</h2>
            <p className="text-gray-500 leading-relaxed mb-8">
              Fill out the form and one of our specialists will contact you within one business day to schedule your assessment. We&apos;ll come to you — on-site at your location.
            </p>
            <div className="space-y-4 text-sm text-gray-500">
              {[
                "On-site visit at your location",
                "Full written report of findings",
                "Cost-saving recommendations",
                "No sales pressure — just honest advice",
                "Serving all of Raleigh-Durham and surrounding areas",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <CheckCircle className="w-4 h-4 text-green-500 shrink-0 mt-0.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
            <div className="mt-10 flex items-center gap-3 p-5 bg-red-50 border border-[#CC0000]/20 rounded-2xl">
              <div className="w-10 h-10 bg-[#CC0000] rounded-full flex items-center justify-center shrink-0">
                <Phone className="w-4 h-4 text-white" />
              </div>
              <div>
                <p className="text-xs text-gray-400 mb-0.5">Prefer to call?</p>
                <a href="tel:8009489914" className="font-semibold text-gray-900 hover:text-[#CC0000] transition-colors">800.948.9914</a>
                <span className="text-gray-400 text-xs ml-2">or (919) 872-4771</span>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-green-50 border border-green-200 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Assessment Requested!</h3>
                <p className="text-gray-500 mb-6">
                  Thank you! One of our specialists will contact you within one business day to schedule your free on-site assessment.
                </p>
                <Link href="/" className="text-[#CC0000] hover:text-[#b30000] font-medium transition-colors">
                  ← Back to home
                </Link>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div>
                  <label className="block text-sm text-gray-500 mb-1.5">Full Name *</label>
                  <input
                    required
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#CC0000]/50 transition-colors"
                    placeholder="John Smith"
                  />
                </div>
                <div>
                  <label className="block text-sm text-gray-500 mb-1.5">Company Name *</label>
                  <input
                    required
                    value={form.company}
                    onChange={(e) => setForm({ ...form, company: e.target.value })}
                    className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#CC0000]/50 transition-colors"
                    placeholder="Your Business"
                  />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-gray-500 mb-1.5">Email Address *</label>
                    <input
                      required
                      type="email"
                      value={form.email}
                      onChange={(e) => setForm({ ...form, email: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#CC0000]/50 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-gray-500 mb-1.5">Phone Number</label>
                    <input
                      value={form.phone}
                      onChange={(e) => setForm({ ...form, phone: e.target.value })}
                      className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#CC0000]/50 transition-colors"
                      placeholder="(919) 555-0100"
                    />
                  </div>
                </div>
                <button
                  type="submit"
                  disabled={loading}
                  className="w-full bg-[#CC0000] hover:bg-[#b30000] disabled:opacity-60 text-white font-semibold py-4 rounded-full transition-colors"
                >
                  {loading ? "Sending..." : "Request Free Assessment"}
                </button>
                <p className="text-xs text-gray-400 text-center">
                  By submitting this form, you agree to be contacted by Network South, Inc.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
