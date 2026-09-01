import Link from "next/link";
import { Logo } from "./logo";
import { site, divisions } from "@/lib/site";

export function Footer() {
  return (
    <footer className="bg-navy-950 text-slate-400">
      <div className="mx-auto max-w-6xl px-5 py-16 sm:px-8">
        <div className="grid gap-12 md:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo dark />
            <p className="mt-4 max-w-xs text-sm leading-relaxed">
              A diversified Nigerian company building dependable businesses
              across technology, logistics, commerce, assets and ventures.
            </p>
            <p className="mt-4 text-xs uppercase tracking-wider text-slate-500">
              {site.rcNumber} · Incorporated in Nigeria
            </p>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Company
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li><Link href="/about/" className="transition-colors hover:text-white">About us</Link></li>
              <li><Link href="/services/" className="transition-colors hover:text-white">What we do</Link></li>
              <li><Link href="/contact/" className="transition-colors hover:text-white">Contact</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Divisions
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              {divisions.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/services/#${d.slug}`}
                    className="transition-colors hover:text-white"
                  >
                    {d.name.split(" & ")[0]}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wider text-white">
              Get in touch
            </h3>
            <ul className="mt-4 space-y-3 text-sm">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="text-gold-400 transition-colors hover:text-gold-300"
                >
                  {site.email}
                </a>
              </li>
              <li className="leading-relaxed">{site.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-white/10 pt-8 text-xs sm:flex-row sm:items-center sm:justify-between">
          <p>
            © {new Date().getFullYear()} {site.name}. All rights reserved.
          </p>
          <div className="flex gap-6">
            <Link href="/privacy/" className="transition-colors hover:text-white">
              Privacy Policy
            </Link>
            <Link href="/terms/" className="transition-colors hover:text-white">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
