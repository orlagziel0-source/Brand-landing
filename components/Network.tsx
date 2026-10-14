"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { network } from "@/lib/network";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Full literal class strings so Tailwind's JIT picks them up.
const GROUP_STYLES = [
  "bg-accent/10 text-accent",
  "bg-pine/10 text-pine",
  "bg-ochre/10 text-ochre",
  "bg-denim/10 text-denim",
];

// Vendors worked with over the years: a slow running strip, each category
// marked by a small colored label, then a short note on local small
// businesses. Moved by a requestAnimationFrame loop (like the photo strip)
// rather than a CSS animation; static for reduced motion.
export default function Network() {
  const { locale, dir } = useLanguage();
  const copy = network[locale] ?? network.en;
  const trackRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (window.matchMedia?.("(prefers-reduced-motion: reduce)").matches) return;
    let off = 0;
    let last: number | null = null;
    let raf = 0;
    const step = (ts: number) => {
      const tr = trackRef.current;
      if (last === null) last = ts;
      const dt = Math.min((ts - last) / 1000, 0.1);
      last = ts;
      if (tr) {
        const half = tr.scrollWidth / 2;
        if (half > 0) {
          off -= 40 * dt;
          if (off <= -half) off += half;
          tr.style.transform = `translateX(${off}px)`;
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const strip = (hidden: boolean) => (
    <div className="flex shrink-0 items-center" aria-hidden={hidden || undefined}>
      {copy.groups.map((g, i) => (
        <span key={g.title} dir={dir} className="flex shrink-0 items-center gap-4 pe-10">
          <span className={`rounded-full px-2.5 py-0.5 text-[0.75rem] font-semibold ${GROUP_STYLES[i % GROUP_STYLES.length]}`}>
            {g.title}
          </span>
          {g.names.map((n, j) => (
            <span key={n} className="flex items-center gap-4 whitespace-nowrap text-[1.05rem] font-medium text-ink/80 md:text-lg">
              {j > 0 && <span className="text-[0.6rem] text-stone/50" aria-hidden="true">✦</span>}
              {n}
            </span>
          ))}
        </span>
      ))}
    </div>
  );

  return (
    <section id="network" className="scroll-mt-28 py-7 md:py-10">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="flex flex-col gap-1.5"
        >
          <h2 className="text-[clamp(1.4rem,2.6vw,2rem)] font-bold text-ink">{copy.title}</h2>
          <p className="max-w-[60ch] text-sm leading-relaxed text-stone md:text-base">{copy.body}</p>
        </motion.div>

        <div className="net-marquee mt-5 border-y border-line py-4">
          <div ref={trackRef} className="net-track">
            {strip(false)}
            {strip(true)}
          </div>
        </div>

        {/* Two quiet notes side by side: local businesses and professional communities */}
        <div className="mt-5 grid grid-cols-1 gap-3 md:grid-cols-2 md:gap-4">
          <div className="border-s-4 border-pine bg-pine/[0.07] px-5 py-3.5">
            <p className="text-sm font-bold text-ink md:text-base">{copy.local.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-stone">{copy.local.body}</p>
          </div>
          <div className="border-s-4 border-denim bg-denim/[0.07] px-5 py-3.5">
            <p className="text-sm font-bold text-ink md:text-base">{copy.community.title}</p>
            <p className="mt-1 text-sm leading-relaxed text-stone">{copy.community.body}</p>
          </div>
        </div>
      </div>
    </section>
  );
}
