# Portrait

Add your professional portrait here, e.g. `portrait.jpg`.

Then, in `components/Hero.tsx`, replace the `[PORTRAIT]` placeholder block
with:

```tsx
import Image from "next/image";

<Image
  src="/portrait/portrait.jpg"
  alt={dict.hero.portraitAlt}
  fill
  priority
  sizes="(min-width: 768px) 45vw, 100vw"
  className="object-cover"
/>
```

keeping the parent element's `relative` positioning and aspect ratio so the
image fills the frame correctly.

Recommended: a vertical (portrait-orientation) photo, high resolution,
natural light, minimal background — it carries a lot of visual weight on
this page.
