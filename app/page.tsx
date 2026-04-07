import type { Metadata } from "next";
import LocaleHomePage from "@/app/[locale]/page";
import { SiteShell } from "@/components/site-shell";
import { defaultLocale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";

export function generateMetadata(): Metadata {
  return buildPageMetadata(defaultLocale, "home", "");
}

export default function RootPage() {
  return (
    <SiteShell locale={defaultLocale}>
      <LocaleHomePage params={Promise.resolve({ locale: defaultLocale })} />
    </SiteShell>
  );
}
