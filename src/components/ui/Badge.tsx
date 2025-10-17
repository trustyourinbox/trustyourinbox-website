import React from "react";

export function Badge({
  children,
  className = "",
  variant,
}: {
  children: React.ReactNode;
  className?: string;
  variant?: "outline";
}) {
  return (
    <span
      className={`inline-block rounded-full px-3 py-0.5 text-xs font-semibold ${
        variant === "outline" ? "border border-current bg-transparent" : ""
      } ${className}`}
    >
      {children}
    </span>
  );
}
