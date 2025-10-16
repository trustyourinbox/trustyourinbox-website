import React, { useState, ReactNode, useContext, createContext } from "react"

interface AccordionContextType {
  openItems: string[]
  toggleItem: (value: string) => void
  type: "single" | "multiple"
}
const AccordionContext = createContext<AccordionContextType | undefined>(undefined)

interface AccordionProps {
  type?: "single" | "multiple"
  className?: string
  children: ReactNode
}
export function Accordion({ type = "single", className, children }: AccordionProps) {
  const [openItems, setOpenItems] = useState<string[]>([])

  const toggleItem = (value: string) => {
    setOpenItems((prev) => {
      if (type === "single") {
        return prev[0] === value ? [] : [value]
      } else {
        return prev.includes(value) ? prev.filter((v) => v !== value) : [...prev, value]
      }
    })
  }

  return (
    <AccordionContext.Provider value={{ openItems, toggleItem, type }}>
      <div className={className}>{children}</div>
    </AccordionContext.Provider>
  )
}

interface AccordionItemProps {
  value: string
  children: ReactNode
}
export function AccordionItem({ value, children }: AccordionItemProps) {
  return <div className="border-b last:border-b-0" data-accordion-item={value}>{children}</div>
}

interface AccordionTriggerProps {
  value?: string
  children: ReactNode
  className?: string
}
export function AccordionTrigger({ value, children, className }: AccordionTriggerProps) {
  const context = useContext(AccordionContext)
  if (!context) throw new Error("AccordionTrigger must be used within Accordion")
  const itemValue = value || ''
  const isOpen = context.openItems.includes(itemValue)
  return (
    <button
      type="button"
      className={`w-full flex justify-between items-center py-3 px-2 font-medium text-left text-gray-900 focus:outline-none transition-colors ${isOpen ? "bg-secondary" : "bg-white"} ${className || ""}`}
      onClick={() => context.toggleItem(itemValue)}
      aria-expanded={isOpen}
    >
      <span>{children}</span>
      <span className="ml-2 transition-transform">{isOpen ? "▼" : "▶"}</span>
    </button>
  )
}

interface AccordionContentProps {
  value?: string
  children: ReactNode
  className?: string
}
export function AccordionContent({ value, children, className }: AccordionContentProps) {
  const context = useContext(AccordionContext)
  if (!context) throw new Error("AccordionContent must be used within Accordion")
  const itemValue = value || ''
  const isOpen = context.openItems.includes(itemValue)
  if (!isOpen) return null
  return <div className={`px-2 pb-4 ${className || ""}`}>{children}</div>
} 