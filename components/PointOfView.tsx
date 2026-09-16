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
          {dict.pov.lines.map((line, i) => (
            <motion.p
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.7, delay: i * 0.12, ease }}
              className="text-display-lg font-medium leading-[1.08] text-ink"
            >
              {line}
            </motion.p>
          ))}
        </div>
      </div>
    </section>
  );
}
