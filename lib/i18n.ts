export const locales = ["tr", "en", "de", "ar", "az", "bg", "fr", "ru"] as const;

export type Locale = (typeof locales)[number];

export const defaultLocale: Locale = "tr";

export const localeLabels: Record<
  Locale,
  { label: string; nativeLabel: string; flag: string; dir?: "ltr" | "rtl" }
> = {
  tr: { label: "TR", nativeLabel: "Türkçe", flag: "🇹🇷", dir: "ltr" },
  en: { label: "EN", nativeLabel: "English", flag: "🇺🇸", dir: "ltr" },
  de: { label: "DE", nativeLabel: "Deutsch", flag: "🇩🇪", dir: "ltr" },
  ar: { label: "AR", nativeLabel: "العربية", flag: "🇸🇦", dir: "rtl" },
  az: { label: "AZ", nativeLabel: "Azərbaycan", flag: "🇦🇿", dir: "ltr" },
  bg: { label: "BG", nativeLabel: "Български", flag: "🇧🇬", dir: "ltr" },
  fr: { label: "FR", nativeLabel: "Français", flag: "🇫🇷", dir: "ltr" },
  ru: { label: "RU", nativeLabel: "Русский", flag: "🇷🇺", dir: "ltr" },
};

const languageNamesByUiLocale: Record<Locale, Record<Locale, string>> = {
  tr: {
    tr: "Türkçe",
    en: "İngilizce",
    de: "Almanca",
    ar: "Arapça",
    az: "Azerbaycan Türkçesi",
    bg: "Bulgarca",
    fr: "Fransızca",
    ru: "Rusça",
  },
  en: {
    tr: "Turkish",
    en: "English",
    de: "German",
    ar: "Arabic",
    az: "Azerbaijani",
    bg: "Bulgarian",
    fr: "French",
    ru: "Russian",
  },
  de: {
    tr: "Türkisch",
    en: "Englisch",
    de: "Deutsch",
    ar: "Arabisch",
    az: "Aserbaidschanisch",
    bg: "Bulgarisch",
    fr: "Französisch",
    ru: "Russisch",
  },
  ar: {
    tr: "التركية",
    en: "الإنجليزية",
    de: "الألمانية",
    ar: "العربية",
    az: "الأذربيجانية",
    bg: "البلغارية",
    fr: "الفرنسية",
    ru: "الروسية",
  },
  az: {
    tr: "Türkcə",
    en: "İngiliscə",
    de: "Almanca",
    ar: "Ərəbcə",
    az: "Azərbaycan Türkçəsi",
    bg: "Bolqarca",
    fr: "Fransızca",
    ru: "Rusca",
  },
  bg: {
    tr: "Турски",
    en: "Английски",
    de: "Немски",
    ar: "Арабски",
    az: "Азербайджански",
    bg: "Български",
    fr: "Френски",
    ru: "Руски",
  },
  fr: {
    tr: "Turc",
    en: "Anglais",
    de: "Allemand",
    ar: "Arabe",
    az: "Azéri",
    bg: "Bulgare",
    fr: "Français",
    ru: "Russe",
  },
  ru: {
    tr: "Турецкий",
    en: "Английский",
    de: "Немецкий",
    ar: "Арабский",
    az: "Азербайджанский",
    bg: "Болгарский",
    fr: "Французский",
    ru: "Русский",
  },
};

export function getLocaleDisplayName(uiLocale: Locale, targetLocale: Locale) {
  return languageNamesByUiLocale[uiLocale][targetLocale];
}

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
