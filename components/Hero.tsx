"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { MondayLogo, MetaLogo, AppsFlyerLogo } from "./Logos";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const { dict } = useLanguage();

  return (
    <section className="relative overflow-hidden pt-8 md:pt-14">
      <div className="container-editorial">
        <div className="grid grid-cols-1 items-center gap-12 md:grid-cols-[minmax(0,0.85fr)_minmax(0,1fr)] md:gap-16 lg:gap-24">
          {/* Portrait — large and editorial, not a small circular headshot.
              See /public/portrait/README.md to swap in the real photo. */}
          <motion.div
            initial={{ opacity: 0, scale: 1.03 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.9, ease }}
            className="relative aspect-[4/5] w-full overflow-hidden bg-ink/5 md:aspect-[3/4]"
          >
            <div
              role="img"
              aria-label={dict.hero.portraitAlt}
              className="flex h-full w-full items-center justify-center bg-gradient-to-b from-ink/10 to-ink/[0.04]"
            >
              <span className="px-6 text-center text-sm uppercase tracking-[0.2em] text-stone">
                [PORTRAIT]
              </span>
            </div>
            <div className="pointer-events-none absolute inset-0 border border-ink/10" />
          </motion.div>

          {/* Copy */}
          <div>
            <motion.p
              initial={{ opacity: 0, y: 12 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="mb-6 text-xs uppercase tracking-[0.22em] text-accent"
            >
              {dict.hero.kicker}
            </motion.p>

            <h1 className="space-y-5">
              {dict.hero.paragraphs.map((paragraph, i) => (
                <motion.span
                  key={i}
                  initial={{ opacity: 0, y: 16 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.7, delay: 0.15 + i * 0.12, ease }}
                  className="block text-display-md font-medium leading-[1.25] text-ink"
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
                className="inline-flex items-center gap-2 rounded-full bg-ink px-7 py-3.5 text-sm text-paper transition-colors duration-200 hover:bg-accent"
              >
                {dict.cta.talk}
              </a>
            </motion.div>
          </div>
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
