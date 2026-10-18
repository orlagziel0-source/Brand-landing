"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { network } from "@/lib/network";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

// Full literal class strings so Tailwind's JIT picks them up.
const GROUP_STYLES = [
  "text-accent border-accent/30",
  "text-pine border-pine/30",
  "text-ochre border-ochre/30",
  "text-denim border-denim/30",
];

// Vendors worked with over the years: a slow running strip, each category
// marked by a small colored label, then a short note on local small
// businesses. Moved by a requestAnimationFrame loop (like the photo strip)
// rather than a CSS animation; stops on hover, can be dragged or stepped
// with the arrows; static for reduced motion.
export default function Network() {
  const { locale, dir } = useLanguage();
  const copy = network[locale] ?? network.en;
  const trackRef = useRef<HTMLDivElement>(null);
  const offRef = useRef(0);
  const pendingRef = useRef(0); // distance still to glide after an arrow click
  const hoverRef = useRef(false);
  const dragRef = useRef<{ x: number } | null>(null);
  const holdUntilRef = useRef(0); // auto-run waits until this time after manual moves

  const wrap = (tr: HTMLDivElement) => {
    const half = tr.scrollWidth / 2;
    if (half <= 0) return;
    while (offRef.current <= -half) offRef.current += half;
    while (offRef.current > 0) offRef.current -= half;
    tr.style.transform = `translateX(${offRef.current}px)`;
  };

  useEffect(() => {
    const reduced = window.matchMedia?.("(prefers-reduced-motion: reduce)").matches;
    let last: number | null = null;
    let raf = 0;
    const step = (ts: number) => {
      const tr = trackRef.current;
      if (last === null) last = ts;
      const dt = Math.min((ts - last) / 1000, 0.1);
      last = ts;
      if (tr) {
        if (pendingRef.current !== 0) {
          // glide toward the arrow target
          const move = pendingRef.current * Math.min(1, dt * 8);
          pendingRef.current = Math.abs(pendingRef.current - move) < 0.5 ? 0 : pendingRef.current - move;
          offRef.current += move;
          wrap(tr);
        } else if (!reduced && !hoverRef.current && !dragRef.current && ts > holdUntilRef.current) {
          offRef.current -= 40 * dt;
          wrap(tr);
        }
      }
      raf = requestAnimationFrame(step);
    };
    raf = requestAnimationFrame(step);
    return () => cancelAnimationFrame(raf);
  }, []);

  const hold = () => {
    holdUntilRef.current = performance.now() + 2500;
  };
  const nudge = (direction: 1 | -1) => {
    pendingRef.current += -direction * 280;
    hold();
  };

  const strip = (hidden: boolean) => (
    <div className="flex shrink-0 items-start" aria-hidden={hidden || undefined}>
      {copy.groups.map((g, i) => (
        // Category label sits above its names, with a thin rule spanning the group
        <span key={g.title} dir={dir} className="flex shrink-0 flex-col gap-2 pe-14">
          <span className={`border-b pb-1 text-[0.82rem] font-bold uppercase tracking-[0.04em] ${GROUP_STYLES[i % GROUP_STYLES.length]}`}>
            {g.title}
          </span>
          <span className="flex items-center gap-3 md:gap-4">
            {g.names.map((n, j) => (
              <span key={n} className="flex items-center gap-3 whitespace-nowrap text-[0.95rem] font-medium text-ink/80 md:gap-4 md:text-lg">
                {j > 0 && <span className="text-[0.6rem] text-stone/50" aria-hidden="true">✦</span>}
                {n}
              </span>
            ))}
          </span>
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

        {/* Hover to stop, drag to move, arrows to step through */}
        <div
          dir="ltr"
          className="relative mt-5 border-y border-line"
          onPointerEnter={(e) => {
            if (e.pointerType === "mouse") hoverRef.current = true;
          }}
          onPointerLeave={(e) => {
            if (e.pointerType === "mouse") hoverRef.current = false;
          }}
        >
          <div
            className="net-marquee cursor-grab touch-pan-y py-4 active:cursor-grabbing"
            onPointerDown={(e) => {
              dragRef.current = { x: e.clientX };
              (e.currentTarget as HTMLElement).setPointerCapture(e.pointerId);
            }}
            onPointerMove={(e) => {
              const d = dragRef.current;
              const tr = trackRef.current;
              if (!d || !tr) return;
              offRef.current += e.clientX - d.x;
              d.x = e.clientX;
              wrap(tr);
            }}
            onPointerUp={() => {
              dragRef.current = null;
              hold();
            }}
            onPointerCancel={() => {
              dragRef.current = null;
              hold();
            }}
          >
            <div ref={trackRef} className="net-track select-none">
              {strip(false)}
              {strip(true)}
            </div>
          </div>
          <button
            type="button"
            onClick={() => nudge(-1)}
            aria-label={locale === "he" ? "אחורה" : "Back"}
            className="absolute left-0 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-ink shadow-md ring-1 ring-line transition-colors hover:bg-paper"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><polyline points="15 18 9 12 15 6" /></svg>
          </button>
          <button
            type="button"
            onClick={() => nudge(1)}
            aria-label={locale === "he" ? "קדימה" : "Forward"}
            className="absolute right-0 top-1/2 flex h-8 w-8 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-ink shadow-md ring-1 ring-line transition-colors hover:bg-paper"
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4"><polyline points="9 18 15 12 9 6" /></svg>
          </button>
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
