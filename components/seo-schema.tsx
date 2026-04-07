import type { Locale } from "@/lib/i18n";
import { getSeoSchemas } from "@/lib/seo";

export function SeoSchema({ locale }: { locale: Locale }) {
  const schemas = getSeoSchemas(locale);

  return (
    <>
      {schemas.map((schema, index) => (
        <script
          key={`${schema["@type"]}-${index}`}
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }}
        />
      ))}
    </>
  );
}
