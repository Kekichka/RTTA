const phases = [
  {
    name: "MVP",
    active: true,
    items: ["Requirement input", "AI analysis", "Test generation", "CSV export"],
  },
  {
    name: "Next",
    active: false,
    items: ["Figma analysis", "Templates", "TestRail/Jira"],
  },
  {
    name: "Future",
    active: false,
    items: ["Regression suggestions", "Change impact analysis", "Collaboration"],
  },
];

export function Roadmap() {
  return (
    <section className="mx-auto max-w-[1120px] px-5 py-20 sm:px-6 lg:py-24">
      <h2 className="text-3xl font-semibold tracking-[-0.03em] text-navy sm:text-4xl">
        Roadmap
      </h2>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {phases.map((phase) => (
          <article
            key={phase.name}
            className="rounded-2xl border border-border bg-white/90 p-6 shadow-sm"
          >
            <p
              className={`text-sm font-medium ${
                phase.active ? "text-accent" : "text-muted"
              }`}
            >
              {phase.name}
            </p>
            <ul className="mt-4 space-y-2 text-sm leading-6 text-muted">
              {phase.items.map((item) => (
                <li key={item} className="flex gap-2">
                  <span
                    className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-accent"
                    aria-hidden
                  />
                  {item}
                </li>
              ))}
            </ul>
          </article>
        ))}
      </div>
    </section>
  );
}
