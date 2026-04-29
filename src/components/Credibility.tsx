const items = [
  { label: "defipy", value: "50K+ downloads" },
  { label: "ETH Denver 2024", value: "Speaker" },
  { label: "Book + courses", value: "Published" },
  { label: "arXiv", value: "2604.03434" },
  { label: "PhD", value: "Applied Math" },
  { label: "Former", value: "CDS, Syscoin" },
];

export function Credibility() {
  return (
    <div className="border-y border-[rgb(58_106_120/0.25)] py-7">
      <div className="mx-auto flex max-w-[1100px] flex-wrap items-center justify-between gap-x-8 gap-y-6 px-8">
        {items.map((item) => (
          <div
            key={item.label}
            className="flex items-baseline gap-1.5 text-[0.8125rem] text-[var(--color-text-muted)]"
          >
            <strong className="font-medium text-[var(--color-text-secondary)]">
              {item.label}
            </strong>
            <span aria-hidden>&middot;</span>
            <span>{item.value}</span>
          </div>
        ))}
      </div>
    </div>
  );
}
