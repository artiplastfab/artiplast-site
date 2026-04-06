import type { Metadata } from "next";
import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SearchProvider } from "@/components/search-provider";
import { getSearchEntries } from "@/data/site";
import { defaultLocale, locales, type Locale, isLocale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export function generateStaticParams() {
  return locales.map((locale) => ({ locale }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : defaultLocale;

  return buildMetadata({
    locale: safeLocale,
    title: "ArtıPLAST",
    description:
      "ArtıPLAST is a Karaman-based Turkish manufacturer producing tavan lambiri, kaval borusu, and duvar lambiri for international buyers.",
    path: "",
  });
}

export default async function LocaleLayout({
  children,
  params,
}: Readonly<{
  children: React.ReactNode;
  params: Promise<{ locale: string }>;
}>) {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : defaultLocale;

  return (
    <SearchProvider locale={safeLocale} entries={getSearchEntries(safeLocale)}>
      <div className="min-h-screen">
        <Header locale={safeLocale} />
        <main>{children}</main>
        <Footer locale={safeLocale} />
      </div>
    </SearchProvider>
  );
}
