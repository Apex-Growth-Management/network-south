"use client";
import { useEffect, useRef, ReactNode } from "react";

type Anim = "anim-fade-up" | "anim-fade-in" | "anim-slide-left" | "anim-slide-right";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: Anim;
  threshold?: number;
}

export default function AnimatedSection({
  children,
  className = "",
  delay = 0,
  animation = "anim-fade-up",
  threshold = 0.1,
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => {
            el.classList.add("animate-in", animation);
          }, delay);
          observer.unobserve(el);
        }
      },
      { threshold }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [animation, delay, threshold]);

  return (
    <div ref={ref} className={`will-animate ${className}`}>
      {children}
    </div>
  );
}
