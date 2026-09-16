"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function WhereICanHelp() {
  const { dict } = useLanguage();

  return (
    <section id="help" className="scroll-mt-28 py-24 md:py-32">
      <div className="container-editorial">
        <div className="mb-14 md:mb-20">
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accent">
            {dict.help.kicker}
          </p>
          <h2 className="text-display-md font-medium text-ink">
            {dict.help.title}
          </h2>
        </div>

        <div>
          {dict.help.items.map((item, i) => (
            <motion.div
              key={item.index}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.05, ease }}
              className="grid grid-cols-1 gap-3 border-t border-line py-8 md:grid-cols-[96px_1fr_1.15fr] md:gap-10 md:py-12"
            >
              <span className="text-sm text-stone md:pt-1.5">
                {item.index}
              </span>
              <h3 className="text-2xl font-medium leading-snug text-ink md:text-3xl">
                {item.title}
              </h3>
              <p className="max-w-xl text-base leading-relaxed text-stone md:pt-1.5 md:text-lg">
                {item.body}
              </p>
            </motion.div>
          ))}
          <div className="border-t border-line" />
        </div>
      </div>
    </section>
  );
}
