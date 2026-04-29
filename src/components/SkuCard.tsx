type Spec = { label: string; value: string; isPrice?: boolean };

export type Sku = {
  name: string;
  description: string;
  coverage: string;
  specs: Spec[];
  ctaLabel: string;
  ctaHref: string;
};

export function SkuCard({ sku }: { sku: Sku }) {
  return (
    <div className="relative flex flex-col overflow-hidden rounded-lg border border-[rgb(58_106_120/0.3)] bg-[var(--color-bg-elevated)] p-7 pt-8">
      {/* Teal top border — the one moment of color in the SKU rail */}
      <span
        aria-hidden
        className="absolute inset-x-0 top-0 h-0.5 bg-[var(--color-accent)]"
      />

      <h3 className="mb-3.5 text-[1.125rem] font-medium tracking-[-0.01em] text-[var(--color-text-primary)]">
        {sku.name}
      </h3>

      <p className="mb-4 text-[0.9375rem] leading-[1.6] text-[var(--color-text-secondary)]">
        {sku.description}
      </p>

      <p className="mb-7 text-[0.8125rem] leading-[1.5] text-[var(--color-text-muted)]">
        {sku.coverage}
      </p>

      <div className="mb-5 h-px bg-[rgb(58_106_120/0.3)]" />

      <dl className="mb-7 flex flex-col gap-2 text-[0.8125rem]">
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
  );
}
