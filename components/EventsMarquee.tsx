"use client";

import { useCallback, useEffect, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const IMAGE_COUNT = 10;
const images = Array.from(
  { length: IMAGE_COUNT },
  (_, i) => `/images/gallery/event-${String(i + 1).padStart(2, "0")}.jpg`
);

const SPEED_PX_PER_SEC = 55;
const RESUME_DELAY_MS = 2500;

function ChevronLeft({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="15 18 9 12 15 6" />
    </svg>
  );
}

function ChevronRight({ className }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
    >
      <polyline points="9 18 15 12 9 6" />
    </svg>
  );
}

export default function EventsMarquee() {
  const { dict } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);

  // Duplicate the set back-to-back so wrapping the offset by exactly the
  // width of one copy loops seamlessly, forever, like a conveyor belt.
  const track = [...images, ...images];

  const offsetRef = useRef(0);
  const halfWidthRef = useRef(0);
  const hoverPausedRef = useRef(false);
  const manualPausedRef = useRef(false);
  const resumeTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);
  const reducedMotionRef = useRef(false);

  const applyTransform = useCallback(() => {
    const el = trackRef.current;
    if (el) el.style.transform = `translateX(${offsetRef.current}px)`;
  }, []);

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    reducedMotionRef.current =
      typeof window !== "undefined" &&
      window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    const measure = () => {
      halfWidthRef.current = el.scrollWidth / 2;
    };
    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);

    const step = (ts: number) => {
      if (lastTsRef.current === null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;

      const half = halfWidthRef.current;
      const paused =
        reducedMotionRef.current ||
        hoverPausedRef.current ||
        manualPausedRef.current;

      if (!paused && half > 0) {
        offsetRef.current -= SPEED_PX_PER_SEC * dt;
        if (offsetRef.current <= -half) offsetRef.current += half;
        applyTransform();
      }
      rafRef.current = requestAnimationFrame(step);
    };
    rafRef.current = requestAnimationFrame(step);

    return () => {
      ro.disconnect();
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
      if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    };
  }, [applyTransform]);

  const nudge = (direction: 1 | -1) => {
    const half = halfWidthRef.current;
    if (half <= 0) return;
    const itemWidth = half / IMAGE_COUNT;

    offsetRef.current -= direction * itemWidth;
    // Keep the offset wrapped into (-half, 0] so a run of clicks in either
    // direction pages through the belt forever without hitting empty space.
    if (offsetRef.current <= -half) offsetRef.current += half;
    if (offsetRef.current > 0) offsetRef.current -= half;
    applyTransform();

    manualPausedRef.current = true;
    if (resumeTimeoutRef.current) clearTimeout(resumeTimeoutRef.current);
    resumeTimeoutRef.current = setTimeout(() => {
      manualPausedRef.current = false;
    }, RESUME_DELAY_MS);
  };

  return (
    // Forced to LTR regardless of the page's language: in RTL, a flex row
    // lays its items out right-to-left and starts flush with the
    // container's *right* edge instead of its left, which silently broke
    // the whole translateX(-px) math above (most of the strip ended up
    // already off-screen before any motion even started). The photos have
    // no reading direction of their own, so pinning this one region to LTR
    // is safe and keeps the belt's math simple in both languages.
    <section
      dir="ltr"
      aria-label={dict.gallery.label}
      className="relative overflow-hidden border-y border-line bg-paper py-5 md:py-7"
      onMouseEnter={() => {
        hoverPausedRef.current = true;
      }}
      onMouseLeave={() => {
        hoverPausedRef.current = false;
      }}
    >
      <div
        ref={trackRef}
        className="flex w-max gap-3 will-change-transform md:gap-4"
      >
        {track.map((src, i) => (
          <div
            key={i}
            className="h-36 w-[220px] shrink-0 overflow-hidden rounded-md sm:h-44 sm:w-[280px] md:h-56 md:w-[360px]"
            aria-hidden={i >= IMAGE_COUNT}
          >
            <img
              src={src}
              alt={`${dict.gallery.alt} ${(i % IMAGE_COUNT) + 1}`}
              className="h-full w-full object-cover"
              loading={i < IMAGE_COUNT ? "eager" : "lazy"}
            />
          </div>
        ))}
      </div>

      <button
        type="button"
        onClick={() => nudge(-1)}
        aria-label={dict.gallery.prev}
        className="absolute left-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-ink shadow-md ring-1 ring-line transition-colors duration-200 hover:bg-paper md:left-4 md:h-10 md:w-10"
      >
        <ChevronLeft className="h-5 w-5" />
      </button>
      <button
        type="button"
        onClick={() => nudge(1)}
        aria-label={dict.gallery.next}
        className="absolute right-2 top-1/2 flex h-9 w-9 -translate-y-1/2 items-center justify-center rounded-full bg-paper/90 text-ink shadow-md ring-1 ring-line transition-colors duration-200 hover:bg-paper md:right-4 md:h-10 md:w-10"
      >
        <ChevronRight className="h-5 w-5" />
      </button>
    </section>
  );
}
