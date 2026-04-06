import Image from "next/image";
import Link from "next/link";
import { MapPin, MessageCircle, Phone } from "lucide-react";
import {
  ADDRESS,
  BRAND_NAME,
  BRAND_SUBTITLE,
  PHONE_DISPLAY,
  PHONE_LINK,
  WHATSAPP_LINK,
  getFooterLinks,
  getUiCopy,
} from "@/data/site";
import { localeLabels, localizedPath, locales, type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const links = getFooterLinks(locale);
  const copy = getUiCopy(locale);

  return (
    <footer className="mt-24 bg-ink text-white">
      <div className="container-shell py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.1fr_0.7fr_0.7fr_0.9fr]">
          <div>
            <div className="flex items-center gap-3">
              <div className="relative h-12 w-12 overflow-hidden rounded-2xl border border-white/10 bg-white">
                <Image src="/logo/logo.jpg" alt={BRAND_NAME} fill className="object-cover" sizes="48px" />
              </div>
              <div>
                <p className="font-display text-2xl font-semibold tracking-[-0.04em]">
                  {BRAND_NAME}
                </p>
                <p className="text-xs uppercase tracking-[0.2em] text-white/50">
                  {BRAND_SUBTITLE}
                </p>
              </div>
            </div>
            <p className="mt-6 max-w-md text-sm leading-7 text-white/68">
              {copy.pages.about.description}
            </p>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              {copy.footer.navigation}
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
              {copy.footer.languages}
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {locales.map((item) => (
                <Link key={item} href={localizedPath(item)} className="flex items-center gap-3 text-sm text-white/78 transition hover:text-white">
                  <span>{localeLabels[item].flag}</span>
                  <span>{localeLabels[item].nativeLabel}</span>
                </Link>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              {copy.footer.contact}
            </p>
            <div className="mt-5 space-y-4 text-sm text-white/78">
              <a href={PHONE_LINK} className="flex items-start gap-3 transition hover:text-white">
                <Phone className="mt-0.5 h-4 w-4 text-accent" />
                <span>{PHONE_DISPLAY}</span>
              </a>
              <a href={WHATSAPP_LINK} className="flex items-start gap-3 transition hover:text-white">
                <MessageCircle className="mt-0.5 h-4 w-4 text-accent" />
                <span>{PHONE_DISPLAY}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                <span>{ADDRESS}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 flex flex-col gap-3 border-t border-white/10 pt-6 text-sm text-white/44 sm:flex-row sm:items-center sm:justify-between">
          <p>{copy.footer.copyright}</p>
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
