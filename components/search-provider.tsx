"use client";

import {
  createContext,
  useContext,
  useEffect,
  useState,
  type ReactNode,
} from "react";
import type { SearchEntry } from "@/data/site";
import type { Locale } from "@/lib/i18n";
import { SearchOverlay } from "@/components/search-overlay";

type SearchContextValue = {
  open: boolean;
  setOpen: (open: boolean) => void;
  locale: Locale;
  entries: SearchEntry[];
};

const SearchContext = createContext<SearchContextValue | null>(null);

export function SearchProvider({
  locale,
  entries,
  children,
}: {
  locale: Locale;
  entries: SearchEntry[];
  children: ReactNode;
}) {
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onKeyDown = (event: KeyboardEvent) => {
      if ((event.metaKey || event.ctrlKey) && event.key.toLowerCase() === "k") {
        event.preventDefault();
        setOpen((value) => !value);
      }
      if (event.key === "Escape") {
        setOpen(false);
      }
    };

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, []);

  return (
    <SearchContext.Provider value={{ open, setOpen, locale, entries }}>
      {children}
      <SearchOverlay />
    </SearchContext.Provider>
  );
}

export function useSearch() {
  const context = useContext(SearchContext);
  if (!context) {
    throw new Error("useSearch must be used within SearchProvider");
  }
  return context;
}
