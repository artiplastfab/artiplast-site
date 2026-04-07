import Image from "next/image";
import Link from "next/link";
import { Facebook, Instagram, MapPin, Phone, Youtube } from "lucide-react";
import {
  ADDRESS,
  BRAND_NAME,
  PHONE_DISPLAY,
  PHONE_LINK,
  WHATSAPP_LINK,
  getBrandInfo,
  getFooterLinks,
  getUiCopy,
} from "@/data/site";
import { getLegalLinks, getLegalSectionTitle } from "@/data/legal";
import { type Locale } from "@/lib/i18n";

export function Footer({ locale }: { locale: Locale }) {
  const links = getFooterLinks(locale);
  const copy = getUiCopy(locale);
  const brand = getBrandInfo(locale);
  const legalLinks = getLegalLinks(locale);
  const legalTitle = getLegalSectionTitle(locale);
  const footerProductsByLocale: Record<Locale, { title: string; items: string[] }> = {
    tr: { title: "Ürünlerimiz", items: ["PVC", "Tavan Lambirileri", "Duvar Lambirileri", "Kapı Lambirileri", "Kapı Pervazı", "Pencere Pervazı"] },
    en: { title: "Our Products", items: ["PVC", "Door, Wall and Ceiling Claddings", "Door and Window Trim"] },
    de: { title: "Unsere Produkte", items: ["PVC", "Tür-, Wand- und Deckenverkleidungen", "Tür- und Fensterleiste"] },
    ar: { title: "منتجاتنا", items: ["PVC", "كسوات الأبواب والجدران والأسقف", "إطار الأبواب والنوافذ"] },
    az: { title: "Məhsullarımız", items: ["PVC", "Qapı, Divar və Tavan Lambiriləri", "Qapı və Pəncərə Pərvazı"] },
    bg: { title: "Нашите продукти", items: ["PVC", "Ламперии За Врати, Стени И Тавани", "Перваз За Врати И Прозорци"] },
    fr: { title: "Nos Produits", items: ["PVC", "Lambris Porte, Mur Et Plafond", "Moulure De Porte Et Fenêtre"] },
    ru: { title: "Наша Продукция", items: ["PVC", "Потолочные Ламбрии", "Стеновые Ламбрии", "Дверные Ламбрии", "Дверной Наличник", "Оконный Наличник"] },
  };
  const socialTitleByLocale: Record<Locale, string> = {
    tr: "Sosyal Medyada Bizi Takip Edin",
    en: "Follow Us On Social Media",
    de: "Folgen Sie Uns In Den Sozialen Medien",
    ar: "تابعونا على وسائل التواصل",
    az: "Bizi Sosial Mediada İzləyin",
    bg: "Последвайте Ни В Социалните Мрежи",
    fr: "Suivez-Nous Sur Les Réseaux Sociaux",
    ru: "Следите За Нами В Соцсетях",
  };
  const socialLinks = [
    {
      label: "WhatsApp",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.48 0 .11 5.36.11 11.95c0 2.1.55 4.16 1.59 5.97L0 24l6.24-1.64a11.9 11.9 0 0 0 5.83 1.49h.01c6.58 0 11.95-5.36 11.95-11.95 0-3.19-1.24-6.19-3.51-8.42Zm-8.45 18.36h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.61-.23-.37a9.88 9.88 0 0 1-1.51-5.29c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.01 2.91a9.85 9.85 0 0 1 2.91 7 9.94 9.94 0 0 1-9.99 9.9Zm5.44-7.41c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.08-.8.37s-1.04 1.02-1.04 2.49 1.06 2.88 1.2 3.08c.15.2 2.09 3.18 5.07 4.46.71.31 1.27.49 1.7.63.71.23 1.36.2 1.88.12.57-.08 1.77-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
        </svg>
      ),
    },
    { label: "X", href: "#", icon: <span className="font-display text-[13px] font-semibold">X</span> },
    {
      label: "TikTok",
      href: "#",
      icon: (
        <svg viewBox="0 0 24 24" className="h-4 w-4 fill-current" aria-hidden="true">
          <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.3V2h-3.1v13.27a2.76 2.76 0 1 1-2.76-2.76c.29 0 .57.05.83.13V9.49a5.9 5.9 0 0 0-.83-.06A5.86 5.86 0 1 0 15.82 15V8.33a7.9 7.9 0 0 0 4.62 1.48V6.69h-.85Z" />
        </svg>
      ),
    },
    { label: "Instagram", href: "#", icon: <Instagram className="h-4 w-4" /> },
    { label: "YouTube", href: "#", icon: <Youtube className="h-4 w-4" /> },
    { label: "Facebook", href: "#", icon: <Facebook className="h-4 w-4" /> },
  ];

  return (
    <footer className="mt-24 bg-ink text-white">
      <div className="container-shell py-14 sm:py-16">
        <div className="grid gap-10 lg:grid-cols-[1.15fr_0.8fr_0.95fr_0.8fr_0.9fr_1fr]">
          <div>
            <div className="flex items-center gap-4">
              <div className="relative h-12 w-[176px] shrink-0">
                <Image src="/logo.jpg" alt={BRAND_NAME} fill className="object-contain object-left" sizes="176px" />
              </div>
              <div>
                <p className="font-display text-2xl font-semibold tracking-[-0.04em]">
                  {brand.name}
                </p>
                <p className="text-[11px] uppercase tracking-[0.2em] text-white/50">
                  {brand.subtitle}
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
              {footerProductsByLocale[locale].title}
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {footerProductsByLocale[locale].items.map((item) => (
                <span key={item} className="text-sm leading-6 text-white/78">
                  {item}
                </span>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              {socialTitleByLocale[locale]}
            </p>
            <div className="mt-5 flex flex-wrap gap-3">
              {socialLinks.map((item) => (
                <a
                  key={item.label}
                  href={item.href}
                  aria-label={item.label}
                  className="flex h-11 w-11 items-center justify-center rounded-full border border-white/10 bg-white/5 text-white/78 transition hover:border-accent hover:text-accent"
                >
                  {item.icon}
                </a>
              ))}
            </div>
          </div>

          <div>
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-white/50">
              {legalTitle}
            </p>
            <div className="mt-5 flex flex-col gap-3">
              {legalLinks.map((item) => (
                <Link key={item.href} href={item.href} className="text-sm text-white/78 transition hover:text-white">
                  {item.label}
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
                <svg viewBox="0 0 24 24" className="mt-0.5 h-4 w-4 shrink-0 fill-[#25D366]" aria-hidden="true">
                  <path d="M20.52 3.48A11.86 11.86 0 0 0 12.07 0C5.48 0 .11 5.36.11 11.95c0 2.1.55 4.16 1.59 5.97L0 24l6.24-1.64a11.9 11.9 0 0 0 5.83 1.49h.01c6.58 0 11.95-5.36 11.95-11.95 0-3.19-1.24-6.19-3.51-8.42Zm-8.45 18.36h-.01a9.9 9.9 0 0 1-5.04-1.38l-.36-.21-3.7.97.99-3.61-.23-.37a9.88 9.88 0 0 1-1.51-5.29c0-5.47 4.45-9.92 9.93-9.92 2.65 0 5.14 1.03 7.01 2.91a9.85 9.85 0 0 1 2.91 7 9.94 9.94 0 0 1-9.99 9.9Zm5.44-7.41c-.3-.15-1.77-.87-2.04-.97-.27-.1-.47-.15-.67.15-.2.3-.77.97-.95 1.17-.17.2-.35.22-.65.08-.3-.15-1.27-.47-2.42-1.5-.9-.8-1.5-1.8-1.68-2.1-.17-.3-.02-.46.13-.61.13-.13.3-.35.45-.52.15-.17.2-.3.3-.5.1-.2.05-.37-.03-.52-.08-.15-.67-1.62-.92-2.22-.24-.58-.48-.5-.67-.51h-.57c-.2 0-.52.08-.8.37s-1.04 1.02-1.04 2.49 1.06 2.88 1.2 3.08c.15.2 2.09 3.18 5.07 4.46.71.31 1.27.49 1.7.63.71.23 1.36.2 1.88.12.57-.08 1.77-.72 2.01-1.42.25-.7.25-1.3.17-1.42-.07-.12-.27-.2-.57-.35Z" />
                </svg>
                <span>{PHONE_DISPLAY}</span>
              </a>
              <div className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-accent" />
                <span className="whitespace-pre-line">{ADDRESS}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-12 border-t border-white/10 pt-6 text-sm text-white/44">
          <p>{copy.footer.copyright}</p>
        </div>
      </div>
    </footer>
  );
}
