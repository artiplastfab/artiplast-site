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
            <article className="space-y-10">
              {copy.blocks.map((block, index) =>
                block.type === "paragraph" ? (
                  <p key={`${block.type}-${index}`} className="text-sm leading-8 text-muted sm:text-base">
                    {block.content}
                  </p>
                ) : (
                  <section key={`${block.title}-${index}`} className="space-y-4">
                    <h2 className="font-display text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
                      {block.title}
                    </h2>
                    {block.paragraphs?.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-8 text-muted sm:text-base">
                        {paragraph}
                      </p>
                    ))}
                    {block.items?.length ? (
                      <ul className="space-y-3 pl-5 text-sm leading-8 text-muted sm:text-base">
                        {block.items.map((item) => (
                          <li key={item} className="list-disc">
                            {item}
                          </li>
                        ))}
                      </ul>
                    ) : null}
                  </section>
                ),
              )}
            </article>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
