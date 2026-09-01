import Link from "next/link";
import { FormSheet } from "@/components/sheet";

export default function NotFound() {
  return (
    <FormSheet formNo="GL-99" formTitle="Missing Document">
      <section className="pt-8">
        <h1 className="max-w-[24ch] font-form text-3xl font-black uppercase tracking-[0.02em] text-ink sm:text-4xl">
          Document not on file
        </h1>
        <div className="ruled mt-6 max-w-[70ch]">
          <p className="font-typed text-sm text-ink">
            The page requested does not appear in the company file.
          </p>
          <p className="font-typed text-sm text-ink">
            It may have been re-numbered, withdrawn, or never lodged.
          </p>
        </div>
        <div className="mt-10">
          <Link href="/" className="stampbtn">
            Return to the manifest
          </Link>
        </div>
      </section>
    </FormSheet>
  );
}
