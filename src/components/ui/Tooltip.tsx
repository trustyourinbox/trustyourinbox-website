import React, { useState } from "react";

export function TooltipProvider({ children }: { children: React.ReactNode }) {
  return <>{children}</>;
}

export function Tooltip({ children }: { children: React.ReactNode }) {
  return <span className="relative">{children}</span>;
}

export function TooltipTrigger({ children }: { children: React.ReactNode }) {
  return (
    <span tabIndex={0} className="cursor-pointer focus:outline-none">
      {children}
    </span>
  );
}

export function TooltipContent({ children }: { children: React.ReactNode }) {
  const [show, setShow] = useState(false);
  return (
    <span
      onMouseEnter={() => setShow(true)}
      onMouseLeave={() => setShow(false)}
      onFocus={() => setShow(true)}
      onBlur={() => setShow(false)}
      className="relative"
    >
      {show && (
        <span className="absolute left-1/2 z-10 mt-2 -translate-x-1/2 whitespace-nowrap rounded bg-gray-900 px-3 py-2 text-xs text-white shadow-lg">
          {children}
        </span>
      )}
    </span>
  );
}
