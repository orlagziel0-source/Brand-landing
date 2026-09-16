"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function HowWeWork() {
  const { dict } = useLanguage();
  const models = [
    dict.work.models.project,
    dict.work.models.ongoing,
    dict.work.models.fractional,
  ];

  return (
    <section className="py-24 md:py-32">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="mb-14 md:mb-20"
        >
          <p className="mb-3 text-xs uppercase tracking-[0.2em] text-accent">
            {dict.work.kicker}
          </p>
          <h2 className="text-display-md font-medium text-ink">
            {dict.work.title}
          </h2>
        </motion.div>

        <div className="grid grid-cols-1 border-t border-line md:grid-cols-3">
          {models.map((model, i) => (
            <motion.div
              key={model.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              className="border-b border-line py-8 md:ps-10 md:pe-10 md:py-12 md:border-b-0 md:border-e md:first:ps-0 md:last:pe-0 md:last:border-e-0"
            >
              <h3 className="mb-3 text-2xl font-medium text-ink">
                {model.title}
              </h3>
              <p className="leading-relaxed text-stone">{model.body}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
