import type { Metadata } from "next";
import LocaleCatalogPage, {
  generateMetadata as generateLocaleMetadata,
} from "@/app/[locale]/katalog/page";
import { SiteShell } from "@/components/site-shell";
import { defaultLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  return generateLocaleMetadata({ params: Promise.resolve({ locale: defaultLocale }) });
}

export default function CatalogPage() {
  return (
    <SiteShell locale={defaultLocale}>
      <LocaleCatalogPage params={Promise.resolve({ locale: defaultLocale })} />
    </SiteShell>
  );
}
