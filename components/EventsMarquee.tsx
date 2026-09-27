"use client";

import { useEffect, useRef } from "react";
import { useLanguage } from "@/lib/LanguageContext";

const IMAGE_COUNT = 10;
const images = Array.from(
  { length: IMAGE_COUNT },
  (_, i) => `/images/gallery/event-${String(i + 1).padStart(2, "0")}.jpg`
);

export default function EventsMarquee() {
  const { dict } = useLanguage();
  const trackRef = useRef<HTMLDivElement>(null);
  // Duplicate the set back-to-back so sliding the track by exactly the
  // width of one copy loops seamlessly, forever, like a conveyor belt.
  const track = [...images, ...images];

  useEffect(() => {
    const el = trackRef.current;
    if (!el) return;

    // Measure the actual rendered width of one copy (half the track) and
    // hand that exact pixel value to the CSS animation via a custom
    // property, instead of trusting a bare -50% transform. This keeps the
    // loop seamless regardless of the surrounding page's box-sizing or
    // layout quirks, and re-measures on resize since item widths change
    // across breakpoints.
    const measure = () => {
      const half = el.scrollWidth / 2;
      if (half > 0) {
        el.style.setProperty("--marquee-distance", `-${half}px`);
      }
    };

    measure();
    const ro = new ResizeObserver(measure);
    ro.observe(el);
    return () => ro.disconnect();
  }, []);

  return (
    <section
      aria-label={dict.gallery.label}
      className="marquee-row overflow-hidden border-y border-line bg-paper py-5 md:py-7"
    >
      <div ref={trackRef} className="marquee-track flex w-max gap-3 md:gap-4">
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
    </section>
  );
}
