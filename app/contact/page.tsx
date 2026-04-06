import type { Metadata } from "next";
import LocaleContactPage, {
  generateMetadata as generateLocaleMetadata,
} from "@/app/[locale]/contact/page";
import { SiteShell } from "@/components/site-shell";
import { defaultLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  return generateLocaleMetadata({ params: Promise.resolve({ locale: defaultLocale }) });
}

export default function ContactPage() {
  return (
    <SiteShell locale={defaultLocale}>
      <LocaleContactPage params={Promise.resolve({ locale: defaultLocale })} />
    </SiteShell>
  );
}
