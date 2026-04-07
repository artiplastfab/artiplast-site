import type { Metadata } from "next";
import { AccordionList } from "@/components/accordion-list";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { getLocalizedFaqItems, getUiCopy } from "@/data/site";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : defaultLocale;

  return buildMetadata({
    locale: safeLocale,
    title: "FAQ",
  description: "Frequently asked questions about ArtıPLASTİK products, production communication, and contact flow.",
    path: "/faq",
  });
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const items = getLocalizedFaqItems(locale);
  const copy = getUiCopy(locale);

  return (
    <div className="pb-16 sm:pb-20">
      <PageHero
        eyebrow={copy.pages.faq.eyebrow}
        title={copy.pages.faq.title}
        description={copy.pages.faq.description}
      />
      <section className="container-shell mt-10">
        <Reveal>
          <AccordionList items={items} />
        </Reveal>
      </section>
    </div>
  );
}
