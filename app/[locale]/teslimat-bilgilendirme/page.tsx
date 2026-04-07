import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : defaultLocale;

  return buildPageMetadata(safeLocale, "delivery", "/teslimat-bilgilendirme");
}

export default async function DeliveryInfoPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return <LegalPage locale={locale} pageKey="delivery" />;
}
