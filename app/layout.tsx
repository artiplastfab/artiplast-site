import type { Metadata } from "next";
import { Manrope, Outfit } from "next/font/google";
import { defaultLocale } from "@/lib/i18n";
import {
  getLanguageAlternates,
  getSeoEntry,
  manufacturerRobots,
  OG_IMAGE_URL,
  SEO_BRAND_NAME,
  SITE_URL,
} from "@/lib/seo";
import "./globals.css";

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--font-manrope",
  display: "swap",
});

const outfit = Outfit({
  subsets: ["latin"],
  variable: "--font-outfit",
  display: "swap",
});

const homeSeo = getSeoEntry(defaultLocale, "home");

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: SEO_BRAND_NAME,
    template: `%s | ${SEO_BRAND_NAME}`,
  },
  description: homeSeo.description,
  applicationName: SEO_BRAND_NAME,
  robots: manufacturerRobots,
  alternates: {
    canonical: SITE_URL,
    languages: getLanguageAlternates(""),
  },
  openGraph: {
    title: homeSeo.title,
    description: homeSeo.description,
    url: SITE_URL,
    siteName: SEO_BRAND_NAME,
    type: "website",
    images: [
      {
        url: OG_IMAGE_URL,
        width: 1200,
        height: 630,
        alt: `${SEO_BRAND_NAME} manufacturer website`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: homeSeo.title,
    description: homeSeo.description,
    images: [OG_IMAGE_URL],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang={defaultLocale} suppressHydrationWarning>
      <body className={`${manrope.variable} ${outfit.variable}`}>{children}</body>
    </html>
  );
}
