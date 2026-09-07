"use client";

import { useState } from "react";
import { Menu, X } from "lucide-react";
import { Logo } from "./Logo";

const links = [
  { href: "#how-it-works", label: "How It Works" },
  { href: "#features", label: "Features" },
  { href: "#use-cases", label: "Use Cases" },
  { href: "#technology", label: "Technology" },
];

export function Navbar() {
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-border/80 bg-white/75 backdrop-blur-md">
      <nav
        className="mx-auto flex h-16 max-w-[1120px] items-center justify-between px-5 sm:px-6"
        aria-label="Primary"
      >
        <Logo />
        <ul className="hidden items-center gap-7 md:flex">
          {links.map((link) => (
            <li key={link.href}>
              <a
                href={link.href}
                className="text-sm text-muted transition-colors hover:text-foreground"
              >
                {link.label}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex items-center gap-2">
          <a
            href="#preview"
            className="inline-flex h-9 items-center rounded-lg bg-accent px-3.5 text-sm font-medium text-white shadow-sm transition hover:bg-indigo-600"
          >
            Try the Agent
          </a>
          <button
            type="button"
            className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-border bg-white md:hidden"
            aria-expanded={open}
            aria-controls="mobile-nav"
            aria-label={open ? "Close menu" : "Open menu"}
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </nav>
      {open && (
        <div id="mobile-nav" className="border-t border-border bg-white md:hidden">
          <ul className="mx-auto flex max-w-[1120px] flex-col gap-1 px-5 py-3">
            {links.map((link) => (
              <li key={link.href}>
                <a
                  href={link.href}
                  className="block rounded-md px-2 py-2 text-sm text-foreground"
                  onClick={() => setOpen(false)}
                >
                  {link.label}
                </a>
              </li>
            ))}
            <li>
              <a
                href="#preview"
                className="block rounded-md px-2 py-2 text-sm font-medium text-accent"
                onClick={() => setOpen(false)}
              >
                Try the Agent
              </a>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}
