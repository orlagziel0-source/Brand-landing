"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function FinalCTA() {
  const { dict } = useLanguage();

  return (
    <section
      id="contact"
      className="scroll-mt-28 bg-accent py-28 text-paper md:py-40"
    >
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-display-lg font-medium leading-[1.12] text-paper">
            {dict.finalCta.title}
          </h2>

          <div className="mt-10">
            <a
              href={`mailto:${dict.finalCta.email}`}
              className="inline-flex items-center gap-2 rounded-full bg-paper px-8 py-4 text-base text-accent transition-colors duration-200 hover:bg-ink hover:text-paper"
            >
              {dict.finalCta.cta}
            </a>
          </div>

          <div className="mt-8 flex flex-col items-center gap-2 text-sm text-paper/75 sm:flex-row sm:justify-center sm:gap-4">
            <span>{dict.finalCta.email}</span>
            <span className="hidden sm:inline" aria-hidden="true">
              ·
            </span>
            <a
              href={dict.finalCta.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="underline decoration-line-dark underline-offset-4 transition-colors hover:text-paper"
            >
              {dict.finalCta.linkedinLabel}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
