import { Building2, Factory, Ruler, Sparkles } from "lucide-react";
import type { LucideIcon } from "lucide-react";
import { localizedPath, type Locale } from "@/lib/i18n";

export const BRAND_NAME = "ArtıPLAST";
export const BRAND_SUBTITLE = "Üretici";
export const PHONE_DISPLAY = "0546 961 01 07";
export const PHONE_LINK = "tel:+905469610107";
export const WHATSAPP_NUMBER = "905469610107";
export const WHATSAPP_LINK = `https://wa.me/${WHATSAPP_NUMBER}`;
export const ADDRESS =
  "Organize Sanayi Bölgesi 6. Sokak No:7 70100 Karaman Türkiye";

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

export type ContactCard = {
  type: "address" | "phone" | "whatsapp";
  title: string;
  value: string;
  href?: string;
};

type FeatureItem = {
  title: string;
  description: string;
  icon: LucideIcon;
};

type NavItem = {
  label: string;
  href: string;
  children?: Array<{ label: string; href: string }>;
};

type LocaleCopy = {
  languageLabel: string;
  navigation: Record<"home" | "products" | "about" | "faq" | "contact", string>;
  actions: Record<
    | "contact"
    | "exploreProducts"
    | "factoryPresentation"
    | "exploreAllProducts"
    | "search"
    | "active"
    | "chooseLanguage"
    | "seeBrandStory"
    | "viewDetails"
    | "viewProductRange"
    | "contactFactory"
    | "returnToProducts"
    | "sendInquiry",
    string
  >;
  hero: { eyebrow: string; title: string; description: string };
  pages: {
    products: { eyebrow: string; title: string; description: string };
    about: { eyebrow: string; title: string; description: string };
    faq: { eyebrow: string; title: string; description: string };
    contact: { eyebrow: string; title: string; description: string };
  };
  footer: {
    navigation: string;
    languages: string;
    contact: string;
    copyright: string;
  };
  labels: {
    phone: string;
    whatsapp: string;
    address: string;
    dimensions: string;
    finishOptions: string;
    colorRange: string;
    packaging: string;
    placeholder: string;
    applications: string;
    specifications: string;
    factoryConfidence: string;
    relatedProducts: string;
    company: string;
    qualityApproach: string;
    map: string;
    form: string;
  };
  form: {
    title: string;
    description: string;
    fullName: string;
    company: string;
    email: string;
    phone: string;
    message: string;
    success: string;
  };
  home: {
    productsEyebrow: string;
    productsTitle: string;
    productsDescription: string;
    whyEyebrow: string;
    whyTitle: string;
    whyDescription: string;
    featuredEyebrow: string;
    featuredTitle: string;
    featuredDescription: string;
    galleryEyebrow: string;
    galleryTitle: string;
    galleryDescription: string;
    factoryPreviewEyebrow: string;
    factoryPreviewTitle: string;
    factoryPreviewDescription: string;
    ctaTitle: string;
    ctaDescription: string;
  };
};

type ProductSeed = {
  slug: string;
  heroImage: string;
  cardImage: string;
  translations: Record<Locale, Omit<Product, "slug" | "heroImage" | "cardImage">>;
};

const commonContact = {
  phone: PHONE_DISPLAY,
  whatsapp: PHONE_DISPLAY,
  address: ADDRESS,
};

const englishBase: LocaleCopy = {
  languageLabel: "English",
  navigation: { home: "Home", products: "Products", about: "About", faq: "FAQ", contact: "Contact" },
  actions: {
    contact: "Contact",
    exploreProducts: "Explore Products",
    factoryPresentation: "Factory Presentation",
    exploreAllProducts: "Explore All Products",
    search: "Search",
    active: "Active",
    chooseLanguage: "Choose language",
    seeBrandStory: "See the brand story",
    viewDetails: "View Details",
    viewProductRange: "View Product Range",
    contactFactory: "Contact the Factory",
    returnToProducts: "Return to all products",
    sendInquiry: "Send Inquiry",
  },
  hero: {
    eyebrow: "Karaman, Türkiye",
    title: "Premium interior profile and panel solutions",
    description: "ArtıPLAST presents a premium manufacturer identity built around product clarity and international trust.",
  },
  pages: {
    products: { eyebrow: "Products", title: "A clean and premium product catalog.", description: "The main product families are presented through strong visuals and concise text." },
    about: { eyebrow: "About", title: "A concise and confident manufacturer story.", description: "ArtıPLAST is positioned as a Karaman-based producer with international credibility." },
    faq: { eyebrow: "FAQ", title: "Fast and clear answers.", description: "Essential information about products, contact, and manufacturing approach." },
    contact: { eyebrow: "Contact", title: "Reach the factory directly.", description: "Contact us quickly through phone, WhatsApp, and address details." },
  },
  footer: {
    navigation: "Navigation",
    languages: "Languages",
    contact: "Contact",
    copyright: "© 2026 ArtıPLAST. All rights reserved.",
  },
  labels: {
    phone: "Phone",
    whatsapp: "WhatsApp",
    address: "Address",
    dimensions: "Dimensions",
    finishOptions: "Finish Options",
    colorRange: "Color Range",
    packaging: "Packaging",
    placeholder: "To be added",
    applications: "Applications",
    specifications: "Specifications",
    factoryConfidence: "Factory Confidence",
    relatedProducts: "Related Products",
    company: "Company",
    qualityApproach: "Quality Approach",
    map: "Location",
    form: "Inquiry Form",
  },
  form: {
    title: "Start a direct conversation.",
    description: "Leave a short message for product, project, or custom production requests.",
    fullName: "Full name",
    company: "Company",
    email: "Email",
    phone: "Phone / WhatsApp",
    message: "Write the product or request you are interested in.",
    success: "Your message has been received. The form can later be connected to email or CRM.",
  },
  home: {
    productsEyebrow: "Products",
    productsTitle: "Three core product families, presented with clarity.",
    productsDescription: "The visual-first structure helps buyers understand the products quickly.",
    whyEyebrow: "Why ArtıPLAST",
    whyTitle: "A corporate presence defined by trust, order, and manufacturing strength.",
    whyDescription: "Minimal text, clear signals, and refined spacing build a premium impression.",
    featuredEyebrow: "Featured Visual",
    featuredTitle: "Spacious editorial space for premium media.",
    featuredDescription: "A wide visual area gives the homepage a calm and international character.",
    galleryEyebrow: "Gallery",
    galleryTitle: "Product-led visuals with very little copy.",
    galleryDescription: "A premium gallery system prepared for real factory and product photography.",
    factoryPreviewEyebrow: "Factory Preview",
    factoryPreviewTitle: "Reserved space for exterior, interior, and production visuals.",
    factoryPreviewDescription: "The structure is ready for future factory video and photography content.",
    ctaTitle: "Create a first impression that looks as precise as the production behind it.",
    ctaDescription: "Explore product categories or contact the factory for dimensions, projects, and custom requests.",
  },
};

const localeCopy: Record<Locale, LocaleCopy> = {
  tr: {
    languageLabel: "Türkçe",
    navigation: { home: "Ana Sayfa", products: "Ürünler", about: "Hakkımızda", faq: "Bilgi", contact: "Bize Ulaşın" },
    actions: {
      contact: "Bize Ulaşın",
      exploreProducts: "Ürünleri İncele",
      factoryPresentation: "Fabrika Sunumu",
      exploreAllProducts: "Tüm Ürünleri İncele",
      search: "Arama",
      active: "Aktif",
      chooseLanguage: "Dil seç",
      seeBrandStory: "Marka hikayesini gör",
      viewDetails: "Detayı Gör",
      viewProductRange: "Ürün Gamını Gör",
      contactFactory: "Fabrikaya Ulaşın",
      returnToProducts: "Tüm ürünlere dön",
      sendInquiry: "Mesaj Gönder",
    },
    hero: {
      eyebrow: "Karaman, Türkiye",
      title: "Premium iç mekan profil ve panel çözümleri",
      description: "ArtıPLAST, ürün netliği ve uluslararası güven hissi üzerine kurulu premium bir üretici sunumudur.",
    },
    pages: {
      products: { eyebrow: "Ürünler", title: "Temiz, net ve premium bir ürün kataloğu.", description: "Ana ürün aileleri güçlü görseller ve kısa içeriklerle sunulur." },
      about: { eyebrow: "Hakkımızda", title: "Kısa ama güven veren bir üretici hikayesi.", description: "ArtıPLAST, Karaman merkezli ve uluslararası algısı güçlü bir üretici olarak konumlanır." },
      faq: { eyebrow: "SSS", title: "Hızlı ve net cevaplar.", description: "Ürünler, iletişim ve üretim yaklaşımıyla ilgili temel bilgiler." },
      contact: { eyebrow: "İletişim", title: "Fabrikaya doğrudan ulaşın.", description: "Telefon, WhatsApp ve adres bilgilerimizle hızlı temas kurun." },
    },
    footer: {
      navigation: "Navigasyon",
      languages: "Diller",
      contact: "İletişim",
      copyright: "© 2026 ArtıPLAST. Tüm hakları saklıdır.",
    },
    labels: {
      phone: "Telefon",
      whatsapp: "WhatsApp",
      address: "Adres",
      dimensions: "Ölçüler",
      finishOptions: "Yüzey Seçenekleri",
      colorRange: "Renk Aralığı",
      packaging: "Paketleme",
      placeholder: "Bilgi eklenecek",
      applications: "Uygulama Alanları",
      specifications: "Teknik Alan",
      factoryConfidence: "Üretim Güveni",
      relatedProducts: "İlgili Ürünler",
      company: "Şirket",
      qualityApproach: "Kalite Yaklaşımı",
      map: "Konum",
      form: "İletişim Formu",
    },
    form: {
      title: "Doğrudan iletişime geçin.",
      description: "Ürün, proje veya özel üretim talepleriniz için kısa bir mesaj bırakın.",
      fullName: "Ad Soyad",
      company: "Firma",
      email: "E-posta",
      phone: "Telefon / WhatsApp",
      message: "İlgilendiğiniz ürün veya talebi yazın.",
      success: "Mesajınız alındı. Form istenirse daha sonra e-posta veya CRM sistemine bağlanabilir.",
    },
    home: {
      productsEyebrow: "Ürünler",
      productsTitle: "Üç ana ürün ailesi, net ve güçlü bir sunumla.",
      productsDescription: "Görsel odaklı yapı, alıcının ürünleri hızlıca anlaması için kurgulandı.",
      whyEyebrow: "Neden ArtıPLAST",
      whyTitle: "Güven, düzen ve üretim gücünü öne çıkaran kurumsal duruş.",
      whyDescription: "Az metin, güçlü sinyaller ve temiz bir görsel sistem ile premium algı kurulur.",
      featuredEyebrow: "Öne Çıkan Görsel",
      featuredTitle: "Premium medya için ferah ve editoryal alan.",
      featuredDescription: "Geniş görsel alan sayfaya uluslararası ve sakin bir karakter kazandırır.",
      galleryEyebrow: "Galeri",
      galleryTitle: "Çok az metinle ürün odaklı güçlü görseller.",
      galleryDescription: "Gerçek fabrika ve ürün fotoğrafları için hazırlanan premium galeri sistemi.",
      factoryPreviewEyebrow: "Fabrika Ön İzleme",
      factoryPreviewTitle: "Dış cephe, iç mekan ve üretim görüntüleri için ayrılmış alan.",
      factoryPreviewDescription: "Yapı, gelecekteki fabrika video ve fotoğraf içerikleri için hazırdır.",
      ctaTitle: "Üretim kalitesi kadar güçlü görünen bir ilk izlenim oluşturun.",
      ctaDescription: "Ürün kategorilerini inceleyin veya ölçü ve proje talepleri için doğrudan iletişime geçin.",
    },
  },
  en: {
    languageLabel: "English",
    navigation: { home: "Home", products: "Products", about: "About", faq: "Information", contact: "Contact Us" },
    actions: {
      contact: "Contact Us",
      exploreProducts: "Explore Products",
      factoryPresentation: "Factory Presentation",
      exploreAllProducts: "Explore All Products",
      search: "Search",
      active: "Active",
      chooseLanguage: "Choose language",
      seeBrandStory: "See the brand story",
      viewDetails: "View Details",
      viewProductRange: "View Product Range",
      contactFactory: "Contact the Factory",
      returnToProducts: "Return to all products",
      sendInquiry: "Send Inquiry",
    },
    hero: {
      eyebrow: "Karaman, Türkiye",
      title: "Premium interior profile and panel solutions",
      description: "ArtıPLAST presents a premium manufacturer identity built around product clarity and international trust.",
    },
    pages: {
      products: { eyebrow: "Products", title: "A clean and premium product catalog.", description: "The main product families are presented through strong visuals and concise text." },
      about: { eyebrow: "About", title: "A concise and confident manufacturer story.", description: "ArtıPLAST is positioned as a Karaman-based producer with international credibility." },
      faq: { eyebrow: "FAQ", title: "Fast and clear answers.", description: "Essential information about products, contact, and manufacturing approach." },
      contact: { eyebrow: "Contact", title: "Reach the factory directly.", description: "Contact us quickly through phone, WhatsApp, and address details." },
    },
    footer: {
      navigation: "Navigation",
      languages: "Languages",
      contact: "Contact",
      copyright: "© 2026 ArtıPLAST. All rights reserved.",
    },
    labels: {
      phone: "Phone",
      whatsapp: "WhatsApp",
      address: "Address",
      dimensions: "Dimensions",
      finishOptions: "Finish Options",
      colorRange: "Color Range",
      packaging: "Packaging",
      placeholder: "To be added",
      applications: "Applications",
      specifications: "Specifications",
      factoryConfidence: "Factory Confidence",
      relatedProducts: "Related Products",
      company: "Company",
      qualityApproach: "Quality Approach",
      map: "Location",
      form: "Inquiry Form",
    },
    form: {
      title: "Start a direct conversation.",
      description: "Leave a short message for product, project, or custom production requests.",
      fullName: "Full name",
      company: "Company",
      email: "Email",
      phone: "Phone / WhatsApp",
      message: "Write the product or request you are interested in.",
      success: "Your message has been received. The form can later be connected to email or CRM.",
    },
    home: {
      productsEyebrow: "Products",
      productsTitle: "Three core product families, presented with clarity.",
      productsDescription: "The visual-first structure helps buyers understand the products quickly.",
      whyEyebrow: "Why ArtıPLAST",
      whyTitle: "A corporate presence defined by trust, order, and manufacturing strength.",
      whyDescription: "Minimal text, clear signals, and refined spacing build a premium impression.",
      featuredEyebrow: "Featured Visual",
      featuredTitle: "Spacious editorial space for premium media.",
      featuredDescription: "A wide visual area gives the homepage a calm and international character.",
      galleryEyebrow: "Gallery",
      galleryTitle: "Product-led visuals with very little copy.",
      galleryDescription: "A premium gallery system prepared for real factory and product photography.",
      factoryPreviewEyebrow: "Factory Preview",
      factoryPreviewTitle: "Reserved space for exterior, interior, and production visuals.",
      factoryPreviewDescription: "The structure is ready for future factory video and photography content.",
      ctaTitle: "Create a first impression that looks as precise as the production behind it.",
      ctaDescription: "Explore product categories or contact the factory for dimensions, projects, and custom requests.",
    },
  },
  de: {
    ...(() => {
      const en = {
        languageLabel: "Deutsch",
        navigation: { home: "Startseite", products: "Produkte", about: "Über uns", faq: "Info", contact: "Kontakt" },
        actions: {
          contact: "Kontaktieren",
          exploreProducts: "Produkte ansehen",
          factoryPresentation: "Fabrikpräsentation",
          exploreAllProducts: "Alle Produkte ansehen",
          search: "Suche",
          active: "Aktiv",
          chooseLanguage: "Sprache wählen",
          seeBrandStory: "Markengeschichte ansehen",
          viewDetails: "Details ansehen",
          viewProductRange: "Produktübersicht",
          contactFactory: "Fabrik kontaktieren",
          returnToProducts: "Zu allen Produkten",
          sendInquiry: "Anfrage senden",
        },
        hero: { eyebrow: "Karaman, Türkei", title: "Premium-Lösungen für Innenprofile und Paneele", description: "ArtıPLAST präsentiert sich als Hersteller mit Produktklarheit und internationaler Glaubwürdigkeit." },
        pages: {
          products: { eyebrow: "Produkte", title: "Ein klarer und hochwertiger Produktkatalog.", description: "Die wichtigsten Produktfamilien werden mit starken Bildern und kurzen Texten präsentiert." },
          about: { eyebrow: "Über uns", title: "Eine kurze und überzeugende Herstellergeschichte.", description: "ArtıPLAST ist ein Hersteller aus Karaman mit internationaler Ausstrahlung." },
          faq: { eyebrow: "FAQ", title: "Schnelle und klare Antworten.", description: "Wichtige Informationen zu Produkten, Kontakt und Produktionsansatz." },
          contact: { eyebrow: "Kontakt", title: "Kontaktieren Sie die Fabrik direkt.", description: "Erreichen Sie uns schnell über Telefon, WhatsApp und Adresse." },
        },
        footer: { navigation: "Navigation", languages: "Sprachen", contact: "Kontakt", copyright: "© 2026 ArtıPLAST. Alle Rechte vorbehalten." },
        labels: { phone: "Telefon", whatsapp: "WhatsApp", address: "Adresse", dimensions: "Abmessungen", finishOptions: "Oberflächen", colorRange: "Farben", packaging: "Verpackung", placeholder: "Wird ergänzt", applications: "Anwendungsbereiche", specifications: "Spezifikationen", factoryConfidence: "Produktionssicherheit", relatedProducts: "Verwandte Produkte", company: "Unternehmen", qualityApproach: "Qualitätsansatz", map: "Standort", form: "Anfrageformular" },
        form: { title: "Direkt Kontakt aufnehmen.", description: "Hinterlassen Sie eine kurze Nachricht zu Produkt, Projekt oder Sonderanfertigung.", fullName: "Name", company: "Unternehmen", email: "E-Mail", phone: "Telefon / WhatsApp", message: "Beschreiben Sie Ihr Produkt oder Ihre Anfrage.", success: "Ihre Nachricht wurde empfangen. Das Formular kann später an E-Mail oder CRM angebunden werden." },
        home: { productsEyebrow: "Produkte", productsTitle: "Drei zentrale Produktfamilien, klar präsentiert.", productsDescription: "Die visuell starke Struktur hilft Käufern, die Produkte schnell zu verstehen.", whyEyebrow: "Warum ArtıPLAST", whyTitle: "Ein Unternehmensauftritt mit Vertrauen, Ordnung und Produktionsstärke.", whyDescription: "Wenig Text, klare Signale und großzügige Abstände schaffen Premium-Wirkung.", featuredEyebrow: "Visuelles Highlight", featuredTitle: "Großzügiger redaktioneller Raum für Premium-Medien.", featuredDescription: "Der breite Bildbereich verleiht der Startseite einen ruhigen internationalen Charakter.", galleryEyebrow: "Galerie", galleryTitle: "Produktorientierte Bilder mit sehr wenig Text.", galleryDescription: "Premium-Galeriesystem für echte Fabrik- und Produktfotos.", factoryPreviewEyebrow: "Fabrikvorschau", factoryPreviewTitle: "Reservierter Bereich für Außen-, Innen- und Produktionsbilder.", factoryPreviewDescription: "Die Struktur ist bereit für künftige Fabrikvideos und Fotoinhalte.", ctaTitle: "Schaffen Sie einen ersten Eindruck, der so präzise aussieht wie die Produktion dahinter.", ctaDescription: "Entdecken Sie Produktkategorien oder kontaktieren Sie die Fabrik für Maße, Projekte und Sonderwünsche." },
      };
      return en;
    })(),
  },
  ar: { ...englishBase, languageLabel: "العربية", navigation: { home: "الرئيسية", products: "المنتجات", about: "من نحن", faq: "معلومات", contact: "تواصل معنا" }, actions: { ...englishBase.actions, contact: "تواصل معنا", exploreProducts: "استعرض المنتجات", factoryPresentation: "عرض المصنع", exploreAllProducts: "عرض جميع المنتجات", search: "بحث", active: "نشط", chooseLanguage: "اختر اللغة", seeBrandStory: "شاهد قصة العلامة", viewDetails: "عرض التفاصيل", viewProductRange: "عرض المنتجات", contactFactory: "التواصل مع المصنع", returnToProducts: "العودة إلى المنتجات", sendInquiry: "إرسال الطلب" }, hero: { eyebrow: "كارامان، تركيا", title: "حلول فاخرة لملفات وألواح المساحات الداخلية", description: "تقدم ArtıPLAST هوية مصنع راقية مبنية على وضوح المنتج والثقة الدولية." }, pages: { products: { eyebrow: "المنتجات", title: "كتالوج منتجات نظيف وفاخر.", description: "يتم تقديم العائلات الرئيسية للمنتجات بصور قوية ونصوص مختصرة." }, about: { eyebrow: "من نحن", title: "قصة مصنع مختصرة وواثقة.", description: "يتم تقديم ArtıPLAST كمصنع في كارامان بحضور دولي موثوق." }, faq: { eyebrow: "معلومات", title: "إجابات سريعة وواضحة.", description: "معلومات أساسية عن المنتجات والتواصل ونهج التصنيع." }, contact: { eyebrow: "تواصل معنا", title: "تواصل مع المصنع مباشرة.", description: "يمكنكم الوصول إلينا بسرعة عبر الهاتف وواتساب والعنوان." } }, footer: { navigation: "التنقل", languages: "اللغات", contact: "التواصل", copyright: "© 2026 ArtıPLAST. جميع الحقوق محفوظة." }, labels: { phone: "الهاتف", whatsapp: "واتساب", address: "العنوان", dimensions: "الأبعاد", finishOptions: "خيارات السطح", colorRange: "الألوان", packaging: "التغليف", placeholder: "سيتم الإضافة", applications: "مجالات الاستخدام", specifications: "المواصفات", factoryConfidence: "ثقة الإنتاج", relatedProducts: "منتجات ذات صلة", company: "الشركة", qualityApproach: "نهج الجودة", map: "الموقع", form: "نموذج التواصل" }, form: { title: "ابدأ تواصلاً مباشراً.", description: "اترك رسالة قصيرة حول المنتج أو المشروع أو طلب الإنتاج الخاص.", fullName: "الاسم الكامل", company: "الشركة", email: "البريد الإلكتروني", phone: "الهاتف / واتساب", message: "اكتب المنتج أو الطلب الذي تهتم به.", success: "تم استلام رسالتك. يمكن ربط النموذج بالبريد أو نظام CRM لاحقاً." }, home: { productsEyebrow: "المنتجات", productsTitle: "ثلاث عائلات منتجات رئيسية بعرض واضح.", productsDescription: "يساعد الهيكل البصري القوي المشترين على فهم المنتجات بسرعة.", whyEyebrow: "لماذا ArtıPLAST", whyTitle: "حضور مؤسسي قائم على الثقة والنظام وقوة الإنتاج.", whyDescription: "نص قليل وإشارات واضحة ومسافات أنيقة تصنع انطباعاً راقياً.", featuredEyebrow: "صورة مميزة", featuredTitle: "مساحة تحريرية واسعة للوسائط الفاخرة.", featuredDescription: "تمنح المساحة البصرية الواسعة الصفحة الرئيسية طابعاً عالمياً هادئاً.", galleryEyebrow: "المعرض", galleryTitle: "صور تركز على المنتج مع نص قليل جداً.", galleryDescription: "نظام معرض فاخر مهيأ لصور المصنع والمنتجات الحقيقية.", factoryPreviewEyebrow: "لمحة عن المصنع", factoryPreviewTitle: "مساحة مخصصة للصور الخارجية والداخلية والإنتاجية.", factoryPreviewDescription: "الهيكل جاهز لمحتوى الفيديو والصور المستقبلية.", ctaTitle: "اصنع انطباعاً أولياً يبدو دقيقاً بقدر ما ينتج.", ctaDescription: "استكشف فئات المنتجات أو تواصل مع المصنع للمقاسات والمشاريع والطلبات الخاصة." } },
  az: { ...englishBase, languageLabel: "Azərbaycan", navigation: { home: "Ana səhifə", products: "Məhsullar", about: "Haqqımızda", faq: "Məlumat", contact: "Bizimlə Əlaqə" }, actions: { ...englishBase.actions, contact: "Bizimlə Əlaqə", exploreProducts: "Məhsullara bax", factoryPresentation: "Zavod təqdimatı", exploreAllProducts: "Bütün məhsullara bax", search: "Axtarış", active: "Aktiv", chooseLanguage: "Dil seçin", seeBrandStory: "Brend hekayəsinə bax", viewDetails: "Ətraflı bax", viewProductRange: "Məhsul sırasına bax", contactFactory: "Zavodla əlaqə", returnToProducts: "Bütün məhsullara qayıt", sendInquiry: "Sorğu göndər" }, hero: { eyebrow: "Karaman, Türkiyə", title: "Premium interyer profil və panel həlləri", description: "ArtıPLAST məhsul aydınlığı və beynəlxalq etibara əsaslanan premium istehsalçı təqdimatıdır." }, pages: { products: { eyebrow: "Məhsullar", title: "Təmiz və premium məhsul kataloqu.", description: "Əsas məhsul ailələri güclü vizuallar və qısa mətnlərlə təqdim olunur." }, about: { eyebrow: "Haqqımızda", title: "Qısa və inamlı istehsalçı hekayəsi.", description: "ArtıPLAST Karaman əsaslı və beynəlxalq nüfuza malik istehsalçı kimi təqdim olunur." }, faq: { eyebrow: "Məlumat", title: "Sürətli və aydın cavablar.", description: "Məhsullar, əlaqə və istehsal yanaşması haqqında əsas məlumatlar." }, contact: { eyebrow: "Bizimlə Əlaqə", title: "Zavodla birbaşa əlaqə saxlayın.", description: "Telefon, WhatsApp və ünvan vasitəsilə tez əlaqə qurun." } }, footer: { navigation: "Naviqasiya", languages: "Dillər", contact: "Əlaqə", copyright: "© 2026 ArtıPLAST. Bütün hüquqlar qorunur." }, labels: { phone: "Telefon", whatsapp: "WhatsApp", address: "Ünvan", dimensions: "Ölçülər", finishOptions: "Səth seçimləri", colorRange: "Rənglər", packaging: "Qablaşdırma", placeholder: "Əlavə olunacaq", applications: "Tətbiq sahələri", specifications: "Spesifikasiyalar", factoryConfidence: "İstehsal güvəni", relatedProducts: "Oxşar məhsullar", company: "Şirkət", qualityApproach: "Keyfiyyət yanaşması", map: "Məkan", form: "Əlaqə Forması" }, form: { title: "Birbaşa əlaqəyə başlayın.", description: "Məhsul, layihə və ya xüsusi istehsal üçün qısa mesaj yazın.", fullName: "Ad Soyad", company: "Şirkət", email: "E-poçt", phone: "Telefon / WhatsApp", message: "Maraqlandığınız məhsulu və ya istəyinizi yazın.", success: "Mesajınız qəbul edildi. Forma sonradan e-poçta və ya CRM-ə bağlana bilər." }, home: { productsEyebrow: "Məhsullar", productsTitle: "Üç əsas məhsul ailəsi aydın təqdimatla.", productsDescription: "Vizual yönümlü quruluş alıcıların məhsulları tez anlamasına kömək edir.", whyEyebrow: "Niyə ArtıPLAST", whyTitle: "Etibar, nizam və istehsal gücü ilə qurulan korporativ görünüş.", whyDescription: "Az mətn, aydın siqnallar və zərif boşluqlar premium təəssürat yaradır.", featuredEyebrow: "Seçilmiş Vizual", featuredTitle: "Premium media üçün geniş redaksiya sahəsi.", featuredDescription: "Geniş vizual sahə ana səhifəyə sakit beynəlxalq xarakter verir.", galleryEyebrow: "Qalereya", galleryTitle: "Çox az mətnlə məhsul yönümlü vizuallar.", galleryDescription: "Real zavod və məhsul fotoları üçün hazırlanmış premium qalereya sistemi.", factoryPreviewEyebrow: "Zavod Ön Baxış", factoryPreviewTitle: "Eksteryer, interyer və istehsal görüntüləri üçün ayrılmış sahə.", factoryPreviewDescription: "Quruluş gələcək video və foto məzmunu üçün hazırdır.", ctaTitle: "İstehsal qədər dəqiq görünən ilk təəssürat yaradın.", ctaDescription: "Məhsul kateqoriyalarına baxın və ya ölçü, layihə və xüsusi sifarişlər üçün zavodla əlaqə saxlayın." } },
  bg: { ...englishBase, languageLabel: "Български", navigation: { home: "Начало", products: "Продукти", about: "За нас", faq: "Информация", contact: "Свържете се с нас" }, actions: { ...englishBase.actions, contact: "Свържете се с нас", exploreProducts: "Разгледай продуктите", factoryPresentation: "Представяне на фабриката", exploreAllProducts: "Виж всички продукти", search: "Търсене", active: "Активен", chooseLanguage: "Избор на език", seeBrandStory: "Виж историята на марката", viewDetails: "Виж детайли", viewProductRange: "Виж продуктовата гама", contactFactory: "Свържи се с фабриката", returnToProducts: "Назад към продуктите", sendInquiry: "Изпрати запитване" }, hero: { eyebrow: "Караман, Турция", title: "Премиум решения за вътрешни профили и панели", description: "ArtıPLAST е премиум производствена презентация, изградена върху яснота на продукта и международно доверие." }, pages: { products: { eyebrow: "Продукти", title: "Чист и премиум продуктов каталог.", description: "Основните продуктови семейства са представени със силни визуализации и кратък текст." }, about: { eyebrow: "За нас", title: "Кратка и уверена история на производителя.", description: "ArtıPLAST е производител от Караман с международна достоверност." }, faq: { eyebrow: "Информация", title: "Бързи и ясни отговори.", description: "Основна информация за продуктите, контакта и производствения подход." }, contact: { eyebrow: "Свържете се с нас", title: "Свържете се директно с фабриката.", description: "Свържете се бързо чрез телефон, WhatsApp и адрес." } }, footer: { navigation: "Навигация", languages: "Езици", contact: "Контакт", copyright: "© 2026 ArtıPLAST. Всички права запазени." }, labels: { phone: "Телефон", whatsapp: "WhatsApp", address: "Адрес", dimensions: "Размери", finishOptions: "Повърхности", colorRange: "Цветове", packaging: "Опаковка", placeholder: "Ще бъде добавено", applications: "Приложения", specifications: "Спецификации", factoryConfidence: "Производствена увереност", relatedProducts: "Свързани продукти", company: "Компания", qualityApproach: "Подход към качеството", map: "Локация", form: "Форма за запитване" }, form: { title: "Започнете директен разговор.", description: "Оставете кратко съобщение за продукт, проект или специална заявка.", fullName: "Име", company: "Фирма", email: "Имейл", phone: "Телефон / WhatsApp", message: "Опишете продукта или изискването си.", success: "Съобщението ви е получено. Формата може по-късно да бъде свързана с имейл или CRM." }, home: { productsEyebrow: "Продукти", productsTitle: "Три основни продуктови семейства, представени ясно.", productsDescription: "Визуално водената структура помага на купувачите да разберат продуктите бързо.", whyEyebrow: "Защо ArtıPLAST", whyTitle: "Корпоративно присъствие, изградено върху доверие, ред и производствена сила.", whyDescription: "Малко текст, ясни сигнали и добри отстояния създават премиум впечатление.", featuredEyebrow: "Акцентно визуално съдържание", featuredTitle: "Просторна редакционна зона за премиум медия.", featuredDescription: "Широката визуална зона придава спокоен международен характер на началната страница.", galleryEyebrow: "Галерия", galleryTitle: "Визуализации, водени от продукта, с много малко текст.", galleryDescription: "Премиум галерийна система за реални снимки на фабрика и продукти.", factoryPreviewEyebrow: "Преглед на фабриката", factoryPreviewTitle: "Запазено пространство за външни, вътрешни и производствени визуализации.", factoryPreviewDescription: "Структурата е готова за бъдещо видео и фото съдържание.", ctaTitle: "Създайте първо впечатление, което изглежда толкова прецизно, колкото производството зад него.", ctaDescription: "Разгледайте продуктовите категории или се свържете с фабриката за размери, проекти и специални заявки." } },
  fr: { ...englishBase, languageLabel: "Français", navigation: { home: "Accueil", products: "Produits", about: "À propos", faq: "Infos", contact: "Contactez-nous" }, actions: { ...englishBase.actions, contact: "Contactez-nous", exploreProducts: "Découvrir les produits", factoryPresentation: "Présentation de l'usine", exploreAllProducts: "Voir tous les produits", chooseLanguage: "Choisir la langue", seeBrandStory: "Voir l'histoire de la marque", viewDetails: "Voir les détails", viewProductRange: "Voir la gamme", contactFactory: "Contacter l'usine", returnToProducts: "Retour aux produits", sendInquiry: "Envoyer la demande" }, hero: { eyebrow: "Karaman, Turquie", title: "Solutions premium pour profils et panneaux intérieurs", description: "ArtıPLAST propose une présentation fabricant premium fondée sur la clarté produit et la confiance internationale." }, pages: { products: { eyebrow: "Produits", title: "Un catalogue produit propre et premium.", description: "Les principales familles de produits sont présentées avec des visuels forts et des textes courts." }, about: { eyebrow: "À propos", title: "Une histoire fabricant concise et sûre.", description: "ArtıPLAST est présenté comme un fabricant de Karaman à la crédibilité internationale." }, faq: { eyebrow: "Infos", title: "Des réponses rapides et claires.", description: "Informations essentielles sur les produits, le contact et l'approche de production." }, contact: { eyebrow: "Contactez-nous", title: "Contactez directement l'usine.", description: "Joignez-nous rapidement par téléphone, WhatsApp et adresse." } }, footer: { navigation: "Navigation", languages: "Langues", contact: "Contact", copyright: "© 2026 ArtıPLAST. Tous droits réservés." }, labels: { phone: "Téléphone", whatsapp: "WhatsApp", address: "Adresse", dimensions: "Dimensions", finishOptions: "Finitions", colorRange: "Couleurs", packaging: "Emballage", placeholder: "À ajouter", applications: "Applications", specifications: "Spécifications", factoryConfidence: "Confiance de production", relatedProducts: "Produits associés", company: "Entreprise", qualityApproach: "Approche qualité", map: "Emplacement", form: "Formulaire de contact" }, form: { title: "Commencez une conversation directe.", description: "Laissez un court message pour vos produits, projets ou demandes spéciales.", fullName: "Nom complet", company: "Entreprise", email: "E-mail", phone: "Téléphone / WhatsApp", message: "Indiquez le produit ou le besoin qui vous intéresse.", success: "Votre message a été reçu. Le formulaire pourra ensuite être relié à un e-mail ou à un CRM." }, home: { productsEyebrow: "Produits", productsTitle: "Trois familles de produits essentielles, présentées clairement.", productsDescription: "La structure visuelle permet aux acheteurs de comprendre les produits rapidement.", whyEyebrow: "Pourquoi ArtıPLAST", whyTitle: "Une présence corporate fondée sur la confiance, l'ordre et la force industrielle.", whyDescription: "Peu de texte, des signaux clairs et un espacement raffiné créent une impression premium.", featuredEyebrow: "Visuel phare", featuredTitle: "Un espace éditorial spacieux pour des médias premium.", featuredDescription: "La grande zone visuelle donne à la page d'accueil un caractère international et calme.", galleryEyebrow: "Galerie", galleryTitle: "Des visuels guidés par le produit avec très peu de texte.", galleryDescription: "Un système de galerie premium préparé pour de vraies photos d'usine et de produit.", factoryPreviewEyebrow: "Aperçu de l'usine", factoryPreviewTitle: "Espace réservé pour les visuels extérieurs, intérieurs et de production.", factoryPreviewDescription: "La structure est prête pour les futures photos et vidéos de l'usine.", ctaTitle: "Créez une première impression aussi précise que la production qui la soutient.", ctaDescription: "Explorez les catégories de produits ou contactez l'usine pour dimensions, projets et demandes spéciales." } },
};

const productSeeds: ProductSeed[] = [
  {
    slug: "tavan-lambiri",
    heroImage: "/images/products/tavan-lambiri-hero.svg",
    cardImage: "/images/products/tavan-lambiri-card.svg",
    translations: {
      tr: { name: "Tavan Lambiri", category: "Tavan Çözümleri", kicker: "Premium tavan kaplama profili", description: "Aydınlık iç mekanlar için temiz çizgili tavan çözümü.", longDescription: "Tavan Lambiri, düzenli ritmi ve sade yüzey diliyle premium projeler için hazırlanmıştır.", features: ["Düzenli tavan ritmi", "Güçlü yüzey görünümü", "Varyasyonlara açık yapı"], applications: ["Konut tavanları", "Mağaza iç mekanları", "Otel projeleri"], confidencePoints: ["İhracat odaklı sunuma uygun", "Profil ve yüzey seçeneklerine açık", "Görsel katalog yapısını destekler", "Teknik föy alanı hazır"], alt: "ArtıPLAST tavan lambiri ürün görseli" },
      en: { name: "Ceiling Cladding", category: "Ceiling Solutions", kicker: "Premium ceiling profile", description: "A clean-lined ceiling solution for bright interiors.", longDescription: "Ceiling Cladding is prepared for premium projects with orderly rhythm and a refined surface language.", features: ["Ordered ceiling rhythm", "Strong surface appearance", "Ready for future variations"], applications: ["Residential ceilings", "Retail interiors", "Hotel projects"], confidencePoints: ["Suitable for export presentation", "Open to finish and profile options", "Supports visual catalog structure", "Ready for technical sheets"], alt: "ArtıPLAST ceiling cladding product visual" },
      de: { name: "Deckenlambris", category: "Deckenlösungen", kicker: "Premium-Deckenprofil", description: "Saubere Deckenlösung für helle Innenräume.", longDescription: "Deckenlambris ist für hochwertige Projekte mit ruhigem Rhythmus und klarer Oberfläche vorbereitet.", features: ["Geordneter Deckenrhythmus", "Starke Oberflächenwirkung", "Für Varianten vorbereitet"], applications: ["Wohnraumdecken", "Ladenbau", "Hotelprojekte"], confidencePoints: ["Für Exportpräsentation geeignet", "Offen für Profil- und Oberflächenoptionen", "Unterstützt visuelle Kataloge", "Bereit für technische Daten"], alt: "ArtıPLAST Produktbild Deckenlambris" },
      ar: { name: "كسوة السقف", category: "حلول السقف", kicker: "بروفيل سقف فاخر", description: "حل سقف نظيف للمساحات الداخلية المضيئة.", longDescription: "تم إعداد كسوة السقف لمشاريع راقية بإيقاع منظم وسطح هادئ.", features: ["إيقاع سقفي منظم", "مظهر سطحي قوي", "جاهز للتطوير"], applications: ["أسقف سكنية", "مساحات تجارية", "مشاريع فنادق"], confidencePoints: ["مناسب للعرض التصديري", "مرن للتشطيبات", "يدعم الكتالوج البصري", "جاهز للبيانات الفنية"], alt: "صورة منتج كسوة السقف من ArtıPLAST" },
      az: { name: "Tavan Lambiri", category: "Tavan Həlləri", kicker: "Premium tavan profili", description: "İşıqlı interyerlər üçün təmiz xətli tavan həlli.", longDescription: "Tavan Lambiri premium layihələr üçün nizamlı ritm və sakit səth dili ilə hazırlanıb.", features: ["Nizamlı tavan ritmi", "Güclü səth görünüşü", "Variasiyalara açıq quruluş"], applications: ["Yaşayış tavanları", "Mağaza interyerləri", "Otel layihələri"], confidencePoints: ["İxrac təqdimatına uyğundur", "Profil və səth seçimlərinə açıqdır", "Vizual kataloqu dəstəkləyir", "Texniki məlumat üçün hazırdır"], alt: "ArtıPLAST tavan lambiri məhsul vizualı" },
      bg: { name: "Таванна ламперия", category: "Таванни решения", kicker: "Премиум таванен профил", description: "Изчистено решение за светли интериори.", longDescription: "Таванната ламперия е подготвена за премиум проекти с подреден ритъм и чиста повърхност.", features: ["Подреден ритъм", "Силна повърхност", "Готова за варианти"], applications: ["Жилищни тавани", "Търговски интериори", "Хотелски проекти"], confidencePoints: ["Подходяща за експортно представяне", "Отворена за профили и покрития", "Поддържа визуален каталог", "Готова за технически данни"], alt: "Продуктова визия на ArtıPLAST за таванна ламперия" },
      fr: { name: "Lambris de plafond", category: "Solutions de plafond", kicker: "Profil premium pour plafond", description: "Une solution de plafond aux lignes nettes pour les intérieurs lumineux.", longDescription: "Le lambris de plafond est conçu pour des projets premium avec un rythme ordonné et une surface raffinée.", features: ["Rythme de plafond ordonné", "Présence de surface forte", "Prêt pour des variantes"], applications: ["Plafonds résidentiels", "Intérieurs commerciaux", "Projets hôteliers"], confidencePoints: ["Adapté à une présentation export", "Ouvert aux options de profil et finition", "Soutient un catalogue visuel", "Prêt pour les fiches techniques"], alt: "Visuel produit lambris de plafond ArtıPLAST" },
    },
  },
  {
    slug: "kaval-borusu",
    heroImage: "/images/products/kaval-borusu-hero.svg",
    cardImage: "/images/products/kaval-borusu-card.svg",
    translations: {
      tr: { name: "Kaval Borusu", category: "Profil Çözümleri", kicker: "Fonksiyonel boru profil ailesi", description: "Sade geometri ve güven veren üretim diliyle fonksiyonel profil ürünü.", longDescription: "Kaval Borusu, teknik iletişime açık yapısıyla üretici vitrininin güçlü ürün gruplarından biridir.", features: ["Silindirik ve net form", "Teknik görüşmelere uygun yapı", "Ölçü ve yüzey bilgisi için hazır alan"], applications: ["Profil sistemleri", "İç mekan çözümleri", "Özel üretim projeleri"], confidencePoints: ["Teknik içeriğe genişleyebilir", "Özel üretim taleplerine uygun", "Üretici kimliğini güçlendirir", "Detay anlatımını destekler"], alt: "ArtıPLAST kaval borusu ürün görseli" },
      en: { name: "Round Profile Tube", category: "Profile Solutions", kicker: "Functional tubular profile family", description: "A functional profile product with simple geometry and reliable manufacturing presence.", longDescription: "Round Profile Tube is one of the strongest product groups in the manufacturer showcase thanks to its technical clarity.", features: ["Clear cylindrical form", "Suitable for technical discussions", "Ready for dimensions and finish data"], applications: ["Profile systems", "Interior solutions", "Custom production projects"], confidencePoints: ["Ready for technical expansion", "Suitable for custom requests", "Strengthens manufacturer identity", "Supports detail storytelling"], alt: "ArtıPLAST round profile tube visual" },
      de: { name: "Rundprofilrohr", category: "Profillösungen", kicker: "Funktionale Rohrprofilfamilie", description: "Funktionales Profil mit klarer Geometrie und verlässlicher Produktionswirkung.", longDescription: "Das Rundprofilrohr gehört durch seine technische Klarheit zu den starken Produktgruppen des Herstellerauftritts.", features: ["Klare zylindrische Form", "Geeignet für technische Gespräche", "Bereit für Maße und Oberflächen"], applications: ["Profilsysteme", "Innenraumlösungen", "Sonderprojekte"], confidencePoints: ["Technisch erweiterbar", "Für Sonderwünsche geeignet", "Stärkt die Herstelleridentität", "Unterstützt Detaildarstellung"], alt: "ArtıPLAST Produktbild Rundprofilrohr" },
      ar: { name: "أنبوب بروفيل دائري", category: "حلول البروفيل", kicker: "عائلة بروفيل أنبوبية عملية", description: "منتج بروفيل عملي بهندسة بسيطة وحضور إنتاجي موثوق.", longDescription: "يُعد الأنبوب الدائري من المجموعات القوية في عرض الشركة بفضل وضوحه الفني.", features: ["شكل أسطواني واضح", "مناسب للنقاش الفني", "جاهز لبيانات المقاسات"], applications: ["أنظمة البروفيل", "حلول داخلية", "مشاريع خاصة"], confidencePoints: ["قابل للتوسع الفني", "مناسب للطلبات الخاصة", "يعزز هوية المصنع", "يدعم شرح التفاصيل"], alt: "صورة منتج الأنبوب الدائري من ArtıPLAST" },
      az: { name: "Kaval Borusu", category: "Profil Həlləri", kicker: "Funksional boru profil ailəsi", description: "Sadə geometriya və etibarlı istehsal dili ilə funksional profil məhsulu.", longDescription: "Kaval Borusu texniki aydınlığı ilə istehsalçı vitrininin güclü məhsul qruplarındandır.", features: ["Aydın silindrik forma", "Texniki müzakirələr üçün uyğun", "Ölçü və səth məlumatı üçün hazır"], applications: ["Profil sistemləri", "İnteryer həlləri", "Xüsusi istehsal layihələri"], confidencePoints: ["Texniki genişlənməyə hazırdır", "Xüsusi tələblər üçün uyğundur", "İstehsalçı kimliyini gücləndirir", "Detallı izahı dəstəkləyir"], alt: "ArtıPLAST kaval borusu məhsul vizualı" },
      bg: { name: "Кръгла профилна тръба", category: "Профилни решения", kicker: "Функционална тръбна серия", description: "Функционален профилен продукт с проста геометрия и надеждно присъствие.", longDescription: "Кръглата профилна тръба е сред силните продуктови групи благодарение на техническата си яснота.", features: ["Ясна цилиндрична форма", "Подходяща за технически разговори", "Готова за данни за размери"], applications: ["Профилни системи", "Интериорни решения", "Специални проекти"], confidencePoints: ["Готова за техническо разширение", "Подходяща за специални заявки", "Подсилва идентичността на производителя", "Поддържа детайлна комуникация"], alt: "Визуализация на кръгла профилна тръба ArtıPLAST" },
      fr: { name: "Tube profilé rond", category: "Solutions de profil", kicker: "Famille de profils tubulaires fonctionnels", description: "Un produit de profil fonctionnel avec géométrie simple et présence industrielle fiable.", longDescription: "Le tube profilé rond fait partie des groupes forts du fabricant grâce à sa clarté technique.", features: ["Forme cylindrique claire", "Adapté aux échanges techniques", "Prêt pour les données de dimensions"], applications: ["Systèmes de profil", "Solutions intérieures", "Projets sur mesure"], confidencePoints: ["Prêt pour un contenu technique plus riche", "Adapté aux demandes spéciales", "Renforce l'identité fabricant", "Soutient la narration détaillée"], alt: "Visuel tube profilé rond ArtıPLAST" },
    },
  },
  {
    slug: "duvar-lambiri",
    heroImage: "/images/products/ps-panel-hero.svg",
    cardImage: "/images/products/ps-panel-card.svg",
    translations: {
      tr: { name: "Duvar Lambiri", category: "Duvar Çözümleri", kicker: "Dekoratif duvar kaplama sistemi", description: "Yüzey karakteri güçlü, modern ve premium duvar çözümü.", longDescription: "Duvar Lambiri, iç mekanlarda şık yüzey etkisi ve düzenli ritim arayan projeler için hazırlanmıştır.", features: ["Dikey ve yatay uygulamaya uygun", "Gerçek fotoğraf kullanımı için güçlü etki", "Renk ve yüzey seçeneklerine açık"], applications: ["Vurgu duvarları", "Showroom alanları", "Ticari iç mekanlar"], confidencePoints: ["Mimari ürün hikayesi için uygundur", "Yüzey varyasyonlarına açık yapı", "Doğrudan iletişim akışını destekler", "Premium üretici konumuna uyumludur"], alt: "ArtıPLAST duvar lambiri ürün görseli" },
      en: { name: "Wall Cladding", category: "Wall Solutions", kicker: "Decorative wall cladding system", description: "A modern premium wall solution with strong surface character.", longDescription: "Wall Cladding is designed for interior projects that need refined surface impact and a clean rhythm.", features: ["Suitable for vertical and horizontal use", "Strong impact for real photography", "Open to color and finish options"], applications: ["Feature walls", "Showrooms", "Commercial interiors"], confidencePoints: ["Suitable for architectural storytelling", "Flexible for finish variations", "Supports direct contact flow", "Aligned with premium positioning"], alt: "ArtıPLAST wall cladding product visual" },
      de: { name: "Wandlambris", category: "Wandlösungen", kicker: "Dekoratives Wandverkleidungssystem", description: "Moderne Premium-Wandlösung mit starker Oberflächenwirkung.", longDescription: "Wandlambris ist für Innenraumprojekte mit hochwertiger Oberfläche und klarem Rhythmus ausgelegt.", features: ["Für vertikale und horizontale Anwendung", "Starke Wirkung für echte Fotografie", "Offen für Farben und Oberflächen"], applications: ["Akzentwände", "Showrooms", "Gewerbliche Innenräume"], confidencePoints: ["Geeignet für architektonisches Storytelling", "Flexibel für Oberflächenvarianten", "Unterstützt direkten Kontaktfluss", "Passend zur Premium-Positionierung"], alt: "ArtıPLAST Produktbild Wandlambris" },
      ar: { name: "كسوة الجدار", category: "حلول الجدران", kicker: "نظام كسوة جدارية زخرفية", description: "حل جداري عصري فاخر ذو سطح قوي.", longDescription: "تم إعداد كسوة الجدار للمشاريع الداخلية التي تحتاج إلى تأثير سطحي راقٍ وإيقاع نظيف.", features: ["مناسب للتطبيق العمودي والأفقي", "تأثير قوي للصور الحقيقية", "مرن للألوان والتشطيبات"], applications: ["جدران مميزة", "صالات عرض", "مساحات تجارية"], confidencePoints: ["مناسب للسرد المعماري", "مرن للتشطيبات", "يدعم الاتصال المباشر", "متوافق مع التموضع الفاخر"], alt: "صورة منتج كسوة الجدار من ArtıPLAST" },
      az: { name: "Divar Lambiri", category: "Divar Həlləri", kicker: "Dekorativ divar üzləmə sistemi", description: "Güclü səth xarakterli, müasir premium divar həlli.", longDescription: "Divar Lambiri zərif səth təsiri və təmiz ritm axtaran interyer layihələri üçün hazırlanıb.", features: ["Şaquli və üfüqi tətbiq üçün uyğundur", "Real foto üçün güclü təsir", "Rəng və səth seçimlərinə açıqdır"], applications: ["Vurğu divarları", "Şourumlar", "Kommersiya interyerləri"], confidencePoints: ["Memarlıq hekayəsi üçün uyğundur", "Səth variasiyalarına açıqdır", "Birbaşa əlaqə axınını dəstəkləyir", "Premium mövqelənməyə uyğundur"], alt: "ArtıPLAST divar lambiri məhsul vizualı" },
      bg: { name: "Стенна ламперия", category: "Стенни решения", kicker: "Декоративна стенна система", description: "Модерно премиум стеново решение със силен повърхностен ефект.", longDescription: "Стенната ламперия е създадена за интериорни проекти с нужда от изразителна повърхност и чист ритъм.", features: ["Подходяща за вертикално и хоризонтално приложение", "Силен ефект за реални снимки", "Отворена за цветове и покрития"], applications: ["Акцентни стени", "Шоуруми", "Търговски интериори"], confidencePoints: ["Подходяща за архитектурно разказване", "Гъвкава за повърхностни варианти", "Поддържа директен контакт", "Съвместима с премиум позициониране"], alt: "Визуализация на стенна ламперия ArtıPLAST" },
      fr: { name: "Lambris mural", category: "Solutions murales", kicker: "Système décoratif de revêtement mural", description: "Une solution murale premium moderne avec une forte présence de surface.", longDescription: "Le lambris mural est conçu pour les projets intérieurs recherchant un impact de surface raffiné et un rythme propre.", features: ["Adapté à un usage vertical et horizontal", "Fort impact pour la vraie photographie", "Ouvert aux options de couleur et finition"], applications: ["Murs d'accent", "Showrooms", "Intérieurs commerciaux"], confidencePoints: ["Adapté au storytelling architectural", "Flexible pour les variations de finition", "Soutient le contact direct", "Aligné avec un positionnement premium"], alt: "Visuel produit lambris mural ArtıPLAST" },
    },
  },
];

function copy(locale: Locale) {
  return localeCopy[locale];
}

export function getUiCopy(locale: Locale) {
  return copy(locale);
}

export function getBrandInfo() {
  return { name: BRAND_NAME, subtitle: BRAND_SUBTITLE, logoSrc: "/logo/logo.jpg" };
}

export function getProducts(locale: Locale): Product[] {
  return productSeeds.map((seed) => ({ slug: seed.slug, heroImage: seed.heroImage, cardImage: seed.cardImage, ...seed.translations[locale] }));
}

export function getProductBySlug(locale: Locale, slug: string) {
  return getProducts(locale).find((product) => product.slug === slug);
}

export function getRelatedProducts(locale: Locale, currentSlug: string) {
  return getProducts(locale).filter((product) => product.slug !== currentSlug);
}

export function getHomepageTrustPoints(locale: Locale): FeatureItem[] {
  const c = copy(locale);
  return [
    { title: c.home.whyEyebrow, description: c.home.whyDescription, icon: Factory },
    { title: c.home.featuredEyebrow, description: c.home.featuredDescription, icon: Building2 },
    { title: c.navigation.products, description: c.home.productsDescription, icon: Sparkles },
    { title: c.navigation.contact, description: c.pages.contact.description, icon: Ruler },
  ];
}

export function getHomepageMetrics(locale: Locale) {
  const c = copy(locale);
  return [
    { value: "3", label: c.navigation.products },
    { value: "7", label: c.footer.languages },
    { value: PHONE_DISPLAY, label: c.labels.phone },
    { value: "Karaman", label: c.labels.address },
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

export function getFactoryGallery(locale: Locale) {
  const c = copy(locale);
  return [
    { title: c.home.factoryPreviewEyebrow, description: ADDRESS, image: "/images/factory-exterior.svg" },
    { title: c.home.featuredEyebrow, description: c.home.featuredDescription, image: "/images/factory-interior.svg" },
    { title: c.home.whyEyebrow, description: c.home.whyDescription, image: "/images/production-line.svg" },
  ];
}

export function getAboutSections(locale: Locale) {
  return locale === "tr"
    ? [
        { title: "Karaman Merkezli", description: "ArtıPLAST, Karaman'da üretim yapan ve uluslararası görünürlüğe odaklanan bir üreticidir." },
        { title: "Üretim Yaklaşımı", description: "Düzenli iletişim, temiz sunum ve ürün netliği markanın merkezindedir." },
        { title: "Görsel Güven", description: "Ürün ve fabrika görselleri için hazırlanmış premium alanlar güven algısını güçlendirir." },
        { title: "Kurumsal Denge", description: "Az metin, güçlü görseller ve rafine boşluklarla sakin bir marka dili kurulur." },
      ]
    : [
        { title: "Karaman Based", description: "ArtıPLAST is a manufacturer based in Karaman with a premium international-facing presence." },
        { title: "Production Approach", description: "Clear product communication, clean presentation, and visual order define the brand." },
        { title: "Visual Trust", description: "Prepared spaces for product and factory media reinforce trust." },
        { title: "Corporate Balance", description: "Minimal text, strong visuals, and refined spacing create a calm brand language." },
      ];
}

export function getFaqItems(locale: Locale) {
  return locale === "tr"
    ? [
        { question: "Sitede hangi ürünler yer alıyor?", answer: "Tavan Lambiri, Kaval Borusu ve Duvar Lambiri ana ürün aileleri olarak sunuluyor." },
        { question: "Telefon ve WhatsApp hattı aynı mı?", answer: `Evet. ${PHONE_DISPLAY} numarası telefon ve WhatsApp için aktiftir.` },
        { question: "Adres bilgisi güncel mi?", answer: ADDRESS },
        { question: "Tüm dil seçenekleri aktif mi?", answer: "Evet. Türkçe, İngilizce, Almanca, Arapça, Azerbaycanca, Bulgarca ve Fransızca çalışır." },
      ]
    : [
        { question: "Which products are presented on the site?", answer: "The site presents Ceiling Cladding, Round Profile Tube, and Wall Cladding as the core product families." },
        { question: "Is the same number used for phone and WhatsApp?", answer: `Yes. ${PHONE_DISPLAY} is active for both phone and WhatsApp.` },
        { question: "Is the address current?", answer: ADDRESS },
        { question: "Are all language options active?", answer: "Yes. Turkish, English, German, Arabic, Azerbaijani, Bulgarian, and French are available." },
      ];
}

export function getContactCards(locale: Locale): ContactCard[] {
  const c = copy(locale);
  return [
    { type: "phone", title: c.labels.phone, value: commonContact.phone, href: PHONE_LINK },
    { type: "whatsapp", title: c.labels.whatsapp, value: commonContact.whatsapp, href: WHATSAPP_LINK },
    { type: "address", title: c.labels.address, value: commonContact.address },
  ];
}

export function getSearchEntries(locale: Locale): SearchEntry[] {
  const c = copy(locale);
  const coreEntries: SearchEntry[] = [
    { title: c.navigation.home, description: c.hero.description, href: localizedPath(locale), keywords: [BRAND_NAME, "manufacturer", "factory"] },
    { title: c.navigation.products, description: c.pages.products.description, href: localizedPath(locale, "/products"), keywords: getProducts(locale).map((product) => product.name) },
    { title: c.navigation.about, description: c.pages.about.description, href: localizedPath(locale, "/about"), keywords: [BRAND_NAME, "Karaman"] },
    { title: c.navigation.faq, description: c.pages.faq.description, href: localizedPath(locale, "/info"), keywords: ["faq", "questions"] },
    { title: c.navigation.contact, description: c.pages.contact.description, href: localizedPath(locale, "/contact"), keywords: [PHONE_DISPLAY, ADDRESS] },
  ];

  const productEntries = getProducts(locale).map((product) => ({
    title: product.name,
    description: product.description,
    href: localizedPath(locale, `/products/${product.slug}`),
    keywords: [product.category, product.kicker, ...product.features],
  }));

  return [...coreEntries, ...productEntries];
}

export function getSpecPlaceholders(locale: Locale) {
  const c = copy(locale);
  return [
    { label: c.labels.dimensions, value: c.labels.placeholder },
    { label: c.labels.finishOptions, value: c.labels.placeholder },
    { label: c.labels.colorRange, value: c.labels.placeholder },
    { label: c.labels.packaging, value: c.labels.placeholder },
  ];
}

export function getNavigation(locale: Locale): NavItem[] {
  const c = copy(locale);
  const productChildren = getProducts(locale).map((product) => ({
    label: product.name,
    href: localizedPath(locale, `/products/${product.slug}`),
  }));

  return [
    { label: c.navigation.home, href: localizedPath(locale) },
    { label: c.navigation.about, href: localizedPath(locale, "/about") },
    { label: c.navigation.products, href: localizedPath(locale, "/products"), children: productChildren },
    { label: c.navigation.faq, href: localizedPath(locale, "/info") },
    { label: c.navigation.contact, href: localizedPath(locale, "/contact") },
  ];
}

export function getFooterLinks(locale: Locale) {
  const c = copy(locale);
  return {
    navigation: getNavigation(locale),
    utility: [
      { label: c.actions.search, href: localizedPath(locale, "/products") },
      { label: c.labels.phone, href: PHONE_LINK },
      { label: c.labels.whatsapp, href: WHATSAPP_LINK },
    ],
  };
}
