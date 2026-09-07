const benefits = [
  {
    title: "Save QA Time",
    body: "Cut the repetitive work of turning stories into case outlines.",
  },
  {
    title: "Better Coverage",
    body: "Surface negative and edge cases before they hide in production.",
  },
  {
    title: "Consistent Documentation",
    body: "Keep a predictable structure: ID, title, type, and priority.",
  },
  {
    title: "Faster Feedback",
    body: "Catch unclear requirements before development treats them as facts.",
  },
];

export function Benefits() {
  return (
    <section className="px-5 py-16 sm:px-6 lg:py-20">
      <div className="mx-auto max-w-[1120px]">
        <h2 className="text-3xl font-semibold tracking-[-0.03em] text-navy sm:text-4xl">
          Benefits
        </h2>
        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {benefits.map((item) => (
            <article
              key={item.title}
              className="card-hover rounded-2xl border border-border bg-white/90 p-6 shadow-sm"
            >
              <h3 className="text-lg font-semibold tracking-tight">{item.title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{item.body}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
