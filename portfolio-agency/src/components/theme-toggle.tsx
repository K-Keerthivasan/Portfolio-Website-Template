"use client";

import { useState } from "react";

type Theme = "light" | "dark";

function getInitialTheme(): Theme {
  if (typeof document === "undefined") {
    return "dark";
  }

  return document.documentElement.dataset.theme === "light" ? "light" : "dark";
}

function applyTheme(theme: Theme) {
  const root = document.documentElement;
  root.classList.toggle("dark", theme === "dark");
  root.dataset.theme = theme;
  window.localStorage.setItem("k2-theme", theme);
}

export function ThemeToggle() {
  const [theme, setTheme] = useState<Theme>(getInitialTheme);

  function handleThemeChange(nextTheme: Theme) {
    setTheme(nextTheme);
    applyTheme(nextTheme);
  }

  return (
    <div
      suppressHydrationWarning
      className="inline-flex border border-border bg-surface-soft p-1 text-[11px] uppercase tracking-[0.22em]"
    >
      {(["dark", "light"] as const).map((option) => (
        <button
          key={option}
          type="button"
          onClick={() => handleThemeChange(option)}
          className={`px-3 py-2 transition ${
            theme === option
              ? "bg-lime text-primary-foreground"
              : "text-foreground/62 hover:text-lime"
          }`}
          aria-pressed={theme === option}
        >
          {option}
        </button>
      ))}
    </div>
  );
}

