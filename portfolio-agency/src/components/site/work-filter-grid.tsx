"use client";

import Link from "next/link";
import { useState } from "react";
import { motion } from "framer-motion";

import { type Project, type ProjectCategory } from "@/lib/mock-data";

const filters: Array<ProjectCategory | "All"> = ["All", "Branding", "Web", "Motion", "Print"];

export function WorkFilterGrid({ projects }: { projects: Project[] }) {
  const [activeFilter, setActiveFilter] = useState<(typeof filters)[number]>("All");

  const filteredProjects =
    activeFilter === "All"
      ? projects
      : projects.filter((project) => project.category === activeFilter);

  return (
    <div className="space-y-8">
      <div className="flex flex-wrap gap-3">
        {filters.map((filter) => (
          <button
            key={filter}
            type="button"
            onClick={() => setActiveFilter(filter)}
            className={`border px-4 py-3 text-xs uppercase tracking-[0.24em] transition ${
              activeFilter === filter
                ? "border-lime bg-lime text-primary-foreground"
                : "border-border text-foreground/70 hover:border-lime hover:text-lime"
            }`}
          >
            {filter}
          </button>
        ))}
      </div>

      <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-3">
        {filteredProjects.map((project, index) => (
          <motion.div
            key={project.slug}
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, delay: index * 0.04 }}
          >
            <Link
              href={`/work/${project.slug}`}
              className="group relative block overflow-hidden border border-border bg-surface-strong"
            >
              <div
                className={`min-h-[420px] bg-gradient-to-br ${project.gallery[0].tone} p-6 transition duration-500 group-hover:scale-[1.03]`}
              >
                <div className="flex h-full flex-col justify-between">
                  <div className="text-xs uppercase tracking-[0.28em] text-foreground/58">
                    {project.category} / {project.year}
                  </div>
                  <div className="translate-y-8 transition duration-500 group-hover:translate-y-0">
                    <p className="font-heading text-5xl uppercase leading-none text-foreground md:text-6xl">
                      {project.title}
                    </p>
                    <p className="mt-3 max-w-sm text-sm uppercase tracking-[0.18em] text-lime">
                      {project.type}
                    </p>
                  </div>
                </div>
              </div>
            </Link>
          </motion.div>
        ))}
      </div>
    </div>
  );
}


