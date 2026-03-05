import Link from "next/link";
import { CreditCard, Phone, Mail } from "lucide-react";

export default function Payment() {
  const options = [
    { Icon: CreditCard, title: "Pay Online", desc: "Use our secure payment portal to pay by credit card or ACH bank transfer.", cta: "Open Payment Portal", href: "#" },
    { Icon: Phone, title: "Pay by Phone", desc: "Call us during business hours and we'll process your payment over the phone.", cta: "800.948.9914", href: "tel:8009489914" },
    { Icon: Mail, title: "Mail a Check", desc: "Send a check payable to Network South, Inc. to our office address.", cta: "457 Park Ave, Youngsville, NC 27596", href: "#" },
  ];

  return (
    <main className="bg-white text-gray-900 pt-16">
      <section className="py-28 px-6">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-[#CC0000] text-sm font-semibold tracking-widest uppercase mb-3">Make a Payment</p>
          <h1 className="text-4xl md:text-5xl font-bold mb-6">Secure Online Payment</h1>
          <p className="text-gray-600 text-lg leading-relaxed mb-12">Pay your Network South invoice quickly and securely. If you need help finding your invoice number or have billing questions, contact our office directly.</p>

          <div className="bg-gray-50 border border-gray-200 rounded-2xl p-10 mb-10 text-left">
            <h2 className="text-xl font-bold mb-6">Payment Options</h2>
            <div className="space-y-4">
              {options.map(({ Icon, title, desc, cta, href }) => (
                <div key={title} className="flex items-start gap-5 p-5 border border-gray-200 rounded-xl hover:border-[#CC0000]/30 transition-all bg-white">
                  <div className="w-10 h-10 bg-gray-50 border border-gray-200 rounded-xl flex items-center justify-center shrink-0">
                    <Icon className="w-4 h-4 text-[#CC0000]" />
                  </div>
                  <div className="flex-1">
                    <h3 className="font-semibold mb-1">{title}</h3>
                    <p className="text-gray-500 text-sm mb-3">{desc}</p>
                    <a href={href} className="text-[#CC0000] hover:text-[#b30000] text-sm font-medium transition-colors">{cta} →</a>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <div className="bg-red-50 border border-[#CC0000]/20 rounded-2xl p-8 text-left">
            <h3 className="font-semibold mb-3 text-[#CC0000]">Billing Questions?</h3>
            <p className="text-gray-500 text-sm leading-relaxed mb-4">If you have questions about your invoice, want to set up auto-pay, or need to update your billing information, our team is happy to help.</p>
            <div className="flex flex-col sm:flex-row gap-4">
              <a href="tel:8009489914" className="text-[#CC0000] hover:text-[#b30000] text-sm font-medium transition-colors flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> 800.948.9914</a>
              <a href="tel:9198724771" className="text-[#CC0000] hover:text-[#b30000] text-sm font-medium transition-colors flex items-center gap-1.5"><Phone className="w-3.5 h-3.5" /> (919) 872-4771</a>
            </div>
          </div>

          <div className="mt-10">
            <Link href="/" className="text-gray-400 hover:text-gray-600 text-sm transition-colors">← Back to Home</Link>
          </div>
        </div>
      </section>

      <footer className="border-t border-gray-200 py-10 px-6 bg-white">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-6 text-gray-400 text-sm">
          <div><span className="text-[#CC0000] font-semibold">Network</span><span className="text-gray-600"> South, Inc.</span><span className="ml-3">© {new Date().getFullYear()} All rights reserved.</span></div>
          <div className="flex gap-6"><span>457 Park Ave, Youngsville, NC 27596</span><a href="tel:8009489914" className="hover:text-gray-600 transition-colors">800.948.9914</a></div>
        </div>
      </footer>
    </main>
  );
}
