import Image from "next/image";
import type { CatalogVisual } from "@/data/catalog-visuals";

export function CatalogVisualGrid({ items }: { items: CatalogVisual[] }) {
  return (
    <div className="grid gap-4 sm:grid-cols-2 xl:grid-cols-3">
      {items.map((item) => (
        <div
          key={item.src}
          className="group overflow-hidden rounded-[28px] border border-border/60 bg-white shadow-soft"
        >
          <div className="relative aspect-[4/3] bg-panel">
            <Image
              src={item.src}
              alt={item.alt}
              fill
              className="object-contain p-4 transition duration-500 group-hover:scale-[1.03]"
              sizes="(max-width: 640px) 100vw, (max-width: 1280px) 50vw, 33vw"
            />
          </div>
        </div>
      ))}
    </div>
  );
}
