"use client";

import { homeContent, t } from "@/content/home";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function CategoriesSection() {
  const { locale } = useLanguage();
  const { categories } = homeContent;

  return (
    <section
      id="categories"
      className="scroll-mt-20 border-y border-[var(--border)] bg-[var(--background)] py-16 sm:py-20 lg:py-24"
    >
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mx-auto mb-10 max-w-2xl text-center sm:mb-12">
          <h2 className="font-serif text-3xl text-[var(--foreground)] sm:text-4xl">
            {t(categories.title, locale)}
          </h2>
          <p className="mt-4 text-sm leading-relaxed text-[var(--muted)] sm:text-base">
            {t(categories.subtitle, locale)}
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {categories.items.map((item) => (
            <article
              key={item.id}
              className="group rounded-xl border border-[var(--border)] bg-[var(--surface)] p-6 transition-all hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:shadow-[0_12px_40px_-16px_rgba(44,42,38,0.12)]"
            >
              <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-[var(--accent-soft)] text-xl">
                <span role="img" aria-hidden="true">
                  {item.icon}
                </span>
              </div>
              <h3 className="font-serif text-xl text-[var(--foreground)]">
                {t(item.name, locale)}
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-[var(--muted)]">
                {t(item.description, locale)}
              </p>
              <span className="mt-4 inline-flex items-center gap-1 text-xs font-medium tracking-wide text-[var(--accent)] opacity-0 transition-opacity group-hover:opacity-100">
                {locale === "zh" ? "即将上线" : "Coming soon"}
                <svg viewBox="0 0 16 16" className="h-3 w-3" fill="none" stroke="currentColor" strokeWidth="1.5">
                  <path d="M3 8h10M9 4l4 4-4 4" strokeLinecap="round" strokeLinejoin="round" />
                </svg>
              </span>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
