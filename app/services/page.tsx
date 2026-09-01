import type { Metadata } from "next";
import Link from "next/link";
import { divisions } from "@/lib/site";

export const metadata: Metadata = {
  title: "What we do",
  description:
    "Guilders Limited operates five divisions: technology and digital solutions, transport and logistics, trade and commerce, assets and leasing, and ventures and investments.",
};

function Check() {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      aria-hidden="true"
      className="mt-0.5 shrink-0"
    >
      <rect width="20" height="20" rx="10" fill="#DDEFE6" />
      <path
        d="M6 10.2l2.6 2.6L14 7.4"
        stroke="#0B6E43"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

const divisionShortNames: Record<string, string> = {
  technology: "Technology",
  logistics: "Logistics",
  commerce: "Commerce",
  assets: "Assets",
  ventures: "Ventures",
};

export default function ServicesPage() {
  return (
    <>
      {/* Header */}
      <section className="border-b border-line">
        <div className="container-site py-16 sm:py-24">
          <p className="text-sm font-semibold text-green">What we do</p>
          <h1 className="display-section mt-4 max-w-3xl text-ink">
            Everything we build, move, trade, hold and back
          </h1>
          <p className="mt-6 max-w-[58ch] text-lg leading-8 text-body">
            Five divisions, each drawn directly from our memorandum of
            association — described here plainly, so you know exactly what to
            expect when you engage us.
          </p>
          <nav aria-label="Divisions" className="mt-8 flex flex-wrap gap-3">
            {divisions.map((d) => (
              <a
                key={d.slug}
                href={`#${d.slug}`}
                className="rounded-full border border-line px-4 py-2 text-sm font-medium text-body transition-colors hover:border-green hover:text-green"
              >
                {d.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      {/* Divisions */}
      {divisions.map((d, i) => (
        <section
          key={d.slug}
          id={d.slug}
          className={`scroll-mt-24 ${i % 2 === 1 ? "bg-mint" : ""}`}
        >
          <div className="container-site py-16 sm:py-20">
            <div className="grid gap-10 lg:grid-cols-[1.1fr_1fr] lg:gap-16">
              <div>
                <p className="text-sm font-semibold text-green">
                  {divisionShortNames[d.slug]}
                </p>
                <h2 className="display-sub mt-3 text-ink">{d.name}</h2>
                <p className="mt-3 text-lg font-medium leading-7 text-ink">
                  {d.tagline}
                </p>
                <p className="mt-4 max-w-[58ch] leading-7 text-body">
                  {d.summary}
                </p>
              </div>
              <ul className="space-y-3 self-center">
                {d.details.map((item) => (
                  <li key={item} className="flex gap-3 leading-6 text-body">
                    <Check />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="mt-10 grid gap-5 md:grid-cols-3">
              {d.offerings.map((o) => (
                <div
                  key={o.title}
                  className={`rounded-2xl p-6 ${
                    i % 2 === 1
                      ? "bg-white shadow-[0_1px_2px_rgb(10_31_24/0.05),0_10px_28px_-14px_rgb(10_31_24/0.12)]"
                      : "border border-line"
                  }`}
                >
                  <h3 className="font-display text-lg font-semibold tracking-tight text-ink">
                    {o.title}
                  </h3>
                  <p className="mt-2 text-sm leading-6 text-body">{o.text}</p>
                </div>
              ))}
            </div>
          </div>
        </section>
      ))}

      {/* CTA */}
      <section className="bg-dark">
        <div className="container-site py-16 text-center sm:py-20">
          <h2 className="display-sub mx-auto max-w-xl text-white">
            Not sure which division you need?
          </h2>
          <p className="mx-auto mt-4 max-w-lg leading-7 text-[#a9c4b8]">
            Describe the job — we&apos;ll route it to the right team and reply
            within one business day.
          </p>
          <div className="mt-8">
            <Link href="/contact/" className="btn-on-dark">
              Talk to us
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
