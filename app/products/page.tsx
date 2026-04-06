import type { Metadata } from "next";
import LocaleProductsPage, {
  generateMetadata as generateLocaleMetadata,
} from "@/app/[locale]/products/page";
import { SiteShell } from "@/components/site-shell";
import { defaultLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  return generateLocaleMetadata({ params: Promise.resolve({ locale: defaultLocale }) });
}

export default function ProductsPage() {
  return (
    <SiteShell locale={defaultLocale}>
      <LocaleProductsPage params={Promise.resolve({ locale: defaultLocale })} />
    </SiteShell>
  );
}
