"use client";

import Link from "next/link";
import { AnimatePresence, motion } from "framer-motion";
import { Search, X } from "lucide-react";
import { useDeferredValue, useMemo, useState } from "react";
import { useSearch } from "@/components/search-provider";

export function SearchOverlay() {
  const { open, setOpen, entries } = useSearch();
  const [query, setQuery] = useState("");
  const deferredQuery = useDeferredValue(query);

  const results = useMemo(() => {
    const value = deferredQuery.trim().toLowerCase();
    if (!value) {
      return entries.slice(0, 6);
    }

    return entries.filter((entry) => {
      const haystack = [entry.title, entry.description, ...entry.keywords].join(" ").toLowerCase();
      return haystack.includes(value);
    });
  }, [deferredQuery, entries]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          className="fixed inset-0 z-[70] bg-ink/30 px-4 py-6 backdrop-blur-md sm:px-6"
        >
          <motion.div
            initial={{ y: 32, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 20, opacity: 0 }}
            transition={{ duration: 0.35, ease: [0.21, 1, 0.27, 1] }}
            className="container-shell mt-12 max-w-4xl"
          >
            <div className="overflow-hidden rounded-[32px] border border-border/60 bg-white shadow-lift">
              <div className="flex items-center gap-3 border-b border-border/70 px-5 py-4 sm:px-6">
                <Search className="h-5 w-5 text-accent" />
                <input
                  autoFocus
                  value={query}
                  onChange={(event) => setQuery(event.target.value)}
                  placeholder="Search products, pages, and content"
                  className="h-12 flex-1 border-none bg-transparent text-sm text-ink outline-none placeholder:text-muted"
                />
                <button
                  type="button"
                  onClick={() => setOpen(false)}
                  className="flex h-10 w-10 items-center justify-center rounded-full border border-border"
                >
                  <X className="h-4 w-4" />
                </button>
              </div>

              <div className="max-h-[60vh] overflow-y-auto p-4 sm:p-5">
                <div className="mb-3 flex items-center justify-between px-2 text-xs uppercase tracking-[0.18em] text-muted">
                  <span>Results</span>
                  <span>Ctrl/Cmd + K</span>
                </div>
                <div className="space-y-2">
                  {results.length ? (
                    results.map((item) => (
                      <Link
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className="block rounded-[22px] border border-border/60 px-4 py-4 transition hover:border-accent hover:bg-accentSoft/60"
                      >
                        <p className="font-medium text-ink">{item.title}</p>
                        <p className="mt-2 text-sm leading-6 text-muted">{item.description}</p>
                      </Link>
                    ))
                  ) : (
                    <div className="rounded-[22px] border border-dashed border-border px-4 py-10 text-center text-sm text-muted">
                      No results found. Try a product name, category, or page title.
                    </div>
                  )}
                </div>
              </div>
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
