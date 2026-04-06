"use client";

import Link from "next/link";
import { Globe2 } from "lucide-react";
import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";
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
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClick = (event: MouseEvent) => {
      if (!ref.current?.contains(event.target as Node)) {
        setOpen(false);
      }
    };

    window.addEventListener("mousedown", handleClick);
    return () => window.removeEventListener("mousedown", handleClick);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        type="button"
        onClick={() => setOpen((value) => !value)}
        className="flex h-11 items-center gap-3 rounded-full border border-border bg-white px-4 text-sm font-medium text-ink transition hover:border-accent"
        aria-haspopup="listbox"
        aria-expanded={open}
        aria-label={copy.actions.chooseLanguage}
      >
        <Globe2 className="h-4 w-4 text-accent" />
        <span>{localeLabels[locale].flag}</span>
        <span>{localeLabels[locale].label}</span>
      </button>

      {open ? (
        <div className="absolute right-0 top-[calc(100%+10px)] w-72 rounded-[24px] border border-border/60 bg-white p-2 shadow-soft">
          {locales.map((item) => (
            <Link
              key={item}
              href={localizedPath(item, restPath === "/" ? "" : restPath)}
              onClick={() => setOpen(false)}
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
      ) : null}
    </div>
  );
}
