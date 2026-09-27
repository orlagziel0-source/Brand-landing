"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ITEM_COLORS = ["text-accent", "text-pine", "text-ochre"];
const ITEM_BADGE_STYLES = [
  "bg-accent/10 text-accent",
  "bg-pine/10 text-pine",
  "bg-ochre/10 text-ochre",
];

function ProjectIcon({ className }: { className?: string }) {
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
      <circle cx="12" cy="12" r="10" />
      <circle cx="12" cy="12" r="6" />
      <circle cx="12" cy="12" r="2" />
    </svg>
  );
}

function PeriodIcon({ className }: { className?: string }) {
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
      <rect x="3" y="4" width="18" height="18" rx="2" ry="2" />
      <line x1="16" y1="2" x2="16" y2="6" />
      <line x1="8" y1="2" x2="8" y2="6" />
      <line x1="3" y1="10" x2="21" y2="10" />
    </svg>
  );
}

function OngoingIcon({ className }: { className?: string }) {
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
      <polyline points="23 4 23 10 17 10" />
      <polyline points="1 20 1 14 7 14" />
      <path d="M3.51 9a9 9 0 0 1 14.85-3.36L23 10M1 14l4.64 4.36A9 9 0 0 0 20.49 15" />
    </svg>
  );
}

const ITEM_ICONS = [ProjectIcon, PeriodIcon, OngoingIcon];

export default function PointOfView() {
  const { dict } = useLanguage();

  return (
    <section className="py-14 md:py-36">
      <div className="container-editorial">
        <div className="mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
            className="text-display-lg font-bold leading-[1.08] text-ink"
          >
            {dict.pov.statement}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mt-10 md:mt-14"
          >
            <span className="mb-4 flex h-1 w-20 gap-1" aria-hidden="true">
              <span className="flex-1 rounded-full bg-accent" />
              <span className="flex-1 rounded-full bg-pine" />
              <span className="flex-1 rounded-full bg-ochre" />
            </span>
            <p className="max-w-2xl text-xl leading-relaxed text-stone md:text-2xl">
              {dict.pov.supporting}
            </p>
          </motion.div>

          <p
            id="work"
            className="mt-12 scroll-mt-28 text-[clamp(0.7rem,2.1vw,0.95rem)] leading-snug text-stone md:mt-16"
          >
            {dict.work.label}
          </p>

          <div className="mt-4 grid grid-cols-3 gap-3 sm:gap-6 md:gap-10">
            {dict.work.items.map((item, i) => {
              const Icon = ITEM_ICONS[i % ITEM_ICONS.length];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease }}
                  whileHover={{ y: -4 }}
                  className="flex flex-col items-center text-center"
                >
                  <span
                    className={`inline-flex h-10 w-10 items-center justify-center rounded-full md:h-12 md:w-12 ${ITEM_BADGE_STYLES[i % ITEM_BADGE_STYLES.length]}`}
                  >
                    <Icon className="h-5 w-5 md:h-6 md:w-6" />
                  </span>
                  <p
                    className={`mt-3 text-[clamp(1.05rem,4.2vw,1.9rem)] font-bold leading-[1.1] ${ITEM_COLORS[i % ITEM_COLORS.length]}`}
                  >
                    {item.title}
                  </p>
                  <p className="mt-2 text-[clamp(0.7rem,2.1vw,0.95rem)] leading-snug text-stone">
                    {item.body}
                  </p>
                </motion.div>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
