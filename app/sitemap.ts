import type { MetadataRoute } from "next";
import { getProducts } from "@/data/site";
import { localizedPath, locales } from "@/lib/i18n";
import { SITE_URL } from "@/lib/seo";

export default function sitemap(): MetadataRoute.Sitemap {
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
      url: `${SITE_URL}${localizedPath(locale, path)}`,
      lastModified: new Date(),
      changeFrequency: (path === "" ? "weekly" : "monthly") as "weekly" | "monthly",
      priority: path === "" ? 1 : 0.8,
    })),
  );

  const productRoutes = locales.flatMap((locale) =>
    getProducts(locale).map((product) => ({
      url: `${SITE_URL}${localizedPath(locale, `/products/${product.slug}`)}`,
      lastModified: new Date(),
      changeFrequency: "monthly" as const,
      priority: 0.7,
    })),
  );

  return [...staticRoutes, ...productRoutes];
}
