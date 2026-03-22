import { EnquiriesInbox } from "@/components/admin/enquiries-inbox";
import { enquiries } from "@/lib/mock-data";

export default function AdminEnquiriesPage() {
  return (
    <div className="space-y-8">
      <section className="grid gap-6 md:grid-cols-[0.95fr_1.05fr] md:items-end">
        <div>
          <p className="text-xs uppercase tracking-[0.28em] text-lime">Enquiries inbox</p>
          <h1 className="mt-4 font-heading text-7xl uppercase leading-[0.88] md:text-[8rem]">
            Message triage for new business.
          </h1>
        </div>
        <p className="max-w-xl text-base text-foreground/68 md:justify-self-end">
          Mock inbox showing client name, budget, project type tag, and read or unread status with local state toggles.
        </p>
      </section>

      <EnquiriesInbox initialEnquiries={enquiries} />
    </div>
  );
}

