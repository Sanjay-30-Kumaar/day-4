"use client";

import { useEffect, useState } from "react";

export default function ThemeToggle() {
  const [isDark, setIsDark] = useState(false);
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setIsDark(document.documentElement.classList.contains("dark"));
    setMounted(true);
  }, []);

  function toggleTheme() {
    const nextIsDark =
      !document.documentElement.classList.contains("dark");

    document.documentElement.classList.toggle("dark", nextIsDark);

    localStorage.setItem(
      "theme",
      nextIsDark ? "dark" : "light"
    );

    setIsDark(nextIsDark);
  }

  return (
    <button
      type="button"
      className="theme-toggle"
      onClick={toggleTheme}
      aria-label="Toggle dark mode"
      title="Toggle dark mode"
    >
      {!mounted
        ? "Theme"
        : isDark
          ? "☀️ Light"
          : "🌙 Dark"}
    </button>
  );
}