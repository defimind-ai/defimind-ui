import { SectionEyebrow, SectionTitle } from "./SectionPrimitives";

export function About() {
  return (
    <section
      id="about"
      className="bg-[var(--color-bg-elevated)] px-8 py-28"
    >
      <div className="mx-auto max-w-[1100px]">
        <SectionEyebrow>About</SectionEyebrow>
        <SectionTitle>Ian Moore, PhD</SectionTitle>

        <p className="max-w-[62ch] text-base leading-[1.75] text-[var(--color-text-secondary)]">
          Bio coming soon.
        </p>
      </div>
    </section>
  );
}
