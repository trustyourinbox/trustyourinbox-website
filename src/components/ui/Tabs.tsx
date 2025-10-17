import React, { ReactNode } from "react";

interface TabsProps {
  value: string;
  onValueChange: (value: string) => void;
  children: ReactNode;
  className?: string;
}

interface TabsContextType {
  value: string;
  onValueChange: (value: string) => void;
}
const TabsContext = React.createContext<TabsContextType | undefined>(undefined);

export function TabsList({
  children,
  className,
}: {
  children: ReactNode;
  className?: string;
}) {
  return <div className={"flex " + (className || "")}>{children}</div>;
}

interface TabsTriggerProps {
  value: string;
  children: ReactNode;
  className?: string;
}
export function TabsTrigger({ value, children, className }: TabsTriggerProps) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error("TabsTrigger must be used within Tabs");
  const isActive = context.value === value;
  return (
    <button
      type="button"
      className={`rounded-t-md border-b-2 px-4 py-2 text-sm font-medium transition-colors focus:outline-none ${
        isActive
          ? "border-primary bg-white text-primary"
          : "border-transparent text-gray-500 hover:bg-gray-50 hover:text-primary"
      } ${className || ""}`}
      onClick={() => context.onValueChange(value)}
      tabIndex={isActive ? 0 : -1}
    >
      {children}
    </button>
  );
}

interface TabsContentProps {
  value: string;
  children: ReactNode;
  className?: string;
}
export function TabsContent({ value, children, className }: TabsContentProps) {
  const context = React.useContext(TabsContext);
  if (!context) throw new Error("TabsContent must be used within Tabs");
  if (context.value !== value) return null;
  return <div className={className}>{children}</div>;
}

export function Tabs({ value, onValueChange, children, className }: TabsProps) {
  return (
    <TabsContext.Provider value={{ value, onValueChange }}>
      <div className={className}>{children}</div>
    </TabsContext.Provider>
  );
}
