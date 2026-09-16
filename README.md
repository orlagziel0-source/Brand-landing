# [BRAND NAME] — bilingual landing page

A premium, editorial one-page site (Next.js 14 · React 18 · TypeScript ·
Tailwind CSS · Framer Motion), fully bilingual in Hebrew (default, RTL) and
English (LTR).

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

## Design direction (what was decided, and why)

- **Palette** — warm off-white (`paper`), near-black charcoal (`ink`), a
  neutral stone gray, and a single accent: a deep, desaturated burgundy
  (`accent`, `#7A2333`). Dark enough to stay sharp and editorial rather than
  soft or feminine, and restrained enough to use as the *only* color note
  against the neutrals.
- **Typography** — Manrope for Latin text, Heebo for Hebrew (both modern,
  high-quality, well-supported in Google Fonts, and close enough in
  character that the two language versions feel like one brand). Only
  three weights are used anywhere: 400 (body), 500 (labels/kickers), 700
  (headlines). Headlines lean large and tight; body copy stays comfortable
  and restrained.
- **Layout** — an editorial split hero (portrait vs. copy, grid-based so it
  mirrors automatically between RTL/LTR), oversized typographic statements
  for the point-of-view section, numbered stacked blocks (not cards) for
  "Where I Can Help," and thin single-pixel dividers instead of boxes or
  shadows throughout. No rounded cards, no icon grid, no gradients.
- **Motion** — subtle scroll-reveals (fade + small upward shift) via Framer
  Motion, plus a gentle scale-in on the portrait. Nothing bounces, nothing
  parallaxes.

## Language system

- All copy lives in `lib/translations.ts`, typed against a single
  `Dictionary` interface so Hebrew and English can never drift out of
  structural sync.
- `lib/LanguageContext.tsx` provides `useLanguage()` (`locale`, `dict`,
  `dir`, `setLocale`, `toggleLocale`) to every component.
- Hebrew is the default and renders server-side. A tiny inline script in
  `app/layout.tsx` sets `dir`/`lang` on `<html>` from `localStorage` before
  React hydrates, so a returning visitor who chose English doesn't see an
  RTL flash. The chosen language persists across refreshes via
  `localStorage`.
- RTL/LTR spacing is handled with Tailwind's logical-property utilities
  (`ps-*`, `pe-*`, `border-e`, `start-*`, …) wherever a layout is
  asymmetric, so both directions mirror correctly without duplicated CSS.

## Placeholders to replace

| Placeholder | Where | Notes |
|---|---|---|
| `[BRAND NAME]` | `lib/translations.ts` (`brand`, `meta.title`, `meta.description`), `app/layout.tsx` metadata | Search-and-replace once the name is final. |
| Portrait | `public/portrait/` | See `public/portrait/README.md`. Swap the placeholder block in `components/Hero.tsx` for a real `next/image`. |
| Company logos | `public/logos/` | See `public/logos/README.md`. `components/Logos.tsx` currently renders clean typographic placeholders instead of the official marks. |
| `[EMAIL]` | `lib/translations.ts` (`finalCta.email`, both languages) | Also used as the `mailto:` link target. |
| `[LINKEDIN URL]` | `lib/translations.ts` (`finalCta.linkedin`, both languages) | Full URL, e.g. `https://linkedin.com/in/...`. |

## Project structure

```
app/
  layout.tsx        fonts, metadata, language-init script
  page.tsx           assembles all sections
  globals.css
lib/
  translations.ts    all HE/EN copy, one typed dictionary
  LanguageContext.tsx language state, persistence, dir/lang sync
components/
  Header.tsx, LanguageSwitcher.tsx
  Hero.tsx, Logos.tsx
  PointOfView.tsx
  WhereICanHelp.tsx
  WhoIWorkWith.tsx
  About.tsx
  HowWeWork.tsx
  FinalCTA.tsx
  Footer.tsx
public/
  portrait/, logos/  asset drop-in points (see their README files)
```

## Notes / known simplifications

- This is a single-route, client-toggled bilingual page (as briefed), so
  SEO metadata is rendered once for the default language. If per-language
  URLs are introduced later, move metadata into `generateMetadata` and add
  `hreflang` alternates.
- Accessibility: semantic landmarks (`header`, `main`, `footer`), one `h1`
  in the hero, logical heading order (`h1` → `h2` per section → `h3` for
  help items), visible focus states, `alt`/`aria-label` text on the
  portrait and logo placeholders, and a keyboard-operable language
  switcher and mobile menu.
