import type { Metadata } from "next";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { VideoPlaceholder } from "@/components/video-placeholder";
import { getAboutSections, getFactoryGallery } from "@/data/site";
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
      "Learn about ArtıPlast, a Karaman-based manufacturer focused on premium product presentation and reliable production capability.",
    path: "/about",
  });
}

export default async function AboutPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const sections = getAboutSections(locale);
  const gallery = getFactoryGallery(locale);

  return (
    <div className="pb-16 sm:pb-20">
      <PageHero
        eyebrow="About ArtıPlast"
        title="A concise manufacturer story with room for future factory media."
        description="ArtıPlast is positioned as a serious Karaman-based producer with a calm, modern, export-oriented presentation."
      />

      <section className="container-shell mt-10 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <div className="panel p-8 sm:p-10">
            <SectionHeading
              eyebrow="Company"
              title="Manufacturing credibility, presented with restraint."
              description="The brand story stays short by design. The focus remains on factory confidence, visual quality, and international readiness."
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

      <section className="container-shell mt-24">
        <Reveal>
          <SectionHeading
            eyebrow="Factory Visuals"
            title="Prepared for exterior, interior, and production line imagery."
            description="The section blocks below are placeholder-ready so new media can be dropped in later without changing the layout system."
          />
        </Reveal>
        <div className="mt-8">
          <GalleryGrid items={gallery} />
        </div>
      </section>

      <section className="container-shell mt-24 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <VideoPlaceholder />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="panel p-8 sm:p-10">
            <p className="eyebrow">Quality Approach</p>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
              Visual quality, product consistency, and orderly production communication.
            </h2>
            <p className="mt-4 copy-muted">
              This block is reserved for future quality statements, certificates, or process highlights. The current structure keeps the presentation premium without forcing long corporate text.
            </p>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
