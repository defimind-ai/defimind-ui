import type { Metadata } from "next";
import Image from "next/image";
import { Nav } from "@/components/Nav";
import { Footer } from "@/components/Footer";
import {
  SectionEyebrow,
  SectionTitle,
  SectionLede,
} from "@/components/SectionPrimitives";

export const metadata: Metadata = {
  title: "Cleo · DeFiMind's LP Analyst Agent",
  description:
    "Cleo is DeFiMind's analyst agent — she watches your Uniswap LP positions, consults DeFiMind's hosted analytics, and reports her findings. Analysis only; you make every decision. Built on the open-source defipy State Twins substrate.",
  alternates: { canonical: "/cleo" },
  openGraph: {
    type: "website",
    url: "https://defimind.ai/cleo",
    siteName: "DeFiMind",
    title: "Cleo · DeFiMind's LP Analyst Agent",
    description:
      "An LP analyst agent that watches your Uniswap positions and reports — analysis only, you decide. Powered by DeFiMind's hosted MCP endpoint.",
  },
};

const ENDPOINT = "https://mcp.defimind.ai/mcp";

// ─── Presentational helpers ──────────────────────────────────────────────────

function CodeBlock({ children }: { children: string }) {
  return (
    <pre className="overflow-x-auto rounded-md border border-[rgb(58_106_120/0.25)] bg-[var(--color-bg-elevated)] px-4 py-3 font-mono text-[0.82rem] leading-[1.6] text-[var(--color-text-secondary)]">
      <code>{children}</code>
    </pre>
  );
}

// ─── Page ────────────────────────────────────────────────────────────────────

export default function CleoPage() {
  return (
    <>
      <Nav />
      <main>
        {/*
          HERO — Two-column on desktop (icon left, text right), stacked on
          mobile. Cleo sits in a parchment-toned portrait card (#F5EFE0) with
          a teal-deep border + soft shadow.

          Image rendering strategy:
          We use Next.js <Image fill /> inside a fixed-aspect-ratio container,
          with `object-contain` so the image fits at its NATURAL aspect ratio
          without distortion. The container is square; if the source file is
          slightly landscape (as the illustration appears to be), small
          parchment-toned margins show top/bottom — which reads as proper
          portrait matting. Plain <img> with h-auto turned out to be flaky
          for the dev-server static serve path; Next.js Image's `/_next/image`
          pipeline serves the file reliably.

          Header order: name first (SectionTitle = "Cleo."), descriptor as the
          small eyebrow above. The person is the page's anchor.
        */}
        <section className="px-8 pb-14 pt-28">
          <div className="mx-auto max-w-[1100px]">
            <div className="grid items-center gap-x-12 gap-y-10 md:grid-cols-[auto_1fr]">
              <div className="flex justify-center md:justify-start">
                <div className="relative aspect-square w-72 shrink-0 overflow-hidden rounded-2xl border border-[var(--color-accent-deep)] bg-[#F5EFE0] shadow-xl shadow-black/40 md:w-96">
                  <Image
                    src="/cleo-mark.png"
                    alt="Cleo — a classical sketch portrait, wearing a laurel crown, holding scrolls"
                    fill
                    priority
                    sizes="(min-width: 768px) 384px, 288px"
                    className="object-contain"
                  />
                </div>
              </div>

              <div>
                <SectionEyebrow>
                  DeFiMind&rsquo;s LP analyst agent
                </SectionEyebrow>
                <SectionTitle>Cleo.</SectionTitle>
                <SectionLede>
                  Cleo watches your Uniswap liquidity positions, consults
                  DeFiMind&rsquo;s hosted analytics, and reports her findings so
                  you can make informed decisions. She does not trade,
                  rebalance, or move funds &mdash; you make every decision.
                </SectionLede>

                <p className="mb-8 max-w-[55ch] text-[0.9375rem] leading-[1.65] text-[var(--color-text-muted)]">
                  Named for the Muse of history &mdash; the recorder of the DeFi
                  substrate.
                </p>

                <div className="flex flex-wrap gap-3.5">
                  <a
                    href="#install"
                    className="inline-flex items-center justify-center rounded-md bg-[var(--color-accent)] px-6 py-3 text-[0.9375rem] font-medium text-[var(--color-bg-base)] transition-colors hover:bg-[var(--color-accent-hover)]"
                  >
                    Install
                  </a>
                  <a
                    href="https://github.com/defimind-ai/defimind"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center rounded-md border border-[var(--color-accent-deep)] bg-transparent px-6 py-3 text-[0.9375rem] font-medium text-[var(--color-text-secondary)] transition-colors hover:border-[var(--color-accent)] hover:text-[var(--color-text-primary)]"
                  >
                    Source on GitHub
                  </a>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* What she does */}
        <section className="border-t border-[rgb(58_106_120/0.2)] px-8 py-20">
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>What she does</SectionEyebrow>
            <SectionTitle>Watch. Analyze. Report.</SectionTitle>
            <SectionLede>
              On a schedule you set, Cleo cycles through every pool in your
              watchlist, asks DeFiMind&rsquo;s hosted tools to inspect each one,
              and prints the result. Two tools run by default &mdash;{" "}
              <strong className="font-medium text-[var(--color-text-primary)]">
                CheckPoolHealth
              </strong>{" "}
              and{" "}
              <strong className="font-medium text-[var(--color-text-primary)]">
                DetectRugSignals
              </strong>{" "}
              &mdash; chosen because they suit continuous watching. Three more
              are available at the same endpoint and one line of code away.
            </SectionLede>

            <p className="mb-6 max-w-[68ch] text-base leading-[1.7] text-[var(--color-text-secondary)]">
              A real cycle against the hosted endpoint, watching a Uniswap V3
              USDC/WETH pool on mainnet:
            </p>

            <div className="max-w-[820px]">
              <CodeBlock>{`Cleo is watching 1 pool(s) via https://mcp.defimind.ai/mcp
Cycle every 60s. Analysis only — Cleo reports, you decide.

[2026-06-15 19:40:25Z] USDC/WETH 0.05% (V3) — CheckPoolHealth
{
  "version": "V3",
  "spot_price": 0.000547,
  "tvl_in_token0": 515430872.65,
  "num_lps": 1,
  "top_lp_share_pct": 1.0,
  "has_activity": false,
  "fee_pips": 500
}

[2026-06-15 19:40:26Z] USDC/WETH 0.05% (V3) — DetectRugSignals
{
  "single_sided_concentration": true,
  "signals_detected": 1,
  "risk_level": "medium",
  "details": [
    "single_sided_concentration: top LP holds 100.0% of supply (threshold 90.0%)"
  ]
}
  ⚠ ALERT: rug signal tripped: single_sided_concentration`}</CodeBlock>
            </div>

            <p className="mt-8 max-w-[68ch] text-[0.9375rem] leading-[1.65] text-[var(--color-text-muted)]">
              Cleo prints the full payload every cycle and emits an{" "}
              <span className="font-mono">⚠ ALERT</span> line when a signal
              trips. When nothing changes, you see steady output; when something
              changes, the change is loud.
            </p>
          </div>
        </section>

        {/* Install */}
        <section
          id="install"
          className="border-t border-[rgb(58_106_120/0.2)] px-8 py-20"
        >
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>Install</SectionEyebrow>
            <SectionTitle>The 10-minute path.</SectionTitle>
            <SectionLede>
              Cleo ships as the{" "}
              <span className="font-mono text-[var(--color-text-primary)]">
                defimind
              </span>{" "}
              Python package. Install, point her at your pools, run. The hosted
              endpoint is authless &mdash; no account, no API key, no wallet
              signature. You supply your own RPC URL per call (bring-your-own-RPC);
              it&rsquo;s never stored or logged.
            </SectionLede>

            <div className="space-y-10">
              <div>
                <h3 className="mb-3 text-base font-medium text-[var(--color-text-primary)]">
                  1. Install the package
                </h3>
                <div className="max-w-[640px]">
                  <CodeBlock>{`git clone https://github.com/defimind-ai/defimind.git
cd defimind
python -m venv .venv && source .venv/bin/activate
pip install .`}</CodeBlock>
                </div>
                <p className="mt-3 max-w-[68ch] text-[0.875rem] leading-[1.6] text-[var(--color-text-muted)]">
                  Requires Python 3.11+. Installing the package puts a{" "}
                  <span className="font-mono">defimind</span> command on your
                  PATH.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-base font-medium text-[var(--color-text-primary)]">
                  2. Configure your watchlist
                </h3>
                <div className="max-w-[640px]">
                  <CodeBlock>{`cp config.example.toml config.toml
# edit config.toml — set rpc_url and add [[pools]] blocks`}</CodeBlock>
                </div>
                <p className="mt-3 max-w-[68ch] text-[0.875rem] leading-[1.6] text-[var(--color-text-muted)]">
                  A pool block looks like:
                </p>
                <div className="mt-3 max-w-[640px]">
                  <CodeBlock>{`rpc_url = "https://your-rpc-provider.example/v2/<key>"
endpoint = "https://mcp.defimind.ai/mcp"
poll_interval_seconds = 60

[[pools]]
label = "USDC/WETH 0.05% (V3)"
address = "0x88e6A0c2dDD26FEEb64F039a2c41296FcB3f5640"
pool_type = "uniswap_v3"
chain_id = 1`}</CodeBlock>
                </div>
                <p className="mt-3 max-w-[68ch] text-[0.875rem] leading-[1.6] text-[var(--color-text-muted)]">
                  <span className="font-mono">config.toml</span> is git-ignored.
                  Your RPC URL stays local; the server reads chain state through
                  it but never persists it.
                </p>
              </div>

              <div>
                <h3 className="mb-3 text-base font-medium text-[var(--color-text-primary)]">
                  3. Run her
                </h3>
                <div className="max-w-[640px]">
                  <CodeBlock>defimind</CodeBlock>
                </div>
                <p className="mt-3 max-w-[68ch] text-[0.875rem] leading-[1.6] text-[var(--color-text-muted)]">
                  Cleo prints her intro line, runs a cycle, sleeps for{" "}
                  <span className="font-mono">poll_interval_seconds</span>, and
                  repeats. Ctrl-C to stop.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*
          Under the hood — the call-flow ASCII + three property cards.
          State Twins was previously a fourth card here; it's been promoted to
          its own section ("Substrate" / "The State Twin.") immediately below,
          since it's the fulcrum behind defipy and DeFiMind and earned dedicated
          surface area. The remaining three properties read tighter at 3-col.
        */}
        <section className="border-t border-[rgb(58_106_120/0.2)] px-8 py-20">
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>Under the hood</SectionEyebrow>
            <SectionTitle>A thin client. Open math underneath.</SectionTitle>
            <SectionLede>
              The{" "}
              <span className="font-mono text-[var(--color-text-primary)]">
                defimind
              </span>{" "}
              package holds the loop. The hosted MCP endpoint does the chain
              reads and the AMM math. The math itself is open-source. Three
              layers, each one stateless, each one verifiable.
            </SectionLede>

            <div className="max-w-[820px]">
              <CodeBlock>{`  Cleo (defimind package)            DeFiMind endpoint               substrate
  ───────────────────────            ─────────────────               ─────────
  read config.toml
  for each pool, each cycle:
    call a tool  ──────────────────▶ mcp.defimind.ai/mcp
                                     reads chain via your RPC  ────▶  defipy
                                     runs the analysis               State Twins
    receive result  ◀──────────────  returns a typed result
    report / alert
  sleep, repeat`}</CodeBlock>
            </div>

            <div className="mt-10 grid gap-x-10 gap-y-7 sm:grid-cols-3">
              <div>
                <h3 className="mb-2 text-base font-medium text-[var(--color-text-primary)]">
                  Authless, BYO-RPC
                </h3>
                <p className="text-[0.9375rem] leading-[1.65] text-[var(--color-text-secondary)]">
                  The endpoint requires no API key and no account. You supply
                  your own RPC URL per call &mdash; it carries any keys you
                  hold, it stays in your config, the server reads through it
                  once and redacts it from every receipt.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-base font-medium text-[var(--color-text-primary)]">
                  Stateless by construction
                </h3>
                <p className="text-[0.9375rem] leading-[1.65] text-[var(--color-text-secondary)]">
                  Each call builds a fresh State Twin, runs an AMM primitive,
                  returns a typed result. Nothing is cached between calls.
                  Nothing is logged except a redacted JSON receipt per
                  invocation.
                </p>
              </div>
              <div>
                <h3 className="mb-2 text-base font-medium text-[var(--color-text-primary)]">
                  Powered by open-source defipy
                </h3>
                <p className="text-[0.9375rem] leading-[1.65] text-[var(--color-text-secondary)]">
                  The AMM math behind every Cleo report lives in the{" "}
                  <a
                    href="https://defipy.org"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="border-b border-[rgb(93_168_160/0.3)] pb-px text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
                  >
                    defipy
                  </a>{" "}
                  library &mdash; open, peer-style researched, verifiable. The
                  math is open; the reports are paid.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/*
          Substrate / The State Twin — a dedicated section for the fulcrum
          paper. The diagram (state-twins.png) is designed for the dark page
          background, so it sits directly on #0A0E1A with no card frame.
          Deliberate visual contrast with the Hero: Cleo lives in her parchment
          card (she's a character), the substrate lives natively on the dark
          page (it's infrastructure).

          The diagram container is LEFT-ALIGNED with the text above and below
          (no flex/justify-center wrapper) — matches the page convention used
          by the CodeBlocks in "What she does" and "Under the hood".
        */}
        <section className="border-t border-[rgb(58_106_120/0.2)] px-8 py-20">
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>Substrate</SectionEyebrow>
            <SectionTitle>The State Twin.</SectionTitle>
            <SectionLede>
              Cleo&rsquo;s reasoning runs against a typed, in-memory replica of
              on-chain pool state &mdash; a State Twin. Without it, every
              &ldquo;what if?&rdquo; question would cost an RPC read or a real
              transaction. With it, an agent can fork, replay, and explore
              counterfactuals at memory speed.
            </SectionLede>

            <div className="relative my-12 aspect-[16/9] w-full max-w-[820px]">
              <Image
                src="/state-twins.png"
                alt="State Twin mechanism: an off-chain replica of on-chain AMM pool state that enables forking, replay, and counterfactual reasoning without each query incurring a new RPC call"
                fill
                sizes="(min-width: 820px) 820px, 100vw"
                className="object-contain"
              />
            </div>

            <div className="max-w-[68ch] space-y-5 text-base leading-[1.75] text-[var(--color-text-secondary)]">
              <p>
                Agentic DeFi reasoning today couples to chain time. Every
                analytical question &mdash; <em>will this position survive a
                30% drop?</em>, <em>what&rsquo;s the slippage at twice the
                size?</em>, <em>how would this position have done if we&rsquo;d
                entered last week?</em> &mdash; incurs either a fresh RPC read
                or, worse, a real transaction. The agent&rsquo;s effective
                action space is bounded by block confirmation latency and gas.
                That&rsquo;s a structural problem, not a performance one.
              </p>
              <p>
                The State Twin is the missing layer: a typed, in-memory replica
                of an on-chain AMM pool that preserves the protocol&rsquo;s
                exact mathematics while admitting the operations on-chain state
                cannot. Forking. Replay. Branching. Counterfactual rollout. A
                single live RPC read can seed N independent twins under
                distinct scenarios, all evaluated in sub-second wall-clock
                time. The math is identical to the chain; the questions are
                unbounded.
              </p>
              <p>
                This is the substrate Cleo runs on. Every{" "}
                <span className="font-mono text-[var(--color-text-primary)]">
                  CheckPoolHealth
                </span>{" "}
                report, every{" "}
                <span className="font-mono text-[var(--color-text-primary)]">
                  DetectRugSignals
                </span>{" "}
                trip, every counterfactual she&rsquo;ll eventually run as new
                modes ship &mdash; all of it happens against State Twin
                replicas of the pools you care about. The formal definition,
                fidelity bound, and reference implementation are in the paper.
              </p>
            </div>

            <div className="mt-10">
              <a
                href="https://arxiv.org/abs/2605.11522"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[rgb(93_168_160/0.3)] pb-px text-[0.9375rem] font-medium text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
              >
                Read the paper &middot; arXiv:2605.11522 &rarr;
              </a>
            </div>
          </div>
        </section>

        {/* Scope */}
        <section className="border-t border-[rgb(58_106_120/0.2)] bg-[var(--color-bg-elevated)] px-8 py-20">
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>Scope</SectionEyebrow>
            <SectionTitle>Analysis only. You decide.</SectionTitle>
            <div className="max-w-[68ch] space-y-5 text-base leading-[1.75] text-[var(--color-text-secondary)]">
              <p>
                Cleo produces{" "}
                <strong className="font-medium text-[var(--color-text-primary)]">
                  analysis
                </strong>
                , not{" "}
                <strong className="font-medium text-[var(--color-text-primary)]">
                  advice
                </strong>{" "}
                and not{" "}
                <strong className="font-medium text-[var(--color-text-primary)]">
                  action
                </strong>
                . She does not tell you to enter, exit, or rebalance a position.
                She does not transact. She does not hold keys.
              </p>
              <p>
                What she reports is information about your positions&rsquo;
                current state and risk; the decision is always yours. This is
                intentional and it is where the line stays. The agentic stack
                Cleo runs in is observation-only by design &mdash; the State
                Twins paper formalizes why the boundary belongs there.
              </p>
            </div>
          </div>
        </section>

        {/* Roadmap */}
        <section className="border-t border-[rgb(58_106_120/0.2)] px-8 py-20">
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>Roadmap</SectionEyebrow>
            <SectionTitle>It&rsquo;s always Cleo, in modes.</SectionTitle>
            <SectionLede>
              Today Cleo runs one mode: monitoring. New capabilities arrive as
              new modes &mdash; each one a question-shape Cleo can carry, each
              one composed from the same hosted tools and the same open-source
              substrate.
            </SectionLede>

            <div className="grid max-w-[820px] gap-x-10 gap-y-5 sm:grid-cols-2">
              <div className="border-l-2 border-[var(--color-accent)] pl-4">
                <div className="mb-1 text-[0.75rem] font-medium uppercase tracking-[0.08em] text-[var(--color-accent)]">
                  Today
                </div>
                <h3 className="mb-1 text-base font-medium text-[var(--color-text-primary)]">
                  Monitoring
                </h3>
                <p className="text-[0.9rem] leading-[1.6] text-[var(--color-text-secondary)]">
                  Watch a list of pools on a schedule. Pool health and rug
                  signals, every cycle.
                </p>
              </div>
              <div className="border-l-2 border-[var(--color-accent-deep)] pl-4">
                <div className="mb-1 text-[0.75rem] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                  Coming
                </div>
                <h3 className="mb-1 text-base font-medium text-[var(--color-text-primary)]">
                  Screening
                </h3>
                <p className="text-[0.9rem] leading-[1.6] text-[var(--color-text-secondary)]">
                  Filter a candidate set of pools against thresholds; surface
                  the ones worth a closer look.
                </p>
              </div>
              <div className="border-l-2 border-[var(--color-accent-deep)] pl-4">
                <div className="mb-1 text-[0.75rem] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                  Coming
                </div>
                <h3 className="mb-1 text-base font-medium text-[var(--color-text-primary)]">
                  Ensemble
                </h3>
                <p className="text-[0.9rem] leading-[1.6] text-[var(--color-text-secondary)]">
                  Fork a position into N State Twins under named price-shock
                  scenarios; report the envelope.
                </p>
              </div>
              <div className="border-l-2 border-[var(--color-accent-deep)] pl-4">
                <div className="mb-1 text-[0.75rem] font-medium uppercase tracking-[0.08em] text-[var(--color-text-muted)]">
                  Coming
                </div>
                <h3 className="mb-1 text-base font-medium text-[var(--color-text-primary)]">
                  Treasury
                </h3>
                <p className="text-[0.9rem] leading-[1.6] text-[var(--color-text-secondary)]">
                  Multi-position view for DAOs and funds &mdash; concentration,
                  correlation, aggregate IL trajectory.
                </p>
              </div>
            </div>

            <p className="mt-10 max-w-[68ch] text-[0.875rem] leading-[1.65] text-[var(--color-text-muted)]">
              v0.1 is the free monitoring agent. Heavier paid-compute analyses
              may later be offered as a metered tier &mdash; opt-in, not part of
              the free agent.
            </p>
          </div>
        </section>

        {/* Built on */}
        <section className="border-t border-[rgb(58_106_120/0.2)] px-8 py-20">
          <div className="mx-auto max-w-[1100px]">
            <SectionEyebrow>Built on</SectionEyebrow>
            <SectionTitle>Open math. Open source. Open paper.</SectionTitle>
            <div className="mt-8 flex flex-wrap gap-x-7 gap-y-3">
              <a
                href="https://github.com/defimind-ai/defimind"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[rgb(93_168_160/0.3)] pb-px text-[0.9375rem] font-medium text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
              >
                Source: defimind (GitHub) &rarr;
              </a>
              <a
                href={ENDPOINT}
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[rgb(93_168_160/0.3)] pb-px text-[0.9375rem] font-medium text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
              >
                MCP endpoint &rarr;
              </a>
              <a
                href="https://defipy.org"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[rgb(93_168_160/0.3)] pb-px text-[0.9375rem] font-medium text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
              >
                defipy.org &rarr;
              </a>
              <a
                href="https://arxiv.org/abs/2605.11522"
                target="_blank"
                rel="noopener noreferrer"
                className="border-b border-[rgb(93_168_160/0.3)] pb-px text-[0.9375rem] font-medium text-[var(--color-accent)] transition-colors hover:border-[var(--color-accent)]"
              >
                State Twins paper &rarr;
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
