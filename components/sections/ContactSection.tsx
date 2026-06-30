"use client";

import { homeContent, t } from "@/content/home";
import { useLanguage } from "@/components/providers/LanguageProvider";

export function ContactSection() {
  const { locale } = useLanguage();
  const { contact } = homeContent;

  const rows = [
    { label: t(contact.addressLabel, locale), value: t(contact.address, locale), href: undefined },
    { label: t(contact.phoneLabel, locale), value: contact.phone, href: `tel:${contact.phone.replace(/\s/g, "")}` },
    { label: t(contact.emailLabel, locale), value: contact.email, href: `mailto:${contact.email}` },
    { label: t(contact.hoursLabel, locale), value: t(contact.hours, locale), href: undefined },
    { label: t(contact.wechatLabel, locale), value: contact.wechat, href: undefined },
  ];

  return (
    <section id="contact" className="scroll-mt-20 bg-[var(--surface)] py-16 sm:py-20 lg:py-24">
      <div className="mx-auto max-w-6xl px-4 sm:px-6 lg:px-8">
        <div className="grid gap-10 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <h2 className="font-serif text-3xl text-[var(--foreground)] sm:text-4xl">
              {t(contact.title, locale)}
            </h2>
            <p className="mt-4 max-w-md text-sm leading-relaxed text-[var(--muted)] sm:text-base">
              {t(contact.subtitle, locale)}
            </p>
            <div className="mt-8 hidden h-px w-16 bg-[var(--accent)] lg:block" />
          </div>

          <div className="rounded-2xl border border-[var(--border)] bg-[var(--background)] p-6 sm:p-8">
            <dl className="space-y-6">
              {rows.map((row) => (
                <div
                  key={row.label}
                  className="grid gap-1 border-b border-[var(--border)] pb-6 last:border-0 last:pb-0 sm:grid-cols-[120px_1fr] sm:gap-4"
                >
                  <dt className="text-xs font-medium uppercase tracking-[0.15em] text-[var(--accent)]">
                    {row.label}
                  </dt>
                  <dd className="text-sm leading-relaxed text-[var(--foreground)] sm:text-base">
                    {row.href ? (
                      <a
                        href={row.href}
                        className="transition-colors hover:text-[var(--accent)]"
                      >
                        {row.value}
                      </a>
                    ) : (
                      row.value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </div>
    </section>
  );
}
