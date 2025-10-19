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
  links: FooterLink[];
  showViewAll?: boolean;
  viewAllHref?: string;
}

const FooterSection = ({
  title,
  links,
  showViewAll,
  viewAllHref,
}: FooterSectionProps) => (
  <div>
    {/* Section Header */}
    <h3 className="text-foreground mb-4 text-sm font-semibold">{title}</h3>

    {/* Links */}
    <ul className="space-y-3 text-sm">
      {links.map((link) => (
        <li key={link.name}>
          <Link
            href={link.href}
            className="text-muted-foreground hover:text-foreground transition-colors duration-200"
          >
            {link.name}
          </Link>
        </li>
      ))}
      {showViewAll && viewAllHref && (
        <li className="pt-1">
          <Link
            href={viewAllHref}
            className="text-muted-foreground hover:text-foreground inline-flex items-center gap-1 transition-colors duration-200"
          >
            <span>View All Tools</span>
            <span>→</span>
          </Link>
        </li>
      )}
    </ul>
  </div>
);

export default function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer
      className="border-border/30 border-t"
      aria-labelledby="footer-heading"
    >
      <h2 id="footer-heading" className="sr-only">
        Footer
      </h2>

      <div className="container px-4 py-12 sm:px-6 lg:px-8 lg:py-16">
        {/* Logo & Brand Section */}
        <div className="mb-12 md:mb-14">
          <Link
            href="/"
            className="mb-4 inline-flex items-center gap-2.5 transition-opacity duration-200 hover:opacity-80"
          >
            {/* Shield Logo */}
            <svg
              width="32"
              height="32"
              viewBox="0 0 100 100"
              xmlns="http://www.w3.org/2000/svg"
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

            <span className="text-foreground text-xl font-semibold">
              TrustYourInbox
            </span>
          </Link>

          <p className="text-muted-foreground max-w-md text-sm">
            Simplifying DMARC implementation and email security for
            organizations worldwide.
          </p>
        </div>

        {/* Main 4-Column Footer Grid */}
        <div className="mb-10 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-12">
          {/* Product Column */}
          <FooterSection title="Product" links={productLinks} />

          {/* Tools Column */}
          <FooterSection
            title="Tools"
            links={popularTools}
            showViewAll
            viewAllHref="/tools"
          />

          {/* Resources Column */}
          <FooterSection title="Resources" links={resourceLinks} />

          {/* Company Column */}
          <FooterSection title="Company" links={companyLinks} />

          {/* Legal Column */}
          <div>
            <h3 className="text-foreground mb-4 text-sm font-semibold">
              Legal
            </h3>
            <ul className="space-y-3 text-sm">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar: Copyright, Social Links & Status */}
        <div className="border-border/20 flex flex-col items-center justify-between gap-6 border-t pt-8 sm:flex-row">
          {/* Copyright */}
          <p className="text-muted-foreground text-sm">
            © {currentYear}{" "}
            <span className="text-foreground">TrustYourInbox</span>. All rights
            reserved.
          </p>

          {/* Right Side: Social Links + Status */}
          <div className="flex items-center gap-6">
            {/* Social Links */}
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground hover:text-foreground transition-colors duration-200"
                    aria-label={social.ariaLabel}
                  >
                    <Icon className="h-5 w-5" />
                  </a>
                );
              })}
            </div>

            {/* Divider */}
            <div className="bg-border h-4 w-px" />

            {/* Status Link with indicator */}
            <a
              href="https://status.trustyourinbox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-foreground flex items-center gap-2 text-sm transition-colors duration-200"
            >
              <span className="relative flex h-2 w-2">
                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-green-400 opacity-75" />
                <span className="relative inline-flex h-2 w-2 rounded-full bg-green-500" />
              </span>
              <span>Status</span>
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
