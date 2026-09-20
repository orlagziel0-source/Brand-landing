"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

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
          className="mb-14 text-display-md font-medium text-ink md:mb-20"
        >
          {dict.build.title}
        </motion.h2>

        <div>
          {dict.build.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease }}
              className="grid grid-cols-1 gap-3 border-t border-line py-8 md:grid-cols-[88px_1fr_1.15fr] md:gap-10 md:py-12"
            >
              <span className="text-base font-semibold text-accent md:pt-1.5">
                {String(i + 1).padStart(2, "0")}
              </span>
              <h3 className="text-2xl font-medium leading-snug text-ink md:text-3xl">
                {item.title}
              </h3>
              <p className="max-w-xl text-lg leading-relaxed text-stone md:pt-1.5 md:text-xl">
                {item.body}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-line" />
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
