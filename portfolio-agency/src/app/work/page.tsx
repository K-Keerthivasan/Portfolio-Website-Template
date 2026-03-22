import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { WorkFilterGrid } from "@/components/site/work-filter-grid";
import { projects } from "@/lib/mock-data";

export default function WorkPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1600px] px-5 py-14 md:px-8 md:py-20">
        <div className="grid gap-8 md:grid-cols-[0.9fr_1.1fr] md:items-end">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-lime">Portfolio</p>
            <h1 className="mt-4 font-heading text-6xl uppercase leading-[0.9] md:text-[6.5rem]">
              Work that hits before it explains itself.
            </h1>
          </div>
          <p className="max-w-xl text-base text-foreground/68 md:justify-self-end">
            Filter the portfolio by discipline. Each card reveals the project name and type on hover, with six mock case studies ready to extend into a real CMS later.
          </p>
        </div>

        <div className="mt-14">
          <WorkFilterGrid projects={projects} />
        </div>
      </main>
      <SiteFooter />
    </div>
  );
}



