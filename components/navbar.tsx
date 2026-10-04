"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";
import { Logo } from "@/components/logo";
import { ThemeToggle } from "@/components/theme-toggle";

const links = [
  { href: "/about/", label: "Company" },
  { href: "/#divisions", label: "Divisions" },
  { href: "/services/", label: "What we do" },
  { href: "/contact/", label: "Contact" },
];

export function Navbar() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <header className="sticky top-0 z-40 border-b border-line bg-paper/85 backdrop-blur-md">
      <nav
        className="container-site flex h-[72px] items-center justify-between"
        aria-label="Main"
      >
        <Logo />

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => {
            const active =
              l.href !== "/" && pathname?.startsWith(l.href.replace(/\/$/, ""));
            return (
              <Link
                key={l.href}
                href={l.href}
                className={`text-[15px] font-medium transition-colors ${
                  active ? "text-ink" : "text-body hover:text-ink"
                }`}
              >
                {l.label}
              </Link>
            );
          })}
        </div>

        <div className="hidden items-center gap-2 md:flex">
          <ThemeToggle />
          <Link href="/contact/" className="btn-primary !px-5 !py-2.5 text-[15px]">
            Work with us
          </Link>
        </div>

        <div className="flex items-center md:hidden">
        <ThemeToggle />
        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-controls="mobile-nav"
          className="-mr-2 inline-flex h-11 w-11 items-center justify-center rounded-lg text-ink hover:bg-wash"
        >
          <span className="sr-only">{open ? "Close menu" : "Open menu"}</span>
          <svg
            width="22"
            height="22"
            viewBox="0 0 22 22"
            fill="none"
            aria-hidden="true"
          >
            {open ? (
              <path
                d="M5 5l12 12M17 5L5 17"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            ) : (
              <path
                d="M3 6.5h16M3 11h16M3 15.5h16"
                stroke="currentColor"
                strokeWidth="2"
                strokeLinecap="round"
              />
            )}
          </svg>
        </button>
        </div>
      </nav>

      {open && (
        <div id="mobile-nav" className="border-t border-line bg-paper md:hidden">
          <div className="container-site flex flex-col gap-1 py-4">
            {links.map((l) => (
              <Link
                key={l.href}
                href={l.href}
                className="rounded-lg px-3 py-3 text-base font-medium text-ink hover:bg-mint"
              >
                {l.label}
              </Link>
            ))}
            <Link href="/contact/" className="btn-primary mt-2 w-full">
              Work with us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
