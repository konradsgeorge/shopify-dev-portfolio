/**
 * TechGroup — displays a named cluster of technologies with individual items.
 *
 * Per AGENTS.md §7: build once, reuse everywhere.
 * No colorful logos/badges — monochrome text only (§3: hierarchy from type, not color).
 */

interface TechGroupProps {
  /** Category label, e.g. "Shopify" */
  category: string;
  /** List of individual technologies in this group */
  items: string[];
}

export default function TechGroup({ category, items }: TechGroupProps) {
  return (
    <div className="flex flex-col gap-4">
      <h3 className="text-[length:var(--font-size-xs)] font-semibold uppercase tracking-widest text-text-muted">
        {category}
      </h3>
      <ul className="flex flex-col gap-2.5" role="list">
        {items.map((item) => (
          <li
            key={item}
            className="text-[length:var(--font-size-sm)] leading-normal text-text-primary sm:text-[length:var(--font-size-base)]"
          >
            {item}
          </li>
        ))}
      </ul>
    </div>
  );
}
