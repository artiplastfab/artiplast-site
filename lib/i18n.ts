export const locales = ["tr", "en", "de", "ar", "bg", "az"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export const localeLabels: Record<
  Locale,
  { label: string; nativeLabel: string; flag: string; dir?: "ltr" | "rtl" }
> = {
  tr: { label: "TR", nativeLabel: "Türkçe", flag: "🇹🇷", dir: "ltr" },
  en: { label: "EN", nativeLabel: "English", flag: "🇬🇧", dir: "ltr" },
  de: { label: "DE", nativeLabel: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  ar: { label: "AR", nativeLabel: "العربية", flag: "🇸🇦", dir: "rtl" },
  bg: { label: "BG", nativeLabel: "Български", flag: "🇧🇬", dir: "ltr" },
  az: { label: "AZ", nativeLabel: "Azərbaycan", flag: "🇦🇿", dir: "ltr" },
};

export function isLocale(value: string): value is Locale {
  return locales.includes(value as Locale);
}

export function localizedPath(locale: Locale, path = "") {
  const normalizedPath = path
    ? path.startsWith("/")
      ? path
      : `/${path}`
    : "";

  if (locale === defaultLocale) {
    return normalizedPath || "/";
  }

  return `/${locale}${normalizedPath}`;
}

export function stripLocaleFromPathname(pathname: string) {
  for (const locale of locales) {
    if (pathname === `/${locale}`) {
      return "/";
    }

    if (pathname.startsWith(`/${locale}/`)) {
      return pathname.slice(locale.length + 1);
    }
  }

  return pathname;
}
