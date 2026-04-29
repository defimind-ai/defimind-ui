import { SectionEyebrow, SectionTitle } from "./SectionPrimitives";

// defipy mark — geometric reconstruction of the canonical defipy logo.
// Composition: outer circle, three nodes (top + two bottom), two connecting
// edges, and the "Py" wordmark inside the circle.
// Geometry matches docs/defipy_logo.drawio.
//
// Color strategy:
//   - Strokes (circle, edges) and "Py" text use currentColor → inherit from
//     parent via Tailwind's text-* utility, so the mark adapts to any context.
//   - Node fills use the defipy brand plum (#673147), which is part of the
//     mark's identity rather than a themable element.
function DefipyMark({ className = "" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 192 192"
      xmlns="http://www.w3.org/2000/svg"
      aria-hidden
      className={className}
    >
      {/* Outer circle */}
      <circle
        cx="95.25"
        cy="95.75"
        r="91.75"
        fill="none"
        stroke="currentColor"
        strokeWidth="8"
      />

      {/* Connecting edges — drawn before nodes so nodes overlap edge endpoints */}
      <line
        x1="43.61"
        y1="113.89"
        x2="75.39"
        y2="60.11"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />
      <line
        x1="125.39"
        y1="112.89"
        x2="96.61"
        y2="60.11"
        stroke="currentColor"
        strokeWidth="7"
        strokeLinecap="round"
      />

      {/* Three nodes — fill is part of the brand identity */}
      <circle
        cx="86"
        cy="49.5"
        r="15"
        fill="#673147"
        stroke="currentColor"
        strokeWidth="5"
      />
      <circle
        cx="37"
        cy="123.5"
        r="15"
        fill="#673147"
        stroke="currentColor"
        strokeWidth="5"
      />
      <circle
        cx="136"
        cy="123.5"
        r="15"
        fill="#673147"
        stroke="currentColor"
        strokeWidth="5"
      />

      {/* "Py" wordmark — sits inside the circle, beside the top node */}
      <text
        x="128"
        y="70"
        fontFamily="Helvetica, Arial, sans-serif"
        fontSize="45"
        fontWeight="400"
        fill="currentColor"
      >
        Py
      </text>
    </svg>
  );
}

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

        <div className="mt-10 flex flex-wrap items-center gap-6">
          <DefipyMark className="h-10 w-10 shrink-0 text-[var(--color-text-primary)]" />
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
    </section>
  );
}
