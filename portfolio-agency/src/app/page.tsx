import Link from "next/link";

import { HeroReel } from "@/components/site/hero-reel";
import { MarqueeStrip } from "@/components/site/marquee-strip";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { awards, clients, projects, siteStats } from "@/lib/mock-data";

const masonryHeights = ["md:mt-0", "md:mt-16", "md:-mt-10", "md:mt-8"];

export default function HomePage() {
  const featuredProjects = projects.filter((project) => project.featured);

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <HeroReel />
        <MarqueeStrip />

        <section className="mx-auto w-full max-w-[1600px] px-5 py-20 md:px-8 md:py-24">
          <div className="flex flex-col gap-8 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-lime">Selected work</p>
              <h2 className="mt-4 max-w-3xl font-heading text-5xl uppercase leading-[0.92] md:text-6xl">
                Grid-breaking launches built to leave a mark.
              </h2>
            </div>
            <Link
              href="/work"
              className="border border-border px-5 py-4 text-xs uppercase tracking-[0.24em] text-foreground/72 transition hover:border-lime hover:text-lime"
            >
              View full portfolio
            </Link>
          </div>

          <div className="mt-12 grid gap-5 md:grid-cols-3">
            {featuredProjects.map((project, index) => (
              <Link
                key={project.slug}
                href={`/work/${project.slug}`}
                className={`group border border-border bg-surface ${masonryHeights[index % masonryHeights.length]}`}
              >
                <div
                  className={`min-h-[400px] bg-gradient-to-br ${project.gallery[0].tone} p-6 transition duration-500 group-hover:scale-[1.02] md:min-h-[520px]`}
                >
                  <div className="flex h-full flex-col justify-between">
                    <div className="text-xs uppercase tracking-[0.28em] text-foreground/56">
                      {project.category} / {project.client}
                    </div>
                    <div>
                      <p className="font-heading text-5xl uppercase leading-none md:text-6xl">
                        {project.title}
                      </p>
                      <p className="mt-3 max-w-xs text-sm text-foreground/72">{project.intro}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </section>

        <section className="border-y border-border bg-surface-strong">
          <div className="mx-auto grid w-full max-w-[1600px] gap-6 px-5 py-14 md:grid-cols-4 md:px-8">
            {siteStats.map((stat) => (
              <div key={stat.label} className="border border-border p-5">
                <p className="font-heading text-6xl uppercase text-lime md:text-7xl">{stat.value}</p>
                <p className="mt-3 text-xs uppercase tracking-[0.24em] text-foreground/56">{stat.label}</p>
              </div>
            ))}
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1600px] px-5 py-20 md:px-8 md:py-24">
          <div className="grid gap-12 md:grid-cols-[0.9fr_1.1fr]">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-lime">Clients</p>
              <h2 className="mt-4 font-heading text-5xl uppercase leading-[0.94] md:text-6xl">
                Trusted by brands that refuse the average.
              </h2>
            </div>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
              {clients.map((client) => (
                <div
                  key={client}
                  className="flex min-h-[7rem] items-center justify-center border border-border text-center font-heading text-3xl uppercase tracking-[0.12em] text-foreground/80"
                >
                  {client}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1600px] px-5 pb-20 md:px-8 md:pb-28">
          <div className="grid gap-6 md:grid-cols-[1.1fr_0.9fr]">
            <div className="border border-lime bg-lime p-6 text-primary-foreground md:p-8">
              <p className="text-xs uppercase tracking-[0.3em]">Awards and press</p>
              <h2 className="mt-6 font-heading text-5xl uppercase leading-[0.92] md:text-6xl">
                Loud work travels.
              </h2>
            </div>
            <div className="grid gap-4">
              {awards.map((award) => (
                <article key={award.title} className="border border-border p-5">
                  <h3 className="font-heading text-4xl uppercase leading-none text-foreground">
                    {award.title}
                  </h3>
                  <p className="mt-3 text-sm uppercase tracking-[0.18em] text-foreground/56">
                    {award.meta}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}



