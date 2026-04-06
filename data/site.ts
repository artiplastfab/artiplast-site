import { Building2, Factory, Ruler, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { defaultLocale, localizedPath, type Locale } from "@/lib/i18n";

export type Product = {
  slug: string;
  name: string;
  category: string;
  kicker: string;
  description: string;
  longDescription: string;
  features: string[];
  applications: string[];
  confidencePoints: string[];
  heroImage: string;
  cardImage: string;
  alt: string;
};

export type SearchEntry = {
  title: string;
  description: string;
  href: string;
  keywords: string[];
};

type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

const uiCopy = {
  tr: {
    navigation: {
      home: "Ana Sayfa",
      products: "Ürünler",
      about: "Hakkımızda",
      faq: "SSS",
      contact: "İletişim",
    },
    actions: {
      contact: "İletişim",
      exploreProducts: "Ürünleri İncele",
      factoryPresentation: "Fabrika Sunumu",
      exploreAllProducts: "Tüm Ürünleri İncele",
      search: "Arama",
      active: "Aktif",
      chooseLanguage: "Dil seç",
    },
    hero: {
      eyebrow: "Karaman, Türkiye",
      title: "Premium iç mekan profil ve panel çözümleri",
      description:
        "ArtıPlast; modern alıcılar, güçlü ürün görselleri ve uluslararası güven duygusu için kurgulanmış üretici odaklı bir marka sunumudur.",
    },
  },
  en: {
    navigation: {
      home: "Home",
      products: "Products",
      about: "About",
      faq: "FAQ",
      contact: "Contact",
    },
    actions: {
      contact: "Contact",
      exploreProducts: "Explore Products",
      factoryPresentation: "Factory Presentation",
      exploreAllProducts: "Explore all products",
      search: "Search",
      active: "Active",
      chooseLanguage: "Choose language",
    },
    hero: {
      eyebrow: "Karaman, Turkey",
      title: "Premium interior profiles and panels, presented with factory-grade confidence.",
      description:
        "ArtıPlast is a manufacturer-focused brand presentation built for modern buyers, strong product visuals, and clean international credibility.",
    },
  },
} as const;

export function getUiCopy(locale: Locale) {
  return uiCopy[locale === defaultLocale ? "tr" : "en"];
}

const products: Product[] = [
  {
    slug: "tavan-lambiri",
    name: "Tavan Lambiri",
    category: "Interior Profiles",
    kicker: "Premium ceiling cladding profile",
    description:
      "A clean ceiling-facing profile system designed for bright interiors and refined finishing language.",
    longDescription:
      "This category is presented as a premium interior profile with clean lines, neat repetition, and a controlled surface presence suited to modern commercial or residential spaces.",
    features: [
      "Balanced visual rhythm for modern interior ceiling applications",
      "Clean surface expression suited to bright, minimal spaces",
      "Organized presentation ready for future dimension and finish variants",
    ],
    applications: ["Residential ceilings", "Retail interiors", "Hospitality fit-outs"],
    confidencePoints: [
      "Structured for export-ready product presentation",
      "Ready for custom finish and profile communication",
      "Supports visual-first catalog storytelling",
      "Prepared for future technical sheet integration",
    ],
    heroImage: "/images/products/tavan-lambiri-hero.svg",
    cardImage: "/images/products/tavan-lambiri-card.svg",
    alt: "Premium ceiling profile placeholder for ArtıPlast",
  },
  {
    slug: "kaval-borusu",
    name: "Kaval Borusu",
    category: "Functional Profiles",
    kicker: "Precision tubular profile category",
    description:
      "A product line framed with simple geometry, reliable manufacturing presence, and broad application potential.",
    longDescription:
      "Kaval Borusu is positioned with a direct industrial confidence, showing tubular precision, practical versatility, and a calm premium layout that works for technical conversations.",
    features: [
      "Simple tubular geometry with a premium industrial presentation",
      "Concise feature framing suited to quick buyer review",
      "Built for future size range, wall thickness, and finish additions",
    ],
    applications: ["Profile systems", "Interior fit-outs", "Custom manufacturing projects"],
    confidencePoints: [
      "Flexible content blocks for future technical depth",
      "Clear layout for custom production inquiries",
      "Suitable for B2B manufacturer positioning without marketplace clutter",
      "Supports image-led detail storytelling",
    ],
    heroImage: "/images/products/kaval-borusu-hero.svg",
    cardImage: "/images/products/kaval-borusu-card.svg",
    alt: "Premium tubular profile placeholder for ArtıPlast",
  },
  {
    slug: "ps-panel",
    name: "PS Panel",
    category: "Decorative Panels",
    kicker: "Refined decorative panel system",
    description:
      "A modern panel presentation focused on surface character, elegant detail, and versatile interior use.",
    longDescription:
      "PS Panel is framed as an architectural surface product with visual depth and a cleaner premium identity, helping buyers understand both application and aesthetic value quickly.",
    features: [
      "Visual-first panel presentation for premium interior use",
      "Organized for finish, texture, and panel variation expansion",
      "Strong gallery compatibility for future real photography",
    ],
    applications: ["Feature walls", "Showroom environments", "Commercial interior accents"],
    confidencePoints: [
      "Prepared for strong architectural visual storytelling",
      "Ready for finish and texture catalog growth",
      "Clear buyer path from product overview to direct contact",
      "Aligned with premium international manufacturer positioning",
    ],
    heroImage: "/images/products/ps-panel-hero.svg",
    cardImage: "/images/products/ps-panel-card.svg",
    alt: "Premium panel placeholder for ArtıPlast",
  },
];

const homepageTrustPoints: FeatureItem[] = [
  {
    title: "Manufacturing strength",
    description: "Structured around a serious factory identity rather than a trading platform feel.",
    icon: Factory,
  },
  {
    title: "Modern production image",
    description: "Prepared for real visuals, technical depth, and polished corporate storytelling.",
    icon: Building2,
  },
  {
    title: "Export-ready presence",
    description: "Designed to look credible in front of international distributors and buyers.",
    icon: Sparkles,
  },
  {
    title: "Custom production path",
    description: "Contact and product sections support future specification conversations cleanly.",
    icon: Ruler,
  },
];

export function getProducts(_locale: Locale) {
  return products;
}

export function getProductBySlug(_locale: Locale, slug: string) {
  return products.find((product) => product.slug === slug);
}

export function getRelatedProducts(locale: Locale, currentSlug: string) {
  return getProducts(locale).filter((product) => product.slug !== currentSlug);
}

export function getHomepageTrustPoints(_locale: Locale) {
  return homepageTrustPoints;
}

export function getHomepageMetrics(_locale: Locale) {
  return [
    { value: "3", label: "Core product families presented with precision" },
    { value: "5", label: "Header languages prepared for international reach" },
    { value: "24/7", label: "Always-on digital showroom structure" },
    { value: "Karaman", label: "Factory origin highlighted with confidence" },
  ];
}

export function getGalleryItems(locale: Locale) {
  return getProducts(locale).map((product) => ({
    title: product.name,
    description: product.kicker,
    image: product.cardImage,
    href: localizedPath(locale, `/products/${product.slug}`),
  }));
}

export function getFactoryGallery(_locale: Locale) {
  return [
    {
      title: "Factory Exterior",
      description: "Reserved for a premium exterior arrival visual.",
      image: "/images/factory-exterior.svg",
    },
    {
      title: "Factory Interior",
      description: "Reserved for bright, orderly interior production visuals.",
      image: "/images/factory-interior.svg",
    },
    {
      title: "Production Line",
      description: "Reserved for process-focused detail photography.",
      image: "/images/production-line.svg",
    },
  ];
}

export function getAboutSections(_locale: Locale) {
  return [
    {
      title: "Karaman-Based",
      description:
        "ArtıPlast is presented as a locally rooted Turkish manufacturer with a disciplined, internationally credible brand language.",
    },
    {
      title: "Production Philosophy",
      description:
        "The site emphasizes order, consistency, and calm visual confidence instead of large blocks of corporate text.",
    },
    {
      title: "Visual Trust",
      description:
        "Future product and factory media will drop into a system already designed to feel premium, clean, and export-ready.",
    },
    {
      title: "Quality Approach",
      description:
        "Reserved space is included for specifications, standards, certificates, and process details as the brand evolves.",
    },
  ];
}

export function getFaqItems(_locale: Locale) {
  return [
    {
      question: "Which products are currently presented on the site?",
      answer:
        "The current product structure includes Tavan Lambiri, Kaval Borusu, and PS Panel, each with its own reusable detail layout.",
    },
    {
      question: "Is the website ready for additional languages later?",
      answer:
        "Yes. The route and data structure are built around scalable locale handling so future translation work can be added cleanly.",
    },
    {
      question: "Can technical dimensions be added later?",
      answer:
        "Yes. The product detail pages already include specification placeholders for dimensions, finishes, packaging, and similar data.",
    },
    {
      question: "Can future factory photos and videos be integrated easily?",
      answer:
        "Yes. Multiple sections are intentionally reserved for product visuals, factory media, and short video content without redesigning the page structure.",
    },
    {
      question: "Is this positioned as a manufacturer site rather than a marketplace?",
      answer:
        "Yes. The layout, messaging, and navigation are designed around factory credibility, premium presentation, and direct inquiry flow.",
    },
  ];
}

export function getContactCards(_locale: Locale) {
  return [
    { type: "address" as const, title: "Address", value: "Karaman, Turkey. Detailed address placeholder for future publishing." },
    { type: "phone" as const, title: "Phone", value: "+90 (___) ___ __ __ placeholder for direct sales or factory contact." },
    { type: "email" as const, title: "Email", value: "info@artiplast.com placeholder for commercial and export inquiries." },
    { type: "whatsapp" as const, title: "WhatsApp", value: "WhatsApp routing placeholder for fast international communication." },
    { type: "social" as const, title: "Social Media", value: "LinkedIn, Instagram, and future platform links can be placed here." },
  ];
}

export function getSearchEntries(locale: Locale): SearchEntry[] {
  const copy = getUiCopy(locale);
  const coreEntries: SearchEntry[] = [
    {
      title: copy.navigation.home,
      description: "Premium manufacturer homepage with product-first presentation.",
      href: localizedPath(locale),
      keywords: ["homepage", "manufacturer", "factory", "hero"],
    },
    {
      title: copy.navigation.products,
      description: "Overview of ArtıPlast product categories.",
      href: localizedPath(locale, "/products"),
      keywords: ["products", "catalog", "categories"],
    },
    {
      title: copy.navigation.about,
      description: "Karaman-based manufacturer story and factory presentation.",
      href: localizedPath(locale, "/about"),
      keywords: ["about", "factory", "karaman", "company"],
    },
    {
      title: copy.navigation.faq,
      description: "Concise answers about products, specifications, and contact.",
      href: localizedPath(locale, "/faq"),
      keywords: ["faq", "questions", "help"],
    },
    {
      title: copy.navigation.contact,
      description: "Premium inquiry flow with future contact placeholders.",
      href: localizedPath(locale, "/contact"),
      keywords: ["contact", "email", "phone", "whatsapp"],
    },
  ];

  const productEntries = getProducts(locale).map((product) => ({
    title: product.name,
    description: product.description,
    href: localizedPath(locale, `/products/${product.slug}`),
    keywords: [product.category, product.kicker, ...product.features],
  }));

  return [...coreEntries, ...productEntries];
}

export function getSpecPlaceholders(_locale: Locale) {
  return [
    { label: "Dimensions", value: "Placeholder" },
    { label: "Finish Options", value: "Placeholder" },
    { label: "Color Range", value: "Placeholder" },
    { label: "Packaging", value: "Placeholder" },
  ];
}

export function getNavigation(locale: Locale) {
  const copy = getUiCopy(locale);

  return [
    { label: copy.navigation.home, href: localizedPath(locale) },
    { label: copy.navigation.products, href: localizedPath(locale, "/products") },
    { label: copy.navigation.about, href: localizedPath(locale, "/about") },
    { label: copy.navigation.faq, href: localizedPath(locale, "/faq") },
    { label: copy.navigation.contact, href: localizedPath(locale, "/contact") },
  ];
}

export function getFooterLinks(locale: Locale) {
  const copy = getUiCopy(locale);

  return {
    navigation: getNavigation(locale),
    utility: [
      { label: copy.actions.search, href: localizedPath(locale, "/products") },
      { label: "Legal Placeholder", href: localizedPath(locale, "/contact") },
      { label: "Policy Placeholder", href: localizedPath(locale, "/contact") },
    ],
  };
}
