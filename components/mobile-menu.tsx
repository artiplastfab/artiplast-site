"use client";

import Link from "next/link";
import { useState } from "react";
import { X } from "lucide-react";
import { getBrandInfo, getUiCopy } from "@/data/site";
import { LanguageSwitcher } from "@/components/language-switcher";
import { localizedPath, type Locale } from "@/lib/i18n";

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
  const copy = getUiCopy(locale);
  const brand = getBrandInfo();

  return (
    <>
      <div onClick={() => setOpen(true)}>{trigger}</div>
      {open ? (
        <div className="fixed inset-0 z-50 bg-ink/35 backdrop-blur-sm">
          <div className="ml-auto flex h-full w-full max-w-sm flex-col bg-white p-6">
            <div className="flex items-center justify-between">
              <div>
                <p className="font-display text-xl font-semibold tracking-[-0.04em] text-ink">
                  {brand.name}
                </p>
                <p className="text-xs uppercase tracking-[0.18em] text-muted">
                  {brand.subtitle}
                </p>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border"
              >
                <X className="h-5 w-5" />
              </button>
            </div>

            <div className="mt-8">
              <LanguageSwitcher locale={locale} />
            </div>

            <div className="mt-8 flex flex-col gap-3 overflow-y-auto">
              {navigation.map((item) => (
                <div key={item.href} className="rounded-[22px] border border-border/60 px-5 py-4">
                  <Link
                    href={item.href}
                    onClick={() => setOpen(false)}
                    className="block text-base font-medium text-ink"
                  >
                    {item.label}
                  </Link>
                  {item.children?.length ? (
                    <div className="mt-3 flex flex-col gap-2 border-t border-border/60 pt-3">
                      {item.children.map((child) => (
                        <Link
                          key={child.href}
                          href={child.href}
                          onClick={() => setOpen(false)}
                          className="text-sm text-muted transition hover:text-ink"
                        >
                          {child.label}
                        </Link>
                      ))}
                    </div>
                  ) : null}
                </div>
              ))}
            </div>

            <Link
              href={localizedPath(locale, "/contact")}
              onClick={() => setOpen(false)}
              className="mt-auto rounded-full bg-ink px-5 py-4 text-center text-sm font-semibold text-white"
            >
              {copy.actions.contact}
            </Link>
          </div>
        </div>
      ) : null}
    </>
  );
}
