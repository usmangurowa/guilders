import type { Metadata, Viewport } from "next";
import { Comfortaa, Geist_Mono, Inter, Inter_Tight } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";
import { themeScript } from "@/components/theme-toggle";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const interTight = Inter_Tight({
  variable: "--font-inter-tight",
  subsets: ["latin"],
  weight: ["500", "600", "700"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

// Wordmark only.
const comfortaa = Comfortaa({
  variable: "--font-comfortaa",
  subsets: ["latin"],
  weight: ["700"],
});

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#ffffff" },
    { media: "(prefers-color-scheme: dark)", color: "#05070d" },
  ],
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
DESIGN CONTRACT — Guilders DS (Paper file "Guilders — Design System")
One ink, one electric blue (Volt), isometric hairline glyphs per division.
Light and dark themes via the .dark class on <html>; tokens live in globals.css.
NEVER: invented metrics, fake customer logos, registry numbers on marketing pages.
*/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className={`${inter.variable} ${interTight.variable} ${geistMono.variable} ${comfortaa.variable} antialiased`}>
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:rounded-lg focus:bg-volt-solid focus:px-4 focus:py-2 focus:text-sm focus:font-semibold focus:text-white"
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
