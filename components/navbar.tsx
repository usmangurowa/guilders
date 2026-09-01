"use client";

import Link from "next/link";
import { useState } from "react";
import { Logo } from "./logo";

const links = [
  { href: "/about/", label: "About" },
  { href: "/services/", label: "What we do" },
  { href: "/contact/", label: "Contact" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/10 bg-navy-950/85 backdrop-blur-md">
      <nav className="mx-auto flex h-16 max-w-6xl items-center justify-between px-5 sm:px-8">
        <Link href="/" aria-label="Guilders Limited — home" onClick={() => setOpen(false)}>
          <Logo dark />
        </Link>

        <div className="hidden items-center gap-8 md:flex">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              className="text-sm font-medium text-slate-300 transition-colors hover:text-white"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:hello@guilders.ltd"
            className="rounded-full bg-gold-500 px-5 py-2 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
          >
            Work with us
          </a>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          aria-expanded={open}
          aria-label={open ? "Close menu" : "Open menu"}
          className="flex h-10 w-10 items-center justify-center rounded-md text-slate-200 md:hidden"
        >
          <svg width="22" height="22" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            {open ? (
              <path d="M6 6l12 12M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            ) : (
              <path d="M4 7h16M4 12h16M4 17h16" stroke="currentColor" strokeWidth="2" strokeLinecap="round" />
            )}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-white/10 bg-navy-950 px-5 pb-6 pt-3 md:hidden">
          {links.map((l) => (
            <Link
              key={l.href}
              href={l.href}
              onClick={() => setOpen(false)}
              className="block py-3 text-base font-medium text-slate-200"
            >
              {l.label}
            </Link>
          ))}
          <a
            href="mailto:hello@guilders.ltd"
            className="mt-3 block rounded-full bg-gold-500 px-5 py-2.5 text-center text-sm font-semibold text-navy-950"
          >
            Work with us
          </a>
        </div>
      )}
    </header>
  );
}
