import Image from "next/image";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { getBrandInfo, getNavigation, getUiCopy } from "@/data/site";
import { LanguageSwitcher } from "@/components/language-switcher";
import { MobileMenu } from "@/components/mobile-menu";
import { SearchTrigger } from "@/components/search-trigger";
import { localizedPath, type Locale } from "@/lib/i18n";

export function Header({ locale }: { locale: Locale }) {
  const navigation = getNavigation(locale);
  const copy = getUiCopy(locale);
  const brand = getBrandInfo();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-white/88 backdrop-blur-xl">
      <div className="container-shell flex h-20 items-center justify-between gap-4">
        <Link href={localizedPath(locale)} className="flex items-center gap-3">
          <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-border/60 bg-white shadow-soft">
            <Image src={brand.logoSrc} alt={brand.name} fill className="object-cover" sizes="48px" />
          </div>
          <div>
            <p className="font-display text-lg font-semibold tracking-[-0.04em] text-ink">
              {brand.name}
            </p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted">
              {brand.subtitle}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-8 lg:flex">
          {navigation.map((item) =>
            item.children?.length ? (
              <div key={item.href} className="group relative">
                <Link href={item.href} className="text-sm font-medium text-muted transition hover:text-ink">
                  {item.label}
                </Link>
                <div className="pointer-events-none absolute left-0 top-[calc(100%+18px)] min-w-64 rounded-[24px] border border-border/60 bg-white p-2 opacity-0 shadow-soft transition group-hover:pointer-events-auto group-hover:opacity-100">
                  {item.children.map((child) => (
                    <Link
                      key={child.href}
                      href={child.href}
                      className="block rounded-2xl px-4 py-3 text-sm text-ink transition hover:bg-panel"
                    >
                      {child.label}
                    </Link>
                  ))}
                </div>
              </div>
            ) : (
              <Link key={item.href} href={item.href} className="text-sm font-medium text-muted transition hover:text-ink">
                {item.label}
              </Link>
            ),
          )}
        </nav>

        <div className="hidden items-center gap-3 lg:flex">
          <SearchTrigger className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition hover:border-accent hover:text-accent">
            <Search className="h-4 w-4" />
          </SearchTrigger>
          <LanguageSwitcher locale={locale} />
          <Link
            href={localizedPath(locale, "/contact")}
            className="rounded-full bg-ink px-5 py-3 text-sm font-semibold text-white transition hover:bg-accent"
          >
            {copy.actions.contact}
          </Link>
        </div>

        <div className="flex items-center gap-2 lg:hidden">
          <SearchTrigger className="flex h-11 w-11 items-center justify-center rounded-full border border-border transition hover:border-accent hover:text-accent">
            <Search className="h-4 w-4" />
          </SearchTrigger>
          <MobileMenu
            locale={locale}
            navigation={navigation}
            trigger={
              <button
                type="button"
                className="flex h-11 w-11 items-center justify-center rounded-full border border-border"
                aria-label={copy.navigation.contact}
              >
                <Menu className="h-5 w-5" />
              </button>
            }
          />
        </div>
      </div>
    </header>
  );
}
