import type { Metadata } from "next";
import Link from "next/link";
import { FormSheet } from "@/components/sheet";
import { divisions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Lines of Business",
  description:
    "The schedule of operations of Guilders Limited — technology, logistics, commerce, assets and ventures, line by line.",
};

export default function ServicesPage() {
  return (
    <FormSheet formNo="GL-03" formTitle="Schedule of Operations">
      <section className="pt-8">
        <h1 className="max-w-[24ch] font-form text-3xl font-black uppercase tracking-[0.02em] text-ink sm:text-4xl">
          Schedule of operations
        </h1>
        <p className="mt-4 max-w-[70ch] font-typed text-sm leading-7 text-ink">
          Continuation sheets to Form GL-01. Each line of business is recorded
          below with the work it covers and the services it offers.
        </p>
        <nav aria-label="Lines on this schedule" className="mt-8">
          <ul className="flex flex-wrap gap-x-6 gap-y-2">
            {divisions.map((d) => (
              <li key={d.slug}>
                <a
                  href={`#${d.slug}`}
                  className="typedlink font-typed text-xs uppercase"
                >
                  Line {d.line} — {d.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
      </section>

      {divisions.map((d) => (
        <section key={d.slug} id={d.slug} className="mt-20 scroll-mt-24">
          <div className="border-y-2 border-ink py-3">
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h2 className="font-form text-lg font-black uppercase tracking-[0.04em] text-ink sm:text-xl">
                Line {d.line} — {d.name}
              </h2>
              <p className="font-typed text-xs uppercase text-form">
                Memo clause {d.clause}
              </p>
            </div>
          </div>
          <p className="mt-5 max-w-[70ch] font-typed text-sm leading-7 text-ink">
            {d.summary}
          </p>

          <h3 className="mt-8 font-form text-[11px] font-bold uppercase tracking-[0.16em] text-form">
            Scope of work
          </h3>
          <ul className="mt-3 max-w-[70ch]">
            {d.details.map((detail) => (
              <li
                key={detail.slice(0, 40)}
                className="border-b border-rule py-2.5 font-typed text-sm leading-6 text-ink"
              >
                {detail}
              </li>
            ))}
          </ul>

          <h3 className="mt-8 font-form text-[11px] font-bold uppercase tracking-[0.16em] text-form">
            Services on offer
          </h3>
          <dl className="mt-3 grid gap-px overflow-hidden border border-rule bg-rule sm:grid-cols-3">
            {d.offerings.map((o) => (
              <div key={o.title} className="bg-paper p-4">
                <dt className="font-typed text-sm font-bold uppercase text-ink">
                  {o.title}
                </dt>
                <dd className="mt-2 font-typed text-[13px] leading-6 text-ink-soft">
                  {o.text}
                </dd>
              </div>
            ))}
          </dl>
        </section>
      ))}

      <section className="mt-20">
        <h2 className="font-form text-sm font-bold uppercase tracking-[0.1em] text-form">
          To engage any line
        </h2>
        <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
          <p className="max-w-[52ch] font-typed text-sm leading-7 text-ink">
            State the line number and the work required. We reply within two
            working days.
          </p>
          <Link href="/contact/" className="stampbtn">
            Open an enquiry
          </Link>
        </div>
      </section>
    </FormSheet>
  );
}
