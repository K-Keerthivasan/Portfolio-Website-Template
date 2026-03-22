import Link from "next/link";

import { ThemeToggle } from "@/components/theme-toggle";

const adminLinks = [
  { href: "/admin", label: "Dashboard" },
  { href: "/admin/projects", label: "Projects" },
  { href: "/admin/enquiries", label: "Enquiries" },
];

export default function AdminLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <div className="min-h-screen bg-background">
      <header className="border-b border-border bg-surface-strong">
        <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-5 px-5 py-5 md:flex-row md:items-center md:justify-between md:px-8">
          <div>
            <Link href="/" className="font-heading text-3xl uppercase tracking-[0.16em] text-lime">
              K2 Admin
            </Link>
            <p className="mt-1 text-xs uppercase tracking-[0.22em] text-foreground/50">
              Internal preview dashboard
            </p>
          </div>
          <div className="flex flex-wrap items-center gap-3">
            <ThemeToggle />
            <nav className="flex flex-wrap gap-2 text-xs uppercase tracking-[0.22em]">
              {adminLinks.map((item) => (
                <Link
                  key={item.href}
                  href={item.href}
                  className="border border-border px-4 py-3 text-foreground/70 transition hover:border-lime hover:text-lime"
                >
                  {item.label}
                </Link>
              ))}
            </nav>
          </div>
        </div>
      </header>
      <main className="mx-auto w-full max-w-[1600px] px-5 py-10 md:px-8 md:py-14">{children}</main>
    </div>
  );
}

