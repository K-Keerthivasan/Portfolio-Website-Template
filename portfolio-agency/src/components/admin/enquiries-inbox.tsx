"use client";

import { useState } from "react";

import { type Enquiry } from "@/lib/mock-data";

export function EnquiriesInbox({ initialEnquiries }: { initialEnquiries: Enquiry[] }) {
  const [items, setItems] = useState(initialEnquiries);

  function toggleRead(id: number) {
    setItems((current) =>
      current.map((item) =>
        item.id === id ? { ...item, unread: !item.unread } : item,
      ),
    );
  }

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <article
          key={item.id}
          className={`border p-5 transition ${
            item.unread
              ? "border-[#C8FF00]/70 bg-[#C8FF00]/8"
              : "border-border bg-surface"
          }`}
        >
          <div className="flex flex-wrap items-start justify-between gap-4">
            <div>
              <div className="flex flex-wrap items-center gap-3">
                <h2 className="font-heading text-4xl uppercase text-foreground">{item.clientName}</h2>
                <span className="border border-border px-3 py-1 text-[11px] uppercase tracking-[0.22em] text-lime">
                  {item.projectType}
                </span>
              </div>
              <p className="mt-2 text-sm uppercase tracking-[0.18em] text-foreground/52">
                {item.company} / {item.budget} / {item.receivedAt}
              </p>
            </div>
            <button
              type="button"
              onClick={() => toggleRead(item.id)}
              className="border border-border px-4 py-3 text-[11px] uppercase tracking-[0.22em] text-foreground/66 transition hover:border-lime hover:text-lime"
            >
              Mark as {item.unread ? "read" : "unread"}
            </button>
          </div>
          <p className="mt-5 max-w-3xl text-base text-foreground/72">{item.summary}</p>
        </article>
      ))}
    </div>
  );
}

