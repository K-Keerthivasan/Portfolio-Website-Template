import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";

import styles from "@/components/site/case-study.module.css";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { getProject, projects } from "@/lib/mock-data";

export function generateStaticParams() {
  return projects.map((project) => ({ slug: project.slug }));
}

export async function generateMetadata(
  props: PageProps<"/work/[slug]">,
): Promise<Metadata> {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) {
    return {
      title: "Project not found",
    };
  }

  return {
    title: project.title,
    description: project.intro,
  };
}

export default async function CaseStudyPage(props: PageProps<"/work/[slug]">) {
  const { slug } = await props.params;
  const project = getProject(slug);

  if (!project) {
    notFound();
  }

  const nextProject =
    projects[(projects.findIndex((item) => item.slug === project.slug) + 1) % projects.length];

  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main>
        <section className={`border-b border-border bg-gradient-to-br ${project.gallery[0].tone}`}>
          <div className="mx-auto w-full max-w-[1600px] px-5 py-16 md:px-8 md:py-24">
            <p className="text-xs uppercase tracking-[0.28em] text-lime">
              {project.category} / {project.client} / {project.year}
            </p>
            <h1 className="mt-6 max-w-5xl font-heading text-7xl uppercase leading-[0.86] md:text-[10rem]">
              {project.title}
            </h1>
            <p className="mt-6 max-w-2xl text-lg text-foreground/72">{project.intro}</p>
          </div>
        </section>

        <section className="mx-auto grid w-full max-w-[1600px] gap-12 px-5 py-16 md:grid-cols-[0.9fr_1.1fr] md:px-8 md:py-20">
          <div className={`${styles.quotePanel} p-6 md:p-8`}>
            <p className="text-xs uppercase tracking-[0.3em] text-lime">Project scope</p>
            <div className="mt-6 flex flex-wrap gap-3">
              {project.tags.map((tag) => (
                <span key={tag} className="border border-border px-4 py-3 text-xs uppercase tracking-[0.22em] text-foreground/68">
                  {tag}
                </span>
              ))}
            </div>
            <div className="mt-8 grid gap-5 md:grid-cols-3">
              {project.stats.map((stat) => (
                <div key={stat.label}>
                  <p className="font-heading text-5xl uppercase text-foreground">{stat.value}</p>
                  <p className="mt-2 text-xs uppercase tracking-[0.24em] text-foreground/50">{stat.label}</p>
                </div>
              ))}
            </div>
          </div>

          <div className="grid gap-8">
            <article>
              <p className="text-xs uppercase tracking-[0.28em] text-lime">Challenge</p>
              <p className="mt-4 text-lg leading-8 text-foreground/72">{project.challenge}</p>
            </article>
            <article>
              <p className="text-xs uppercase tracking-[0.28em] text-lime">Solution</p>
              <p className="mt-4 text-lg leading-8 text-foreground/72">{project.solution}</p>
            </article>
            <article>
              <p className="text-xs uppercase tracking-[0.28em] text-lime">Outcome</p>
              <p className="mt-4 text-lg leading-8 text-foreground/72">{project.outcome}</p>
            </article>
          </div>
        </section>

        <section className="mx-auto w-full max-w-[1600px] px-5 pb-20 md:px-8 md:pb-24">
          <div className="grid gap-5 md:grid-cols-3">
            {project.gallery.map((item) => (
              <div
                key={item.title}
                className={`${styles.galleryBlock} bg-gradient-to-br ${item.tone} p-5 ${
                  item.height === "tall"
                    ? "min-h-[540px]"
                    : item.height === "medium"
                      ? "min-h-[430px]"
                      : "min-h-[320px]"
                }`}
              >
                <div className="flex h-full flex-col justify-end">
                  <p className="font-heading text-4xl uppercase leading-none text-foreground md:text-5xl">
                    {item.title}
                  </p>
                  <p className="mt-3 max-w-sm text-sm text-foreground/68">{item.caption}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        <section className="border-t border-border">
          <div className="mx-auto flex w-full max-w-[1600px] flex-col gap-6 px-5 py-16 md:flex-row md:items-end md:justify-between md:px-8">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-lime">Next project</p>
              <h2 className="mt-4 font-heading text-6xl uppercase leading-[0.9] md:text-8xl">
                {nextProject.title}
              </h2>
            </div>
            <Link
              href={`/work/${nextProject.slug}`}
              className="border border-border px-5 py-4 text-xs uppercase tracking-[0.24em] text-foreground/72 transition hover:border-lime hover:text-lime"
            >
              Open case study
            </Link>
          </div>
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}



