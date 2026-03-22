"use client";

import { motion } from "framer-motion";

const items = [
  "Strategy",
  "Identity",
  "Digital Product",
  "Motion",
  "Launch Campaigns",
  "Editorial Design",
];

export function MarqueeStrip() {
  const content = [...items, ...items];

  return (
    <div className="overflow-hidden border-y border-border bg-lime py-4 text-primary-foreground">
      <motion.div
        animate={{ x: ["0%", "-50%"] }}
        transition={{ duration: 18, ease: "linear", repeat: Number.POSITIVE_INFINITY }}
        className="flex min-w-max gap-6 font-heading text-4xl uppercase tracking-[0.12em] md:text-6xl"
      >
        {content.map((item, index) => (
          <span key={`${item}-${index}`} className="flex items-center gap-6">
            {item}
            <span className="h-3 w-3 bg-primary-foreground" />
          </span>
        ))}
      </motion.div>
    </div>
  );
}


