import { SectionEyebrow, SectionTitle } from "./SectionPrimitives";

export function Methodology() {
  return (
    <section id="method" className="px-8 py-28">
      <div className="mx-auto max-w-[1100px]">
        <SectionEyebrow>Methodology</SectionEyebrow>
        <SectionTitle>The math is open. The reports are paid.</SectionTitle>

        <div className="max-w-[62ch] space-y-5 text-base leading-[1.75] text-[var(--color-text-secondary)]">
          <p>
            DeFiMind analysis is powered by{" "}
            <strong className="font-medium text-[var(--color-text-primary)]">
              defipy
            </strong>{" "}
            &mdash; our open-source DeFi analytics library, maintained on GitHub
            with 50,000+ downloads across two years. Full coverage of Uniswap V2
            and V3, Balancer weighted pools, and Curve-style stableswaps.
          </p>
          <p>
            Buyers don&rsquo;t pay for proprietary math. They pay for the
            analysis: the right position selected, the data pulled cleanly, the
            model run correctly the first time, and the recommendation written
            by the operator behind the methodology.
          </p>
          <p>
            Every report cites the defipy functions used, links to the source,
            and is reproducible by anyone who wants to verify it.
          </p>
        </div>

        <div className="mt-10 flex flex-wrap gap-6">
          <a
            href="https://github.com/defipy-devs"
            className="border-b border-[rgb(93_168_160/0.3)] pb-px text-[0.9375rem] font-medium text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
          >
            GitHub: defipy-devs &rarr;
          </a>
          <a
            href="https://defipy.org"
            className="border-b border-[rgb(93_168_160/0.3)] pb-px text-[0.9375rem] font-medium text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
          >
            defipy.org &rarr;
          </a>
        </div>
      </div>
    </section>
  );
}
