import type { Metadata } from "next";
import { site } from "@/lib/site";
import { FormSheet } from "@/components/sheet";

export const metadata: Metadata = {
  title: "Privacy Policy",
  description:
    "How Guilders Limited collects, uses and protects personal information, in line with the Nigeria Data Protection Act 2023.",
};

const sections = [
  {
    heading: "1. Who we are",
    body: [
      `Guilders Limited (“Guilders”, “we”, “us”, “our”) is a private company limited by shares, incorporated in Nigeria (${"RC 9819868"}) with its registered office at ${"15 Ntonko Close, New Garage, Makurdi, Benue State, Nigeria"}. This Privacy Policy explains how we collect, use, share and protect personal information when you visit guilders.ltd, contact us, or do business with any Guilders division.`,
      "We are committed to handling personal data in accordance with the Nigeria Data Protection Act 2023 (NDPA) and other applicable data protection laws.",
    ],
  },
  {
    heading: "2. Information we collect",
    body: [
      "Information you give us directly — such as your name, email address, phone number, company details and the contents of any message when you email us at hello@guilders.ltd or otherwise contact us.",
      "Business information — details collected in the ordinary course of providing services, such as delivery addresses, contract details, billing information and correspondence.",
      "Technical information — our website is a static informational site and does not set tracking cookies. Our hosting infrastructure may record standard server logs (IP address, browser type, pages requested, timestamps) for security and reliability purposes.",
    ],
  },
  {
    heading: "3. How we use your information",
    body: [
      "To respond to enquiries and provide the services you request from any of our divisions (technology, logistics, commerce, assets and ventures).",
      "To perform contracts, issue invoices, arrange deliveries and manage business relationships.",
      "To meet legal and regulatory obligations, including tax, accounting and corporate-law requirements.",
      "To protect our systems, prevent fraud and maintain the security of our operations.",
      "We do not sell personal information, and we do not use it for third-party advertising.",
    ],
  },
  {
    heading: "4. Legal bases",
    body: [
      "We process personal data where it is necessary to perform a contract with you, to comply with a legal obligation, for our legitimate business interests (such as running and securing our operations), or with your consent, which you may withdraw at any time.",
    ],
  },
  {
    heading: "5. Sharing your information",
    body: [
      "We share personal data only where necessary: with service providers who support our operations (for example email, hosting and payment providers) under appropriate safeguards; with professional advisers; with regulators or law enforcement where required by law; and within Guilders divisions and subsidiaries for the purposes described in this policy.",
    ],
  },
  {
    heading: "6. Data retention",
    body: [
      "We keep personal data only as long as needed for the purposes described above, and afterwards as required by law (for example, records we must retain under Nigerian corporate and tax law). When data is no longer needed, we delete or anonymise it.",
    ],
  },
  {
    heading: "7. Security",
    body: [
      "We apply reasonable technical and organisational measures to protect personal data against unauthorised access, loss or misuse. No method of transmission or storage is completely secure, but we work to protect your information at a standard appropriate to the risk.",
    ],
  },
  {
    heading: "8. Your rights",
    body: [
      "Under the NDPA you have rights to access, correct, delete and object to or restrict the processing of your personal data, as well as the right to data portability and the right to withdraw consent. To exercise any of these rights, email hello@guilders.ltd. You also have the right to lodge a complaint with the Nigeria Data Protection Commission (NDPC).",
    ],
  },
  {
    heading: "9. Children",
    body: [
      "Our website and services are directed at businesses and adults. We do not knowingly collect personal data from children.",
    ],
  },
  {
    heading: "10. Changes to this policy",
    body: [
      "We may update this Privacy Policy from time to time. The latest version will always be published on this page with an updated effective date.",
    ],
  },
  {
    heading: "11. Contact us",
    body: [
      "For any privacy question or request, contact us at hello@guilders.ltd or write to Guilders Limited, 15 Ntonko Close, New Garage, Makurdi, Benue State, Nigeria.",
    ],
  },
];
export default function PrivacyPage() {
  return (
    <FormSheet
      formNo="GL-05"
      formTitle="Data Protection Notice"
      tint="pink"
      copyNote="Pink copy — data protection file"
    >
      <section className="pt-8">
        <h1 className="max-w-[24ch] font-form text-3xl font-black uppercase tracking-[0.02em] text-ink sm:text-4xl">
          Privacy Policy
        </h1>
        <p className="mt-3 font-typed text-sm text-ink-soft">
          Last updated: 1 September 2026 · Nigeria Data Protection Act 2023
        </p>
        {sections.map((s) => (
          <section key={s.heading} className="mt-12">
            <h2 className="font-form text-sm font-bold uppercase tracking-[0.1em] text-form">
              {s.heading}
            </h2>
            {s.body.map((p) => (
              <p
                key={p.slice(0, 40)}
                className="mt-4 max-w-[70ch] font-typed text-sm leading-7 text-ink"
              >
                {p}
              </p>
            ))}
          </section>
        ))}
        <p className="mt-12 max-w-[70ch] border-t border-ink/30 pt-6 font-typed text-sm leading-7 text-ink">
          Questions about this notice: {site.email}.
        </p>
      </section>
    </FormSheet>
  );
}
