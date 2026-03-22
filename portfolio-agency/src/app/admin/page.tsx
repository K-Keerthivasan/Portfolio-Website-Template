import { enquiries, projects } from "@/lib/mock-data";

const stats = [
  { label: "Active projects", value: String(projects.length).padStart(2, "0") },
  { label: "Featured case studies", value: String(projects.filter((project) => project.featured).length).padStart(2, "0") },
  { label: "Unread enquiries", value: String(enquiries.filter((item) => item.unread).length).padStart(2, "0") },
  { label: "Avg. project value", value: "$42k" },
];

export default function AdminDashboardPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-lime">Dashboard</p>
          <h1 className="mt-4 font-heading text-7xl uppercase leading-[0.88] md:text-[8rem]">
            Control room for the portfolio system.
          </h1>
        </div>
        <p className="max-w-xl text-base text-foreground/68 md:justify-self-end">
          Mock internal tooling for the template: high-level project counts, recent enquiries, and quick operational stats.
        </p>
      </section>

      <section className="grid gap-5 md:grid-cols-4">
        {stats.map((stat) => (
          <article key={stat.label} className="border border-border bg-surface p-5">
            <p className="font-heading text-6xl uppercase text-lime">{stat.value}</p>
            <p className="mt-3 text-xs uppercase tracking-[0.24em] text-foreground/54">{stat.label}</p>
          </article>
        ))}
      </section>

      <section className="grid gap-5 xl:grid-cols-[1.15fr_0.85fr]">
        <div className="border border-border bg-surface p-5">
          <p className="text-xs uppercase tracking-[0.28em] text-lime">Recent enquiries</p>
          <div className="mt-6 space-y-4">
            {enquiries.map((item) => (
              <article key={item.id} className="border border-border p-4">
                <div className="flex flex-wrap items-center justify-between gap-3">
                  <h2 className="font-heading text-4xl uppercase text-foreground">{item.clientName}</h2>
                  <span className="text-xs uppercase tracking-[0.22em] text-foreground/48">{item.receivedAt}</span>
                </div>
                <p className="mt-2 text-xs uppercase tracking-[0.18em] text-lime">
                  {item.company} / {item.projectType} / {item.budget}
                </p>
                <p className="mt-3 text-sm text-foreground/68">{item.summary}</p>
              </article>
            ))}
          </div>
        </div>

        <div className="grid gap-5">
          <article className="border border-border bg-surface p-5">
            <p className="text-xs uppercase tracking-[0.28em] text-lime">Quick stats</p>
            <div className="mt-6 space-y-4">
              <div className="flex items-center justify-between border-b border-border pb-4">
                <span className="text-sm text-foreground/60">Avg. enquiry response</span>
                <span className="font-heading text-4xl uppercase text-foreground">2.4h</span>
              </div>
              <div className="flex items-center justify-between border-b border-border pb-4">
                <span className="text-sm text-foreground/60">Win rate</span>
                <span className="font-heading text-4xl uppercase text-foreground">41%</span>
              </div>
              <div className="flex items-center justify-between">
                <span className="text-sm text-foreground/60">Next launch</span>
                <span className="font-heading text-4xl uppercase text-foreground">APR 02</span>
              </div>
            </div>
          </article>

          <article className="border border-lime bg-lime p-5 text-primary-foreground">
            <p className="text-xs uppercase tracking-[0.28em]">Queue health</p>
            <p className="mt-4 font-heading text-6xl uppercase leading-[0.9]">
              Three fresh leads. Two featured builds live.
            </p>
          </article>
        </div>
      </section>
    </div>
  );
}


