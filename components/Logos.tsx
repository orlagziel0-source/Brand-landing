interface LogoProps {
  alt: string;
  className?: string;
}

/**
 * Placeholder "worked at" logo treatment.
 *
 * These render as clean, evenly-weighted typographic marks so the hero
 * looks finished out of the box. To use the real brand assets instead:
 *
 *   1. Drop the official SVG/PNG files into /public/logos/
 *      (see /public/logos/README.md)
 *   2. Swap the <span> below for an <Image src="/logos/…" ... /> in each
 *      component, keeping the `alt` text.
 *
 * Keep all three at a similar visual size/weight so they read as one
 * balanced row (per the brief).
 */

const base =
  "inline-flex items-center text-[1.05em] font-semibold tracking-tight text-ink/70 transition-colors duration-200";

export function MondayLogo({ alt, className }: LogoProps) {
  return (
    <span role="img" aria-label={alt} className={`${base} ${className ?? ""}`}>
      monday<span className="text-accent">.com</span>
    </span>
  );
}

export function MetaLogo({ alt, className }: LogoProps) {
  return (
    <span role="img" aria-label={alt} className={`${base} ${className ?? ""}`}>
      Meta
    </span>
  );
}

export function AppsFlyerLogo({ alt, className }: LogoProps) {
  return (
    <span role="img" aria-label={alt} className={`${base} ${className ?? ""}`}>
      AppsFlyer
    </span>
  );
}
