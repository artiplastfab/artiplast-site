import Link from "next/link";
import { ArrowRight } from "lucide-react";
import { Reveal } from "@/components/reveal";
import { localizedPath, type Locale } from "@/lib/i18n";

export function CTASection({
  locale,
  title,
  description,
}: {
  locale: Locale;
  title: string;
  description: string;
}) {
  return (
    <section className="container-shell mt-24">
      <Reveal>
        <div className="overflow-hidden rounded-[36px] border border-border/60 bg-accent px-8 py-10 text-white shadow-lift sm:px-10 sm:py-12">
          <div className="grid gap-8 lg:grid-cols-[1.1fr_0.9fr] lg:items-end">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.22em] text-white/72">
                Contact The Factory
              </p>
              <h2 className="mt-4 font-display text-[clamp(2.2rem,4vw,4rem)] font-semibold tracking-[-0.05em]">
                {title}
              </h2>
            </div>
            <div>
              <p className="max-w-xl text-sm leading-7 text-white/82 sm:text-base">
                {description}
              </p>
              <div className="mt-6 flex flex-col gap-3 sm:flex-row">
                <Link
                  href={localizedPath(locale, "/contact")}
                  className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-4 text-sm font-semibold text-ink transition hover:bg-ink hover:text-white"
                >
                  Contact ArtıPlast <ArrowRight className="h-4 w-4" />
                </Link>
                <Link
                  href={localizedPath(locale, "/products")}
                  className="inline-flex items-center justify-center rounded-full border border-white/25 px-6 py-4 text-sm font-semibold text-white transition hover:bg-white/10"
                >
                  View Product Range
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Reveal>
    </section>
  );
}
