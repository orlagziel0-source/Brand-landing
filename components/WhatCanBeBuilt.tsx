"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

function CalendarIcon({ className }: { className?: string }) {
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

function MapIcon({ className }: { className?: string }) {
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
      <polygon points="1 6 1 22 8 18 16 22 23 18 23 2 16 6 8 2 1 6" />
      <line x1="8" y1="2" x2="8" y2="18" />
      <line x1="16" y1="6" x2="16" y2="22" />
    </svg>
  );
}

function UsersIcon({ className }: { className?: string }) {
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
      <path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2" />
      <circle cx="9" cy="7" r="4" />
      <path d="M23 21v-2a4 4 0 0 0-3-3.87" />
      <path d="M16 3.13a4 4 0 0 1 0 7.75" />
    </svg>
  );
}

function ZapIcon({ className }: { className?: string }) {
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
      <polygon points="13 2 3 14 12 14 11 22 21 10 12 10 13 2" />
    </svg>
  );
}

const CATEGORY_ICONS = [CalendarIcon, MapIcon, UsersIcon, ZapIcon];

// Full literal class strings (never built dynamically) so Tailwind's JIT
// scanner picks every one of them up in the production build.
const CATEGORY_STYLES = [
  {
    numeral: "text-accent/25",
    border: "border-accent",
    badge: "bg-accent/10 text-accent",
    tag: "border-accent/30 bg-accent/5 text-accent",
  },
  {
    numeral: "text-pine/25",
    border: "border-pine",
    badge: "bg-pine/10 text-pine",
    tag: "border-pine/30 bg-pine/5 text-pine",
  },
  {
    numeral: "text-ochre/25",
    border: "border-ochre",
    badge: "bg-ochre/10 text-ochre",
    tag: "border-ochre/30 bg-ochre/5 text-ochre",
  },
  {
    numeral: "text-denim/25",
    border: "border-denim",
    badge: "bg-denim/10 text-denim",
    tag: "border-denim/30 bg-denim/5 text-denim",
  },
];

export default function WhatCanBeBuilt() {
  const { dict } = useLanguage();

  return (
    <section id="build" className="scroll-mt-28 py-14 md:py-32">
      <div className="container-editorial">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="text-display-md font-bold text-ink"
        >
          {dict.build.title}
        </motion.h2>

        <div className="mt-12 grid grid-cols-1 gap-5 md:mt-16 md:grid-cols-2 md:gap-6">
          {dict.build.categories.map((category, i) => {
            const style = CATEGORY_STYLES[i % CATEGORY_STYLES.length];
            const Icon = CATEGORY_ICONS[i % CATEGORY_ICONS.length];
            return (
              <motion.div
                key={category.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{ duration: 0.55, delay: i * 0.06, ease }}
                whileHover={{ y: -4 }}
                className={`relative overflow-hidden border-s-4 bg-paper p-6 transition-shadow duration-200 hover:shadow-[0_12px_28px_-16px_rgba(26,24,22,0.25)] md:p-7 ${style.border}`}
              >
                <span
                  className={`pointer-events-none absolute top-1 text-[4.5rem] font-black leading-none ltr:right-3 rtl:left-3 md:text-[5.5rem] ${style.numeral}`}
                  aria-hidden="true"
                >
                  {String(i + 1).padStart(2, "0")}
                </span>

                <span
                  className={`relative inline-flex h-9 w-9 items-center justify-center rounded-full ${style.badge}`}
                >
                  <Icon className="h-4 w-4" />
                </span>

                <h3 className="relative mt-4 max-w-[80%] text-xl font-bold leading-snug text-ink md:text-2xl">
                  {category.title}
                </h3>
                <p className="relative mt-2 max-w-[85%] text-sm leading-relaxed text-stone md:text-base">
                  {category.body}
                </p>
                <div className="relative mt-4 flex flex-wrap gap-2">
                  {category.tags.map((tag) => (
                    <span
                      key={tag}
                      className={`rounded-full border px-3 py-1 text-xs font-medium transition-transform duration-150 hover:scale-105 ${style.tag}`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
