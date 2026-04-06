import Link from "next/link";
import { ArrowUpRight, Globe2, Instagram, Linkedin, Mail } from "lucide-react";
import { getFooterLinks } from "@/data/site";
import { localeLabels, localizedPath, locales, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const links = getFooterLinks(locale);

  return (
    <footer className="mt-24 bg-ink text-white">
      <div className="container-shell py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.8fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-white text-lg font-semibold text-ink">
                A+
              </div>
              <div>
                <p className="font-display text-2xl font-semibold tracking-[-0.04em]">
                  ArtıPlast
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  Karaman-Based Manufacturer
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/68">
              A premium manufacturer presentation for tavan lambiri, kaval borusu, and PS panel systems, structured for future export-oriented growth.
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Navigation
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {links.navigation.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-white/78 transition hover:text-white">
                  {item.label}
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Languages
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {locales.map((item) => (
                <Link
                  key={item}
                  href={localizedPath(item)}
                  className="flex items-center gap-3 text-sm text-white/78 transition hover:text-white"
                >
                  <span>{localeLabels[item].flag}</span>
                  <span>{localeLabels[item].nativeLabel}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              Contact Placeholders
            </p>
            <div className="mt-5 space-y-4 text-sm text-white/78">
              <p className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-accent" />
                info@artiplast.com
              </p>
              <p className="flex items-center gap-3">
                <Globe2 className="h-4 w-4 text-accent" />
                Karaman, Turkey
              </p>
              <div className="flex gap-3 pt-2">
                {[Linkedin, Instagram, ArrowUpRight].map((Icon, index) => (
                  <a
                    key={index}
                    href={localizedPath(locale, "/contact")}
                    className="flex h-10 w-10 items-center justify-center rounded-full border border-white/10 text-white/72 transition hover:border-accent hover:text-white"
                  >
                    <Icon className="h-4 w-4" />
                  </a>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/44 sm:flex-row sm:items-center sm:justify-between">
          <p>© 2026 ArtıPlast. Premium corporate manufacturer website structure.</p>
          <div className="flex gap-5">
            {links.utility.map((item) => (
              <Link key={item.href} href={item.href} className="transition hover:text-white/72">
                {item.label}
              </Link>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}
