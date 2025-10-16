"use client"

import { useTheme } from "next-themes"
import { useEffect, useState } from "react"
import { Sun, Moon, Monitor } from "lucide-react"

export default function ThemeToggle() {
  const [mounted, setMounted] = useState(false)
  const { theme, setTheme } = useTheme()

  // useEffect only runs on the client, so now we can safely show the UI
  useEffect(() => {
    setMounted(true)
  }, [])

  if (!mounted) {
    return (
      <div className="h-9 w-9 rounded-lg bg-muted/50 animate-pulse" />
    )
  }

  const themes = [
    { name: "light", icon: Sun, label: "Light" },
    { name: "dark", icon: Moon, label: "Dark" },
    { name: "system", icon: Monitor, label: "System" },
  ]

  const currentTheme = themes.find((t) => t.name === theme) || themes[2]
  const Icon = currentTheme.icon

  return (
    <div className="relative group">
      <button
        onClick={() => {
          const currentIndex = themes.findIndex((t) => t.name === theme)
          const nextIndex = (currentIndex + 1) % themes.length
          setTheme(themes[nextIndex].name)
        }}
        className="flex items-center justify-center h-9 w-9 rounded-lg bg-muted/50 hover:bg-muted transition-colors"
        aria-label={`Switch theme (current: ${currentTheme.label})`}
      >
        <Icon className="h-4 w-4 text-foreground" />
      </button>

      {/* Tooltip */}
      <div className="absolute top-full right-0 mt-2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded-md shadow-lg border border-border opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none whitespace-nowrap z-50">
        {currentTheme.label} theme
      </div>
    </div>
  )
}
