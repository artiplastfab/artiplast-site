import { notFound } from "next/navigation";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { CatalogVisualGrid } from "@/components/catalog-visual-grid";
import { CTASection } from "@/components/cta-section";
import { GalleryGrid } from "@/components/gallery-grid";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { SectionHeading } from "@/components/section-heading";
import { getTavanLambiriCatalogVisuals, getTavanLambiriVisualPreview } from "@/data/catalog-visuals";
import {
  getProductBySlug,
  getProducts,
  getRelatedProducts,
  getSpecPlaceholders,
  getUiCopy,
} from "@/data/site";
import {
  defaultLocale,
  isLocale,
  locales,
  localizedPath,
  type Locale,
} from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";
import type { Metadata } from "next";
import Image from "next/image";

export function generateStaticParams() {
  return locales.flatMap((locale) =>
    getProducts(locale).map((product) => ({
      locale,
      slug: product.slug,
    })),
  );
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string; slug: string }>;
}): Promise<Metadata> {
  const { locale, slug } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : defaultLocale;
  const product = getProductBySlug(safeLocale, slug);

  if (!product) {
    return buildMetadata({
      locale: safeLocale,
      title: "Product",
  description: "ArtıPLASTİK product detail page.",
      path: `/products/${slug}`,
    });
  }

  return buildMetadata({
    locale: safeLocale,
    title: product.name,
    description: product.description,
    path: `/products/${slug}`,
  });
}

export default async function ProductDetailPage({
  params,
}: {
  params: Promise<{ locale: Locale; slug: string }>;
}) {
  const { locale, slug } = await params;
  const product = getProductBySlug(locale, slug);

  if (!product) {
    notFound();
  }

  const relatedProducts = getRelatedProducts(locale, slug);
  const specPlaceholders = getSpecPlaceholders(locale);
  const copy = getUiCopy(locale);
  const tavanLambiriVisuals = slug === "tavan-lambiri" ? getTavanLambiriCatalogVisuals(locale) : [];
  const tavanLambiriHeroPreview = slug === "tavan-lambiri" ? getTavanLambiriVisualPreview(locale, 3) : [];
  const tavanTechnicalContent: Record<
    Locale,
    {
      title: string;
      description: string;
      items: Array<{ label: string; value: string }>;
    }
  > = {
    tr: {
      title: "Tavan Lambirileri Teknik Özellikleri",
      description: "Tavan Lambirileri ürün grubu için temel ölçü ve üretim esnekliği bilgileri aşağıda sunulmaktadır.",
      items: [
        { label: "Kalınlık", value: "8 mm" },
        { label: "Genişlik", value: "20 mm" },
        { label: "Standart Uzunluklar", value: "4 metre, 5 metre, 6 metre" },
        { label: "Üretim Esnekliği", value: "Proje ve talebe göre özelleştirilebilir ölçü seçenekleri sunulabilir." },
      ],
    },
    en: {
      title: "Ceiling Panel Technical Specifications",
      description: "Core dimensions and production flexibility details for the ceiling panel product group are listed below.",
      items: [
        { label: "Thickness", value: "8 mm" },
        { label: "Width", value: "20 mm" },
        { label: "Standard Lengths", value: "4 meters, 5 meters, 6 meters" },
        { label: "Production Flexibility", value: "Custom size options can be provided according to project scope and demand." },
      ],
    },
    de: {
      title: "Technische Daten Der Deckenlambris",
      description: "Die grundlegenden Maße und Hinweise zur Produktionsflexibilität der Deckenlambris finden Sie unten.",
      items: [
        { label: "Stärke", value: "8 mm" },
        { label: "Breite", value: "20 mm" },
        { label: "Standardlängen", value: "4 Meter, 5 Meter, 6 Meter" },
        { label: "Produktionsflexibilität", value: "Individuell angepasste Maßoptionen können je nach Projekt und Bedarf angeboten werden." },
      ],
    },
    ar: {
      title: "المواصفات الفنية لألواح السقف",
      description: "فيما يلي الأبعاد الأساسية ومعلومات مرونة الإنتاج الخاصة بمجموعة منتجات ألواح السقف.",
      items: [
        { label: "السماكة", value: "8 مم" },
        { label: "العرض", value: "20 مم" },
        { label: "الأطوال القياسية", value: "4 متر، 5 متر، 6 متر" },
        { label: "مرونة الإنتاج", value: "يمكن تقديم خيارات مقاسات مخصصة حسب المشروع والطلب." },
      ],
    },
    az: {
      title: "Tavan Lambiriləri Texniki Xüsusiyyətləri",
      description: "Tavan lambiriləri məhsul qrupu üçün əsas ölçü və istehsal elastikliyi məlumatları aşağıda təqdim olunur.",
      items: [
        { label: "Qalınlıq", value: "8 mm" },
        { label: "En", value: "20 mm" },
        { label: "Standart Uzunluqlar", value: "4 metr, 5 metr, 6 metr" },
        { label: "İstehsal Elastikliyi", value: "Layihə və tələbə uyğun fərdiləşdirilə bilən ölçü seçimləri təqdim oluna bilər." },
      ],
    },
    bg: {
      title: "Технически Характеристики На Таванните Ламперии",
      description: "По-долу са представени основните размери и информацията за производствената гъвкавост на таванните ламперии.",
      items: [
        { label: "Дебелина", value: "8 mm" },
        { label: "Ширина", value: "20 mm" },
        { label: "Стандартни Дължини", value: "4 метра, 5 метра, 6 метра" },
        { label: "Производствена Гъвкавост", value: "Могат да бъдат предложени персонализирани размери според проекта и търсенето." },
      ],
    },
    fr: {
      title: "Spécifications Techniques Des Lambris De Plafond",
      description: "Les dimensions principales et la flexibilité de production pour la gamme de lambris de plafond sont présentées ci-dessous.",
      items: [
        { label: "Épaisseur", value: "8 mm" },
        { label: "Largeur", value: "20 mm" },
        { label: "Longueurs Standard", value: "4 mètres, 5 mètres, 6 mètres" },
        { label: "Flexibilité De Production", value: "Des options de dimensions personnalisées peuvent être proposées selon le projet et la demande." },
      ],
    },
    ru: {
      title: "Технические Характеристики Потолочных Ламбрий",
      description: "Ниже приведены основные размеры и информация о производственной гибкости для группы потолочных ламбрий.",
      items: [
        { label: "Толщина", value: "8 мм" },
        { label: "Ширина", value: "20 мм" },
        { label: "Стандартные Длины", value: "4 метра, 5 метров, 6 метров" },
        { label: "Гибкость Производства", value: "По проекту и запросу могут быть предложены индивидуальные варианты размеров." },
      ],
    },
  };
  const specificationContent =
    slug === "tavan-lambiri"
      ? tavanTechnicalContent[locale]
      : {
          title: copy.labels.specifications,
          description: product.longDescription,
          items: specPlaceholders,
        };
  const detailHeading: Record<Locale, string> = {
    tr: "Rafine iç mekanlar ve güven veren üretici sunumu için tasarlandı.",
    en: "Designed for refined interiors and dependable manufacturing presentation.",
    de: "Entwickelt für hochwertige Innenräume und einen verlässlichen Herstellerauftritt.",
    ar: "مصمم للمساحات الداخلية الراقية ولعرض مصنع موثوق.",
    az: "Zərif interyerlər və etibarlı istehsalçı təqdimatı üçün hazırlanıb.",
    bg: "Създаден за изискани интериори и надеждно представяне на производителя.",
    fr: "Conçu pour des intérieurs raffinés et une présentation fabricant fiable.",
    ru: "Разработано для изысканных интерьеров и надежной презентации производителя.",
  };
  const galleryCopy: Record<Locale, { eyebrow: string; title: string; description: string }> = {
    tr: {
      eyebrow: "Katalog Görselleri",
      title: "Tavan Lambirileri desen ve yüzey görselleri",
      description: "2026 ürün kataloğundaki Tavan Lambirileri bölümünden alınan görseller, ürün grubunun yüzey karakterini net şekilde göstermesi için burada sunuluyor.",
    },
    en: {
      eyebrow: "Catalog Visuals",
      title: "Ceiling panel pattern and surface visuals",
      description: "Selected visuals from the 2026 ceiling panel catalog are presented here to show the surface character of the product group with clarity.",
    },
    de: {
      eyebrow: "Katalogbilder",
      title: "Dekor- und Oberflächenbilder der Deckenlambris",
      description: "Ausgewählte Bilder aus dem Deckenlambris-Katalog 2026 zeigen hier die Oberflächencharakteristik der Produktgruppe in klarer Form.",
    },
    ar: {
      eyebrow: "صور الكتالوج",
      title: "صور النقش والسطح لألواح السقف",
      description: "يتم عرض صور مختارة من كتالوج ألواح السقف لعام 2026 هنا لإبراز طابع السطح الخاص بمجموعة المنتجات بوضوح.",
    },
    az: {
      eyebrow: "Kataloq Vizuaları",
      title: "Tavan lambirisi naxış və səth vizualları",
      description: "2026 tavan lambirisi kataloqundan seçilmiş vizuallar məhsul qrupunun səth xarakterini aydın göstərmək üçün burada təqdim olunur.",
    },
    bg: {
      eyebrow: "Каталожни Визии",
      title: "Десени и повърхности на таванните ламперии",
      description: "Подбрани визии от каталога за таванни ламперии 2026 показват ясно повърхностния характер на продуктовата група.",
    },
    fr: {
      eyebrow: "Visuels Du Catalogue",
      title: "Visuels de texture et de surface des lambris de plafond",
      description: "Des visuels sélectionnés du catalogue 2026 des lambris de plafond sont présentés ici pour montrer clairement le caractère de surface de la gamme.",
    },
    ru: {
      eyebrow: "Каталожные Визуалы",
      title: "Фактуры и поверхности потолочных ламбрий",
      description: "Здесь представлены отобранные визуалы из каталога потолочных ламбрий 2026 года, чтобы ясно показать характер поверхности этой группы продукции.",
    },
  };

  return (
    <div className="pb-16 sm:pb-20">
      <PageHero
        eyebrow={product.category}
        title={product.name}
        description={product.description}
      />

      <section className="container-shell mt-10 grid gap-8 lg:grid-cols-[1.08fr_0.92fr]">
        <Reveal>
          <div className="overflow-hidden rounded-[36px] border border-border/60 bg-panel shadow-soft">
            <div className="relative min-h-[420px]">
              <Image
                src={product.heroImage}
                alt={product.alt}
                fill
                className={slug === "tavan-lambiri" ? "object-contain p-10" : "object-cover"}
                sizes="(max-width: 1024px) 100vw, 60vw"
                priority
              />
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="panel p-8 sm:p-10">
            <p className="eyebrow">{product.kicker}</p>
            <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
              {detailHeading[locale]}
            </h2>
            <p className="mt-4 copy-muted">{product.longDescription}</p>
            <div className="mt-8 space-y-3">
              {product.features.map((feature) => (
                <div key={feature} className="flex items-start gap-3 rounded-[20px] bg-panel/70 p-4">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 text-accent" />
                  <p className="text-sm text-ink/80">{feature}</p>
                </div>
              ))}
            </div>
            {slug === "tavan-lambiri" ? (
              <div className="mt-8 grid grid-cols-3 gap-3">
                {tavanLambiriHeroPreview.map((item) => (
                  <div
                    key={item.src}
                    className="relative aspect-[4/3] overflow-hidden rounded-[18px] border border-border/60 bg-white"
                  >
                    <Image
                      src={item.src}
                      alt={item.alt}
                      fill
                      className="object-contain p-3"
                      sizes="(max-width: 1024px) 33vw, 16vw"
                    />
                  </div>
                ))}
              </div>
            ) : null}
          </div>
        </Reveal>
      </section>

      {slug === "tavan-lambiri" ? (
        <section className="container-shell mt-24">
          <Reveal>
            <SectionHeading
              eyebrow={galleryCopy[locale].eyebrow}
              title={galleryCopy[locale].title}
              description={galleryCopy[locale].description}
            />
          </Reveal>
          <div className="mt-8">
            <CatalogVisualGrid items={tavanLambiriVisuals} />
          </div>
        </section>
      ) : null}

      <section className="container-shell mt-24 grid gap-8 lg:grid-cols-2">
        <Reveal>
          <div className="panel p-8 sm:p-10">
            <SectionHeading
              eyebrow={copy.labels.applications}
              title={copy.labels.applications}
              description={product.description}
            />
            <div className="mt-8 grid gap-3">
              {product.applications.map((application) => (
                <div
                  key={application}
                  className="rounded-[20px] border border-border/70 px-5 py-4 text-sm text-ink/80"
                >
                  {application}
                </div>
              ))}
            </div>
          </div>
        </Reveal>
        <Reveal delay={0.08}>
          <div className="panel p-8 sm:p-10">
            <SectionHeading
              eyebrow={copy.labels.specifications}
              title={specificationContent.title}
              description={specificationContent.description}
            />
            <div className="mt-8 grid gap-3">
              {specificationContent.items.map((item) => (
                <div
                  key={item.label}
                  className="flex items-center justify-between rounded-[20px] bg-panel/70 px-5 py-4 text-sm"
                >
                  <span className="text-muted">{item.label}</span>
                  <span className="font-medium text-ink">{item.value}</span>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-shell mt-24">
        <Reveal>
          <div className="overflow-hidden rounded-[36px] border border-border/60 bg-ink text-white shadow-lift">
            <div className="grid gap-8 p-8 sm:p-10 lg:grid-cols-[0.85fr_1.15fr]">
              <div>
                <p className="eyebrow border-white/10 bg-white/5 text-white">{copy.labels.factoryConfidence}</p>
                <h2 className="mt-6 font-display text-3xl font-semibold tracking-[-0.04em] sm:text-4xl">
                  {copy.labels.factoryConfidence}
                </h2>
              </div>
              <div className="grid gap-4 sm:grid-cols-2">
                {product.confidencePoints.map((point) => (
                  <div key={point} className="rounded-[24px] border border-white/10 bg-white/5 p-5">
                    <p className="text-sm leading-7 text-white/78">{point}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Reveal>
      </section>

      <section className="container-shell mt-24">
        <Reveal>
          <SectionHeading
            eyebrow={copy.labels.relatedProducts}
            title={copy.labels.relatedProducts}
            description={product.longDescription}
          />
        </Reveal>
        <div className="mt-8">
          <GalleryGrid
            items={relatedProducts.map((item) => ({
              title: item.name,
              description: item.description,
              image: item.cardImage,
              href: localizedPath(locale, `/products/${item.slug}`),
            }))}
          />
        </div>
        <div className="mt-8">
          <a
            href={localizedPath(locale, "/products")}
            className="inline-flex items-center gap-2 text-sm font-semibold text-ink transition hover:text-accent"
          >
            {copy.actions.returnToProducts} <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </section>

      <CTASection
        locale={locale}
        title={copy.pages.contact.title}
        description={copy.pages.contact.description}
      />
    </div>
  );
}
