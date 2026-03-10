import Link from "next/link";
import Image from "next/image";
import Footer from "@/components/Footer";

const values = [
  { title: "Efficiency", desc: "We value your time. Every installation is planned and executed to minimize disruption to your business operations." },
  { title: "Rapid Repairs", desc: "Service repairs completed within 24 hours of your request — because downtime costs you money." },
  { title: "Always Available", desc: "Our staff is on call 24/7 for customer support. Whenever you need us, we're here." },
];
const process = [
  { step: "01", title: "Consultation", desc: "We start by understanding your business, your current setup, and your goals." },
  { step: "02", title: "Installation", desc: "Our certified technicians handle every detail of the install — on time, on budget." },
  { step: "03", title: "Training", desc: "We provide comprehensive on-site training so your team is confident from day one." },
  { step: "04", title: "Maintenance", desc: "Ongoing maintenance and proactive monitoring to keep your systems running smoothly." },
  { step: "05", title: "Cost Savings", desc: "We continuously look for ways to optimize your telecom spend and reduce overhead." },
];

export default function About() {
  return (
    <main className="bg-white text-gray-900 pt-16">
      {/* Hero */}
      <section className="relative py-28 px-6 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1521737711867-e3b97375f902?w=1920&q=80&fit=crop" alt="Professional team" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <p className="text-[#CC0000] text-sm font-semibold tracking-widest uppercase mb-3">About Us</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">Raleigh-Durham&apos;s Trusted Telecom Partner</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">Since 1994, Network South has been delivering reliable, dynamic, and secure communications to businesses across the region. We&apos;re not just a vendor — we&apos;re a long-term partner invested in your success.</p>
        </div>
      </section>

      {/* Mission */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <p className="text-[#CC0000] text-sm font-semibold tracking-widest uppercase mb-3">Our Mission</p>
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Seamlessly Integrating Communications Into Your Business</h2>
            <p className="text-gray-600 leading-relaxed mb-4">Our mission is to seamlessly integrate reliable, dynamic, and secure communications into the day-to-day operations of every customer. We aspire to lead in customer-focused telecommunications within the Raleigh-Durham region.</p>
            <p className="text-gray-600 leading-relaxed">Founded in 1994, we&apos;ve spent over three decades building relationships, earning trust, and staying ahead of an ever-evolving industry. From traditional phone systems to cloud VoIP and managed IT, we&apos;ve grown with our clients every step of the way.</p>
          </div>
          <div className="relative rounded-2xl overflow-hidden h-96">
            <Image src="https://images.unsplash.com/photo-1600880292203-757bb62b4baf?w=800&q=80&fit=crop" alt="Team collaboration" fill className="object-cover" />
          </div>
        </div>
      </section>

      {/* Core Values */}
      <section className="py-24 px-6 bg-gray-50 border-y border-gray-200">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-[#CC0000] text-sm font-semibold tracking-widest uppercase mb-3">Our Values</p>
            <h2 className="text-3xl md:text-4xl font-bold">What Drives Us</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v) => (
              <div key={v.title} className="bg-white border border-gray-200 rounded-2xl p-8 hover:border-[#CC0000]/40 transition-all">
                <div className="w-10 h-10 bg-red-50 rounded-xl flex items-center justify-center mb-5">
                  <div className="w-3 h-3 bg-[#CC0000] rounded-full" />
                </div>
                <h3 className="text-xl font-semibold mb-3 text-[#CC0000]">{v.title}</h3>
                <p className="text-gray-500 leading-relaxed">{v.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Our Process */}
      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto">
          <div className="mb-16">
            <p className="text-[#CC0000] text-sm font-semibold tracking-widest uppercase mb-3">How We Work</p>
            <h2 className="text-3xl md:text-4xl font-bold max-w-xl">A Proven Process From Start to Finish</h2>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {process.map((p) => (
              <div key={p.step} className="border border-gray-200 rounded-2xl p-6 bg-gray-50">
                <div className="text-3xl font-bold text-[#CC0000]/30 mb-4">{p.step}</div>
                <h3 className="font-semibold mb-2">{p.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{p.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Careers CTA */}
      <section className="py-20 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-2">Join the Network South Team</h2>
            <p className="text-gray-500">We&apos;re always looking for talented professionals who are passionate about technology and customer service.</p>
          </div>
          <Link href="/about/careers" className="bg-[#CC0000] hover:bg-[#b30000] text-white font-semibold px-8 py-4 rounded-full transition-colors whitespace-nowrap">View Open Positions</Link>
        </div>
      </section>

      <Footer />
    </main>
  );
}
