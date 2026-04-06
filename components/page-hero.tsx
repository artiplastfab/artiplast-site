import { Reveal } from "@/components/reveal";

export function PageHero({
  eyebrow,
  title,
  description,
}: {
  eyebrow: string;
  title: string;
  description: string;
}) {
  return (
    <section className="container-shell pt-10 sm:pt-14">
      <Reveal>
        <div className="overflow-hidden rounded-[36px] border border-border/60 bg-white px-8 py-10 shadow-soft sm:px-10 sm:py-14">
          <p className="eyebrow">{eyebrow}</p>
          <h1 className="mt-6 max-w-4xl headline-lg">{title}</h1>
          <p className="mt-5 max-w-2xl copy-muted">{description}</p>
        </div>
      </Reveal>
    </section>
  );
}
