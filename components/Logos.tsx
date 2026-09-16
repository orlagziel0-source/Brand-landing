interface LogoProps {
  alt: string;
  className?: string;
}

/**
 * "Worked at" logo marks — official brand assets, supplied by the client
 * and stored in /public/logos/. Shown in full color at a matched visual
 * height so the row reads as one balanced, confident line.
 */

const base = "h-9 w-auto object-contain sm:h-11";

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
