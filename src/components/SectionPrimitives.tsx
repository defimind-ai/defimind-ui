import type { ReactNode } from "react";

export function SectionEyebrow({ children }: { children: ReactNode }) {
  return (
    <div className="mb-5 text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-accent)]">
      {children}
    </div>
  );
}

export function SectionTitle({ children }: { children: ReactNode }) {
  return (
    <h2 className="mb-5 max-w-[28ch] text-[clamp(1.75rem,3.5vw,2.5rem)] font-medium leading-[1.2] tracking-[-0.02em] text-[var(--color-text-primary)]">
      {children}
    </h2>
  );
}

export function SectionLede({ children }: { children: ReactNode }) {
  return (
    <p className="mb-12 max-w-[60ch] text-[1.0625rem] leading-[1.65] text-[var(--color-text-secondary)]">
      {children}
    </p>
  );
}
