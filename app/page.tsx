import Link from "next/link";
import Image from "next/image";
import {
  Phone, Shield, Globe, Camera, Monitor, KeyRound,
  Car, HeartPulse, Truck, Briefcase, Scale, GraduationCap, Cpu, MapPin, ChevronDown,
} from "lucide-react";
import { sanityFetch } from "@/sanity/lib/live";
import AnimatedSection from "@/components/AnimatedSection";
import CounterStats from "@/components/CounterStat";
import MarqueeLogos from "@/components/MarqueeLogos";
import Footer from "@/components/Footer";

const serviceIcons = [Phone, Shield, Globe, Camera, Monitor, KeyRound];

const defaultServices = [
  { title: "VoIP Phone Systems", description: "Cloud-based and premise phone systems from leading providers — RingCentral, Mitel, Nextiva, 8\u00d78, and more." },
  { title: "Cybersecurity", description: "Protect your business with enterprise-grade security solutions, firewalls, and threat monitoring." },
  { title: "Network Infrastructure", description: "Cabling, fiber, WAN, Wi-Fi, and LAN design and installation built for reliability and performance." },
  { title: "Video Surveillance", description: "Commercial surveillance systems that keep your people, property, and assets protected around the clock." },
  { title: "Managed IT Services", description: "Proactive IT management so you can focus on your business — not your technology." },
  { title: "Access Control", description: "Manage who enters your facility with modern, scalable access control solutions." },
];

const defaultStats = [
  { value: "30+", label: "Years in Business" },
  { value: "7", label: "Industries Served" },
  { value: "24/7", label: "On-Call Support" },
  { value: "20+", label: "Technology Partners" },
];

const defaultPartners = ["8\u00d78","Aruba","AT&T","Cisco","Comcast","Dell","Five9","HP","Microsoft","Mitel","Nextiva","RingCentral","SonicWall","Spectrum","Ubiquiti","VMware"];

const industries = [
  { Icon: Car, label: "Automotive" },
  { Icon: HeartPulse, label: "Healthcare" },
  { Icon: Truck, label: "Transportation" },
  { Icon: Briefcase, label: "Professional" },
  { Icon: Scale, label: "Legal" },
  { Icon: GraduationCap, label: "Education" },
  { Icon: Cpu, label: "Technology" },
];

const whyUs = [
  { title: "On-Site Training", desc: "Every installation includes hands-on training so your team is fully up to speed from day one." },
  { title: "24/7 On-Call Support", desc: "Our technicians are available around the clock for urgent issues and support." },
  { title: "Repairs Within 24 Hours", desc: "We respond fast — most service repairs are completed within 24 hours of your request." },
  { title: "Award-Winning Service", desc: "Recognized for customer satisfaction and technical excellence across the Raleigh-Durham region." },
];

export default async function Home() {
  const [{ data: settings }, { data: sanityServices }, { data: sanityStats }, { data: sanityPartners }] = await Promise.all([
    sanityFetch({ query: `*[_type == "siteSettings" && _id == "siteSettings"][0]` }),
    sanityFetch({ query: `*[_type == "service"] | order(order asc)` }),
    sanityFetch({ query: `*[_type == "stat"] | order(order asc)` }),
    sanityFetch({ query: `*[_type == "partner"] | order(order asc)` }),
  ]);

  const badge        = settings?.badgeText    || "Serving Raleigh-Durham Since 1994";
  const heroTitle    = settings?.heroTitle    || "Business Communications";
  const heroSubtitle = settings?.heroSubtitle || "& Security Solutions";
  const phone        = settings?.phone        || "800.948.9914";
  const address      = settings?.address      || "457 Park Ave, Youngsville, NC";

  const services = sanityServices?.length ? sanityServices : defaultServices;
  const stats    = sanityStats?.length    ? sanityStats    : defaultStats;
  const partners = sanityPartners?.length
    ? sanityPartners.map((p: { name: string }) => p.name)
    : defaultPartners;

  return (
    <main className="bg-white text-gray-900 overflow-x-hidden">

      {/* ── Hero ────────────────────────────────────────────────── */}
      <section className="relative min-h-screen flex flex-col justify-center px-6 pt-16 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366754035-f200968a6e72?w=1920&q=80&fit=crop"
          alt="Modern office"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-black/75 via-black/35 to-transparent" />
        <div className="absolute inset-0 grid-overlay" />

        <div className="max-w-7xl mx-auto w-full relative z-10 text-white">
          <div className="hero-badge inline-flex items-center gap-2.5 bg-[#CC0000]/20 border border-[#CC0000]/30 text-red-300 text-sm font-medium px-4 py-1.5 rounded-full mb-7">
            <span className="w-1.5 h-1.5 bg-red-400 rounded-full badge-dot" />
            {badge}
          </div>

          <h1 className="hero-h1 text-5xl md:text-7xl font-bold leading-tight mb-6 max-w-4xl">
            {heroTitle}<br />
            <span className="text-[#CC0000]">{heroSubtitle}</span>
          </h1>

          <p className="hero-p text-lg md:text-xl text-white/75 max-w-2xl mb-10 leading-relaxed">
            Network South is Raleigh-Durham&apos;s foremost telecommunications partner — delivering VoIP, managed IT, network infrastructure, and security systems to businesses across the region.
          </p>

          <div className="hero-btns flex flex-col sm:flex-row gap-4">
            <Link
              href="/support"
              className="bg-[#CC0000] hover:bg-[#b30000] text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-red-900/30"
            >
              Get a Free Consultation
            </Link>
            <Link
              href="/solutions"
              className="border border-white/40 hover:border-white/80 hover:bg-white/10 text-white/90 hover:text-white font-semibold px-8 py-4 rounded-full text-lg transition-all duration-200"
            >
              Explore Solutions
            </Link>
          </div>

          <div className="hero-meta mt-10 flex flex-wrap gap-6 text-sm text-white/50">
            <span className="flex items-center gap-2"><Phone className="w-4 h-4 shrink-0" />{phone}</span>
            <span className="flex items-center gap-2"><MapPin className="w-4 h-4 shrink-0" />{address}</span>
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="hero-meta absolute bottom-8 left-1/2 -translate-x-1/2 z-10 flex flex-col items-center gap-2 text-white/25">
          <span className="text-[10px] tracking-[0.22em] uppercase font-medium">Scroll</span>
          <div className="scroll-bounce"><ChevronDown className="w-4 h-4" /></div>
        </div>
      </section>

      {/* ── Stats ───────────────────────────────────────────────── */}
      <section className="py-16 px-6 border-y border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto grid grid-cols-2 md:grid-cols-4 gap-8">
          <CounterStats stats={stats} />
        </div>
      </section>

      {/* ── Solutions ───────────────────────────────────────────── */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection>
            <div className="mb-16">
              <p className="text-[#CC0000] text-sm font-semibold tracking-widest uppercase mb-3">What We Do</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-4 max-w-xl">Complete Telecom &amp; IT Solutions</h2>
              <p className="text-gray-500 text-lg max-w-2xl">From your phone system to your network backbone — we design, install, and support the technology your business runs on.</p>
            </div>
          </AnimatedSection>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((svc: { title: string; description: string }, i: number) => {
              const Icon = serviceIcons[i % serviceIcons.length];
              return (
                <AnimatedSection key={svc.title} delay={i * 80}>
                  <div className="bg-gray-50 border border-gray-200 rounded-2xl p-7 hover:border-[#CC0000]/40 hover:bg-red-50/60 hover:-translate-y-1.5 hover:shadow-xl hover:shadow-red-900/5 transition-all duration-300 group h-full cursor-default">
                    <div className="w-11 h-11 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-5 group-hover:border-[#CC0000]/30 group-hover:bg-red-50 transition-all duration-300 shadow-sm">
                      <Icon className="w-5 h-5 text-[#CC0000]" />
                    </div>
                    <h3 className="text-base font-semibold mb-2 group-hover:text-[#CC0000] transition-colors duration-200">{svc.title}</h3>
                    <p className="text-gray-500 text-sm leading-relaxed">{svc.description}</p>
                  </div>
                </AnimatedSection>
              );
            })}
          </div>

          <AnimatedSection delay={300}>
            <div className="mt-12">
              <Link href="/solutions" className="text-[#CC0000] hover:text-[#b30000] font-medium transition-colors inline-flex items-center gap-1.5 group">
                View all solutions
                <span className="group-hover:translate-x-1 transition-transform inline-block">&#8594;</span>
              </Link>
            </div>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Why Choose Us ───────────────────────────────────────── */}
      <section className="relative py-24 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1573164713988-8665fc963095?w=1920&q=80&fit=crop"
          alt="Business technology"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/82" />
        <div className="absolute inset-0 grid-overlay opacity-40" />

        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <div className="grid md:grid-cols-2 gap-16 items-center">
            <AnimatedSection animation="anim-slide-left">
              <p className="text-[#CC0000] text-sm font-semibold tracking-widest uppercase mb-3">Why Network South</p>
              <h2 className="text-3xl md:text-5xl font-bold mb-6">Your Local Telecom Partner</h2>
              <p className="text-white/70 leading-relaxed mb-6">For over 30 years, we&apos;ve been helping businesses across Raleigh-Durham stay connected and secure. We don&apos;t just sell technology — we integrate, support, and grow with you.</p>
              <p className="text-white/70 leading-relaxed mb-8">Every client gets on-site training after installation, 24/7 on-call support, and access to best-in-class products from the industry&apos;s top manufacturers.</p>
              <Link href="/about" className="text-[#CC0000] hover:text-red-400 font-medium transition-colors inline-flex items-center gap-1.5 group">
                Learn about our story
                <span className="group-hover:translate-x-1 transition-transform inline-block">&#8594;</span>
              </Link>
            </AnimatedSection>

            <div className="grid grid-cols-1 gap-3">
              {whyUs.map((item, i) => (
                <AnimatedSection key={item.title} animation="anim-slide-right" delay={i * 100}>
                  <div className="flex gap-4 bg-white/[0.06] border border-white/10 rounded-xl p-5 hover:bg-white/[0.09] hover:border-white/20 transition-all duration-200">
                    <div className="w-1.5 h-1.5 bg-[#CC0000] rounded-full mt-2.5 shrink-0" />
                    <div>
                      <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                      <p className="text-white/60 text-sm leading-relaxed">{item.desc}</p>
                    </div>
                  </div>
                </AnimatedSection>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ── Industries ──────────────────────────────────────────── */}
      <section className="py-24 px-6 bg-gray-50">
        <div className="max-w-7xl mx-auto">
          <AnimatedSection className="text-center mb-16">
            <p className="text-[#CC0000] text-sm font-semibold tracking-widest uppercase mb-3">Industries We Serve</p>
            <h2 className="text-3xl md:text-5xl font-bold mb-4">Built for Your Industry</h2>
            <p className="text-gray-500 text-lg max-w-xl mx-auto">We understand the unique communication needs of businesses across every sector.</p>
          </AnimatedSection>

          <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-7 gap-4">
            {industries.map(({ Icon, label }, i) => (
              <AnimatedSection key={label} delay={i * 60}>
                <Link
                  href="/industries"
                  className="bg-white border border-gray-200 rounded-2xl p-6 text-center hover:border-[#CC0000]/40 hover:bg-red-50/60 hover:-translate-y-1 hover:shadow-lg hover:shadow-red-900/5 transition-all duration-300 group block h-full"
                >
                  <div className="flex justify-center mb-3">
                    <Icon className="w-7 h-7 text-gray-400 group-hover:text-[#CC0000] transition-colors duration-200" />
                  </div>
                  <div className="text-sm font-medium text-gray-700">{label}</div>
                </Link>
              </AnimatedSection>
            ))}
          </div>

          <AnimatedSection delay={350} className="text-center mt-10">
            <Link href="/industries" className="text-[#CC0000] hover:text-[#b30000] font-medium transition-colors inline-flex items-center gap-1.5 group">
              See industry solutions
              <span className="group-hover:translate-x-1 transition-transform inline-block">&#8594;</span>
            </Link>
          </AnimatedSection>
        </div>
      </section>

      {/* ── Partners Marquee ────────────────────────────────────── */}
      <section className="py-20 border-t border-gray-200 overflow-hidden">
        <AnimatedSection className="max-w-7xl mx-auto px-6 text-center mb-10">
          <p className="text-gray-400 text-sm font-medium tracking-widest uppercase">Trusted Technology Partners</p>
        </AnimatedSection>
        <MarqueeLogos partners={partners} />
      </section>

      {/* ── CTA ─────────────────────────────────────────────────── */}
      <section className="relative py-28 px-6 overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1497366216548-37526070297c?w=1920&q=80&fit=crop"
          alt="Modern office"
          fill
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/80" />
        <div className="absolute inset-0 grid-overlay opacity-25" />

        <AnimatedSection className="relative z-10 max-w-3xl mx-auto text-center text-white">
          <h2 className="text-3xl md:text-5xl font-bold mb-6">
            Ready to upgrade your <br />
            <span className="text-[#CC0000]">business communications?</span>
          </h2>
          <p className="text-white/60 text-lg mb-10">
            Get a free consultation with one of our telecom specialists. No pressure — just expert advice tailored to your business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/support"
              className="bg-[#CC0000] hover:bg-[#b30000] text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200 hover:scale-[1.02] active:scale-[0.98] shadow-lg shadow-red-900/30"
            >
              Schedule a Consultation
            </Link>
            <a
              href={`tel:${phone.replace(/\D/g, "")}`}
              className="border border-white/30 hover:border-white/60 hover:bg-white/10 text-white/80 hover:text-white font-semibold px-10 py-4 rounded-full text-lg transition-all duration-200"
            >
              Call {phone}
            </a>
          </div>
        </AnimatedSection>
      </section>

      <Footer />
    </main>
  );
}
