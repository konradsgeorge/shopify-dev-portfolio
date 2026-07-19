"use client";

/**
 * FAQItem — reusable accordion item for the FAQ section.
 *
 * Per AGENTS.md §7: build once, reuse everywhere.
 * Keyboard accessible: Enter/Space to toggle, correct aria attributes.
 * No decorative motion — uses a simple height toggle, not bouncy animations.
 */

import { useState } from "react";

interface FAQItemProps {
  /** The question */
  question: string;
  /** The answer (plain text or simple markup) */
  answer: string;
}

export default function FAQItem({ question, answer }: FAQItemProps) {
  const [isOpen, setIsOpen] = useState(false);

  const id = question
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, "-")
    .replace(/(^-|-$)/g, "");

  return (
    <div className="border-t border-line">
      <button
        type="button"
        id={`faq-trigger-${id}`}
        aria-expanded={isOpen}
        aria-controls={`faq-panel-${id}`}
        onClick={() => setIsOpen(!isOpen)}
        className="flex w-full items-center justify-between gap-4 py-5 text-left text-[length:var(--font-size-sm)] font-semibold text-text-primary transition-colors hover:text-text-body sm:py-6 sm:text-[length:var(--font-size-base)]"
      >
        {question}
        <span
          aria-hidden="true"
          className={`flex-shrink-0 text-text-muted transition-transform duration-200 ${
            isOpen ? "rotate-45" : ""
          }`}
        >
          +
        </span>
      </button>

      <div
        id={`faq-panel-${id}`}
        role="region"
        aria-labelledby={`faq-trigger-${id}`}
        hidden={!isOpen}
        className="pb-6"
      >
        <p className="max-w-[640px] text-[length:var(--font-size-sm)] leading-relaxed text-text-body sm:text-[length:var(--font-size-base)]">
          {answer}
        </p>
      </div>
    </div>
  );
}
