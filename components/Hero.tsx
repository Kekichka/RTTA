import { ArrowRight } from "lucide-react";
import { ProductDemo } from "./ProductDemo";

export function Hero() {
  return (
    <section id="top" className="relative overflow-hidden pt-10 pb-6 sm:pt-14">
      <div className="mx-auto max-w-[1120px] px-5 sm:px-6">
        <div className="fade-in mx-auto max-w-3xl text-center">
          <p className="inline-flex items-center rounded-full border border-emerald-200/80 bg-white/70 px-3 py-1 text-xs font-medium text-emerald-800">
            Requirement → Analyze → Generate Tests → Review Coverage → Export CSV
          </p>
          <h1 className="mt-6 text-4xl font-semibold tracking-[-0.04em] text-navy sm:text-5xl lg:text-[56px] lg:leading-[1.08]">
            Turn Requirements Into Test Cases in Seconds
          </h1>
          <p className="mx-auto mt-5 max-w-xl text-[17px] leading-8 text-muted">
            Convert User Stories into structured positive, negative, and
            edge-case tests — then review coverage before you export.
          </p>
          <div className="mt-8 flex flex-col items-center justify-center gap-3 sm:flex-row">
            <a
              href="#preview"
              className="inline-flex h-11 w-full items-center justify-center rounded-xl bg-accent px-5 text-sm font-medium text-white shadow-[0_10px_24px_-12px_rgba(79,70,229,0.8)] transition hover:bg-indigo-600 sm:w-auto"
            >
              Generate Test Cases
            </a>
            <a
              href="#how-it-works"
              className="inline-flex h-11 w-full items-center justify-center gap-2 rounded-xl border border-border bg-white/80 px-5 text-sm font-medium text-foreground transition hover:bg-white sm:w-auto"
            >
              See How It Works
              <ArrowRight size={16} aria-hidden />
            </a>
          </div>
        </div>
        <div className="fade-in-delay mt-12">
          <ProductDemo />
        </div>
      </div>
    </section>
  );
}
