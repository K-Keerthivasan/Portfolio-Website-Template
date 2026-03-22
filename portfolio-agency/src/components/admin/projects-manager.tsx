"use client";

import { useState } from "react";

import { type Project } from "@/lib/mock-data";

type ProjectForm = {
  title: string;
  category: Project["category"];
  coverImage: string;
  featured: boolean;
};

function emptyForm(): ProjectForm {
  return {
    title: "",
    category: "Branding",
    coverImage: "",
    featured: false,
  };
}

export function ProjectsManager({ initialProjects }: { initialProjects: Project[] }) {
  const [rows, setRows] = useState(
    initialProjects.map((project) => ({
      id: project.id,
      title: project.title,
      category: project.category,
      coverImage: project.coverImage,
      featured: project.featured,
    })),
  );
  const [form, setForm] = useState<ProjectForm>(emptyForm());

  function addProject() {
    if (!form.title.trim()) return;

    setRows((current) => [
      {
        id: Date.now(),
        ...form,
      },
      ...current,
    ]);
    setForm(emptyForm());
  }

  function toggleFeatured(id: number) {
    setRows((current) =>
      current.map((row) =>
        row.id === id ? { ...row, featured: !row.featured } : row,
      ),
    );
  }

  function deleteProject(id: number) {
    setRows((current) => current.filter((row) => row.id !== id));
  }

  return (
    <div className="grid gap-8 xl:grid-cols-[0.9fr_1.1fr]">
      <section className="border border-border bg-surface p-5">
        <p className="text-xs uppercase tracking-[0.28em] text-lime">New project</p>
        <div className="mt-6 grid gap-4">
          <label className="grid gap-2 text-sm text-foreground/72">
            Title
            <input
              value={form.title}
              onChange={(event) => setForm((current) => ({ ...current, title: event.target.value }))}
              className="border border-border bg-transparent px-4 py-3 outline-none transition focus:border-lime"
            />
          </label>
          <label className="grid gap-2 text-sm text-foreground/72">
            Category
            <select
              value={form.category}
              onChange={(event) =>
                setForm((current) => ({
                  ...current,
                  category: event.target.value as Project["category"],
                }))
              }
              className="border border-border bg-background px-4 py-3 outline-none transition focus:border-lime"
            >
              <option>Branding</option>
              <option>Web</option>
              <option>Motion</option>
              <option>Print</option>
            </select>
          </label>
          <label className="grid gap-2 text-sm text-foreground/72">
            Cover image URL
            <input
              value={form.coverImage}
              onChange={(event) =>
                setForm((current) => ({ ...current, coverImage: event.target.value }))
              }
              className="border border-border bg-transparent px-4 py-3 outline-none transition focus:border-lime"
            />
          </label>
          <label className="flex items-center gap-3 text-sm text-foreground/72">
            <input
              type="checkbox"
              checked={form.featured}
              onChange={(event) =>
                setForm((current) => ({ ...current, featured: event.target.checked }))
              }
              className="h-4 w-4 accent-lime"
            />
            Featured project
          </label>
          <button
            type="button"
            onClick={addProject}
            className="border border-lime bg-lime px-4 py-3 text-xs uppercase tracking-[0.24em] text-primary-foreground transition hover:bg-transparent hover:text-lime"
          >
            Create row
          </button>
        </div>
      </section>

      <section className="overflow-hidden border border-border bg-surface">
        <table className="w-full text-left">
          <thead className="border-b border-border text-xs uppercase tracking-[0.24em] text-foreground/52">
            <tr>
              <th className="px-4 py-4">Title</th>
              <th className="px-4 py-4">Category</th>
              <th className="px-4 py-4">Featured</th>
              <th className="px-4 py-4">Actions</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.id} className="border-b border-border last:border-b-0">
                <td className="px-4 py-4">
                  <p className="font-medium text-foreground">{row.title}</p>
                  <p className="mt-1 max-w-[28ch] truncate text-xs text-foreground/48">{row.coverImage}</p>
                </td>
                <td className="px-4 py-4 text-sm text-foreground/72">{row.category}</td>
                <td className="px-4 py-4">
                  <button
                    type="button"
                    onClick={() => toggleFeatured(row.id)}
                    className={`border px-3 py-2 text-[11px] uppercase tracking-[0.22em] ${
                      row.featured
                        ? "border-lime bg-lime text-primary-foreground"
                        : "border-border text-foreground/66"
                    }`}
                  >
                    {row.featured ? "Featured" : "Hidden"}
                  </button>
                </td>
                <td className="px-4 py-4">
                  <button
                    type="button"
                    onClick={() => deleteProject(row.id)}
                    className="border border-border px-3 py-2 text-[11px] uppercase tracking-[0.22em] text-foreground/66 transition hover:border-lime hover:text-lime"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </section>
    </div>
  );
}


