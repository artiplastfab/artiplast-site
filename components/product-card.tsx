import Image from "next/image";
import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { getUiCopy, type Product } from "@/data/site";
import { localizedPath, type Locale } from "@/lib/i18n";

export function ProductCard({
  locale,
  product,
}: {
  locale: Locale;
  product: Product;
}) {
  const copy = getUiCopy(locale);
  const isTavanLambiri = product.slug === "tavan-lambiri";

  return (
    <article className="group overflow-hidden rounded-[30px] border border-border/60 bg-white shadow-soft transition duration-300 hover:-translate-y-1 hover:shadow-lift">
      <div className="relative min-h-[320px] overflow-hidden bg-panel">
        <Image
          src={product.cardImage}
          alt={product.alt}
          fill
          className={
            isTavanLambiri
              ? "object-contain p-5 transition duration-700 group-hover:scale-[1.03]"
              : "object-cover transition duration-700 group-hover:scale-[1.04]"
          }
          sizes="(max-width: 1024px) 100vw, 33vw"
        />
      </div>
      <div className="p-6 sm:p-7">
        <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
          {product.category}
        </p>
        <h3 className="mt-4 font-display text-2xl font-semibold tracking-[-0.04em] text-ink">
          {product.name}
        </h3>
        <p className="mt-3 text-sm leading-7 text-muted">{product.description}</p>
        <Link
          href={localizedPath(locale, `/products/${product.slug}`)}
          className="mt-6 inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent"
        >
          {copy.actions.viewDetails} <ArrowRight className="h-4 w-4" />
        </Link>
      </div>
    </article>
  );
}
