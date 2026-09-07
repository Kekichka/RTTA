import { FileQuestion, PenLine, ShieldAlert } from "lucide-react";

const problems = [
  {
    icon: FileQuestion,
    title: "Ambiguous Requirements",
    body: "Stories omit timing, payments, and error states. Testers guess — or wait.",
  },
  {
    icon: PenLine,
    title: "Manual Test Design",
    body: "Happy paths, invalid inputs, and retries are rewritten by hand for every feature.",
  },
  {
    icon: ShieldAlert,
    title: "Coverage Gaps",
    body: "Negative paths and edge cases slip when time is short and the ticket is already in review.",
  },
];

export function ProblemSection() {
  return (
    <section className="mx-auto max-w-[1120px] scroll-mt-24 px-5 py-20 sm:px-6 lg:py-24">
      <h2 className="max-w-xl text-3xl font-semibold tracking-[-0.03em] text-navy sm:text-4xl">
        Writing Test Cases Shouldn&apos;t Take Hours
      </h2>
      <p className="mt-4 max-w-2xl text-[17px] leading-8 text-muted">
        QA stalls on incomplete stories. The agent turns them into structured
        scenarios so you spend time testing, not drafting spreadsheets.
      </p>
      <div className="mt-12 grid gap-4 md:grid-cols-3">
        {problems.map((item) => (
          <article
            key={item.title}
            className="card-hover rounded-2xl border border-border bg-white/90 p-6 shadow-sm"
          >
            <item.icon className="text-accent" size={22} aria-hidden />
            <h3 className="mt-4 text-lg font-semibold tracking-tight">{item.title}</h3>
            <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
          </article>
        ))}
      </div>
    </section>
  );
}
