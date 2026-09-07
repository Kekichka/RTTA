import { BookOpen, Briefcase, Code2, FlaskConical, Users, UserSearch } from "lucide-react";

const roles = [
  {
    icon: FlaskConical,
    title: "QA Engineers",
    body: "Draft case suites from stories without starting from a blank spreadsheet.",
  },
  {
    icon: Briefcase,
    title: "Product Managers",
    body: "See which acceptance criteria are still ambiguous before the sprint starts.",
  },
  {
    icon: UserSearch,
    title: "Business Analysts",
    body: "Turn requirement notes into a checklist of scenarios stakeholders can review.",
  },
  {
    icon: Code2,
    title: "Developers",
    body: "Get negative and edge cases early, while the feature is still easy to change.",
  },
  {
    icon: Users,
    title: "Small Teams",
    body: "Share one structured CSV instead of scattered comments in the ticket.",
  },
  {
    icon: BookOpen,
    title: "Students",
    body: "Practice how a story becomes positive, negative, and edge-case coverage.",
  },
];

export function UseCases() {
  return (
    <section id="use-cases" className="mx-auto max-w-[1120px] scroll-mt-24 px-5 py-20 sm:px-6 lg:py-24">
      <h2 className="text-3xl font-semibold tracking-[-0.03em] text-navy sm:text-4xl">
        Use Cases
      </h2>
      <div className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
        {roles.map((role) => (
          <article
            key={role.title}
            className="card-hover flex gap-4 rounded-2xl border border-border bg-white/90 p-5 shadow-sm"
          >
            <role.icon className="mt-0.5 shrink-0 text-accent" size={20} aria-hidden />
            <div>
              <h3 className="font-semibold tracking-tight">{role.title}</h3>
              <p className="mt-1 text-sm leading-6 text-muted">{role.body}</p>
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
