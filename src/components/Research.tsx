import { SectionEyebrow, SectionLede, SectionTitle } from "./SectionPrimitives";

type Paper = {
  title: string;
  authors: string;
  venue: string;
  year: string;
  blurb: string;
  href?: string; // omitted when forthcoming
  arxivId?: string; // shown on the card; omitted when forthcoming
  forthcoming?: boolean;
};

const papers: Paper[] = [
  {
    title:
      "Trustless Provenance Trees: A Game-Theoretic Framework for Operator-Gated Blockchain Registries",
    authors: "Ian C. Moore",
    venue: "arXiv",
    year: "2026",
    arxivId: "2604.03434",
    blurb:
      "A formal treatment of provenance trees with operator-gated registration. Introduces a dual-layer cryptographic commitment scheme that makes false attribution a strictly dominated strategy, with honest behavior as the unique Nash equilibrium. Deployed on Base as AnchorRegistry.",
    href: "https://arxiv.org/abs/2604.03434",
  },
  {
    title:
      "Append-Only On-Chain Registries: A Formal and Stochastic Cost Analysis of Parent-Hash DAG and Incremental Merkle Tree Primitives",
    authors: "Ian C. Moore, Fernando Paredes Garc\u00eda",
    venue: "Forthcoming",
    year: "2026",
    blurb:
      "Formal and stochastic cost analysis of the two dominant append-only registry primitives. Establishes O(1) gas complexity for parent-hash DAG, derives closed-form moments for incremental Merkle tree per-insert cost, and locates the empirical crossover at depth 5\u20136 across deployments on Base.",
    forthcoming: true,
  },
  {
    title: "Stochastic Properties of EIP-1559 Basefees",
    authors: "Ian C. Moore, Jagdeep Sidhu",
    venue: "arXiv",
    year: "2021",
    arxivId: "2105.03521",
    blurb:
      "Mathematical foundations for analyzing EIP-1559 base-fee dynamics as a stochastic process. Identifies the conditions under which gas-price outcomes behave as a stationary process and characterizes the regime boundaries.",
    href: "https://arxiv.org/abs/2105.03521",
  },
];

export function Research() {
  return (
    <section
      id="research"
      className="border-t border-[rgb(58_106_120/0.2)] px-8 py-28"
    >
      <div className="mx-auto max-w-[1100px]">
        <SectionEyebrow>Research</SectionEyebrow>
        <SectionTitle>Published research underpinning the practice.</SectionTitle>
        <SectionLede>
          Peer-style preprints on the math behind on-chain registries,
          provenance, and gas-cost dynamics. The methodology in DeFiMind
          engagements draws from this work; the work draws from the
          engagements.
        </SectionLede>

        <ul className="mt-12 grid list-none gap-5 md:grid-cols-3">
          {papers.map((paper) => (
            <PaperCard key={paper.title} paper={paper} />
          ))}
        </ul>
      </div>
    </section>
  );
}

function PaperCard({ paper }: { paper: Paper }) {
  const isForthcoming = paper.forthcoming === true;

  // Top-line label: arXiv ID for live papers, "Forthcoming" for unpublished.
  // Both render in the same small-caps eyebrow style so the row reads visually
  // consistent regardless of paper state.
  const topLabel = isForthcoming
    ? `${paper.venue} \u00b7 ${paper.year}`
    : `${paper.venue} \u00b7 ${paper.arxivId}`;

  // Outer wrapper: anchor for live papers, div for forthcoming. Same visual
  // chrome either way; the "active" affordance only appears on hoverable cards.
  const cardClasses =
    "relative flex h-full flex-col overflow-hidden rounded-lg border border-[rgb(58_106_120/0.3)] bg-[var(--color-bg-elevated)] p-7 pt-8";

  const content = (
    <>
      <span
        aria-hidden
        className={
          isForthcoming
            ? "absolute inset-x-0 top-0 h-0.5 bg-[var(--color-accent-deep)]"
            : "absolute inset-x-0 top-0 h-0.5 bg-[var(--color-accent)]"
        }
      />

      <div className="mb-4 flex items-baseline justify-between gap-3 text-[0.6875rem] font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
        <span>{topLabel}</span>
        {isForthcoming && (
          <span className="rounded border border-[var(--color-accent-deep)] px-1.5 py-px text-[0.625rem] tracking-[0.1em] text-[var(--color-text-secondary)]">
            Soon
          </span>
        )}
      </div>

      <h3 className="mb-2.5 text-[1rem] font-medium leading-[1.35] tracking-[-0.005em] text-[var(--color-text-primary)]">
        {paper.title}
      </h3>

      <p className="mb-4 text-[0.8125rem] text-[var(--color-text-muted)]">
        {paper.authors}
      </p>

      <p className="mb-5 text-[0.875rem] leading-[1.6] text-[var(--color-text-secondary)]">
        {paper.blurb}
      </p>

      {!isForthcoming && (
        <span className="mt-auto inline-flex items-baseline gap-1 text-[0.875rem] font-medium text-[var(--color-accent)]">
          Read on arXiv
          <span aria-hidden className="text-[0.75rem]">
            &#8599;
          </span>
        </span>
      )}
      {isForthcoming && (
        <span className="mt-auto text-[0.8125rem] italic text-[var(--color-text-muted)]">
          Available shortly.
        </span>
      )}
    </>
  );

  if (isForthcoming) {
    return (
      <li className={cardClasses}>{content}</li>
    );
  }

  return (
    <li>
      <a
        href={paper.href}
        target="_blank"
        rel="noopener noreferrer"
        className={`${cardClasses} group transition-colors hover:border-[var(--color-accent)]`}
      >
        {content}
      </a>
    </li>
  );
}
