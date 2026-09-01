import type { Metadata } from "next";
import { FormSheet } from "@/components/sheet";
import { site, divisions } from "@/lib/site";

export const metadata: Metadata = {
  title: "Enquiries",
  description:
    "Open an enquiry with Guilders Limited — email hello@guilders.ltd or call +234 813 922 3164.",
};

export default function ContactPage() {
  return (
    <FormSheet formNo="GL-04" formTitle="Enquiry Form">
      <section className="pt-8">
        <h1 className="max-w-[24ch] font-form text-3xl font-black uppercase tracking-[0.02em] text-ink sm:text-4xl">
          Open an enquiry
        </h1>
        <p className="mt-4 max-w-[70ch] font-typed text-sm leading-7 text-ink">
          This office answers every enquiry within two working days. Write to
          us directly, or complete the particulars below in your email so we
          can route it to the right line of business.
        </p>

        <div className="mt-10 flex flex-wrap items-center gap-x-8 gap-y-5">
          <a href={`mailto:${site.email}`} className="stampbtn">
            Write to {site.email}
          </a>
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="typedlink font-typed text-sm"
          >
            or call {site.phone}
          </a>
        </div>
      </section>

      <section className="mt-16" aria-label="Particulars to include in your email">
        <h2 className="font-form text-sm font-bold uppercase tracking-[0.1em] text-form">
          Particulars to include
        </h2>
        <dl className="mt-6 max-w-[70ch] space-y-7">
          <div>
            <dt className="font-form text-[11px] font-bold uppercase tracking-[0.16em] text-form">
              1. From
            </dt>
            <dd className="blankline mt-2 pb-1 font-typed text-sm text-ink-soft">
              Your name and organisation
            </dd>
          </div>
          <div>
            <dt className="font-form text-[11px] font-bold uppercase tracking-[0.16em] text-form">
              2. Line of business
            </dt>
            <dd className="blankline mt-2 pb-1 font-typed text-sm text-ink-soft">
              {divisions.map((d) => `Line ${d.line}`).join(" / ")} — or state
              “general”
            </dd>
          </div>
          <div>
            <dt className="font-form text-[11px] font-bold uppercase tracking-[0.16em] text-form">
              3. The work required
            </dt>
            <dd className="blankline mt-2 pb-1 font-typed text-sm text-ink-soft">
              What you need, where, and by when
            </dd>
          </div>
        </dl>
      </section>

      <section className="mt-16">
        <h2 className="font-form text-sm font-bold uppercase tracking-[0.1em] text-form">
          Registered office
        </h2>
        <address className="mt-4 max-w-[70ch] font-typed text-sm not-italic leading-7 text-ink">
          Guilders Limited · {site.rcNumber}
          <br />
          {site.address}
          <br />
          <a href={`mailto:${site.email}`} className="typedlink">
            {site.email}
          </a>{" "}
          ·{" "}
          <a
            href={`tel:${site.phone.replace(/\s/g, "")}`}
            className="typedlink"
          >
            {site.phone}
          </a>
        </address>
      </section>
    </FormSheet>
  );
}
