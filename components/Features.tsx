import {
  ClipboardCheck,
  FileSpreadsheet,
  LayoutPanelLeft,
  ScanSearch,
  Sparkles,
  Table2,
} from "lucide-react";

const features = [
  {
    icon: ScanSearch,
    title: "Requirement Analysis",
    body: "Detect unclear or incomplete requirements before tests are written.",
  },
  {
    icon: Sparkles,
    title: "Smart Test Generation",
    body: "Produce positive, negative, and edge-case scenarios instantly.",
  },
  {
    icon: ClipboardCheck,
    title: "Coverage Review",
    body: "AI checks for missing flows and suggests ways to close gaps.",
  },
  {
    icon: Table2,
    title: "Structured Test Cases",
    body: "Professional fields: preconditions, steps, and expected result.",
  },
  {
    icon: FileSpreadsheet,
    title: "CSV Export",
    body: "A clean CSV ready to share or import into your QA workflow.",
  },
  {
    icon: LayoutPanelLeft,
    title: "Figma Support",
    body: "Attach design context so generated cases match the actual UI.",
    future: true,
  },
];

export function Features() {
  return (
    <section id="features" className="scroll-mt-24 px-5 py-20 sm:px-6 lg:py-24">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-navy sm:text-4xl">
          Features
        </h2>
        <p className="mt-4 max-w-2xl text-[17px] leading-8 text-muted">
          From analysis to export — without a blank spreadsheet.
        </p>
        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((item) => (
            <article
              key={item.title}
              className="card-hover rounded-2xl border border-border bg-white/90 p-6 shadow-sm"
            >
              <div className="flex items-center justify-between">
                <div className="rounded-xl border border-indigo-100 bg-accent-soft p-2.5">
                  <item.icon className="text-accent" size={20} aria-hidden />
                </div>
                {item.future && (
                  <span className="rounded-full bg-emerald-50 px-2 py-0.5 text-[10px] font-semibold uppercase tracking-wide text-emerald-800">
                    Coming Soon
                  </span>
                )}
              </div>
              <h3 className="mt-5 text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
