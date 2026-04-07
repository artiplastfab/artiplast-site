import { ADDRESS, PHONE_DISPLAY, WHATSAPP_LINK } from "@/data/site";
import { defaultLocale, locales, localizedPath, type Locale } from "@/lib/i18n";

export const SEO_BRAND_NAME = "ArtıPLAST";
export const SITE_URL = "https://www.artiplast.com";
export const OG_IMAGE_URL = `${SITE_URL}/og-cover.jpg`;
export const PHONE_E164 = "+90 546 961 01 07";

export type SeoPageKey =
  | "home"
  | "about"
  | "products"
  | "catalog"
  | "info"
  | "contact"
  | "privacy"
  | "terms"
  | "delivery";

type SeoEntry = {
  title: string;
  description: string;
};

const seoContent: Record<Locale, Record<SeoPageKey, SeoEntry>> = {
  tr: {
    home: {
      title: "ArtıPLAST | PVC ve İç Mekan Profil Üreticisi",
      description:
        "ArtıPLAST, Karaman Türkiye merkezli üretim gücüyle PVC, tavan lambirileri, duvar lambirileri, kapı lambirileri, pervaz ve kaval borusu çözümleri sunan ihracat odaklı üreticidir.",
    },
    about: {
      title: "ArtıPLAST Hakkımızda | Karaman Merkezli Üretici",
      description:
        "ArtıPLAST hakkında bilgi alın. Karaman Türkiye merkezli üretici olarak PVC ve iç mekan profil çözümlerinde üretim disiplini, kalite yaklaşımı ve uluslararası sunum gücü sunar.",
    },
    products: {
      title: "ArtıPLAST Ürünler | PVC, Tavan ve Duvar Lambirileri",
      description:
        "ArtıPLAST ürünlerini keşfedin. PVC, tavan lambirileri, duvar lambirileri, kapı lambirileri, kapı pervazı, pencere pervazı ve kaval borusu çözümleri Karaman üretim altyapısıyla sunulur.",
    },
    catalog: {
      title: "ArtıPLAST Katalog | Ürün Kataloğu ve Çözümler",
      description:
        "ArtıPLAST ürün kataloğunu inceleyin. Karaman Türkiye merkezli üreticinin PVC, lambiri ve pervaz çözümlerini profesyonel katalog yapısıyla görüntüleyin veya indirin.",
    },
    info: {
      title: "ArtıPLAST Bilgi | Üretim ve Ürün Bilgilendirme",
      description:
        "ArtıPLAST bilgi sayfasında ürün grupları, üretim yaklaşımı, iletişim süreci ve Karaman Türkiye merkezli üretim yapısı hakkında temel bilgileri hızlıca inceleyin.",
    },
    contact: {
      title: "ArtıPLAST İletişim | Karaman Fabrika İletişim Bilgileri",
      description:
        "ArtıPLAST ile iletişime geçin. Karaman Türkiye fabrikası için telefon, WhatsApp ve adres bilgilerine ulaşın; ürün, proje ve üretim talepleri için doğrudan bağlantı kurun.",
    },
    privacy: {
      title: "ArtıPLAST Gizlilik Politikası | Veri ve Ziyaretçi Gizliliği",
      description:
        "ArtıPLAST gizlilik politikasını inceleyin. Karaman Türkiye merkezli üretici web sitesinde ziyaretçi verileri, kişisel bilgi kullanımı ve veri güvenliği yaklaşımı açıklanır.",
    },
    terms: {
      title: "ArtıPLAST Hizmet Koşulları | Site Kullanım Şartları",
      description:
        "ArtıPLAST hizmet koşullarını inceleyin. Web sitesi kullanımı, içerik hakları, ürün bilgileri ve Karaman Türkiye merkezli üreticinin yasal kullanım şartları bu sayfada yer alır.",
    },
    delivery: {
      title: "ArtıPLAST Teslimat ve Bilgilendirme | Sipariş Süreçleri",
      description:
        "ArtıPLAST teslimat ve bilgilendirme sayfasında sipariş, üretim planlama, lojistik ve müşteri bilgilendirme süreçlerini Karaman Türkiye üretim yapısı kapsamında inceleyin.",
    },
  },
  en: {
    home: {
      title: "ArtıPLAST | PVC and Interior Profile Manufacturer",
      description:
        "ArtıPLAST is a manufacturer based in Karaman, Türkiye, offering export-oriented PVC, ceiling claddings, wall claddings, door claddings, trims, and round profile tube solutions.",
    },
    about: {
      title: "About ArtıPLAST | Manufacturer Based in Karaman",
      description:
        "Learn about ArtıPLAST, a Karaman, Türkiye based manufacturer combining production discipline, interior profile expertise, and international presentation quality for export markets.",
    },
    products: {
      title: "ArtıPLAST Products | PVC, Ceiling and Wall Claddings",
      description:
        "Explore ArtıPLAST product groups including PVC, ceiling claddings, wall claddings, door claddings, door trim, window trim, and round profile tube solutions manufactured in Karaman, Türkiye.",
    },
    catalog: {
      title: "ArtıPLAST Catalog | Product Catalog and Solutions",
      description:
        "Review the ArtıPLAST product catalog. Discover PVC, cladding, trim, and profile solutions from a Karaman, Türkiye based manufacturer with a premium export-ready presentation.",
    },
    info: {
      title: "ArtıPLAST Information | Production and Product Insights",
      description:
        "Find essential information about ArtıPLAST products, production communication, and manufacturer capabilities from Karaman, Türkiye in a clean multilingual format.",
    },
    contact: {
      title: "ArtıPLAST Contact | Karaman Factory Contact Details",
      description:
        "Contact ArtıPLAST directly for product inquiries, factory communication, and export-focused projects. Access phone, WhatsApp, and address details for the Karaman, Türkiye facility.",
    },
    privacy: {
      title: "ArtıPLAST Privacy Policy | Visitor and Data Privacy",
      description:
        "Read the ArtıPLAST privacy policy to understand how visitor data, personal information, and technical analytics are handled on the website of the manufacturer based in Karaman, Türkiye.",
    },
    terms: {
      title: "ArtıPLAST Terms of Service | Website Usage Terms",
      description:
        "Review ArtıPLAST terms of service covering website usage, content rights, product information, and legal conditions for this premium manufacturer website from Karaman, Türkiye.",
    },
    delivery: {
      title: "ArtıPLAST Delivery and Information | Order Processes",
      description:
        "Review ArtıPLAST delivery and information details for order planning, manufacturing timelines, logistics, and customer communication from the Karaman, Türkiye production base.",
    },
  },
  de: {
    home: {
      title: "ArtıPLAST | Hersteller für PVC und Innenprofile",
      description:
        "ArtıPLAST ist ein Hersteller aus Karaman, Türkei, mit exportorientierten Lösungen für PVC, Deckenlambris, Wandlambris, Türlambris, Leisten und Rundprofilrohre.",
    },
    about: {
      title: "Über ArtıPLAST | Hersteller aus Karaman",
      description:
        "Erfahren Sie mehr über ArtıPLAST, einen Hersteller aus Karaman, Türkei, mit Produktionsstärke, klarer Produktkommunikation und hochwertiger internationaler Präsentation.",
    },
    products: {
      title: "ArtıPLAST Produkte | PVC, Decken- und Wandlambris",
      description:
        "Entdecken Sie die Produktgruppen von ArtıPLAST: PVC, Deckenlambris, Wandlambris, Türlambris, Türleisten, Fensterleisten und Rundprofilrohre aus Karaman, Türkei.",
    },
    catalog: {
      title: "ArtıPLAST Katalog | Produktkatalog und Lösungen",
      description:
        "Sehen Sie den ArtıPLAST Produktkatalog ein. Entdecken Sie PVC-, Lambris-, Leisten- und Profil-Lösungen eines Herstellers aus Karaman, Türkei.",
    },
    info: {
      title: "ArtıPLAST Info | Produktion und Produktinformationen",
      description:
        "Erhalten Sie kompakte Informationen über Produkte, Produktionsansatz und Kontaktstruktur von ArtıPLAST, dem Hersteller aus Karaman, Türkei.",
    },
    contact: {
      title: "ArtıPLAST Kontakt | Kontaktdaten der Fabrik in Karaman",
      description:
        "Kontaktieren Sie ArtıPLAST direkt für Produktanfragen, Exportprojekte und Produktionsgespräche. Telefon, WhatsApp und Adressdaten der Fabrik in Karaman, Türkei.",
    },
    privacy: {
      title: "ArtıPLAST Datenschutz | Besucher- und Datensicherheit",
      description:
        "Lesen Sie die Datenschutzrichtlinie von ArtıPLAST über den Umgang mit Besucherdaten, personenbezogenen Informationen und Webanalyse auf der Hersteller-Website aus Karaman, Türkei.",
    },
    terms: {
      title: "ArtıPLAST Nutzungsbedingungen | Website-Bedingungen",
      description:
        "Prüfen Sie die Nutzungsbedingungen von ArtıPLAST zu Website-Inhalten, Produktinformationen und rechtlichen Rahmenbedingungen des Herstellers aus Karaman, Türkei.",
    },
    delivery: {
      title: "ArtıPLAST Lieferung und Information | Bestellprozesse",
      description:
        "Informieren Sie sich über Liefer-, Bestell- und Produktionsprozesse von ArtıPLAST mit Fertigungsstandort in Karaman, Türkei.",
    },
  },
  ar: {
    home: {
      title: "ArtıPLAST | شركة تصنيع PVC وبروفيلات داخلية",
      description:
        "ArtıPLAST شركة تصنيع مقرها كارامان، تركيا، تقدم حلول PVC وكسوات السقف والجدران والأبواب والبروفيلات بطرح إنتاجي جاهز للتصدير.",
    },
    about: {
      title: "عن ArtıPLAST | شركة تصنيع في كارامان",
      description:
        "تعرّف على ArtıPLAST، شركة تصنيع في كارامان، تركيا، تجمع بين قوة الإنتاج، وضوح عرض المنتجات، والحضور الدولي الموثوق.",
    },
    products: {
      title: "منتجات ArtıPLAST | PVC وكسوات السقف والجدران",
      description:
        "استعرض منتجات ArtıPLAST من PVC وكسوات السقف والجدران والأبواب وإطارات الأبواب والنوافذ وأنابيب البروفيل الدائرية المصنّعة في كارامان، تركيا.",
    },
    catalog: {
      title: "كتالوج ArtıPLAST | كتالوج المنتجات والحلول",
      description:
        "اطلع على كتالوج ArtıPLAST لاكتشاف حلول PVC والكسوات والبروفيلات من شركة تصنيع في كارامان، تركيا، بعرض احترافي مناسب للتصدير.",
    },
    info: {
      title: "معلومات ArtıPLAST | معلومات الإنتاج والمنتجات",
      description:
        "راجع معلومات ArtıPLAST الأساسية حول المنتجات، أسلوب التصنيع، والتواصل مع المصنع في كارامان، تركيا.",
    },
    contact: {
      title: "اتصال ArtıPLAST | معلومات مصنع كارامان",
      description:
        "تواصل مع ArtıPLAST مباشرة للحصول على معلومات المنتجات والمشاريع والتصنيع. الهاتف وواتساب والعنوان الخاص بالمصنع في كارامان، تركيا.",
    },
    privacy: {
      title: "سياسة خصوصية ArtıPLAST | خصوصية البيانات والزوار",
      description:
        "توضح سياسة خصوصية ArtıPLAST كيفية جمع بيانات الزوار والمعلومات الشخصية وحمايتها على موقع الشركة المصنعة في كارامان، تركيا.",
    },
    terms: {
      title: "شروط خدمة ArtıPLAST | شروط استخدام الموقع",
      description:
        "راجع شروط خدمة ArtıPLAST المتعلقة باستخدام الموقع وحقوق المحتوى ومعلومات المنتجات للشركة المصنعة في كارامان، تركيا.",
    },
    delivery: {
      title: "تسليم ومعلومات ArtıPLAST | عمليات الطلب",
      description:
        "اطلع على معلومات ArtıPLAST حول التخطيط للإنتاج، الجداول الزمنية، والتسليم والخدمات اللوجستية من قاعدة التصنيع في كارامان، تركيا.",
    },
  },
  az: {
    home: {
      title: "ArtıPLAST | PVC və İnteryer Profil İstehsalçısı",
      description:
        "ArtıPLAST Karaman, Türkiyə mərkəzli istehsalçıdır və PVC, tavan, divar, qapı lambiriləri, pərvaz və kaval borusu həllərini ixrac yönümlü təqdim edir.",
    },
    about: {
      title: "ArtıPLAST Haqqında | Karaman Mərkəzli İstehsalçı",
      description:
        "ArtıPLAST haqqında daha çox öyrənin. Karaman, Türkiyə mərkəzli istehsalçı olaraq məhsul dəqiqliyi, istehsal intizamı və beynəlxalq təqdimat keyfiyyəti təqdim edir.",
    },
    products: {
      title: "ArtıPLAST Məhsullar | PVC, Tavan və Divar Lambiriləri",
      description:
        "ArtıPLAST məhsullarını kəşf edin: PVC, tavan lambiriləri, divar lambiriləri, qapı lambiriləri, qapı və pəncərə pərvazı, həmçinin kaval borusu həlləri.",
    },
    catalog: {
      title: "ArtıPLAST Kataloq | Məhsul Kataloqu və Həllər",
      description:
        "ArtıPLAST məhsul kataloquna baxın. Karaman, Türkiyə mərkəzli istehsalçının PVC və interyer profil həllərini premium kataloq formatında nəzərdən keçirin.",
    },
    info: {
      title: "ArtıPLAST Məlumat | İstehsal və Məhsul Məlumatları",
      description:
        "ArtıPLAST haqqında əsas məlumatları nəzərdən keçirin. Məhsullar, istehsal yanaşması və əlaqə axını Karaman, Türkiyə istehsal bazası ilə təqdim olunur.",
    },
    contact: {
      title: "ArtıPLAST Əlaqə | Karaman Zavod Əlaqə Məlumatları",
      description:
        "ArtıPLAST ilə birbaşa əlaqə saxlayın. Karaman, Türkiyə zavodu üçün telefon, WhatsApp və ünvan məlumatlarını əldə edin.",
    },
    privacy: {
      title: "ArtıPLAST Məxfilik Siyasəti | Ziyarətçi və Məlumat Təhlükəsizliyi",
      description:
        "ArtıPLAST məxfilik siyasəti ziyarətçi məlumatlarının, şəxsi məlumatların və texniki analitikanın necə toplandığını və qorunduğunu izah edir.",
    },
    terms: {
      title: "ArtıPLAST Xidmət Şərtləri | Sayt İstifadə Şərtləri",
      description:
        "ArtıPLAST xidmət şərtlərində sayt istifadəsi, məzmun hüquqları və məhsul məlumatları ilə bağlı əsas hüquqi çərçivəni nəzərdən keçirin.",
    },
    delivery: {
      title: "ArtıPLAST Çatdırılma və Məlumat | Sifariş Prosesləri",
      description:
        "ArtıPLAST sifariş planlaması, istehsal qrafiki, logistika və müştəri məlumatlandırması haqqında məlumatları Karaman, Türkiyə bazası ilə təqdim edir.",
    },
  },
  bg: {
    home: {
      title: "ArtıPLAST | Производител на PVC и Интериорни Профили",
      description:
        "ArtıPLAST е производител от Караман, Турция, предлагащ PVC, таванни, стенни и вратни ламперии, первази и профилни решения с международна ориентация.",
    },
    about: {
      title: "За ArtıPLAST | Производител от Караман",
      description:
        "Научете повече за ArtıPLAST, производител от Караман, Турция, съчетаващ производствена сила, чисто продуктово представяне и надежден международен образ.",
    },
    products: {
      title: "ArtıPLAST Продукти | PVC, Таванни и Стенни Ламперии",
      description:
        "Разгледайте продуктите на ArtıPLAST: PVC, таванни, стенни и вратни ламперии, первази и кръгли профилни тръби, произведени в Караман, Турция.",
    },
    catalog: {
      title: "ArtıPLAST Каталог | Продуктов Каталог и Решения",
      description:
        "Разгледайте продуктовия каталог на ArtıPLAST за PVC, ламперии, первази и профилни решения от производител в Караман, Турция.",
    },
    info: {
      title: "ArtıPLAST Информация | Производство и Продуктова Информация",
      description:
        "Получете основна информация за ArtıPLAST, продуктовите групи, производствения подход и контактната структура на производителя от Караман, Турция.",
    },
    contact: {
      title: "ArtıPLAST Контакт | Данни за Фабриката в Караман",
      description:
        "Свържете се директно с ArtıPLAST за продукти, проекти и производство. Телефон, WhatsApp и адрес на фабриката в Караман, Турция.",
    },
    privacy: {
      title: "ArtıPLAST Политика за Поверителност | Данни и Посетители",
      description:
        "Политиката за поверителност на ArtıPLAST обяснява как се събират, използват и защитават данните на посетителите на сайта на производителя от Караман, Турция.",
    },
    terms: {
      title: "ArtıPLAST Условия за Ползване | Условия на Сайта",
      description:
        "Прегледайте условията за ползване на ArtıPLAST относно съдържание, продуктова информация и правна рамка на сайта на производителя от Караман, Турция.",
    },
    delivery: {
      title: "ArtıPLAST Доставка и Информация | Процеси по Поръчка",
      description:
        "Разгледайте информацията на ArtıPLAST за планиране на поръчки, производство, логистика и клиентска комуникация от базата в Караман, Турция.",
    },
  },
  fr: {
    home: {
      title: "ArtıPLAST | Fabricant de PVC et Profils Intérieurs",
      description:
        "ArtıPLAST est un fabricant basé à Karaman, Turquie, proposant des solutions PVC, lambris plafond, lambris muraux, lambris de porte, moulures et profils pour une présentation export premium.",
    },
    about: {
      title: "À Propos d’ArtıPLAST | Fabricant Basé à Karaman",
      description:
        "Découvrez ArtıPLAST, fabricant basé à Karaman, Turquie, associant puissance de production, clarté produit et crédibilité internationale pour les marchés export.",
    },
    products: {
      title: "ArtıPLAST Produits | PVC, Lambris Plafond et Muraux",
      description:
        "Explorez les produits ArtıPLAST : PVC, lambris de plafond, lambris muraux, lambris de porte, moulures de porte et fenêtre, et tube profilé rond fabriqués à Karaman, Turquie.",
    },
    catalog: {
      title: "ArtıPLAST Catalogue | Catalogue Produits et Solutions",
      description:
        "Consultez le catalogue ArtıPLAST pour découvrir des solutions PVC, lambris, moulures et profils issues d’un fabricant basé à Karaman, Turquie.",
    },
    info: {
      title: "ArtıPLAST Infos | Production et Informations Produits",
      description:
        "Accédez aux informations essentielles sur ArtıPLAST, sa structure de production, ses groupes de produits et son approche de communication depuis Karaman, Turquie.",
    },
    contact: {
      title: "ArtıPLAST Contact | Coordonnées de l’Usine de Karaman",
      description:
        "Contactez ArtıPLAST directement pour vos demandes produits, projets et production. Téléphone, WhatsApp et adresse de l’usine à Karaman, Turquie.",
    },
    privacy: {
      title: "ArtıPLAST Politique de Confidentialité | Données et Visiteurs",
      description:
        "La politique de confidentialité d’ArtıPLAST explique comment les données visiteurs, informations personnelles et données techniques sont traitées sur le site du fabricant basé à Karaman, Turquie.",
    },
    terms: {
      title: "ArtıPLAST Conditions de Service | Conditions du Site",
      description:
        "Consultez les conditions de service ArtıPLAST relatives à l’utilisation du site, aux contenus et aux informations produits du fabricant basé à Karaman, Turquie.",
    },
    delivery: {
      title: "ArtıPLAST Livraison et Information | Processus de Commande",
      description:
        "Découvrez les informations ArtıPLAST sur la planification des commandes, la production, la logistique et l’accompagnement client depuis Karaman, Turquie.",
    },
  },
  ru: {
    home: {
      title: "ArtıPLAST | Производитель PVC и Интерьерных Профилей",
      description:
        "ArtıPLAST — производитель из Карамана, Турция, предлагающий PVC, потолочные, стеновые и дверные ламбрии, наличники и профильные решения с экспортной подачей.",
    },
    about: {
      title: "О ArtıPLAST | Производитель из Карамана",
      description:
        "Узнайте больше об ArtıPLAST, производителе из Карамана, Турция, сочетающем производственную мощность, понятную продуктовую коммуникацию и международный уровень презентации.",
    },
    products: {
      title: "Продукция ArtıPLAST | PVC, Потолочные и Стеновые Ламбрии",
      description:
        "Изучите продукцию ArtıPLAST: PVC, потолочные, стеновые и дверные ламбрии, дверные и оконные наличники, а также круглые профильные трубы, произведенные в Карамане, Турция.",
    },
    catalog: {
      title: "Каталог ArtıPLAST | Каталог Продукции и Решений",
      description:
        "Ознакомьтесь с каталогом ArtıPLAST и изучите решения по PVC, ламбриям, наличникам и профилям от производителя из Карамана, Турция.",
    },
    info: {
      title: "ArtıPLAST Информация | Производство и Продуктовая Экспертиза",
      description:
        "Получите основную информацию о продукции, производственном подходе и коммуникации ArtıPLAST, производителя из Карамана, Турция.",
    },
    contact: {
      title: "ArtıPLAST Контакты | Контакты Завода в Карамане",
      description:
        "Свяжитесь с ArtıPLAST напрямую по вопросам продукции, проектов и производства. Телефон, WhatsApp и адрес завода в Карамане, Турция.",
    },
    privacy: {
      title: "ArtıPLAST Политика Конфиденциальности | Данные и Посетители",
      description:
        "Политика конфиденциальности ArtıPLAST объясняет, как обрабатываются данные посетителей, персональная информация и технические данные на сайте производителя из Карамана, Турция.",
    },
    terms: {
      title: "ArtıPLAST Условия Обслуживания | Условия Использования Сайта",
      description:
        "Изучите условия обслуживания ArtıPLAST, касающиеся использования сайта, прав на контент и продуктовой информации производителя из Карамана, Турция.",
    },
    delivery: {
      title: "ArtıPLAST Доставка и Информация | Процессы Заказа",
      description:
        "Ознакомьтесь с информацией ArtıPLAST о планировании заказов, производстве, логистике и клиентском сопровождении на базе в Карамане, Турция.",
    },
  },
};

export const ogLocaleByLocale: Record<Locale, string> = {
  tr: "tr_TR",
  en: "en_US",
  de: "de_DE",
  ar: "ar_SA",
  az: "az_AZ",
  bg: "bg_BG",
  fr: "fr_FR",
  ru: "ru_RU",
};

export function getSeoEntry(locale: Locale, page: SeoPageKey) {
  return seoContent[locale][page];
}

export function getLanguageAlternates(path: string) {
  const languages = Object.fromEntries(
    locales.map((locale) => [locale, `${SITE_URL}${localizedPath(locale, path)}`]),
  );

  return {
    ...languages,
    "x-default": `${SITE_URL}${localizedPath(defaultLocale, path)}`,
  };
}

export function getSeoSchemas(locale: Locale) {
  const localizedHomeUrl = `${SITE_URL}${localizedPath(locale)}`;
  const homeDescription = getSeoEntry(locale, "home").description;

  return [
    {
      "@context": "https://schema.org",
      "@type": "Organization",
      name: SEO_BRAND_NAME,
      url: SITE_URL,
      logo: `${SITE_URL}/logo/logo.jpg`,
      description: homeDescription,
      telephone: PHONE_E164,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Organize Sanayi Bölgesi 6. Sokak No:7",
        addressLocality: "Merkez Karaman",
        addressRegion: "Karaman",
        postalCode: "70100",
        addressCountry: "TR",
      },
      contactPoint: [
        {
          "@type": "ContactPoint",
          contactType: "sales",
          telephone: PHONE_E164,
          availableLanguage: locales,
          url: `${SITE_URL}${localizedPath(locale, "/contact")}`,
        },
      ],
    },
    {
      "@context": "https://schema.org",
      "@type": "WebSite",
      name: SEO_BRAND_NAME,
      url: localizedHomeUrl,
      inLanguage: locale,
      description: homeDescription,
      potentialAction: {
        "@type": "SearchAction",
        target: `${localizedHomeUrl}?q={search_term_string}`,
        "query-input": "required name=search_term_string",
      },
    },
    {
      "@context": "https://schema.org",
      "@type": "LocalBusiness",
      name: SEO_BRAND_NAME,
      image: `${SITE_URL}/logo/logo.jpg`,
      url: localizedHomeUrl,
      telephone: PHONE_E164,
      address: {
        "@type": "PostalAddress",
        streetAddress: "Organize Sanayi Bölgesi 6. Sokak No:7",
        addressLocality: "Merkez Karaman",
        addressRegion: "Karaman",
        postalCode: "70100",
        addressCountry: "TR",
      },
      areaServed: ["Türkiye", "Europe", "Middle East"],
      description: homeDescription,
      makesOffer: [
        "PVC",
        "Tavan Lambirileri",
        "Duvar Lambirileri",
        "Kapı Lambirileri",
        "Kapı Pervazı",
        "Pencere Pervazı",
        "Kaval Borusu",
      ],
      sameAs: [WHATSAPP_LINK],
    },
  ];
}

export const manufacturerRobots = {
  index: true,
  follow: true,
  googleBot: {
    index: true,
    follow: true,
    "max-image-preview": "large" as const,
    "max-snippet": -1,
    "max-video-preview": -1,
  },
};
