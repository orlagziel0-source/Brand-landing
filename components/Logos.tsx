interface LogoProps {
  alt: string;
  className?: string;
}

/**
 * "Worked at" logo marks — official brand assets, supplied by the client
 * and stored in /public/logos/. Rendered in grayscale at rest and in full
 * color on hover, all at a matched visual height so the row reads as one
 * balanced line regardless of each logo's native proportions.
 */

const base =
  "h-6 w-auto object-contain grayscale opacity-70 transition-all duration-300 hover:grayscale-0 hover:opacity-100 sm:h-7";

export function MondayLogo({ alt, className }: LogoProps) {
  return (
    <img
      src="/logos/monday.png"
      alt={alt}
      width={1940}
      height={575}
      className={`${base} ${className ?? ""}`}
    />
  );
}

export function MetaLogo({ alt, className }: LogoProps) {
  return (
    <img
      src="/logos/meta.png"
      alt={alt}
      width={1849}
      height={554}
      className={`${base} ${className ?? ""}`}
    />
  );
}

export function AppsFlyerLogo({ alt, className }: LogoProps) {
  return (
    <img
      src="/logos/appsflyer.png"
      alt={alt}
      width={2026}
      height={677}
      className={`${base} ${className ?? ""}`}
    />
  );
}
