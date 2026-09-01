import type { Metadata, Viewport } from "next";
import { Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

export const viewport: Viewport = {
  themeColor: "#ffffff",
};

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Guilders Limited — Technology, Logistics, Commerce & Ventures",
    template: "%s — Guilders Limited",
  },
  description: site.description,
  keywords: [
    "Guilders Limited",
    "Nigeria",
    "ICT services",
    "digital solutions",
    "logistics",
    "haulage",
    "fleet leasing",
    "general contracts",
    "ventures",
    "Makurdi",
  ],
  openGraph: {
    title: "Guilders Limited",
    description: site.description,
    url: site.url,
    siteName: "Guilders Limited",
    locale: "en_NG",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Guilders Limited",
    description: site.description,
  },
  robots: { index: true, follow: true },
};

/*
DESIGN CONTRACT — The Platform Standard
BRIEF (pinned): present Guilders the way Africa's most trusted platforms
present themselves — Paystack, Mono, Flutterwave. Studied 2026-09-01.
WORLD: white canvas, huge tight grotesque headlines, one confident green,
alternating division sections with bespoke operational UI cards, honest
registration facts as the proof strip, dark closing band, deep footer.
NEVER: invented metrics, fake customer logos, fabricated product claims.
*/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={`${inter.variable} ${interTight.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-ink focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
