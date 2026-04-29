import Image from "next/image";
import { SectionEyebrow, SectionTitle } from "./SectionPrimitives";

export function Methodology() {
  return (
    <section id="method" className="px-8 py-28">
      <div className="mx-auto max-w-[1100px]">
        <SectionEyebrow>Methodology</SectionEyebrow>
        <SectionTitle>The math is open. The reports are paid.</SectionTitle>

        {/*
          The defipy mark floats left so the body text flows around it.
          `shape-outside: circle()` makes text follow the disc's curve rather
          than its bounding box, which is the visual we actually want.
        */}
        <div className="text-base leading-[1.75] text-[var(--color-text-secondary)]">
          <Image
            src="/defipy-mark.png"
            alt="defipy"
            width={192}
            height={192}
            className="float-left mr-6 mb-3 h-24 w-24 shrink-0 [shape-outside:circle()] md:mr-8 md:h-28 md:w-28"
          />

          <div className="space-y-5">
            <p>
              DeFiMind analysis is powered by{" "}
              <strong className="font-medium text-[var(--color-text-primary)]">
                defipy
              </strong>{" "}
              &mdash; our open-source DeFi analytics library, maintained on
              GitHub with 50,000+ downloads across two years. Full coverage of
              Uniswap V2 and V3, Balancer weighted pools, and Curve-style
              stableswaps.
            </p>
            <p>
              Buyers don&rsquo;t pay for proprietary math. They pay for the
              analysis: the right position selected, the data pulled cleanly,
              the model run correctly the first time, and the recommendation
              written by the operator behind the methodology.
            </p>
            <p>
              Every report cites the defipy functions used, links to the source,
              and is reproducible by anyone who wants to verify it.
            </p>
          </div>

          <div className="clear-left mt-8 flex flex-wrap gap-6">
            <a
              href="https://github.com/defipy-devs"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-[rgb(93_168_160/0.3)] pb-px text-[0.9375rem] font-medium text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
            >
              GitHub: defipy-devs &rarr;
            </a>
            <a
              href="https://defipy.org"
              target="_blank"
              rel="noopener noreferrer"
              className="border-b border-[rgb(93_168_160/0.3)] pb-px text-[0.9375rem] font-medium text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
            >
              defipy.org &rarr;
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
