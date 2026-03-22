"use client";

import { useEffect, useRef } from "react";
import { motion } from "framer-motion";
import gsap from "gsap";

import styles from "./hero-showcase.module.css";

const cards = [
  { label: "Launch systems", value: "06 live programs" },
  { label: "Average sprint", value: "31 days" },
  { label: "Built to convert", value: "No filler, no safe mode" },
];

export function HeroReel() {
  const rootRef = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (!rootRef.current) return;

    const ctx = gsap.context(() => {
      gsap.to("[data-hero-line]", {
        y: 0,
        duration: 1.1,
        stagger: 0.12,
        ease: "power4.out",
      });

      gsap.fromTo(
        "[data-hero-card]",
        { y: 32, opacity: 0 },
        {
          y: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.14,
          ease: "power3.out",
          delay: 0.45,
        },
      );

      gsap.to("[data-orbit]", {
        rotation: 360,
        duration: 18,
        repeat: -1,
        ease: "none",
        transformOrigin: "50% 50%",
      });
    }, rootRef);

    return () => ctx.revert();
  }, []);

  return (
    <section ref={rootRef} className={`${styles.heroFrame} min-h-[calc(100vh-72px)]`}>
      <div className={styles.noise} />
      <div className="mx-auto grid min-h-[calc(100vh-72px)] w-full max-w-[1600px] gap-8 px-5 py-10 md:px-8 lg:grid-cols-[1.2fr_0.8fr] lg:items-end lg:py-16">
        <div className="relative z-10 flex flex-col justify-between gap-10">
          <div className="flex items-center gap-3 text-xs uppercase tracking-[0.35em] text-foreground/58">
            <span className="h-2 w-2 bg-lime" />
            Dark brutalist editorial systems
          </div>
          <div>
            {["K2", "DIGITAL", "MEDIA"].map((line) => (
              <span key={line} className={styles.line}>
                <span
                  data-hero-line
                  className={`${styles.lineInner} font-heading block text-[clamp(3.75rem,11vw,9.5rem)] leading-[0.9] uppercase tracking-[0.02em] text-foreground`}
                >
                  {line}
                </span>
              </span>
            ))}
            <motion.p
              initial={{ opacity: 0, y: 24 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className="mt-5 max-w-lg text-sm text-foreground/72 md:text-base"
            >
              We build launch-grade brands and digital experiences with oversized type, hard contrast, and motion that feels expensive.
            </motion.p>
          </div>
          <div className="flex flex-wrap gap-3 text-xs uppercase tracking-[0.22em] text-foreground/60">
            <span className="border border-border px-4 py-3">Branding</span>
            <span className="border border-border px-4 py-3">Web systems</span>
            <span className="border border-border px-4 py-3">Motion direction</span>
          </div>
        </div>
        <div className="relative z-10 flex items-end">
          <div className="pointer-events-none absolute left-0 top-8 h-44 w-44 rounded-full border border-[#C8FF00]/30" data-orbit />
          <div className={styles.cardRail}>
            {cards.map((card) => (
              <div key={card.label} data-hero-card className={`${styles.card} p-5 md:p-6`}>
                <p className="text-xs uppercase tracking-[0.3em] text-foreground/50">{card.label}</p>
                <p className="mt-3 font-heading text-3xl uppercase leading-none text-lime md:text-4xl">
                  {card.value}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}




