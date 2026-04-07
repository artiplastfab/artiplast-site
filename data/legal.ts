import { localizedPath, type Locale } from "@/lib/i18n";

export type LegalKey = "privacy" | "terms" | "delivery";

export type LegalBlock =
  | { type: "paragraph"; content: string }
  | { type: "section"; title: string; paragraphs?: string[]; items?: string[] };

export type LegalPageContent = {
  title: string;
  description: string;
  blocks: LegalBlock[];
};

type LegalDictionaryEntry = {
  sectionTitle: string;
  labels: Record<LegalKey, string>;
  pages: Record<LegalKey, LegalPageContent>;
};

const turkishPages: Record<LegalKey, LegalPageContent> = {
  privacy: {
    title: "Gizlilik Politikası",
    description: "ArtıPLAST olarak ziyaretçilerimizin gizliliğini korumayı taahhüt ederiz. Bu politika, web sitemizi ziyaret ettiğinizde hangi bilgilerin toplandığını, nasıl kullanıldığını ve nasıl korunduğunu açıklar.",
    blocks: [
      {
        type: "paragraph",
        content:
          "ArtıPLAST olarak ziyaretçilerimizin gizliliğini korumayı taahhüt ederiz. Bu politika, web sitemizi ziyaret ettiğinizde hangi bilgilerin toplandığını, nasıl kullanıldığını ve nasıl korunduğunu açıklar.",
      },
      {
        type: "section",
        title: "Toplanan Veriler",
        paragraphs: [
          "Web sitemizi ziyaret ettiğinizde IP adresi, tarayıcı türü, ziyaret süresi ve sayfa görüntüleme gibi teknik veriler otomatik olarak toplanabilir. Bu veriler sistem güvenliği ve analiz amaçlı kullanılır.",
        ],
      },
      {
        type: "section",
        title: "Kişisel Veriler",
        paragraphs: [
          "İletişim formları veya doğrudan iletişim yoluyla paylaştığınız ad, soyad, telefon ve e-posta bilgileri yalnızca sizinle iletişim kurmak amacıyla kullanılmaktadır.",
        ],
      },
      {
        type: "section",
        title: "Verilerin Kullanım Amaçları",
        items: [
          "Müşteri taleplerine yanıt vermek",
          "Hizmet kalitesini artırmak",
          "Web sitesi performansını analiz etmek",
        ],
      },
      {
        type: "section",
        title: "Veri Güvenliği",
        paragraphs: [
          "Kişisel verileriniz güvenli sistemlerde saklanır ve üçüncü kişilerle paylaşılmaz. Ancak yasal zorunluluklar kapsamında resmi kurumlarla paylaşılabilir.",
        ],
      },
      {
        type: "section",
        title: "Haklarınız",
        paragraphs: [
          "Kişisel verilerinizle ilgili bilgi talep etme, düzeltme veya silinmesini isteme hakkına sahipsiniz.",
        ],
      },
      {
        type: "section",
        title: "İletişim",
        paragraphs: [
          "Gizlilik ile ilgili tüm sorularınız için bizimle iletişime geçebilirsiniz.",
        ],
      },
    ],
  },
  terms: {
    title: "Hizmet Koşulları",
    description: "Bu web sitesini kullanan tüm ziyaretçiler aşağıdaki şartları kabul etmiş sayılır.",
    blocks: [
      {
        type: "paragraph",
        content: "Bu web sitesini kullanan tüm ziyaretçiler aşağıdaki şartları kabul etmiş sayılır.",
      },
      {
        type: "section",
        title: "Kullanım Şartları",
        paragraphs: [
          "Site içeriği yalnızca bilgilendirme amaçlıdır. İçerikler izinsiz kopyalanamaz, çoğaltılamaz veya ticari amaçla kullanılamaz.",
        ],
      },
      {
        type: "section",
        title: "Sorumluluk Reddi",
        paragraphs: [
          "ArtıPLAST, site üzerinde yer alan bilgilerin doğruluğu konusunda azami özeni gösterir ancak oluşabilecek hatalardan dolayı sorumluluk kabul etmez.",
        ],
      },
      {
        type: "section",
        title: "Ürün Bilgileri",
        paragraphs: [
          "Ürün görselleri ve açıklamaları temsilidir. Teknik özelliklerde değişiklik yapılabilir.",
        ],
      },
      {
        type: "section",
        title: "Üçüncü Taraf Bağlantılar",
        paragraphs: [
          "Site üzerinde yer alan dış bağlantılar üçüncü taraf sitelere yönlendirebilir. Bu sitelerin içeriklerinden ArtıPLAST sorumlu değildir.",
        ],
      },
      {
        type: "section",
        title: "Değişiklik Hakkı",
        paragraphs: [
          "ArtıPLAST, bu hizmet koşullarını önceden bildirmeksizin değiştirme hakkını saklı tutar.",
        ],
      },
      {
        type: "section",
        title: "Yasal Haklar",
        paragraphs: [
          "Site içeriği ve tasarımının tüm hakları ArtıPLAST’a aittir.",
        ],
      },
    ],
  },
  delivery: {
    title: "Teslimat ve Bilgilendirme",
    description: "ArtıPLAST ürünleri sipariş ve üretim süreçlerine bağlı olarak müşterilere ulaştırılmaktadır.",
    blocks: [
      {
        type: "paragraph",
        content: "ArtıPLAST ürünleri sipariş ve üretim süreçlerine bağlı olarak müşterilere ulaştırılmaktadır.",
      },
      {
        type: "section",
        title: "Sipariş Süreci",
        paragraphs: [
          "Ürünler sipariş üzerine üretilebilir ve talepler doğrultusunda planlanır.",
        ],
      },
      {
        type: "section",
        title: "Teslimat Süreci",
        paragraphs: [
          "Teslimatlar anlaşmalı lojistik firmaları aracılığıyla yapılır.",
        ],
      },
      {
        type: "section",
        title: "Teslimat Süresi",
        paragraphs: [
          "Teslim süresi sipariş miktarı, üretim planı ve stok durumuna bağlı olarak değişiklik gösterebilir.",
        ],
      },
      {
        type: "section",
        title: "Sorumluluk",
        paragraphs: [
          "Kargo ve lojistik süreçlerinde yaşanabilecek gecikmelerden ArtıPLAST sorumlu değildir.",
        ],
      },
      {
        type: "section",
        title: "Bilgilendirme",
        paragraphs: [
          "Müşterilere sipariş süreci boyunca gerekli bilgilendirme yapılır ve destek sağlanır.",
        ],
      },
      {
        type: "section",
        title: "İletişim",
        paragraphs: [
          "Teslimat ve sipariş süreçleri hakkında bilgi almak için bizimle iletişime geçebilirsiniz.",
        ],
      },
    ],
  },
};

function buildFallbackPages(localeName: string): Record<LegalKey, LegalPageContent> {
  return {
    privacy: {
      title: "Privacy Policy",
      description: `${localeName} privacy information for ArtıPLAST website visitors.`,
      blocks: [
        {
          type: "paragraph",
          content:
            "This page presents the privacy principles used for the ArtıPLAST website and contact processes.",
        },
      ],
    },
    terms: {
      title: "Terms of Service",
      description: `${localeName} terms for using the ArtıPLAST website.`,
      blocks: [
        {
          type: "paragraph",
          content:
            "This page outlines the general terms for using the ArtıPLAST website and reviewing its content.",
        },
      ],
    },
    delivery: {
      title: "Delivery & Information",
      description: `${localeName} delivery and order information for ArtıPLAST.`,
      blocks: [
        {
          type: "paragraph",
          content:
            "This page summarizes delivery planning, order communication, and production information for ArtıPLAST.",
        },
      ],
    },
  };
}

const legalDictionary: Record<Locale, LegalDictionaryEntry> = {
  tr: {
    sectionTitle: "Yasal",
    labels: {
      privacy: "Gizlilik Politikası",
      terms: "Hizmet Koşulları",
      delivery: "Teslimat ve Bilgilendirme",
    },
    pages: turkishPages,
  },
  en: {
    sectionTitle: "Legal",
    labels: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      delivery: "Delivery & Information",
    },
    pages: buildFallbackPages("English"),
  },
  de: {
    sectionTitle: "Rechtliches",
    labels: {
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
      delivery: "Lieferung & Information",
    },
    pages: buildFallbackPages("German"),
  },
  ar: {
    sectionTitle: "قانوني",
    labels: {
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      delivery: "التسليم والمعلومات",
    },
    pages: buildFallbackPages("Arabic"),
  },
  az: {
    sectionTitle: "Hüquqi",
    labels: {
      privacy: "Məxfilik Siyasəti",
      terms: "Xidmət Şərtləri",
      delivery: "Çatdırılma və Məlumat",
    },
    pages: buildFallbackPages("Azerbaijani"),
  },
  bg: {
    sectionTitle: "Правни",
    labels: {
      privacy: "Политика за поверителност",
      terms: "Условия за ползване",
      delivery: "Доставка и информация",
    },
    pages: buildFallbackPages("Bulgarian"),
  },
  fr: {
    sectionTitle: "Mentions légales",
    labels: {
      privacy: "Politique de confidentialité",
      terms: "Conditions de service",
      delivery: "Livraison et information",
    },
    pages: buildFallbackPages("French"),
  },
};

const legalPathMap: Record<LegalKey, string> = {
  privacy: "/gizlilik-politikasi",
  terms: "/hizmet-kosullari",
  delivery: "/teslimat-bilgilendirme",
};

export function getLegalSectionTitle(locale: Locale) {
  return legalDictionary[locale].sectionTitle;
}

export function getLegalLinks(locale: Locale) {
  return (Object.entries(legalPathMap) as Array<[LegalKey, string]>).map(([key, path]) => ({
    key,
    label: legalDictionary[locale].labels[key],
    href: localizedPath(locale, path),
  }));
}

export function getLegalPage(locale: Locale, key: LegalKey) {
  return legalDictionary[locale].pages[key];
}
