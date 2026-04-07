import { Footer } from "@/components/footer";
import { Header } from "@/components/header";
import { SeoSchema } from "@/components/seo-schema";
import { SearchProvider } from "@/components/search-provider";
import { getSearchEntries } from "@/data/site";
import type { Locale } from "@/lib/i18n";

export function SiteShell({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  return (
    <SearchProvider locale={locale} entries={getSearchEntries(locale)}>
      <div className="min-h-screen">
        <SeoSchema locale={locale} />
        <Header locale={locale} />
        <main>{children}</main>
        <Footer locale={locale} />
      </div>
    </SearchProvider>
  );
}
