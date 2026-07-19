/**
 * /contact — standalone Contact page.
 *
 * The homepage Contact section (components/Contact.tsx) shows a short teaser
 * and links here. This page is the full contact experience.
 *
 * Copy rules (AGENTS.md §4): no em dashes, no banned words, direct tone,
 * one clear next action, no filler.
 *
 * Form is the shared ContactForm component — same 3 fields, same styling,
 * same submit behavior. idPrefix="page-contact" prevents duplicate IDs
 * if the homepage section is ever in the same document.
 *
 * PLACEHOLDER: intro copy, availability note, email address, GitHub URL.
 */

import type { Metadata } from "next";
import ContactForm from "@/components/ContactForm";

export const metadata: Metadata = {
  title: "Contact — George Allen Donayre",
  description:
    "Get in touch about a Shopify frontend project. George Allen Donayre builds custom Shopify storefronts using Liquid, sections, and metafields.",
};

export default function ContactPage() {
  return (
    <main>
      {/* ================================================================
          Page header
          ================================================================ */}
      <div className="border-b border-line bg-bg py-16 sm:py-20 md:py-24">
        <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
          {/* PLACEHOLDER headline — replace with final copy */}
          <h1 className="max-w-[640px] text-[length:var(--font-size-2xl)] font-bold leading-[1.1] tracking-tight text-text-primary sm:text-[length:var(--font-size-3xl)]">
            Get in touch
          </h1>
          {/* PLACEHOLDER intro — replace with final copy reinforcing one clear action */}
          <p className="mt-4 max-w-[480px] text-[length:var(--font-size-md)] leading-relaxed text-text-muted">
            Have a Shopify project in mind? Describe what you need and I&apos;ll
            follow up with scope and timeline.
          </p>
        </div>
      </div>

      {/* ================================================================
          Form + secondary info
          ================================================================ */}
      <section
        aria-label="Contact form"
        className="bg-bg py-16 sm:py-20 md:py-24"
      >
        <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
          <div className="grid gap-16 lg:grid-cols-[1fr_360px] lg:gap-24">
            {/* ---- Primary: form ---- */}
            <div className="max-w-[560px]">
              {/*
               * ContactForm idPrefix namespaces field IDs.
               * "page-contact" prevents collisions with the homepage
               * Contact section's default "contact" prefix.
               */}
              <ContactForm idPrefix="page-contact" />
            </div>

            {/* ---- Secondary: direct contact + links ---- */}
            <aside aria-label="Other ways to reach me">
              <div className="flex flex-col gap-8 lg:pt-2">
                {/* Direct email */}
                <div>
                  <p className="text-[length:var(--font-size-xs)] font-semibold uppercase tracking-widest text-text-muted">
                    Email
                  </p>
                  {/* PLACEHOLDER: replace with real email address */}
                  <a
                    href="mailto:georgedonayre.work@gmail.com"
                    className="mt-2 inline-block text-[length:var(--font-size-sm)] font-medium text-accent transition-colors hover:text-accent/80 focus-visible:outline-accent"
                  >
                    georgedonayre.work@gmail.com {/* PLACEHOLDER */}
                  </a>
                </div>

                {/* Availability note */}
                <div>
                  <p className="text-[length:var(--font-size-xs)] font-semibold uppercase tracking-widest text-text-muted">
                    Response time
                  </p>
                  {/* PLACEHOLDER: replace with a real, honest estimate or remove if it
                      feels like filler. Only include if it's genuinely useful to the reader. */}
                  <p className="mt-2 text-[length:var(--font-size-sm)] leading-relaxed text-text-body">
                    I usually reply within one business day.
                    {/* PLACEHOLDER */}
                  </p>
                </div>

                {/* Links — plain text, not competing buttons */}
                <div>
                  <p className="text-[length:var(--font-size-xs)] font-semibold uppercase tracking-widest text-text-muted">
                    Elsewhere
                  </p>
                  <ul className="mt-2 flex flex-col gap-2" role="list">
                    <li>
                      <a
                        href="https://github.com/georgedonayre"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[length:var(--font-size-sm)] text-text-body transition-colors hover:text-text-primary focus-visible:outline-accent"
                      >
                        GitHub
                      </a>
                    </li>
                    <li>
                      <a
                        href="https://drive.google.com/file/d/1X7geV7pYPvKKN5N0ApA5ZmYiYoRCjsmj/view?usp=sharing"
                        className="text-[length:var(--font-size-sm)] text-text-body transition-colors hover:text-text-primary focus-visible:outline-accent"
                        target="_blank"
                        rel="noopener noreferrer"
                      >
                        Resume
                      </a>
                    </li>
                    <li>
                      {/*
                       * WhatsApp direct link. Phone: +63 908 990 6013
                       * Remove ?text=... if you prefer a blank chat window.
                       */}
                      <a
                        href="https://wa.me/639089906013?text=Hi%20George%2C%20I%20found%20your%20portfolio%20and%20wanted%20to%20reach%20out%20about%20a%20project."
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-[length:var(--font-size-sm)] text-text-body transition-colors hover:text-text-primary focus-visible:outline-accent"
                      >
                        WhatsApp
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </aside>
          </div>
        </div>
      </section>
    </main>
  );
}
