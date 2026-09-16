"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function About() {
  const { dict } = useLanguage();

  return (
    <section id="about" className="scroll-mt-28 py-24 md:py-32">
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[0.9fr_1.1fr] md:gap-20">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
          >
            <div className="mb-7 h-20 w-20 overflow-hidden rounded-full border border-line md:h-24 md:w-24">
              <img
                src="/portrait/portrait.jpg"
                alt={dict.hero.portraitAlt}
                width={400}
                height={460}
                className="h-full w-full object-cover"
              />
            </div>
            <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accent">
              {dict.about.kicker}
            </p>
            <h2 className="text-display-md font-medium leading-tight text-ink">
              {dict.about.title}
            </h2>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
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
          </motion.div>
        </div>
      </div>
    </section>
  );
}
