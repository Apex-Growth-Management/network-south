import Link from "next/link";

export default function Careers() {
  return (
    <main className="bg-[#0a0a0a] text-white pt-16">
      <section className="py-28 px-6">
        <div className="max-w-7xl mx-auto">
          <Link href="/about" className="text-red-400 hover:text-red-300 text-sm transition-colors mb-8 inline-block">
            ← Back to About
          </Link>
          <p className="text-red-400 text-sm font-semibold tracking-widest uppercase mb-3">Careers</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">
            Grow With Network South
          </h1>
          <p className="text-white/60 text-lg max-w-2xl leading-relaxed mb-16">
            We&apos;re a team of dedicated professionals committed to delivering exceptional telecom and IT solutions. If you&apos;re passionate about technology and customer service, we&apos;d love to hear from you.
          </p>

          {/* Why Work Here */}
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-20">
            {[
              { title: "Established & Stable", desc: "Over 30 years in business means a stable, long-term employer with deep roots in the Raleigh-Durham community." },
              { title: "Growth Opportunities", desc: "As the telecom and IT landscape evolves, so does your career. We invest in training and certification for our team." },
              { title: "Meaningful Work", desc: "Help real businesses stay connected and secure. Your work directly impacts companies across 7 industries." },
            ].map((item) => (
              <div key={item.title} className="bg-white/[0.03] border border-white/10 rounded-2xl p-7 hover:border-red-500/40 transition-all">
                <h3 className="font-semibold text-lg mb-3 text-red-300">{item.title}</h3>
                <p className="text-white/50 text-sm leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>

          {/* Open Positions */}
          <div className="mb-16">
            <h2 className="text-2xl md:text-3xl font-bold mb-8">Current Openings</h2>
            <div className="border border-white/10 rounded-2xl overflow-hidden">
              {[
                { title: "Telecom Systems Technician", type: "Full-Time", location: "Youngsville, NC" },
                { title: "Network Infrastructure Engineer", type: "Full-Time", location: "Raleigh, NC" },
                { title: "Managed IT Support Specialist", type: "Full-Time", location: "Raleigh-Durham, NC" },
                { title: "Sales Account Executive", type: "Full-Time", location: "Raleigh, NC" },
              ].map((job, i) => (
                <div
                  key={job.title}
                  className={`flex flex-col sm:flex-row sm:items-center justify-between gap-4 px-7 py-6 ${i !== 0 ? "border-t border-white/10" : ""} hover:bg-white/[0.03] transition-colors`}
                >
                  <div>
                    <h3 className="font-semibold mb-1">{job.title}</h3>
                    <div className="flex gap-3 text-sm text-white/40">
                      <span>{job.type}</span>
                      <span>·</span>
                      <span>{job.location}</span>
                    </div>
                  </div>
                  <Link
                    href="/support"
                    className="text-red-400 hover:text-red-300 text-sm font-medium transition-colors whitespace-nowrap"
                  >
                    Apply Now →
                  </Link>
                </div>
              ))}
            </div>
          </div>

          {/* CTA */}
          <div className="bg-red-600/10 border border-red-500/20 rounded-2xl p-10 text-center">
            <h2 className="text-2xl font-bold mb-3">Don&apos;t See the Right Role?</h2>
            <p className="text-white/50 mb-6">Send us your resume and let us know how you can contribute to our team.</p>
            <a
              href="mailto:info@networksouth.com"
              className="bg-red-600 hover:bg-red-500 text-white font-semibold px-8 py-3 rounded-full transition-colors"
            >
              Send Your Resume
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
