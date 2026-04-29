import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Analytics } from "@vercel/analytics/next";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://defimind.ai"),
  title: {
    default: "DeFiMind — Quantitative DeFi analysis, productized",
    template: "%s — DeFiMind",
  },
  description:
    "PhD-grade liquidity-position analysis powered by defipy. Fixed-price reports, operator sign-off, methodology you can verify. LP audits, DAO treasury reviews, pool health assessments.",
  applicationName: "DeFiMind",
  keywords: [
    "DeFi analysis",
    "liquidity position audit",
    "DAO treasury review",
    "pool health assessment",
    "Uniswap V3 analysis",
    "impermanent loss",
    "defipy",
    "quantitative DeFi",
  ],
  authors: [{ name: "Ian Moore", url: "https://defimind.ai" }],
  creator: "Ian Moore",
  publisher: "DeFiMind Inc.",
  openGraph: {
    type: "website",
    url: "https://defimind.ai",
    siteName: "DeFiMind",
    title: "DeFiMind — Quantitative DeFi analysis, productized",
    description:
      "PhD-grade liquidity-position analysis powered by defipy. Fixed-price reports, operator sign-off, methodology you can verify.",
  },
  twitter: {
    card: "summary_large_image",
    site: "@ic3moore",
    creator: "@ic3moore",
    title: "DeFiMind — Quantitative DeFi analysis, productized",
    description:
      "PhD-grade liquidity-position analysis powered by defipy. Fixed-price reports, operator sign-off, methodology you can verify.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

// Schema.org JSON-LD for entity resolution and AI canonicality.
// Binds the domain, the company, and the operator together with sameAs links
// across all of the operator's public surfaces.
const jsonLd = {
  "@context": "https://schema.org",
  "@graph": [
    {
      "@type": "Organization",
      "@id": "https://defimind.ai/#organization",
      name: "DeFiMind",
      legalName: "DeFiMind Inc.",
      url: "https://defimind.ai",
      email: "contact@defimind.ai",
      description:
        "Productized quantitative DeFi analysis practice. LP audits, DAO treasury reviews, pool health assessments. Methodology powered by defipy.",
      founder: { "@id": "https://defimind.ai/#person" },
      sameAs: [
        "https://github.com/defipy-devs",
        "https://defipy.org",
        "https://www.linkedin.com/company/defimind-ai",
      ],
    },
    {
      "@type": "Person",
      "@id": "https://defimind.ai/#person",
      name: "Ian Moore",
      jobTitle: "Founder, DeFiMind",
      affiliation: { "@id": "https://defimind.ai/#organization" },
      sameAs: [
        "https://github.com/defipy-devs",
        "https://defipy.org",
        "https://arxiv.org/a/moore_i_1",
        "https://medium.com/@ic3moore",
        "https://x.com/ic3moore",
      ],
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="en"
      className={`${geistSans.variable} ${geistMono.variable} antialiased`}
    >
      <body>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
