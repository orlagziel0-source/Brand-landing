"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function WhatCanBeBuilt() {
  const { dict } = useLanguage();
  const [featured, ...rest] = dict.build.items;

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

        {/* Featured service */}
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.6, delay: 0.1, ease }}
          className="relative mt-14 max-w-2xl overflow-hidden border border-line bg-accent/[0.04] p-6 md:mt-20 md:p-10"
        >
          <span
            aria-hidden="true"
            className="pointer-events-none absolute -top-3 end-4 select-none text-[4.5rem] font-semibold leading-none text-accent/[0.16] md:text-[6rem]"
          >
            01
          </span>
          <h3 className="relative max-w-[85%] text-2xl font-medium leading-snug text-ink md:text-3xl">
            {featured.title}
          </h3>
          <p className="relative mt-3 text-base leading-relaxed text-stone md:text-lg">
            {featured.body}
          </p>
          <p className="relative mt-4 text-sm font-medium text-accent md:text-base">
            — {featured.outcome}
          </p>
        </motion.div>

        {/* Supporting services, grouped tightly for contrast against the featured card */}
        <div className="mt-3 max-w-2xl divide-y divide-line border-y border-line md:mt-4">
          {rest.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.55, delay: i * 0.06, ease }}
              className="flex gap-4 py-6 md:gap-5 md:py-7"
            >
              <span
                aria-hidden="true"
                className="mt-2.5 h-1.5 w-1.5 shrink-0 rounded-full bg-accent md:mt-3"
              />
              <div className="min-w-0 flex-1">
                <h3 className="text-lg font-medium leading-snug text-ink md:text-xl">
                  {item.title}
                </h3>
                <p className="mt-1.5 text-sm leading-relaxed text-stone md:text-base">
                  {item.body}
                </p>
                <p className="mt-2 text-xs font-medium text-accent md:text-sm">
                  — {item.outcome}
                </p>
              </div>
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
