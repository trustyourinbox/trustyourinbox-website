import { ReactNode } from 'react';
import { FaInfoCircle } from 'react-icons/fa';

interface ToolLayoutProps {
  title: string;
  description: string;
  children: ReactNode;
  sidebarContent?: ReactNode;
}

export function ToolLayout({ title, description, children, sidebarContent }: ToolLayoutProps) {
  return (
    <div className="min-h-screen bg-white">
      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        <div className="absolute inset-0 bg-gradient-to-b from-secondary to-white pointer-events-none -z-10">
          <svg className="absolute bottom-0 left-0 right-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0066FF"
              fillOpacity="0.1"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="max-w-3xl mx-auto text-center">
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
              {title.split(' ').map((word, index) => (
                <span key={index}>
                  {word.toUpperCase() === 'DMARC' || 
                   word.toUpperCase() === 'SPF' || 
                   word.toUpperCase() === 'DKIM' || 
                   word.toUpperCase() === 'XML' ||
                   word.toUpperCase() === 'DOMAIN' ? (
                    <span className="text-primary">{word}</span>
                  ) : (
                    <span className="text-gray-900">{word}</span>
                  )}
                  {index < title.split(' ').length - 1 ? ' ' : ''}
                </span>
              ))}
            </h1>
            <p className="mt-6 text-xl text-gray-500">
              {description}
            </p>
          </div>
        </div>
      </section>

      {/* Main Content */}
      <section className="py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Main Content Area */}
            <div className="lg:col-span-2">
              {children}
            </div>

            {/* Sidebar */}
            {sidebarContent && (
              <div className="lg:col-span-1">
                <div className="sticky top-24 bg-white rounded-lg border border-gray-200 p-6 shadow-sm">
                  <div className="flex items-center gap-2 mb-6 pb-4 border-b border-gray-200">
                    <FaInfoCircle className="w-5 h-5 text-primary" />
                    <h2 className="text-lg font-semibold text-gray-900">Help & Resources</h2>
                  </div>
                  <div className="prose prose-sm max-w-none">
                    {sidebarContent}
                  </div>
                  <div className="mt-6 pt-4 border-t border-gray-200">
                    <p className="text-sm text-gray-500">
                      Need more help? Check out our{' '}
                      <a href="/docs" className="text-primary hover:text-primary font-medium">
                        documentation
                      </a>
                      {' '}or{' '}
                      <a href="/contact" className="text-primary hover:text-primary font-medium">
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