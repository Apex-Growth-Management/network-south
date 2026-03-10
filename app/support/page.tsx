"use client";

import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { motion, AnimatePresence } from "framer-motion";
import { Phone, MapPin, Clock, CheckCircle, ChevronRight } from "lucide-react";
import Footer from "@/components/Footer";

const industries = [
  { label: "Healthcare" },
  { label: "Legal / Professional" },
  { label: "Automotive" },
  { label: "Education" },
  { label: "Transportation / Logistics" },
  { label: "Technology" },
  { label: "Retail / Restaurant" },
  { label: "Government" },
  { label: "Construction" },
  { label: "Finance / Insurance" },
  { label: "Manufacturing" },
  { label: "Other" },
];

const services = [
  { label: "VoIP / Cloud Phone Systems", desc: "Upgrade to modern cloud-based business phones" },
  { label: "Network Infrastructure", desc: "Cabling, Wi-Fi, switches, and LAN design" },
  { label: "Cybersecurity", desc: "Firewalls, monitoring, and threat protection" },
  { label: "Video Surveillance", desc: "Commercial cameras and remote monitoring" },
  { label: "Access Control", desc: "Keycard and biometric entry systems" },
  { label: "Managed IT Services", desc: "Proactive IT support and monitoring" },
  { label: "Carrier Services", desc: "Internet, SIP trunking, and MPLS solutions" },
  { label: "Not Sure", desc: "We'll help identify what you need" },
];

const variants = {
  enter: (d: number) => ({ x: d > 0 ? 40 : -40, opacity: 0 }),
  center: { x: 0, opacity: 1 },
  exit: (d: number) => ({ x: d > 0 ? -40 : 40, opacity: 0 }),
};

const contacts = [
  { Icon: Phone, title: "Call Us", detail: "800.948.9914", sub: "(919) 872-4771", href: "tel:8009489914", cta: "Call Now" },
  { Icon: MapPin, title: "Visit Us", detail: "457 Park Ave", sub: "Youngsville, NC 27596", href: "https://maps.google.com/?q=457+Park+Ave+Youngsville+NC", cta: "Get Directions" },
  { Icon: Clock, title: "24/7 Support", detail: "Always Available", sub: "On-call support around the clock", href: "tel:8009489914", cta: "Call Anytime" },
];

export default function Support() {
  const [step, setStep] = useState(0);
  const [direction, setDirection] = useState(1);
  const [selectedIndustry, setSelectedIndustry] = useState("");
  const [selectedService, setSelectedService] = useState("");
  const [form, setForm] = useState({ name: "", email: "", phone: "", company: "", message: "" });
  const [submitted, setSubmitted] = useState(false);
  const [loading, setLoading] = useState(false);

  function goTo(next: number) {
    setDirection(next > step ? 1 : -1);
    setStep(next);
  }

  async function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setLoading(true);
    await fetch("/api/contact", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ ...form, industry: selectedIndustry, service: selectedService }),
    }).catch(() => {});
    setLoading(false);
    setSubmitted(true);
  }

  const stepLabels = ["Industry", "Service", "Contact Info"];

  return (
    <main className="bg-white text-gray-900 pt-16">

      {/* ── Hero ──────────────────────────────────────────────────── */}
      <section className="relative py-24 px-6 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80&fit=crop" alt="Customer support" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/82" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <p className="text-[#CC0000] text-sm font-semibold tracking-widest uppercase mb-3">Customer Support</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">We&apos;re Here When You Need Us</h1>
          <p className="text-white/70 text-lg max-w-xl leading-relaxed">
            Whether you need support, have a service question, or are ready to get started — our team is ready to help.
          </p>
        </div>
      </section>

      {/* ── Contact Cards ─────────────────────────────────────────── */}
      <section className="py-20 px-6 border-b border-gray-200">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {contacts.map(({ Icon, title, detail, sub, href, cta }) => (
            <a
              key={title}
              href={href}
              target={href.startsWith("https") ? "_blank" : undefined}
              rel={href.startsWith("https") ? "noopener noreferrer" : undefined}
              className="bg-gray-50 border border-gray-200 rounded-2xl p-8 text-center hover:border-[#CC0000]/40 hover:bg-red-50 transition-all group"
            >
              <div className="flex justify-center mb-4">
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center group-hover:border-[#CC0000]/30 group-hover:bg-red-50 transition-all">
                  <Icon className="w-5 h-5 text-[#CC0000]" />
                </div>
              </div>
              <h3 className="font-semibold text-lg mb-2">{title}</h3>
              <p className="text-[#CC0000] font-medium mb-1">{detail}</p>
              <p className="text-gray-400 text-sm mb-4">{sub}</p>
              <span className="text-[#CC0000] group-hover:text-[#b30000] text-sm font-medium transition-colors">{cta} →</span>
            </a>
          ))}
        </div>
      </section>

      {/* ── Multi-Step Form ────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-start">

          {/* Left column */}
          <div>
            <p className="text-[#CC0000] text-sm font-semibold tracking-widest uppercase mb-3">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Request a Free Consultation</h2>
            <p className="text-gray-600 leading-relaxed mb-8">
              Fill out the form and one of our telecom specialists will be in touch within one business day. Tell us about your business and we&apos;ll recommend the right solutions.
            </p>
            <div className="space-y-4 text-sm text-gray-500">
              {[
                "Free, no-obligation consultation",
                "Expert recommendations for your industry",
                "Response within one business day",
                "Serving all of Raleigh-Durham and surrounding areas",
              ].map((item) => (
                <div key={item} className="flex items-start gap-3">
                  <div className="w-1.5 h-1.5 bg-[#CC0000] rounded-full mt-1.5" />
                  <span>{item}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right column — form */}
          <div>
            {submitted ? (
              <div className="bg-red-50 border border-[#CC0000]/20 rounded-2xl p-12 text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <CheckCircle className="w-8 h-8 text-green-600" />
                </div>
                <h3 className="text-xl font-bold mb-2">Message Received!</h3>
                <p className="text-gray-500 mb-6">
                  Thank you for reaching out. One of our specialists will contact you within one business day.
                </p>
                <Link href="/" className="text-[#CC0000] hover:text-[#b30000] font-medium transition-colors">
                  ← Back to home
                </Link>
              </div>
            ) : (
              <div className="bg-white border border-gray-200 rounded-2xl p-8 shadow-sm">

                {/* Step indicators */}
                <div className="flex items-center gap-2 mb-8">
                  {stepLabels.map((label, i) => (
                    <div key={label} className="flex items-center gap-2">
                      <div className={`flex items-center gap-1.5 text-xs font-medium transition-colors ${i === step ? "text-[#CC0000]" : i < step ? "text-green-600" : "text-gray-400"}`}>
                        <div className={`w-5 h-5 rounded-full flex items-center justify-center text-[10px] font-bold border transition-all ${i === step ? "bg-[#CC0000] border-[#CC0000] text-white" : i < step ? "bg-green-500 border-green-500 text-white" : "border-gray-300 text-gray-400"}`}>
                          {i < step ? "✓" : i + 1}
                        </div>
                        <span className="hidden sm:inline">{label}</span>
                      </div>
                      {i < stepLabels.length - 1 && (
                        <ChevronRight className="w-3 h-3 text-gray-300 shrink-0" />
                      )}
                    </div>
                  ))}
                </div>

                <div className="overflow-hidden">
                  <AnimatePresence mode="wait" custom={direction}>
                    {step === 0 && (
                      <motion.div
                        key="step0"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <h3 className="font-semibold text-lg mb-1">What industry are you in?</h3>
                        <p className="text-gray-400 text-sm mb-5">This helps us tailor our recommendations to your needs.</p>
                        <div className="grid grid-cols-2 sm:grid-cols-3 gap-2">
                          {industries.map(({ label }) => (
                            <button
                              key={label}
                              type="button"
                              onClick={() => { setSelectedIndustry(label); goTo(1); }}
                              className={`px-3 py-2.5 rounded-xl border text-sm font-medium transition-all text-left ${
                                selectedIndustry === label
                                  ? "bg-red-50 border-[#CC0000] text-[#CC0000]"
                                  : "bg-gray-50 border-gray-200 text-gray-600 hover:border-[#CC0000]/40 hover:bg-red-50/50"
                              }`}
                            >
                              {label}
                            </button>
                          ))}
                        </div>
                      </motion.div>
                    )}

                    {step === 1 && (
                      <motion.div
                        key="step1"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <h3 className="font-semibold text-lg mb-1">Which service interests you?</h3>
                        <p className="text-gray-400 text-sm mb-5">Select the area you&apos;d like help with.</p>
                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-2">
                          {services.map(({ label, desc }) => (
                            <button
                              key={label}
                              type="button"
                              onClick={() => { setSelectedService(label); goTo(2); }}
                              className={`px-4 py-3 rounded-xl border text-sm text-left transition-all ${
                                selectedService === label
                                  ? "bg-red-50 border-[#CC0000]"
                                  : "bg-gray-50 border-gray-200 hover:border-[#CC0000]/40 hover:bg-red-50/50"
                              }`}
                            >
                              <div className={`font-medium mb-0.5 ${selectedService === label ? "text-[#CC0000]" : "text-gray-700"}`}>{label}</div>
                              <div className="text-gray-400 text-xs">{desc}</div>
                            </button>
                          ))}
                        </div>
                        <button type="button" onClick={() => goTo(0)} className="mt-4 text-xs text-gray-400 hover:text-gray-600 transition-colors">
                          ← Back
                        </button>
                      </motion.div>
                    )}

                    {step === 2 && (
                      <motion.div
                        key="step2"
                        custom={direction}
                        variants={variants}
                        initial="enter"
                        animate="center"
                        exit="exit"
                        transition={{ duration: 0.25, ease: "easeInOut" }}
                      >
                        <h3 className="font-semibold text-lg mb-1">How can we reach you?</h3>
                        <p className="text-gray-400 text-sm mb-5">We&apos;ll follow up within one business day.</p>
                        <form onSubmit={handleSubmit} className="space-y-4">
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs text-gray-500 mb-1.5">Full Name *</label>
                              <input
                                required
                                value={form.name}
                                onChange={(e) => setForm({ ...form, name: e.target.value })}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#CC0000]/50 transition-colors"
                                placeholder="John Smith"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-gray-500 mb-1.5">Company *</label>
                              <input
                                required
                                value={form.company}
                                onChange={(e) => setForm({ ...form, company: e.target.value })}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#CC0000]/50 transition-colors"
                                placeholder="Your Business"
                              />
                            </div>
                          </div>
                          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                            <div>
                              <label className="block text-xs text-gray-500 mb-1.5">Email *</label>
                              <input
                                required
                                type="email"
                                value={form.email}
                                onChange={(e) => setForm({ ...form, email: e.target.value })}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#CC0000]/50 transition-colors"
                                placeholder="john@company.com"
                              />
                            </div>
                            <div>
                              <label className="block text-xs text-gray-500 mb-1.5">Phone</label>
                              <input
                                value={form.phone}
                                onChange={(e) => setForm({ ...form, phone: e.target.value })}
                                className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#CC0000]/50 transition-colors"
                                placeholder="(919) 555-0100"
                              />
                            </div>
                          </div>
                          <div>
                            <label className="block text-xs text-gray-500 mb-1.5">Additional Notes</label>
                            <textarea
                              value={form.message}
                              onChange={(e) => setForm({ ...form, message: e.target.value })}
                              rows={3}
                              className="w-full bg-gray-50 border border-gray-200 rounded-xl px-4 py-3 text-sm text-gray-900 placeholder-gray-400 focus:outline-none focus:border-[#CC0000]/50 transition-colors resize-none"
                              placeholder="Tell us about your current setup..."
                            />
                          </div>
                          <button
                            type="submit"
                            disabled={loading}
                            className="w-full bg-[#CC0000] hover:bg-[#b30000] disabled:opacity-60 text-white font-semibold py-3.5 rounded-full transition-colors"
                          >
                            {loading ? "Sending..." : "Submit Request"}
                          </button>
                          <button type="button" onClick={() => goTo(1)} className="block w-full text-center text-xs text-gray-400 hover:text-gray-600 transition-colors">
                            ← Back
                          </button>
                        </form>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>

      <Footer />
    </main>
  );
}
