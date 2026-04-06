import type { Metadata } from "next";
import LocaleFaqPage, {
  generateMetadata as generateLocaleMetadata,
} from "@/app/[locale]/faq/page";
import { SiteShell } from "@/components/site-shell";
import { defaultLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  return generateLocaleMetadata({ params: Promise.resolve({ locale: defaultLocale }) });
}

export default function FaqPage() {
  return (
    <SiteShell locale={defaultLocale}>
      <LocaleFaqPage params={Promise.resolve({ locale: defaultLocale })} />
    </SiteShell>
  );
}
