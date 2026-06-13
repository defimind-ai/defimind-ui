import Link from "next/link";

export function Hero() {
  return (
    <section className="px-8 pb-28 pt-36">
      <div className="mx-auto max-w-[1100px]">
        <h1 className="mb-7 max-w-[18ch] text-[clamp(2.5rem,5.5vw,4rem)] font-medium leading-[1.1] tracking-[-0.025em] text-[var(--color-text-primary)]">
          Quantitative DeFi analysis, productized.
        </h1>
        <p className="mb-10 max-w-[55ch] text-lg leading-[1.6] text-[var(--color-text-secondary)]">
          PhD-grade liquidity-position analysis powered by defipy &mdash; our
          open-source AMM analytics library with 55,000+ downloads. Fixed-price
          reports. Operator sign-off. Methodology you can verify.
        </p>
        <div className="flex flex-wrap gap-3.5">
          <a
            href="#contact"
            className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent)] px-6 py-3 text-[0.9375rem] font-medium text-[var(--color-bg-base)] transition-colors hover:bg-[var(--color-accent-hover)]"
          >
            Request an audit
          </a>
          <a
            href="#services"
            className="inline-flex items-center justify-center rounded-md border border-[var(--color-accent-deep)] bg-transparent px-6 py-3 text-[0.9375rem] font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)]"
          >
            See services
          </a>
        </div>

        {/* Free, self-serve surface — the open side of "the math is open, the
            reports are paid." Secondary to the audit CTAs above. */}
        <Link
          href="/mcp"
          className="group mt-8 inline-flex max-w-[55ch] items-center gap-3 rounded-lg border border-[rgb(58_106_120/0.35)] bg-[var(--color-bg-elevated)] px-5 py-3.5 transition-colors hover:border-[var(--color-accent)]"
        >
          <span className="shrink-0 rounded-sm bg-[rgb(93_168_160/0.15)] px-2 py-0.5 text-[0.7rem] font-medium uppercase tracking-wide text-[var(--color-accent)]">
            Free
          </span>
          <span className="text-[0.9375rem] leading-[1.5] text-[var(--color-text-secondary)]">
            <strong className="font-medium text-[var(--color-text-primary)]">
              MCP endpoint
            </strong>{" "}
            &mdash; live Uniswap V2/V3 analysis in Claude, Cursor &amp; any MCP
            client
          </span>
          <span className="ml-auto shrink-0 text-[var(--color-accent)] transition-transform group-hover:translate-x-0.5">
            &rarr;
          </span>
        </Link>
      </div>
    </section>
  );
}
