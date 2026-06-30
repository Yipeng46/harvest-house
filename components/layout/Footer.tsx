"use client";

import { homeContent, t } from "@/content/home";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function Footer() {
  const { locale } = useLanguage();

  return (
    <footer className="border-t border-[var(--border)] bg-[var(--background)] py-8">
      <div className="mx-auto flex max-w-6xl flex-col items-center justify-between gap-4 px-4 text-center sm:flex-row sm:px-6 sm:text-left lg:px-8">
        <p className="font-serif text-sm tracking-[0.12em] text-[var(--foreground)]">
          {t(homeContent.brand, locale)}
        </p>
        <p className="text-xs text-[var(--muted)]">
          {t(homeContent.footer.rights, locale)}
        </p>
      </div>
    </footer>
  );
}
