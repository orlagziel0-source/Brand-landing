"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function WhoIWorkWith() {
  const { dict } = useLanguage();

  return (
    <section className="py-20 md:py-28">
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="mx-auto max-w-3xl border-y border-line py-12 text-center md:py-16"
        >
          <p className="text-xl leading-relaxed text-ink md:text-2xl">
            {dict.audience.body}
          </p>
        </motion.div>
      </div>
    </section>
  );
}
