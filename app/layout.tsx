import type { Metadata, Viewport } from "next";
import { Libre_Franklin, Courier_Prime, Homemade_Apple } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { site } from "@/lib/site";

const franklin = Libre_Franklin({
  variable: "--font-franklin",
  subsets: ["latin"],
  weight: ["500", "700", "800", "900"],
});

const typed = Courier_Prime({
  variable: "--font-typed",
  subsets: ["latin"],
  weight: ["400", "700"],
});

const script = Homemade_Apple({
  variable: "--font-script",
  subsets: ["latin"],
  weight: "400",
});

export const viewport: Viewport = {
  themeColor: "#e6dfca",
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
DESIGN CONTRACT — impeccable seed e113ac4f
THESIS: A newly registered Nigerian company proves itself the way Nigerian
commerce actually proves things — on stamped, numbered paperwork.
OWN-WORLD: The Operations Manifest. Every page is a company form (GL-01…GL-06)
typed onto bond paper: printed Franklin form voice, Courier typed entries,
form-blue ruling, one rubber stamp in red. Legal pages are carbon copies.
STORY: You have been handed Guilders' own file — waybill, record card,
continuation sheets, enquiry form, file copies — and the stamp says REGISTERED.
FIRST VIEWPORT: The manifest header itself: letterhead, serial number, the five
business lines typed as consignments, the RC 9819868 stamp landing on the sheet.
FORM: file-tab navigation, ruled tables, blank fields, signature footer.
*/
export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${franklin.variable} ${typed.variable} ${script.variable} antialiased`}
      >
        <a
          href="#main"
          className="sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-paper focus:px-4 focus:py-2 focus:font-form focus:text-sm focus:font-bold"
        >
          Skip to content
        </a>
        <Navbar />
        <main id="main">{children}</main>
      </body>
    </html>
  );
}
