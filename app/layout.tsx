import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/navbar";
import { Footer } from "@/components/footer";
import { site } from "@/lib/site";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

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

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Navbar />
        <main className="pt-16">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
