import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import { getTavanLambiriVisualPreview } from "@/data/catalog-visuals";
import { getUiCopy, type Product } from "@/data/site";
import { localizedPath, type Locale } from "@/lib/i18n";

export function ProductDetailSection({
  locale,
  product,
}: {
  locale: Locale;
  product: Product;
}) {
  const copy = getUiCopy(locale);
  const isTavanLambiri = product.slug === "tavan-lambiri";
  const previewVisuals = isTavanLambiri ? getTavanLambiriVisualPreview(locale) : [];

  return (
    <article
      id={product.slug}
      className="overflow-hidden rounded-[36px] border border-border/60 bg-white shadow-soft"
    >
      <div className="grid gap-0 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[340px] bg-panel lg:min-h-[520px]">
          <Image
            src={product.heroImage}
            alt={product.alt}
            fill
            className={isTavanLambiri ? "object-contain p-8" : "object-cover"}
            sizes="(max-width: 1024px) 100vw, 50vw"
          />
        </div>
        <div className="p-8 sm:p-10">
          <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
            {product.kicker}
          </p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
            {product.name}
          </h2>
          <p className="mt-4 max-w-xl copy-muted">{product.description}</p>

          <div className="mt-8 grid gap-3">
            {product.features.map((feature) => (
              <div key={feature} className="flex items-start gap-3 rounded-[20px] bg-panel/70 p-4">
                <Check className="mt-0.5 h-4 w-4 text-accent" />
                <p className="text-sm text-ink/80">{feature}</p>
              </div>
            ))}
          </div>

          {isTavanLambiri ? (
            <div className="mt-8 grid grid-cols-2 gap-3">
              {previewVisuals.map((item) => (
                <div
                  key={item.src}
                  className="relative aspect-[4/3] overflow-hidden rounded-[20px] border border-border/60 bg-panel"
                >
                  <Image
                    src={item.src}
                    alt={item.alt}
                    fill
                    className="object-contain p-3"
                    sizes="(max-width: 1024px) 50vw, 20vw"
                  />
                </div>
              ))}
            </div>
          ) : null}

          <Link
            href={localizedPath(locale, `/products/${product.slug}`)}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent"
          >
            {copy.actions.viewDetails} <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
