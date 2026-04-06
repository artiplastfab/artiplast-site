import Image from "next/image";
import Link from "next/link";
import { ArrowRight, PlayCircle } from "lucide-react";
import { getUiCopy } from "@/data/site";
import { Reveal } from "@/components/reveal";
import { localizedPath, type Locale } from "@/lib/i18n";

export function HeroSection({ locale }: { locale: Locale }) {
  const copy = getUiCopy(locale);
  const toneCards: Record<Locale, Array<{ value: string; label: string }>> = {
    tr: [
      { value: "Beyaz", label: "Sakin görsel temel" },
      { value: "Turuncu", label: "Seçici premium vurgu" },
      { value: "Siyah", label: "Ölçülü kontrast noktaları" },
    ],
    en: [
      { value: "White", label: "Calm visual foundation" },
      { value: "Orange", label: "Selective premium accents" },
      { value: "Black", label: "Measured contrast anchors" },
    ],
    de: [
      { value: "Weiß", label: "Ruhige visuelle Basis" },
      { value: "Orange", label: "Gezielte Premium-Akzente" },
      { value: "Schwarz", label: "Kontrollierte Kontrastpunkte" },
    ],
    ar: [
      { value: "أبيض", label: "قاعدة بصرية هادئة" },
      { value: "برتقالي", label: "لمسات فاخرة انتقائية" },
      { value: "أسود", label: "مرتكزات تباين محسوبة" },
    ],
    az: [
      { value: "Ağ", label: "Sakit vizual əsas" },
      { value: "Narıncı", label: "Seçimli premium vurğular" },
      { value: "Qara", label: "Ölçülü kontrast nöqtələri" },
    ],
    bg: [
      { value: "Бяло", label: "Спокойна визуална основа" },
      { value: "Оранжево", label: "Избрани премиум акценти" },
      { value: "Черно", label: "Премерени контрастни точки" },
    ],
    fr: [
      { value: "Blanc", label: "Base visuelle calme" },
      { value: "Orange", label: "Accents premium sélectifs" },
      { value: "Noir", label: "Points de contraste maîtrisés" },
    ],
  };

  return (
    <section className="container-shell pt-8 sm:pt-12">
      <div className="grid gap-8 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <Reveal>
          <div className="pt-6 sm:pt-10">
            <p className="eyebrow">{copy.hero.eyebrow}</p>
            <h1 className="mt-6 headline-xl">{copy.hero.title}</h1>
            <p className="mt-6 max-w-xl copy-muted">
              {copy.hero.description}
            </p>
            <div className="mt-10 flex flex-col gap-3 sm:flex-row">
              <Link
                href={localizedPath(locale, "/products")}
                className="inline-flex items-center justify-center gap-2 rounded-full bg-accent px-6 py-4 text-sm font-semibold text-white transition hover:bg-ink"
              >
                {copy.actions.exploreProducts} <ArrowRight className="h-4 w-4" />
              </Link>
              <Link
                href={localizedPath(locale, "/about")}
                className="inline-flex items-center justify-center gap-2 rounded-full border border-border px-6 py-4 text-sm font-semibold text-ink transition hover:border-accent hover:text-accent"
              >
                {copy.actions.factoryPresentation} <PlayCircle className="h-4 w-4" />
              </Link>
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.1}>
          <div className="relative overflow-hidden rounded-[40px] border border-border/70 bg-white shadow-lift">
            <div className="absolute inset-x-0 top-0 h-24 orange-line opacity-60" />
            <div className="grid gap-4 p-4 sm:p-6">
              <div className="relative min-h-[440px] overflow-hidden rounded-[30px] bg-panel">
                <Image
                  src="/images/hero-showcase.svg"
                  alt={`${copy.hero.title} - ${copy.hero.eyebrow}`}
                  fill
                  priority
                  className="object-cover transition duration-700 hover:scale-[1.03]"
                  sizes="(max-width: 1024px) 100vw, 55vw"
                />
              </div>
              <div className="grid gap-4 sm:grid-cols-3">
                {toneCards[locale].map((item) => (
                  <div key={item.label} className="rounded-[24px] bg-panel p-5">
                    <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-ink">
                      {item.value}
                    </p>
                    <p className="mt-2 text-sm text-muted">{item.label}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
