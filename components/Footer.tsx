"use client";

import { useLanguage } from "@/lib/LanguageContext";

export default function Footer() {
  const { dict } = useLanguage();
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-line py-10">
      <div className="container-editorial flex flex-col items-center justify-between gap-4 text-base text-stone md:flex-row">
        <span>{dict.brand}</span>
        <span>
          © {year} {dict.brand}. {dict.footer.rights}
        </span>
      </div>
    </footer>
  );
}
