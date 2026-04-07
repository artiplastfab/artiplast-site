import type { MetadataRoute } from "next";
import { getProducts } from "@/data/site";
import { localizedPath, locales } from "@/lib/i18n";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://www.artiplast.com";

  const staticRoutes = locales.flatMap((locale) =>
    [
      "",
      "/products",
      "/katalog",
      "/about",
      "/info",
      "/contact",
      "/gizlilik-politikasi",
      "/hizmet-kosullari",
      "/teslimat-bilgilendirme",
    ].map((path) => ({
      url: `${baseUrl}${localizedPath(locale, path)}`,
      lastModified: new Date(),
      changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: path === "" ? 1 : 0.8,
    })),
  );

  const productRoutes = locales.flatMap((locale) =>
    getProducts(locale).map((product) => ({
      url: `${baseUrl}${localizedPath(locale, `/products/${product.slug}`)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [...staticRoutes, ...productRoutes];
}
