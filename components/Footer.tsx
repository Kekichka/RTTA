import { Logo } from "./Logo";

export function Footer() {
  return (
    <footer className="border-t border-border bg-white/70">
      <div className="mx-auto flex max-w-[1120px] flex-col gap-8 px-5 py-10 sm:px-6 md:flex-row md:items-start md:justify-between">
        <div>
          <Logo />
          <p className="mt-3 max-w-xs text-sm leading-6 text-muted">
            Requirement-to-Test Agent
            <br />
            AI-powered test design assistant.
          </p>
        </div>
        <nav aria-label="Footer">
          <ul className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted">
            <li>
              <a href="#how-it-works" className="hover:text-foreground">
                How It Works
              </a>
            </li>
            <li>
              <a href="#features" className="hover:text-foreground">
                Features
              </a>
            </li>
            <li>
              <a href="#use-cases" className="hover:text-foreground">
                Use Cases
              </a>
            </li>
            <li>
              <a href="#technology" className="hover:text-foreground">
                Technology
              </a>
            </li>
          </ul>
        </nav>
      </div>
    </footer>
  );
}
