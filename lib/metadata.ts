import type { Metadata } from "next";
import { localizedPath, type Locale } from "@/lib/i18n";
import {
  getLanguageAlternates,
  getSeoEntry,
  manufacturerRobots,
  OG_IMAGE_URL,
  ogLocaleByLocale,
  SEO_BRAND_NAME,
  SITE_URL,
  type SeoPageKey,
} from "@/lib/seo";

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
  const url = `${SITE_URL}${localizedPath(locale, path)}`;

  return {
    title: {
      absolute: title,
    },
    description,
    robots: manufacturerRobots,
    alternates: {
      canonical: url,
      languages: getLanguageAlternates(path),
    },
    openGraph: {
      title,
      description,
      url,
      siteName: SEO_BRAND_NAME,
      locale: ogLocaleByLocale[locale],
      type: "website",
      images: [
        {
          url: OG_IMAGE_URL,
          width: 1200,
          height: 630,
          alt: `${SEO_BRAND_NAME} premium manufacturer website`,
        },
      ],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [OG_IMAGE_URL],
    },
  };
}

export function buildPageMetadata(locale: Locale, page: SeoPageKey, path: string) {
  const seo = getSeoEntry(locale, page);

  return buildMetadata({
    locale,
    title: seo.title,
    description: seo.description,
    path,
  });
}
