import type { Metadata } from "next";
import { PageHero } from "@/components/page-hero";
import { ProductDetailSection } from "@/components/product-detail-section";
import { Reveal } from "@/components/reveal";
import { getProducts, getUiCopy } from "@/data/site";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : defaultLocale;

  return buildPageMetadata(safeLocale, "products", "/products");
}

export default async function ProductsPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const products = getProducts(locale);
  const copy = getUiCopy(locale);

  return (
    <div className="pb-16 sm:pb-20">
      <PageHero
        eyebrow={copy.pages.products.eyebrow}
        title={copy.pages.products.title}
        description={copy.pages.products.description}
      />

      <section className="container-shell mt-10">
        <Reveal>
          <div className="flex flex-wrap gap-3">
            {products.map((product) => (
              <a
                key={product.slug}
                href={`#${product.slug}`}
                className="rounded-full border border-border px-4 py-2 text-sm font-medium text-muted transition hover:border-accent hover:text-accent"
              >
                {product.name}
              </a>
            ))}
          </div>
        </Reveal>
      </section>

      <section className="container-shell mt-10 space-y-8">
        {products.map((product, index) => (
          <Reveal key={product.slug} delay={index * 0.06}>
            <ProductDetailSection locale={locale} product={product} />
          </Reveal>
        ))}
      </section>
    </div>
  );
}
