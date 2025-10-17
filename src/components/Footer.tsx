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
} from "lucide-react";

// Custom X (Twitter) Icon
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

const productLinks = [
  { name: "Features", href: "/features", icon: Zap },
  { name: "Live Demo", href: "/demo", icon: Play },
  { name: "Pricing", href: "/pricing", icon: DollarSign },
];

const popularTools = [
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

const resourceLinks = [
  { name: "Guides", href: "/guides", icon: GraduationCap },
  { name: "Blog", href: "/blog", icon: Newspaper },
  { name: "Support", href: "/support", icon: HelpCircle },
  { name: "API Docs", href: "/docs", icon: Code },
];

const companyLinks = [
  { name: "About", href: "/about", icon: Info },
  { name: "Contact", href: "/contact", icon: Mail },
  { name: "Careers", href: "/careers", icon: Briefcase },
];

const legalLinks = [
  { name: "Privacy", href: "/privacy", icon: ShieldCheck },
  { name: "Terms", href: "/terms", icon: FileText },
  { name: "Security", href: "/security", icon: Lock },
];

const socialLinks = [
  {
    name: "X",
    href: "https://x.com/trustyourinbox",
    icon: XIcon,
  },
  {
    name: "LinkedIn",
    href: "https://linkedin.com/company/trustyourinbox",
    icon: Linkedin,
  },
  { name: "GitHub", href: "https://github.com/trustyourinbox", icon: Github },
];

export default function Footer() {
  return (
    <footer className="relative overflow-hidden border-t border-border/50 bg-gradient-to-b from-background to-secondary/50">
      {/* Gradient Mesh Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: "var(--gradient-mesh)" }}
      />

      {/* Bottom Accent Border */}
      <div className="via-accent-hover absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-primary to-primary" />

      <div className="container relative z-10 py-12 md:py-16">
        {/* Logo & Brand Statement */}
        <div className="mb-12 md:mb-16">
          <Link href="/" className="group mb-4 inline-flex items-center">
            <div className="relative">
              <svg
                width="36"
                height="36"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all group-hover:scale-110"
              >
                <defs>
                  <linearGradient
                    id="footerShieldGradient"
                    x1="0%"
                    y1="0%"
                    x2="100%"
                    y2="100%"
                  >
                    <stop
                      offset="0%"
                      style={{ stopColor: "#6366f1", stopOpacity: 1 }}
                    />
                    <stop
                      offset="100%"
                      style={{ stopColor: "#8b5cf6", stopOpacity: 1 }}
                    />
                  </linearGradient>
                </defs>
                <path
                  d="M50 5 L85 20 L85 45 Q85 70 50 90 Q15 70 15 45 L15 20 Z"
                  fill="url(#footerShieldGradient)"
                  className="transition-opacity group-hover:opacity-90"
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
              <div className="absolute inset-0 bg-primary/20 blur-lg transition-all group-hover:bg-primary/30"></div>
            </div>
          </Link>
          <p className="max-w-md text-base leading-relaxed text-muted-foreground">
            Simplifying DMARC implementation and email security for
            organizations worldwide.
          </p>
        </div>

        {/* Main 4-Column Grid with Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Product Column */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-background/30 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
            <div className="mb-4 flex items-center gap-2 border-b border-border/30 pb-4">
              <div className="rounded-lg bg-primary/10 p-1.5">
                <Sparkles className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-sm font-semibold">Product</h3>
            </div>
            <ul className="space-y-3 text-sm">
              {productLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group/link flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Icon className="h-4 w-4 transition-transform group-hover/link:scale-110" />
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Tools Column */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-background/30 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
            <div className="mb-4 flex items-center gap-2 border-b border-border/30 pb-4">
              <div className="rounded-lg bg-primary/10 p-1.5">
                <Wrench className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-sm font-semibold">Tools</h3>
            </div>
            <ul className="space-y-3 text-sm">
              {popularTools.map((tool) => {
                const Icon = tool.icon;
                return (
                  <li key={tool.name}>
                    <Link
                      href={tool.href}
                      className="group/link flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Icon className="h-4 w-4 transition-transform group-hover/link:scale-110" />
                      {tool.name}
                    </Link>
                  </li>
                );
              })}
              <li>
                <Link
                  href="/tools"
                  className="font-medium text-primary transition-colors hover:text-primary/80"
                >
                  View All Tools →
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-background/30 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
            <div className="mb-4 flex items-center gap-2 border-b border-border/30 pb-4">
              <div className="rounded-lg bg-primary/10 p-1.5">
                <BookOpen className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-sm font-semibold">Resources</h3>
            </div>
            <ul className="space-y-3 text-sm">
              {resourceLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group/link flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Icon className="h-4 w-4 transition-transform group-hover/link:scale-110" />
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>

          {/* Company & Legal Column */}
          <div className="group relative overflow-hidden rounded-xl border border-border/50 bg-background/30 p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-lg hover:shadow-primary/10">
            <div className="mb-4 flex items-center gap-2 border-b border-border/30 pb-4">
              <div className="rounded-lg bg-primary/10 p-1.5">
                <Building2 className="h-4 w-4 text-primary" />
              </div>
              <h3 className="text-sm font-semibold">Company</h3>
            </div>
            <ul className="mb-6 space-y-3 text-sm">
              {companyLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group/link flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Icon className="h-4 w-4 transition-transform group-hover/link:scale-110" />
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>

            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-3 text-sm">
              {legalLinks.map((link) => {
                const Icon = link.icon;
                return (
                  <li key={link.name}>
                    <Link
                      href={link.href}
                      className="group/link flex items-center gap-2 text-muted-foreground transition-colors hover:text-primary"
                    >
                      <Icon className="h-4 w-4 transition-transform group-hover/link:scale-110" />
                      {link.name}
                    </Link>
                  </li>
                );
              })}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-6 border-t border-border/50 bg-gradient-to-r from-transparent via-primary/5 to-transparent pt-8 sm:flex-row md:mt-16">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TrustYourInbox. All rights reserved.
          </p>

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
                    className="group relative rounded-lg bg-background/50 p-2 text-muted-foreground transition-all hover:scale-110 hover:bg-primary/10 hover:text-primary"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                    <div className="absolute inset-0 rounded-lg bg-primary/20 opacity-0 blur transition-opacity group-hover:opacity-100"></div>
                  </a>
                );
              })}
            </div>

            {/* Divider */}
            <div className="h-6 w-px bg-gradient-to-b from-transparent via-border to-transparent"></div>

            {/* Status Link */}
            <a
              href="https://status.trustyourinbox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-sm text-muted-foreground transition-colors hover:text-primary"
            >
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
