import type { Metadata } from "next";
import LocaleTermsPage, {
  generateMetadata as generateLocaleMetadata,
} from "@/app/[locale]/hizmet-kosullari/page";
import { SiteShell } from "@/components/site-shell";
import { defaultLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  return generateLocaleMetadata({ params: Promise.resolve({ locale: defaultLocale }) });
}

export default function TermsPage() {
  return (
    <SiteShell locale={defaultLocale}>
      <LocaleTermsPage params={Promise.resolve({ locale: defaultLocale })} />
    </SiteShell>
  );
}
