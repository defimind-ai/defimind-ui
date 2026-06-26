const links = [
  { label: "GitHub", href: "https://github.com/defipy-devs" },
  { label: "defipy.org", href: "https://defipy.org" },
  { label: "arXiv", href: "https://arxiv.org/abs/2605.11522" },
  { label: "Medium", href: "https://medium.com/@ic3moore" },
  { label: "X", href: "https://x.com/ic3moore" },
  { label: "LinkedIn", href: "https://www.linkedin.com/company/defimind-ai" },
];

export function Footer() {
  return (
    <footer className="mt-8 border-t border-[rgb(58_106_120/0.2)] px-8 pb-10 pt-12">
      <div className="mx-auto max-w-[1100px]">
        <ul className="mb-6 flex flex-wrap gap-6 list-none">
          {links.map((link) => (
            <li key={link.label}>
              <a
                href={link.href}
                className="text-sm text-[var(--color-text-secondary)] transition-colors hover:text-[var(--color-accent)]"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>

        <div className="space-y-2 text-[0.8125rem] leading-[1.7] text-[var(--color-text-muted)]">
          {/*
            Canonical contact block. Uses the semantic <address> element so
            crawlers, screen readers, and AI systems recognize this as the
            organization's contact info. "DeFiMind" is the FIRST LINE of the
            address — this is required so the block is shippable as-is: the
            virtual mail service rejects (return-to-sender) any parcel that
            doesn't carry the registered business name on the label, and most
            copy-pasters will grab the whole <address> block as the recipient
            string. Email is included inside <address> too — semantically
            correct under HTML5, which scopes <address> to contact info
            generally, not just postal addresses.

            The same address is asserted as structured data in the root
            layout's JSON-LD Organization → PostalAddress, which is the
            strongest signal to search and AI systems for canonical business
            location. Organization.name = "DeFiMind" in the JSON-LD links the
            recipient identity to this PostalAddress.

            `not-italic` overrides the default italic styling of <address>.
          */}
          <address className="not-italic">
            <strong className="font-medium text-[var(--color-text-secondary)]">
              DeFiMind
            </strong>
            <br />
            4949 Canoe Pass Way, Suite 1008
            <br />
            Tsawwassen, BC V4M 0B2
            <br />
            Canada
            <br />
            <a
              href="mailto:imoore@defimind.ai"
              className="border-b border-[rgb(107_117_144/0.3)] text-[var(--color-text-secondary)]"
            >
              imoore@defimind.ai
            </a>
          </address>

          <p className="pt-4">
            Also building{" "}
            <strong className="font-medium text-[var(--color-text-secondary)]">
              AnchorRegistry
            </strong>{" "}
            &mdash; provenance infrastructure for the agentic economy.{" "}
            <a
              href="https://anchorregistry.com"
              className="border-b border-[rgb(107_117_144/0.3)] text-[var(--color-text-secondary)]"
            >
              anchorregistry.com
            </a>
          </p>
          <p className="pt-4 text-xs text-[var(--color-text-muted)]">
            &copy; 2026 DeFiMind Inc.
          </p>
        </div>
      </div>
    </footer>
  );
}
