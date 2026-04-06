"use client";

import { useState } from "react";
import { getUiCopy } from "@/data/site";
import type { Locale } from "@/lib/i18n";

export function ContactForm({ locale }: { locale: Locale }) {
  const [submitted, setSubmitted] = useState(false);
  const copy = getUiCopy(locale);

  return (
    <div className="overflow-hidden rounded-[36px] border border-border/60 bg-white shadow-soft">
      <form
        className="grid gap-5 p-8 sm:p-10"
        onSubmit={(event) => {
          event.preventDefault();
          setSubmitted(true);
        }}
      >
        <div>
          <p className="eyebrow">{copy.labels.form}</p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
            {copy.form.title}
          </h2>
          <p className="mt-4 copy-muted">{copy.form.description}</p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <input type="text" placeholder={copy.form.fullName} className="h-14 rounded-2xl border border-border bg-panel/70 px-4 text-sm outline-none transition focus:border-accent" />
          <input type="text" placeholder={copy.form.company} className="h-14 rounded-2xl border border-border bg-panel/70 px-4 text-sm outline-none transition focus:border-accent" />
          <input type="email" placeholder={copy.form.email} className="h-14 rounded-2xl border border-border bg-panel/70 px-4 text-sm outline-none transition focus:border-accent" />
          <input type="text" placeholder={copy.form.phone} className="h-14 rounded-2xl border border-border bg-panel/70 px-4 text-sm outline-none transition focus:border-accent" />
        </div>

        <textarea
          placeholder={copy.form.message}
          rows={6}
          className="rounded-[24px] border border-border bg-panel/70 px-4 py-4 text-sm outline-none transition focus:border-accent"
        />

        <button type="submit" className="inline-flex w-fit items-center justify-center rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white transition hover:bg-accent">
          {copy.actions.sendInquiry}
        </button>

        {submitted ? (
          <div className="rounded-[22px] bg-accentSoft px-4 py-4 text-sm text-accent">
            {copy.form.success}
          </div>
        ) : null}
      </form>
    </div>
  );
}
