"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function WhatCanBeBuilt() {
  const { dict } = useLanguage();

  return (
    <section id="build" className="scroll-mt-28 py-24 md:py-32">
      <div className="container-editorial">
        {/* Manifesto block */}
        <div className="max-w-2xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, ease }}
            className="text-sm font-medium uppercase tracking-[0.14em] text-accent"
          >
            {dict.build.eyebrow}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.08, ease }}
            className="mt-4 text-display-md font-medium leading-tight"
          >
            <span className="text-ink/65">{dict.build.statementLead} </span>
            <span className="text-ink">{dict.build.statementEmphasis}</span>
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.6, delay: 0.16, ease }}
            className="mt-5 max-w-xl text-lg leading-relaxed text-stone md:text-xl"
          >
            {dict.build.supporting}
          </motion.p>
        </div>

        {/* Services — uniform numbered cards */}
        <div className="mt-14 max-w-2xl space-y-4 md:mt-20 md:space-y-5">
          {dict.build.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease }}
              className="border border-line p-6 md:p-8"
            >
              <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-accent/10 text-xs font-semibold text-accent md:h-9 md:w-9 md:text-sm">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="mt-4 text-xl font-medium leading-snug text-ink md:text-2xl">
                {item.title}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-stone md:text-base">
                {item.body}
              </p>
              <p className="mt-3 text-xs font-medium text-accent md:text-sm">
                — {item.outcome}
              </p>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 12 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-10 max-w-2xl text-lg leading-relaxed text-stone md:mt-14 md:text-xl"
        >
          {dict.build.engagementLine}
        </motion.p>
      </div>
    </section>
  );
}
