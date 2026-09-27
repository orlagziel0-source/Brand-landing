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
            className="text-display-lg font-bold leading-[1.08] text-ink"
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
            <span className="mb-4 flex h-1 w-20 gap-1" aria-hidden="true">
              <span className="flex-1 rounded-full bg-accent" />
              <span className="flex-1 rounded-full bg-pine" />
              <span className="flex-1 rounded-full bg-ochre" />
            </span>
            <p className="max-w-2xl text-xl leading-relaxed text-stone md:text-2xl">
              {dict.pov.supporting}
            </p>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
