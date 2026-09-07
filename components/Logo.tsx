export function Logo({ compact = false }: { compact?: boolean }) {
  return (
    <a
      href="#top"
      className="flex items-center gap-2.5 rounded-md text-foreground no-underline"
      aria-label="Requirement-to-Test home"
    >
      <span
        className="flex h-8 w-8 items-center justify-center rounded-lg bg-navy text-white shadow-sm"
        aria-hidden
      >
        <svg width="16" height="16" viewBox="0 0 16 16" fill="none">
          <rect
            x="2"
            y="2"
            width="12"
            height="12"
            rx="2"
            stroke="currentColor"
            strokeWidth="1.4"
          />
          <path
            d="M5 8.2 7 10.2 11.2 5.8"
            stroke="#a5b4fc"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      </span>
      {!compact && (
        <span className="text-[15px] font-semibold tracking-tight">
          Requirement-to-Test
          <span className="hidden sm:inline"> Agent</span>
        </span>
      )}
    </a>
  );
}
