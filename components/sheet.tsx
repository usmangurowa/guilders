import { site } from "@/lib/site";

type Tint = "white" | "pink" | "gold";

const tintClass: Record<Tint, string> = {
  white: "sheet",
  pink: "sheet sheet--pink",
  gold: "sheet sheet--gold",
};

export function FormSheet({
  formNo,
  formTitle,
  tint = "white",
  copyNote,
  children,
}: {
  formNo: string;
  formTitle: string;
  tint?: Tint;
  copyNote?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="mx-auto w-full max-w-4xl px-3 pb-14 sm:px-6">
      <article className={`${tintClass[tint]} relative px-5 pb-10 pt-6 sm:px-10 sm:pb-14 sm:pt-8`}>
        <Letterhead formNo={formNo} formTitle={formTitle} copyNote={copyNote} />
        {children}
        <FormFooter />
      </article>
      <p className="microprint mt-3 overflow-hidden whitespace-nowrap text-center" aria-hidden="true">
        {"GUILDERS·LIMITED·RC·9819868·".repeat(14)}
      </p>
    </div>
  );
}

function Letterhead({
  formNo,
  formTitle,
  copyNote,
}: {
  formNo: string;
  formTitle: string;
  copyNote?: string;
}) {
  return (
    <header className="border-b-2 border-ink pb-4">
      <div className="flex flex-wrap items-start justify-between gap-x-6 gap-y-3">
        <div>
          <p className="font-form text-2xl font-black uppercase tracking-[0.04em] text-ink sm:text-3xl">
            Guilders Limited
          </p>
          <p className="mt-1 font-form text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
            {site.address}
          </p>
          <p className="font-form text-[11px] font-semibold uppercase tracking-[0.14em] text-ink-soft">
            {site.email} · {site.phone}
          </p>
        </div>
        <div className="text-right">
          <p className="font-typed text-sm font-bold text-stamp">№ {formNo}</p>
          <p className="mt-1 font-form text-[11px] font-bold uppercase tracking-[0.14em] text-form">
            {formTitle}
          </p>
          {copyNote ? (
            <p className="mt-1 font-typed text-[11px] uppercase text-ink-soft">
              {copyNote}
            </p>
          ) : null}
        </div>
      </div>
    </header>
  );
}

function FormFooter() {
  return (
    <footer className="mt-14">
      <div className="grid gap-x-10 gap-y-8 border-t border-ink/30 pt-6 sm:grid-cols-2">
        <div>
          <p className="font-script text-2xl text-form" aria-hidden="true">
            H. U. Gurowa
          </p>
          <p className="blankline mt-1 pb-1 font-form text-[11px] font-bold uppercase tracking-[0.14em] text-ink-soft">
            Authorised signature — Hassan Usman Gurowa, Director
          </p>
        </div>
        <div className="sm:text-right">
          <p className="font-typed text-sm text-ink">
            {site.rcNumber} · Incorporated {site.incorporated}
          </p>
          <p className="mt-1 font-typed text-sm text-ink-soft">
            Corporate Affairs Commission, Federal Republic of Nigeria
          </p>
        </div>
      </div>
      <div className="mt-8 flex flex-wrap items-center justify-between gap-x-8 gap-y-3 border-t border-ink/30 pt-4">
        <p className="font-form text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
          Distribution: White — Original · Pink — Data Protection · Gold — Conditions
        </p>
        <ul className="flex gap-5">
          <li>
            <a href="/privacy/" className="typedlink font-typed text-xs uppercase">
              Pink copy
            </a>
          </li>
          <li>
            <a href="/terms/" className="typedlink font-typed text-xs uppercase">
              Gold copy
            </a>
          </li>
        </ul>
      </div>
      <p className="mt-4 font-form text-[10px] font-semibold uppercase tracking-[0.18em] text-ink-soft">
        © {new Date().getFullYear()} Guilders Limited. All rights reserved.
      </p>
    </footer>
  );
}
