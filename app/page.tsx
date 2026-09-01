import Link from "next/link";
import { FormSheet } from "@/components/sheet";
import { Stamp } from "@/components/stamp";
import { site, divisions } from "@/lib/site";

export default function Home() {
  return (
    <FormSheet formNo="GL-01" formTitle="Operations Manifest">
      <section className="pt-8">
        <h1 className="sr-only">
          Guilders Limited — Operations Manifest
        </h1>
        <p className="max-w-[70ch] font-typed text-sm leading-7 text-ink">
          Being a true record of the lines of business registered and carried
          on by Guilders Limited, a private company limited by shares,
          incorporated under the Companies and Allied Matters Act 2020 and
          entered in the register as {site.rcNumber}.
        </p>

        <div className="relative mt-10">
          <table className="w-full border-collapse">
            <caption className="sr-only">
              The five lines of business operated by Guilders Limited
            </caption>
            <thead>
              <tr className="border-y-2 border-ink text-left">
                <th
                  scope="col"
                  className="py-2 pr-3 font-form text-[11px] font-bold uppercase tracking-[0.16em] text-form"
                >
                  Line
                </th>
                <th
                  scope="col"
                  className="py-2 pr-3 font-form text-[11px] font-bold uppercase tracking-[0.16em] text-form"
                >
                  Description of business
                </th>
                <th
                  scope="col"
                  className="hidden py-2 pr-3 font-form text-[11px] font-bold uppercase tracking-[0.16em] text-form sm:table-cell"
                >
                  Memo clause
                </th>
                <th
                  scope="col"
                  className="py-2 font-form text-[11px] font-bold uppercase tracking-[0.16em] text-form"
                >
                  Status
                </th>
              </tr>
            </thead>
            <tbody>
              {divisions.map((d) => (
                <tr key={d.slug} className="border-b border-rule align-top">
                  <td className="py-3 pr-3 font-typed text-sm font-bold text-ink">
                    {d.line}
                  </td>
                  <td className="py-3 pr-3">
                    <Link
                      href={`/services/#${d.slug}`}
                      className="typedlink font-typed text-sm font-bold uppercase"
                    >
                      {d.name}
                    </Link>
                    <p className="mt-1 max-w-[52ch] font-typed text-[13px] leading-6 text-ink-soft">
                      {d.tagline}
                    </p>
                  </td>
                  <td className="hidden py-3 pr-3 font-typed text-sm text-ink sm:table-cell">
                    {d.clause}
                  </td>
                  <td className="py-3 font-typed text-sm font-bold uppercase text-form">
                    Active
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
          <Stamp
            animate
            className="ml-auto mt-4 w-fit sm:absolute sm:-bottom-2 sm:right-8 sm:ml-0 sm:mt-0"
          />
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-form text-[11px] font-bold uppercase tracking-[0.16em] text-form">
          Declaration of the consignor
        </h2>
        <div className="ruled mt-4 max-w-[70ch]">
          <p className="font-typed text-sm text-ink">
            One company. Five lines. All accounted for.
          </p>
          <p className="font-typed text-sm text-ink">
            Guilders Limited builds and operates businesses across technology,
            logistics, commerce, assets and ventures — from its registered
            office in Makurdi, Benue State, for clients anywhere in Nigeria.
          </p>
          <p className="font-typed text-sm text-ink">
            Every engagement is delivered the way this document is kept:
            recorded, numbered and signed for.
          </p>
        </div>
      </section>

      <section className="mt-16">
        <h2 className="font-form text-[11px] font-bold uppercase tracking-[0.16em] text-form">
          For enquiries
        </h2>
        <div className="mt-4 flex flex-wrap items-center gap-x-8 gap-y-5">
          <p className="blankline pb-1 font-typed text-sm text-ink">
            {site.email} · {site.phone}
          </p>
          <Link href="/contact/" className="stampbtn">
            Open an enquiry
          </Link>
        </div>
      </section>
    </FormSheet>
  );
}
