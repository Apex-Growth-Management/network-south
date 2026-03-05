import Link from "next/link";
import Image from "next/image";

const solutions = [
  {
    category: "Communication",
    items: [
      {
        icon: "☁️",
        title: "VoIP Cloud Phone Systems",
        description:
          "Voice over IP technology lets your team make and receive calls over your IP network — anywhere, on any device. We partner with the industry&apos;s leading cloud platforms.",
        providers: ["MiCloud Flex", "MiCloud Connect", "RingCentral", "Intermedia Elevate", "Nextiva", "Five9", "8×8"],
        features: ["Voicemail to email", "Advanced call management", "Remote work support", "Unified communications"],
      },
      {
        icon: "📟",
        title: "IP Phone Systems (Premise-Based)",
        description:
          "For businesses that prefer on-site control, our premise-based IP phone systems deliver enterprise-grade features with the reliability of local infrastructure.",
        providers: ["Mitel"],
        features: ["Integrated wired/wireless", "Web application support", "Call center features", "Custom call routing"],
      },
    ],
  },
  {
    category: "Network & Infrastructure",
    items: [
      {
        icon: "🔌",
        title: "Network Infrastructure",
        description:
          "A solid network is the backbone of your business. We design and install complete network infrastructure built for performance, reliability, and scalability.",
        providers: [],
        features: ["Cabling & fiber installation", "WAN design & deployment", "Wi-Fi network setup", "LAN infrastructure"],
      },
      {
        icon: "🌐",
        title: "Internet & Carrier Services",
        description:
          "We work with all major carriers to find the right internet and connectivity solutions for your business — and manage the relationship so you don&apos;t have to.",
        providers: ["AT&T", "Comcast", "Spectrum", "Lumen", "Windstream"],
        features: ["Carrier comparisons", "Contract management", "Business internet", "Dedicated circuits"],
      },
    ],
  },
  {
    category: "Security",
    items: [
      {
        icon: "📷",
        title: "Video Surveillance",
        description:
          "Commercial-grade video surveillance systems designed to protect your people, property, and assets. Monitor your facilities from anywhere, at any time.",
        providers: ["Digital Watchdog"],
        features: ["HD & 4K cameras", "Remote monitoring", "Cloud video storage", "Motion detection"],
      },
      {
        icon: "🔑",
        title: "Access Control",
        description:
          "Manage and monitor who enters your facility with modern access control solutions — from key cards and fobs to mobile credentials and biometrics.",
        providers: [],
        features: ["Key card & fob systems", "Mobile credentials", "Audit trail logging", "Multi-location management"],
      },
      {
        icon: "🛡️",
        title: "Cybersecurity",
        description:
          "Protect your business network from modern threats with enterprise-grade security infrastructure, monitoring, and response capabilities.",
        providers: ["SonicWall", "WatchGuard", "Cisco"],
        features: ["Firewall management", "Threat monitoring", "VPN solutions", "Security audits"],
      },
    ],
  },
  {
    category: "IT Management",
    items: [
      {
        icon: "💻",
        title: "Managed IT Services",
        description:
          "Outsource your IT management to a team of experienced professionals. We handle monitoring, maintenance, and support — so you can focus on running your business.",
        providers: ["Dell", "HP", "Microsoft", "VMware"],
        features: ["24/7 monitoring", "Help desk support", "Patch management", "Vendor management"],
      },
      {
        icon: "🔧",
        title: "Service & Repair",
        description:
          "Fast, reliable repair services for all your telecom and IT systems. Most service requests are addressed within 24 hours.",
        providers: [],
        features: ["24-hour response", "All makes & models", "On-site technicians", "Preventive maintenance"],
      },
    ],
  },
];

export default function Solutions() {
  return (
    <main className="bg-[#0a0a0a] text-white pt-16">
      {/* Hero */}
      <section className="relative py-28 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1451187580459-43490279c0fa?w=1920&q=80&fit=crop"
          alt="Technology solutions"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-[#0a0a0a]/85" />
        <div className="relative z-10 max-w-7xl mx-auto">
          <p className="text-red-400 text-sm font-semibold tracking-widest uppercase mb-3">Solutions</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">
            Technology That Works for Your Business
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed">
            From VoIP phone systems to cybersecurity and managed IT — we deliver complete, integrated solutions backed by 30+ years of expertise.
          </p>
        </div>
      </section>

      {/* Solutions by Category */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto space-y-24">
          {solutions.map((cat) => (
            <div key={cat.category}>
              <div className="flex items-center gap-4 mb-10">
                <div className="h-px flex-1 bg-white/10" />
                <span className="text-red-400 text-sm font-semibold tracking-widest uppercase">{cat.category}</span>
                <div className="h-px flex-1 bg-white/10" />
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {cat.items.map((item) => (
                  <div key={item.title} className="bg-white/[0.03] border border-white/10 rounded-2xl p-8 hover:border-red-500/30 transition-all">
                    <div className="text-3xl mb-4">{item.icon}</div>
                    <h3 className="text-xl font-bold mb-3">{item.title}</h3>
                    <p
                      className="text-white/55 leading-relaxed mb-6 text-sm"
                      dangerouslySetInnerHTML={{ __html: item.description }}
                    />
                    {item.features.length > 0 && (
                      <div className="grid grid-cols-2 gap-2 mb-6">
                        {item.features.map((f) => (
                          <div key={f} className="flex items-center gap-2 text-xs text-white/50">
                            <div className="w-1.5 h-1.5 bg-red-400 rounded-full shrink-0" />
                            {f}
                          </div>
                        ))}
                      </div>
                    )}
                    {item.providers.length > 0 && (
                      <div className="pt-5 border-t border-white/10">
                        <p className="text-xs text-white/30 mb-2 uppercase tracking-widest">Partners</p>
                        <div className="flex flex-wrap gap-2">
                          {item.providers.map((p) => (
                            <span key={p} className="text-xs bg-white/[0.06] border border-white/10 rounded-full px-3 py-1 text-white/50">
                              {p}
                            </span>
                          ))}
                        </div>
                      </div>
                    )}
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
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Ready to Get Started?</h2>
          <p className="text-white/50 mb-8">Talk to a solutions specialist and get a free consultation tailored to your business.</p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/support" className="bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-4 rounded-full transition-colors">
              Schedule a Consultation
            </Link>
            <a href="tel:8009489914" className="border border-white/20 hover:border-white/40 text-white/70 hover:text-white font-semibold px-8 py-4 rounded-full transition-colors">
              Call 800.948.9914
            </a>
          </div>
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
