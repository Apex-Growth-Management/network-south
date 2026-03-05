import Link from "next/link";
import Image from "next/image";
import { Car, HeartPulse, Truck, Briefcase, Scale, GraduationCap, Cpu } from "lucide-react";

const industries = [
  { Icon: Car, title: "Automotive", description: "Dealerships and service repair shops need reliable departmental communication, call reporting, and customer history access. We deliver phone systems tailored to the fast-paced automotive environment.", features: ["Call reporting & analytics","Multi-department routing","Customer history integration","Service bay communication"] },
  { Icon: HeartPulse, title: "Healthcare", description: "Hospitals, doctor offices, and medical centers need telecom solutions that provide reliable call service while supporting internal patient management systems. We understand HIPAA-compliant communication.", features: ["Patient management integration","HIPAA-compliant solutions","Nurse call systems","Reliable emergency lines"] },
  { Icon: Truck, title: "Transportation", description: "Transportation and professional service companies require seamless dispatch-to-employee connectivity with optimized mobility and call routing capabilities.", features: ["Dispatch integration","Mobile worker solutions","GPS & fleet communication","Optimized call routing"] },
  { Icon: Briefcase, title: "Professional Services", description: "Professional service firms need unified communications that project a polished, reliable image while supporting a distributed workforce and client-facing operations.", features: ["Unified communications","Remote work support","Auto-attendant & voicemail","CRM integration"] },
  { Icon: Scale, title: "Legal", description: "Law offices handle high call volumes and require unified telecom solutions that support efficient operations, call recording, and secure remote access for attorneys.", features: ["Call recording & archiving","Secure remote access","High call volume support","Conference calling"] },
  { Icon: GraduationCap, title: "Education", description: "Schools and universities need communications that connect teachers, administrators, parents, and students — including mobile applications and video conferencing integration.", features: ["Campus-wide connectivity","Mobile app integration","Video conferencing","Parent & student portals"] },
  { Icon: Cpu, title: "Technology", description: "Tech companies need telecommunications that can be updated and built upon as new technologies emerge, including web video conferencing and cloud compatibility.", features: ["Cloud-compatible systems","Web video conferencing","Scalable infrastructure","API integrations"] },
];

export default function Industries() {
  return (
    <main className="bg-white text-gray-900 pt-16">
      <section className="relative py-28 px-6 overflow-hidden">
        <Image src="https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?w=1920&q=80&fit=crop" alt="Business districts" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/80" />
        <div className="relative z-10 max-w-7xl mx-auto text-white">
          <p className="text-[#CC0000] text-sm font-semibold tracking-widest uppercase mb-3">Industries</p>
          <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-3xl">Solutions Built for Your Industry</h1>
          <p className="text-white/70 text-lg max-w-2xl leading-relaxed">Every industry has unique communication challenges. We bring deep expertise across seven sectors to deliver telecom and IT solutions that truly fit your business.</p>
        </div>
      </section>

      <section className="py-24 px-6">
        <div className="max-w-7xl mx-auto grid grid-cols-1 gap-8">
          {industries.map(({ Icon, title, description, features }) => (
            <div key={title} className="grid md:grid-cols-2 gap-10 items-center p-8 rounded-2xl border border-gray-200 bg-gray-50 hover:border-[#CC0000]/30 transition-all">
              <div>
                <div className="w-12 h-12 bg-white border border-gray-200 rounded-xl flex items-center justify-center mb-5">
                  <Icon className="w-5 h-5 text-[#CC0000]" />
                </div>
                <h2 className="text-2xl font-bold mb-4 text-[#CC0000]">{title}</h2>
                <p className="text-gray-600 leading-relaxed mb-6">{description}</p>
                <Link href="/support" className="text-[#CC0000] hover:text-[#b30000] text-sm font-medium transition-colors">Learn more about {title} solutions →</Link>
              </div>
              <div className="grid grid-cols-2 gap-3">
                {features.map((f) => (
                  <div key={f} className="flex items-start gap-2 bg-white rounded-xl p-4 border border-gray-200">
                    <div className="w-1.5 h-1.5 bg-[#CC0000] rounded-full mt-1.5 shrink-0" />
                    <span className="text-gray-700 text-sm">{f}</span>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="py-20 px-6 border-t border-gray-200 bg-gray-50">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-2xl md:text-4xl font-bold mb-4">Don&apos;t See Your Industry?</h2>
          <p className="text-gray-500 mb-8">We work with businesses of all types. Contact us for a custom consultation.</p>
          <Link href="/support" className="bg-[#CC0000] hover:bg-[#b30000] text-white font-semibold px-8 py-4 rounded-full transition-colors">Talk to a Specialist</Link>
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
