import Link from "next/link";
import { Wordmark } from "@/components/logo";
import { site, divisions } from "@/lib/site";

const company = [
  { href: "/about/", label: "About" },
  { href: "/services/", label: "What we do" },
  { href: "/contact/", label: "Contact" },
];

const legal = [
  { href: "/privacy/", label: "Privacy" },
  { href: "/terms/", label: "Terms" },
];

const heading = "font-mono text-xs uppercase tracking-[0.08em] text-ink";
const link = "text-sm text-body transition-colors hover:text-ink";

export function Footer() {
  return (
    <footer className="bg-paper">
      <div className="container-site pt-20 pb-10 sm:pt-24">
        <div className="flex flex-col justify-between gap-12 lg:flex-row">
          <div className="max-w-xs">
            <Link href="/" aria-label="Guilders — home">
              <Wordmark />
            </Link>
            <p className="mt-4 text-sm leading-6 text-body">{site.address}</p>
          </div>

          <div className="grid grid-cols-2 gap-10 sm:grid-cols-3 sm:gap-20">
            <nav aria-label="Divisions">
              <h3 className={heading}>Divisions</h3>
              <ul className="mt-4 space-y-2.5">
                {divisions.map((d) => (
                  <li key={d.slug}>
                    <Link href={`/services/#${d.slug}`} className={link}>
                      {d.short}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <nav aria-label="Company">
              <h3 className={heading}>Company</h3>
              <ul className="mt-4 space-y-2.5">
                {company.map((l) => (
                  <li key={l.href}>
                    <Link href={l.href} className={link}>
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </nav>
            <div>
              <h3 className={heading}>Contact</h3>
              <ul className="mt-4 space-y-2.5">
                <li>
                  <a href={`mailto:${site.email}`} className={link}>
                    {site.email}
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-rule pt-6 font-mono text-xs uppercase tracking-[0.06em] text-body sm:flex-row sm:justify-between">
          <p>© {new Date().getFullYear()} Guilders Limited</p>
          <ul className="flex gap-6">
            {legal.map((l) => (
              <li key={l.href}>
                <Link href={l.href} className="transition-colors hover:text-ink">
                  {l.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </footer>
  );
}
