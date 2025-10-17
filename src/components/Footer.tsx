import Link from "next/link";
import {
  Twitter,
  Linkedin,
  Github,
  Shield,
  Search,
  FileText,
  Settings,
} from "lucide-react";

const productLinks = [
  { name: "Features", href: "/features" },
  { name: "Live Demo", href: "/demo" },
  { name: "Pricing", href: "/pricing" },
];

const popularTools = [
  { name: "DMARC Analyzer", href: "/tools/dmarc-analyzer", icon: Shield },
  { name: "SPF Surveyor", href: "/tools/spf-surveyor", icon: Search },
  {
    name: "Policy Generator",
    href: "/tools/dmarc-policy-generator",
    icon: FileText,
  },
  {
    name: "Domain Security",
    href: "/tools/domain-security-checker",
    icon: Settings,
  },
];

const resourceLinks = [
  { name: "Guides", href: "/guides" },
  { name: "Blog", href: "/blog" },
  { name: "Support", href: "/support" },
  { name: "API Docs", href: "/docs" },
];

const companyLinks = [
  { name: "About", href: "/about" },
  { name: "Contact", href: "/contact" },
  { name: "Careers", href: "/careers" },
];

const legalLinks = [
  { name: "Privacy", href: "/privacy" },
  { name: "Terms", href: "/terms" },
  { name: "Security", href: "/security" },
];

const socialLinks = [
  {
    name: "Twitter",
    href: "https://twitter.com/trustyourinbox",
    icon: Twitter,
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
    <footer className="border-t bg-secondary/30">
      <div className="container py-12">
        {/* Main Footer Grid */}
        <div className="grid gap-8 lg:grid-cols-6">
          {/* Logo & Tagline - Takes 2 columns */}
          <div className="lg:col-span-2">
            <Link href="/" className="group mb-4 inline-flex items-center">
              <div className="relative">
                <svg
                  width="32"
                  height="32"
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
              </div>
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-muted-foreground">
              Simplifying DMARC implementation and email security for
              organizations worldwide.
            </p>

            {/* Social Links */}
            <div className="mt-6 flex items-center gap-3">
              {socialLinks.map((social) => {
                const Icon = social.icon;
                return (
                  <a
                    key={social.name}
                    href={social.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="rounded-lg bg-background p-2 transition-colors hover:bg-primary/10"
                    aria-label={social.name}
                  >
                    <Icon className="h-4 w-4 text-muted-foreground transition-colors hover:text-foreground" />
                  </a>
                );
              })}
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Product</h3>
            <ul className="space-y-3 text-sm">
              {productLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Tools */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Tools</h3>
            <ul className="space-y-3 text-sm">
              {popularTools.map((tool) => (
                <li key={tool.name}>
                  <Link
                    href={tool.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {tool.name}
                  </Link>
                </li>
              ))}
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

          {/* Resources */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Resources</h3>
            <ul className="space-y-3 text-sm">
              {resourceLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company & Legal Combined */}
          <div>
            <h3 className="mb-4 text-sm font-semibold">Company</h3>
            <ul className="mb-6 space-y-3 text-sm">
              {companyLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>

            <h3 className="mb-4 text-sm font-semibold">Legal</h3>
            <ul className="space-y-3 text-sm">
              {legalLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground transition-colors hover:text-foreground"
                  >
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="mt-12 flex flex-col items-center justify-between gap-4 border-t border-border pt-6 sm:flex-row">
          <p className="text-sm text-muted-foreground">
            © {new Date().getFullYear()} TrustYourInbox. All rights reserved.
          </p>
          <div className="flex items-center gap-6 text-sm text-muted-foreground">
            <a
              href="https://status.trustyourinbox.com"
              target="_blank"
              rel="noopener noreferrer"
              className="transition-colors hover:text-foreground"
            >
              Status
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
