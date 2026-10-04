import type { Metadata } from "next";
import Link from "next/link";
import { divisions } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "Guilders Limited is a diversified Nigerian company, operating across technology, logistics, commerce, assets and ventures.",
};


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

      {/* CTA */}
      <section className="bg-dark">
        <div className="container-site py-16 text-center sm:py-20">
          <h2 className="display-sub mx-auto max-w-xl text-white">
            Want to work with us?
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-7 text-white/70">
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
