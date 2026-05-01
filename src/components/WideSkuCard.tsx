import type { Sku } from "./SkuCard";

// Wide variant of SkuCard, used for offerings that don't fit the productized
// 3-column rail — typically scoped/custom work where the description needs
// more breathing room and the spec rows make less sense as a tight column.
//
// Visual register: same teal top border, same elevation, same border treatment
// as the standard SkuCard, but a horizontal layout that signals "different
// kind of offering" without reading as misaligned.
export function WideSkuCard({ sku }: { sku: Sku }) {
  return (
    <div className="relative overflow-hidden rounded-lg border border-[rgb(58_106_120/0.3)] bg-[var(--color-bg-elevated)] p-7 pt-8 md:p-9 md:pt-10">
      {/* Teal top border — matches the standard SkuCard treatment */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 bg-[var(--color-accent)]"
      />

      <div className="grid gap-8 md:grid-cols-[1.6fr_1fr] md:gap-12">
        {/* Left: name + description + coverage */}
        <div>
          <h3 className="mb-3.5 text-[1.125rem] font-medium tracking-[-0.01em] text-[var(--color-text-primary)]">
            {sku.name}
          </h3>

          <p className="mb-4 text-[0.9375rem] leading-[1.6] text-[var(--color-text-secondary)]">
            {sku.description}
          </p>

          <p className="text-[0.8125rem] leading-[1.5] text-[var(--color-text-muted)]">
            {sku.coverage}
          </p>
        </div>

        {/* Right: specs + CTA */}
        <div className="flex flex-col">
          <dl className="mb-6 flex flex-col gap-2 text-[0.8125rem]">
            {sku.specs.map((spec) => (
              <div
                key={spec.label}
                className="flex items-baseline justify-between gap-4"
              >
                <dt className="text-[var(--color-text-muted)]">{spec.label}</dt>
                <dd
                  className={
                    spec.isPrice
                      ? "text-right text-[0.9375rem] font-medium text-[var(--color-accent)]"
                      : "text-right text-[var(--color-text-secondary)]"
                  }
                >
                  {spec.value}
                </dd>
              </div>
            ))}
          </dl>

          <a
            href={sku.ctaHref}
            className="mt-auto rounded-md border border-[var(--color-accent-deep)] px-4 py-2.5 text-center text-sm font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)]"
          >
            {sku.ctaLabel} &rarr;
          </a>
        </div>
      </div>
    </div>
  );
}
