import type { Metadata, Viewport } from "next";
import fs from "node:fs";
import path from "node:path";

// The Claude Artifact platform wraps every published page in a small base
// skeleton (viewport-fit=cover, color-scheme:light, safe-area padding on
// :root) that we never see in app/_site/site.css, because that skeleton is
// added at publish time, outside the content we export. Without it, iOS
// Safari falls back to its dark-mode canvas color (black) behind the
// notch/home-indicator safe areas — this is what showed up as "the whole
// mobile design went black". These few lines restore that missing base.
const safeAreaCss = `
  :root{ color-scheme:light; padding-top:env(safe-area-inset-top,0px); padding-bottom:env(safe-area-inset-bottom,0px); }
  html{ scroll-padding-top:env(safe-area-inset-top,0px); background:#F2E8D8; }
`;

// This layout, together with app/page.tsx, renders the EXACT same
// HTML/CSS/JS as the live Claude Artifact preview that Or reviews and
// approves changes on (https://claude.ai/artifact/1bqBvrNKYyoxWwzDfGi4UB).
// Rather than hand-porting every feature into separate React components
// (which drifted out of sync in the past), the site's real CSS/markup/JS
// are read from app/_site/ and injected as-is. To sync a future change:
// re-export the artifact's HTML and overwrite the three files in
// app/_site/ (site.css, body.html, site.js) with the matching slices —
// see the project README for the exact extraction boundaries.

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  colorScheme: "light",
};

export const metadata: Metadata = {
  metadataBase: new URL("https://brand-landing-flax.vercel.app"),
  title: "Or Lagziel · אור לגזיאל · People Experience",
  description:
    "Flexible Employee Experience support for companies that want to do more for their people, without hiring another full-time role. Six years of experience at global tech companies including monday.com, Meta, and AppsFlyer.",
  openGraph: {
    title: "Or Lagziel · אור לגזיאל · People Experience",
    description:
      "Flexible Employee Experience support for companies that want to do more for their people, without hiring another full-time role. Six years of experience at global tech companies including monday.com, Meta, and AppsFlyer.",
    type: "website",
    locale: "en_US",
    alternateLocale: "he_IL",
  },
  twitter: {
    card: "summary_large_image",
    title: "Or Lagziel · אור לגזיאל · People Experience",
    description: "Employee experience that connects business and people.",
  },
};

function readSitePart(filename: string): string {
  return fs.readFileSync(
    path.join(process.cwd(), "app", "_site", filename),
    "utf8"
  );
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const siteCss = readSitePart("site.css");

  return (
    <html lang="he" dir="rtl" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Manrope:wght@400;500;700&family=Heebo:wght@400;500;700&display=swap"
        />
        {/* Restores the safe-area/color-scheme base the Artifact platform
            normally injects for us — see the note above. */}
        <style dangerouslySetInnerHTML={{ __html: safeAreaCss }} />
        {/* The site's real stylesheet, injected verbatim (same bytes as the
            live artifact) rather than re-authored through Tailwind. */}
        <style dangerouslySetInnerHTML={{ __html: siteCss }} />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
