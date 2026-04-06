import type { Metadata } from "next";
import LocaleHomePage from "@/app/[locale]/page";
import { SiteShell } from "@/components/site-shell";
import { defaultLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export function generateMetadata(): Metadata {
  return buildMetadata({
    locale: defaultLocale,
    title: "Premium Manufacturer of Interior Profiles and Panels",
    description:
      "ArtıPlast is a Karaman-based Turkish manufacturer producing tavan lambiri, kaval borusu, and PS panel systems for global buyers.",
    path: "",
  });
}

export default function RootPage() {
  return (
    <SiteShell locale={defaultLocale}>
      <LocaleHomePage params={Promise.resolve({ locale: defaultLocale })} />
    </SiteShell>
  );
}
