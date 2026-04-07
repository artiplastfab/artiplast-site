import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { VideoPlaceholder } from "@/components/video-placeholder";
import { getFactoryGallery, getLocalizedAboutSections, getUiCopy } from "@/data/site";
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
    title: "About",
    description:
      "Learn about ArtıPLAST, a Karaman-based manufacturer focused on premium product presentation and reliable production capability.",
    path: "/about",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const sections = getLocalizedAboutSections(locale);
  const gallery = getFactoryGallery(locale);
  const copy = getUiCopy(locale);

  return (
    <div className="pb-16 sm:pb-20">
      <PageHero
        eyebrow={copy.pages.about.eyebrow}
        title={copy.pages.about.title}
        description={copy.pages.about.description}
      />

      <section id="fabrikamiz" className="container-shell mt-10 scroll-mt-28 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="panel p-8 sm:p-10">
            <SectionHeading
              eyebrow={copy.labels.company}
              title={copy.pages.about.title}
              description={copy.pages.about.description}
            />
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="grid gap-4 sm:grid-cols-2">
            {sections.map((section) => (
              <div key={section.title} className="rounded-[28px] border border-border/60 bg-panel p-6">
                <p className="text-sm font-semibold uppercase tracking-[0.18em] text-accent">
                  {section.title}
                </p>
                <p className="mt-4 text-sm leading-7 text-muted">{section.description}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <section id="hizmetlerimiz" className="container-shell mt-24 scroll-mt-28">
        <Reveal>
          <SectionHeading
            eyebrow={copy.home.factoryPreviewEyebrow}
            title={copy.home.factoryPreviewTitle}
            description={copy.home.factoryPreviewDescription}
          />
        </Reveal>
        <div className="mt-8">
          <GalleryGrid items={gallery} />
        </div>
      </section>

      <section id="neden-biz" className="container-shell mt-24 scroll-mt-28 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <VideoPlaceholder locale={locale} />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="panel p-8 sm:p-10">
            <p className="eyebrow">{copy.labels.qualityApproach}</p>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
              {copy.labels.qualityApproach}
            </h2>
            <p className="mt-4 copy-muted">{copy.pages.about.description}</p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
