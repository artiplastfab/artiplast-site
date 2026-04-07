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
                <div className="relative h-10 w-[140px] shrink-0 sm:h-11 sm:w-[152px]">
                  <Image src={brand.logoSrc} alt={brand.name} fill className="object-contain object-left" sizes="(max-width: 640px) 140px, 152px" priority />
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
                <div key={item.href} className="rounded-[24px] border border-border bg-white p-2 shadow-soft">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="flex rounded-[20px] px-3 py-3 text-base font-medium text-ink transition hover:text-accent"
                  >
                    {item.label}
                  </Link>
                  {item.children?.length ? (
                    <div className="mt-1 flex flex-col gap-1 border-t border-border/70 px-2 pt-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="rounded-[18px] px-3 py-2 text-sm text-ink/78 transition hover:bg-sand/70 hover:text-accent"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
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
