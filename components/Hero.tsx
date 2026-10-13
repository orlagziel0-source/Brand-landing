"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { getWhatsAppLink } from "@/lib/whatsapp";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function Hero() {
  const { dict } = useLanguage();
  const waLink = getWhatsAppLink(dict.whatsapp.message);

  return (
    <section className="relative overflow-hidden bg-accent pb-[clamp(24px,4vh,44px)] pt-[clamp(28px,5vh,56px)] text-paper md:pb-[clamp(28px,5vh,52px)] md:pt-[clamp(32px,6vh,64px)]">
      <div className="container-editorial">
        <div className="max-w-[1100px]">
          <motion.h1
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, ease }}
            className="text-[clamp(2.4rem,6vw,5rem)] font-bold leading-[1.08] [html[lang=en]_&]:text-[clamp(2rem,4.2vw,3.6rem)] [html[lang=en]_&]:leading-[1.12]"
          >
            <span className="block font-medium text-paper/85 [text-wrap:balance]">
              {dict.hero.titleLine1}
            </span>
            <span className="block font-extrabold text-paper">
              {dict.hero.titleLine2}
            </span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 0.15, ease }}
            className="mt-[clamp(10px,1.8vh,18px)] max-w-2xl text-[clamp(1.1rem,1.6vw,1.35rem)] leading-[1.45] text-paper/80"
          >
            {dict.hero.supporting}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.24, ease }}
            className="mt-[clamp(6px,1.2vh,10px)] max-w-xl text-[clamp(0.92rem,1.1vw,1rem)] leading-normal text-paper/65"
          >
            {dict.hero.teamLine}
          </motion.p>

          <motion.p
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.28, ease }}
            className="mt-0.5 max-w-xl text-[clamp(0.92rem,1.1vw,1rem)] leading-normal text-paper/65"
          >
            {dict.hero.engagementLine}
          </motion.p>

          <motion.span
            initial={{ opacity: 0, width: 0 }}
            animate={{ opacity: 1, width: "2.5rem" }}
            transition={{ duration: 0.7, delay: 0.32, ease }}
            className="mt-[clamp(14px,2.4vh,24px)] block h-px bg-paper/40"
            aria-hidden="true"
          />

          <motion.p
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="mt-[clamp(10px,1.6vh,14px)] text-[clamp(0.8rem,1vw,0.92rem)] uppercase tracking-[0.14em] text-paper/70"
          >
            {dict.hero.serviceLine}
          </motion.p>

          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.46 }}
            className="mt-[clamp(10px,1.6vh,14px)]"
          >
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-paper px-[26px] py-3 text-sm text-accent transition-all duration-200 hover:scale-105 hover:bg-ink hover:text-paper"
            >
              {dict.cta.talk}
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
