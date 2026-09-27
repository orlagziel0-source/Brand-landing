"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

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
    <section id="build" className="scroll-mt-28 py-24 md:py-32">
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
                  className={`relative inline-flex items-center rounded-full px-3 py-1 text-xs font-semibold ${style.badge}`}
                >
                  {String(i + 1).padStart(2, "0")}
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
