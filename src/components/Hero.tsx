export function Hero() {
  return (
    <section className="px-8 pb-28 pt-36">
      <div className="mx-auto max-w-[1100px]">
        <h1 className="mb-7 max-w-[18ch] text-[clamp(2.5rem,5.5vw,4rem)] font-medium leading-[1.1] tracking-[-0.025em] text-[var(--color-text-primary)]">
          Quantitative DeFi analysis, productized.
        </h1>
        <p className="mb-10 max-w-[55ch] text-lg leading-[1.6] text-[var(--color-text-secondary)]">
          PhD-grade liquidity-position analysis powered by defipy &mdash; our
          open-source AMM analytics library with 50,000+ downloads. Fixed-price
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
      </div>
    </section>
  );
}
