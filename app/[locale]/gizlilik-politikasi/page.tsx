import type { Metadata } from "next";
import { LegalPage } from "@/components/legal-page";
import { getLegalPage } from "@/data/legal";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : defaultLocale;
  const copy = getLegalPage(safeLocale, "privacy");

  return buildMetadata({
    locale: safeLocale,
    title: copy.title,
    description: copy.description,
    path: "/gizlilik-politikasi",
  });
}

export default async function PrivacyPolicyPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;

  return <LegalPage locale={locale} pageKey="privacy" />;
}
