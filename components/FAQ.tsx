/**
 * FAQ section — preemptive answers to common client objections.
 *
 * Per AGENTS.md §5, this is section 8 in the homepage order.
 * Background: bg — About above uses bg-alt, alternation holds.
 * Copy rules (§4): direct, specific, engineer tone. No fluff.
 *
 * All Q&A text is PLACEHOLDER — replace with George's real answers.
 * Questions are chosen to reduce risk perception around hiring a remote
 * Shopify frontend specialist.
 */

import FAQItem from "@/components/FAQItem";

/** PLACEHOLDER FAQ entries — replace answers with real copy */
const faqs = [
  {
    question:
      "Do you work from existing designs, or do I need to provide them?",
    answer:
      "I work from approved designs. You provide Figma files, screenshots, or detailed references, and I handle the Shopify implementation. I don't do graphic design or branding, but I can advise on what's technically feasible within Shopify's theme architecture.",
  },
  {
    question: "How do you handle timezone differences?",
    answer:
      "I work async. You'll get regular written progress updates with screenshots or preview links. We align on a communication schedule at the start so nothing stalls while waiting for responses.",
  },
  {
    question: "What does the typical engagement look like?",
    answer:
      "Most projects are scoped per-deliverable with a fixed price based on complexity. For ongoing work, I also offer weekly retainer arrangements. Either way, scope and cost are agreed before any code is written.",
  },
  {
    question: "Are you available full-time, or is this part-time work?",
    answer:
      "I work part-time and take on a limited number of projects at once, which keeps turnaround times realistic. My schedule is flexible, and I make time for live overlap when a project needs it, like kickoff calls or review sessions. If you need someone full-time and embedded day to day, this setup won't be the right fit, but for scoped or ongoing part-time work, it's a good match.",
  },
  {
    question: "How are revisions handled?",
    answer:
      "Revisions are organized into focused rounds. After each build phase, you review against the original design and provide consolidated feedback. This keeps changes organized and avoids scope drift.",
  },
  {
    question: "What Shopify plans or themes do you work with?",
    answer:
      "I work with any Shopify plan that supports Online Store 2.0 themes. That includes most modern themes, whether custom-built or based on Dawn, Debut, or third-party themes. I can also work on older themes if needed, though I'll flag any limitations upfront.",
  },
  {
    question: "How do I get started?",
    answer:
      "Send me a message with a brief description of what you need built. I'll review it, ask any follow-up questions, and send back a scope outline with timeline and pricing. No commitment required to start that conversation.",
  },
];

export default function FAQ() {
  return (
    <section
      aria-labelledby="faq-heading"
      className="bg-bg py-16 sm:py-24 md:py-32"
    >
      <div className="mx-auto w-full max-w-[1200px] px-6 sm:px-8">
        {/* ---- Section header ---- */}
        <div className="mb-12 max-w-[640px] sm:mb-16">
          <h2
            id="faq-heading"
            className="text-[length:var(--font-size-xl)] font-bold leading-tight tracking-tight text-text-primary sm:text-[length:var(--font-size-2xl)]"
          >
            Common questions
          </h2>
          {/* PLACEHOLDER intro — replace with final copy */}
          <p className="mt-4 text-[length:var(--font-size-base)] leading-relaxed text-text-body">
            Answers to things clients usually ask before starting a project.
          </p>
        </div>

        {/* ---- Accordion list ---- */}
        <div className="max-w-[800px]">
          {faqs.map((faq) => (
            <FAQItem
              key={faq.question}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
          {/* Bottom border to close the last item visually */}
          <div className="border-t border-line" />
        </div>
      </div>
    </section>
  );
}
