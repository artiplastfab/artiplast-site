import { Building2, Globe2, Layers3, ScanSearch } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { FeatureStat } from "@/components/feature-stat";
import { GalleryGrid } from "@/components/gallery-grid";
import { HeroSection } from "@/components/hero-section";
import { ProductCard } from "@/components/product-card";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { VideoPlaceholder } from "@/components/video-placeholder";
import {
  getGalleryItems,
  getHomepageMetrics,
  getHomepageTrustPoints,
  getProducts,
  getUiCopy,
} from "@/data/site";
import { localizedPath, type Locale } from "@/lib/i18n";

export default async function HomePage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const products = getProducts(locale);
  const trustPoints = getHomepageTrustPoints(locale);
  const metrics = getHomepageMetrics(locale);
  const galleryItems = getGalleryItems(locale);
  const copy = getUiCopy(locale);

  return (
    <div className="pb-16 sm:pb-20">
      <HeroSection locale={locale} />

      <section className="container-shell mt-10 sm:mt-14">
        <Reveal>
          <SectionHeading
            eyebrow="Products"
            title="Three focused product families, presented with clarity."
            description="Every category is designed to read quickly, photograph beautifully, and support a premium international presentation."
            action={{ label: copy.actions.exploreAllProducts, href: localizedPath(locale, "/products") }}
          />
        </Reveal>
        <div className="mt-8 grid gap-6 lg:grid-cols-3">
          {products.map((product, index) => (
            <Reveal key={product.slug} delay={index * 0.08}>
              <ProductCard locale={locale} product={product} />
            </Reveal>
          ))}
        </div>
      </section>

      <section className="container-shell mt-24 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-start">
        <Reveal>
          <div className="panel overflow-hidden p-8 sm:p-10">
            <SectionHeading
              eyebrow="Why ArtıPlast"
              title="A manufacturer presence built on trust, precision, and export-ready presentation."
              description="Minimal words, strong signals, and a confident visual system help buyers understand the factory before the first message."
            />
            <div className="mt-10 grid gap-4 sm:grid-cols-2">
              {trustPoints.map((point, index) => (
                <FeatureStat key={point.title} item={point} delay={index * 0.06} />
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-[32px] border border-border/70 bg-ink p-8 text-white shadow-lift sm:p-10">
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,110,32,0.42),transparent_36%)]" />
            <div className="relative">
              <p className="eyebrow border-white/10 bg-white/5 text-white">Factory Strength</p>
              <h2 className="mt-6 max-w-md font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                Premium visual space reserved for factory mood, production confidence, and export credibility.
              </h2>
              <p className="mt-4 max-w-lg text-sm leading-7 text-white/72 sm:text-base">
                This section is intentionally structured for future photography, cinematic stills, or a short introduction reel.
              </p>
              <div className="mt-10 grid gap-4 sm:grid-cols-3">
                {[
                  { icon: Building2, label: "Karaman facility" },
                  { icon: Layers3, label: "Product-focused lines" },
                  { icon: Globe2, label: "International outlook" },
                ].map((item) => (
                  <div key={item.label} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                    <item.icon className="h-5 w-5 text-accent" />
                    <p className="mt-4 text-sm font-medium text-white">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-shell mt-24">
        <Reveal>
          <div className="overflow-hidden rounded-[36px] border border-border/60 bg-panel">
            <div className="grid lg:grid-cols-[0.92fr_1.08fr]">
              <div className="flex flex-col justify-between p-8 sm:p-12">
                <div>
                  <p className="eyebrow">Featured Visual</p>
                  <h2 className="mt-6 headline-lg max-w-xl">
                    Spacious, editorial product presentation with room for premium media.
                  </h2>
                  <p className="mt-4 max-w-md copy-muted">
                    A wide visual band helps the homepage feel international, confident, and image-led without becoming decorative.
                  </p>
                </div>
                <a
                  href={localizedPath(locale, "/about")}
                  className="mt-10 inline-flex w-fit items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent"
                >
                  See the brand story
                </a>
              </div>
              <div className="min-h-[380px] border-t border-border/60 bg-[url('/images/factory-atmosphere.svg')] bg-cover bg-center lg:min-h-[520px] lg:border-l lg:border-t-0" />
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-shell mt-24">
        <Reveal>
          <SectionHeading
            eyebrow="Gallery"
            title="Product-led imagery with very little copy."
            description="The layout is intentionally prepared for future photography drops, keeping the visual hierarchy clean and premium."
          />
        </Reveal>
        <div className="mt-8">
          <GalleryGrid items={galleryItems} />
        </div>
      </section>

      <section className="container-shell mt-24 grid gap-8 lg:grid-cols-[0.9fr_1.1fr]">
        <Reveal>
          <SectionHeading
            eyebrow="Factory Preview"
            title="Reserved space for exterior visuals, line footage, and interior production scenes."
            description="Structured as a premium placeholder now, ready for motion content and real factory photography later."
          />
          <div className="mt-8 flex items-center gap-3 text-sm text-muted">
            <ScanSearch className="h-4 w-4 text-accent" />
            Search, product pages, and contact journeys all reuse the same product data model.
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <VideoPlaceholder />
        </Reveal>
      </section>

      <section className="container-shell mt-24">
        <Reveal>
          <div className="grid gap-6 rounded-[34px] border border-border/60 bg-white p-8 shadow-soft sm:grid-cols-2 sm:p-10 lg:grid-cols-4">
            {metrics.map((metric) => (
              <div key={metric.label} className="rounded-[24px] bg-panel/70 p-6">
                <p className="font-display text-3xl font-semibold tracking-[-0.04em] text-ink">
                  {metric.value}
                </p>
                <p className="mt-2 text-sm text-muted">{metric.label}</p>
              </div>
            ))}
          </div>
        </Reveal>
      </section>

      <CTASection
        locale={locale}
        title="Build your first impression with a manufacturer that looks as precise as it produces."
        description="Use the product pages for category exploration or open the contact page for custom requirements, dimensions, and future factory discussions."
      />
    </div>
  );
}
