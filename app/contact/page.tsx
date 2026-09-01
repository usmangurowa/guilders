import type { Metadata } from "next";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Contact",
  description:
    "Get in touch with Guilders Limited — partnerships, contracts, leasing, logistics and technology enquiries. Email hello@guilders.ltd.",
};

const channels = [
  {
    title: "General enquiries",
    text: "Questions about Guilders, our divisions or how we work.",
    action: `mailto:${site.email}?subject=General%20enquiry`,
    label: site.email,
  },
  {
    title: "Business & partnerships",
    text: "Contracts, supply deals, leasing, logistics and technology projects.",
    action: `mailto:${site.email}?subject=Business%20enquiry`,
    label: site.email,
  },
  {
    title: "Ventures & investment",
    text: "Pitch a venture, propose an acquisition or discuss co-investment.",
    action: `mailto:${site.email}?subject=Ventures%20enquiry`,
    label: site.email,
  },
];

export default function ContactPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            Contact
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Talk to Guilders.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            One inbox reaches every division. Tell us what you need and
            we&apos;ll route it to the right team — fast.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-block rounded-full bg-gold-500 px-7 py-3 text-base font-semibold text-navy-950 transition-colors hover:bg-gold-400"
          >
            {site.email}
          </a>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-6 md:grid-cols-3">
          {channels.map((c) => (
            <a
              key={c.title}
              href={c.action}
              className="group rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-xl hover:shadow-navy-900/5"
            >
              <h2 className="text-lg font-bold text-navy-900">{c.title}</h2>
              <p className="mt-2 text-sm leading-relaxed text-slate-600">
                {c.text}
              </p>
              <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600">
                {c.label}
                <svg
                  width="14"
                  height="14"
                  viewBox="0 0 24 24"
                  fill="none"
                  aria-hidden="true"
                  className="transition-transform group-hover:translate-x-1"
                >
                  <path
                    d="M5 12h14m-6-6 6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </a>
          ))}
        </div>

        <div className="mt-16 grid gap-10 rounded-2xl bg-mist p-8 sm:p-12 lg:grid-cols-3">
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gold-600">
              Email
            </h2>
            <a
              href={`mailto:${site.email}`}
              className="mt-2 block text-lg font-semibold text-navy-900 transition-colors hover:text-gold-600"
            >
              {site.email}
            </a>
            <p className="mt-1 text-sm text-slate-500">
              We aim to reply within one business day.
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gold-600">
              Registered office
            </h2>
            <p className="mt-2 text-lg font-semibold leading-snug text-navy-900">
              {site.address}
            </p>
          </div>
          <div>
            <h2 className="text-sm font-semibold uppercase tracking-wider text-gold-600">
              Company
            </h2>
            <p className="mt-2 text-lg font-semibold text-navy-900">
              Guilders Limited
            </p>
            <p className="mt-1 text-sm text-slate-500">
              {site.rcNumber} · Incorporated in Nigeria under CAMA 2020
            </p>
          </div>
        </div>
      </section>
    </>
  );
}
