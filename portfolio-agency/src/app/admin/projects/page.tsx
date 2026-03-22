import { ProjectsManager } from "@/components/admin/projects-manager";
import { projects } from "@/lib/mock-data";

export default function AdminProjectsPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-lime">Projects manager</p>
          <h1 className="mt-4 font-heading text-7xl uppercase leading-[0.88] md:text-[8rem]">
            CRUD table for portfolio inventory.
          </h1>
        </div>
        <p className="max-w-xl text-base text-foreground/68 md:justify-self-end">
          Client-side mock manager with create, feature toggle, and delete interactions for title, category, and cover image URL.
        </p>
      </section>

      <ProjectsManager initialProjects={projects} />
    </div>
  );
}

