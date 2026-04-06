import type { Metadata } from "next";
import { AccordionList } from "@/components/accordion-list";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { getFaqItems } from "@/data/site";
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
    description: "Frequently asked questions about ArtıPlast products, production communication, and contact flow.",
    path: "/faq",
  });
}

export default async function FaqPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const items = getFaqItems(locale);

  return (
    <div className="pb-16 sm:pb-20">
      <PageHero
        eyebrow="FAQ"
        title="Clear answers in a spacious, premium format."
        description="The FAQ stays minimal and practical, helping visitors understand the product and factory conversation quickly."
      />
      <section className="container-shell mt-10">
        <Reveal>
          <AccordionList items={items} />
        </Reveal>
      </section>
    </div>
  );
}
