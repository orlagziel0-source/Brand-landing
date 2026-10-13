"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ITEM_COLORS = ["text-accent", "text-pine", "text-ochre"];
const ITEM_BORDERS = ["border-accent", "border-pine", "border-ochre"];
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
            className="text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[1.08] [html[lang=en]_&]:text-[clamp(2rem,4.2vw,3.6rem)] [html[lang=en]_&]:leading-[1.12] text-ink"
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

          <h2
            id="work"
            className="mt-16 scroll-mt-28 text-display-md font-bold text-ink md:mt-24"
          >
            {dict.work.label}
          </h2>

          <div className="mt-7 grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-5">
            {dict.work.items.map((item, i) => {
              const Icon = ITEM_ICONS[i % ITEM_ICONS.length];
              return (
                <motion.div
                  key={item.title}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-80px" }}
                  transition={{ duration: 0.6, delay: i * 0.08, ease }}
                  className={`flex flex-col items-start border-t-[3px] bg-ink/[0.03] p-6 pb-7 text-start md:p-7 md:pb-8 ${ITEM_BORDERS[i % ITEM_BORDERS.length]}`}
                >
                  <span
                    className={`inline-flex h-11 w-11 items-center justify-center rounded-full ${ITEM_BADGE_STYLES[i % ITEM_BADGE_STYLES.length]}`}
                  >
                    <Icon className="h-[22px] w-[22px]" />
                  </span>
                  <h3
                    className={`mt-4 text-[clamp(1.4rem,2.4vw,1.75rem)] font-bold leading-tight ${ITEM_COLORS[i % ITEM_COLORS.length]}`}
                  >
                    {item.title}
                  </h3>
                  <p className="mt-2.5 text-[clamp(1.05rem,1.4vw,1.15rem)] leading-relaxed text-stone">
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
