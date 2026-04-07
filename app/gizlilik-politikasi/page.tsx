import type { Metadata } from "next";
import LocalePrivacyPolicyPage, {
  generateMetadata as generateLocaleMetadata,
} from "@/app/[locale]/gizlilik-politikasi/page";
import { SiteShell } from "@/components/site-shell";
import { defaultLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  return generateLocaleMetadata({ params: Promise.resolve({ locale: defaultLocale }) });
}

export default function PrivacyPolicyPage() {
  return (
    <SiteShell locale={defaultLocale}>
      <LocalePrivacyPolicyPage params={Promise.resolve({ locale: defaultLocale })} />
    </SiteShell>
  );
}
