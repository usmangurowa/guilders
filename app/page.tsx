import Link from "next/link";
import { site, divisions } from "@/lib/site";

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

function Arrow() {
  return (
    <svg width="16" height="16" viewBox="0 0 16 16" fill="none" aria-hidden="true">
      <path
        d="M3 8h10m0 0L9 4m4 4l-4 4"
        stroke="currentColor"
        strokeWidth="1.8"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  );
}

function HeroOpsCard() {
  return (
    <div className="card-ui p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-ink">Operations today</p>
        <span className="rounded-full bg-mint-deep px-2.5 py-1 text-xs font-semibold text-green">
          All divisions
        </span>
      </div>
      <ul className="mt-4 divide-y divide-line text-sm">
        {[
          ["Consignment GL-2841 delivered", "Logistics"],
          ["Client portal deployed to production", "Technology"],
          ["Supply order #SO-1174 fulfilled", "Commerce"],
          ["Lease renewed — flatbed truck", "Assets"],
        ].map(([event, division]) => (
          <li key={event} className="flex items-start justify-between gap-4 py-2.5">
            <span className="flex gap-2.5 text-body">
              <Check />
              {event}
            </span>
            <span className="shrink-0 pt-0.5 text-xs font-medium text-soft">
              {division}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function HeroReceiptCard() {
  return (
    <div className="card-ui p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-ink">Invoice · INV-0107</p>
        <span className="rounded-full bg-mint-deep px-2.5 py-1 text-xs font-semibold text-green">
          Paid
        </span>
      </div>
      <dl className="mt-4 space-y-2.5 text-sm">
        <div className="flex justify-between">
          <dt className="text-soft">Contract haulage · March</dt>
          <dd className="font-medium text-ink">Settled</dd>
        </div>
        <div className="flex justify-between">
          <dt className="text-soft">Payment terms</dt>
          <dd className="font-medium text-ink">Net 14 — met</dd>
        </div>
      </dl>
      <div className="mt-4 rounded-lg bg-mint px-4 py-3 text-sm text-body">
        Receipt issued · Records filed with accounts
      </div>
    </div>
  );
}

/* ---------- Bespoke division visuals (illustrative, not product claims) ---------- */

function TechVisual() {
  return (
    <div className="card-ui overflow-hidden">
      <div className="flex items-center gap-1.5 border-b border-line bg-mint px-4 py-3">
        <span className="h-2.5 w-2.5 rounded-full bg-[#f2b8b5]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#f4d9a6]" />
        <span className="h-2.5 w-2.5 rounded-full bg-[#b9e2cd]" />
        <span className="ml-3 text-xs font-medium text-soft">deploy.guilders.dev</span>
      </div>
      <pre className="overflow-x-auto px-5 py-4 font-mono text-[13px] leading-6 text-body">
        <code>{`$ guilders deploy --env production

  ✓ Build completed in 42s
  ✓ 128 routes compiled
  ✓ Deployed to Lagos edge

  Live → client.example.ng`}</code>
      </pre>
    </div>
  );
}

function LogisticsVisual() {
  return (
    <div className="card-ui p-5">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-ink">Consignment GL-2841</p>
        <span className="rounded-full bg-mint-deep px-2.5 py-1 text-xs font-semibold text-green">
          In transit
        </span>
      </div>
      <div className="mt-5 flex items-center gap-2" aria-hidden="true">
        <span className="h-3 w-3 rounded-full bg-green" />
        <span className="h-px flex-1 bg-green" />
        <span className="h-3 w-3 rounded-full bg-green" />
        <span className="h-px flex-1 border-t border-dashed border-[#b7cec2]" />
        <span className="h-3 w-3 rounded-full border-2 border-[#b7cec2] bg-white" />
      </div>
      <div className="mt-2 flex justify-between text-xs font-medium text-soft">
        <span>Makurdi</span>
        <span>Lokoja</span>
        <span>Abuja</span>
      </div>
      <div className="mt-5 rounded-lg bg-mint px-4 py-3 text-sm text-body">
        Driver dispatched · 14 packages · Signature on delivery
      </div>
    </div>
  );
}

function CommerceVisual() {
  return (
    <div className="card-ui p-5">
      <p className="text-sm font-semibold text-ink">Supply order · #SO-1174</p>
      <ul className="mt-4 divide-y divide-line text-sm">
        {[
          ["Office workstations", "×40"],
          ["Network equipment", "×12"],
          ["Generator, 60 kVA", "×2"],
        ].map(([item, qty]) => (
          <li key={item} className="flex items-center justify-between py-2.5">
            <span className="text-body">{item}</span>
            <span className="font-medium text-ink">{qty}</span>
          </li>
        ))}
      </ul>
      <div className="mt-4 flex items-center justify-between rounded-lg bg-mint px-4 py-3">
        <span className="text-sm font-medium text-body">Status</span>
        <span className="text-sm font-semibold text-green">Delivered ✓</span>
      </div>
    </div>
  );
}

function AssetsVisual() {
  return (
    <div className="card-ui p-5">
      <p className="text-sm font-semibold text-ink">Lease schedule</p>
      <ul className="mt-4 space-y-3 text-sm">
        {[
          ["Toyota Hiace — 14 seats", "Leased · 12 mo"],
          ["Flatbed truck — 20 t", "Leased · 24 mo"],
          ["Warehouse, North Bank", "Available"],
        ].map(([asset, status]) => (
          <li
            key={asset}
            className="flex items-center justify-between rounded-lg border border-line px-4 py-3"
          >
            <span className="text-body">{asset}</span>
            <span
              className={`text-xs font-semibold ${
                status === "Available" ? "text-green" : "text-soft"
              }`}
            >
              {status}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

function VenturesVisual() {
  return (
    <div className="card-ui p-5">
      <p className="text-sm font-semibold text-ink">Portfolio view</p>
      <ul className="mt-4 space-y-3 text-sm">
        {[
          ["Logistics platform", "Incubating"],
          ["Agri-trade venture", "Seed"],
          ["Connectivity co.", "Operating"],
        ].map(([name, stage]) => (
          <li key={name} className="flex items-center justify-between">
            <span className="text-body">{name}</span>
            <span className="rounded-full bg-mint-deep px-2.5 py-1 text-xs font-semibold text-green">
              {stage}
            </span>
          </li>
        ))}
      </ul>
      <p className="mt-4 border-t border-line pt-3 text-xs leading-5 text-soft">
        Illustrative of how we structure and grow ventures under the Guilders
        umbrella.
      </p>
    </div>
  );
}

const visuals: Record<string, () => React.ReactElement> = {
  technology: TechVisual,
  logistics: LogisticsVisual,
  commerce: CommerceVisual,
  assets: AssetsVisual,
  ventures: VenturesVisual,
};

const shortNames: Record<string, string> = {
  technology: "Technology",
  logistics: "Logistics",
  commerce: "Commerce",
  assets: "Assets",
  ventures: "Ventures",
};

/* ---------- Page ---------- */

export default function HomePage() {
  return (
    <>
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="container-site grid items-center gap-14 py-16 sm:py-20 lg:grid-cols-[1.05fr_1fr] lg:py-28">
          <div>
            <h1 className="display-hero text-ink">
              Building the businesses that keep Nigeria moving
            </h1>
            <p className="mt-6 max-w-[52ch] text-lg leading-8 text-body sm:text-xl sm:leading-9">
              Guilders Limited is a diversified Nigerian company operating
              across technology, logistics, commerce, assets and ventures —
              one group, built to deliver.
            </p>
            <div className="mt-9 flex flex-wrap items-center gap-4">
              <Link href="/contact/" className="btn-primary">
                Work with us
              </Link>
              <Link href="/services/" className="btn-secondary">
                Explore our divisions
              </Link>
            </div>
          </div>

          <div className="relative" aria-hidden="true">
            <div className="dot-grid absolute -inset-6 rounded-3xl sm:-inset-10" />
            <div className="relative space-y-5">
              <div className="card-rise max-w-md" style={{ animationDelay: "80ms" }}>
                <HeroOpsCard />
              </div>
              <div
                className="card-rise ml-auto max-w-md"
                style={{ animationDelay: "220ms" }}
              >
                <HeroReceiptCard />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Facts strip */}
      <section className="border-y border-line bg-mint">
        <div className="container-site py-10">
          <p className="text-center text-sm font-medium text-soft">
            Incorporated and governed under the Companies and Allied Matters
            Act 2020
          </p>
          <dl className="mx-auto mt-6 grid max-w-4xl grid-cols-2 gap-x-6 gap-y-8 text-center sm:grid-cols-4">
            {[
              ["RC 9819868", "CAC registration"],
              ["2026", "Incorporated"],
              ["Makurdi", "Headquarters"],
              ["Five", "Lines of business"],
            ].map(([value, label]) => (
              <div key={label}>
                <dt className="order-2 mt-1 block text-sm text-soft">{label}</dt>
                <dd className="font-display text-2xl font-semibold tracking-tight text-ink sm:text-[1.75rem]">
                  {value}
                </dd>
              </div>
            ))}
          </dl>
        </div>
      </section>

      {/* Divisions */}
      <section className="container-site py-20 sm:py-28">
        <div className="max-w-3xl">
          <h2 className="display-section text-ink">
            Five divisions. One standard of delivery.
          </h2>
          <p className="mt-5 text-lg leading-8 text-body">
            Every Guilders division is run with the same discipline: clear
            scope, honest pricing and work that holds up. Here is what each
            one does.
          </p>
        </div>

        <div className="mt-4 divide-y divide-line">
          {divisions.map((d, i) => {
            const Visual = visuals[d.slug];
            const flip = i % 2 === 1;
            return (
              <article
                key={d.slug}
                className="grid items-center gap-10 py-14 sm:py-16 lg:grid-cols-2 lg:gap-20"
              >
                <div className={flip ? "lg:order-2" : undefined}>
                  <p className="text-sm font-semibold text-green">
                    {shortNames[d.slug]}
                  </p>
                  <h3 className="display-sub mt-3 text-ink">{d.name}</h3>
                  <p className="mt-4 max-w-[56ch] leading-7 text-body">
                    {d.summary}
                  </p>
                  <ul className="mt-6 space-y-3">
                    {d.details.slice(0, 3).map((item) => (
                      <li key={item} className="flex gap-3 text-[15px] leading-6 text-body">
                        <Check />
                        <span>{item}</span>
                      </li>
                    ))}
                  </ul>
                  <Link
                    href={`/services/#${d.slug}`}
                    className="link-arrow mt-7 text-[15px]"
                  >
                    More about {shortNames[d.slug].toLowerCase()}
                    <Arrow />
                  </Link>
                </div>
                <div className={`mx-auto w-full max-w-md ${flip ? "lg:order-1" : ""}`}>
                  <Visual />
                </div>
              </article>
            );
          })}
        </div>
      </section>

      {/* How we operate */}
      <section className="bg-mint">
        <div className="container-site py-20 sm:py-24">
          <h2 className="display-section max-w-2xl text-ink">
            How we operate
          </h2>
          <div className="mt-12 grid gap-8 md:grid-cols-3">
            {[
              {
                title: "Registered and governed",
                text: "A private company limited by shares, incorporated under CAMA 2020 and entered in the CAC register as RC 9819868. Contracts, invoices and accountability come standard.",
              },
              {
                title: "One group, shared standards",
                text: "Each division draws on the others — our fleet moves what we trade, our engineers build what we operate. You deal with one accountable partner.",
              },
              {
                title: "Built for the long term",
                text: "We hold assets, keep our word and grow deliberately. Guilders is structured to still be delivering for its clients decades from now.",
              },
            ].map((p) => (
              <div key={p.title} className="rounded-2xl bg-white p-8 shadow-[0_1px_2px_rgb(10_31_24/0.05),0_10px_28px_-14px_rgb(10_31_24/0.12)]">
                <h3 className="font-display text-xl font-semibold tracking-tight text-ink">
                  {p.title}
                </h3>
                <p className="mt-3 leading-7 text-body">{p.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA band */}
      <section className="bg-dark">
        <div className="container-site py-20 text-center sm:py-24">
          <h2 className="display-section mx-auto max-w-2xl text-white">
            Start working with Guilders today
          </h2>
          <p className="mx-auto mt-5 max-w-xl text-lg leading-8 text-[#a9c4b8]">
            Tell us what you need — software, haulage, supply, leasing or a
            venture worth backing — and we will come back to you within one
            business day.
          </p>
          <div className="mt-9 flex flex-wrap items-center justify-center gap-4">
            <Link href="/contact/" className="btn-on-dark">
              Contact us
            </Link>
            <a
              href={`mailto:${site.email}`}
              className="inline-flex items-center gap-2 rounded-lg border border-line-dark px-6 py-3.5 font-semibold text-white transition-colors hover:bg-dark-2"
            >
              {site.email}
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
