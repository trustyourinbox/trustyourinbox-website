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
    return <div className="bg-muted/50 h-9 w-9 animate-pulse rounded-lg" />;
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
        className="bg-muted/50 hover:bg-primary/10 flex h-9 w-9 items-center justify-center rounded-lg transition-colors"
        aria-label={`Switch theme (current: ${currentTheme.label})`}
      >
        <Icon className="text-foreground h-4 w-4" />
      </button>

      {/* Tooltip */}
      <div className="border-border bg-popover text-popover-foreground pointer-events-none absolute top-full right-0 z-50 mt-2 rounded-md border px-2 py-1 text-xs whitespace-nowrap opacity-0 shadow-lg transition-opacity group-hover:opacity-100">
        {currentTheme.label} theme
      </div>
    </div>
  );
}
