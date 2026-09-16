# Company logos

The hero section references three previous employers: monday.com, Meta, and
AppsFlyer. For legal/brand reasons this project ships with clean typographic
placeholders instead of the official logo files (see `components/Logos.tsx`).

To use the real marks:

1. Download the official SVG (preferred) or PNG logo for each company from
   their brand/press pages.
2. Save them here as, for example:
   - `monday.svg`
   - `meta.svg`
   - `appsflyer.svg`
3. In `components/Logos.tsx`, replace the placeholder `<span>` in each
   component with a `next/image` `<Image>` (or a plain `<img>`) pointing at
   `/logos/monday.svg` etc., keeping the existing `alt` prop.
4. Keep all three logos visually balanced (similar height/weight) — resize
   or add padding as needed so no one logo dominates the row.

A monochrome/subtle treatment (e.g. `filter: grayscale(1)` or a single-tone
SVG) tends to fit this design best.
