interface LogoProps {
  alt: string;
  className?: string;
}

/**
 * "Worked at" logo marks — official brand assets, supplied by the client
 * and stored in /public/logos/. Shown in full color at a matched visual
 * height so the row reads as one balanced, confident line.
 */

// One row at every screen size. The PNGs are trimmed to their artwork, and each
// logo gets a share of the row's width tuned so the three read as the same
// visual size (a plain equal height made Meta look biggest and let the row
// wrap on phones). Heights follow from the widths via h-auto.
const base = "block h-auto min-w-0 object-contain";

export function MondayLogo({ alt, className }: LogoProps) {
  return (
    <img
      src="/logos/monday.png"
      alt={alt}
      width={1929}
      height={343}
      className={`${base} w-[34%] max-w-[157px] ${className ?? ""}`}
    />
  );
}

export function MetaLogo({ alt, className }: LogoProps) {
  return (
    <img
      src="/logos/meta.png"
      alt={alt}
      width={1703}
      height={341}
      className={`${base} w-[27%] max-w-[125px] ${className ?? ""}`}
    />
  );
}

export function AppsFlyerLogo({ alt, className }: LogoProps) {
  return (
    <img
      src="/logos/appsflyer.png"
      alt={alt}
      width={1944}
      height={562}
      className={`${base} w-[26%] max-w-[121px] ${className ?? ""}`}
    />
  );
}
