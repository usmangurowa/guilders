import Link from "next/link";

export default function NotFound() {
  return (
    <section className="container-site flex min-h-[60vh] flex-col items-center justify-center py-24 text-center">
      <p className="text-sm font-semibold text-green">404</p>
      <h1 className="display-sub mt-3 text-ink">
        This page doesn&apos;t exist
      </h1>
      <p className="mt-4 max-w-md leading-7 text-body">
        The address may be mistyped, or the page may have moved. Everything we
        do is reachable from the home page.
      </p>
      <div className="mt-8 flex gap-4">
        <Link href="/" className="btn-primary">
          Back to home
        </Link>
        <Link href="/contact/" className="btn-secondary">
          Contact us
        </Link>
      </div>
    </section>
  );
}
