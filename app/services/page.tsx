import type { Metadata } from "next";
import { divisions, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "What we do",
  description:
    "Technology & digital solutions, transport & logistics, trade & commerce, assets & leasing, and ventures & investments — the five divisions of Guilders Limited.",
};

export default function ServicesPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            What we do
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            Five divisions. One standard.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Everything Guilders operates falls under one of five divisions —
            each with a clear mandate, each accountable to the same measure of
            quality.
          </p>
          <nav aria-label="Divisions" className="mt-10 flex flex-wrap gap-3">
            {divisions.map((d) => (
              <a
                key={d.slug}
                href={`#${d.slug}`}
                className="rounded-full border border-white/15 bg-white/5 px-4 py-2 text-sm font-medium text-slate-200 transition-colors hover:border-gold-400/60 hover:text-white"
              >
                {d.name}
              </a>
            ))}
          </nav>
        </div>
      </section>

      <div className="mx-auto max-w-6xl px-5 sm:px-8">
        {divisions.map((d, i) => (
          <section
            key={d.slug}
            id={d.slug}
            className={`scroll-mt-24 py-20 ${
              i < divisions.length - 1 ? "border-b border-slate-200" : ""
            }`}
          >
            <div className="grid gap-10 lg:grid-cols-[1fr_1.3fr] lg:gap-16">
              <div>
                <span className="font-mono text-sm text-slate-400">
                  Division 0{i + 1}
                </span>
                <h2 className="mt-2 text-3xl font-bold tracking-tight text-navy-900">
                  {d.name}
                </h2>
                <p className="mt-2 text-base font-medium text-gold-600">
                  {d.tagline}
                </p>
                <p className="mt-5 text-lg leading-relaxed text-slate-600">
                  {d.summary}
                </p>
                <ul className="mt-6 space-y-3">
                  {d.details.map((item) => (
                    <li key={item} className="flex gap-3 text-sm text-slate-700">
                      <svg
                        width="18"
                        height="18"
                        viewBox="0 0 24 24"
                        fill="none"
                        aria-hidden="true"
                        className="mt-0.5 shrink-0 text-gold-500"
                      >
                        <path
                          d="M20 6 9 17l-5-5"
                          stroke="currentColor"
                          strokeWidth="2.5"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        />
                      </svg>
                      {item}
                    </li>
                  ))}
                </ul>
              </div>

              <div className="grid content-start gap-5">
                {d.offerings.map((o) => (
                  <div
                    key={o.title}
                    className={`relative overflow-hidden rounded-2xl border border-slate-200 bg-gradient-to-br ${d.accent} p-7`}
                  >
                    <h3 className="text-lg font-bold text-navy-900">
                      {o.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-slate-600">
                      {o.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        ))}
      </div>

      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 text-center sm:px-8">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Not sure which division you need?
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            Describe the job — we&apos;ll route it to the right team.
          </p>
          <a
            href={`mailto:${site.email}`}
            className="mt-8 inline-block rounded-full bg-gold-500 px-7 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
          >
            Email {site.email}
          </a>
        </div>
      </section>
    </>
  );
}
