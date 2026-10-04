import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Contact Guilders Limited — email hello@guilders.ltd. Office: Opposite Total Filling Station, New Garage, Makurdi, Benue State, Nigeria.",
};

export default function ContactPage() {
  return (
    <>
      <section className="container-site py-16 sm:py-24">
        <p className="text-sm font-semibold text-green">Contact</p>
        <h1 className="display-section mt-4 max-w-2xl text-ink">
          Tell us what you need
        </h1>
        <p className="mt-6 max-w-[54ch] text-lg leading-8 text-body">
          Software, haulage, supply, leasing or a venture worth backing — one
          message reaches every division. We reply within one business day.
        </p>

        <div className="mt-12 grid gap-5 md:grid-cols-2">
          <a
            href={`mailto:${site.email}`}
            className="group rounded-2xl border border-line p-7 transition-colors hover:border-green"
          >
            <p className="text-sm font-medium text-soft">Email</p>
            <p className="mt-2 font-display text-xl font-semibold tracking-tight text-ink">
              {site.email}
            </p>
            <span className="mt-4 inline-block text-sm font-semibold text-green">
              Write to us →
            </span>
          </a>
          <div className="rounded-2xl border border-line p-7">
            <p className="text-sm font-medium text-soft">Office</p>
            <p className="mt-2 font-display text-xl font-semibold leading-snug tracking-tight text-ink">
              Opposite Total Filling Station, New Garage
            </p>
            <p className="mt-1 text-sm leading-6 text-body">
              Makurdi, Benue State, Nigeria
            </p>
          </div>
        </div>
      </section>

      <section className="border-t border-line bg-mint">
        <div className="container-site py-14 sm:py-16">
          <h2 className="font-display text-xl font-semibold tracking-tight text-ink">
            What to include in your message
          </h2>
          <ul className="mt-5 grid max-w-4xl gap-4 text-[15px] leading-6 text-body sm:grid-cols-3">
            <li className="rounded-xl bg-paper px-5 py-4">
              <span className="font-semibold text-ink">The job.</span> What you
              need done, in a sentence or two.
            </li>
            <li className="rounded-xl bg-paper px-5 py-4">
              <span className="font-semibold text-ink">The timeline.</span>{" "}
              When you need it — even a rough date helps.
            </li>
            <li className="rounded-xl bg-paper px-5 py-4">
              <span className="font-semibold text-ink">The best reply.</span>{" "}
              How and when to reach you.
            </li>
          </ul>
          <p className="mt-6 text-sm text-soft">
            Company details for your records: Guilders Limited · {site.rcNumber}{" "}
            · {site.address}
          </p>
        </div>
      </section>
    </>
  );
}
