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

        {/* Experience summary — sits right alongside the logos, near the
            top of the page, instead of further down the site. */}
        <motion.div
          id="about"
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="scroll-mt-28 mt-16 grid grid-cols-1 gap-10 border-t border-line pt-14 md:mt-20 md:grid-cols-[0.9fr_1.1fr] md:gap-16 md:pt-16"
        >
          <div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accent">
              {dict.about.kicker}
            </p>
            <h2 className="text-display-md font-medium leading-tight text-ink">
              {dict.about.title}
            </h2>
          </div>

          <div>
            <p className="text-lg leading-relaxed text-stone md:text-xl">
              {dict.about.intro}
            </p>

            <ul className="mt-8 grid grid-cols-2 gap-x-6 gap-y-3 sm:grid-cols-3">
              {dict.about.capabilities.map((capability) => (
                <li
                  key={capability}
                  className="border-t border-line pt-3 text-sm text-ink/80"
                >
                  {capability}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
