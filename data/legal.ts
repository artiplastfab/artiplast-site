import { localizedPath, type Locale } from "@/lib/i18n";

export type LegalKey = "privacy" | "terms" | "delivery";

const legalDictionary: Record<
  Locale,
  {
    sectionTitle: string;
    labels: Record<LegalKey, string>;
    pages: Record<LegalKey, { title: string; description: string; paragraphs: string[] }>;
  }
> = {
  tr: {
    sectionTitle: "Yasal",
    labels: {
      privacy: "Gizlilik Politikası",
      terms: "Hizmet Koşulları",
      delivery: "Teslimat ve Bilgilendirme",
    },
    pages: {
      privacy: {
        title: "Gizlilik Politikası",
        description: "ArtıPLAST web sitesi ziyaretçilerine yönelik temel gizlilik bilgilendirmesi.",
        paragraphs: [
          "ArtıPLAST, iletişim formları ve temel ziyaret etkileşimleri üzerinden paylaşılan bilgileri yalnızca müşteri iletişimi ve teklif süreçlerini desteklemek amacıyla değerlendirir.",
          "Kişisel veriler, yürürlükteki mevzuata uygun şekilde korunur ve talep halinde güncelleme veya silme süreçleri başlatılabilir.",
        ],
      },
      terms: {
        title: "Hizmet Koşulları",
        description: "ArtıPLAST web sitesi ve içeriklerinin kullanımına ilişkin genel koşullar.",
        paragraphs: [
          "Sitede yer alan ürün, görsel ve kurumsal içerikler bilgilendirme amaçlıdır; teknik detaylar ve özel üretim koşulları teklif aşamasında ayrıca netleştirilir.",
          "ArtıPLAST, içerikleri önceden bildirim yapmadan güncelleme hakkını saklı tutar ve tüm marka unsurları ilgili haklar kapsamında korunur.",
        ],
      },
      delivery: {
        title: "Teslimat ve Bilgilendirme",
        description: "Sipariş, üretim ve bilgilendirme süreçlerine dair kısa açıklama.",
        paragraphs: [
          "Teslimat planlaması ürün grubu, miktar, özel üretim ihtiyacı ve sevkiyat bölgesine göre teklif sürecinde belirlenir.",
          "Net termin, paketleme ve sevkiyat detayları, müşteri talebi doğrultusunda satış ekibi tarafından yazılı olarak paylaşılır.",
        ],
      },
    },
  },
  en: {
    sectionTitle: "Legal",
    labels: {
      privacy: "Privacy Policy",
      terms: "Terms of Service",
      delivery: "Delivery & Information",
    },
    pages: {
      privacy: {
        title: "Privacy Policy",
        description: "Essential privacy information for visitors of the ArtıPLAST website.",
        paragraphs: [
          "ArtıPLAST reviews information shared through contact forms and basic site interactions only to support communication and quotation processes.",
          "Personal data is protected in line with applicable regulations, and update or deletion requests can be initiated when needed.",
        ],
      },
      terms: {
        title: "Terms of Service",
        description: "General conditions for using the ArtıPLAST website and its content.",
        paragraphs: [
          "Product, visual, and corporate content presented on the site is for information purposes; technical details and custom production terms are confirmed during quotation.",
          "ArtıPLAST reserves the right to update content without prior notice, and all brand assets remain protected under applicable rights.",
        ],
      },
      delivery: {
        title: "Delivery & Information",
        description: "A concise note on ordering, production, and delivery communication.",
        paragraphs: [
          "Delivery planning is defined during the quotation stage according to product group, quantity, custom production needs, and shipment region.",
          "Lead time, packaging, and shipment details are shared in writing by the sales team based on customer requirements.",
        ],
      },
    },
  },
  de: {
    sectionTitle: "Rechtliches",
    labels: {
      privacy: "Datenschutz",
      terms: "Nutzungsbedingungen",
      delivery: "Lieferung & Information",
    },
    pages: {
      privacy: {
        title: "Datenschutz",
        description: "Wesentliche Datenschutzinformationen für Besucher der ArtıPLAST-Website.",
        paragraphs: [
          "ArtıPLAST verarbeitet Informationen aus Kontaktformularen und grundlegenden Website-Interaktionen ausschließlich zur Unterstützung von Kommunikation und Angebotsprozessen.",
          "Personenbezogene Daten werden gemäß den geltenden Vorschriften geschützt; Aktualisierung oder Löschung kann bei Bedarf angefragt werden.",
        ],
      },
      terms: {
        title: "Nutzungsbedingungen",
        description: "Allgemeine Bedingungen für die Nutzung der ArtıPLAST-Website und ihrer Inhalte.",
        paragraphs: [
          "Produkt-, Bild- und Unternehmensinhalte auf der Website dienen der Information; technische Details und Sonderfertigungen werden im Angebotsprozess bestätigt.",
          "ArtıPLAST behält sich das Recht vor, Inhalte ohne vorherige Ankündigung zu aktualisieren; alle Markenelemente bleiben rechtlich geschützt.",
        ],
      },
      delivery: {
        title: "Lieferung & Information",
        description: "Kurze Informationen zu Bestellung, Produktion und Lieferung.",
        paragraphs: [
          "Die Lieferplanung wird im Angebotsprozess nach Produktgruppe, Menge, Sonderfertigung und Versandregion festgelegt.",
          "Lieferzeit, Verpackung und Versanddetails werden vom Vertrieb schriftlich entsprechend den Kundenanforderungen mitgeteilt.",
        ],
      },
    },
  },
  ar: {
    sectionTitle: "قانوني",
    labels: {
      privacy: "سياسة الخصوصية",
      terms: "شروط الخدمة",
      delivery: "التسليم والمعلومات",
    },
    pages: {
      privacy: {
        title: "سياسة الخصوصية",
        description: "معلومات أساسية عن الخصوصية لزوار موقع ArtıPLAST.",
        paragraphs: [
          "تقوم ArtıPLAST بمعالجة المعلومات المرسلة عبر نماذج التواصل والتفاعلات الأساسية فقط لدعم التواصل وعمليات تقديم العروض.",
          "يتم حماية البيانات الشخصية وفقًا للأنظمة المعمول بها ويمكن طلب التحديث أو الحذف عند الحاجة.",
        ],
      },
      terms: {
        title: "شروط الخدمة",
        description: "الشروط العامة لاستخدام موقع ArtıPLAST ومحتواه.",
        paragraphs: [
          "المحتوى الخاص بالمنتجات والصور والمواد المؤسسية المعروض في الموقع هو لأغراض تعريفية، ويتم تأكيد التفاصيل الفنية وشروط الإنتاج الخاص أثناء مرحلة العرض.",
          "تحتفظ ArtıPLAST بحق تحديث المحتوى دون إشعار مسبق، كما تبقى جميع عناصر العلامة التجارية محمية وفق الحقوق المعمول بها.",
        ],
      },
      delivery: {
        title: "التسليم والمعلومات",
        description: "موجز عن الطلب والإنتاج والتواصل الخاص بالتسليم.",
        paragraphs: [
          "يتم تحديد خطة التسليم خلال مرحلة العرض حسب مجموعة المنتج والكمية واحتياجات الإنتاج الخاص ومنطقة الشحن.",
          "يتم إرسال تفاصيل المدة والتغليف والشحن كتابيًا من قبل فريق المبيعات وفقًا لاحتياجات العميل.",
        ],
      },
    },
  },
  az: {
    sectionTitle: "Hüquqi",
    labels: {
      privacy: "Məxfilik Siyasəti",
      terms: "Xidmət Şərtləri",
      delivery: "Çatdırılma və Məlumat",
    },
    pages: {
      privacy: {
        title: "Məxfilik Siyasəti",
        description: "ArtıPLAST veb-saytı ziyarətçiləri üçün əsas məxfilik məlumatı.",
        paragraphs: [
          "ArtıPLAST əlaqə formaları və əsas sayt qarşılıqlı təsirləri vasitəsilə paylaşılan məlumatları yalnız əlaqə və təklif proseslərini dəstəkləmək üçün dəyərləndirir.",
          "Şəxsi məlumatlar qüvvədə olan qaydalara uyğun qorunur və lazım olduqda yenilənmə və ya silinmə sorğusu başlada bilər.",
        ],
      },
      terms: {
        title: "Xidmət Şərtləri",
        description: "ArtıPLAST veb-saytı və məzmununun istifadəsinə dair ümumi şərtlər.",
        paragraphs: [
          "Saytda yer alan məhsul, vizual və korporativ məzmun məlumat xarakterlidir; texniki detallar və xüsusi istehsal şərtləri təklif mərhələsində təsdiqlənir.",
          "ArtıPLAST əvvəlcədən xəbərdarlıq etmədən məzmunu yeniləmək hüququnu saxlayır və bütün brend elementləri müvafiq hüquqlarla qorunur.",
        ],
      },
      delivery: {
        title: "Çatdırılma və Məlumat",
        description: "Sifariş, istehsal və çatdırılma barədə qısa məlumat.",
        paragraphs: [
          "Çatdırılma planı məhsul qrupu, həcm, xüsusi istehsal ehtiyacı və göndəriş bölgəsinə görə təklif mərhələsində müəyyən edilir.",
          "Müddət, qablaşdırma və göndəriş detalları satış komandası tərəfindən yazılı şəkildə paylaşılır.",
        ],
      },
    },
  },
  bg: {
    sectionTitle: "Правни",
    labels: {
      privacy: "Политика за поверителност",
      terms: "Условия за ползване",
      delivery: "Доставка и информация",
    },
    pages: {
      privacy: {
        title: "Политика за поверителност",
        description: "Основна информация за поверителност за посетителите на сайта на ArtıPLAST.",
        paragraphs: [
          "ArtıPLAST обработва информацията, споделена чрез формите за контакт и основните взаимодействия със сайта, само за подпомагане на комуникацията и офертните процеси.",
          "Личните данни се защитават съгласно приложимите разпоредби и при нужда може да бъде заявено актуализиране или изтриване.",
        ],
      },
      terms: {
        title: "Условия за ползване",
        description: "Общи условия за използване на сайта на ArtıPLAST и неговото съдържание.",
        paragraphs: [
          "Продуктовото, визуалното и корпоративното съдържание на сайта е с информативна цел; техническите детайли и условията за специално производство се уточняват в етапа на офериране.",
          "ArtıPLAST си запазва правото да актуализира съдържанието без предизвестие и всички елементи на марката остават защитени.",
        ],
      },
      delivery: {
        title: "Доставка и информация",
        description: "Кратка информация за поръчка, производство и доставка.",
        paragraphs: [
          "Планирането на доставката се определя на етап оферта според продуктовата група, количеството, специалното производство и региона на доставка.",
          "Срокът, опаковката и детайлите по изпращането се предоставят писмено от търговския екип според нуждите на клиента.",
        ],
      },
    },
  },
  fr: {
    sectionTitle: "Mentions légales",
    labels: {
      privacy: "Politique de confidentialité",
      terms: "Conditions de service",
      delivery: "Livraison et information",
    },
    pages: {
      privacy: {
        title: "Politique de confidentialité",
        description: "Informations essentielles sur la confidentialité pour les visiteurs du site ArtıPLAST.",
        paragraphs: [
          "ArtıPLAST traite les informations partagées via les formulaires de contact et les interactions de base du site uniquement pour soutenir la communication et les demandes d’offre.",
          "Les données personnelles sont protégées conformément à la réglementation applicable et une demande de mise à jour ou de suppression peut être initiée si nécessaire.",
        ],
      },
      terms: {
        title: "Conditions de service",
        description: "Conditions générales d’utilisation du site ArtıPLAST et de son contenu.",
        paragraphs: [
          "Les contenus produits, visuels et institutionnels présentés sur le site sont fournis à titre informatif ; les détails techniques et les conditions de fabrication spéciale sont confirmés lors du devis.",
          "ArtıPLAST se réserve le droit de mettre à jour le contenu sans préavis et l’ensemble des éléments de marque restent protégés.",
        ],
      },
      delivery: {
        title: "Livraison et information",
        description: "Bref aperçu des commandes, de la production et de la communication logistique.",
        paragraphs: [
          "La planification de la livraison est définie pendant le devis selon la famille de produits, la quantité, les besoins spécifiques et la région d’expédition.",
          "Les délais, l’emballage et les détails d’expédition sont communiqués par écrit par l’équipe commerciale selon les besoins du client.",
        ],
      },
    },
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
