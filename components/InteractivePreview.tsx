import { SAMPLE_STORY, TEST_CASES, typeBadgeClass } from "@/lib/mock-data";

export function InteractivePreview() {
  return (
    <section id="preview" className="scroll-mt-24 px-5 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-navy sm:text-4xl">
          Product Demo
        </h2>
        <p className="mt-4 max-w-2xl text-[17px] leading-8 text-muted">
          A static look at the agent workspace — requirement in, coverage and
          cases out.
        </p>

        <div className="mt-10 overflow-hidden rounded-2xl border border-border bg-white shadow-[0_24px_60px_-28px_rgba(15,23,42,0.28)]">
          <div className="flex items-center justify-between border-b border-border bg-[#fbfbfd] px-4 py-2.5 sm:px-5">
            <div className="flex items-center gap-2" aria-hidden>
              <span className="h-2.5 w-2.5 rounded-full bg-[#ff5f57]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#febc2e]" />
              <span className="h-2.5 w-2.5 rounded-full bg-[#28c840]" />
            </div>
            <p className="hidden text-xs text-muted sm:block">
              Agent · cancel-order story
            </p>
            <span className="rounded-full bg-emerald-50 px-2.5 py-0.5 text-[11px] font-medium text-emerald-800">
              Coverage reviewed
            </span>
          </div>

          <div className="grid lg:grid-cols-2">
            <div className="border-b border-border p-5 lg:border-b-0 lg:border-r">
              <p className="text-sm font-medium">User Story</p>
              <p className="mt-3 rounded-xl border border-border bg-[#f8faf9] p-4 font-mono text-[13px] leading-6 text-slate-700">
                {SAMPLE_STORY}
              </p>
              <button
                type="button"
                className="mt-4 inline-flex h-10 items-center justify-center rounded-xl bg-accent px-4 text-sm font-medium text-white transition hover:bg-indigo-600"
              >
                Analyze Requirement
              </button>
            </div>

            <div className="p-5">
              <div className="flex items-start justify-between gap-3">
                <div>
                  <p className="text-sm font-medium">Analysis summary</p>
                  <p className="mt-1 text-xs text-muted">Coverage review complete</p>
                </div>
                <div className="text-right">
                  <p className="text-[11px] uppercase tracking-wide text-muted">
                    Requirement Quality
                  </p>
                  <p className="text-2xl font-semibold tracking-tight">78%</p>
                </div>
              </div>
              <div className="mt-3 h-1.5 overflow-hidden rounded-full bg-slate-100">
                <div className="h-full w-[78%] rounded-full bg-accent" />
              </div>
              <div className="mt-4 rounded-xl border border-amber-200 bg-warning-bg p-3 text-sm">
                <p className="text-[11px] font-medium uppercase tracking-wide text-warning">
                  Requirement issue
                </p>
                <p className="mt-1 text-slate-800">
                  The story does not say what happens if payment has already
                  been captured.
                </p>
              </div>
              <div className="mt-4 overflow-x-auto rounded-xl border border-border">
                <table className="min-w-full text-left text-sm">
                  <caption className="sr-only">Generated test cases</caption>
                  <thead className="bg-[#fafafc] text-xs text-muted">
                    <tr>
                      <th scope="col" className="px-3 py-2 font-medium">
                        ID
                      </th>
                      <th scope="col" className="px-3 py-2 font-medium">
                        Title
                      </th>
                      <th scope="col" className="px-3 py-2 font-medium">
                        Type
                      </th>
                      <th scope="col" className="px-3 py-2 font-medium">
                        Priority
                      </th>
                    </tr>
                  </thead>
                  <tbody>
                    {TEST_CASES.map((row) => (
                      <tr key={row.id} className="border-t border-border">
                        <td className="whitespace-nowrap px-3 py-2 font-mono text-xs">
                          {row.id}
                        </td>
                        <td className="px-3 py-2">{row.title}</td>
                        <td className="px-3 py-2">
                          <span
                            className={`rounded-full px-2 py-0.5 text-[11px] font-medium ${typeBadgeClass(row.type)}`}
                          >
                            {row.type}
                          </span>
                        </td>
                        <td className="px-3 py-2 text-muted">{row.priority}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
              <button
                type="button"
                className="mt-4 inline-flex h-10 items-center gap-2 rounded-xl bg-navy px-4 text-sm font-medium text-white transition hover:bg-slate-800"
              >
                <svg width="15" height="15" viewBox="0 0 24 24" fill="none" aria-hidden>
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
      </div>
    </section>
  );
}
