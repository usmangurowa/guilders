import type { Metadata } from "next";
import Link from "next/link";
import { site, divisions } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Guilders Limited is a diversified Nigerian company incorporated under CAMA 2020, operating across technology, logistics, commerce, assets and ventures.",
};

const facts: [string, string][] = [
  ["Legal name", "Guilders Limited"],
  ["Company type", "Private company limited by shares"],
  ["RC number", site.rcNumber],
  ["Incorporated", `${site.incorporated} — CAC, Nigeria`],
  ["Governing law", "Companies and Allied Matters Act 2020"],
  ["Share capital", "₦1,000,000"],
  ["Registered office", site.address],
  ["Director", "Hassan Usman Gurowa"],
];

export default function AboutPage() {
  return (
    <>
      {/* Header */}
      <section className="container-site py-16 sm:py-24">
        <p className="text-sm font-semibold text-green">Company</p>
        <h1 className="display-section mt-4 max-w-3xl text-ink">
          A Nigerian company built to operate, not just to exist
        </h1>
        <div className="mt-8 max-w-3xl space-y-5 text-lg leading-8 text-body">
          <p>
            Guilders Limited was incorporated in Makurdi, Benue State, with a
            deliberately broad mandate: to build and run real businesses across
            the sectors where Nigeria needs dependable operators — technology,
            transport, trade, assets and investment.
          </p>
          <p>
            We are not a marketplace, an agency or a broker. We own our
            operations. Our engineers write the software, our fleet moves the
            goods, our contracts carry our name — and the same standard of
            delivery applies across every division.
          </p>
        </div>
      </section>

      {/* Registration facts */}
      <section className="border-y border-line bg-mint">
        <div className="container-site grid gap-12 py-16 sm:py-20 lg:grid-cols-[1fr_1.3fr]">
          <div>
            <h2 className="display-sub text-ink">On the record</h2>
            <p className="mt-4 max-w-[46ch] leading-7 text-body">
              Everything below is drawn from our incorporation documents at the
              Corporate Affairs Commission. It is the full, verifiable record
              of who we are.
            </p>
          </div>
          <dl className="divide-y divide-line rounded-2xl border border-line bg-white px-6 sm:px-8">
            {facts.map(([label, value]) => (
              <div
                key={label}
                className="grid gap-1 py-4 sm:grid-cols-[11rem_1fr] sm:gap-6"
              >
                <dt className="text-sm font-medium text-soft">{label}</dt>
                <dd className="text-[15px] font-medium leading-6 text-ink">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* What we do */}
      <section className="container-site py-16 sm:py-24">
        <h2 className="display-sub max-w-2xl text-ink">
          Five divisions under one roof
        </h2>
        <p className="mt-4 max-w-[60ch] leading-7 text-body">
          Our memorandum of association authorises five lines of business.
          Each is run as a distinct division with its own focus — and each
          strengthens the others.
        </p>
        <div className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((d) => (
            <Link
              key={d.slug}
              href={`/services/#${d.slug}`}
              className="group rounded-2xl border border-line p-6 transition-colors hover:border-green"
            >
              <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                {d.name}
              </h3>
              <p className="mt-2 text-sm leading-6 text-body">{d.tagline}</p>
              <span className="mt-4 inline-block text-sm font-semibold text-green">
                Learn more →
              </span>
            </Link>
          ))}
        </div>
      </section>

      {/* Leadership */}
      <section className="border-t border-line">
        <div className="container-site grid gap-10 py-16 sm:py-20 lg:grid-cols-[1fr_1.3fr]">
          <h2 className="display-sub text-ink">Leadership</h2>
          <div>
            <p className="font-display text-xl font-semibold tracking-tight text-ink">
              Hassan Usman Gurowa
            </p>
            <p className="mt-1 text-sm font-medium text-green">
              Founder &amp; Director
            </p>
            <p className="mt-4 max-w-[58ch] leading-7 text-body">
              Hassan founded Guilders to prove that a Nigerian company can be
              diversified and disciplined at the same time. He is the
              company&apos;s sole director and drives its strategy across all
              five divisions from Makurdi.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-dark">
        <div className="container-site py-16 text-center sm:py-20">
          <h2 className="display-sub mx-auto max-w-xl text-white">
            Want to work with us?
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-7 text-[#a9c4b8]">
            We answer every serious enquiry within one business day.
          </p>
          <div className="mt-8">
            <Link href="/contact/" className="btn-on-dark">
              Get in touch
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
