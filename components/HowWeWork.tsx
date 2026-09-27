"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

const ITEM_COLORS = ["text-accent", "text-pine", "text-ochre"];

export default function HowWeWork() {
  const { dict } = useLanguage();

  return (
    <section id="work" className="scroll-mt-28 py-24 md:py-32">
      <div className="container-editorial">
        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease }}
          className="text-display-md font-bold text-ink"
        >
          {dict.work.title}
        </motion.h2>

        <div className="mt-12 grid grid-cols-3 gap-3 sm:gap-6 md:mt-16 md:gap-10">
          {dict.work.items.map((item, i) => (
            <motion.div
              key={item.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.6, delay: i * 0.08, ease }}
              whileHover={{ y: -4 }}
            >
              <p
                className={`text-[clamp(1.05rem,4.2vw,1.9rem)] font-bold leading-[1.1] ${ITEM_COLORS[i % ITEM_COLORS.length]}`}
              >
                {item.title}
              </p>
              <p className="mt-2 text-[clamp(0.7rem,2.1vw,0.95rem)] leading-snug text-stone">
                {item.body}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
