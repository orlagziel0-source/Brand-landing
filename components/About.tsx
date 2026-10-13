"use client";

import { motion } from "framer-motion";
import { useLanguage } from "@/lib/LanguageContext";
import { MondayLogo, MetaLogo, AppsFlyerLogo } from "./Logos";
import { posts } from "@/lib/posts";

const ease: [number, number, number, number] = [0.22, 1, 0.36, 1];

export default function About() {
  const { dict, locale } = useLanguage();
  const linkedin = posts[locale] ?? posts.en;

  return (
    <section id="about" className="scroll-mt-28 py-14 md:py-32">
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-12 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] md:gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease }}
            className="relative aspect-[4/5] w-full overflow-hidden border border-line"
          >
            <img
              src="/portrait/portrait.jpg"
              alt={dict.about.portraitAlt}
              className="h-full w-full object-cover"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
          >
            <h2 className="text-display-md font-bold leading-tight text-ink">
              {dict.about.title}
            </h2>

            <div className="mt-6 space-y-4">
              {dict.about.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-lg leading-relaxed text-stone md:text-xl"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-12 border-t border-line pt-8">
              <p className="mb-5 text-sm uppercase tracking-[0.14em] text-stone">
                {dict.about.logosLabel}
              </p>
              <div className="flex max-w-[500px] flex-nowrap items-center justify-between gap-3">
                <MondayLogo alt={dict.about.logosAlt.monday} />
                <MetaLogo alt={dict.about.logosAlt.meta} />
                <AppsFlyerLogo alt={dict.about.logosAlt.appsflyer} />
              </div>
            </div>

            {/* LinkedIn posts: quiet quote cards; a swipeable row on phones */}
            <div className="mt-9 border-t border-line pt-7">
              <div className="mb-3.5 flex items-baseline justify-between gap-2.5">
                <p className="text-sm uppercase tracking-[0.13em] text-stone">{linkedin.label}</p>
                {linkedin.note && <p className="text-[0.78rem] text-stone">{linkedin.note}</p>}
              </div>
              <div className="no-scrollbar flex snap-x snap-mandatory gap-3 overflow-x-auto pb-1 lg:grid lg:grid-cols-3 lg:overflow-visible">
                {linkedin.items.map((post) => (
                  <a
                    key={post.url}
                    href={post.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex min-w-0 flex-[0_0_min(78vw,260px)] snap-start flex-col gap-2.5 border border-line bg-ink/[0.02] px-4 pb-3.5 pt-4 text-ink transition hover:-translate-y-0.5 hover:border-accent lg:flex-none"
                  >
                    <p className="text-[0.95rem] leading-[1.55]">{post.text}</p>
                    <span className="mt-auto flex flex-wrap items-center justify-between gap-x-2 gap-y-1 text-[0.78rem]">
                      <span className="whitespace-nowrap text-stone">{post.tag}</span>
                      <span className="whitespace-nowrap font-semibold text-accent">{linkedin.read} ↗</span>
                    </span>
                  </a>
                ))}
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
