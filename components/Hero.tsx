"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { MondayLogo, MetaLogo, AppsFlyerLogo } from "./Logos";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const { dict } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-16 md:pt-24">
      <div className="container-editorial">
        <div className="max-w-3xl">
          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-6 text-xs uppercase tracking-[0.22em] text-accent"
          >
            {dict.hero.kicker}
          </motion.p>

          <h1 className="space-y-4">
            {dict.hero.paragraphs.map((paragraph, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease }}
                className="block text-display-lg font-medium leading-[1.12] text-ink"
              >
                {paragraph}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-10"
          >
            <a
              href="#contact"
              className="inline-flex items-center gap-2 rounded-full bg-accent px-7 py-3.5 text-sm text-paper transition-colors duration-200 hover:bg-accent-dark"
            >
              {dict.cta.talk}
            </a>
          </motion.div>
        </div>

        {/* Previous-employer logos — explicitly not "trusted by" / clients. */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.6 }}
          className="mt-16 border-t border-line pt-8 md:mt-24 md:pt-10"
        >
          <p className="mb-5 text-xs uppercase tracking-[0.18em] text-stone">
            {dict.hero.logosLabel}
          </p>
          <div className="flex flex-wrap items-center gap-x-10 gap-y-4">
            <MondayLogo alt={dict.hero.logosAlt.monday} />
            <MetaLogo alt={dict.hero.logosAlt.meta} />
            <AppsFlyerLogo alt={dict.hero.logosAlt.appsflyer} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
