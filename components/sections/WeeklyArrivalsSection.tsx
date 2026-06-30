"use client";

import { homeContent, t } from "@/content/home";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function WeeklyArrivalsSection() {
  const { locale } = useLanguage();
  const { arrivals } = homeContent;

  return (
    <section id="arrivals" className="scroll-mt-20 bg-[var(--surface)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="mb-10 flex flex-col gap-3 sm:mb-12 sm:flex-row sm:items-end sm:justify-between">
          <div>
            <p className="text-xs uppercase tracking-[0.25em] text-[var(--accent)]">
              {t(arrivals.badge, locale)}
            </p>
            <h2 className="mt-2 font-serif text-3xl text-[var(--foreground)] sm:text-4xl">
              {t(arrivals.title, locale)}
            </h2>
          </div>
          <p className="max-w-sm text-sm leading-relaxed text-[var(--muted)] sm:text-right">
            {t(arrivals.subtitle, locale)}
          </p>
        </div>

        <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {arrivals.items.map((item) => (
            <article
              key={item.id}
              className="group flex flex-col overflow-hidden rounded-xl border border-[var(--border)] bg-[var(--background)] transition-shadow hover:shadow-[0_12px_40px_-16px_rgba(44,42,38,0.15)]"
            >
              <div
                className={`aspect-[4/3] bg-gradient-to-br ${item.accent} relative overflow-hidden`}
              >
                <div className="absolute inset-0 flex items-center justify-center">
                  <span className="font-serif text-5xl text-[var(--foreground)]/10 transition-transform group-hover:scale-110">
                    {item.name.en.charAt(0)}
                  </span>
                </div>
                <span className="absolute left-3 top-3 rounded-full bg-white/80 px-2.5 py-1 text-[10px] font-medium uppercase tracking-wider text-[var(--accent)] backdrop-blur">
                  {t(arrivals.badge, locale)}
                </span>
              </div>
              <div className="flex flex-1 flex-col p-5">
                <h3 className="font-serif text-lg text-[var(--foreground)]">
                  {t(item.name, locale)}
                </h3>
                <p className="mt-1 text-xs tracking-wide text-[var(--accent)]">
                  {t(item.origin, locale)}
                </p>
                <p className="mt-3 flex-1 text-sm leading-relaxed text-[var(--muted)]">
                  {t(item.note, locale)}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
