"use client";

import Link from "next/link";
import { useState } from "react";
import Image from "next/image";
import { Search, X } from "lucide-react";
import { getBrandInfo, getUiCopy } from "@/data/site";
import { useSearch } from "@/components/search-provider";
import { type Locale } from "@/lib/i18n";

type NavItem = {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
};

export function MobileMenu({
  locale,
  navigation,
  trigger,
}: {
  locale: Locale;
  navigation: NavItem[];
  trigger: React.ReactNode;
}) {
  const [open, setOpen] = useState(false);
  const brand = getBrandInfo(locale);
  const copy = getUiCopy(locale);
  const { setOpen: setSearchOpen, setQuery } = useSearch();

  return (
    <>
      <div onClick={() => setOpen(true)}>{trigger}</div>
      {open ? (
        <div className="fixed inset-0 z-[90]">
          <button
            type="button"
            aria-label="Close menu overlay"
            onClick={() => setOpen(false)}
            className="absolute inset-0 bg-black/35"
          />
          <div className="relative ml-auto flex h-full w-full max-w-[380px] flex-col bg-white px-5 pb-6 pt-5 shadow-lift">
            <div className="flex items-center justify-between gap-3">
              <div className="flex items-center gap-3">
                <div className="relative h-12 w-12 overflow-hidden rounded-[18px] border border-border/60 bg-white shadow-soft">
                  <Image src={brand.logoSrc} alt={brand.name} fill className="object-cover" sizes="48px" />
                </div>
                <div>
                  <p className="font-display text-lg font-semibold tracking-[-0.04em] text-ink">
                    {brand.name}
                  </p>
                  <p className="text-[11px] uppercase tracking-[0.18em] text-muted">
                    {brand.subtitle}
                  </p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border"
              >
                <X className="h-5 w-5" />
              </button>
            </div>
            <nav className="mt-8 flex flex-col gap-3">
              {navigation.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  onClick={() => setOpen(false)}
                  className="rounded-[24px] border border-border bg-white px-5 py-4 text-base font-medium text-ink shadow-soft transition hover:border-accent hover:text-accent"
                >
                  {item.label}
                </Link>
              ))}
            </nav>

            <form
              className="mt-6"
              onSubmit={(event) => {
                event.preventDefault();
                const form = new FormData(event.currentTarget);
                const value = String(form.get("menu-search") ?? "").trim();
                setQuery(value);
                setOpen(false);
                setSearchOpen(true);
              }}
            >
              <label className="flex h-12 items-center gap-3 rounded-full border border-border bg-white px-4 shadow-soft">
                <Search className="h-4 w-4 text-accent" />
                <input
                  name="menu-search"
                  type="search"
                  placeholder={copy.searchPlaceholder}
                  className="w-full bg-white text-sm text-ink outline-none placeholder:text-ink/55"
                />
              </label>
            </form>
          </div>
        </div>
      ) : null}
    </>
  );
}
