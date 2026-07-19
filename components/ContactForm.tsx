"use client";

/**
 * ContactForm — reusable contact form.
 *
 * AGENTS.md §7: build once, reuse everywhere.
 * Shared between the homepage Contact section and the standalone /contact page.
 * Extracted as a "use client" component so both server-side pages can import it.
 *
 * Fields: name, email, message (3 max — low friction).
 * All inputs use the same border/focus style established in the homepage form.
 * Submissions are POSTed to Web3Forms (https://api.web3forms.com/submit).
 * Access key is read from NEXT_PUBLIC_WEB3FORMS_KEY (.env.local locally;
 * must also be set in Vercel → Project Settings → Environment Variables).
 *
 * Props:
 *   idPrefix — namespaces field IDs so the form can appear twice on the same page
 *              without duplicate IDs (homepage + contact page could theoretically
 *              coexist; also future-proofs for modal usage).
 */

import { useState, type FormEvent } from "react";

interface ContactFormProps {
  /** Prefix for field IDs — prevents duplicate IDs if form appears more than once */
  idPrefix?: string;
}

export default function ContactForm({
  idPrefix = "contact",
}: ContactFormProps) {
  const [submitted, setSubmitted] = useState(false);
  const [submitting, setSubmitting] = useState(false);
  const [error, setError] = useState<string | null>(null);

  interface FieldErrors {
    name?: string;
    email?: string;
    message?: string;
  }
  const [fieldErrors, setFieldErrors] = useState<FieldErrors>({});

  function validate(name: string, email: string, message: string): FieldErrors {
    const errs: FieldErrors = {};
    if (name.trim().length < 2) {
      errs.name = "Name must be at least 2 characters.";
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) {
      errs.email = "Enter a valid email address.";
    }
    if (message.trim().length < 10) {
      errs.message = "Message must be at least 10 characters.";
    }
    return errs;
  }

  async function handleSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setSubmitting(true);
    setError(null);

    const form = e.currentTarget;
    const nameVal = (form.elements.namedItem("name") as HTMLInputElement).value;
    const emailVal = (form.elements.namedItem("email") as HTMLInputElement)
      .value;
    const messageVal = (
      form.elements.namedItem("message") as HTMLTextAreaElement
    ).value;

    const errs = validate(nameVal, emailVal, messageVal);
    if (Object.keys(errs).length > 0) {
      setFieldErrors(errs);
      setSubmitting(false);
      return;
    }
    setFieldErrors({});

    const data = new FormData();
    data.append("access_key", process.env.NEXT_PUBLIC_WEB3FORMS_KEY ?? "");
    data.append("name", nameVal);
    data.append("email", emailVal);
    data.append("message", messageVal);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        body: data,
      });
      const json = (await res.json()) as { success: boolean; message?: string };

      if (json.success) {
        setSubmitted(true);
      } else {
        setError(
          "Something went wrong. Try again, or email me directly at georgedonayre.work@gmail.com.",
        );
      }
    } catch {
      setError(
        "Something went wrong. Try again, or email me directly at georgedonayre.work@gmail.com.",
      );
    } finally {
      setSubmitting(false);
    }
  }

  if (submitted) {
    return (
      <div className="rounded-[var(--radius-md)] border border-line p-6 sm:p-8">
        <p className="text-[length:var(--font-size-base)] font-semibold text-text-primary">
          Message sent.
        </p>
        <p className="mt-2 text-[length:var(--font-size-sm)] text-text-body">
          Thanks for reaching out. I&apos;ll get back to you within one business
          day.
        </p>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-6" noValidate>
      {/* Name */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor={`${idPrefix}-name`}
          className="text-[length:var(--font-size-sm)] font-medium text-text-primary"
        >
          Name
        </label>
        <input
          type="text"
          id={`${idPrefix}-name`}
          name="name"
          required
          autoComplete="name"
          placeholder="Your name"
          onChange={() =>
            setFieldErrors((prev) => ({ ...prev, name: undefined }))
          }
          aria-describedby={
            fieldErrors.name ? `${idPrefix}-name-error` : undefined
          }
          className="h-12 rounded-[var(--radius-md)] border border-line bg-bg px-4 text-[length:var(--font-size-sm)] text-text-primary outline-none transition-colors placeholder:text-text-muted focus-visible:border-accent"
        />
        {fieldErrors.name && (
          <p
            id={`${idPrefix}-name-error`}
            role="alert"
            className="text-[length:var(--font-size-sm)] text-text-muted"
          >
            {fieldErrors.name}
          </p>
        )}
      </div>

      {/* Email */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor={`${idPrefix}-email`}
          className="text-[length:var(--font-size-sm)] font-medium text-text-primary"
        >
          Email
        </label>
        <input
          type="email"
          id={`${idPrefix}-email`}
          name="email"
          required
          autoComplete="email"
          placeholder="you@example.com"
          onChange={() =>
            setFieldErrors((prev) => ({ ...prev, email: undefined }))
          }
          aria-describedby={
            fieldErrors.email ? `${idPrefix}-email-error` : undefined
          }
          className="h-12 rounded-[var(--radius-md)] border border-line bg-bg px-4 text-[length:var(--font-size-sm)] text-text-primary outline-none transition-colors placeholder:text-text-muted focus-visible:border-accent"
        />
        {fieldErrors.email && (
          <p
            id={`${idPrefix}-email-error`}
            role="alert"
            className="text-[length:var(--font-size-sm)] text-text-muted"
          >
            {fieldErrors.email}
          </p>
        )}
      </div>

      {/* Message */}
      <div className="flex flex-col gap-2">
        <label
          htmlFor={`${idPrefix}-message`}
          className="text-[length:var(--font-size-sm)] font-medium text-text-primary"
        >
          Message
        </label>
        <textarea
          id={`${idPrefix}-message`}
          name="message"
          required
          rows={5}
          placeholder="Briefly describe your project or question"
          onChange={() =>
            setFieldErrors((prev) => ({ ...prev, message: undefined }))
          }
          aria-describedby={
            fieldErrors.message ? `${idPrefix}-message-error` : undefined
          }
          className="rounded-[var(--radius-md)] border border-line bg-bg px-4 py-3 text-[length:var(--font-size-sm)] leading-relaxed text-text-primary outline-none transition-colors placeholder:text-text-muted focus-visible:border-accent"
        />
        {fieldErrors.message && (
          <p
            id={`${idPrefix}-message-error`}
            role="alert"
            className="text-[length:var(--font-size-sm)] text-text-muted"
          >
            {fieldErrors.message}
          </p>
        )}
      </div>

      {/* Actions */}
      <div className="flex flex-col gap-4 pt-2 sm:flex-row sm:items-center sm:gap-6">
        {/* Primary CTA — accent color, same style as Hero/CaseStudyCTA buttons */}
        <button
          type="submit"
          disabled={submitting}
          aria-disabled={submitting}
          className="inline-flex h-12 items-center justify-center rounded-[var(--radius-md)] bg-accent px-8 text-[length:var(--font-size-sm)] font-semibold text-white transition-colors hover:bg-accent/90 focus-visible:outline-accent disabled:opacity-60 disabled:cursor-not-allowed"
        >
          {submitting ? "Sending..." : "Send message"}
        </button>

        {/* Secondary links — plain text, not competing buttons */}
        <div className="flex items-center gap-4">
          <a
            href="https://drive.google.com/file/d/1X7geV7pYPvKKN5N0ApA5ZmYiYoRCjsmj/view?usp=sharing"
            className="text-[length:var(--font-size-sm)] font-medium text-text-muted transition-colors hover:text-text-primary"
            target="_blank"
            rel="noopener noreferrer"
          >
            Resume
          </a>
          <span className="text-text-muted" aria-hidden="true">
            /
          </span>
          <a
            href="https://github.com/georgedonayre"
            target="_blank"
            rel="noopener noreferrer"
            className="text-[length:var(--font-size-sm)] font-medium text-text-muted transition-colors hover:text-text-primary"
          >
            GitHub
          </a>
          <span className="text-text-muted" aria-hidden="true">
            /
          </span>
          {/*
           * WhatsApp direct link. Phone: +63 908 990 6013
           * The ?text= param prefills the chat opener — George can remove the
           * entire query string if he prefers a blank chat window.
           */}
          <a
            href="https://wa.me/639089906013?text=Hi%20George%2C%20I%20found%20your%20portfolio%20and%20wanted%20to%20reach%20out%20about%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="text-[length:var(--font-size-sm)] font-medium text-text-muted transition-colors hover:text-text-primary"
          >
            WhatsApp
          </a>
        </div>
      </div>

      {/* Inline error — shown only on failed submission */}
      {error && (
        <p
          role="alert"
          className="text-[length:var(--font-size-sm)] text-text-body"
        >
          {error}
        </p>
      )}
    </form>
  );
}
