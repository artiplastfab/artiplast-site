import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { getLegalPage, type LegalKey } from "@/data/legal";
import { type Locale } from "@/lib/i18n";

export function LegalPage({ locale, pageKey }: { locale: Locale; pageKey: LegalKey }) {
  const copy = getLegalPage(locale, pageKey);

  return (
    <div className="pb-16 sm:pb-20">
      <PageHero eyebrow={copy.title} title={copy.title} description={copy.description} />

      <section className="container-shell mt-10">
        <Reveal>
          <div className="panel max-w-4xl p-8 sm:p-10">
            <div className="grid gap-6">
              {copy.paragraphs.map((paragraph) => (
                <p key={paragraph} className="text-sm leading-8 text-muted sm:text-base">
                  {paragraph}
                </p>
              ))}
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
