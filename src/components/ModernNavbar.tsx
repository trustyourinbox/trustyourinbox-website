"use client"

import Link from "next/link"
import { useState, useEffect } from "react"
import { Shield, ChevronDown, Menu, X, BarChart3, Globe, Wrench, BookOpen, FileText, Users, Building2, Code, Rocket, Info, Mail, Briefcase, Sparkles, Play, AlertTriangle, Search, CheckCircle, Eye, Settings, FileCode } from "lucide-react"
import { Button } from "@/components/ui/Button"

const productItems = [
  { name: "Features", href: "/features", icon: Sparkles, desc: "Complete DMARC analytics platform" },
  { name: "Live Demo", href: "/demo", icon: Play, desc: "See TrustYourInbox in action" },
]

const toolsDropdownSections = [
  {
    category: "DMARC",
    tools: [
      { name: "DMARC Analyzer", href: "/tools/dmarc-analyzer", icon: Shield, desc: "Analyze DMARC records & policy", popular: true },
      { name: "Policy Generator", href: "/tools/dmarc-policy-generator", icon: FileText, desc: "Create DMARC records", popular: true },
      { name: "Domain Checker", href: "/tools/dmarc-domain-checker", icon: Globe, desc: "Check domain DMARC status", popular: false },
      { name: "Subdomain Checker", href: "/tools/dmarc-subdomain-policy-checker", icon: AlertTriangle, desc: "Verify subdomain policies", popular: false },
      { name: "Policy Impact Simulator", href: "/tools/dmarc-policy-impact-simulator", icon: BarChart3, desc: "Simulate policy changes", popular: false },
    ]
  },
  {
    category: "SPF & DKIM",
    tools: [
      { name: "SPF Surveyor", href: "/tools/spf-surveyor", icon: Search, desc: "Analyze SPF records & lookups", popular: true },
      { name: "DKIM Validator", href: "/tools/dkim-validator", icon: CheckCircle, desc: "Validate DKIM signatures", popular: false },
      { name: "DKIM Inspector", href: "/tools/dkim-inspector", icon: Eye, desc: "Inspect DKIM configuration", popular: false },
    ]
  },
  {
    category: "Security & Reports",
    tools: [
      { name: "Domain Security Checker", href: "/tools/domain-security-checker", icon: Settings, desc: "Comprehensive security audit", popular: true },
      { name: "Forensic Report Viewer", href: "/tools/forensic-report-viewer", icon: FileCode, desc: "Parse RUF reports", popular: false },
      { name: "XML Converter", href: "/tools/xml-converter", icon: Wrench, desc: "Convert aggregate reports", popular: false },
    ]
  }
]

const resourcesItems = [
  { name: "Guides", href: "/guides", icon: BookOpen, desc: "Learn DMARC" },
  { name: "Blog", href: "/blog", icon: FileText, desc: "Latest articles" },
  { name: "Support", href: "/support", icon: Users, desc: "Get help" },
  { name: "API Docs", href: "/docs", icon: Code, desc: "Developer docs" },
]

const companyItems = [
  { name: "About", href: "/about", icon: Info, desc: "Our story and mission" },
  { name: "Company", href: "/company", icon: Building2, desc: "Company overview" },
  { name: "Careers", href: "/careers", icon: Briefcase, desc: "Join our team" },
  { name: "Contact", href: "/contact", icon: Mail, desc: "Get in touch" },
]

export default function ModernNavbar() {
  const [isScrolled, setIsScrolled] = useState(false)
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [openDropdown, setOpenDropdown] = useState<string | null>(null)

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 10)
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/80 backdrop-blur-xl border-b border-border shadow-sm"
          : "bg-transparent"
      }`}
    >
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center group">
            <div className="relative">
              <svg
                width="36"
                height="36"
                viewBox="0 0 100 100"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-all group-hover:scale-110"
              >
                <defs>
                  <linearGradient id="shieldGradient" x1="0%" y1="0%" x2="100%" y2="100%">
                    <stop offset="0%" style={{ stopColor: '#6366f1', stopOpacity: 1 }} />
                    <stop offset="100%" style={{ stopColor: '#8b5cf6', stopOpacity: 1 }} />
                  </linearGradient>
                </defs>
                <title>TrustYourInbox - Email Security</title>
                {/* Shield outline */}
                <path
                  d="M50 5 L85 20 L85 45 Q85 70 50 90 Q15 70 15 45 L15 20 Z"
                  fill="url(#shieldGradient)"
                  className="group-hover:opacity-90 transition-opacity"
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
              <div className="absolute inset-0 bg-primary/20 blur-lg group-hover:bg-primary/30 transition-all"></div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <div className="hidden md:flex items-center gap-8">
            {/* Product Dropdown */}
            <DropdownMenu
              label="Product"
              items={productItems}
              isOpen={openDropdown === "product"}
              onToggle={() => setOpenDropdown(openDropdown === "product" ? null : "product")}
            />

            {/* Tools Dropdown (Categorized) */}
            <CategorizedDropdownMenu
              label="Tools"
              sections={toolsDropdownSections}
              isOpen={openDropdown === "tools"}
              onToggle={() => setOpenDropdown(openDropdown === "tools" ? null : "tools")}
            />

            {/* Pricing */}
            <Link
              href="/pricing"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
            >
              Pricing
            </Link>

            {/* Resources Dropdown */}
            <DropdownMenu
              label="Resources"
              items={resourcesItems}
              isOpen={openDropdown === "resources"}
              onToggle={() => setOpenDropdown(openDropdown === "resources" ? null : "resources")}
            />

            {/* Company Dropdown */}
            <DropdownMenu
              label="Company"
              items={companyItems}
              isOpen={openDropdown === "company"}
              onToggle={() => setOpenDropdown(openDropdown === "company" ? null : "company")}
            />
          </div>

          {/* Right Side CTAs */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/login"
              className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
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
            className="md:hidden p-2 rounded-lg hover:bg-muted transition-colors"
          >
            {mobileMenuOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <div className="container mx-auto px-4 py-6 space-y-4">
            <MobileSection title="Product" items={productItems} />
            <MobileCategorizedSection title="Tools" sections={toolsDropdownSections} />
            <Link href="/pricing" className="block py-2 text-sm font-medium">
              Pricing
            </Link>
            <MobileSection title="Resources" items={resourcesItems} />
            <MobileSection title="Company" items={companyItems} />
            <div className="pt-4 border-t border-border space-y-3">
              <Link href="/login" className="block py-2 text-sm font-medium text-muted-foreground">
                Login
              </Link>
              <Button className="w-full">Start Free Trial</Button>
            </div>
          </div>
        </div>
      )}
    </nav>
  )
}

// Dropdown Menu Component
function DropdownMenu({
  label,
  items,
  isOpen,
  onToggle,
}: {
  label: string
  items: any[]
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        onMouseEnter={onToggle}
        className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-80 bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl p-2"
          onMouseLeave={onToggle}
        >
          {items.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-start gap-3 p-3 rounded-lg hover:bg-muted transition-colors group"
              >
                <div className="mt-0.5 p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <Icon className="h-4 w-4 text-primary" />
                </div>
                <div>
                  <div className="text-sm font-medium text-foreground">{item.name}</div>
                  <div className="text-xs text-muted-foreground">{item.desc}</div>
                </div>
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

// Categorized Dropdown Menu Component for Tools
function CategorizedDropdownMenu({
  label,
  sections,
  isOpen,
  onToggle,
}: {
  label: string
  sections: Array<{ category: string; tools: any[] }>
  isOpen: boolean
  onToggle: () => void
}) {
  return (
    <div className="relative">
      <button
        onClick={onToggle}
        onMouseEnter={onToggle}
        className="flex items-center gap-1 text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
      >
        {label}
        <ChevronDown
          className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`}
        />
      </button>

      {isOpen && (
        <div
          className="absolute top-full left-0 mt-2 w-[750px] bg-background/95 backdrop-blur-xl border border-border rounded-xl shadow-2xl p-6"
          onMouseLeave={onToggle}
        >
          {/* Three-Column Grid */}
          <div className="grid grid-cols-3 gap-6">
            {sections.map((section) => (
              <div key={section.category}>
                {/* Category Header */}
                <div className="px-2 py-2 mb-3 text-xs font-bold text-muted-foreground uppercase tracking-wider border-b border-border">
                  {section.category}
                </div>

                {/* Tools in Category */}
                <div className="space-y-1">
                  {section.tools.map((tool) => {
                    const Icon = tool.icon
                    return (
                      <Link
                        key={tool.name}
                        href={tool.href}
                        className="flex items-start gap-2.5 p-2 rounded-lg hover:bg-muted transition-colors group"
                      >
                        <div className="mt-0.5 p-1.5 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors flex-shrink-0">
                          <Icon className="h-3.5 w-3.5 text-primary" />
                        </div>
                        <div className="flex-1 min-w-0">
                          <div className="flex items-center gap-1.5">
                            <span className="text-sm font-medium text-foreground">{tool.name}</span>
                            {tool.popular && (
                              <span className="text-[10px] font-bold text-primary">⭐</span>
                            )}
                          </div>
                          <div className="text-xs text-muted-foreground leading-snug">{tool.desc}</div>
                        </div>
                      </Link>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>

          {/* View All Tools Link */}
          <div className="pt-4 mt-4 border-t border-border">
            <Link
              href="/tools"
              className="flex items-center justify-between p-2.5 rounded-lg hover:bg-muted transition-colors group"
            >
              <span className="text-sm font-medium text-primary">View All Tools</span>
              <ChevronDown className="h-4 w-4 text-primary rotate-[-90deg] group-hover:translate-x-0.5 transition-transform" />
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}

// Mobile Section Component
function MobileSection({ title, items }: { title: string; items: any[] }) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 text-sm font-medium"
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="pl-4 space-y-2 mt-2">
          {items.map((item) => {
            const Icon = item.icon
            return (
              <Link
                key={item.name}
                href={item.href}
                className="flex items-center gap-2 py-2 text-sm text-muted-foreground"
              >
                <Icon className="h-4 w-4" />
                {item.name}
              </Link>
            )
          })}
        </div>
      )}
    </div>
  )
}

// Mobile Categorized Section Component for Tools
function MobileCategorizedSection({
  title,
  sections
}: {
  title: string
  sections: Array<{ category: string; tools: any[] }>
}) {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div>
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center justify-between w-full py-2 text-sm font-medium"
      >
        {title}
        <ChevronDown className={`h-4 w-4 transition-transform ${isOpen ? "rotate-180" : ""}`} />
      </button>
      {isOpen && (
        <div className="pl-4 space-y-4 mt-2">
          {sections.map((section) => (
            <div key={section.category}>
              <div className="text-xs font-bold text-muted-foreground uppercase tracking-wider mb-2">
                {section.category}
              </div>
              <div className="space-y-1">
                {section.tools.map((tool) => {
                  const Icon = tool.icon
                  return (
                    <Link
                      key={tool.name}
                      href={tool.href}
                      className="flex items-center gap-2 py-1.5 text-sm text-muted-foreground"
                    >
                      <Icon className="h-4 w-4" />
                      <span>{tool.name}</span>
                      {tool.popular && <span className="text-[10px]">⭐</span>}
                    </Link>
                  )
                })}
              </div>
            </div>
          ))}
          <Link href="/tools" className="flex items-center gap-2 py-2 text-sm text-primary font-medium">
            <Wrench className="h-4 w-4" />
            View All Tools
          </Link>
        </div>
      )}
    </div>
  )
}
