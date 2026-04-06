"use client";

import type { ReactNode } from "react";
import { useSearch } from "@/components/search-provider";
import { getUiCopy } from "@/data/site";

export function SearchTrigger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { setOpen, locale } = useSearch();
  const copy = getUiCopy(locale);

  return (
    <button type="button" className={className} onClick={() => setOpen(true)} aria-label={copy.actions.search}>
      {children}
    </button>
  );
}
