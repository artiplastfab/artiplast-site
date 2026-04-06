import Image from "next/image";
import Link from "next/link";

type GalleryItem = {
  title: string;
  description: string;
  image: string;
  href?: string;
};

export function GalleryGrid({ items }: { items: GalleryItem[] }) {
  return (
    <div className="grid gap-6 lg:grid-cols-3">
      {items.map((item, index) => {
        const content = (
          <div
            className={`group overflow-hidden rounded-[30px] border border-border/60 bg-white shadow-soft ${
              index === 0 ? "lg:col-span-2" : ""
            }`}
          >
            <div className="relative min-h-[280px] overflow-hidden bg-panel sm:min-h-[340px]">
              <Image
                src={item.image}
                alt={item.title}
                fill
                className="object-cover transition duration-700 group-hover:scale-[1.03]"
                sizes="(max-width: 1024px) 100vw, 50vw"
              />
            </div>
            <div className="p-6">
              <p className="font-display text-2xl font-semibold tracking-[-0.04em] text-ink">
                {item.title}
              </p>
              <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
            </div>
          </div>
        );

        return item.href ? (
          <Link key={item.title} href={item.href}>
            {content}
          </Link>
        ) : (
          <div key={item.title}>{content}</div>
        );
      })}
    </div>
  );
}
