export function Mark({ className = "h-8 w-8" }: { className?: string }) {
  return (
    <svg
      viewBox="0 0 48 48"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      className={className}
      aria-hidden="true"
    >
      <circle cx="24" cy="24" r="22" fill="url(#coin)" />
      <circle
        cx="24"
        cy="24"
        r="18.5"
        stroke="#060B18"
        strokeOpacity="0.35"
        strokeWidth="1.5"
        strokeDasharray="2.5 3.5"
      />
      <path
        d="M31.5 18.5c-1.4-2.2-3.9-3.5-7-3.5-5.2 0-9 3.8-9 9s3.8 9 9 9c4.4 0 7.6-2.5 8.5-6.5h-8"
        stroke="#060B18"
        strokeWidth="3.2"
        strokeLinecap="round"
        fill="none"
      />
      <defs>
        <linearGradient id="coin" x1="8" y1="6" x2="42" y2="44">
          <stop stopColor="#ECD28A" />
          <stop offset="0.5" stopColor="#C9A227" />
          <stop offset="1" stopColor="#A9851A" />
        </linearGradient>
      </defs>
    </svg>
  );
}

export function Logo({
  dark = false,
  className = "",
}: {
  dark?: boolean;
  className?: string;
}) {
  return (
    <span className={`flex items-center gap-2.5 ${className}`}>
      <Mark className="h-8 w-8" />
      <span
        className={`text-lg font-bold tracking-[0.18em] ${
          dark ? "text-white" : "text-navy-900"
        }`}
      >
        GUILDERS
      </span>
    </span>
  );
}
