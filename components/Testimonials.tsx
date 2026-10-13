"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import { testimonials, type Testimonial } from "@/lib/testimonials";

// Recommendations as small notes, each "taped" to the page.
// Styling lives in globals.css under "Testimonials" (tape, tint, tilt).
function Note({
  item,
  index,
  more,
  less,
}: {
  item: Testimonial;
  index: number;
  more: string;
  less: string;
}) {
  const [open, setOpen] = useState(false);
  const text = item.excerpt && !open ? item.excerpt : item.text;

  return (
    <figure className={`tm-card c${(index % 4) + 1}`}>
      <blockquote className="tm-text">{text}</blockquote>
      {item.excerpt && (
        <button
          type="button"
          aria-expanded={open}
          onClick={() => setOpen(!open)}
          className="tm-more"
        >
          {open ? less : more}
        </button>
      )}
      <figcaption className="tm-who">
        <cite className="tm-name">{item.name}</cite>
        <br />
        <span>{item.role}</span>
      </figcaption>
    </figure>
  );
}

export default function Testimonials() {
  const { locale } = useLanguage();
  const copy = testimonials[locale] ?? testimonials.en;

  return (
    <section id="testimonials" className="scroll-mt-28 pb-10 pt-8">
      <div className="container-editorial">
        <div className="flex flex-wrap items-baseline justify-between gap-3">
          <h2 className="text-[clamp(1.4rem,2.4vw,1.9rem)] font-bold text-ink">{copy.title}</h2>
          {copy.translated && <p className="text-[0.8rem] text-stone">{copy.translated}</p>}
        </div>
        <div className="tm-grid">
          {copy.items.map((item, i) => (
            <Note key={item.name} item={item} index={i} more={copy.more} less={copy.less} />
          ))}
        </div>
      </div>
    </section>
  );
}
