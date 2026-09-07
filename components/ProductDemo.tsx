import { SAMPLE_STORY, TEST_CASES, typeBadgeClass } from "@/lib/mock-data";

const pipeline = [
  "Requirement input",
  "Analyzing requirements",
  "Positive / Negative / Edge",
  "Requirement Gaps",
  "Export CSV",
];

export function ProductDemo() {
  return (
    <div className="overflow-hidden rounded-2xl border border-border bg-white shadow-[0_28px_70px_-32px_rgba(15,23,42,0.38)]">
      <div className="flex items-center justify-between border-b border-border bg-[#fbfbfd] px-4 py-2.5 sm:px-5">
        <div className="flex items-center gap-2" aria-hidden>
          <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
        </div>
        <p className="hidden text-xs text-muted sm:block">
          Requirement-to-Test · workspace
        </p>
        <span className="rounded-full bg-accent-soft px-2.5 py-0.5 text-[11px] font-medium text-accent">
          Analyzing
        </span>
      </div>

      <ol className="flex gap-2 overflow-x-auto border-b border-border bg-white px-3 py-3 sm:px-5">
        {pipeline.map((step, i) => (
          <li key={step} className="flex shrink-0 items-center gap-2">
            <span
              className={`rounded-full px-2.5 py-1 text-[11px] font-medium ${
                i === 1
                  ? "bg-accent text-white"
                  : i < 1
                    ? "bg-navy text-white"
                    : "bg-slate-100 text-muted"
              }`}
            >
              {step}
            </span>
            {i < pipeline.length - 1 && (
              <span className="text-slate-300" aria-hidden>
                →
              </span>
            )}
          </li>
        ))}
      </ol>

      <div className="grid lg:grid-cols-[minmax(0,0.95fr)_minmax(0,1.05fr)]">
        <div className="border-b border-border p-4 sm:p-5 lg:border-b-0 lg:border-r">
          <div className="mb-3 flex items-center justify-between">
            <span className="rounded-md bg-navy px-2 py-0.5 text-[11px] font-medium text-white">
              Requirement input
            </span>
            <span className="font-mono text-[11px] text-muted">US-014</span>
          </div>
          <p className="rounded-xl border border-border bg-[#f8faf9] p-4 font-mono text-[13px] leading-6 text-slate-700">
            {SAMPLE_STORY}
          </p>
          <div className="mt-4 flex items-center gap-2 text-sm text-accent">
            <span className="flex gap-1" aria-hidden>
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot" />
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot [animation-delay:160ms]" />
              <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse-dot [animation-delay:320ms]" />
            </span>
            Analyzing requirements…
          </div>
        </div>

        <div className="p-4 sm:p-5">
          <div className="grid grid-cols-2 gap-2 sm:grid-cols-4">
            {[
              { label: "Positive", value: "8" },
              { label: "Negative", value: "6" },
              { label: "Edge Cases", value: "5" },
              { label: "Requirement Gaps", value: "2", warn: true },
            ].map((item) => (
              <div
                key={item.label}
                className={`rounded-xl border px-3 py-3 ${
                  item.warn
                    ? "border-amber-200 bg-warning-bg"
                    : "border-border bg-white"
                }`}
              >
                <p className="text-[11px] text-muted">{item.label}</p>
                <p className="mt-1 text-lg font-semibold tracking-tight">
                  {item.value}
                </p>
              </div>
            ))}
          </div>
          <ul className="mt-4 space-y-2 text-sm">
            {TEST_CASES.slice(0, 3).map((row) => (
              <li
                key={row.id}
                className="flex items-center justify-between gap-3 rounded-lg border border-border px-3 py-2"
              >
                <span>
                  {row.id} · {row.title}
                </span>
                <span
                  className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${typeBadgeClass(row.type)}`}
                >
                  {row.type}
                </span>
              </li>
            ))}
            <li className="flex items-center justify-between gap-3 rounded-lg border border-amber-200 bg-warning-bg px-3 py-2">
              <span className="text-warning">Gap: payment already captured?</span>
              <span className="shrink-0 rounded-full bg-white px-2 py-0.5 text-[11px] font-medium text-warning">
                Gap
              </span>
            </li>
          </ul>
          <button
            type="button"
            className="mt-4 inline-flex h-9 items-center gap-2 rounded-lg bg-navy px-3 text-sm font-medium text-white transition hover:bg-slate-800"
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden>
              <path
                d="M12 3v12m0 0 4-4m-4 4-4-4M5 21h14"
                stroke="currentColor"
                strokeWidth="1.8"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
            Export CSV
          </button>
        </div>
      </div>
    </div>
  );
}
