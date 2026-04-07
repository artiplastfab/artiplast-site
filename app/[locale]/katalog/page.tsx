import type { Metadata } from "next";
import { ExternalLink, FileText } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

const catalogCopy: Record<Locale, { title: string; description: string; button: string; preview: string }> = {
  tr: { title: "Katalog", description: "Ürün kataloğumuzu inceleyin veya indirin", button: "Kataloğu İndir", preview: "Katalog Önizleme" },
  en: { title: "Catalog", description: "Review or download our product catalog", button: "Download Catalog", preview: "Catalog Preview" },
  de: { title: "Katalog", description: "Sehen Sie sich unseren Produktkatalog an oder laden Sie ihn herunter", button: "Katalog herunterladen", preview: "Katalogvorschau" },
  ar: { title: "الكتالوج", description: "استعرض كتالوج منتجاتنا أو قم بتنزيله", button: "تنزيل الكتالوج", preview: "معاينة الكتالوج" },
  az: { title: "Kataloq", description: "Məhsul kataloqumuzu nəzərdən keçirin və ya endirin", button: "Kataloqu Yüklə", preview: "Kataloq Önizləmə" },
  bg: { title: "Каталог", description: "Разгледайте или изтеглете продуктовия ни каталог", button: "Изтегли каталога", preview: "Преглед на каталога" },
  fr: { title: "Catalogue", description: "Consultez ou téléchargez notre catalogue de produits", button: "Télécharger le catalogue", preview: "Aperçu du catalogue" },
};

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : defaultLocale;
  const copy = catalogCopy[safeLocale];

  return buildMetadata({
    locale: safeLocale,
    title: copy.title,
    description: copy.description,
    path: "/katalog",
  });
}

export default async function CatalogPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = catalogCopy[locale];

  return (
    <div className="pb-16 sm:pb-20">
      <PageHero eyebrow={copy.title} title={copy.title} description={copy.description} />

      <section className="container-shell mt-10">
        <Reveal>
          <div className="panel p-8 sm:p-10">
            <div className="flex flex-col gap-5 sm:flex-row sm:items-center sm:justify-between">
              <div>
                <p className="eyebrow">{copy.preview}</p>
                <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
                  {copy.description}
                </h2>
              </div>
              <a
                href="/catalog.pdf"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white transition hover:bg-accent"
              >
                <FileText className="h-4 w-4" />
                {copy.button}
                <ExternalLink className="h-4 w-4" />
              </a>
            </div>

            <div className="mt-8 overflow-hidden rounded-[28px] border border-border/60 bg-white shadow-soft">
              <iframe src="/catalog.pdf" title={copy.title} className="h-[600px] w-full" />
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
