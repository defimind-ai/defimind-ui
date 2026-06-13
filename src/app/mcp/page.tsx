import type { Metadata } from "next";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import {
  SectionEyebrow,
  SectionTitle,
  SectionLede,
} from "@/components/SectionPrimitives";

export const metadata: Metadata = {
  title: "MCP Endpoint",
  description:
    "Live Uniswap V2/V3 LP analytics over the Model Context Protocol — position PnL, price scenarios, pool health, rug signals, slippage. Authless, bring-your-own-RPC, powered by open-source defipy.",
  alternates: { canonical: "/mcp" },
  openGraph: {
    type: "website",
    url: "https://defimind.ai/mcp",
    siteName: "DeFiMind",
    title: "MCP Endpoint — DeFiMind",
    description:
      "Live Uniswap V2/V3 LP analytics over MCP — position PnL, price scenarios, pool health, rug signals, slippage. Authless, bring-your-own-RPC.",
  },
};

const ENDPOINT = "https://mcp.defimind.ai/mcp";

const tools: { name: string; desc: string; query: string }[] = [
  {
    name: "AnalyzePosition",
    desc: "PnL decomposition for a V2/V3 LP position — impermanent loss, accumulated fees, and net result.",
    query: "Analyze my position in this Uniswap V3 USDC/ETH pool.",
  },
  {
    name: "SimulatePriceMove",
    desc: "Project a position's value at a hypothetical price change — new value, IL at the new price, and percentage change.",
    query: "If ETH drops 30%, what happens to my V3 position?",
  },
  {
    name: "CheckPoolHealth",
    desc: "Pool-level snapshot — TVL, reserves, LP concentration, fee tier, and current tick.",
    query: "Is this V3 pool healthy?",
  },
  {
    name: "DetectRugSignals",
    desc: "Threshold-based rug-pull signal flags over a pool's on-chain state.",
    query: "Any rug signals on this V2 pair?",
  },
  {
    name: "CalculateSlippage",
    desc: "Slippage, price impact, and max trade size for a proposed swap.",
    query: "How much slippage on a 50,000 USDC buy here?",
  },
];

const links: { label: string; href: string }[] = [
  {
    label: "Official MCP Registry",
    href: "https://registry.modelcontextprotocol.io/?search=defimind",
  },
  { label: "Smithery", href: "https://smithery.ai/servers/ic3moore/defimind" },
  { label: "Source (GitHub)", href: "https://github.com/defimind-ai/defimind-mcp" },
  { label: "defipy.org", href: "https://defipy.org" },
  { label: "State Twins paper", href: "https://arxiv.org/abs/2605.11522" },
];

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-md border border-[rgb(58_106_120/0.25)] bg-[var(--color-bg-elevated)] px-4 py-3 font-mono text-[0.85rem] leading-[1.6] text-[var(--color-text-secondary)]">
      <code>{children}</code>
    </pre>
  );
}

export default function McpPage() {
  return (
    <>
      <Nav />
      <main>
        {/* Header */}
        <section className="px-8 pb-16 pt-36">
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>MCP Endpoint</SectionEyebrow>
            <SectionTitle>DeFiMind, inside your AI client.</SectionTitle>
            <SectionLede>
              A Model Context Protocol endpoint exposing five live Uniswap V2/V3
              LP-analysis tools. Connect from Claude, Cursor, or any
              MCP-compatible client and ask natural-language questions about real
              pools &mdash; the agent calls a DeFiMind tool and answers with
              exact-math backing.
            </SectionLede>

            <div className="max-w-[640px]">
              <div className="mb-2 text-[0.8125rem] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                Endpoint &middot; streamable-HTTP &middot; authless
              </div>
              <CodeBlock>{ENDPOINT}</CodeBlock>
            </div>

            <div className="mt-8 flex flex-wrap gap-3.5">
              <a
                href="#install"
                className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent)] px-6 py-3 text-[0.9375rem] font-medium text-[var(--color-bg-base)] transition-colors hover:bg-[var(--color-accent-hover)]"
              >
                Install
              </a>
              <a
                href="#tools"
                className="inline-flex items-center justify-center rounded-md border border-[var(--color-accent-deep)] bg-transparent px-6 py-3 text-[0.9375rem] font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)]"
              >
                See the tools
              </a>
            </div>
          </div>
        </section>

        {/* Install */}
        <section
          id="install"
          className="border-t border-[rgb(58_106_120/0.2)] px-8 py-24"
        >
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>Install</SectionEyebrow>
            <SectionTitle>Connect in one step.</SectionTitle>
            <SectionLede>
              The endpoint is authless &mdash; no account, no API key. You supply
              an Ethereum RPC URL per call (bring-your-own-RPC); nothing is stored
              or logged.
            </SectionLede>

            <div className="space-y-10">
              <div>
                <h3 className="mb-3 text-base font-medium text-[var(--color-text-primary)]">
                  Claude Code
                </h3>
                <CodeBlock>{`claude mcp add --transport http defimind ${ENDPOINT}`}</CodeBlock>
              </div>

              <div>
                <h3 className="mb-3 text-base font-medium text-[var(--color-text-primary)]">
                  Claude Desktop
                </h3>
                <p className="text-[0.9375rem] leading-[1.65] text-[var(--color-text-secondary)]">
                  Settings &rarr; Connectors &rarr; Add custom connector. Use the
                  endpoint URL above.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-base font-medium text-[var(--color-text-primary)]">
                  Cursor
                </h3>
                <p className="text-[0.9375rem] leading-[1.65] text-[var(--color-text-secondary)]">
                  Settings &rarr; MCP &rarr; Add new MCP server. Name{" "}
                  <span className="font-mono text-[var(--color-text-primary)]">
                    defimind
                  </span>
                  , type{" "}
                  <span className="font-mono text-[var(--color-text-primary)]">
                    http
                  </span>
                  , URL the endpoint above.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Tools */}
        <section
          id="tools"
          className="border-t border-[rgb(58_106_120/0.2)] px-8 py-24"
        >
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>Tools</SectionEyebrow>
            <SectionTitle>Five live V2/V3 tools.</SectionTitle>
            <SectionLede>
              Each tool takes a{" "}
              <span className="font-mono text-[var(--color-text-primary)]">
                pool_address
              </span>
              , an{" "}
              <span className="font-mono text-[var(--color-text-primary)]">
                rpc_url
              </span>
              , and a{" "}
              <span className="font-mono text-[var(--color-text-primary)]">
                pool_type
              </span>{" "}
              (uniswap_v2 | uniswap_v3), plus an optional{" "}
              <span className="font-mono text-[var(--color-text-primary)]">
                chain_id
              </span>{" "}
              guard and{" "}
              <span className="font-mono text-[var(--color-text-primary)]">
                block_number
              </span>{" "}
              pin.
            </SectionLede>

            <div className="grid gap-x-10 gap-y-8 sm:grid-cols-2">
              {tools.map((tool) => (
                <div key={tool.name}>
                  <h3 className="mb-2 font-mono text-[0.95rem] font-medium text-[var(--color-accent)]">
                    {tool.name}
                  </h3>
                  <p className="mb-3 text-[0.9375rem] leading-[1.65] text-[var(--color-text-secondary)]">
                    {tool.desc}
                  </p>
                  <p className="border-l-2 border-[var(--color-accent-deep)] pl-3 text-[0.9375rem] italic leading-[1.6] text-[var(--color-text-muted)]">
                    {tool.query}
                  </p>
                </div>
              ))}
            </div>

            <p className="mt-10 text-[0.9375rem] leading-[1.65] text-[var(--color-text-muted)]">
              Balancer and Curve-style Stableswap tools arrive in v0.2 once
              defipy ships their live providers.
            </p>
          </div>
        </section>

        {/* How it works */}
        <section
          id="how"
          className="border-t border-[rgb(58_106_120/0.2)] px-8 py-24"
        >
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>How it works</SectionEyebrow>
            <SectionTitle>The math is open. The reports are paid.</SectionTitle>

            <div className="max-w-[68ch] space-y-5 text-base leading-[1.75] text-[var(--color-text-secondary)]">
              <p>
                DeFiMind reads{" "}
                <strong className="font-medium text-[var(--color-text-primary)]">
                  live
                </strong>{" "}
                Uniswap V2/V3 pool state through a caller-supplied RPC, passed per
                tool call. The endpoint is authless and stores nothing &mdash; the
                RPC URL is redacted from every receipt. Each call pulls state, runs
                the analysis, and returns a typed result.
              </p>
              <p>
                The analytics aren&rsquo;t API wrappers &mdash; they&rsquo;re
                closed-form AMM math, powered by the open-source{" "}
                <a
                  href="https://defipy.org"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-[rgb(93_168_160/0.3)] pb-px font-medium text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
                >
                  defipy
                </a>{" "}
                library and its State Twin substrate. V3 impermanent loss is
                computed over the position&rsquo;s tick range via
                concentrated-liquidity math.
              </p>
              <p>
                The same methodology backs DeFiMind&rsquo;s paid reports. The
                library is open and verifiable; the endpoint is the
                free, self-serve surface.
              </p>
            </div>

            <div className="mt-12 flex flex-wrap gap-x-7 gap-y-3">
              {links.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="border-b border-[rgb(93_168_160/0.3)] pb-px text-[0.9375rem] font-medium text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
                >
                  {link.label} &rarr;
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
