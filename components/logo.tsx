export function Logo({ className = "" }: { className?: string }) {
  return (
    <span
      className={`inline-flex h-9 w-9 items-center justify-center rounded-md border-2 border-ink font-form text-base font-black text-ink ${className}`}
      aria-hidden="true"
    >
      GL
    </span>
  );
}
