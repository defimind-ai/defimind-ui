import { SectionEyebrow, SectionLede, SectionTitle } from "./SectionPrimitives";
import { SkuCard, type Sku } from "./SkuCard";

const skus: Sku[] = [
  {
    name: "LP Position Audit",
    description:
      "Forensic analysis of a single liquidity position. PnL attribution, impermanent loss exposure, exit slippage, depeg risk, and 1\u20133 concrete recommendations.",
    coverage:
      "Covers Uniswap V2, V3, Balancer weighted pools, Curve stableswaps.",
    specs: [
      { label: "Deliverable", value: "6\u201310 page PDF" },
      { label: "Turnaround", value: "5 business days" },
      { label: "Price", value: "$2,500", isPrice: true },
    ],
    ctaLabel: "Request audit",
    ctaHref: "#contact",
  },
  {
    name: "DAO Treasury Review",
    description:
      "Full review of your DAO\u2019s LP position book. Per-position analysis, cross-position risk, named stress scenarios, prioritized recommendations \u2014 written for governance forum publication.",
    coverage: "Up to 10 positions. Larger books quoted on request.",
    specs: [
      { label: "Deliverable", value: "PDF + markdown, 20\u201335 pages" },
      { label: "Turnaround", value: "2\u20133 weeks" },
      { label: "Price", value: "From $10,000", isPrice: true },
    ],
    ctaLabel: "Request quote",
    ctaHref: "#contact",
  },
  {
    name: "Pool Health & Rug Risk",
    description:
      "Pre-entry due diligence on a pool you\u2019re considering. TVL trend, fee/volume health, liquidity stability, rug signal screen, and slippage curves at your deployment size.",
    coverage: "Ends with an explicit go/no-go recommendation.",
    specs: [
      { label: "Deliverable", value: "4\u20136 page PDF" },
      { label: "Turnaround", value: "3 business days" },
      { label: "Price", value: "From $1,500", isPrice: true },
    ],
    ctaLabel: "Request assessment",
    ctaHref: "#contact",
  },
];

export function SkuRail() {
  return (
    <section id="services" className="px-8 py-28">
      <div className="mx-auto max-w-[1100px]">
        <SectionEyebrow>Services</SectionEyebrow>
        <SectionTitle>
          Three productized services. Fixed price, fixed scope, fast turnaround.
        </SectionTitle>
        <SectionLede>
          Each engagement contracted through DeFiMind Inc. Reports delivered as
          branded PDFs, with methodology citations and reproducibility notes.
        </SectionLede>

        <div className="mt-14 grid gap-5 md:grid-cols-3">
          {skus.map((sku) => (
            <SkuCard key={sku.name} sku={sku} />
          ))}
        </div>
      </div>
    </section>
  );
}
