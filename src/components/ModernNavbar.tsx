"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import {
  Shield,
  ChevronDown,
  Menu,
  X,
  BarChart3,
  Globe,
  Wrench,
  BookOpen,
  FileText,
  Users,
  Building2,
  Code,
  Rocket,
  Info,
  Mail,
  Briefcase,
  Sparkles,
  Play,
  AlertTriangle,
  Search,
  CheckCircle,
  Eye,
  Settings,
  FileCode,
} from "lucide-react";
import { Button } from "@/components/ui/Button";
import ThemeToggle from "@/components/ThemeToggle";

const productItems = [
  {
    name: "Features",
    href: "/features",
    icon: Sparkles,
    desc: "Complete DMARC analytics platform",
  },
  {
    name: "Live Demo",
    href: "/demo",
    icon: Play,
    desc: "See TrustYourInbox in action",
  },
];

const toolsDropdownSections = [
  {
    category: "DMARC",
    tools: [
      {
        name: "DMARC Analyzer",
        href: "/tools/dmarc-analyzer",
        icon: Shield,
        desc: "Analyze DMARC records & policy",
        popular: true,
      },
      {
        name: "Policy Generator",
        href: "/tools/dmarc-policy-generator",
        icon: FileText,
        desc: "Create DMARC records",
        popular: true,
      },
      {
        name: "Domain Checker",
        href: "/tools/dmarc-domain-checker",
        icon: Globe,
        desc: "Check domain DMARC status",
        popular: false,
      },
      {
        name: "Subdomain Checker",
        href: "/tools/dmarc-subdomain-policy-checker",
        icon: AlertTriangle,
        desc: "Verify subdomain policies",
        popular: false,
      },
      {
        name: "Policy Impact Simulator",
        href: "/tools/dmarc-policy-impact-simulator",
        icon: BarChart3,
        desc: "Simulate policy changes",
        popular: false,
      },
    ],
  },
  {
    category: "SPF & DKIM",
    tools: [
      {
        name: "SPF Surveyor",
        href: "/tools/spf-surveyor",
        icon: Search,
        desc: "Analyze SPF records & lookups",
        popular: true,
      },
      {
        name: "DKIM Validator",
        href: "/tools/dkim-validator",
        icon: CheckCircle,
        desc: "Validate DKIM signatures",
        popular: false,
      },
      {
        name: "DKIM Inspector",
        href: "/tools/dkim-inspector",
        icon: Eye,
        desc: "Inspect DKIM configuration",
        popular: false,
      },
    ],
  },
  {
    category: "Security & Reports",
    tools: [
      {
        name: "Domain Security Checker",
        href: "/tools/domain-security-checker",
        icon: Settings,
        desc: "Comprehensive security audit",
        popular: true,
      },
      {
        name: "Forensic Report Viewer",
        href: "/tools/forensic-report-viewer",
        icon: FileCode,
        desc: "Parse RUF reports",
        popular: false,
      },
      {
        name: "XML Converter",
        href: "/tools/xml-converter",
        icon: Wrench,
        desc: "Convert aggregate reports",
        popular: false,
      },
    ],
  },
];

const resourcesItems = [
  { name: "Guides", href: "/guides", icon: BookOpen, desc: "Learn DMARC" },
  { name: "Blog", href: "/blog", icon: FileText, desc: "Latest articles" },
  { name: "Support", href: "/support", icon: Users, desc: "Get help" },
  { name: "API Docs", href: "/docs", icon: Code, desc: "Developer docs" },
];

const companyItems = [
  { name: "About", href: "/about", icon: Info, desc: "Our story and mission" },
  {
    name: "Company",
    href: "/company",
    icon: Building2,
    desc: "Company overview",
  },
  { name: "Careers", href: "/careers", icon: Briefcase, desc: "Join our team" },
  { name: "Contact", href: "/contact", icon: Mail, desc: "Get in touch" },
];

export default function ModernNavbar() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [openDropdown, setOpenDropdown] = useState<string | null>(null);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "border-border bg-background/80 border-b shadow-sm backdrop-blur-xl"
          : "bg-transparent"
      }`}
    >
      <div className="container">
        <div className="flex h-14 items-center justify-between gap-4 sm:h-16">
          {/* Logo */}
          <Link
            href="/"
            className="group flex flex-shrink-0 items-center gap-2"
          >
            <div className="relative">
              <svg
                width="28"
                height="28"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all group-hover:scale-110 sm:h-9 sm:w-9"
              >
                <defs>
                  <linearGradient
                    id="shieldGradient"
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
                <title>TrustYourInbox - Email Security</title>
                {/* Shield outline */}
                <path
                  d="M50 5 L85 20 L85 45 Q85 70 50 90 Q15 70 15 45 L15 20 Z"
                  fill="url(#shieldGradient)"
                  className="transition-opacity group-hover:opacity-90"
                />
                {/* Checkmark */}
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
            <span className="text-foreground group-hover:text-primary text-lg font-bold transition-colors sm:text-xl">
              TrustYourInbox
            </span>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden items-center gap-8 md:flex">
            {/* Product Dropdown */}
            <DropdownMenu
              label="Product"
              items={productItems}
              isOpen={openDropdown === "product"}
              onToggle={() =>
                setOpenDropdown(openDropdown === "product" ? null : "product")
              }
            />

            {/* Tools Dropdown (Categorized) */}
            <CategorizedDropdownMenu
              label="Tools"
              sections={toolsDropdownSections}
              isOpen={openDropdown === "tools"}
              onToggle={() =>
                setOpenDropdown(openDropdown === "tools" ? null : "tools")
              }
            />

            {/* Pricing */}
            <Link
              href="/pricing"
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              Pricing
            </Link>

            {/* Resources Dropdown */}
            <DropdownMenu
              label="Resources"
              items={resourcesItems}
              isOpen={openDropdown === "resources"}
              onToggle={() =>
                setOpenDropdown(
                  openDropdown === "resources" ? null : "resources"
                )
              }
            />

            {/* Company Dropdown */}
            <DropdownMenu
              label="Company"
              items={companyItems}
              isOpen={openDropdown === "company"}
              onToggle={() =>
                setOpenDropdown(openDropdown === "company" ? null : "company")
              }
            />
          </div>

          {/* Right Side CTAs */}
          <div className="hidden items-center gap-3 md:flex">
            <ThemeToggle />
            <Link
              href="/login"
              className="text-muted-foreground hover:text-foreground text-sm font-medium transition-colors"
            >
              Login
            </Link>
            <Button size="sm" className="gap-2">
              Start Free Trial
              <ChevronDown className="h-3 w-3 rotate-[-90deg]" />
            </Button>
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="touch-target hover:bg-primary/10 flex-shrink-0 rounded-lg p-2 transition-colors md:hidden"
            aria-label={mobileMenuOpen ? "Close menu" : "Open menu"}
          >
            {mobileMenuOpen ? (
              <X className="h-6 w-6" />
            ) : (
              <Menu className="h-6 w-6" />
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="border-border bg-background max-h-[calc(100vh-3.5rem)] overflow-y-auto border-t md:hidden">
          <div className="container space-y-3 py-4">
            <MobileSection title="Product" items={productItems} />
            <MobileCategorizedSection
              title="Tools"
              sections={toolsDropdownSections}
            />
            <Link href="/pricing" className="block py-2 text-sm font-medium">
              Pricing
            </Link>
            <MobileSection title="Resources" items={resourcesItems} />
            <MobileSection title="Company" items={companyItems} />
            <div className="border-border space-y-3 border-t pt-4">
              <div className="flex items-center justify-between py-2">
                <span className="text-sm font-medium">Theme</span>
                <ThemeToggle />
              </div>
              <Link
                href="/login"
                className="text-muted-foreground block py-2 text-sm font-medium"
              >
                Login
              </Link>
              <Button className="w-full">Start Free Trial</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}

// Dropdown Menu Component
function DropdownMenu({
  label,
  items,
  isOpen,
  onToggle,
}: {
  label: string;
  items: any[];
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        onMouseEnter={onToggle}
        className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm font-medium transition-colors"
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          className="border-border bg-background/95 absolute top-full left-0 mt-2 w-80 rounded-xl border p-2 shadow-2xl backdrop-blur-xl"
          onMouseLeave={onToggle}
        >
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="group hover:bg-primary/10 flex items-start gap-3 rounded-lg p-3 transition-colors"
              >
                <div className="bg-primary/10 group-hover:bg-primary/20 mt-0.5 rounded-lg p-2 transition-colors">
                  <Icon className="text-primary h-4 w-4" />
                </div>
                <div>
                  <div className="text-foreground text-sm font-medium">
                    {item.name}
                  </div>
                  <div className="text-muted-foreground text-xs">
                    {item.desc}
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Categorized Dropdown Menu Component for Tools
function CategorizedDropdownMenu({
  label,
  sections,
  isOpen,
  onToggle,
}: {
  label: string;
  sections: Array<{ category: string; tools: any[] }>;
  isOpen: boolean;
  onToggle: () => void;
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        onMouseEnter={onToggle}
        className="text-muted-foreground hover:text-foreground flex items-center gap-1 text-sm font-medium transition-colors"
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          className="border-border bg-background/95 absolute top-full left-1/2 mt-2 w-[750px] -translate-x-1/2 rounded-xl border p-6 shadow-2xl backdrop-blur-xl"
          onMouseLeave={onToggle}
        >
          {/* Three-Column Grid */}
          <div className="grid grid-cols-3 gap-6">
            {sections.map((section) => (
              <div key={section.category}>
                {/* Category Header */}
                <div className="border-border text-muted-foreground mb-3 border-b px-2 py-2 text-xs font-bold tracking-wider uppercase">
                  {section.category}
                </div>

                {/* Tools in Category */}
                <div className="space-y-1">
                  {section.tools.map((tool) => {
                    const Icon = tool.icon;
                    return (
                      <Link
                        key={tool.name}
                        href={tool.href}
                        className="group hover:bg-primary/10 flex items-start gap-2.5 rounded-lg p-2 transition-colors"
                      >
                        <div className="bg-primary/10 group-hover:bg-primary/20 mt-0.5 flex-shrink-0 rounded-lg p-1.5 transition-colors">
                          <Icon className="text-primary h-3.5 w-3.5" />
                        </div>
                        <div className="min-w-0 flex-1">
                          <div className="flex items-center gap-1.5">
                            <span className="text-foreground text-sm font-medium">
                              {tool.name}
                            </span>
                            {tool.popular && (
                              <span className="text-primary text-[10px] font-bold">
                                ⭐
                              </span>
                            )}
                          </div>
                          <div className="text-muted-foreground text-xs leading-snug">
                            {tool.desc}
                          </div>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* View All Tools Link */}
          <div className="border-border mt-4 border-t pt-4">
            <Link
              href="/tools"
              className="group hover:bg-primary/10 flex items-center justify-between rounded-lg p-2.5 transition-colors"
            >
              <span className="text-primary text-sm font-medium">
                View All Tools
              </span>
              <ChevronDown className="text-primary h-4 w-4 rotate-[-90deg] transition-transform group-hover:translate-x-0.5" />
            </Link>
          </div>
        </div>
      )}
    </div>
  );
}

// Mobile Section Component
function MobileSection({ title, items }: { title: string; items: any[] }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-border border-b last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="touch-target flex w-full items-center justify-between py-3 text-sm font-medium"
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="space-y-1 pb-3 pl-2">
          {items.map((item) => {
            const Icon = item.icon;
            return (
              <Link
                key={item.name}
                href={item.href}
                className="touch-target text-muted-foreground hover:bg-primary/5 active:bg-primary/10 flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm transition-colors"
              >
                <Icon className="h-4 w-4 flex-shrink-0" />
                <span>{item.name}</span>
              </Link>
            );
          })}
        </div>
      )}
    </div>
  );
}

// Mobile Categorized Section Component for Tools
function MobileCategorizedSection({
  title,
  sections,
}: {
  title: string;
  sections: Array<{ category: string; tools: any[] }>;
}) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="border-border border-b last:border-0">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="touch-target flex w-full items-center justify-between py-3 text-sm font-medium"
      >
        {title}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>
      {isOpen && (
        <div className="space-y-4 pb-3 pl-2">
          {sections.map((section) => (
            <div key={section.category}>
              <div className="text-muted-foreground mb-2 px-2 text-xs font-bold tracking-wider uppercase">
                {section.category}
              </div>
              <div className="space-y-1">
                {section.tools.map((tool) => {
                  const Icon = tool.icon;
                  return (
                    <Link
                      key={tool.name}
                      href={tool.href}
                      className="touch-target text-muted-foreground hover:bg-primary/5 active:bg-primary/10 flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm transition-colors"
                    >
                      <Icon className="h-4 w-4 flex-shrink-0" />
                      <span className="flex-1">{tool.name}</span>
                      {tool.popular && <span className="text-xs">⭐</span>}
                    </Link>
                  );
                })}
              </div>
            </div>
          ))}
          <Link
            href="/tools"
            className="touch-target text-primary hover:bg-primary/5 active:bg-primary/10 mt-2 flex items-center gap-3 rounded-lg px-2 py-2.5 text-sm font-medium transition-colors"
          >
            <Wrench className="h-4 w-4" />
            View All Tools
          </Link>
        </div>
      )}
    </div>
  );
}
