import type { Metadata } from "next";
import Link from "next/link";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About us",
  description:
    "Guilders Limited is a private company incorporated in Nigeria (RC 9819868), building dependable businesses across technology, logistics, commerce, assets and ventures.",
};

const facts = [
  { label: "Legal name", value: "Guilders Limited" },
  { label: "Registration", value: "RC 9819868" },
  { label: "Company type", value: "Private company limited by shares" },
  { label: "Incorporated", value: "1 September 2026 · CAMA 2020" },
  { label: "Registered office", value: "Makurdi, Benue State, Nigeria" },
  { label: "Status", value: "Active" },
];

const principles = [
  {
    title: "Do the work properly",
    text: "Whether it's a line of code, a delivery run or a supply contract — it carries our name. We finish what we start and we finish it well.",
  },
  {
    title: "Keep our word",
    text: "Agreements are honoured, timelines are respected, and when something changes, we say so early and plainly.",
  },
  {
    title: "Build for the long term",
    text: "We choose durable value over quick wins — assets that appreciate, relationships that compound, businesses that outlast us.",
  },
  {
    title: "Grow our people and our markets",
    text: "Every venture we build should leave its market better: more jobs, better service, stronger local capacity.",
  },
];

export default function AboutPage() {
  return (
    <>
      <section className="relative overflow-hidden bg-navy-950 text-white">
        <div className="grain absolute inset-0" aria-hidden="true" />
        <div className="relative mx-auto max-w-6xl px-5 py-20 sm:px-8 sm:py-28">
          <p className="text-xs font-semibold uppercase tracking-[0.2em] text-gold-300">
            About Guilders
          </p>
          <h1 className="mt-4 max-w-3xl text-4xl font-bold leading-tight tracking-tight sm:text-5xl">
            A young company with an old-fashioned idea: do good work, keep your
            word.
          </h1>
          <p className="mt-6 max-w-2xl text-lg leading-relaxed text-slate-300">
            Guilders Limited was incorporated in Nigeria to build and operate
            dependable businesses — starting where we can serve best and
            expanding with discipline.
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-6xl px-5 py-20 sm:px-8">
        <div className="grid gap-14 lg:grid-cols-[1.5fr_1fr] lg:gap-20">
          <div className="space-y-6 text-lg leading-relaxed text-slate-700">
            <h2 className="text-2xl font-bold tracking-tight text-navy-900">
              Our story
            </h2>
            <p>
              Guilders takes its name from two things: the{" "}
              <strong className="text-navy-900">guilder</strong>, the coin that
              powered honest trade across continents for centuries, and the{" "}
              <strong className="text-navy-900">guilds</strong> — societies of
              craftsmen who set standards, trained apprentices and signed their
              names to their work.
            </p>
            <p>
              That&apos;s the company we set out to build: one that treats
              commerce as a craft. We operate across five fronts — technology
              and digital solutions, transport and logistics, trade and
              commerce, asset ownership and leasing, and venture building — not
              because we want to do everything, but because these businesses
              strengthen each other. Our fleet moves what our traders sell. Our
              software runs our own operations before it runs anyone
              else&apos;s. Our assets back our ventures.
            </p>
            <p>
              We&apos;re headquartered in Makurdi, Benue State — building from
              Nigeria, for markets that deserve dependable partners.
            </p>

            <h2 className="pt-6 text-2xl font-bold tracking-tight text-navy-900">
              How we work
            </h2>
            <div className="grid gap-6 sm:grid-cols-2">
              {principles.map((p) => (
                <div
                  key={p.title}
                  className="rounded-2xl border border-slate-200 bg-mist p-6"
                >
                  <h3 className="text-base font-bold text-navy-900">
                    {p.title}
                  </h3>
                  <p className="mt-2 text-sm leading-relaxed text-slate-600">
                    {p.text}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <aside>
            <div className="sticky top-24 rounded-2xl border border-slate-200 bg-white p-8 shadow-sm">
              <h2 className="text-sm font-semibold uppercase tracking-wider text-gold-600">
                Company facts
              </h2>
              <dl className="mt-6 space-y-5">
                {facts.map((f) => (
                  <div key={f.label}>
                    <dt className="text-xs uppercase tracking-wider text-slate-400">
                      {f.label}
                    </dt>
                    <dd className="mt-1 text-sm font-semibold text-navy-900">
                      {f.value}
                    </dd>
                  </div>
                ))}
              </dl>
              <a
                href={`mailto:${site.email}`}
                className="mt-8 block rounded-full bg-navy-900 px-6 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-navy-800"
              >
                {site.email}
              </a>
            </div>
          </aside>
        </div>
      </section>

      <section className="bg-mist">
        <div className="mx-auto max-w-6xl px-5 py-20 text-center sm:px-8">
          <h2 className="text-3xl font-bold tracking-tight text-navy-900">
            See what we can do for you
          </h2>
          <p className="mx-auto mt-3 max-w-xl text-lg text-slate-600">
            Five divisions, one standard. Explore the services behind the name.
          </p>
          <Link
            href="/services/"
            className="mt-8 inline-block rounded-full bg-gold-500 px-7 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
          >
            What we do
          </Link>
        </div>
      </section>
    </>
  );
}
