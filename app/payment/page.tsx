import Link from "next/link";

export default function Payment() {
  return (
    <main className="bg-[#080c14] text-white pt-16">
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-blue-400 text-sm font-semibold tracking-widest uppercase mb-3">Make a Payment</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">
            Secure Online Payment
          </h1>
          <p className="text-white/60 text-lg leading-relaxed mb-12">
            Pay your Network South invoice quickly and securely. If you need help finding your invoice number or have billing questions, contact our office directly.
          </p>

          {/* Payment Card */}
          <div className="bg-white/[0.03] border border-white/10 rounded-2xl p-10 mb-10 text-left">
            <h2 className="text-xl font-bold mb-6">Payment Options</h2>
            <div className="space-y-4">
              {[
                { icon: "💳", title: "Pay Online", desc: "Use our secure payment portal to pay by credit card or ACH bank transfer.", cta: "Open Payment Portal", href: "#" },
                { icon: "📞", title: "Pay by Phone", desc: "Call us during business hours and we'll process your payment over the phone.", cta: "800.948.9914", href: "tel:8009489914" },
                { icon: "✉️", title: "Mail a Check", desc: "Send a check payable to Network South, Inc. to our office address.", cta: "457 Park Ave, Youngsville, NC 27596", href: "#" },
              ].map((opt) => (
                <div key={opt.title} className="flex items-start gap-5 p-5 border border-white/10 rounded-xl hover:border-blue-500/30 transition-all">
                  <div className="text-3xl">{opt.icon}</div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{opt.title}</h3>
                    <p className="text-white/50 text-sm mb-3">{opt.desc}</p>
                    <a
                      href={opt.href}
                      className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors"
                    >
                      {opt.cta} →
                    </a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Billing info */}
          <div className="bg-blue-600/10 border border-blue-500/20 rounded-2xl p-8 text-left">
            <h3 className="font-semibold mb-3 text-blue-300">Billing Questions?</h3>
            <p className="text-white/50 text-sm leading-relaxed mb-4">
              If you have questions about your invoice, want to set up auto-pay, or need to update your billing information, our team is happy to help.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:8009489914" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                📞 800.948.9914
              </a>
              <a href="tel:9198724771" className="text-blue-400 hover:text-blue-300 text-sm font-medium transition-colors">
                📞 (919) 872-4771
              </a>
            </div>
          </div>

          <div className="mt-10">
            <Link href="/" className="text-white/40 hover:text-white/60 text-sm transition-colors">
              ← Back to Home
            </Link>
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
