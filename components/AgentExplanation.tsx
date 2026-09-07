const stages = ["Analyze", "Reason", "Generate", "Review", "Improve", "Export"];

export function AgentExplanation() {
  return (
    <section className="mx-auto max-w-[1120px] scroll-mt-24 px-5 py-16 sm:px-6 lg:py-20">
      <div className="rounded-3xl border border-white/10 bg-navy px-6 py-10 text-white shadow-[0_24px_60px_-28px_rgba(15,23,42,0.45)] sm:px-10 lg:px-12 lg:py-14">
        <h2 className="max-w-2xl text-3xl font-semibold tracking-[-0.03em] sm:text-4xl">
          Why AI Agent
        </h2>
        <p className="mt-4 max-w-2xl text-[16px] leading-8 text-slate-300">
          The agent uses multiple stages instead of one chatbot response. It
          analyzes the requirement, reasons about gaps, generates cases, reviews
          coverage, improves the suite, then exports a structured file.
        </p>
        <ol className="mt-8 flex flex-wrap items-center gap-2">
          {stages.map((stage, i) => (
            <li key={stage} className="flex items-center gap-2">
              <span className="rounded-full border border-white/15 bg-white/5 px-3 py-1.5 text-sm">
                {stage}
              </span>
              {i < stages.length - 1 && (
                <span className="text-indigo-300" aria-hidden>
                  →
                </span>
              )}
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
