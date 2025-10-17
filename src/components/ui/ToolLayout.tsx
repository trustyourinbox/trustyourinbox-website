import { ReactNode } from "react";
import { FaInfoCircle } from "react-icons/fa";

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
    <div className="min-h-screen bg-white dark:bg-background">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-8 sm:py-12 md:py-16 lg:py-24">
        <div className="pointer-events-none absolute inset-0 -z-10 bg-gradient-to-b from-secondary to-white dark:from-secondary/20 dark:to-background">
          <svg
            className="absolute bottom-0 left-0 right-0 hidden sm:block"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#0066FF"
              fillOpacity="0.1"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="mx-auto max-w-3xl text-center">
            <h1 className="text-2xl font-bold tracking-tight text-gray-900 dark:text-foreground sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
              {title.split(" ").map((word, index) => (
                <span key={index}>
                  {word.toUpperCase() === "DMARC" ||
                  word.toUpperCase() === "SPF" ||
                  word.toUpperCase() === "DKIM" ||
                  word.toUpperCase() === "XML" ||
                  word.toUpperCase() === "DOMAIN" ? (
                    <span className="text-primary">{word}</span>
                  ) : (
                    <span className="text-gray-900">{word}</span>
                  )}
                  {index < title.split(" ").length - 1 ? " " : ""}
                </span>
              ))}
            </h1>
            <p className="mt-6 text-xl text-gray-500">{description}</p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-8 sm:py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-6 sm:gap-8 lg:grid-cols-3">
            {/* Main Content Area */}
            <div className="lg:col-span-2">{children}</div>

            {/* Sidebar */}
            {sidebarContent && (
              <div className="lg:col-span-1">
                <div className="rounded-lg border border-gray-200 bg-white p-4 shadow-sm dark:border-border dark:bg-card sm:p-6 lg:sticky lg:top-24">
                  <div className="mb-4 flex items-center gap-2 border-b border-gray-200 pb-3 dark:border-border sm:mb-6 sm:pb-4">
                    <FaInfoCircle className="h-4 w-4 flex-shrink-0 text-primary sm:h-5 sm:w-5" />
                    <h2 className="text-base font-semibold text-gray-900 dark:text-foreground sm:text-lg">
                      Help & Resources
                    </h2>
                  </div>
                  <div className="prose prose-sm dark:prose-invert max-w-none text-sm sm:text-base">
                    {sidebarContent}
                  </div>
                  <div className="mt-4 border-t border-gray-200 pt-3 dark:border-border sm:mt-6 sm:pt-4">
                    <p className="text-xs text-gray-500 dark:text-muted-foreground sm:text-sm">
                      Need more help? Check out our{" "}
                      <a
                        href="/docs"
                        className="font-medium text-primary underline-offset-4 hover:text-primary/80 hover:underline"
                      >
                        documentation
                      </a>{" "}
                      or{" "}
                      <a
                        href="/contact"
                        className="font-medium text-primary underline-offset-4 hover:text-primary/80 hover:underline"
                      >
                        contact support
                      </a>
                      .
                    </p>
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
