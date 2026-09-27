# Or Lagziel — bilingual landing page

A premium, editorial one-page site (Next.js 14 · React 18 · TypeScript ·
Tailwind CSS · Framer Motion) for an independent Employee Experience
business, fully bilingual in English (default, LTR) and Hebrew (RTL).

## Getting started

```bash
npm install
npm run dev
```

Then open http://localhost:3000.

To build for production:

```bash
npm run build
npm run start
```

## Design direction

- **Palette** — warm cream (`paper`), near-black charcoal (`ink`), a
  contrast-checked warm stone gray for secondary text, and a single
  accent: a deep, desaturated burgundy (`accent`, `#7A2333`).
- **Typography** — Manrope for Latin text, Heebo for Hebrew.
- **Layout** — editorial, thin dividers instead of shadows, minimal
  bordered cards only where they genuinely help scanning (services,
  build categories); no heavy cards, no icon grid, no gradients.
- **Motion** — subtle scroll-reveals via Framer Motion.

## Language system

- All copy lives in `lib/translations.ts`, typed against a single
  `Dictionary` interface so English and Hebrew can never drift out of
  structural sync.
- `lib/LanguageContext.tsx` provides `useLanguage()` (`locale`, `dict`,
  `dir`, `setLocale`, `toggleLocale`) to every component.
- **English is the default** and renders server-side. A tiny inline
  script in `app/layout.tsx` sets `dir`/`lang` on `<html>` from
  `localStorage` before React hydrates, so a returning visitor who chose
  Hebrew doesn't see an LTR flash. The chosen language persists across
  refreshes via `localStorage`.
- The language switcher (`EN | עברית`) is always visible in the header,
  on both desktop and mobile — there is no hamburger menu on this site;
  mobile navigation is a persistent, horizontally-scrollable strip.

## WhatsApp CTA

Every "Let's talk" / "בואו נדבר" button opens WhatsApp directly via
`lib/whatsapp.ts`, which builds a `wa.me` link with a language-specific
pre-filled message from `dict.whatsapp.message`. The phone number lives
in one place: `WHATSAPP_NUMBER` in `lib/whatsapp.ts`.

## Project structure

```
app/
  layout.tsx           fonts, metadata, language-init script
  page.tsx              assembles all sections
  globals.css
lib/
  translations.ts       all EN/HE copy, one typed dictionary
  LanguageContext.tsx    language state, persistence, dir/lang sync
  whatsapp.ts            WhatsApp link builder
components/
  Header.tsx, LanguageSwitcher.tsx
  Hero.tsx
  PointOfView.tsx
  HowWeWork.tsx          "How we can work together" (project / period / ongoing)
  WhatCanBeBuilt.tsx     four service categories with tag chips
  About.tsx, Logos.tsx
  FinalCTA.tsx
  Footer.tsx
  WhereICanHelp.tsx, WhoIWorkWith.tsx   deprecated stubs kept only so
    they safely overwrite old copies during manual file syncs — safe to
    delete once no longer needed.
public/
  portrait/, logos/     real assets already in place
```

## Notes / known simplifications

- This is a single-route, client-toggled bilingual page, so SEO
  metadata is rendered once for the default language. If per-language
  URLs are introduced later, move metadata into `generateMetadata` and
  add `hreflang` alternates.
- Accessibility: semantic landmarks (`header`, `main`, `footer`), one
  `h1` in the hero, logical heading order, visible focus states, `alt`
  text on the portrait and logos, and a fully keyboard-operable,
  always-visible navigation and language switcher.
