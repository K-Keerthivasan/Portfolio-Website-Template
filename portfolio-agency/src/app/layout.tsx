import type { Metadata } from "next";
import { Bebas_Neue, Syne } from "next/font/google";

import "./globals.css";

const bebasNeue = Bebas_Neue({
  subsets: ["latin"],
  weight: "400",
  variable: "--font-heading",
});

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-sans",
});

const themeScript = `(() => {
  try {
    const storedTheme = window.localStorage.getItem("k2-theme");
    const theme = storedTheme === "light" ? "light" : "dark";
    const root = document.documentElement;
    root.classList.toggle("dark", theme === "dark");
    root.dataset.theme = theme;
  } catch {
    document.documentElement.classList.add("dark");
    document.documentElement.dataset.theme = "dark";
  }
})();`;

export const metadata: Metadata = {
  title: {
    default: "K2 Digital Media",
    template: "%s | K2 Digital Media",
  },
  description: "Dark brutalist agency portfolio boilerplate for K2 Digital Media.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${bebasNeue.variable} ${syne.variable}`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body>{children}</body>
    </html>
  );
}
