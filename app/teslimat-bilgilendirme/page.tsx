import type { Metadata } from "next";
import LocaleDeliveryInfoPage, {
  generateMetadata as generateLocaleMetadata,
} from "@/app/[locale]/teslimat-bilgilendirme/page";
import { SiteShell } from "@/components/site-shell";
import { defaultLocale } from "@/lib/i18n";

export async function generateMetadata(): Promise<Metadata> {
  return generateLocaleMetadata({ params: Promise.resolve({ locale: defaultLocale }) });
}

export default function DeliveryInfoPage() {
  return (
    <SiteShell locale={defaultLocale}>
      <LocaleDeliveryInfoPage params={Promise.resolve({ locale: defaultLocale })} />
    </SiteShell>
  );
}
