import type { Metadata } from "next";
import LocaleHomePage from "@/app/[locale]/page";
import { SiteShell } from "@/components/site-shell";
import { defaultLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export function generateMetadata(): Metadata {
  return buildMetadata({
    locale: defaultLocale,
    title: "ArtıPLASTİK",
    description:
      "ArtıPLASTİK is a Karaman-based Turkish manufacturer producing premium PVC, ceiling claddings, door claddings, wall claddings, and trim solutions for international buyers.",
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
