"use client";

import { useCallback, useEffect, useRef, useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import type { Photographer } from "@/lib/translations";
import { projectForPhoto, projectsCopy, projectsData } from "@/lib/projects";
import ProjectModal from "./ProjectModal";

const IMAGE_COUNT = 18;
const images = Array.from(
  { length: IMAGE_COUNT },
  (_, i) => `/images/gallery/event-${String(i + 1).padStart(2, "0")}.jpg`
);

// Photographer credit per photo, in the same order as the images above
// (event-01 … event-18). null = own photo, no credit shown.
const credits: (Photographer | null)[] = [
  null, "victor", null, null, "tomer", "victor",
  "tomer", null, "tomer", null, null, null,
  null, null, null, "victor", null, null,
];

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
  const { dict, locale } = useLanguage();
  const [openProject, setOpenProject] = useState<string | null>(null);
  const modalOpenRef = useRef(false);
  modalOpenRef.current = openProject !== null;
  const closeProject = useCallback(() => setOpenProject(null), []);
  const copy = projectsCopy(locale);
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
        manualPausedRef.current ||
        modalOpenRef.current;

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
    <>
    <section
      dir="ltr"
      aria-label={dict.gallery.label}
      className="relative overflow-hidden border-y border-line bg-paper py-[clamp(12px,2vh,20px)] md:py-[clamp(14px,2.4vh,24px)]"
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
          (() => {
            const photo = i % IMAGE_COUNT;
            const projectKey = projectForPhoto(photo);
            const pos = projectsData.plusPos[String(photo)];
            const plusPos = pos === "bl" ? "bottom-2.5 left-2.5" : pos === "tr" ? "right-2.5 top-2.5" : "left-2.5 top-2.5";
            const open = () => projectKey && setOpenProject(projectKey);
            return (
          <div
            key={i}
            role={projectKey ? "button" : undefined}
            tabIndex={projectKey && i < IMAGE_COUNT ? 0 : -1}
            aria-label={projectKey ? copy.projects[projectKey]?.name : undefined}
            onClick={open}
            onKeyDown={(e) => {
              if (e.key === "Enter" || e.key === " ") {
                e.preventDefault();
                open();
              }
            }}
            className={`group relative aspect-[1.6] h-[clamp(110px,19vh,200px)] shrink-0 overflow-hidden rounded-md focus-visible:outline focus-visible:outline-[3px] focus-visible:outline-offset-2 focus-visible:outline-accent md:h-[clamp(130px,21vh,220px)] ${projectKey ? "cursor-pointer" : ""}`}
            aria-hidden={i >= IMAGE_COUNT}
          >
            <img
              src={src}
              alt={`${dict.gallery.alt} ${(i % IMAGE_COUNT) + 1}`}
              className="h-full w-full object-cover transition-transform duration-[400ms] group-hover:scale-[1.04]"
              loading={i < IMAGE_COUNT ? "eager" : "lazy"}
            />
            {projectKey && (
              <span
                aria-hidden="true"
                className={`pointer-events-none absolute z-[1] flex h-[30px] w-[30px] items-center justify-center rounded-full bg-[rgba(247,244,238,0.88)] text-xl leading-none text-accent shadow-[0_2px_8px_rgba(0,0,0,0.2)] transition-all duration-[250ms] group-hover:rotate-90 group-hover:bg-accent group-hover:text-paper ${plusPos}`}
              >
                +
              </span>
            )}
            {credits[i % IMAGE_COUNT] && (
              <span
                dir="auto"
                className="pointer-events-none absolute bottom-2 right-2 whitespace-nowrap rounded-full bg-ink/55 px-2 py-0.5 text-[0.68rem] leading-snug text-paper transition-opacity group-hover:opacity-0"
              >
                {dict.gallery.photoBy}
                {dict.gallery.photographers[credits[i % IMAGE_COUNT] as Photographer]}
              </span>
            )}
          </div>
            );
          })()
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
    <p className="container-editorial mt-2.5 text-center text-[0.85rem] text-stone">{copy.strip}</p>
    <ProjectModal projectKey={openProject} onChange={setOpenProject} onClose={closeProject} />
    </>
  );
}
