import { SectionEyebrow, SectionTitle } from "./SectionPrimitives";

export function About() {
  return (
    <section className="bg-[var(--color-bg-elevated)] px-8 py-28">
      <div className="mx-auto max-w-[1100px]">
        <SectionEyebrow>About</SectionEyebrow>
        <SectionTitle>A research practice for liquidity analysis.</SectionTitle>

        <div className="max-w-[62ch] space-y-5 text-base leading-[1.75] text-[var(--color-text-secondary)]">
          <p>
            DeFiMind is the consulting practice of Ian Moore &mdash; PhD in
            Applied Mathematics, former Chief Data Scientist at Syscoin / SYS
            Labs, ETH Denver speaker, and the author of defipy.
          </p>
          <p>
            The practice exists because the open-source math is widely used,
            and a meaningful fraction of users would rather have the analysis
            delivered as a finished report than do the work themselves.
            DeFiMind is for that fraction.
          </p>
          <p>Engagements are contracted through DeFiMind Inc.</p>
        </div>
      </div>
    </section>
  );
}
