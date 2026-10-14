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
    <section id="about" className="scroll-mt-28 border-y border-line bg-ink/[0.035] py-10 md:py-14">
      <div className="container-editorial">
        <div className="grid grid-cols-1 gap-5 md:grid-cols-[minmax(0,0.8fr)_minmax(0,1fr)] md:gap-16 lg:gap-20">
          <motion.div
            initial={{ opacity: 0, scale: 1.02 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease }}
            className="relative aspect-[4/5] w-full overflow-hidden border border-line max-md:order-2 max-md:aspect-square"
          >
            <img
              src="/portrait/portrait.jpg"
              alt={dict.about.portraitAlt}
              className="h-full w-full object-cover object-[center_22%]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, delay: 0.1, ease }}
            className="max-md:contents"
          >
            {/* On phones this column dissolves into the grid so the title
                sits above the portrait and the rest follows below it. */}
            <div className="max-md:order-1">
              <p className="mb-2.5 text-[0.82rem] font-semibold uppercase tracking-[0.16em] text-accent">
                {dict.nav.about}
              </p>
              <h2 className="text-display-md font-bold leading-tight text-ink">
                {dict.about.title}
              </h2>
            </div>

            <div className="mt-6 space-y-4 max-md:order-3 max-md:mt-1.5">
              {dict.about.body.map((paragraph, i) => (
                <p
                  key={i}
                  className="text-lg leading-relaxed text-stone md:text-xl"
                >
                  {paragraph}
                </p>
              ))}
            </div>

            <div className="mt-7 border-t border-line pt-[22px] max-md:order-3">
              <p className="mb-5 text-sm uppercase tracking-[0.14em] text-stone">
                {dict.about.logosLabel}
              </p>
              <div className="flex max-w-[500px] flex-nowrap items-center justify-between gap-3">
                <MondayLogo alt={dict.about.logosAlt.monday} />
                <MetaLogo alt={dict.about.logosAlt.meta} />
                <AppsFlyerLogo alt={dict.about.logosAlt.appsflyer} />
              </div>
            </div>
          </motion.div>

          {/* LinkedIn posts, styled as small LinkedIn post cards; full width
              under the About grid, a swipeable row on phones */}
          <div className="max-md:order-3 md:col-span-2">
            <div className="mb-3.5 flex items-center justify-between gap-2.5">
              <p className="flex items-center gap-2 text-sm uppercase tracking-[0.13em] text-stone">
                <LinkedInMark />
                {linkedin.label}
              </p>
              {linkedin.note && <p className="text-[0.78rem] text-stone">{linkedin.note}</p>}
            </div>
            <div className="no-scrollbar flex snap-x snap-mandatory gap-3.5 overflow-x-auto pb-1 lg:grid lg:grid-cols-3 lg:overflow-visible">
              {linkedin.items.map((post) => (
                <a
                  key={post.url}
                  href={post.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex min-w-0 flex-[0_0_min(82vw,300px)] snap-start flex-col overflow-hidden rounded-[10px] border border-black/10 bg-white text-[#1d1d1d] shadow-[0_1px_2px_rgba(0,0,0,0.05)] transition hover:-translate-y-0.5 hover:border-[#0A66C2]/50 hover:shadow-[0_6px_18px_rgba(0,0,0,0.08)] lg:flex-none"
                >
                  <span className="flex items-center gap-2.5 px-3.5 pb-2 pt-3">
                    <img
                      src="/portrait/portrait.jpg"
                      alt=""
                      className="h-10 w-10 shrink-0 rounded-full object-cover object-[center_22%]"
                    />
                    <span className="min-w-0 flex-1 leading-tight">
                      <span className="block text-[0.9rem] font-semibold">{linkedin.author}</span>
                      <span className="block truncate text-[0.74rem] text-[#666]">{linkedin.role}</span>
                    </span>
                    <LinkedInMark small />
                  </span>
                  <p className="flex-1 px-3.5 pb-3 text-[0.9rem] leading-[1.5]">{post.text}</p>
                  <span className="flex flex-wrap items-center justify-between gap-x-2 gap-y-1 border-t border-black/[0.08] px-3.5 pb-2.5 pt-[9px] text-[0.78rem]">
                    <span className="whitespace-nowrap text-[#666]">{post.tag}</span>
                    <span className="whitespace-nowrap font-semibold text-[#0A66C2]">{linkedin.read} ↗</span>
                  </span>
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function LinkedInMark({ small = false }: { small?: boolean }) {
  return (
    <span
      aria-hidden="true"
      className={`inline-grid shrink-0 place-items-center rounded bg-[#0A66C2] font-sans font-bold normal-case tracking-normal text-white ${
        small ? "mt-0.5 self-start h-[18px] w-[18px] text-[11px]" : "h-5 w-5 text-[12px]"
      }`}
    >
      in
    </span>
  );
}

