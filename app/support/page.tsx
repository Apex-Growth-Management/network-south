"use client";

import { useState } from "react";
import Image from "next/image";

export default function Support() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    company: "",
    service: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  function handleChange(e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) {
    setForm({ ...form, [e.target.name]: e.target.value });
  }

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault();
    setSubmitted(true);
  }

  return (
    <main className="bg-[#080c14] text-white pt-16">
      {/* Hero */}
      <section className="relative py-24 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920&q=80&fit=crop"
          alt="Customer support"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#080c14]/88" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Customer Support</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">
            We&apos;re Here When You Need Us
          </h1>
          <p className="text-white/60 text-lg max-w-xl leading-relaxed">
            Whether you need support, have a service question, or are ready to get started — our team is ready to help.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="py-20 px-6 border-b border-white/10">
        <div className="max-w-7xl mx-auto grid grid-cols-1 sm:grid-cols-3 gap-6">
          {[
            {
              icon: "📞",
              title: "Call Us",
              detail: "800.948.9914",
              sub: "(919) 872-4771",
              href: "tel:8009489914",
              cta: "Call Now",
            },
            {
              icon: "📍",
              title: "Visit Us",
              detail: "457 Park Ave",
              sub: "Youngsville, NC 27596",
              href: "https://maps.google.com/?q=457+Park+Ave+Youngsville+NC",
              cta: "Get Directions",
            },
            {
              icon: "🕐",
              title: "24/7 Support",
              detail: "Always Available",
              sub: "On-call support around the clock",
              href: "tel:8009489914",
              cta: "Call Anytime",
            },
          ].map((c) => (
            <a
              key={c.title}
              href={c.href}
              target={c.href.startsWith("https") ? "_blank" : undefined}
              rel={c.href.startsWith("https") ? "noopener noreferrer" : undefined}
              className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 text-center hover:border-blue-500/40 hover:bg-blue-600/5 transition-all group"
            >
              <div className="text-4xl mb-4">{c.icon}</div>
              <h3 className="font-semibold text-lg mb-2">{c.title}</h3>
              <p className="text-blue-300 font-medium mb-1">{c.detail}</p>
              <p className="text-white/40 text-sm mb-4">{c.sub}</p>
              <span className="text-blue-400 group-hover:text-blue-300 text-sm font-medium transition-colors">{c.cta} →</span>
            </a>
          ))}
        </div>
      </section>

      {/* Contact Form */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16">
          <div>
            <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Get in Touch</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">
              Request a Free Consultation
            </h2>
            <p className="text-white/60 leading-relaxed mb-8">
              Fill out the form and one of our telecom specialists will be in touch within one business day. Tell us about your business and we&apos;ll recommend the right solutions.
            </p>
            <div className="space-y-4 text-sm text-white/50">
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5" />
                <span>Free, no-obligation consultation</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5" />
                <span>Expert recommendations for your industry</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5" />
                <span>Response within one business day</span>
              </div>
              <div className="flex items-start gap-3">
                <div className="w-1.5 h-1.5 bg-blue-400 rounded-full mt-1.5" />
                <span>Serving all of Raleigh-Durham and surrounding areas</span>
              </div>
            </div>
          </div>

          <div>
            {submitted ? (
              <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-12 text-center">
                <div className="text-5xl mb-4">✅</div>
                <h3 className="text-xl font-bold mb-2">Message Received!</h3>
                <p className="text-white/50">Thank you for reaching out. One of our specialists will contact you within one business day.</p>
              </div>
            ) : (
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/50 mb-1.5">Full Name *</label>
                    <input
                      required
                      name="name"
                      value={form.name}
                      onChange={handleChange}
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 transition-colors"
                      placeholder="John Smith"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-1.5">Email Address *</label>
                    <input
                      required
                      type="email"
                      name="email"
                      value={form.email}
                      onChange={handleChange}
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 transition-colors"
                      placeholder="john@company.com"
                    />
                  </div>
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <div>
                    <label className="block text-sm text-white/50 mb-1.5">Phone Number</label>
                    <input
                      name="phone"
                      value={form.phone}
                      onChange={handleChange}
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 transition-colors"
                      placeholder="(919) 555-0100"
                    />
                  </div>
                  <div>
                    <label className="block text-sm text-white/50 mb-1.5">Company Name *</label>
                    <input
                      required
                      name="company"
                      value={form.company}
                      onChange={handleChange}
                      className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 transition-colors"
                      placeholder="Your Business"
                    />
                  </div>
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">Service Interested In</label>
                  <select
                    name="service"
                    value={form.service}
                    onChange={handleChange}
                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white focus:outline-none focus:border-blue-500/50 transition-colors"
                  >
                    <option value="" className="bg-[#080c14]">Select a service...</option>
                    <option value="voip" className="bg-[#080c14]">VoIP Cloud Phone Systems</option>
                    <option value="ip-phone" className="bg-[#080c14]">IP Phone Systems (Premise)</option>
                    <option value="network" className="bg-[#080c14]">Network Infrastructure</option>
                    <option value="surveillance" className="bg-[#080c14]">Video Surveillance</option>
                    <option value="access-control" className="bg-[#080c14]">Access Control</option>
                    <option value="managed-it" className="bg-[#080c14]">Managed IT Services</option>
                    <option value="cybersecurity" className="bg-[#080c14]">Cybersecurity</option>
                    <option value="carrier" className="bg-[#080c14]">Carrier Services</option>
                    <option value="other" className="bg-[#080c14]">Other / Not Sure</option>
                  </select>
                </div>
                <div>
                  <label className="block text-sm text-white/50 mb-1.5">Message</label>
                  <textarea
                    name="message"
                    value={form.message}
                    onChange={handleChange}
                    rows={4}
                    className="w-full bg-white/[0.05] border border-white/10 rounded-xl px-4 py-3 text-white placeholder-white/20 focus:outline-none focus:border-blue-500/50 transition-colors resize-none"
                    placeholder="Tell us about your current setup and what you're looking for..."
                  />
                </div>
                <button
                  type="submit"
                  className="w-full bg-blue-600 hover:bg-blue-500 text-white font-semibold py-4 rounded-full transition-colors"
                >
                  Submit Request
                </button>
                <p className="text-xs text-white/30 text-center">
                  By submitting this form, you agree to be contacted by Network South, Inc.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-sm">
          <div>
            <span className="text-blue-400 font-semibold">Network</span>
            <span className="text-white/50"> South, Inc.</span>
            <span className="ml-3">© {new Date().getFullYear()} All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <span>457 Park Ave, Youngsville, NC 27596</span>
            <a href="tel:8009489914" className="hover:text-white/60 transition-colors">800.948.9914</a>
          </div>
        </div>
      </footer>
    </main>
  );
}
