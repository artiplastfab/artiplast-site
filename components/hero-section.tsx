import Image from "next/image";
import { type Locale } from "@/lib/i18n";

export function HeroSection({ locale }: { locale: Locale }) {
  return (
    <section className="relative min-h-[calc(100vh-118px)] overflow-hidden bg-ink">
      <Image
        src="/images/hero-showcase.svg"
        alt={`ArtıPLAST ${locale} hero visual`}
        fill
        priority
        className="object-cover"
        sizes="100vw"
      />
      <div className="absolute inset-0 bg-black/18" />
    </section>
  );
}
