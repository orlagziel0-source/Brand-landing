import type { Metadata } from "next";
import fs from "node:fs";
import path from "node:path";

// This layout, together with app/page.tsx, renders the EXACT same
// HTML/CSS/JS as the live Claude Artifact preview that Or reviews and
// approves changes on (https://claude.ai/artifact/1bqBvrNKYyoxWwzDfGi4UB).
// Rather than hand-porting every feature into separate React components
// (which drifted out of sync in the past), the site's real CSS/markup/JS
// are read from app/_site/ and injected as-is. To sync a future change:
// re-export the artifact's HTML and overwrite the three files in
// app/_site/ (site.css, body.html, site.js) with the matching slices —
// see the project README for the exact extraction boundaries.

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
        {/* The site's real stylesheet, injected verbatim (same bytes as the
            live artifact) rather than re-authored through Tailwind. */}
        <style dangerouslySetInnerHTML={{ __html: siteCss }} />
      </head>
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
