"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function PointOfView() {
  const { dict } = useLanguage();

  return (
    <section className="py-24 md:py-36">
      <div className="container-editorial">
        <div className="mx-auto max-w-4xl">
          <motion.p
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease }}
            className="text-display-lg font-medium leading-[1.08] text-ink"
          >
            {dict.pov.statement}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mt-10 md:mt-14"
          >
            <span
              className="mb-4 block h-px w-14 bg-accent"
              aria-hidden="true"
            />
            <p className="max-w-2xl text-xl leading-relaxed text-stone md:text-2xl">
              {dict.pov.supporting}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
