"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { MondayLogo, MetaLogo, AppsFlyerLogo } from "./Logos";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function About() {
  const { dict } = useLanguage();

  return (
    <section id="about" className="scroll-mt-28 py-24 md:py-32">
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] md:gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease }}
            className="relative aspect-[4/5] w-full overflow-hidden border border-line"
          >
            <img
              src="/portrait/portrait.jpg"
              alt={dict.about.portraitAlt}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <h2 className="text-display-md font-medium leading-tight text-ink">
              {dict.about.title}
            </h2>

            <div className="mt-6 space-y-4">
              {dict.about.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-lg leading-relaxed text-stone md:text-xl"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 border-t border-line pt-8">
              <p className="mb-5 text-sm uppercase tracking-[0.14em] text-stone">
                {dict.about.logosLabel}
              </p>
              <div className="flex flex-wrap items-center gap-x-12 gap-y-5">
                <MondayLogo alt={dict.about.logosAlt.monday} />
                <MetaLogo alt={dict.about.logosAlt.meta} />
                <AppsFlyerLogo alt={dict.about.logosAlt.appsflyer} />
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
