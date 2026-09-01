import type { Metadata } from "next";
import Link from "next/link";
import { FormSheet } from "@/components/sheet";
import { site, divisions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Company Record",
  description:
    "The company record of Guilders Limited — registration, structure and the particulars of a diversified Nigerian company.",
};

const record = [
  { label: "Registered name", value: "Guilders Limited" },
  { label: "Registration number", value: site.rcNumber },
  { label: "Date of incorporation", value: site.incorporated },
  { label: "Company type", value: "Private company limited by shares" },
  { label: "Registered office", value: site.address },
  { label: "Issued share capital", value: "₦1,000,000" },
  { label: "Director", value: "Hassan Usman Gurowa" },
  { label: "Status", value: "Active" },
];

export default function AboutPage() {
  return (
    <FormSheet formNo="GL-02" formTitle="Company Record">
      <section className="pt-8">
        <h1 className="max-w-[24ch] font-form text-3xl font-black uppercase tracking-[0.02em] text-ink sm:text-4xl">
          Extract from the company file
        </h1>
        <p className="mt-4 max-w-[70ch] font-typed text-sm leading-7 text-ink">
          The particulars below are taken from the records of the Corporate
          Affairs Commission and the memorandum of association of Guilders
          Limited. Nothing here is decoration — every entry can be checked
          against the register.
        </p>

        <dl className="mt-10 border-t-2 border-ink">
          {record.map((r) => (
            <div
              key={r.label}
              className="grid gap-x-6 border-b border-rule py-3 sm:grid-cols-[14rem_1fr]"
            >
              <dt className="font-form text-[11px] font-bold uppercase tracking-[0.16em] text-form">
                {r.label}
              </dt>
              <dd className="mt-1 font-typed text-sm text-ink sm:mt-0">
                {r.value}
              </dd>
            </div>
          ))}
        </dl>
      </section>

      <section className="mt-16">
        <h2 className="font-form text-sm font-bold uppercase tracking-[0.1em] text-form">
          Objects of the company
        </h2>
        <p className="mt-4 max-w-[70ch] font-typed text-sm leading-7 text-ink">
          The memorandum of association registers five objects — the five
          lines this company was formed to carry on:
        </p>
        <ol className="mt-6 border-t border-rule">
          {divisions.map((d) => (
            <li
              key={d.slug}
              className="grid gap-x-6 border-b border-rule py-3 sm:grid-cols-[14rem_1fr]"
            >
              <span className="font-form text-[11px] font-bold uppercase tracking-[0.16em] text-form">
                Clause {d.clause}
              </span>
              <span className="mt-1 font-typed text-sm text-ink sm:mt-0">
                {d.name} — {d.tagline}
              </span>
            </li>
          ))}
        </ol>
      </section>

      <section className="mt-16">
        <h2 className="font-form text-sm font-bold uppercase tracking-[0.1em] text-form">
          Statement of the director
        </h2>
        <div className="ruled mt-4 max-w-[70ch]">
          <p className="font-typed text-sm text-ink">
            Guilders was incorporated to do a simple thing well: build and
            operate real businesses in Nigeria, and keep proper records while
            doing it.
          </p>
          <p className="font-typed text-sm text-ink">
            We are young by the calendar and deliberate by design. Each line
            of business starts small, is run to account, and grows on its own
            performance — technology first, with logistics, commerce, assets
            and ventures alongside.
          </p>
          <p className="font-typed text-sm text-ink">
            If you deal with Guilders, you deal with a company that puts
            things in writing. This website is kept the same way.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-form text-sm font-bold uppercase tracking-[0.1em] text-form">
          Cross-references
        </h2>
        <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-4">
          <Link href="/services/" className="typedlink font-typed text-sm uppercase">
            Schedule of operations — GL-03
          </Link>
          <Link href="/contact/" className="stampbtn">
            Open an enquiry
          </Link>
        </div>
      </section>
    </FormSheet>
  );
}
