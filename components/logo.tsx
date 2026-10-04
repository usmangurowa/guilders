import Link from "next/link";

/** The block — app icon / favicon mark. White cube on a Volt tile. */
export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg viewBox="0 0 160 160" fill="none" className={className} aria-hidden="true">
      <rect width="160" height="160" rx="36" fill="#1F4BFF" />
      <path d="M80 28 L124 53 L80 78 L36 53 Z" fill="#fff" />
      <path d="M36 53 L80 78 V132 L36 107 Z" fill="#fff" fillOpacity="0.62" />
      <path d="M124 53 L80 78 V132 L124 107 Z" fill="#fff" fillOpacity="0.32" />
    </svg>
  );
}

/**
 * "guilders" wordmark in Comfortaa Bold. The i is a dotless ı with a separate
 * Volt dot, positioned in em so it scales with font-size.
 */
export function Wordmark({ className = "text-[28px]" }: { className?: string }) {
  return (
    <span
      className={`relative inline-block font-brand font-bold leading-none tracking-[-0.04em] text-ink ${className}`}
    >
      gu
      <span className="relative">
        ı
        <span
          aria-hidden="true"
          className="absolute left-[calc(50%+0.03em)] top-[-0.06em] h-[0.17em] w-[0.17em] -translate-x-1/2 rounded-full bg-volt"
        />
      </span>
      lders
    </span>
  );
}

export function Logo({ className = "" }: { className?: string }) {
  return (
    <Link href="/" className={`inline-flex items-center ${className}`} aria-label="Guilders — home">
      <Wordmark />
    </Link>
  );
}
