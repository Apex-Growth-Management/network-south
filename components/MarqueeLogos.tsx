"use client";

export default function MarqueeLogos({ partners }: { partners: string[] }) {
  const all = [...partners, ...partners];

  return (
    <div className="relative overflow-hidden">
      {/* Fade edges */}
      <div className="absolute left-0 top-0 bottom-0 w-24 bg-gradient-to-r from-white to-transparent z-10 pointer-events-none" />
      <div className="absolute right-0 top-0 bottom-0 w-24 bg-gradient-to-l from-white to-transparent z-10 pointer-events-none" />
      <div className="flex animate-marquee whitespace-nowrap">
        {all.map((p, i) => (
          <span
            key={`${p}-${i}`}
            className="inline-block text-gray-400 hover:text-[#CC0000] text-sm font-semibold tracking-wide transition-colors duration-200 cursor-default px-8"
          >
            {p}
          </span>
        ))}
      </div>
    </div>
  );
}
