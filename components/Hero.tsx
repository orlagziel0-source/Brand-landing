"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const { dict } = useLanguage();

  return (
    <section className="relative overflow-hidden bg-accent pb-20 pt-24 text-paper md:pb-28 md:pt-32">
      <div className="container-editorial">
        <div className="max-w-3xl">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="text-display-lg font-medium leading-[1.1] text-paper"
          >
            {dict.hero.title}
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mt-7 max-w-xl text-xl leading-relaxed text-paper/80 md:text-2xl"
          >
            {dict.hero.subtitle}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="mt-8 text-base uppercase tracking-[0.14em] text-paper/70"
          >
            {dict.hero.serviceLine}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.42 }}
            className="mt-9"
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
