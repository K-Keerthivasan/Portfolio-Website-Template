import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

const navItems = [
  { href: "/", label: "Home" },
  { href: "/work", label: "Work" },
  { href: "/about", label: "About" },
  { href: "/admin", label: "Admin" },
];

export function SiteHeader() {
  return (
    <header className="sticky z-50 border-b border-border bg-background/90 backdrop-blur-xl [top:var(--k2-demo-top-offset,0px)]">
      <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-4 px-5 py-4 md:flex-row md:items-center md:justify-between md:px-8">
        <Link href="/" className="font-heading text-2xl uppercase tracking-[0.18em] text-lime">
          K2 Digital Media
        </Link>
        <div className="flex flex-wrap items-center justify-end gap-3">
          <ThemeToggle />
          <nav className="flex flex-wrap items-center justify-end gap-2 text-xs uppercase tracking-[0.24em] text-foreground/72 md:text-sm">
            {navItems.map((item) => (
              <Link
                key={item.href}
                href={item.href}
                className="border border-border px-3 py-2 transition hover:border-lime hover:text-lime"
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
}

