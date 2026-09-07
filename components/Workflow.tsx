const steps = [
  {
    n: "01",
    title: "Add Requirement",
    body: "Paste a User Story, acceptance criteria, or a raw software requirement.",
  },
  {
    n: "02",
    title: "AI Analysis",
    body: "The agent flags ambiguity, contradictions, and missing details.",
  },
  {
    n: "03",
    title: "Generate Tests",
    body: "Positive, negative, and edge scenarios are drafted as structured cases.",
  },
  {
    n: "04",
    title: "Coverage Review",
    body: "A second pass checks whether important flows are still missing.",
  },
  {
    n: "05",
    title: "Export",
    body: "Download a CSV you can share or import into your QA tools.",
  },
];

export function Workflow() {
  return (
    <section id="how-it-works" className="scroll-mt-24">
      <div className="mx-auto max-w-[1120px] px-5 py-20 sm:px-6 lg:py-24">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-navy sm:text-4xl">
          How It Works
        </h2>
        <p className="mt-4 max-w-2xl text-[17px] leading-8 text-muted">
          Add Requirement → AI Analysis → Generate Tests → Coverage Review →
          Export
        </p>
        <ol className="relative mt-12 grid gap-0 lg:grid-cols-5">
          <div
            className="pointer-events-none absolute left-[18px] top-3 bottom-3 w-px bg-indigo-100 lg:left-8 lg:right-8 lg:top-[18px] lg:h-px lg:w-auto lg:bottom-auto"
            aria-hidden
          />
          {steps.map((step) => (
            <li
              key={step.n}
              className="relative flex gap-4 py-4 lg:flex-col lg:gap-4 lg:px-3 lg:py-0"
            >
              <span className="relative z-10 flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-indigo-200 bg-white font-mono text-xs font-semibold text-accent shadow-sm">
                {step.n}
              </span>
              <div>
                <h3 className="text-base font-semibold tracking-tight">{step.title}</h3>
                <p className="mt-1.5 text-sm leading-6 text-muted">{step.body}</p>
              </div>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
