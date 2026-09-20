"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const { dict } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-accent pb-24 pt-24 text-paper md:pb-28 md:pt-32">
      <div className="container-editorial">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="text-[clamp(2.05rem,6vw,5rem)] font-medium leading-[1.15] md:leading-[1.1]"
          >
            <span className="text-paper/85">{dict.hero.titleLead} </span>
            <span className="font-semibold text-paper">
              {dict.hero.titleEmphasis}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mt-4 max-w-xl text-base leading-snug text-paper/70 md:mt-7 md:text-xl md:leading-relaxed"
          >
            {dict.hero.subtitle}
          </motion.p>

          <motion.span
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.32 }}
            className="mt-8 block h-px w-10 bg-paper/40 md:mt-10"
            aria-hidden="true"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-5 text-base uppercase tracking-[0.14em] text-paper/70 md:mt-6"
          >
            {dict.hero.serviceLine}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.46 }}
            className="mt-3"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-paper px-7 py-3.5 text-sm text-accent transition-colors duration-200 hover:bg-ink hover:text-paper"
            >
              {dict.cta.talk}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
