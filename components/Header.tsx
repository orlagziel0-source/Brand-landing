"use client";

import { useLanguage } from "@/lib/LanguageContext";
import { getWhatsAppLink } from "@/lib/whatsapp";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { dict } = useLanguage();
  const waLink = getWhatsAppLink(dict.whatsapp.message);

  const navItems = [
    { href: "#work", label: dict.nav.work },
    { href: "#build", label: dict.nav.build },
    { href: "#about", label: dict.nav.about },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="container-editorial flex h-[64px] items-center justify-between md:h-[84px]">
        <a
          href="#top"
          className="shrink-0 text-base font-medium tracking-tight text-ink"
        >
          {dict.brand}
        </a>

        {/* Desktop: nav is always inline, never hidden behind a toggle */}
        <nav
          className="hidden items-center gap-8 md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="relative text-sm text-ink/80 transition-colors duration-200 after:absolute after:-bottom-1 after:start-0 after:h-px after:w-full after:origin-left after:scale-x-0 after:bg-accent after:transition-transform after:duration-200 hover:text-ink hover:after:scale-x-100"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-5 md:flex">
          <LanguageSwitcher />
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="rounded-full border border-accent px-5 py-2 text-sm text-accent transition-all duration-200 hover:scale-105 hover:bg-accent hover:text-paper"
          >
            {dict.cta.talk}
          </a>
        </div>

        {/* Mobile: language switcher stays visible in the top row */}
        <div className="flex items-center md:hidden">
          <LanguageSwitcher />
        </div>
      </div>

      {/* Mobile: a persistent, horizontally scrollable nav strip instead of
          a hamburger menu, so nothing (including language) is ever hidden. */}
      <div className="border-t border-line md:hidden">
        <nav
          className="container-editorial no-scrollbar flex items-center gap-6 overflow-x-auto py-3"
          aria-label="Primary mobile"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="shrink-0 whitespace-nowrap text-sm text-ink/80"
            >
              {item.label}
            </a>
          ))}
          <a
            href={waLink}
            target="_blank"
            rel="noopener noreferrer"
            className="shrink-0 whitespace-nowrap rounded-full border border-accent px-4 py-1.5 text-sm text-accent"
          >
            {dict.cta.talk}
          </a>
        </nav>
      </div>
    </header>
  );
}
