"use client";

import Link from "next/link";
import { Globe2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { getUiCopy } from "@/data/site";
import {
  localeLabels,
  localizedPath,
  locales,
  stripLocaleFromPathname,
  type Locale,
} from "@/lib/i18n";

export function LanguageSwitcher({ locale }: { locale: Locale }) {
  const pathname = usePathname();
  const restPath = stripLocaleFromPathname(pathname);
  const copy = getUiCopy(locale);

  return (
    <div className="group relative">
      <button
        type="button"
        className="flex h-11 items-center gap-3 rounded-full border border-border bg-white px-4 text-sm font-medium text-ink transition hover:border-accent"
        aria-haspopup="listbox"
        aria-label={copy.actions.chooseLanguage}
      >
        <Globe2 className="h-4 w-4 text-accent" />
        <span>{localeLabels[locale].flag}</span>
        <span>{localeLabels[locale].label}</span>
      </button>
      <div className="pointer-events-none absolute right-0 top-[calc(100%+10px)] w-56 rounded-[24px] border border-border/60 bg-white p-2 opacity-0 shadow-soft transition duration-200 group-hover:pointer-events-auto group-hover:opacity-100">
        {locales.map((item) => (
          <Link
            key={item}
            href={localizedPath(item, restPath === "/" ? "" : restPath)}
            className="flex items-center justify-between rounded-2xl px-3 py-3 text-sm transition hover:bg-panel"
          >
            <span className="flex items-center gap-3">
              <span>{localeLabels[item].flag}</span>
              <span>{`${localeLabels[item].label} ${localeLabels[item].nativeLabel}`}</span>
            </span>
            {item === locale ? (
              <span className="rounded-full bg-accentSoft px-2 py-1 text-[11px] font-semibold text-accent">
                {copy.actions.active}
              </span>
            ) : null}
          </Link>
        ))}
      </div>
    </div>
  );
}
