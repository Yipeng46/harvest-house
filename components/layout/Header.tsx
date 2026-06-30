"use client";

import { useState } from "react";
import { homeContent, t } from "@/content/home";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Header() {
  const { locale, toggleLocale } = useLanguage();
  const [open, setOpen] = useState(false);
  const content = homeContent;

  const links = [
    { href: "#arrivals", label: t(content.nav.arrivals, locale) },
    { href: "#categories", label: t(content.nav.categories, locale) },
    { href: "#contact", label: t(content.nav.contact, locale) },
  ];

  return (
    <header className="sticky top-0 z-50 border-b border-[var(--border)] bg-[var(--surface)]/90 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6 lg:px-8">
        <a href="#" className="group flex flex-col">
          <span className="font-serif text-xl tracking-[0.12em] text-[var(--foreground)]">
            {t(content.brand, locale)}
          </span>
          <span className="hidden text-[10px] uppercase tracking-[0.2em] text-[var(--muted)] sm:block">
            {t(content.tagline, locale)}
          </span>
        </a>

        <nav className="hidden items-center gap-8 md:flex">
          {links.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-sm tracking-wide text-[var(--muted)] transition-colors hover:text-[var(--foreground)]"
            >
              {link.label}
            </a>
          ))}
          <button
            type="button"
            onClick={toggleLocale}
            className="rounded-full border border-[var(--border)] px-3 py-1.5 text-xs font-medium tracking-wider text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            aria-label={locale === "zh" ? "Switch to English" : "切换至中文"}
          >
            {locale === "zh" ? "EN" : "中文"}
          </button>
        </nav>

        <div className="flex items-center gap-3 md:hidden">
          <button
            type="button"
            onClick={toggleLocale}
            className="rounded-full border border-[var(--border)] px-2.5 py-1 text-xs font-medium text-[var(--foreground)]"
          >
            {locale === "zh" ? "EN" : "中文"}
          </button>
          <button
            type="button"
            onClick={() => setOpen((prev) => !prev)}
            className="inline-flex h-9 w-9 items-center justify-center rounded-md border border-[var(--border)] text-[var(--foreground)]"
            aria-expanded={open}
            aria-label="Menu"
          >
            <span className="sr-only">Menu</span>
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="1.5">
              {open ? (
                <path strokeLinecap="round" d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path strokeLinecap="round" d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-[var(--border)] bg-[var(--surface)] px-4 py-4 md:hidden">
          <div className="flex flex-col gap-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                onClick={() => setOpen(false)}
                className="py-2 text-sm tracking-wide text-[var(--foreground)]"
              >
                {link.label}
              </a>
            ))}
          </div>
        </nav>
      )}
    </header>
  );
}
