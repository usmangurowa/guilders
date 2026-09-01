import Link from "next/link";

export function LogoMark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 32 32"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <rect width="32" height="32" rx="8" fill="#0B6E43" />
      <path
        d="M22.5 12.2a7 7 0 1 0 .5 5.05h-6.1"
        stroke="#fff"
        strokeWidth="2.6"
        strokeLinecap="round"
      />
    </svg>
  );
}

export function Logo({
  onDark = false,
  className = "",
}: {
  onDark?: boolean;
  className?: string;
}) {
  return (
    <Link
      href="/"
      className={`inline-flex items-center gap-2.5 ${className}`}
      aria-label="Guilders Limited — home"
    >
      <LogoMark />
      <span
        className={`font-display text-[1.35rem] font-semibold tracking-[-0.02em] ${
          onDark ? "text-white" : "text-ink"
        }`}
      >
        guilders
      </span>
    </Link>
  );
}
