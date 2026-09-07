const flow = [
  "Requirement",
  "Frontend",
  "Python Agent",
  "Gemini / Groq / Llama",
  "Analysis",
  "Test Generation",
  "Coverage Review",
  "CSV Export",
];

const badges: { name: string; future?: boolean }[] = [
  { name: "Python" },
  { name: "Streamlit" },
  { name: "Gemini" },
  { name: "Groq" },
  { name: "Llama" },
  { name: "CSV" },
  { name: "TestRail", future: true },
  { name: "Jira", future: true },
];

export function Technology() {
  return (
    <section id="technology" className="scroll-mt-24 px-5 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-navy sm:text-4xl">
          Technology
        </h2>
        <p className="mt-4 max-w-2xl text-[17px] leading-8 text-muted">
          Requirement → Frontend → Python Agent → Gemini / Groq / Llama →
          Analysis → Test Generation → Coverage Review → CSV Export
        </p>

        <ol className="mt-10 flex flex-wrap items-center gap-2">
          {flow.map((step, i) => (
            <li key={step} className="flex items-center gap-2">
              <span className="rounded-xl border border-border bg-white/90 px-3 py-2 text-sm font-medium shadow-sm">
                {step}
              </span>
              {i < flow.length - 1 && (
                <span className="text-accent" aria-hidden>
                  →
                </span>
              )}
            </li>
          ))}
        </ol>

        <ul className="mt-10 flex flex-wrap gap-2">
          {badges.map((badge) => (
            <li
              key={badge.name}
              className="inline-flex items-center gap-2 rounded-full border border-border bg-white/80 px-3 py-1.5 text-sm"
            >
              {badge.name}
              {badge.future && (
                <span className="rounded-full bg-accent-soft px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-accent">
                  Coming Soon
                </span>
              )}
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
