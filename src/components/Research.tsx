import { SectionEyebrow, SectionLede, SectionTitle } from "./SectionPrimitives";

type Paper = {
  title: string;
  authors: string;
  date: string; // "Month Year" — load-bearing for the timeline narrative
  venue: string; // "arXiv 2604.03434" or "Forthcoming"
  blurb: string;
  href?: string;
  forthcoming?: boolean;
};

// Ordered chronologically (oldest first) so the date column reads left-to-right
// as a timeline. The publication arc — May 2021 → April 2026 → May 2026
// (forthcoming) — is itself the strongest qualifying signal in this section,
// independent of the papers' content. Surface it.
const papers: Paper[] = [
  {
    title: "Stochastic Properties of EIP-1559 Basefees",
    authors: "Ian C. Moore, Jagdeep Sidhu",
    date: "May 2021",
    venue: "arXiv 2105.03521",
    blurb:
      "Mathematical foundations for analyzing EIP-1559 base-fee dynamics as a stochastic process. Identifies the conditions under which gas-price outcomes behave as a stationary process and characterizes the regime boundaries.",
    href: "https://arxiv.org/abs/2105.03521",
  },
  {
    title:
      "Trustless Provenance Trees: A Game-Theoretic Framework for Operator-Gated Blockchain Registries",
    authors: "Ian C. Moore",
    date: "April 2026",
    venue: "arXiv 2604.03434",
    blurb:
      "A formal treatment of provenance trees with operator-gated registration. Introduces a dual-layer cryptographic commitment scheme that makes false attribution a strictly dominated strategy, with honest behavior as the unique Nash equilibrium. Deployed on Base as AnchorRegistry.",
    href: "https://arxiv.org/abs/2604.03434",
  },
  {
    title:
      "Append-Only On-Chain Registries: A Formal and Stochastic Cost Analysis of Parent-Hash DAG and Incremental Merkle Tree Primitives",
    authors: "Ian C. Moore, Fernando Paredes Garc\u00eda",
    date: "May 2026",
    venue: "Forthcoming",
    blurb:
      "Formal and stochastic cost analysis of the two dominant append-only registry primitives. Establishes O(1) gas complexity for parent-hash DAG, derives closed-form moments for incremental Merkle tree per-insert cost, and locates the empirical crossover at depth 5\u20136 across deployments on Base.",
    forthcoming: true,
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
        <SectionTitle>
          Five years of peer-style research underpinning the practice.
        </SectionTitle>
        <SectionLede>
          Preprints on the math behind on-chain registries, provenance, and
          gas-cost dynamics &mdash; published since 2021. The methodology in
          DeFiMind engagements draws from this work; the work draws from the
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

  // Same chrome regardless of state. Live cards become anchor tags with hover
  // affordance; forthcoming cards stay as plain list items.
  const cardClasses =
    "relative flex h-full flex-col overflow-hidden rounded-lg border border-[rgb(58_106_120/0.3)] bg-[var(--color-bg-elevated)] p-7 pt-8";

  const content = (
    <>
      {/* Top accent: full teal for live papers, muted deep teal for forthcoming.
         Keeps the row visually consistent while signaling state. */}
      <span
        aria-hidden
        className={
          isForthcoming
            ? "absolute inset-x-0 top-0 h-0.5 bg-[var(--color-accent-deep)]"
            : "absolute inset-x-0 top-0 h-0.5 bg-[var(--color-accent)]"
        }
      />

      {/* Date as the primary label — loud, prominent, the first thing the eye
         catches. The publication date doing the timeline work. */}
      <div className="mb-1 flex items-baseline justify-between gap-3">
        <span className="text-[1.125rem] font-medium tracking-[-0.005em] text-[var(--color-accent)]">
          {paper.date}
        </span>
        {isForthcoming && (
          <span className="rounded border border-[var(--color-accent-deep)] px-1.5 py-px text-[0.625rem] font-medium uppercase tracking-[0.1em] text-[var(--color-text-secondary)]">
            Soon
          </span>
        )}
      </div>

      {/* Venue / arXiv ID below the date, smaller — provides citation handle
         without competing with the date for primary attention. */}
      <div className="mb-5 text-[0.75rem] uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
        {paper.venue}
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
    return <li className={cardClasses}>{content}</li>;
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
