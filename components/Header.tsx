"use client";

import { useState } from "react";
import { useLanguage } from "@/lib/LanguageContext";
import LanguageSwitcher from "./LanguageSwitcher";

export default function Header() {
  const { dict } = useLanguage();
  const [open, setOpen] = useState(false);

  const navItems = [
    { href: "#about", label: dict.nav.about },
    { href: "#help", label: dict.nav.help },
    { href: "#contact", label: dict.nav.contact },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-line bg-paper/90 backdrop-blur-sm">
      <div className="container-editorial flex h-[72px] items-center justify-between md:h-[84px]">
        <a
          href="#top"
          className="text-base font-medium tracking-tight text-ink"
        >
          {dict.brand}
        </a>

        <nav
          className="hidden items-center gap-10 md:flex"
          aria-label="Primary"
        >
          {navItems.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-ink/80 transition-colors duration-200 hover:text-ink"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden items-center gap-6 md:flex">
          <LanguageSwitcher />
          <a
            href="#contact"
            className="rounded-full border border-accent px-5 py-2 text-sm text-accent transition-colors duration-200 hover:bg-accent hover:text-paper"
          >
            {dict.cta.talk}
          </a>
        </div>

        <button
          type="button"
          className="flex h-10 w-10 items-center justify-center md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-menu"
          aria-label={open ? "Close menu" : "Open menu"}
        >
          <span className="relative block h-4 w-5">
            <span
              className={`absolute start-0 top-0 h-[1.5px] w-full bg-ink transition-transform duration-300 ${
                open ? "translate-y-[7px] rotate-45" : ""
              }`}
            />
            <span
              className={`absolute start-0 bottom-0 h-[1.5px] w-full bg-ink transition-transform duration-300 ${
                open ? "-translate-y-[7px] -rotate-45" : ""
              }`}
            />
          </span>
        </button>
      </div>

      {open && (
        <div
          id="mobile-menu"
          className="border-t border-line bg-paper px-6 pb-8 pt-4 md:hidden"
        >
          <nav className="flex flex-col gap-5" aria-label="Mobile">
            {navItems.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="text-lg text-ink"
              >
                {item.label}
              </a>
            ))}
          </nav>
          <div className="mt-6 flex items-center justify-between border-t border-line pt-6">
            <LanguageSwitcher />
            <a
              href="#contact"
              onClick={() => setOpen(false)}
              className="rounded-full border border-accent px-5 py-2 text-sm text-accent"
            >
              {dict.cta.talk}
            </a>
          </div>
        </div>
      )}
    </header>
  );
}
