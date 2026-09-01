import Link from "next/link";
import { divisions, site } from "@/lib/site";

const stats = [
  { value: "5", label: "Operating divisions" },
  { value: "2026", label: "Incorporated in Nigeria" },
  { value: "100%", label: "Nigerian owned" },
  { value: "1M+", label: "Share capital (₦)" },
];

const values = [
  {
    title: "Craft",
    text: "Named for the guilds — masters of their trade. We hold every service we run to a craftsman's standard.",
  },
  {
    title: "Trust",
    text: "The guilder was a coin people could rely on. We build businesses the same way: dependable, transparent, accountable.",
  },
  {
    title: "Enterprise",
    text: "We don't wait for opportunity — we build it. From fleets to software to new ventures, we put capital and effort to work.",
  },
];

export default function Home() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 pb-24 pt-20 sm:px-8 sm:pb-32 sm:pt-28">
          <p className="rise inline-flex items-center gap-2 rounded-full border border-white/15 bg-white/5 px-4 py-1.5 text-xs font-medium uppercase tracking-[0.2em] text-gold-300">
            <span className="h-1.5 w-1.5 rounded-full bg-gold-400" aria-hidden="true" />
            {site.rcNumber} · Nigeria
          </p>
          <h1 className="rise rise-1 mt-6 max-w-3xl text-4xl font-bold leading-[1.08] tracking-tight sm:text-6xl">
            We build businesses{" "}
            <span className="bg-gradient-to-r from-gold-300 via-gold-400 to-gold-500 bg-clip-text text-transparent">
              built to last.
            </span>
          </h1>
          <p className="rise rise-2 mt-6 max-w-2xl text-lg leading-relaxed text-slate-300 sm:text-xl">
            Guilders Limited is a diversified Nigerian company operating across
            technology, transport &amp; logistics, trade, asset leasing and
            venture building — one standard, five fronts.
          </p>
          <div className="rise rise-3 mt-10 flex flex-wrap gap-4">
            <Link
              href="/services/"
              className="rounded-full bg-gold-500 px-7 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
            >
              Explore what we do
            </Link>
            <Link
              href="/contact/"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50"
            >
              Talk to us
            </Link>
          </div>

          <dl className="rise rise-4 mt-20 grid grid-cols-2 gap-8 border-t border-white/10 pt-10 sm:grid-cols-4">
            {stats.map((s) => (
              <div key={s.label}>
                <dt className="order-2 text-xs uppercase tracking-wider text-slate-400">
                  {s.label}
                </dt>
                <dd className="text-3xl font-bold text-white">{s.value}</dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Divisions */}
      <section className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
        <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
          What we do
        </p>
        <h2 className="mt-3 max-w-2xl text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
          One company. Five ways we create value.
        </h2>
        <p className="mt-4 max-w-2xl text-lg leading-relaxed text-slate-600">
          Each division runs with its own focus and discipline — all held to
          the same Guilders standard.
        </p>

        <div className="mt-14 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {divisions.map((d, i) => (
            <Link
              key={d.slug}
              href={`/services/#${d.slug}`}
              className={`group relative overflow-hidden rounded-2xl border border-slate-200 bg-white p-8 transition-all hover:-translate-y-1 hover:border-gold-500/50 hover:shadow-xl hover:shadow-navy-900/5 ${
                i === 0 ? "sm:col-span-2 lg:col-span-1" : ""
              }`}
            >
              <div
                className={`absolute inset-0 bg-gradient-to-br ${d.accent} opacity-0 transition-opacity group-hover:opacity-100`}
                aria-hidden="true"
              />
              <div className="relative">
                <span className="font-mono text-xs text-slate-400">
                  0{i + 1}
                </span>
                <h3 className="mt-3 text-xl font-bold text-navy-900">
                  {d.name}
                </h3>
                <p className="mt-3 text-sm leading-relaxed text-slate-600">
                  {d.tagline}
                </p>
                <span className="mt-6 inline-flex items-center gap-1.5 text-sm font-semibold text-gold-600">
                  Learn more
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
              </div>
            </Link>
          ))}

          <div className="relative overflow-hidden rounded-2xl bg-navy-900 p-8 text-white">
            <div className="grain absolute inset-0" aria-hidden="true" />
            <div className="relative">
              <h3 className="text-xl font-bold">Have a project in mind?</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-300">
                From software builds to haulage contracts and supply deals —
                tell us what you need.
              </p>
              <a
                href={`mailto:${site.email}`}
                className="mt-6 inline-block rounded-full bg-gold-500 px-6 py-2.5 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
              >
                {site.email}
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-24 sm:px-8">
          <div className="grid gap-12 lg:grid-cols-[1fr_1.4fr] lg:gap-20">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-600">
                Why “Guilders”
              </p>
              <h2 className="mt-3 text-3xl font-bold tracking-tight text-navy-900 sm:text-4xl">
                A name with weight behind it.
              </h2>
              <p className="mt-5 text-lg leading-relaxed text-slate-600">
                The guilder was the trade coin that moved goods across
                continents for centuries. The guilds were societies of
                craftsmen who put their names on their work. We took both as
                our standard: money handled with integrity, work done with
                mastery.
              </p>
              <Link
                href="/about/"
                className="mt-8 inline-flex items-center gap-2 text-sm font-semibold text-navy-900 underline decoration-gold-500 decoration-2 underline-offset-4 transition-colors hover:text-gold-600"
              >
                Read our story
              </Link>
            </div>
            <div className="grid gap-6 sm:grid-cols-3 lg:grid-cols-1 xl:grid-cols-3">
              {values.map((v) => (
                <div
                  key={v.title}
                  className="rounded-2xl border border-slate-200 bg-white p-6"
                >
                  <h3 className="text-lg font-bold text-navy-900">{v.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {v.text}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-24 text-center sm:px-8">
          <h2 className="mx-auto max-w-2xl text-3xl font-bold tracking-tight sm:text-4xl">
            Let&apos;s build something dependable together.
          </h2>
          <p className="mx-auto mt-4 max-w-xl text-lg text-slate-300">
            Partnerships, contracts, leasing or investment — we reply fast.
          </p>
          <div className="mt-10 flex flex-wrap justify-center gap-4">
            <a
              href={`mailto:${site.email}`}
              className="rounded-full bg-gold-500 px-7 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
            >
              Email {site.email}
            </a>
            <Link
              href="/contact/"
              className="rounded-full border border-white/20 px-7 py-3 text-sm font-semibold text-white transition-colors hover:border-white/50"
            >
              Contact page
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
