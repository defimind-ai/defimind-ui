type CredItem = {
  label: string;
  value: string;
  href: string;
  ariaLabel: string;
};

const items: CredItem[] = [
  {
    label: "defipy",
    value: "50K+ downloads",
    href: "https://defipy.org",
    ariaLabel: "defipy — 50,000+ downloads, open-source DeFi analytics library",
  },
  {
    label: "ETH Denver 2024",
    value: "Selected Speaker",
    href: "https://www.youtube.com/watch?v=irUM-aB9UFk",
    ariaLabel:
      "ETH Denver 2024 — selected speaker on protocol-level liquidity research",
  },
  {
    label: "Courses",
    value: "Live",
    href: "https://defipy.thinkific.com/products/courses/foundations",
    ariaLabel: "Live courses on quantitative DeFi methods",
  },
  {
    label: "arXiv",
    value: "2605.11522",
    href: "https://arxiv.org/abs/2605.11522",
    ariaLabel:
      "arXiv 2605.11522 — State Twins: An Off-Chain Substrate for Agentic Reasoning over DeFi Protocols",
  },
  {
    label: "PhD",
    value: "Applied Math",
    href: "https://www.linkedin.com/in/ic3moore/",
    ariaLabel: "PhD Applied Mathematics — operator profile on LinkedIn",
  },
  {
    label: "Former",
    value: "Syscoin Foundation",
    href: "https://syscoin.org/news/dr-ian-moore",
    ariaLabel:
      "Former Research Scientist at the Syscoin Foundation — announcement",
  },
];

export function Credibility() {
  return (
    <div className="border-y border-[rgb(58_106_120/0.25)] px-8 py-7">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-center gap-x-5 gap-y-4 md:justify-between md:gap-x-4">
        {items.map((item) => (
          <a
            key={item.label}
            href={item.href}
            target="_blank"
            rel="noopener noreferrer"
            aria-label={item.ariaLabel}
            className="group flex shrink-0 items-baseline gap-1.5 whitespace-nowrap text-[0.78125rem] text-[var(--color-text-muted)] transition-colors hover:text-[var(--color-text-secondary)]"
          >
            <strong className="font-medium text-[var(--color-text-secondary)] transition-colors group-hover:text-[var(--color-accent)]">
              {item.label}
            </strong>
            <span aria-hidden>&middot;</span>
            <span>{item.value}</span>
            <span
              aria-hidden
              className="ml-0.5 translate-y-[-1px] text-[0.6875rem] text-[var(--color-text-muted)] transition-all group-hover:translate-x-px group-hover:translate-y-[-2px] group-hover:text-[var(--color-accent)]"
            >
              ↗
            </span>
          </a>
        ))}
      </div>
    </div>
  );
}
