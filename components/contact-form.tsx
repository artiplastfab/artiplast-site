"use client";

import { useState } from "react";

export function ContactForm() {
  const [submitted, setSubmitted] = useState(false);

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
          <p className="eyebrow">Inquiry Form</p>
          <h2 className="mt-5 font-display text-3xl font-semibold tracking-[-0.04em] text-ink sm:text-4xl">
            Start a direct conversation.
          </h2>
          <p className="mt-4 copy-muted">
            This form is currently a premium front-end placeholder and can later be connected to email, CRM, or WhatsApp flows.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <input
            type="text"
            placeholder="Full name"
            className="h-14 rounded-2xl border border-border bg-panel/70 px-4 text-sm outline-none transition focus:border-accent"
          />
          <input
            type="text"
            placeholder="Company"
            className="h-14 rounded-2xl border border-border bg-panel/70 px-4 text-sm outline-none transition focus:border-accent"
          />
          <input
            type="email"
            placeholder="Email"
            className="h-14 rounded-2xl border border-border bg-panel/70 px-4 text-sm outline-none transition focus:border-accent"
          />
          <input
            type="text"
            placeholder="Phone / WhatsApp"
            className="h-14 rounded-2xl border border-border bg-panel/70 px-4 text-sm outline-none transition focus:border-accent"
          />
        </div>

        <textarea
          placeholder="Tell us which product line or requirement you are interested in."
          rows={6}
          className="rounded-[24px] border border-border bg-panel/70 px-4 py-4 text-sm outline-none transition focus:border-accent"
        />

        <button
          type="submit"
          className="inline-flex w-fit items-center justify-center rounded-full bg-ink px-6 py-4 text-sm font-semibold text-white transition hover:bg-accent"
        >
          Send Inquiry
        </button>

        {submitted ? (
          <div className="rounded-[22px] bg-accentSoft px-4 py-4 text-sm text-accent">
            Placeholder submission complete. Connect this form to your preferred backend or email service when ready.
          </div>
        ) : null}
      </form>
    </div>
  );
}
