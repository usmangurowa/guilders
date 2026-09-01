"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const tabs = [
  { href: "/", label: "Manifest", no: "GL-01" },
  { href: "/about/", label: "Company Record", no: "GL-02" },
  { href: "/services/", label: "Lines of Business", no: "GL-03" },
  { href: "/contact/", label: "Enquiries", no: "GL-04" },
];

export function Navbar() {
  const pathname = usePathname();
  return (
    <nav
      aria-label="Company file"
      className="mx-auto w-full max-w-4xl px-3 pt-5 sm:px-6"
    >
      <ul className="flex items-end gap-1 overflow-x-auto">
        {tabs.map((t) => {
          const active =
            t.href === "/"
              ? pathname === "/"
              : pathname.startsWith(t.href.replace(/\/$/, ""));
          return (
            <li key={t.href} className="shrink-0">
              <Link
                href={t.href}
                aria-current={active ? "page" : undefined}
                className={`block border border-b-0 border-ink/28 px-3 py-2 font-form text-[11px] font-bold uppercase tracking-[0.14em] transition-colors duration-150 ease-out sm:px-5 sm:text-xs ${
                  active
                    ? "relative bg-paper text-ink after:absolute after:inset-x-0 after:-bottom-px after:h-px after:bg-paper"
                    : "bg-paper-2 text-ink-soft hover:bg-paper hover:text-ink"
                }`}
                style={{ borderRadius: "6px 6px 0 0" }}
              >
                {t.label}
                <span className="ml-2 hidden text-form/70 md:inline">{t.no}</span>
              </Link>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}
