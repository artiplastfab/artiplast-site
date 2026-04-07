import Image from "next/image";
import Link from "next/link";
import { Menu, Search } from "lucide-react";
import { getBrandInfo, getNavigation, getUiCopy } from "@/data/site";
import { LanguageFlags } from "@/components/language-flags";
import { MobileMenu } from "@/components/mobile-menu";
import { SearchTrigger } from "@/components/search-trigger";
import { localizedPath, type Locale } from "@/lib/i18n";

export function Header({ locale }: { locale: Locale }) {
  const navigation = getNavigation(locale);
  const copy = getUiCopy(locale);
  const brand = getBrandInfo();

  return (
    <header className="sticky top-0 z-40 border-b border-border/60 bg-white/92 backdrop-blur-xl">
      <div className="container-shell flex h-[84px] items-center justify-between gap-4">
        <Link href={localizedPath(locale)} className="flex min-w-0 items-center gap-4">
          <div className="relative h-14 w-14 overflow-hidden rounded-[20px] border border-border/60 bg-white shadow-soft sm:h-16 sm:w-16">
            <Image src={brand.logoSrc} alt={brand.name} fill className="object-cover" sizes="64px" />
          </div>
          <div className="min-w-0">
            <p className="truncate font-display text-lg font-semibold tracking-[-0.04em] text-ink sm:text-xl">
              {brand.name}
            </p>
            <p className="text-[11px] uppercase tracking-[0.22em] text-muted sm:text-xs">
              {brand.subtitle}
            </p>
          </div>
        </Link>

        <nav className="hidden items-center gap-7 xl:flex">
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
          <SearchTrigger className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white text-muted transition hover:border-accent hover:text-accent">
            <Search className="h-4 w-4" />
          </SearchTrigger>
        </nav>

        <div className="hidden items-center gap-3 xl:flex">
          <LanguageFlags locale={locale} />
        </div>

        <div className="flex items-center gap-2 xl:hidden">
          <SearchTrigger className="flex h-11 w-11 items-center justify-center rounded-full border border-border bg-white transition hover:border-accent hover:text-accent">
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
      <div className="container-shell pb-3 xl:hidden">
        <LanguageFlags locale={locale} compact />
      </div>
    </header>
  );
}
