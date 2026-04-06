"use client";

import { useState } from "react";
import { ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";

type Item = {
  question: string;
  answer: string;
};

export function AccordionList({ items }: { items: Item[] }) {
  const [openIndex, setOpenIndex] = useState<number>(0);

  return (
    <div className="space-y-4">
      {items.map((item, index) => {
        const open = index === openIndex;

        return (
          <div
            key={item.question}
            className="overflow-hidden rounded-[28px] border border-border/60 bg-white shadow-soft"
          >
            <button
              type="button"
              onClick={() => setOpenIndex(open ? -1 : index)}
              className="flex w-full items-center justify-between gap-4 px-6 py-5 text-left sm:px-8"
            >
              <span className="font-display text-xl font-semibold tracking-[-0.03em] text-ink">
                {item.question}
              </span>
              <ChevronDown
                className={cn(
                  "h-5 w-5 shrink-0 text-accent transition",
                  open && "rotate-180",
                )}
              />
            </button>
            {open ? (
              <div className="border-t border-border/60 px-6 py-5 text-sm leading-7 text-muted sm:px-8">
                {item.answer}
              </div>
            ) : null}
          </div>
        );
      })}
    </div>
  );
}
