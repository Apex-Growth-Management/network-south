"use client";
import { useEffect, useRef, useState } from "react";

interface Stat {
  value: string;
  label: string;
}

function easeOutCubic(t: number) {
  return 1 - Math.pow(1 - t, 3);
}

function parseValue(val: string): { prefix: string; num: number; suffix: string } {
  const m = val.match(/^([^\d]*)(\d+)([^\d]*)$/);
  if (!m) return { prefix: "", num: NaN, suffix: val };
  return { prefix: m[1], num: parseInt(m[2], 10), suffix: m[3] };
}

function StatItem({ value, label }: Stat) {
  const { prefix, num, suffix } = parseValue(value);
  const [display, setDisplay] = useState(isNaN(num) ? value : `${prefix}0${suffix}`);
  const ref = useRef<HTMLDivElement>(null);
  const started = useRef(false);

  useEffect(() => {
    if (isNaN(num)) return;
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting && !started.current) {
          started.current = true;
          const duration = 1600;
          const start = performance.now();
          const tick = (now: number) => {
            const p = Math.min((now - start) / duration, 1);
            setDisplay(`${prefix}${Math.round(easeOutCubic(p) * num)}${suffix}`);
            if (p < 1) requestAnimationFrame(tick);
          };
          requestAnimationFrame(tick);
          observer.unobserve(el);
        }
      },
      { threshold: 0.5 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [num, prefix, suffix]);

  return (
    <div ref={ref} className="text-center">
      <div className="text-3xl md:text-4xl font-bold text-[#CC0000] mb-1 tabular-nums tracking-tight">
        {display}
      </div>
      <div className="text-gray-500 text-sm">{label}</div>
    </div>
  );
}

export default function CounterStats({ stats }: { stats: Stat[] }) {
  return (
    <>
      {stats.map((s) => (
        <StatItem key={s.label} {...s} />
      ))}
    </>
  );
}
