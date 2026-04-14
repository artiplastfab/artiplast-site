import type { Locale } from "@/lib/i18n";

export type CatalogVisual = {
  src: string;
  alt: string;
};

export function getTavanLambiriCatalogVisuals(locale: Locale): CatalogVisual[] {
  const baseAlt =
    locale === "tr"
      ? "ArtıPLAST tavan lambirisi desen modeli"
      : "ArtıPLAST ceiling panel surface pattern";

  return Array.from({ length: 22 }, (_, index) => {
    const imageNumber = String(index + 1).padStart(2, "0");

    return {
      src: `/catalog/tavan-lambirileri/tavan-lambiri-${imageNumber}.jpg`,
      alt: `${baseAlt} ${imageNumber}`,
    };
  });
}

export function getTavanLambiriVisualPreview(locale: Locale, limit = 4): CatalogVisual[] {
  return getTavanLambiriCatalogVisuals(locale).slice(0, limit);
}
