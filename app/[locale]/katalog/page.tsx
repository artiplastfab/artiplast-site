import type { Metadata } from "next";
import { ArrowDownToLine, ExternalLink, FileText } from "lucide-react";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";
import { buildPageMetadata } from "@/lib/metadata";

type CatalogCardCopy = {
  pageTitle: string;
  pageDescription: string;
  eyebrow: string;
  title: string;
  description: string;
  viewLabel: string;
  downloadLabel: string;
  viewUrl: string;
  downloadUrl: string;
};

const TURKISH_CATALOG_VIEW =
  "https://drive.google.com/file/d/1eXsMrrsZ3gRgI6upxgkqMnK7fVNvKxi1/view?usp=drive_link";
const TURKISH_CATALOG_DOWNLOAD =
  "https://drive.google.com/uc?export=download&id=1eXsMrrsZ3gRgI6upxgkqMnK7fVNvKxi1";

const ENGLISH_CATALOG_VIEW =
  "https://drive.google.com/file/d/1qwd116dIvaDIMYWiFYB7HWRJ3U8ScGOO/view?usp=drive_link";
const ENGLISH_CATALOG_DOWNLOAD =
  "https://drive.google.com/uc?export=download&id=1qwd116dIvaDIMYWiFYB7HWRJ3U8ScGOO";

const turkishCatalog: CatalogCardCopy = {
  pageTitle: "Katalog",
  pageDescription: "Ürün kataloglarımızı görüntüleyin veya indirin",
  eyebrow: "Türkçe Katalog",
  title: "Tavan Lambiri Kataloğu",
  description: "Tavan lambiri ürün grubuna ait Türkçe katalog dosyasını görüntüleyin veya indirin.",
  viewLabel: "Görüntüle",
  downloadLabel: "İndir",
  viewUrl: TURKISH_CATALOG_VIEW,
  downloadUrl: TURKISH_CATALOG_DOWNLOAD,
};

const englishCatalog: CatalogCardCopy = {
  pageTitle: "Catalog",
  pageDescription: "View or download our product catalog",
  eyebrow: "English Catalog",
  title: "Ceiling Panel Catalog",
  description: "View or download the English catalog file for the ceiling panel product group.",
  viewLabel: "View",
  downloadLabel: "Download",
  viewUrl: ENGLISH_CATALOG_VIEW,
  downloadUrl: ENGLISH_CATALOG_DOWNLOAD,
};

function getCatalogCard(locale: Locale) {
  return locale === "tr" ? turkishCatalog : englishCatalog;
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : defaultLocale;

  return buildPageMetadata(safeLocale, "catalog", "/katalog");
}

export default async function CatalogPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const copy = getCatalogCard(locale);

  return (
    <div className="pb-16 sm:pb-20">
      <PageHero eyebrow={copy.pageTitle} title={copy.pageTitle} description={copy.pageDescription} />

      <section className="container-shell mt-10">
        <Reveal>
          <div className="panel overflow-hidden p-8 sm:p-10">
            <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
              <div className="rounded-[30px] border border-border/60 bg-white p-7 shadow-soft sm:p-8">
                <p className="eyebrow">{copy.eyebrow}</p>
                <div className="mt-6 inline-flex h-14 w-14 items-center justify-center rounded-2xl bg-accent/10 text-accent">
                  <FileText className="h-6 w-6" />
                </div>
                <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
                  {copy.title}
                </h2>
                <p className="mt-4 max-w-xl text-sm leading-7 text-muted sm:text-base">
                  {copy.description}
                </p>
                <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                  <a
                    href={copy.viewUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white transition hover:bg-accent"
                  >
                    <ExternalLink className="h-4 w-4" />
                    {copy.viewLabel}
                  </a>
                  <a
                    href={copy.downloadUrl}
                    target="_blank"
                    rel="noreferrer"
                    className="inline-flex items-center justify-center gap-2 rounded-full border border-border bg-white px-6 py-4 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
                  >
                    <ArrowDownToLine className="h-4 w-4" />
                    {copy.downloadLabel}
                  </a>
                </div>
              </div>

              <div className="relative overflow-hidden rounded-[32px] border border-border/60 bg-panel p-7 sm:p-10">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(244,110,32,0.12),transparent_36%)]" />
                <div className="relative">
                  <p className="eyebrow">{copy.pageTitle}</p>
                  <h3 className="mt-6 font-display text-2xl font-semibold tracking-[-0.04em] text-ink sm:text-3xl">
                    {copy.title}
                  </h3>
                  <p className="mt-4 text-sm leading-7 text-muted sm:text-base">
                    {copy.description}
                  </p>
                  <div className="mt-8 grid gap-4 sm:grid-cols-2">
                    <div className="rounded-[24px] border border-border/60 bg-white p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                        {copy.viewLabel}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted">
                        {locale === "tr"
                          ? "Kataloğu yeni sekmede açarak ürün grubunu detaylı şekilde inceleyin."
                          : "Open the catalog in a new tab to review the product group in detail."}
                      </p>
                    </div>
                    <div className="rounded-[24px] border border-border/60 bg-white p-5">
                      <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                        {copy.downloadLabel}
                      </p>
                      <p className="mt-3 text-sm leading-7 text-muted">
                        {locale === "tr"
                          ? "Doğrudan Google Drive indirme bağlantısıyla katalog dosyasını cihazınıza alın."
                          : "Use the direct Google Drive download link to save the catalog file to your device."}
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
