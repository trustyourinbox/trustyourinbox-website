import { ReactNode } from "react"

interface ToolLayoutProps {
  title: string
  description: string
  children: ReactNode
}

export function ToolLayout({ title, description, children }: ToolLayoutProps) {
  return (
    <div className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold mb-4">{title}</h1>
          <p className="text-xl text-muted-foreground">{description}</p>
        </div>
        {children}
      </div>
    </div>
  )
} 