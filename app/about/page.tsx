import type { Metadata } from "next";
import LocaleAboutPage, {
  generateMetadata as generateLocaleMetadata,
} from "@/app/[locale]/about/page";
import { SiteShell } from "@/components/site-shell";
import { defaultLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  return generateLocaleMetadata({ params: Promise.resolve({ locale: defaultLocale }) });
}

export default function AboutPage() {
  return (
    <SiteShell locale={defaultLocale}>
      <LocaleAboutPage params={Promise.resolve({ locale: defaultLocale })} />
    </SiteShell>
  );
}
