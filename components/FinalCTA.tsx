"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { getWhatsAppLink } from "@/lib/whatsapp";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function FinalCTA() {
  const { dict } = useLanguage();
  const waLink = getWhatsAppLink(dict.whatsapp.message);

  return (
    <section
      id="contact"
      className="scroll-mt-28 bg-accent py-16 text-paper md:py-40"
    >
      <div className="container-editorial">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease }}
          className="mx-auto max-w-3xl text-center"
        >
          <h2 className="text-display-lg font-bold leading-[1.12] text-paper">
            {dict.finalCta.title}
          </h2>

          <div className="mt-10">
            <a
              href={waLink}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 rounded-full bg-paper px-8 py-4 text-base text-accent transition-all duration-200 hover:scale-105 hover:bg-ink hover:text-paper"
            >
              {dict.finalCta.cta}
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
