"use client";

import type { ReactNode } from "react";
import { useSearch } from "@/components/search-provider";

export function SearchTrigger({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  const { setOpen } = useSearch();

  return (
    <button type="button" className={className} onClick={() => setOpen(true)} aria-label="Open search">
      {children}
    </button>
  );
}
