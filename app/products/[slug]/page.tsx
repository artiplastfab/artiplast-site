import type { Metadata } from "next";
import LocaleProductDetailPage, {
  generateMetadata as generateLocaleMetadata,
  generateStaticParams as generateLocaleStaticParams,
} from "@/app/[locale]/products/[slug]/page";
import { SiteShell } from "@/components/site-shell";
import { defaultLocale } from "@/lib/i18n";

export function generateStaticParams() {
  return generateLocaleStaticParams()
    .filter((item) => item.locale === defaultLocale)
    .map(({ slug }) => ({ slug }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  return generateLocaleMetadata({
    params: Promise.resolve({ locale: defaultLocale, slug }),
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;

  return (
    <SiteShell locale={defaultLocale}>
      <LocaleProductDetailPage
        params={Promise.resolve({ locale: defaultLocale, slug })}
      />
    </SiteShell>
  );
}
