import type { Metadata } from "next";
import LocaleInfoPage, {
  generateMetadata as generateLocaleMetadata,
} from "@/app/[locale]/info/page";
import { SiteShell } from "@/components/site-shell";
import { defaultLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  return generateLocaleMetadata({ params: Promise.resolve({ locale: defaultLocale }) });
}

export default function InfoPage() {
  return (
    <SiteShell locale={defaultLocale}>
      <LocaleInfoPage params={Promise.resolve({ locale: defaultLocale })} />
    </SiteShell>
  );
}
