import React from "react";

export function Progress({ value, className = "" }: { value: number; className?: string }) {
  return (
    <div className={`relative w-full bg-green-100 rounded-full overflow-hidden`} style={{ height: 8 }}>
      <div
        className={`h-full rounded-full transition-all duration-300 ${className}`}
        style={{ width: `${value}%` }}
      />
      {/* The color for the filled part will be set by the className prop in the parent */}
    </div>
  );
} 