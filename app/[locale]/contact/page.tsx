import type { Metadata } from "next";
import { Mail, MapPin, MessageCircle, Phone, Share2 } from "lucide-react";
import { ContactForm } from "@/components/contact-form";
import { PageHero } from "@/components/page-hero";
import { Reveal } from "@/components/reveal";
import { getContactCards } from "@/data/site";
import { defaultLocale, isLocale, type Locale } from "@/lib/i18n";
import { buildMetadata } from "@/lib/metadata";

export async function generateMetadata({
  params,
}: {
  params: Promise<{ locale: string }>;
}): Promise<Metadata> {
  const { locale } = await params;
  const safeLocale: Locale = isLocale(locale) ? locale : defaultLocale;

  return buildMetadata({
    locale: safeLocale,
    title: "Contact",
    description: "Contact ArtıPlast for product information, factory discussions, and future export-oriented inquiries.",
    path: "/contact",
  });
}

const icons = {
  address: MapPin,
  phone: Phone,
  email: Mail,
  whatsapp: MessageCircle,
  social: Share2,
};

export default async function ContactPage({
  params,
}: {
  params: Promise<{ locale: Locale }>;
}) {
  const { locale } = await params;
  const cards = getContactCards(locale);

  return (
    <div className="pb-16 sm:pb-20">
      <PageHero
        eyebrow="Contact"
        title="Open a premium, direct line to the factory."
        description="The page is structured for future contact details, WhatsApp routing, social links, and map integration without losing the clean presentation."
      />

      <section className="container-shell mt-10 grid gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <Reveal>
          <ContactForm />
        </Reveal>
        <Reveal delay={0.08}>
          <div className="grid gap-4">
            {cards.map((card) => {
              const Icon = icons[card.type];
              return (
                <div key={card.title} className="rounded-[28px] border border-border/60 bg-panel p-6">
                  <Icon className="h-5 w-5 text-accent" />
                  <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-ink">
                    {card.title}
                  </p>
                  <p className="mt-2 text-sm leading-7 text-muted">{card.value}</p>
                </div>
              );
            })}
            <div className="overflow-hidden rounded-[28px] border border-border/60 bg-white shadow-soft">
              <div className="premium-grid flex min-h-[280px] items-end p-6">
                <div className="rounded-[22px] border border-border/60 bg-white/90 p-5 backdrop-blur">
                  <p className="text-xs font-semibold uppercase tracking-[0.18em] text-accent">
                    Map Placeholder
                  </p>
                  <p className="mt-3 text-sm text-muted">
                    Google Maps or a custom embedded location block can be placed here later.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </section>
    </div>
  );
}
