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
    <footer className="border-border/50 from-background to-secondary/50 relative overflow-hidden border-t bg-gradient-to-b">
      {/* Gradient Mesh Background */}
      <div
        className="absolute inset-0 opacity-30"
        style={{ background: "var(--gradient-mesh)" }}
      />

      {/* Bottom Accent Border */}
      <div className="via-accent-hover from-primary to-primary absolute right-0 bottom-0 left-0 h-1 bg-gradient-to-r" />

      <div className="relative z-10 container py-12 md:py-16">
        {/* Logo & Brand Statement */}
        <div className="mb-12 md:mb-16">
          <Link href="/" className="group mb-4 inline-flex items-center gap-3">
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
              <div className="bg-primary/20 group-hover:bg-primary/30 absolute inset-0 blur-lg transition-all"></div>
            </div>
            <span className="text-foreground group-hover:text-primary text-2xl font-bold transition-colors">
              TrustYourInbox
            </span>
          </Link>
          <p className="text-muted-foreground max-w-md text-base leading-relaxed">
            Simplifying DMARC implementation and email security for
            organizations worldwide.
          </p>
        </div>

        {/* Main 4-Column Grid with Cards */}
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4 lg:gap-8">
          {/* Product Column */}
          <div className="group border-border/50 bg-background/30 hover:border-primary/30 hover:shadow-primary/10 relative overflow-hidden rounded-xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="border-border/30 mb-4 flex items-center gap-2 border-b pb-4">
              <div className="bg-primary/10 rounded-lg p-1.5">
                <Sparkles className="text-primary h-4 w-4" />
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
                      className="group/link text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
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
          <div className="group border-border/50 bg-background/30 hover:border-primary/30 hover:shadow-primary/10 relative overflow-hidden rounded-xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="border-border/30 mb-4 flex items-center gap-2 border-b pb-4">
              <div className="bg-primary/10 rounded-lg p-1.5">
                <Wrench className="text-primary h-4 w-4" />
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
                      className="group/link text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
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
                  className="text-primary hover:text-primary/80 font-medium transition-colors"
                >
                  View All Tools →
                </Link>
              </li>
            </ul>
          </div>

          {/* Resources Column */}
          <div className="group border-border/50 bg-background/30 hover:border-primary/30 hover:shadow-primary/10 relative overflow-hidden rounded-xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="border-border/30 mb-4 flex items-center gap-2 border-b pb-4">
              <div className="bg-primary/10 rounded-lg p-1.5">
                <BookOpen className="text-primary h-4 w-4" />
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
                      className="group/link text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
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
          <div className="group border-border/50 bg-background/30 hover:border-primary/30 hover:shadow-primary/10 relative overflow-hidden rounded-xl border p-6 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:shadow-lg">
            <div className="border-border/30 mb-4 flex items-center gap-2 border-b pb-4">
              <div className="bg-primary/10 rounded-lg p-1.5">
                <Building2 className="text-primary h-4 w-4" />
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
                      className="group/link text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
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
                      className="group/link text-muted-foreground hover:text-primary flex items-center gap-2 transition-colors"
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
        <div className="border-border/50 via-primary/5 mt-12 flex flex-col items-center justify-between gap-6 border-t bg-gradient-to-r from-transparent to-transparent pt-8 sm:flex-row md:mt-16">
          <p className="text-muted-foreground text-sm">
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
                    className="group bg-background/50 text-muted-foreground hover:bg-primary/10 hover:text-primary relative rounded-lg p-2 transition-all hover:scale-110"
                    aria-label={social.name}
                  >
                    <Icon className="h-5 w-5" />
                    <div className="bg-primary/20 absolute inset-0 rounded-lg opacity-0 blur transition-opacity group-hover:opacity-100"></div>
                  </a>
                );
              })}
            </div>

            {/* Divider */}
            <div className="via-border h-6 w-px bg-gradient-to-b from-transparent to-transparent"></div>

            {/* Status Link */}
            <a
              href="https://status.trustyourinbox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="text-muted-foreground hover:text-primary text-sm transition-colors"
            >
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
