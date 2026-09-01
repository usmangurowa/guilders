export function Stamp({
  className = "",
  animate = false,
}: {
  className?: string;
  animate?: boolean;
}) {
  return (
    <div
      aria-hidden="true"
      className={`${animate ? "stamp-in" : ""} stampink pointer-events-none select-none ${className}`}
      style={{ rotate: "-8deg", mixBlendMode: "multiply" }}
    >
      <div className="rounded-lg border-[3px] border-stamp p-1">
        <div className="rounded-md border border-stamp px-4 py-2 text-center">
          <p className="font-form text-lg font-black uppercase leading-none tracking-[0.18em] text-stamp sm:text-xl">
            Registered
          </p>
          <p className="mt-1 font-form text-[10px] font-bold uppercase tracking-[0.22em] text-stamp">
            RC 9819868 · CAC Nigeria
          </p>
          <p className="font-form text-[10px] font-bold uppercase tracking-[0.22em] text-stamp">
            01 Sep 2026
          </p>
        </div>
      </div>
    </div>
  );
}
