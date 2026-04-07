import type { Metadata } from "next";
import { localeLabels, localizedPath, type Locale } from "@/lib/i18n";

export function buildMetadata({
  locale,
  title,
  description,
  path,
}: {
  locale: Locale;
  title: string;
  description: string;
  path: string;
}): Metadata {
  const pageTitle = title === "ArtıPLASTİK" ? title : `${title} | ArtıPLASTİK`;
  const url = `https://www.artiplast.com${localizedPath(locale, path)}`;

  return {
    title: pageTitle,
    description,
    alternates: {
      canonical: url,
      languages: {
        tr: `https://www.artiplast.com${localizedPath("tr", path)}`,
        en: `https://www.artiplast.com${localizedPath("en", path)}`,
        de: `https://www.artiplast.com${localizedPath("de", path)}`,
        ar: `https://www.artiplast.com${localizedPath("ar", path)}`,
        az: `https://www.artiplast.com${localizedPath("az", path)}`,
        bg: `https://www.artiplast.com${localizedPath("bg", path)}`,
        fr: `https://www.artiplast.com${localizedPath("fr", path)}`,
        ru: `https://www.artiplast.com${localizedPath("ru", path)}`,
      },
    },
    openGraph: {
      title: pageTitle,
      description,
      url,
      siteName: "ArtıPLASTİK",
      locale: localeLabels[locale].label,
      type: "website",
      images: [
        {
          url: "https://www.artiplast.com/og-cover.jpg",
          width: 1200,
          height: 630,
          alt: "ArtıPLASTİK premium manufacturer website",
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title: pageTitle,
      description,
      images: ["https://www.artiplast.com/og-cover.jpg"],
    },
  };
}
