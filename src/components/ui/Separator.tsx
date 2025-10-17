import React from "react";

export function Separator({ className = "" }: { className?: string }) {
  return <hr className={`my-2 border-t border-gray-200 ${className}`} />;
}
