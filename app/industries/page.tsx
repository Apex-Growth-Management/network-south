import Link from "next/link";
import Image from "next/image";

const industries = [
  {
    icon: "🚗",
    title: "Automotive",
    description:
      "Dealerships and service repair shops need reliable departmental communication, call reporting, and customer history access. We deliver phone systems tailored to the fast-paced automotive environment.",
    features: ["Call reporting & analytics", "Multi-department routing", "Customer history integration", "Service bay communication"],
  },
  {
    icon: "🏥",
    title: "Healthcare",
    description:
      "Hospitals, doctor offices, and medical centers need telecom solutions that provide reliable call service while supporting internal patient management systems. We understand HIPAA-compliant communication.",
    features: ["Patient management integration", "HIPAA-compliant solutions", "Nurse call systems", "Reliable emergency lines"],
  },
  {
    icon: "🚛",
    title: "Transportation",
    description:
      "Transportation and professional service companies require seamless dispatch-to-employee connectivity with optimized mobility and call routing capabilities.",
    features: ["Dispatch integration", "Mobile worker solutions", "GPS & fleet communication", "Optimized call routing"],
  },
  {
    icon: "💼",
    title: "Professional Services",
    description:
      "Professional service firms need unified communications that project a polished, reliable image while supporting a distributed workforce and client-facing operations.",
    features: ["Unified communications", "Remote work support", "Auto-attendant & voicemail", "CRM integration"],
  },
  {
    icon: "⚖️",
    title: "Legal",
    description:
      "Law offices handle high call volumes and require unified telecom solutions that support efficient operations, call recording, and secure remote access for attorneys.",
    features: ["Call recording & archiving", "Secure remote access", "High call volume support", "Conference calling"],
  },
  {
    icon: "🎓",
    title: "Education",
    description:
      "Schools and universities need communications that connect teachers, administrators, parents, and students — including mobile applications and video conferencing integration.",
    features: ["Campus-wide connectivity", "Mobile app integration", "Video conferencing", "Parent & student portals"],
  },
  {
    icon: "💡",
    title: "Technology",
    description:
      "Tech companies need telecommunications that can be updated and built upon as new technologies emerge, including web video conferencing and cloud compatibility.",
    features: ["Cloud-compatible systems", "Web video conferencing", "Scalable infrastructure", "API integrations"],
  },
];

export default function Industries() {
  return (
    <main className="bg-[#0a0a0a] text-white pt-16">
      {/* Hero */}
      <section className="relative py-28 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&fit=crop"
          alt="Business districts"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/85" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-red-400 text-sm font-semibold tracking-widest uppercase mb-3">Industries</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">
            Solutions Built for Your Industry
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            Every industry has unique communication challenges. We bring deep expertise across seven sectors to deliver telecom and IT solutions that truly fit your business.
          </p>
        </div>
      </section>

      {/* Industries Grid */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8">
          {industries.map((ind, i) => (
            <div
              key={ind.title}
              className={`grid md:grid-cols-2 gap-10 items-center p-8 rounded-2xl border border-white/10 bg-white/[0.02] hover:border-red-500/30 transition-all ${
                i % 2 === 1 ? "md:flex-row-reverse" : ""
              }`}
            >
              <div>
                <div className="text-4xl mb-4">{ind.icon}</div>
                <h2 className="text-2xl font-bold mb-4 text-red-300">{ind.title}</h2>
                <p className="text-white/60 leading-relaxed mb-6">{ind.description}</p>
                <Link href="/support" className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors">
                  Learn more about {ind.title} solutions →
                </Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {ind.features.map((f) => (
                  <div key={f} className="flex items-start gap-2 bg-white/[0.04] rounded-xl p-4">
                    <div className="w-1.5 h-1.5 bg-red-400 rounded-full mt-1.5 shrink-0" />
                    <span className="text-white/70 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* CTA */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Don&apos;t See Your Industry?</h2>
          <p className="text-white/50 mb-8">We work with businesses of all types. Contact us for a custom consultation.</p>
          <Link href="/support" className="bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded-full transition-colors">
            Talk to a Specialist
          </Link>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-sm">
          <div>
            <span className="text-red-400 font-semibold">Network</span>
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
