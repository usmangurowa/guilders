import Link from "next/link";
import { Logo } from "@/components/logo";
import { site, divisions } from "@/lib/site";

const company = [
  { href: "/about/", label: "About Guilders" },
  { href: "/services/", label: "What we do" },
  { href: "/contact/", label: "Contact" },
];

const legal = [
  { href: "/privacy/", label: "Privacy Policy" },
  { href: "/terms/", label: "Terms of Service" },
];

export function Footer() {
  return (
    <footer className="bg-dark text-white">
      <div className="container-site py-16 sm:py-20">
        <div className="grid gap-12 lg:grid-cols-[1.4fr_1fr_1fr_1fr]">
          <div>
            <Logo onDark />
            <p className="mt-5 max-w-sm text-[15px] leading-7 text-[#a9c4b8]">
              {site.description}
            </p>
            <p className="mt-6 text-sm text-[#7f9c8f]">
              {site.rcNumber} · Registered in Nigeria
            </p>
          </div>

          <nav aria-label="Company">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#7f9c8f]">
              Company
            </h3>
            <ul className="mt-4 space-y-3">
              {company.map((l) => (
                <li key={l.href}>
                  <Link
                    href={l.href}
                    className="text-[15px] text-[#d3e4db] transition-colors hover:text-white"
                  >
                    {l.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <nav aria-label="Divisions">
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#7f9c8f]">
              Divisions
            </h3>
            <ul className="mt-4 space-y-3">
              {divisions.map((d) => (
                <li key={d.slug}>
                  <Link
                    href={`/services/#${d.slug}`}
                    className="text-[15px] text-[#d3e4db] transition-colors hover:text-white"
                  >
                    {d.name}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>

          <div>
            <h3 className="text-sm font-semibold uppercase tracking-wide text-[#7f9c8f]">
              Contact
            </h3>
            <ul className="mt-4 space-y-3 text-[15px] text-[#d3e4db]">
              <li>
                <a
                  href={`mailto:${site.email}`}
                  className="transition-colors hover:text-white"
                >
                  {site.email}
                </a>
              </li>
              <li>
                <a
                  href={`tel:${site.phone.replace(/\s/g, "")}`}
                  className="transition-colors hover:text-white"
                >
                  {site.phone}
                </a>
              </li>
              <li className="leading-7 text-[#a9c4b8]">{site.address}</li>
            </ul>
          </div>
        </div>

        <div className="mt-14 flex flex-col gap-4 border-t border-line-dark pt-8 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-sm text-[#7f9c8f]">
            © {new Date().getFullYear()} Guilders Limited. All rights reserved.
          </p>
          <ul className="flex gap-6">
            {legal.map((l) => (
              <li key={l.href}>
                <Link
                  href={l.href}
                  className="text-sm text-[#a9c4b8] transition-colors hover:text-white"
                >
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
