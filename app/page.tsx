import Link from "next/link";
import { divisions, site, type Division } from "@/lib/site";
import { Glyph, type GlyphName } from "@/components/glyph";

const ticker = [
  "Software",
  "Haulage",
  "General supply",
  "Fleet leasing",
  "Property",
  "Ventures",
  "Last-mile delivery",
];

const principles = [
  {
    title: "Clear from day one",
    text: "You get the scope, price and timeline in writing before we start. No surprises halfway through.",
  },
  {
    title: "One person accountable",
    text: "Every job has a named lead at Guilders you can reach directly until the work is done.",
  },
  {
    title: "Here for the long run",
    text: "We reinvest what we earn into assets and people, so we're still here when you need us next year.",
  },
];

const eyebrow = "font-mono text-xs font-medium uppercase tracking-[0.08em] text-volt";

function division(slug: GlyphName): Division {
  const d = divisions.find((x) => x.slug === slug);
  if (!d) throw new Error(`Unknown division: ${slug}`);
  return d;
}

export default function Home() {
  const tech = division("technology");
  const logistics = division("logistics");
  const rest = (["commerce", "assets", "ventures"] as const).map(division);

  return (
    <>
      {/* Hero */}
      <section className="container-site pt-16 sm:pt-24">
        <div className="flex flex-col gap-10 lg:flex-row lg:items-end lg:justify-between">
          <div className="max-w-[52rem]">
            <p className={eyebrow}>A Nigerian group of companies</p>
            <h1 className="mt-6 font-display text-[clamp(2.75rem,6.2vw,5.5rem)] font-semibold leading-[1] tracking-[-0.04em] text-balance text-ink">
              We build and run the businesses Nigeria runs on.
            </h1>
          </div>
          <div className="max-w-sm lg:pb-2">
            <p className="text-lg leading-7 text-body">
              Technology, logistics, trade, property and investment under one roof — so you deal
              with one company that answers for the whole job.
            </p>
            <div className="mt-7 flex flex-wrap items-center gap-x-5 gap-y-3">
              <Link href="/contact/" className="btn-primary">
                Start a project
              </Link>
              <Link href="#divisions" className="font-medium text-ink hover:text-volt">
                See what we do →
              </Link>
            </div>
          </div>
        </div>

        {/* Glyph skyline on the blueprint grid */}
        <div className="blueprint mt-14 overflow-hidden rounded-xl px-6 pt-12 pb-6 sm:mt-18 sm:px-10">
          <ul className="grid grid-cols-3 gap-y-6 sm:grid-cols-5">
            {divisions.map((d) => (
              <li key={d.slug} className="flex flex-col items-center">
                <Link href={`/services/#${d.slug}`} className="glyph-host flex flex-col items-center">
                  <Glyph name={d.slug as GlyphName} className="h-28 w-28 sm:h-40 sm:w-40 lg:h-48 lg:w-48" />
                </Link>
              </li>
            ))}
          </ul>
          <div className="mt-2 hidden h-px bg-volt sm:block" />
          <ul className="mt-4 hidden grid-cols-5 font-mono text-xs uppercase tracking-[0.08em] text-volt-deep sm:grid">
            {divisions.map((d) => (
              <li key={d.slug} className="text-center">
                {d.short}
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Ticker */}
      <section aria-label="What we do, in short" className="mt-24 overflow-hidden bg-volt-solid py-6">
        <div className="marquee flex w-max">
          {[0, 1].map((copy) => (
            <ul
              key={copy}
              aria-hidden={copy === 1}
              className="flex shrink-0 items-center gap-10 pr-10 font-display text-3xl font-semibold tracking-[-0.025em] whitespace-nowrap text-white sm:text-4xl"
            >
              {ticker.map((t) => (
                <li key={t} className="flex items-center gap-10">
                  {t}
                  <span className="h-3 w-3 rotate-45 bg-white/45" aria-hidden="true" />
                </li>
              ))}
            </ul>
          ))}
        </div>
      </section>

      {/* Divisions */}
      <section id="divisions" className="container-site py-28 sm:py-36">
        <div className="flex flex-col gap-6 lg:flex-row lg:items-end lg:justify-between">
          <div>
            <p className={eyebrow}>What we do</p>
            <h2 className="mt-5 max-w-xl font-display text-[clamp(2.25rem,4.4vw,4rem)] font-semibold leading-[1.03] tracking-[-0.035em] text-ink">
              Five businesses. One way of working.
            </h2>
          </div>
          <p className="max-w-sm leading-7 text-body">
            Each division runs on its own, but all of them keep the same promise: agree the scope
            first, price it honestly, deliver what we said.
          </p>
        </div>

        <div className="mt-14 grid gap-4 lg:grid-cols-3">
          {/* Featured: Technology */}
          <Link
            href={`/services/#${tech.slug}`}
            className="glyph-host blueprint group flex flex-col justify-between gap-8 rounded-xl p-8 sm:flex-row sm:p-10 lg:col-span-2"
            style={{ ["--glyph-face" as string]: "var(--c-blueprint)" }}
          >
            <div className="flex max-w-sm flex-col justify-between gap-8">
              <div>
                <p className={eyebrow}>Featured</p>
                <h3 className="mt-4 font-display text-4xl font-semibold tracking-[-0.03em] text-ink">
                  {tech.name.replace(" Solutions", "")}
                </h3>
                <p className="mt-4 leading-7 text-body">{tech.blurb}</p>
              </div>
              <ul className="flex flex-wrap gap-2">
                {["Custom software", "ICT consultancy", "Internet access", "Automation"].map((t) => (
                  <li key={t} className="rounded-full border border-rule bg-paper px-3 py-1.5 text-[13px] text-ink">
                    {t}
                  </li>
                ))}
              </ul>
            </div>
            <Glyph name="technology" className="h-56 w-56 self-center sm:h-72 sm:w-72" />
          </Link>

          {/* Logistics: always a dark card (lifts to the wash surface in dark mode) */}
          <Link
            href={`/services/#${logistics.slug}`}
            className="glyph-host flex flex-col justify-between gap-6 rounded-xl bg-[#05070d] p-8 [--glyph-face:#05070d] sm:p-10 dark:bg-wash dark:[--glyph-face:var(--c-wash)]"
          >
            <div>
              <h3 className="font-display text-[28px] leading-tight font-semibold tracking-[-0.025em] text-[#f5f7fc]">
                {logistics.name}
              </h3>
              <p className="mt-3 text-[15px] leading-6 text-[#a3aabb]">{logistics.blurb}</p>
            </div>
            <div className="flex justify-center [--c-ink:#f5f7fc] [--c-volt:#4d74ff]">
              <Glyph name="logistics" className="h-48 w-48" />
            </div>
          </Link>

          {rest.map((d) => {
            const ventures = d.slug === "ventures";
            return (
              <Link
                key={d.slug}
                href={ventures ? "/contact/" : `/services/#${d.slug}`}
                className={`glyph-host flex flex-col gap-6 rounded-xl p-8 ${ventures ? "bg-volt-tint" : "bg-wash"}`}
                style={{ ["--glyph-face" as string]: ventures ? "var(--c-volt-tint)" : "var(--c-wash)" }}
              >
                <Glyph name={d.slug as GlyphName} className="h-44 w-44 self-center" />
                <div>
                  <h3 className="font-display text-2xl font-semibold tracking-[-0.02em] text-ink">{d.name}</h3>
                  <p className="mt-2.5 text-[15px] leading-6 text-body">{d.blurb}</p>
                </div>
                <span className="mt-auto text-sm font-medium text-volt">
                  {ventures ? "Pitch your business →" : "Learn more →"}
                </span>
              </Link>
            );
          })}
        </div>
      </section>

      {/* How we work */}
      <section className="bg-band text-[#f5f7fc]">
        <div className="container-site grid gap-12 py-24 sm:py-32 lg:grid-cols-[22rem_1fr] lg:gap-24">
          <div>
            <p className="font-mono text-xs font-medium uppercase tracking-[0.08em] text-[#4d74ff]">How we work</p>
            <h2 className="mt-5 font-display text-[clamp(2rem,3.4vw,2.75rem)] font-semibold leading-[1.08] tracking-[-0.03em]">
              Big enough to deliver. Close enough to call.
            </h2>
          </div>
          <ul className="border-t border-[#4d74ff]">
            {principles.map((p) => (
              <li
                key={p.title}
                className="grid gap-2 border-b border-white/10 py-7 sm:grid-cols-[14rem_1fr] sm:gap-8"
              >
                <h3 className="font-display text-lg font-semibold tracking-[-0.015em]">{p.title}</h3>
                <p className="leading-7 text-[#a3aabb]">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </section>

      {/* Call to action */}
      <section className="container-site pt-24 sm:pt-32">
        <div className="flex flex-col items-start justify-between gap-10 overflow-hidden rounded-xl bg-volt-solid p-10 sm:p-16 lg:flex-row lg:items-center">
          <div className="max-w-2xl">
            <h2 className="font-display text-[clamp(2.25rem,4.4vw,4rem)] font-semibold leading-[1.03] tracking-[-0.035em] text-white">
              Have something that needs doing?
            </h2>
            <p className="mt-5 text-lg leading-7 text-white/80">
              Software, haulage, supplies, leasing or a business worth backing — tell us what you
              need. We&apos;ll reply within one working day.
            </p>
            <div className="mt-8 flex flex-wrap gap-3">
              <Link href="/contact/" className="btn-on-dark">
                Talk to us
              </Link>
              <a
                href={`mailto:${site.email}`}
                className="inline-flex items-center rounded-full border border-white/50 px-6 py-3.5 font-semibold text-white transition-colors hover:bg-white/10"
              >
                {site.email}
              </a>
            </div>
          </div>
          <svg viewBox="0 0 160 160" fill="none" className="hidden h-64 w-64 shrink-0 lg:block" aria-hidden="true">
            <path d="M80 34 L119 56.5 L80 79 L41 56.5 Z" fill="#fff" stroke="#fff" strokeWidth="2" strokeLinejoin="round" />
            <path d="M41 56.5 V101.5 L80 124 L119 101.5 V56.5 M80 79 V124" stroke="#fff" strokeWidth="2" strokeLinejoin="round" strokeLinecap="round" />
          </svg>
        </div>
      </section>
    </>
  );
}
