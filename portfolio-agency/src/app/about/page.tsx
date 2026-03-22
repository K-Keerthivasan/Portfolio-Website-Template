import styles from "@/components/site/case-study.module.css";
import { SiteFooter } from "@/components/site/site-footer";
import { SiteHeader } from "@/components/site/site-header";
import { cultureShots, team, values } from "@/lib/mock-data";

export default function AboutPage() {
  return (
    <div className="min-h-screen bg-background">
      <SiteHeader />
      <main className="mx-auto w-full max-w-[1600px] px-5 py-14 md:px-8 md:py-20">
        <section className="grid gap-10 md:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-lime">About K2</p>
            <h1 className="mt-4 font-heading text-6xl uppercase leading-[0.9] md:text-[7rem]">
              We make brave brands feel inevitable.
            </h1>
          </div>
          <div className="space-y-6 text-lg leading-8 text-foreground/72">
            <p>
              K2 Digital Media is an independent studio building brand systems, websites, and motion experiences for teams who need more than a clean layout.
            </p>
            <p>
              We operate between editorial design, product rigor, and launch psychology, pushing each system until it feels undeniable on screen and in-market.
            </p>
          </div>
        </section>

        <section className="mt-16 grid gap-5 md:grid-cols-2">
          <blockquote className={`${styles.quotePanel} p-6 md:p-8`}>
            <p className="font-heading text-5xl uppercase leading-[0.92] md:text-7xl">
              “We don’t decorate brands. We weaponize clarity.”
            </p>
          </blockquote>
          <blockquote className={`${styles.quotePanel} p-6 md:p-8`}>
            <p className="font-heading text-5xl uppercase leading-[0.92] md:text-7xl">
              “Every launch should feel like a statement, not a template.”
            </p>
          </blockquote>
        </section>

        <section className="mt-16">
          <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-lime">Team</p>
              <h2 className="mt-4 font-heading text-5xl uppercase leading-[0.94] md:text-6xl">
                Small team. Heavy output.
              </h2>
            </div>
          </div>
          <div className="mt-10 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
            {team.map((member, index) => (
              <article key={member.name} className="border border-border bg-surface p-5">
                <div className={`min-h-[18rem] bg-gradient-to-br ${index % 2 === 0 ? "from-[#C8FF00]/20 via-transparent to-white/10" : "from-white/15 via-transparent to-[#C8FF00]/12"}`} />
                <h3 className="mt-5 font-heading text-4xl uppercase leading-none text-foreground">
                  {member.name}
                </h3>
                <p className="mt-2 text-xs uppercase tracking-[0.22em] text-foreground/54">{member.role}</p>
              </article>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-10 md:grid-cols-[1fr_0.9fr]">
          <div>
            <p className="text-xs uppercase tracking-[0.28em] text-lime">Culture</p>
            <h2 className="mt-4 font-heading text-5xl uppercase leading-[0.94] md:text-6xl">
              Built in motion, critique, and late-night edits.
            </h2>
          </div>
          <div className="grid gap-5 md:grid-cols-3">
            {cultureShots.map((shot) => (
              <div
                key={shot.title}
                className={`min-h-[16rem] border border-border bg-gradient-to-br ${shot.tone} p-4`}
              >
                <p className="mt-auto text-xs uppercase tracking-[0.24em] text-foreground/58">
                  {shot.title}
                </p>
              </div>
            ))}
          </div>
        </section>

        <section className="mt-16 grid gap-5 md:grid-cols-3">
          {values.map((value) => (
            <article key={value.title} className="border border-border p-5">
              <p className="text-xs uppercase tracking-[0.28em] text-lime">Value</p>
              <h3 className="mt-4 font-heading text-4xl uppercase leading-none text-foreground">
                {value.title}
              </h3>
              <p className="mt-4 text-base leading-7 text-foreground/68">{value.description}</p>
            </article>
          ))}
        </section>
      </main>
      <SiteFooter />
    </div>
  );
}




