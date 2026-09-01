import type { Metadata } from "next";
import { site } from "@/lib/site";
import { FormSheet } from "@/components/sheet";

export const metadata: Metadata = {
  title: "Terms of Service",
  description:
    "The terms that govern use of the Guilders Limited website and engagement of our services.",
};

const sections = [
  {
    heading: "1. About these terms",
    body: [
      "These Terms of Service (“Terms”) govern your use of the website guilders.ltd (the “Site”) operated by Guilders Limited (RC 9819868), a private company limited by shares incorporated in Nigeria with its registered office at 15 Ntonko Close, New Garage, Makurdi, Benue State, Nigeria (“Guilders”, “we”, “us”, “our”).",
      "By accessing or using the Site you agree to these Terms. If you do not agree, please do not use the Site.",
    ],
  },
  {
    heading: "2. Our services",
    body: [
      "Guilders operates business divisions across technology and digital solutions, transport and logistics, trade and commerce, asset ownership and leasing, and ventures and investments. Information on the Site describes these activities in general terms only.",
      "Any engagement of Guilders for specific services — including software development, haulage, dispatch, leasing, supply or contracting — is governed by a separate written agreement between you and Guilders. In the event of any conflict between such an agreement and these Terms, the agreement prevails.",
    ],
  },
  {
    heading: "3. No offer or advice",
    body: [
      "Content on the Site is provided for general information and does not constitute an offer, a binding quotation, or professional, financial, legal or investment advice. Statements about our ventures and investment activities are descriptive and are not a solicitation of investment.",
    ],
  },
  {
    heading: "4. Use of the Site",
    body: [
      "You agree to use the Site lawfully and not to interfere with its operation, attempt to gain unauthorised access to any systems, scrape the Site in a manner that burdens our infrastructure, or use the Site to transmit malicious code.",
    ],
  },
  {
    heading: "5. Intellectual property",
    body: [
      "The Site and its content — including the Guilders name, logo, text, graphics and design — are owned by or licensed to Guilders Limited and are protected by applicable intellectual-property laws. You may view and share content for personal or internal business reference, but you may not reproduce it commercially without our prior written consent.",
    ],
  },
  {
    heading: "6. Third-party links",
    body: [
      "The Site may link to third-party websites. We do not control and are not responsible for their content or privacy practices. Links do not imply endorsement.",
    ],
  },
  {
    heading: "7. Disclaimers",
    body: [
      "The Site is provided “as is” and “as available”. While we work to keep information accurate and current, we make no warranties, express or implied, about the completeness, accuracy or availability of the Site, to the fullest extent permitted by law.",
    ],
  },
  {
    heading: "8. Limitation of liability",
    body: [
      "To the fullest extent permitted by Nigerian law, Guilders Limited will not be liable for any indirect, incidental, special or consequential loss arising from your use of, or inability to use, the Site. Nothing in these Terms excludes liability that cannot be excluded by law.",
    ],
  },
  {
    heading: "9. Privacy",
    body: [
      "Our collection and use of personal information is described in our Privacy Policy, which forms part of these Terms.",
    ],
  },
  {
    heading: "10. Changes",
    body: [
      "We may update these Terms from time to time. The current version will always be published on this page with an updated effective date. Continued use of the Site after changes take effect constitutes acceptance of the revised Terms.",
    ],
  },
  {
    heading: "11. Governing law",
    body: [
      "These Terms are governed by the laws of the Federal Republic of Nigeria, and the courts of Nigeria have exclusive jurisdiction over any dispute arising from them.",
    ],
  },
  {
    heading: "12. Contact",
    body: [
      "Questions about these Terms should be sent to hello@guilders.ltd or by post to Guilders Limited, 15 Ntonko Close, New Garage, Makurdi, Benue State, Nigeria.",
    ],
  },
];
export default function TermsPage() {
  return (
    <FormSheet
      formNo="GL-06"
      formTitle="Conditions of Business"
      tint="gold"
      copyNote="Gold copy — conditions file"
    >
      <section className="pt-8">
        <h1 className="max-w-[24ch] font-form text-3xl font-black uppercase tracking-[0.02em] text-ink sm:text-4xl">
          Terms of Service
        </h1>
        <p className="mt-3 font-typed text-sm text-ink-soft">
          Last updated: 1 September 2026 · Governed by the laws of the Federal
          Republic of Nigeria
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
          Questions about these terms: {site.email}.
        </p>
      </section>
    </FormSheet>
  );
}
