"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import {
  getLocaleDisplayName,
  localeLabels,
  localizedPath,
  locales,
  stripLocaleFromPathname,
  type Locale,
} from "@/lib/i18n";

export function LanguageFlags({
  locale,
  compact = false,
}: {
  locale: Locale;
  compact?: boolean;
}) {
  const pathname = usePathname();
  const restPath = stripLocaleFromPathname(pathname);

  return (
    <div className={`flex items-center ${compact ? "flex-wrap gap-2" : "flex-nowrap gap-1.5"}`}>
      {locales.map((item) => {
        const active = item === locale;

        return (
          <Link
            key={item}
            href={localizedPath(item, restPath === "/" ? "" : restPath)}
            aria-label={getLocaleDisplayName(locale, item)}
            title={getLocaleDisplayName(locale, item)}
            className={`inline-flex items-center justify-center rounded-full border transition ${
              compact
                ? "h-9 w-9 text-base"
                : "h-9 min-w-9 px-2 text-sm"
            } ${
              active
                ? "border-accent bg-accentSoft text-accent shadow-soft"
                : "border-border/70 bg-white text-ink hover:border-accent/70 hover:text-accent"
            }`}
          >
            <span>{localeLabels[item].flag}</span>
          </Link>
        );
      })}
    </div>
  );
}
