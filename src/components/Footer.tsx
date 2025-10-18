"use client";

import Link from "next/link";
import {
  Linkedin,
  Github,
  Sparkles,
  Wrench,
  BookOpen,
  Building2,
  Info,
  Mail,
  Briefcase,
  ShieldCheck,
  FileText,
  Lock,
  Zap,
  Play,
  DollarSign,
  BarChart3,
  Search,
  FileCode,
  Shield,
  GraduationCap,
  Newspaper,
  HelpCircle,
  Code,
  type LucideIcon,
} from "lucide-react";

// Custom X (Twitter) Icon Component
const XIcon = ({ className }: { className?: string }) => (
  <svg
    viewBox="0 0 24 24"
    className={className}
    fill="currentColor"
    xmlns="http://www.w3.org/2000/svg"
  >
    <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
  </svg>
);

// Type definitions for better type safety
interface FooterLink {
  name: string;
  href: string;
  icon: LucideIcon | typeof XIcon;
}

interface SocialLink {
  name: string;
  href: string;
  icon: LucideIcon | typeof XIcon;
  ariaLabel: string;
}

// Navigation data with proper typing
const productLinks: FooterLink[] = [
  { name: "Features", href: "/features", icon: Zap },
  { name: "Live Demo", href: "/demo", icon: Play },
  { name: "Pricing", href: "/pricing", icon: DollarSign },
];

const popularTools: FooterLink[] = [
  { name: "DMARC Analyzer", href: "/tools/dmarc-analyzer", icon: BarChart3 },
  { name: "SPF Surveyor", href: "/tools/spf-surveyor", icon: Search },
  {
    name: "Policy Generator",
    href: "/tools/dmarc-policy-generator",
    icon: FileCode,
  },
  {
    name: "Domain Security",
    href: "/tools/domain-security-checker",
    icon: Shield,
  },
];

const resourceLinks: FooterLink[] = [
  { name: "Guides", href: "/guides", icon: GraduationCap },
  { name: "Blog", href: "/blog", icon: Newspaper },
  { name: "Support", href: "/support", icon: HelpCircle },
  { name: "API Docs", href: "/docs", icon: Code },
];

const companyLinks: FooterLink[] = [
  { name: "About", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: Mail },
  { name: "Careers", href: "/careers", icon: Briefcase },
];

const legalLinks: FooterLink[] = [
  { name: "Privacy", href: "/privacy", icon: ShieldCheck },
  { name: "Terms", href: "/terms", icon: FileText },
  { name: "Security", href: "/security", icon: Lock },
];

const socialLinks: SocialLink[] = [
  {
    name: "X",
    href: "https://x.com/trustyourinbox",
    icon: XIcon,
    ariaLabel: "Follow us on X (formerly Twitter)",
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/trustyourinbox",
    icon: Linkedin,
    ariaLabel: "Connect with us on LinkedIn",
  },
  {
    name: "GitHub",
    href: "https://github.com/trustyourinbox",
    icon: Github,
    ariaLabel: "View our code on GitHub",
  },
];

// Footer Section Component
interface FooterSectionProps {
  title: string;
  icon: LucideIcon;
  links: FooterLink[];
  showViewAll?: boolean;
  viewAllHref?: string;
}

const FooterSection = ({
  title,
  icon: Icon,
  links,
  showViewAll,
  viewAllHref,
}: FooterSectionProps) => (
  <div className="group border-border/40 from-background/60 via-background/40 to-background/20 hover:border-primary/20 hover:shadow-primary/5 relative overflow-hidden rounded-lg border bg-gradient-to-br p-6 backdrop-blur-xl transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl">
    {/* Hover glow effect */}
    <div className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100">
      <div className="from-primary/10 to-primary/10 absolute -inset-1 rounded-lg bg-gradient-to-r via-purple-500/10 blur-xl" />
    </div>

    <div className="relative z-10">
      {/* Section Header */}
      <div className="border-border/30 mb-5 flex items-center gap-2.5 border-b pb-4">
        <div className="from-primary/15 shadow-primary/5 group-hover:shadow-primary/10 rounded-md bg-gradient-to-br to-purple-500/15 p-2 shadow-lg transition-transform duration-300 group-hover:scale-110">
          <Icon className="text-primary h-4 w-4" />
        </div>
        <h3 className="text-foreground text-sm font-semibold tracking-wide">
          {title}
        </h3>
      </div>

      {/* Links */}
      <ul className="space-y-3.5 text-sm">
        {links.map((link) => {
          const LinkIcon = link.icon;
          return (
            <li key={link.name}>
              <Link
                href={link.href}
                className="group/link text-muted-foreground hover:text-primary flex items-center gap-2.5 transition-all duration-300 hover:translate-x-1"
              >
                <LinkIcon className="group-hover/link:text-primary h-4 w-4 flex-shrink-0 transition-all duration-300 group-hover/link:scale-125" />
                <span className="transition-all duration-300">{link.name}</span>
              </Link>
            </li>
          );
        })}
        {showViewAll && viewAllHref && (
          <li className="pt-2">
            <Link
              href={viewAllHref}
              className="group/all text-primary hover:text-primary/80 inline-flex items-center gap-1.5 font-medium transition-all duration-300 hover:gap-2"
            >
              <span>View All Tools</span>
              <span className="transition-transform duration-300 group-hover/all:translate-x-0.5">
                →
              </span>
            </Link>
          </li>
        )}
      </ul>
    </div>
  </div>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-border/50 from-background via-background to-secondary/30 relative overflow-hidden border-t bg-gradient-to-b"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      {/* Decorative gradient mesh background */}
      <div
        className="absolute inset-0 opacity-20"
        style={{
          backgroundImage: `radial-gradient(circle at 20% 50%, rgba(99, 102, 241, 0.15) 0%, transparent 50%),
                            radial-gradient(circle at 80% 80%, rgba(139, 92, 246, 0.15) 0%, transparent 50%)`,
        }}
      />

      {/* Animated gradient border at top */}
      <div className="via-primary/50 absolute inset-x-0 top-0 h-px bg-gradient-to-r from-transparent to-transparent" />

      {/* Bottom accent gradient */}
      <div className="from-primary/0 via-primary/60 absolute inset-x-0 bottom-0 h-1 bg-gradient-to-r to-purple-500/0" />

      <div className="relative z-10 container px-4 py-10 sm:px-6 md:py-12 lg:px-8 lg:py-14">
        {/* Logo & Brand Section */}
        <div className="mb-10 md:mb-12">
          <Link
            href="/"
            className="group mb-5 inline-flex items-center gap-3 transition-all duration-300 hover:gap-4"
          >
            <div className="relative">
              {/* Shield Logo */}
              <svg
                width="40"
                height="40"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all duration-500 group-hover:scale-110 group-hover:rotate-3"
              >
                <defs>
                  <linearGradient
                    id="footerShieldGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop offset="0%" stopColor="#6366f1" stopOpacity={1} />
                    <stop offset="100%" stopColor="#8b5cf6" stopOpacity={1} />
                  </linearGradient>
                </defs>
                <path
                  d="M50 5 L85 20 L85 45 Q85 70 50 90 Q15 70 15 45 L15 20 Z"
                  fill="url(#footerShieldGradient)"
                  className="transition-opacity duration-300 group-hover:opacity-90"
                />
                <path
                  d="M35 48 L44 57 L65 36"
                  fill="none"
                  stroke="white"
                  strokeWidth="6"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>

              {/* Glow effect behind logo */}
              <div className="bg-primary/20 absolute inset-0 -z-10 rounded-full opacity-0 blur-2xl transition-all duration-500 group-hover:scale-150 group-hover:opacity-100" />
            </div>

            <span className="from-foreground to-foreground/80 group-hover:from-primary bg-gradient-to-r bg-clip-text text-3xl font-bold tracking-tight text-transparent transition-all duration-300 group-hover:to-purple-500">
              TrustYourInbox
            </span>
          </Link>

          <p className="text-muted-foreground max-w-md text-base leading-relaxed md:text-lg">
            Simplifying DMARC implementation and email security for
            organizations worldwide.
          </p>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div className="mb-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Product Column */}
          <FooterSection title="Product" icon={Sparkles} links={productLinks} />

          {/* Tools Column */}
          <FooterSection
            title="Tools"
            icon={Wrench}
            links={popularTools}
            showViewAll
            viewAllHref="/tools"
          />

          {/* Resources Column */}
          <FooterSection
            title="Resources"
            icon={BookOpen}
            links={resourceLinks}
          />

          {/* Company & Legal Column */}
          <div className="space-y-6">
            <FooterSection
              title="Company"
              icon={Building2}
              links={companyLinks}
            />
            <div className="border-border/30 from-background/40 to-background/20 rounded-lg border bg-gradient-to-br p-6 backdrop-blur-xl">
              <h3 className="text-foreground mb-4 text-sm font-semibold tracking-wide">
                Legal
              </h3>
              <ul className="space-y-3 text-sm">
                {legalLinks.map((link) => {
                  const Icon = link.icon;
                  return (
                    <li key={link.name}>
                      <Link
                        href={link.href}
                        className="group/link text-muted-foreground hover:text-primary flex items-center gap-2.5 transition-all duration-300 hover:translate-x-1"
                      >
                        <Icon className="group-hover/link:text-primary h-4 w-4 flex-shrink-0 transition-all duration-300 group-hover/link:scale-125" />
                        <span>{link.name}</span>
                      </Link>
                    </li>
                  );
                })}
              </ul>
            </div>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Social Links & Status */}
        <div className="border-border/40 via-primary/5 flex flex-col items-center justify-between gap-6 border-t bg-gradient-to-r from-transparent to-transparent pt-8 sm:flex-row">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {currentYear}{" "}
            <span className="text-foreground font-semibold">
              TrustYourInbox
            </span>
            . All rights reserved.
          </p>

          {/* Right Side: Social Links + Status */}
          <div className="flex items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group bg-background/60 text-muted-foreground hover:bg-primary/10 hover:text-primary hover:shadow-primary/20 relative rounded-md p-2.5 shadow-sm backdrop-blur-sm transition-all duration-300 hover:scale-110 hover:shadow-lg"
                    aria-label={social.ariaLabel}
                  >
                    <Icon className="h-5 w-5 transition-transform duration-300 group-hover:scale-110" />
                    {/* Glow on hover */}
                    <div className="bg-primary/20 absolute inset-0 -z-10 rounded-md opacity-0 blur-xl transition-opacity duration-300 group-hover:opacity-100" />
                  </a>
                );
              })}
            </div>

            {/* Divider */}
            <div className="via-border h-6 w-px bg-gradient-to-b from-transparent to-transparent" />

            {/* Status Link with indicator */}
            <a
              href="https://status.trustyourinbox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="group text-muted-foreground hover:text-primary flex items-center gap-2 text-sm transition-colors duration-300"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500 shadow-lg shadow-green-500/50" />
              </span>
              <span className="font-medium">Status</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
