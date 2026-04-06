import { Reveal } from "@/components/reveal";
import type { LucideIcon } from "lucide-react";

export function FeatureStat({
  item,
  delay = 0,
}: {
  item: { title: string; description: string; icon: LucideIcon };
  delay?: number;
}) {
  const Icon = item.icon;

  return (
    <Reveal delay={delay}>
      <div className="rounded-[24px] border border-border/60 bg-panel/60 p-5">
        <Icon className="h-5 w-5 text-accent" />
        <p className="mt-4 text-sm font-semibold uppercase tracking-[0.16em] text-ink">
          {item.title}
        </p>
        <p className="mt-3 text-sm leading-7 text-muted">{item.description}</p>
      </div>
    </Reveal>
  );
}
