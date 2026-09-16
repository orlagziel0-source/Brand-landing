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
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.7, ease }}
            className="mb-7 h-28 w-28 overflow-hidden rounded-full border border-line sm:h-36 sm:w-36"
          >
            <img
              src="/portrait/portrait.jpg"
              alt={dict.hero.portraitAlt}
              width={400}
              height={460}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="mb-5 text-sm font-semibold uppercase tracking-[0.14em] text-accent sm:text-base"
          >
            {dict.hero.kicker}
          </motion.p>

          <h1 className="space-y-3">
            {dict.hero.paragraphs.map((paragraph, i) => (
              <motion.span
                key={i}
                initial={{ opacity: 0, y: 16 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease }}
                className="block text-display-hero font-medium leading-[1.16] text-ink"
              >
                {paragraph}
              </motion.span>
            ))}
          </h1>

          <motion.div
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.5 }}
            className="mt-9"
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
          <div className="flex flex-wrap items-center gap-x-12 gap-y-5">
            <MondayLogo alt={dict.hero.logosAlt.monday} />
            <MetaLogo alt={dict.hero.logosAlt.meta} />
            <AppsFlyerLogo alt={dict.hero.logosAlt.appsflyer} />
          </div>
        </motion.div>
      </div>
    </section>
  );
}
