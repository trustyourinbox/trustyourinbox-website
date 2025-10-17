"use client";

import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { Sun, Moon, Monitor } from "lucide-react";

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false);
  const { theme, setTheme } = useTheme();

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) {
    return <div className="h-9 w-9 animate-pulse rounded-lg bg-muted/50" />;
  }

  const themes = [
    { name: "light", icon: Sun, label: "Light" },
    { name: "dark", icon: Moon, label: "Dark" },
    { name: "system", icon: Monitor, label: "System" },
  ];

  const currentTheme = themes.find((t) => t.name === theme) || themes[2];
  const Icon = currentTheme.icon;

  return (
    <div className="group relative">
      <button
        onClick={() => {
          const currentIndex = themes.findIndex((t) => t.name === theme);
          const nextIndex = (currentIndex + 1) % themes.length;
          setTheme(themes[nextIndex].name);
        }}
        className="flex h-9 w-9 items-center justify-center rounded-lg bg-muted/50 transition-colors hover:bg-primary/10"
        aria-label={`Switch theme (current: ${currentTheme.label})`}
      >
        <Icon className="h-4 w-4 text-foreground" />
      </button>

      {/* Tooltip */}
      <div className="pointer-events-none absolute right-0 top-full z-50 mt-2 whitespace-nowrap rounded-md border border-border bg-popover px-2 py-1 text-xs text-popover-foreground opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        {currentTheme.label} theme
      </div>
    </div>
  );
}
