import fs from "node:fs";
import path from "node:path";

// See the note in app/layout.tsx: this page injects the live site's actual
// markup and behavior script verbatim, rather than a hand-built React
// re-implementation, so this deployment never drifts from what's approved
// on the Claude Artifact preview.

function readSitePart(filename: string): string {
  return fs.readFileSync(
    path.join(process.cwd(), "app", "_site", filename),
    "utf8"
  );
}

export default function Home() {
  const bodyHtml = readSitePart("body.html");
  const siteJs = readSitePart("site.js");

  return (
    <>
      <div dangerouslySetInnerHTML={{ __html: bodyHtml }} />
      <script dangerouslySetInnerHTML={{ __html: siteJs }} />
    </>
  );
}
