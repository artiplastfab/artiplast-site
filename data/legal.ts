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

const legalDictionary: Record<Locale, LegalDictionaryEntry> = {
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
        description:
          "ArtıPLAST olarak ziyaretçilerimizin gizliliğini korumayı taahhüt ederiz. Bu politika, web sitemizi ziyaret ettiğinizde hangi bilgilerin toplandığını, nasıl kullanıldığını ve nasıl korunduğunu açıklar.",
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
        description:
          "Bu web sitesini kullanan tüm ziyaretçiler aşağıdaki şartları kabul etmiş sayılır.",
        blocks: [
          {
            type: "paragraph",
            content:
              "Bu web sitesini kullanan tüm ziyaretçiler aşağıdaki şartları kabul etmiş sayılır.",
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
            paragraphs: ["Site içeriği ve tasarımının tüm hakları ArtıPLAST’a aittir."],
          },
        ],
      },
      delivery: {
        title: "Teslimat ve Bilgilendirme",
        description:
          "ArtıPLAST ürünleri sipariş ve üretim süreçlerine bağlı olarak müşterilere ulaştırılmaktadır.",
        blocks: [
          {
            type: "paragraph",
            content:
              "ArtıPLAST ürünleri sipariş ve üretim süreçlerine bağlı olarak müşterilere ulaştırılmaktadır.",
          },
          {
            type: "section",
            title: "Sipariş Süreci",
            paragraphs: ["Ürünler sipariş üzerine üretilebilir ve talepler doğrultusunda planlanır."],
          },
          {
            type: "section",
            title: "Teslimat Süreci",
            paragraphs: ["Teslimatlar anlaşmalı lojistik firmaları aracılığıyla yapılır."],
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
    },
  },
  en: { sectionTitle: "Legal", labels: { privacy: "Privacy Policy", terms: "Terms of Service", delivery: "Delivery & Information" }, pages: { privacy: { title: "Privacy Policy", description: "At ArtıPLAST, we are committed to protecting the privacy of our visitors. This policy explains what information is collected, how it is used, and how it is protected when you visit our website.", blocks: [{ type: "paragraph", content: "At ArtıPLAST, we are committed to protecting the privacy of our visitors. This policy explains what information is collected, how it is used, and how it is protected when you visit our website." }, { type: "section", title: "Collected Data", paragraphs: ["When you visit our website, technical data such as IP address, browser type, visit duration, and page views may be collected automatically. This information is used for system security and analytics."] }, { type: "section", title: "Personal Data", paragraphs: ["Your name, surname, phone number, and email address shared through contact forms or direct communication are used only to communicate with you."] }, { type: "section", title: "Purposes of Use", items: ["Responding to customer requests", "Improving service quality", "Analyzing website performance"] }, { type: "section", title: "Data Security", paragraphs: ["Your personal data is stored in secure systems and is not shared with third parties. It may only be shared with official authorities when legally required."] }, { type: "section", title: "Your Rights", paragraphs: ["You have the right to request information about your personal data and to ask for correction or deletion."] }, { type: "section", title: "Contact", paragraphs: ["You may contact us for all privacy-related questions."] }] }, terms: { title: "Terms of Service", description: "All visitors using this website are deemed to have accepted the following terms.", blocks: [{ type: "paragraph", content: "All visitors using this website are deemed to have accepted the following terms." }, { type: "section", title: "Terms of Use", paragraphs: ["The content of the website is for informational purposes only. It may not be copied, reproduced, or used commercially without permission."] }, { type: "section", title: "Disclaimer", paragraphs: ["ArtıPLAST takes utmost care regarding the accuracy of the information on the website but accepts no liability for possible errors."] }, { type: "section", title: "Product Information", paragraphs: ["Product visuals and descriptions are representative. Technical specifications may be changed."] }, { type: "section", title: "Third-Party Links", paragraphs: ["External links on the website may direct users to third-party sites. ArtıPLAST is not responsible for the content of those sites."] }, { type: "section", title: "Right to Modify", paragraphs: ["ArtıPLAST reserves the right to modify these terms of service without prior notice."] }, { type: "section", title: "Legal Rights", paragraphs: ["All rights to the website content and design belong to ArtıPLAST."] }] }, delivery: { title: "Delivery & Information", description: "ArtıPLAST products are delivered to customers in line with order and production processes.", blocks: [{ type: "paragraph", content: "ArtıPLAST products are delivered to customers in line with order and production processes." }, { type: "section", title: "Order Process", paragraphs: ["Products may be manufactured upon order and are scheduled according to demand."] }, { type: "section", title: "Delivery Process", paragraphs: ["Deliveries are made through contracted logistics companies."] }, { type: "section", title: "Delivery Time", paragraphs: ["Delivery time may vary depending on order quantity, production planning, and stock availability."] }, { type: "section", title: "Responsibility", paragraphs: ["ArtıPLAST is not responsible for delays that may occur during cargo and logistics processes."] }, { type: "section", title: "Information", paragraphs: ["Customers are informed throughout the order process and necessary support is provided."] }, { type: "section", title: "Contact", paragraphs: ["You may contact us to receive information about delivery and order processes."] }] } } },
  de: { sectionTitle: "Rechtliches", labels: { privacy: "Datenschutz", terms: "Nutzungsbedingungen", delivery: "Lieferung & Information" }, pages: { privacy: { title: "Datenschutz", description: "Als ArtıPLAST verpflichten wir uns, die Privatsphäre unserer Besucher zu schützen. Diese Richtlinie erläutert, welche Informationen erhoben, wie sie verwendet und wie sie geschützt werden.", blocks: [{ type: "paragraph", content: "Als ArtıPLAST verpflichten wir uns, die Privatsphäre unserer Besucher zu schützen. Diese Richtlinie erläutert, welche Informationen erhoben, wie sie verwendet und wie sie geschützt werden." }, { type: "section", title: "Erhobene Daten", paragraphs: ["Beim Besuch unserer Website können technische Daten wie IP-Adresse, Browsertyp, Besuchsdauer und Seitenaufrufe automatisch erfasst werden."] }, { type: "section", title: "Personenbezogene Daten", paragraphs: ["Name, Nachname, Telefonnummer und E-Mail-Adresse werden nur zur Kontaktaufnahme verwendet."] }, { type: "section", title: "Verwendungszwecke", items: ["Beantwortung von Kundenanfragen", "Verbesserung der Servicequalität", "Analyse der Website-Leistung"] }, { type: "section", title: "Datensicherheit", paragraphs: ["Ihre personenbezogenen Daten werden in sicheren Systemen gespeichert und nicht an Dritte weitergegeben, außer bei gesetzlicher Verpflichtung."] }, { type: "section", title: "Ihre Rechte", paragraphs: ["Sie können Auskunft, Berichtigung oder Löschung Ihrer Daten verlangen."] }, { type: "section", title: "Kontakt", paragraphs: ["Für alle Fragen zum Datenschutz können Sie uns kontaktieren."] }] }, terms: { title: "Nutzungsbedingungen", description: "Alle Besucher dieser Website gelten als mit den folgenden Bedingungen einverstanden.", blocks: [{ type: "paragraph", content: "Alle Besucher dieser Website gelten als mit den folgenden Bedingungen einverstanden." }, { type: "section", title: "Nutzungsbedingungen", paragraphs: ["Die Inhalte dienen nur zu Informationszwecken und dürfen ohne Erlaubnis nicht kopiert oder kommerziell genutzt werden."] }, { type: "section", title: "Haftungsausschluss", paragraphs: ["ArtıPLAST achtet auf die Richtigkeit der Inhalte, übernimmt jedoch keine Haftung für mögliche Fehler."] }, { type: "section", title: "Produktinformationen", paragraphs: ["Produktbilder und Beschreibungen sind repräsentativ. Technische Angaben können sich ändern."] }, { type: "section", title: "Links Dritter", paragraphs: ["Externe Links können auf Websites Dritter führen. ArtıPLAST ist nicht für deren Inhalte verantwortlich."] }, { type: "section", title: "Änderungsrecht", paragraphs: ["ArtıPLAST behält sich das Recht vor, diese Bedingungen ohne vorherige Ankündigung zu ändern."] }, { type: "section", title: "Rechte", paragraphs: ["Alle Rechte an Inhalt und Design der Website gehören ArtıPLAST."] }] }, delivery: { title: "Lieferung & Information", description: "ArtıPLAST-Produkte werden entsprechend der Bestell- und Produktionsprozesse an Kunden geliefert.", blocks: [{ type: "paragraph", content: "ArtıPLAST-Produkte werden entsprechend der Bestell- und Produktionsprozesse an Kunden geliefert." }, { type: "section", title: "Bestellprozess", paragraphs: ["Produkte können auf Bestellung gefertigt und nach Bedarf geplant werden."] }, { type: "section", title: "Lieferprozess", paragraphs: ["Die Lieferung erfolgt über vertraglich gebundene Logistikunternehmen."] }, { type: "section", title: "Lieferzeit", paragraphs: ["Die Lieferzeit kann je nach Bestellmenge, Produktionsplanung und Lagerbestand variieren."] }, { type: "section", title: "Verantwortung", paragraphs: ["ArtıPLAST ist nicht für Verzögerungen im Fracht- und Logistikprozess verantwortlich."] }, { type: "section", title: "Information", paragraphs: ["Kunden werden während des gesamten Bestellprozesses informiert und unterstützt."] }, { type: "section", title: "Kontakt", paragraphs: ["Für Informationen zu Lieferung und Bestellung können Sie uns kontaktieren."] }] } } },
  ar: { sectionTitle: "قانوني", labels: { privacy: "سياسة الخصوصية", terms: "شروط الخدمة", delivery: "التسليم والمعلومات" }, pages: { privacy: { title: "سياسة الخصوصية", description: "في ArtıPLAST نلتزم بحماية خصوصية زوارنا. توضح هذه السياسة ما يتم جمعه من معلومات وكيفية استخدامها وحمايتها.", blocks: [{ type: "paragraph", content: "في ArtıPLAST نلتزم بحماية خصوصية زوارنا. توضح هذه السياسة ما يتم جمعه من معلومات وكيفية استخدامها وحمايتها." }, { type: "section", title: "البيانات المجمعة", paragraphs: ["قد يتم جمع بيانات تقنية مثل عنوان IP ونوع المتصفح ومدة الزيارة والصفحات التي تمت مشاهدتها تلقائيًا."] }, { type: "section", title: "البيانات الشخصية", paragraphs: ["يتم استخدام الاسم واللقب والهاتف والبريد الإلكتروني فقط للتواصل معكم."] }, { type: "section", title: "أغراض الاستخدام", items: ["الرد على طلبات العملاء", "تحسين جودة الخدمة", "تحليل أداء الموقع"] }, { type: "section", title: "أمن البيانات", paragraphs: ["تُحفظ بياناتكم في أنظمة آمنة ولا تتم مشاركتها مع أطراف ثالثة إلا عند وجود التزام قانوني."] }, { type: "section", title: "حقوقكم", paragraphs: ["يمكنكم طلب معلومات عن بياناتكم أو طلب تصحيحها أو حذفها."] }, { type: "section", title: "التواصل", paragraphs: ["يمكنكم التواصل معنا لجميع الأسئلة المتعلقة بالخصوصية."] }] }, terms: { title: "شروط الخدمة", description: "يُعتبر جميع مستخدمي هذا الموقع موافقين على الشروط التالية.", blocks: [{ type: "paragraph", content: "يُعتبر جميع مستخدمي هذا الموقع موافقين على الشروط التالية." }, { type: "section", title: "شروط الاستخدام", paragraphs: ["يُعرض محتوى الموقع لأغراض معلوماتية فقط ولا يجوز نسخه أو استخدامه تجاريًا دون إذن."] }, { type: "section", title: "إخلاء المسؤولية", paragraphs: ["تبذل ArtıPLAST أقصى العناية في دقة المعلومات لكنها لا تتحمل المسؤولية عن الأخطاء المحتملة."] }, { type: "section", title: "معلومات المنتجات", paragraphs: ["صور المنتجات ووصفها تمثيلية وقد يتم تعديل المواصفات الفنية."] }, { type: "section", title: "روابط خارجية", paragraphs: ["قد تؤدي الروابط الخارجية إلى مواقع أخرى ولا تتحمل ArtıPLAST مسؤولية محتواها."] }, { type: "section", title: "حق التعديل", paragraphs: ["تحتفظ ArtıPLAST بحق تعديل هذه الشروط دون إشعار مسبق."] }, { type: "section", title: "الحقوق القانونية", paragraphs: ["تعود جميع حقوق المحتوى والتصميم إلى ArtıPLAST."] }] }, delivery: { title: "التسليم والمعلومات", description: "يتم تسليم منتجات ArtıPLAST وفقًا لعمليات الطلب والإنتاج.", blocks: [{ type: "paragraph", content: "يتم تسليم منتجات ArtıPLAST وفقًا لعمليات الطلب والإنتاج." }, { type: "section", title: "عملية الطلب", paragraphs: ["يمكن إنتاج المنتجات حسب الطلب ويتم التخطيط لها وفق المتطلبات."] }, { type: "section", title: "عملية التسليم", paragraphs: ["تتم عمليات التسليم عبر شركات لوجستية متعاقد معها."] }, { type: "section", title: "مدة التسليم", paragraphs: ["قد تختلف مدة التسليم حسب الكمية وخطة الإنتاج والمخزون."] }, { type: "section", title: "المسؤولية", paragraphs: ["لا تتحمل ArtıPLAST مسؤولية التأخير في عمليات الشحن والخدمات اللوجستية."] }, { type: "section", title: "المعلومات", paragraphs: ["يتم تزويد العملاء بالمعلومات اللازمة طوال عملية الطلب."] }, { type: "section", title: "التواصل", paragraphs: ["يمكنكم التواصل معنا للحصول على معلومات عن الطلبات والتسليم."] }] } } },
  az: { sectionTitle: "Hüquqi", labels: { privacy: "Məxfilik Siyasəti", terms: "Xidmət Şərtləri", delivery: "Çatdırılma və Məlumat" }, pages: { privacy: { title: "Məxfilik Siyasəti", description: "ArtıPLAST olaraq ziyarətçilərimizin məxfiliyini qoruyuruq. Bu siyasət hansı məlumatların toplandığını, necə istifadə edildiyini və necə qorunduğunu izah edir.", blocks: [{ type: "paragraph", content: "ArtıPLAST olaraq ziyarətçilərimizin məxfiliyini qoruyuruq. Bu siyasət hansı məlumatların toplandığını, necə istifadə edildiyini və necə qorunduğunu izah edir." }, { type: "section", title: "Toplanan Məlumatlar", paragraphs: ["IP ünvanı, brauzer növü, ziyarət müddəti və səhifə baxışları kimi texniki məlumatlar avtomatik toplanıla bilər."] }, { type: "section", title: "Şəxsi Məlumatlar", paragraphs: ["Ad, soyad, telefon və e-poçt məlumatları yalnız sizinlə əlaqə yaratmaq üçün istifadə olunur."] }, { type: "section", title: "İstifadə Məqsədləri", items: ["Müştəri sorğularını cavablandırmaq", "Xidmət keyfiyyətini artırmaq", "Veb-sayt performansını analiz etmək"] }, { type: "section", title: "Məlumat Təhlükəsizliyi", paragraphs: ["Şəxsi məlumatlar təhlükəsiz sistemlərdə saxlanılır və qanuni zərurət istisna olmaqla üçüncü şəxslərlə paylaşılmır."] }, { type: "section", title: "Hüquqlarınız", paragraphs: ["Məlumat tələb etmək, düzəliş və ya silinmə istəmək hüququnuz var."] }, { type: "section", title: "Əlaqə", paragraphs: ["Məxfiliklə bağlı bütün suallar üçün bizimlə əlaqə saxlaya bilərsiniz."] }] }, terms: { title: "Xidmət Şərtləri", description: "Bu veb-saytdan istifadə edən bütün ziyarətçilər aşağıdakı şərtləri qəbul etmiş sayılır.", blocks: [{ type: "paragraph", content: "Bu veb-saytdan istifadə edən bütün ziyarətçilər aşağıdakı şərtləri qəbul etmiş sayılır." }, { type: "section", title: "İstifadə Şərtləri", paragraphs: ["Sayt məzmunu yalnız məlumat xarakterlidir və icazəsiz kommersiya məqsədi ilə istifadə edilə bilməz."] }, { type: "section", title: "Məsuliyyətdən İmtina", paragraphs: ["ArtıPLAST məlumatların düzgünlüyünə diqqət göstərir, lakin mümkün xətalara görə məsuliyyət daşımır."] }, { type: "section", title: "Məhsul Məlumatları", paragraphs: ["Məhsul şəkilləri və açıqlamaları təmsilidir. Texniki xüsusiyyətlər dəyişə bilər."] }, { type: "section", title: "Üçüncü Tərəf Keçidləri", paragraphs: ["Xarici keçidlər üçüncü tərəf saytlarına yönləndirə bilər. ArtıPLAST həmin məzmuna görə məsuliyyət daşımır."] }, { type: "section", title: "Dəyişiklik Hüququ", paragraphs: ["ArtıPLAST bu şərtləri əvvəlcədən xəbərdarlıq etmədən dəyişdirmək hüququnu saxlayır."] }, { type: "section", title: "Hüquqi Haqlar", paragraphs: ["Sayt məzmunu və dizaynının bütün hüquqları ArtıPLAST-a məxsusdur."] }] }, delivery: { title: "Çatdırılma və Məlumat", description: "ArtıPLAST məhsulları sifariş və istehsal proseslərinə uyğun olaraq çatdırılır.", blocks: [{ type: "paragraph", content: "ArtıPLAST məhsulları sifariş və istehsal proseslərinə uyğun olaraq çatdırılır." }, { type: "section", title: "Sifariş Prosesi", paragraphs: ["Məhsullar sifariş əsasında istehsal oluna və tələblərə uyğun planlaşdırıla bilər."] }, { type: "section", title: "Çatdırılma Prosesi", paragraphs: ["Çatdırılmalar müqaviləli logistika şirkətləri vasitəsilə həyata keçirilir."] }, { type: "section", title: "Çatdırılma Müddəti", paragraphs: ["Çatdırılma müddəti sifariş həcmi, istehsal planı və stok vəziyyətindən asılı olaraq dəyişə bilər."] }, { type: "section", title: "Məsuliyyət", paragraphs: ["ArtıPLAST logistika proseslərində yarana biləcək gecikmələrə görə məsuliyyət daşımır."] }, { type: "section", title: "Məlumatlandırma", paragraphs: ["Müştərilərə sifariş prosesi boyunca zəruri məlumat verilir və dəstək göstərilir."] }, { type: "section", title: "Əlaqə", paragraphs: ["Sifariş və çatdırılma barədə məlumat üçün bizimlə əlaqə saxlaya bilərsiniz."] }] } } },
  bg: { sectionTitle: "Правни", labels: { privacy: "Политика за поверителност", terms: "Условия за ползване", delivery: "Доставка и информация" }, pages: { privacy: { title: "Политика за поверителност", description: "ArtıPLAST защитава поверителността на своите посетители. Тази политика обяснява каква информация се събира, как се използва и как се защитава.", blocks: [{ type: "paragraph", content: "ArtıPLAST защитава поверителността на своите посетители. Тази политика обяснява каква информация се събира, как се използва и как се защитава." }, { type: "section", title: "Събирани данни", paragraphs: ["Технически данни като IP адрес, тип браузър, продължителност на посещението и прегледи на страници могат да бъдат събирани автоматично."] }, { type: "section", title: "Лични данни", paragraphs: ["Име, фамилия, телефон и имейл се използват само за връзка с вас."] }, { type: "section", title: "Цели на използването", items: ["Отговор на клиентски запитвания", "Подобряване на качеството на услугите", "Анализ на работата на сайта"] }, { type: "section", title: "Сигурност на данните", paragraphs: ["Личните данни се съхраняват в защитени системи и не се споделят с трети страни, освен при законово изискване."] }, { type: "section", title: "Вашите права", paragraphs: ["Имате право да поискате информация, корекция или изтриване на данните си."] }, { type: "section", title: "Контакт", paragraphs: ["Можете да се свържете с нас за всички въпроси, свързани с поверителността."] }] }, terms: { title: "Условия за ползване", description: "Всички посетители на този уебсайт се считат за приели следните условия.", blocks: [{ type: "paragraph", content: "Всички посетители на този уебсайт се считат за приели следните условия." }, { type: "section", title: "Условия за използване", paragraphs: ["Съдържанието на сайта е само с информативна цел и не може да бъде копирано или използвано търговски без разрешение."] }, { type: "section", title: "Отказ от отговорност", paragraphs: ["ArtıPLAST полага максимална грижа за точността на информацията, но не носи отговорност за възможни грешки."] }, { type: "section", title: "Информация за продуктите", paragraphs: ["Изображенията и описанията на продуктите са представителни. Техническите характеристики могат да се променят."] }, { type: "section", title: "Външни връзки", paragraphs: ["Външните връзки могат да водят до сайтове на трети страни. ArtıPLAST не отговаря за тяхното съдържание."] }, { type: "section", title: "Право на промяна", paragraphs: ["ArtıPLAST си запазва правото да променя тези условия без предварително уведомление."] }, { type: "section", title: "Правни права", paragraphs: ["Всички права върху съдържанието и дизайна на сайта принадлежат на ArtıPLAST."] }] }, delivery: { title: "Доставка и информация", description: "Продуктите на ArtıPLAST се доставят според процесите по поръчка и производство.", blocks: [{ type: "paragraph", content: "Продуктите на ArtıPLAST се доставят според процесите по поръчка и производство." }, { type: "section", title: "Процес на поръчка", paragraphs: ["Продуктите могат да се произвеждат по поръчка и се планират според нуждите."] }, { type: "section", title: "Процес на доставка", paragraphs: ["Доставките се извършват чрез договорени логистични фирми."] }, { type: "section", title: "Срок за доставка", paragraphs: ["Срокът може да варира според количеството, производствения план и наличността."] }, { type: "section", title: "Отговорност", paragraphs: ["ArtıPLAST не носи отговорност за забавяния в транспортните и логистичните процеси."] }, { type: "section", title: "Информиране", paragraphs: ["Клиентите получават информация и подкрепа през целия процес на поръчка."] }, { type: "section", title: "Контакт", paragraphs: ["Свържете се с нас за информация относно поръчките и доставките."] }] } } },
  fr: { sectionTitle: "Mentions légales", labels: { privacy: "Politique de confidentialité", terms: "Conditions de service", delivery: "Livraison et information" }, pages: { privacy: { title: "Politique de confidentialité", description: "ArtıPLAST s’engage à protéger la vie privée de ses visiteurs. Cette politique explique quelles informations sont collectées, utilisées et protégées.", blocks: [{ type: "paragraph", content: "ArtıPLAST s’engage à protéger la vie privée de ses visiteurs. Cette politique explique quelles informations sont collectées, utilisées et protégées." }, { type: "section", title: "Données collectées", paragraphs: ["Des données techniques comme l’adresse IP, le type de navigateur, la durée de visite et les pages vues peuvent être collectées automatiquement."] }, { type: "section", title: "Données personnelles", paragraphs: ["Nom, prénom, téléphone et e-mail sont utilisés uniquement pour vous contacter."] }, { type: "section", title: "Finalités", items: ["Répondre aux demandes clients", "Améliorer la qualité du service", "Analyser la performance du site"] }, { type: "section", title: "Sécurité des données", paragraphs: ["Les données personnelles sont stockées dans des systèmes sécurisés et ne sont pas partagées avec des tiers, sauf obligation légale."] }, { type: "section", title: "Vos droits", paragraphs: ["Vous pouvez demander des informations, une correction ou la suppression de vos données."] }, { type: "section", title: "Contact", paragraphs: ["Vous pouvez nous contacter pour toute question liée à la confidentialité."] }] }, terms: { title: "Conditions de service", description: "Tous les visiteurs utilisant ce site sont réputés accepter les conditions suivantes.", blocks: [{ type: "paragraph", content: "Tous les visiteurs utilisant ce site sont réputés accepter les conditions suivantes." }, { type: "section", title: "Conditions d’utilisation", paragraphs: ["Le contenu du site est purement informatif et ne peut pas être copié ou utilisé commercialement sans autorisation."] }, { type: "section", title: "Clause de non-responsabilité", paragraphs: ["ArtıPLAST veille à l’exactitude des informations mais n’assume aucune responsabilité en cas d’erreur éventuelle."] }, { type: "section", title: "Informations produit", paragraphs: ["Les visuels et descriptions produits sont représentatifs. Les caractéristiques techniques peuvent être modifiées."] }, { type: "section", title: "Liens externes", paragraphs: ["Les liens externes peuvent mener vers des sites tiers. ArtıPLAST n’est pas responsable de leur contenu."] }, { type: "section", title: "Droit de modification", paragraphs: ["ArtıPLAST se réserve le droit de modifier ces conditions sans préavis."] }, { type: "section", title: "Droits légaux", paragraphs: ["Tous les droits sur le contenu et le design du site appartiennent à ArtıPLAST."] }] }, delivery: { title: "Livraison et information", description: "Les produits ArtıPLAST sont livrés selon les processus de commande et de production.", blocks: [{ type: "paragraph", content: "Les produits ArtıPLAST sont livrés selon les processus de commande et de production." }, { type: "section", title: "Processus de commande", paragraphs: ["Les produits peuvent être fabriqués sur commande et planifiés selon les demandes."] }, { type: "section", title: "Processus de livraison", paragraphs: ["Les livraisons sont effectuées via des sociétés logistiques partenaires."] }, { type: "section", title: "Délai de livraison", paragraphs: ["Le délai peut varier selon la quantité, la planification de production et le stock."] }, { type: "section", title: "Responsabilité", paragraphs: ["ArtıPLAST n’est pas responsable des retards dans les processus de transport et de logistique."] }, { type: "section", title: "Information", paragraphs: ["Les clients reçoivent les informations nécessaires et un accompagnement tout au long du processus."] }, { type: "section", title: "Contact", paragraphs: ["Contactez-nous pour toute information sur les commandes et les livraisons."] }] } } },
  ru: { sectionTitle: "Правовая Информация", labels: { privacy: "Политика Конфиденциальности", terms: "Условия Обслуживания", delivery: "Доставка И Информирование" }, pages: { privacy: { title: "Политика Конфиденциальности", description: "В ArtıPLAST мы обязуемся защищать конфиденциальность наших посетителей. Эта политика объясняет, какие данные собираются, как они используются и как защищаются.", blocks: [{ type: "paragraph", content: "В ArtıPLAST мы обязуемся защищать конфиденциальность наших посетителей. Эта политика объясняет, какие данные собираются, как они используются и как защищаются." }, { type: "section", title: "Собираемые Данные", paragraphs: ["При посещении сайта автоматически могут собираться технические данные, такие как IP-адрес, тип браузера, длительность визита и просмотры страниц."] }, { type: "section", title: "Персональные Данные", paragraphs: ["Имя, фамилия, телефон и адрес электронной почты, переданные через форму или прямую коммуникацию, используются только для связи с вами."] }, { type: "section", title: "Цели Использования", items: ["Ответ на запросы клиентов", "Повышение качества сервиса", "Анализ работы сайта"] }, { type: "section", title: "Безопасность Данных", paragraphs: ["Ваши персональные данные хранятся в защищенных системах и не передаются третьим лицам, кроме случаев, предусмотренных законом."] }, { type: "section", title: "Ваши Права", paragraphs: ["Вы имеете право запросить информацию о своих данных, их исправление или удаление."] }, { type: "section", title: "Контакты", paragraphs: ["По всем вопросам, связанным с конфиденциальностью, вы можете связаться с нами."] }] }, terms: { title: "Условия Обслуживания", description: "Все посетители, использующие этот сайт, считаются принявшими следующие условия.", blocks: [{ type: "paragraph", content: "Все посетители, использующие этот сайт, считаются принявшими следующие условия." }, { type: "section", title: "Условия Использования", paragraphs: ["Содержимое сайта предназначено только для информационных целей и не может быть скопировано, воспроизведено или использовано в коммерческих целях без разрешения."] }, { type: "section", title: "Отказ От Ответственности", paragraphs: ["ArtıPLAST прилагает максимум усилий для точности информации на сайте, но не несет ответственности за возможные ошибки."] }, { type: "section", title: "Информация О Продукции", paragraphs: ["Изображения и описания продукции носят представительский характер. Технические характеристики могут быть изменены."] }, { type: "section", title: "Сторонние Ссылки", paragraphs: ["Сайт может содержать ссылки на сторонние ресурсы. ArtıPLAST не несет ответственности за их содержимое."] }, { type: "section", title: "Право На Изменения", paragraphs: ["ArtıPLAST оставляет за собой право изменять эти условия без предварительного уведомления."] }, { type: "section", title: "Правовые Права", paragraphs: ["Все права на содержимое и дизайн сайта принадлежат ArtıPLAST."] }] }, delivery: { title: "Доставка И Информирование", description: "Продукция ArtıPLAST доставляется клиентам в соответствии с процессами заказа и производства.", blocks: [{ type: "paragraph", content: "Продукция ArtıPLAST доставляется клиентам в соответствии с процессами заказа и производства." }, { type: "section", title: "Процесс Заказа", paragraphs: ["Продукция может производиться под заказ и планируется в соответствии с запросом клиента."] }, { type: "section", title: "Процесс Доставки", paragraphs: ["Доставка осуществляется через договорные логистические компании."] }, { type: "section", title: "Срок Доставки", paragraphs: ["Срок доставки может меняться в зависимости от объема заказа, производственного плана и наличия на складе."] }, { type: "section", title: "Ответственность", paragraphs: ["ArtıPLAST не несет ответственности за задержки, возникающие в процессах грузоперевозки и логистики."] }, { type: "section", title: "Информирование", paragraphs: ["Клиенты получают необходимую информацию и поддержку на протяжении всего процесса заказа."] }, { type: "section", title: "Контакты", paragraphs: ["Свяжитесь с нами, чтобы получить информацию о заказе и доставке."] }] } } },
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
