import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Check } from "lucide-react";
import type { Product } from "@/data/site";
import { localizedPath, type Locale } from "@/lib/i18n";

export function ProductDetailSection({
  locale,
  product,
}: {
  locale: Locale;
  product: Product;
}) {
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
            className="object-cover"
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

          <Link
            href={localizedPath(locale, `/products/${product.slug}`)}
            className="mt-8 inline-flex items-center gap-2 rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent"
          >
            View Details <ArrowRight className="h-4 w-4" />
          </Link>
        </div>
      </div>
    </article>
  );
}
