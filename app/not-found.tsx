import Link from "next/link";

export default function NotFound() {
  return (
    <section className="relative overflow-hidden bg-navy-950 text-white">
      <div className="grain absolute inset-0" aria-hidden="true" />
      <div className="relative mx-auto flex min-h-[70vh] max-w-6xl flex-col items-center justify-center px-5 py-24 text-center sm:px-8">
        <p className="font-mono text-sm text-gold-400">404</p>
        <h1 className="mt-4 text-4xl font-bold tracking-tight sm:text-5xl">
          This page doesn&apos;t exist.
        </h1>
        <p className="mt-4 max-w-md text-lg text-slate-300">
          The page you&apos;re looking for may have moved. Let&apos;s get you
          back on track.
        </p>
        <Link
          href="/"
          className="mt-8 rounded-full bg-gold-500 px-7 py-3 text-sm font-semibold text-navy-950 transition-colors hover:bg-gold-400"
        >
          Back to home
        </Link>
      </div>
    </section>
  );
}
