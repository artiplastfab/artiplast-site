import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CTASection } from "@/components/cta-section";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import {
  getProductBySlug,
  getProducts,
  getRelatedProducts,
  getSpecPlaceholders,
  getUiCopy,
} from "@/data/site";
import {
  defaultLocale,
  isLocale,
  locales,
  localizedPath,
  type Locale,
} from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getProducts(locale).map((product) => ({
      locale,
      slug: product.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : defaultLocale;
  const product = getProductBySlug(safeLocale, slug);

  if (!product) {
    return buildMetadata({
      locale: safeLocale,
      title: "Product",
      description: "ArtıPLAST product detail page.",
      path: `/products/${slug}`,
    });
  }

  return buildMetadata({
    locale: safeLocale,
    title: product.name,
    description: product.description,
    path: `/products/${slug}`,
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const product = getProductBySlug(locale, slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(locale, slug);
  const specPlaceholders = getSpecPlaceholders(locale);
  const copy = getUiCopy(locale);
  const detailHeading: Record<Locale, string> = {
    tr: "Rafine iç mekanlar ve güven veren üretici sunumu için tasarlandı.",
    en: "Designed for refined interiors and dependable manufacturing presentation.",
    de: "Entwickelt für hochwertige Innenräume und einen verlässlichen Herstellerauftritt.",
    ar: "مصمم للمساحات الداخلية الراقية ولعرض مصنع موثوق.",
    az: "Zərif interyerlər və etibarlı istehsalçı təqdimatı üçün hazırlanıb.",
    bg: "Създаден за изискани интериори и надеждно представяне на производителя.",
    fr: "Conçu pour des intérieurs raffinés et une présentation fabricant fiable.",
  };

  return (
    <div className="pb-16 sm:pb-20">
      <PageHero
        eyebrow={product.category}
        title={product.name}
        description={product.description}
      />

      <section className="container-shell mt-10 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal>
          <div className="overflow-hidden rounded-[36px] border border-border/60 bg-panel shadow-soft">
            <div className="relative min-h-[420px]">
              <Image
                src={product.heroImage}
                alt={product.alt}
                fill
                className="object-cover"
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="panel p-8 sm:p-10">
            <p className="eyebrow">{product.kicker}</p>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
              {detailHeading[locale]}
            </h2>
            <p className="mt-4 copy-muted">{product.longDescription}</p>
            <div className="mt-8 space-y-3">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 rounded-[20px] bg-panel/70 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent" />
                  <p className="text-sm text-ink/80">{feature}</p>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-shell mt-24 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="panel p-8 sm:p-10">
            <SectionHeading
              eyebrow={copy.labels.applications}
              title={copy.labels.applications}
              description={product.description}
            />
            <div className="mt-8 grid gap-3">
              {product.applications.map((application) => (
                <div
                  key={application}
                  className="rounded-[20px] border border-border/70 px-5 py-4 text-sm text-ink/80"
                >
                  {application}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="panel p-8 sm:p-10">
            <SectionHeading
              eyebrow={copy.labels.specifications}
              title={copy.labels.specifications}
              description={product.longDescription}
            />
            <div className="mt-8 grid gap-3">
              {specPlaceholders.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-[20px] bg-panel/70 px-5 py-4 text-sm"
                >
                  <span className="text-muted">{item.label}</span>
                  <span className="font-medium text-ink">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-shell mt-24">
        <Reveal>
          <div className="overflow-hidden rounded-[36px] border border-border/60 bg-ink text-white shadow-lift">
            <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="eyebrow border-white/10 bg-white/5 text-white">{copy.labels.factoryConfidence}</p>
                <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  {copy.labels.factoryConfidence}
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {product.confidencePoints.map((point) => (
                  <div key={point} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm leading-7 text-white/78">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-shell mt-24">
        <Reveal>
          <SectionHeading
            eyebrow={copy.labels.relatedProducts}
            title={copy.labels.relatedProducts}
            description={product.longDescription}
          />
        </Reveal>
        <div className="mt-8">
          <GalleryGrid
            items={relatedProducts.map((item) => ({
              title: item.name,
              description: item.description,
              image: item.cardImage,
              href: localizedPath(locale, `/products/${item.slug}`),
            }))}
          />
        </div>
        <div className="mt-8">
          <a
            href={localizedPath(locale, "/products")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent"
          >
            {copy.actions.returnToProducts} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <CTASection
        locale={locale}
        title={copy.pages.contact.title}
        description={copy.pages.contact.description}
      />
    </div>
  );
}
