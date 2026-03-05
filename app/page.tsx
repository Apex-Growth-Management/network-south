import Link from "next/link";
import Image from "next/image";

const services = [
  {
    icon: "📞",
    title: "VoIP Phone Systems",
    description: "Cloud-based and premise phone systems from leading providers — RingCentral, Mitel, Nextiva, 8×8, and more.",
  },
  {
    icon: "🔒",
    title: "Cybersecurity",
    description: "Protect your business with enterprise-grade security solutions, firewalls, and threat monitoring.",
  },
  {
    icon: "🌐",
    title: "Network Infrastructure",
    description: "Cabling, fiber, WAN, Wi-Fi, and LAN design and installation built for reliability and performance.",
  },
  {
    icon: "📷",
    title: "Video Surveillance",
    description: "Commercial surveillance systems that keep your people, property, and assets protected around the clock.",
  },
  {
    icon: "💻",
    title: "Managed IT Services",
    description: "Proactive IT management so you can focus on your business — not your technology.",
  },
  {
    icon: "🔑",
    title: "Access Control",
    description: "Manage who enters your facility with modern, scalable access control solutions.",
  },
];

const stats = [
  { value: "30+", label: "Years in Business" },
  { value: "7", label: "Industries Served" },
  { value: "24/7", label: "On-Call Support" },
  { value: "20+", label: "Technology Partners" },
];

const partners = [
  "8×8", "Aruba", "AT&T", "Cisco", "Comcast", "Dell",
  "Five9", "HP", "Microsoft", "Mitel", "Nextiva", "RingCentral",
  "SonicWall", "Spectrum", "Ubiquiti", "VMware",
];

export default function Home() {
  return (
    <main className="bg-[#0a0a0a] text-white">
      {/* Hero */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-16 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1558494949-ef010cbdcc31?w=1920&q=80&fit=crop"
          alt="Network infrastructure"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/80" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#0a0a0a]/90 via-[#0a0a0a]/60 to-transparent" />
        <div className="max-w-7xl mx-auto w-full relative z-10">
          <div className="inline-flex items-center gap-2 bg-[#CC0000]/20 border border-[#CC0000]/30 text-[#CC0000] text-sm font-medium px-4 py-1.5 rounded-full mb-6">
            <span className="w-2 h-2 bg-[#CC0000] rounded-full animate-pulse" />
            Serving Raleigh-Durham Since 1994
          </div>
          <h1 className="text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
            Business Communications
            <br />
            <span className="text-[#CC0000]">&amp; Security Solutions</span>
          </h1>
          <p className="text-lg md:text-xl text-white/60 max-w-2xl mb-10 leading-relaxed">
            Network South is Raleigh-Durham&apos;s foremost telecommunications partner — delivering VoIP, managed IT, network infrastructure, and security systems to businesses across the region.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Link
              href="/support"
              className="bg-[#CC0000] hover:bg-[#b30000] text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/solutions"
              className="border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-colors"
            >
              Explore Solutions
            </Link>
          </div>
          <div className="mt-10 flex flex-wrap gap-6 text-sm text-white/40">
            <span>📞 800.948.9914</span>
            <span>📍 457 Park Ave, Youngsville, NC</span>
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-16 px-6 border-y border-white/10 bg-white/[0.02]">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {stats.map((s) => (
            <div key={s.label}>
              <div className="text-3xl md:text-4xl font-bold text-[#CC0000] mb-1">{s.value}</div>
              <div className="text-white/50 text-sm">{s.label}</div>
            </div>
          ))}
        </div>
      </section>

      {/* Solutions */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[#CC0000] text-sm font-semibold tracking-widest uppercase mb-3">What We Do</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4 max-w-xl">
              Complete Telecom &amp; IT Solutions
            </h2>
            <p className="text-white/50 text-lg max-w-2xl">
              From your phone system to your network backbone — we design, install, and support the technology your business runs on.
            </p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((s) => (
              <div
                key={s.title}
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 hover:border-[#CC0000]/40 hover:bg-[#CC0000]/5 transition-all group"
              >
                <div className="text-3xl mb-4">{s.icon}</div>
                <h3 className="text-lg font-semibold mb-2 group-hover:text-[#ff4444] transition-colors">{s.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{s.description}</p>
              </div>
            ))}
          </div>
          <div className="mt-12">
            <Link href="/solutions" className="text-[#CC0000] hover:text-[#ff4444] font-medium transition-colors">
              View all solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* Why Choose Us */}
      <section className="relative py-24 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1920&q=80&fit=crop"
          alt="Business technology"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/88" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <div>
              <p className="text-[#CC0000] text-sm font-semibold tracking-widest uppercase mb-3">Why Network South</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">
                Your Local Telecom Partner
              </h2>
              <p className="text-white/60 leading-relaxed mb-6">
                For over 30 years, we&apos;ve been helping businesses across Raleigh-Durham stay connected and secure. We don&apos;t just sell technology — we integrate, support, and grow with you.
              </p>
              <p className="text-white/60 leading-relaxed mb-8">
                Every client gets on-site training after installation, 24/7 on-call support, and access to best-in-class products from the industry&apos;s top manufacturers.
              </p>
              <Link href="/about" className="text-[#CC0000] hover:text-[#ff4444] font-medium transition-colors">
                Learn about our story →
              </Link>
            </div>
            <div className="grid grid-cols-1 gap-4">
              {[
                { title: "On-Site Training", desc: "Every installation includes hands-on training so your team is fully up to speed from day one." },
                { title: "24/7 On-Call Support", desc: "Our technicians are available around the clock for urgent issues and support." },
                { title: "Repairs Within 24 Hours", desc: "We respond fast — most service repairs are completed within 24 hours of your request." },
                { title: "Award-Winning Service", desc: "Recognized for customer satisfaction and technical excellence across the Raleigh-Durham region." },
              ].map((item) => (
                <div key={item.title} className="flex gap-4 bg-white/[0.04] border border-white/10 rounded-xl p-5">
                  <div className="w-2 h-2 bg-[#CC0000] rounded-full mt-2 shrink-0" />
                  <div>
                    <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industries */}
      <section className="py-24 px-6 bg-white/[0.01]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#CC0000] text-sm font-semibold tracking-widest uppercase mb-3">Industries We Serve</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for Your Industry</h2>
            <p className="text-white/50 text-lg max-w-xl mx-auto">
              We understand the unique communication needs of businesses across every sector.
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {[
              { icon: "🚗", label: "Automotive" },
              { icon: "🏥", label: "Healthcare" },
              { icon: "🚛", label: "Transportation" },
              { icon: "💼", label: "Professional" },
              { icon: "⚖️", label: "Legal" },
              { icon: "🎓", label: "Education" },
              { icon: "💡", label: "Technology" },
            ].map((ind) => (
              <Link
                key={ind.label}
                href="/industries"
                className="bg-white/[0.03] border border-white/10 rounded-2xl p-6 text-center hover:border-[#CC0000]/40 hover:bg-[#CC0000]/5 transition-all"
              >
                <div className="text-3xl mb-3">{ind.icon}</div>
                <div className="text-sm font-medium text-white/70">{ind.label}</div>
              </Link>
            ))}
          </div>
          <div className="text-center mt-10">
            <Link href="/industries" className="text-[#CC0000] hover:text-[#ff4444] font-medium transition-colors">
              See industry solutions →
            </Link>
          </div>
        </div>
      </section>

      {/* Partners */}
      <section className="py-20 px-6 border-t border-white/10">
        <div className="max-w-7xl mx-auto">
          <p className="text-center text-white/30 text-sm font-medium tracking-widest uppercase mb-10">Trusted Technology Partners</p>
          <div className="flex flex-wrap justify-center gap-x-10 gap-y-4">
            {partners.map((p) => (
              <span key={p} className="text-white/30 hover:text-white/60 text-sm font-medium transition-colors cursor-default">
                {p}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-28 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&fit=crop"
          alt="Modern office"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/85" />
        <div className="relative z-10 max-w-3xl mx-auto text-center">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to upgrade your <br />
            <span className="text-[#CC0000]">business communications?</span>
          </h2>
          <p className="text-white/50 text-lg mb-10">
            Get a free consultation with one of our telecom specialists. No pressure — just expert advice tailored to your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/support"
              className="bg-[#CC0000] hover:bg-[#b30000] text-white font-semibold px-10 py-4 rounded-full text-lg transition-colors"
            >
              Schedule a Consultation
            </Link>
            <a
              href="tel:8009489914"
              className="border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold px-10 py-4 rounded-full text-lg transition-colors"
            >
              Call 800.948.9914
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 py-10 px-6">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-white/30 text-sm">
          <div>
            <span className="text-[#CC0000] font-semibold">Network</span>
            <span className="text-white/50"> South, Inc.</span>
            <span className="ml-3">© {new Date().getFullYear()} All rights reserved.</span>
          </div>
          <div className="flex gap-6">
            <span>457 Park Ave, Youngsville, NC 27596</span>
            <a href="tel:8009489914" className="hover:text-white/60 transition-colors">800.948.9914</a>
          </div>
          <div className="flex gap-6">
            <Link href="/support" className="hover:text-white/60 transition-colors">Support</Link>
            <Link href="/payment" className="hover:text-white/60 transition-colors">Payment</Link>
          </div>
        </div>
      </footer>
    </main>
  );
}
