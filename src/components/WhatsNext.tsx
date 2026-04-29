export function WhatsNext() {
  return (
    <div className="border-t border-[rgb(58_106_120/0.2)] px-8 py-14">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-baseline gap-x-8 gap-y-3">
        <div className="shrink-0 text-xs font-medium uppercase tracking-[0.12em] text-[var(--color-text-muted)]">
          What&rsquo;s next
        </div>
        <p className="min-w-[280px] flex-1 text-[0.9375rem] leading-[1.6] text-[var(--color-text-secondary)]">
          Building toward agent-augmented analytics with operator sign-off
          &mdash; open methodology, human accountability, faster delivery. More
          on the direction in the{" "}
          <a
            href="https://arxiv.org/abs/2604.03434"
            className="border-b border-[rgb(93_168_160/0.3)] text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
          >
            arXiv paper
          </a>{" "}
          and on{" "}
          <a
            href="https://medium.com/@ic3moore"
            className="border-b border-[rgb(93_168_160/0.3)] text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
          >
            Medium
          </a>
          .
        </p>
      </div>
    </div>
  );
}
