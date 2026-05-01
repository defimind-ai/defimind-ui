import { SectionEyebrow, SectionTitle } from "./SectionPrimitives";

export function About() {
  return (
    <section
      id="about"
      className="bg-[var(--color-bg-elevated)] px-8 py-28"
    >
      <div className="mx-auto max-w-[1100px]">
        <SectionEyebrow>About</SectionEyebrow>
        <SectionTitle>Ian Moore, PhD &mdash; Principal, DeFiMind</SectionTitle>

        <div className="max-w-[62ch] space-y-5 text-base leading-[1.75] text-[var(--color-text-secondary)]">
          <p>
            DeFiMind is a quantitative DeFi research practice. Engagements range
            from productized work &mdash; LP audits, treasury reviews, pool
            diagnostics &mdash; through scoped advisory for teams whose
            problems don&rsquo;t fit a fixed-scope SKU. The methodology is
            grounded in defipy, the open-source AMM analytics library Ian
            founded and maintains.
          </p>

          <p>
            PhD in Engineering Mathematics from Queen&rsquo;s University, with a
            specialization in time-series analysis. Five years of focused DeFi
            research since 2021, including peer-style preprints on EIP-1559
            dynamics, on-chain provenance, and the cost analysis of append-only
            registry primitives.
          </p>

          <p>
            Prior to DeFi, fifteen years as a senior data scientist and applied
            mathematician &mdash; lead and senior roles spanning IIOT, machine
            learning, and statistical modeling. Peer-reviewed publications in
            applied harmonic analysis (over 170 citations on a 2004 paper on
            prolate spheroidal wave functions), biostatistics, and
            anesthesiology. Adjunct Lecturer in Biostatistics at the University
            of Toronto, 2010&ndash;2014.
          </p>

          <p>
            Also founder of AnchorRegistry, a separate venture building
            provenance infrastructure for the agentic economy (
            <a
              href="https://arxiv.org/abs/2604.03434"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-[rgb(93_168_160/0.3)] text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
            >
              arXiv:2604.03434
            </a>
            ).
          </p>

          <p className="pt-2 text-[0.9375rem] text-[var(--color-text-muted)]">
            Based in British Columbia. Engagements contracted through DeFiMind
            Inc.
          </p>
        </div>
      </div>
    </section>
  );
}
