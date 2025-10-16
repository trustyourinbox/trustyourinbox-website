import Image from "next/image";
import React from "react";

interface CTAButton {
  label: string;
  href: string;
  variant?: "primary" | "secondary";
}

interface HeroSectionProps {
  title: React.ReactNode;
  subtitle?: React.ReactNode;
  badge?: React.ReactNode;
  ctaButtons?: CTAButton[];
  illustrationSrc?: string;
}

export default function HeroSection({
  title,
  subtitle,
  badge,
  ctaButtons,
  illustrationSrc,
}: HeroSectionProps) {
  return (
    <section className="relative overflow-hidden py-16 sm:py-24">
      {/* Background with animated wave effect */}
      <div className="absolute inset-0 bg-gradient-to-b from-secondary to-white">
        <svg className="absolute bottom-0 left-0 right-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
          <path
            fill="#0066FF"
            fillOpacity="0.1"
            d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
          <path
            fill="#0066FF"
            fillOpacity="0.05"
            d="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,128C960,107,1056,117,1152,133.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
          ></path>
        </svg>
      </div>
      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <div>
            {badge && <div className="inline-flex items-center px-4 py-2 rounded-full bg-primary/10 text-primary mb-6">{badge}</div>}
            <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">{title}</h1>
            {subtitle && <p className="mt-6 text-xl text-gray-500">{subtitle}</p>}
            {ctaButtons && ctaButtons.length > 0 && (
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                {ctaButtons.map((btn, i) => (
                  <a
                    key={btn.href + i}
                    href={btn.href}
                    className={
                      btn.variant === "secondary"
                        ? "inline-flex items-center justify-center rounded-md border border-input bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-secondary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                        : "inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-primary-foreground shadow-sm hover:bg-primary/90 focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
                    }
                  >
                    {btn.label}
                  </a>
                ))}
              </div>
            )}
          </div>
          {illustrationSrc && (
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-primary/10 rounded-full opacity-30 blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-primary/20 rounded-full opacity-30 blur-3xl"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src={illustrationSrc}
                  alt="Hero Illustration"
                  width={600}
                  height={500}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-primary/10 to-transparent"></div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
} 