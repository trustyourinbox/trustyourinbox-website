import { ReactNode } from "react";
import { Info, Sparkles } from "lucide-react";

interface ToolLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  sidebarContent?: ReactNode;
}

export function ToolLayout({
  title,
  description,
  children,
  sidebarContent,
}: ToolLayoutProps) {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section - Matching Homepage Style */}
      <section className="border-border/50 bg-background relative overflow-hidden border-b py-12 sm:py-16 md:py-20 lg:py-24">
        {/* Gradient Mesh Background (like homepage) */}
        <div
          className="absolute inset-0 opacity-30"
          style={{
            backgroundImage: `radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
                              radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)`,
          }}
        />

        {/* Animated gradient border at bottom */}
        <div className="via-primary/50 absolute inset-x-0 bottom-0 h-px bg-gradient-to-r from-transparent to-transparent" />

        <div className="relative z-10 container px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-4xl text-center">
            {/* Badge - like homepage */}
            <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center gap-2 rounded-full border px-4 py-1.5 text-sm font-medium backdrop-blur-sm">
              <Sparkles className="text-primary h-4 w-4" />
              <span className="text-primary">Free Tool</span>
            </div>

            {/* Title - matching homepage style with single accent word */}
            <h1 className="text-foreground text-3xl leading-snug font-bold tracking-tight sm:text-4xl md:text-5xl lg:text-6xl">
              {title}
            </h1>

            <p className="text-muted-foreground mt-6 text-lg leading-relaxed sm:text-xl">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12 lg:py-16">
        <div className="container px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-8 lg:grid-cols-3 lg:gap-12">
            {/* Main Content Area */}
            <div className="lg:col-span-2">{children}</div>

            {/* Sidebar - Modern Design */}
            {sidebarContent && (
              <div className="lg:col-span-1">
                <div className="border-border/40 from-background/60 via-background/40 to-background/20 hover:border-primary/20 hover:shadow-primary/5 sticky top-24 overflow-hidden rounded-lg border bg-gradient-to-br p-6 backdrop-blur-xl transition-all duration-300 hover:shadow-2xl">
                  {/* Hover glow effect */}
                  <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 hover:opacity-100">
                    <div className="from-primary/10 to-primary/10 absolute -inset-1 rounded-lg bg-gradient-to-r via-purple-500/10 blur-xl" />
                  </div>

                  <div className="relative z-10">
                    <div className="border-border/30 mb-6 flex items-center gap-2.5 border-b pb-4">
                      <div className="from-primary/15 shadow-primary/5 rounded-md bg-gradient-to-br to-purple-500/15 p-2 shadow-lg">
                        <Info className="text-primary h-5 w-5" />
                      </div>
                      <h2 className="text-foreground text-lg font-semibold tracking-wide">
                        Help & Resources
                      </h2>
                    </div>

                    <div className="prose prose-sm dark:prose-invert max-w-none">
                      {sidebarContent}
                    </div>

                    <div className="border-border/30 mt-6 border-t pt-4">
                      <p className="text-muted-foreground text-sm">
                        Need more help? Check out our{" "}
                        <a
                          href="/docs"
                          className="text-primary hover:text-primary/80 font-medium underline-offset-4 transition-colors hover:underline"
                        >
                          documentation
                        </a>{" "}
                        or{" "}
                        <a
                          href="/contact"
                          className="text-primary hover:text-primary/80 font-medium underline-offset-4 transition-colors hover:underline"
                        >
                          contact support
                        </a>
                        .
                      </p>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </section>
    </div>
  );
}
