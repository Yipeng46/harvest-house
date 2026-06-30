"use client";

import { homeContent, t } from "@/content/home";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function HeroSection() {
  const { locale } = useLanguage();
  const { hero } = homeContent;

  return (
    <section className="relative overflow-hidden border-b border-[var(--border)]">
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_#F0EBE3_0%,_transparent_55%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_bottom_left,_#E8E2D9_0%,_transparent_50%)]" />

      <div className="relative mx-auto grid max-w-6xl gap-10 px-4 py-16 sm:px-6 sm:py-20 lg:grid-cols-[1.1fr_0.9fr] lg:items-center lg:gap-16 lg:px-8 lg:py-28">
        <div className="max-w-xl">
          <p className="mb-4 text-xs font-medium uppercase tracking-[0.25em] text-[var(--accent)]">
            {t(hero.eyebrow, locale)}
          </p>
          <h1 className="font-serif text-4xl leading-tight text-[var(--foreground)] sm:text-5xl lg:text-[3.25rem] lg:leading-[1.15]">
            {t(hero.title, locale)}
          </h1>
          <p className="mt-6 max-w-lg text-base leading-relaxed text-[var(--muted)] sm:text-lg">
            {t(hero.subtitle, locale)}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#arrivals"
              className="inline-flex items-center justify-center rounded-full bg-[var(--foreground)] px-6 py-3 text-sm font-medium tracking-wide text-[var(--surface)] transition-opacity hover:opacity-90"
            >
              {t(hero.ctaPrimary, locale)}
            </a>
            <a
              href="#categories"
              className="inline-flex items-center justify-center rounded-full border border-[var(--border-strong)] px-6 py-3 text-sm font-medium tracking-wide text-[var(--foreground)] transition-colors hover:border-[var(--accent)] hover:text-[var(--accent)]"
            >
              {t(hero.ctaSecondary, locale)}
            </a>
          </div>
        </div>

        <div className="relative mx-auto w-full max-w-md lg:max-w-none">
          <div className="aspect-[4/5] overflow-hidden rounded-2xl border border-[var(--border)] bg-[var(--surface)] shadow-[0_24px_60px_-20px_rgba(44,42,38,0.18)]">
            <div className="flex h-full flex-col justify-between bg-gradient-to-br from-[#F5F0E8] via-[#FAF7F2] to-[#E8E2D9] p-6 sm:p-8">
              <div>
                <span className="inline-block rounded-full border border-[var(--border)] bg-white/60 px-3 py-1 text-[10px] uppercase tracking-[0.2em] text-[var(--muted)]">
                  Harvest House
                </span>
                <p className="mt-6 font-serif text-2xl leading-snug text-[var(--foreground)] sm:text-3xl">
                  {locale === "zh" ? "自然、本味、克制" : "Natural · Pure · Restrained"}
                </p>
              </div>
              <div className="space-y-3 border-t border-[var(--border)] pt-6">
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--muted)]">
                    {locale === "zh" ? "本周精选" : "Weekly picks"}
                  </span>
                  <span className="font-medium text-[var(--accent)]">4</span>
                </div>
                <div className="flex items-center justify-between text-sm">
                  <span className="text-[var(--muted)]">
                    {locale === "zh" ? "产品分类" : "Categories"}
                  </span>
                  <span className="font-medium text-[var(--foreground)]">6</span>
                </div>
              </div>
            </div>
          </div>
          <div className="absolute -bottom-4 -left-4 hidden h-24 w-24 rounded-full border border-[var(--border)] bg-[var(--surface)]/80 backdrop-blur sm:block" />
          <div className="absolute -right-3 -top-3 hidden h-16 w-16 rounded-full bg-[var(--accent-soft)] sm:block" />
        </div>
      </div>
    </section>
  );
}
