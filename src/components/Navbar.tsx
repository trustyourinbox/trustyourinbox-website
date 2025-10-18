"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import {
  FaInfoCircle,
  FaBullhorn,
  FaUserTie,
  FaHandshake,
  FaCalendarAlt,
  FaEnvelope,
  FaSearch,
  FaShieldAlt,
  FaMagic,
  FaSun,
  FaKey,
  FaCheckCircle,
  FaFileCode,
  FaBookOpen,
  FaNewspaper,
  FaBook,
  FaStar,
  FaLifeRing,
  FaVideo,
} from "react-icons/fa";
import { MegaMenu } from "@/components/MegaMenu";

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
];

const dmarcTools = [
  {
    href: "/tools/dmarc-analyzer",
    label: "DMARC Analyzer",
    description: "Analyze and understand your DMARC record",
    icon: <FaSearch className="h-6 w-6" />,
  },
  {
    href: "/tools/dmarc-domain-checker",
    label: "DMARC Domain Checker",
    description: "Check your domain's DMARC status",
    icon: <FaCheckCircle className="h-6 w-6" />,
  },
  {
    href: "/tools/spf-surveyor",
    label: "SPF Surveyor",
    description: "Analyze SPF records for your domain",
    icon: <FaSun className="h-6 w-6" />,
  },
  {
    href: "/tools/dkim-inspector",
    label: "DKIM Inspector",
    description: "Inspect DKIM records and selectors",
    icon: <FaKey className="h-6 w-6" />,
  },
  {
    href: "/tools/dkim-validator",
    label: "DKIM Validator",
    description: "Validate DKIM signatures",
    icon: <FaCheckCircle className="h-6 w-6" />,
  },
  {
    href: "/tools/xml-converter",
    label: "XML to Human Converter",
    description: "Convert DMARC XML to human-readable",
    icon: <FaFileCode className="h-6 w-6" />,
  },
];

const companyMenu = [
  {
    href: "/company",
    icon: <FaInfoCircle className="h-6 w-6" />,
    title: "About Us",
    description: "Who we are and what we stand for",
  },
  {
    href: "/press",
    icon: <FaBullhorn className="h-6 w-6" />,
    title: "Press & Media",
    description: "Hear what the world says about us in the news",
  },
  {
    href: "/careers",
    icon: <FaUserTie className="h-6 w-6" />,
    title: "Careers",
    description: "Learn about career opportunities at TrustYourInbox",
  },
  {
    href: "/partners",
    icon: <FaHandshake className="h-6 w-6" />,
    title: "Partners",
    description: "Our partner program and collaborations",
  },
  {
    href: "/events",
    icon: <FaCalendarAlt className="h-6 w-6" />,
    title: "Events",
    description: "Company events and webinars",
  },
  {
    href: "/contact",
    icon: <FaEnvelope className="h-6 w-6" />,
    title: "Contact Us",
    description: "How to reach us",
  },
];

const resourcesMenu = [
  {
    heading: "LEARN",
    items: [
      {
        label: "Email Security Guide",
        href: "/guides/email-security",
        description:
          "Complete guide to understanding and implementing email security",
        icon: <FaBookOpen className="h-6 w-6" />,
      },
      {
        label: "Support",
        href: "/support",
        description: "Get help with email security implementation",
        icon: <FaLifeRing className="h-6 w-6" />,
      },
    ],
  },
  {
    heading: "RESOURCES",
    items: [
      {
        label: "Blog",
        href: "/blog",
        description: "Latest insights on email security",
        icon: <FaNewspaper className="h-6 w-6" />,
      },
      {
        label: "Webinars",
        href: "/webinars",
        description: "Learn about email security best practices",
        icon: <FaVideo className="h-6 w-6" />,
      },
    ],
  },
];

const toolsCategories = [
  {
    title: "Core Tools",
    icon: <FaShieldAlt className="text-primary h-5 w-5" />,
    items: [
      {
        name: "Domain Checker",
        href: "/tools/dmarc-domain-checker",
        icon: <FaSearch className="h-4 w-4" />,
        description: "Verify domain configuration",
      },
      {
        name: "DMARC Analyzer",
        href: "/tools/dmarc-analyzer",
        icon: <FaSearch className="h-4 w-4" />,
        description: "Analyze DMARC records and policies",
      },
      {
        name: "Policy Generator",
        href: "/tools/dmarc-policy-generator",
        icon: <FaFileCode className="h-4 w-4" />,
        description: "Create custom DMARC policies",
      },
      {
        name: "Policy Impact Simulator",
        href: "/tools/dmarc-policy-impact-simulator",
        icon: <FaMagic className="h-4 w-4" />,
        description: "Simulate policy changes",
      },
      {
        name: "Subdomain Checker",
        href: "/tools/dmarc-subdomain-checker",
        icon: <FaShieldAlt className="h-4 w-4" />,
        description: "Verify subdomain configuration",
      },
      {
        name: "Forensic DMARC Report Viewer",
        href: "/tools/forensic-report-viewer",
        icon: <FaFileCode className="h-4 w-4" />,
        description: "Parse and view forensic DMARC (ruf) reports",
      },
      {
        name: "XML Converter",
        href: "/tools/xml-converter",
        icon: <FaFileCode className="h-4 w-4" />,
        description: "Convert between formats",
      },
    ],
  },
  {
    title: "Authentication",
    icon: <FaKey className="text-primary h-5 w-5" />,
    items: [
      {
        name: "DKIM Validator",
        href: "/tools/dkim-validator",
        icon: <FaCheckCircle className="h-4 w-4" />,
        description: "Validate DKIM signatures",
      },
      {
        name: "DKIM Inspector",
        href: "/tools/dkim-inspector",
        icon: <FaSearch className="h-4 w-4" />,
        description: "Inspect DKIM configuration",
      },
      {
        name: "SPF Surveyor",
        href: "/tools/spf-surveyor",
        icon: <FaSun className="h-4 w-4" />,
        description: "Analyze SPF records",
      },
    ],
  },
  {
    title: "Analysis",
    icon: <FaStar className="text-primary h-5 w-5" />,
    items: [
      {
        name: "Domain Security Checker",
        href: "/tools/domain-security-checker",
        icon: <FaShieldAlt className="h-4 w-4" />,
        description: "Comprehensive security check",
      },
      {
        name: "DNSSEC Checker",
        href: "/tools/dnssec-checker",
        icon: <FaKey className="h-4 w-4" />,
        description: "Verify DNSSEC implementation",
      },
    ],
  },
];

const toolsFeaturedBox = {
  badge: "What&apos;s New",
  title: "Forensic DMARC Report Viewer",
  description:
    "Upload and analyze forensic (ruf) DMARC reports to investigate authentication failures.",
  buttonText: "Try it now",
  buttonHref: "/tools/forensic-report-viewer",
};

const resourcesCategories = [
  {
    title: "Learn",
    icon: <FaBookOpen className="text-primary h-5 w-5" />,
    layout: "grid",
    items: [
      {
        name: "DMARC Guide",
        href: "/guides/dmarc",
        icon: <FaBookOpen className="h-4 w-4" />,
        description: "Complete guide to understanding and implementing DMARC",
      },
      {
        name: "DMARC Analyzer",
        href: "/tools/dmarc-analyzer",
        icon: <FaSearch className="h-4 w-4" />,
        description: "Analyze and understand your DMARC record",
      },
      {
        name: "DMARC Domain Checker",
        href: "/tools/dmarc-domain-checker",
        icon: <FaCheckCircle className="h-4 w-4" />,
        description: "Check your domain's DMARC status",
      },
      {
        name: "Support",
        href: "/support",
        icon: <FaLifeRing className="h-4 w-4" />,
        description: "Get help with DMARC implementation",
      },
    ],
  },
  {
    title: "Watch & Listen",
    icon: <FaVideo className="text-primary h-5 w-5" />,
    layout: "stack",
    items: [
      {
        name: "Blog",
        href: "/blog",
        icon: <FaNewspaper className="h-4 w-4" />,
        description: "Latest insights on email security",
      },
      {
        name: "Webinars",
        href: "/webinars",
        icon: <FaVideo className="h-4 w-4" />,
        description: "Learn about email security best practices",
      },
    ],
  },
];

const resourcesFeaturedBox = {
  badge: "Featured",
  title: "Explore Our Resources",
  description:
    "Discover guides, webinars, and more to help you master email security.",
  buttonText: "Browse Guides",
  buttonHref: "/guides",
  gradient: true,
};

const companyCategories = [
  {
    title: "Company",
    icon: <FaInfoCircle className="text-primary h-5 w-5" />,
    items: [
      {
        name: "About Us",
        href: "/company",
        icon: <FaInfoCircle className="h-4 w-4" />,
        description: "Who we are and what we stand for",
      },
      {
        name: "Press & Media",
        href: "/press",
        icon: <FaBullhorn className="h-4 w-4" />,
        description: "Hear what the world says about us in the news",
      },
      {
        name: "Careers",
        href: "/careers",
        icon: <FaUserTie className="h-4 w-4" />,
        description: "Learn about career opportunities at TrustYourInbox",
      },
      {
        name: "Partners",
        href: "/partners",
        icon: <FaHandshake className="h-4 w-4" />,
        description: "Our partner program and collaborations",
      },
      {
        name: "Events",
        href: "/events",
        icon: <FaCalendarAlt className="h-4 w-4" />,
        description: "Company events and webinars",
      },
      {
        name: "Contact Us",
        href: "/contact",
        icon: <FaEnvelope className="h-4 w-4" />,
        description: "How to reach us",
      },
    ],
  },
];

const companyFeaturedBox = {
  badge: "Announcement",
  title: "Securing Email in the AI Era",
  description:
    "Join our upcoming webinar to learn how AI is changing email security. June 20, 2025",
  buttonText: "Register Now",
  buttonHref: "/events",
  gradient: true,
};

export default function Navbar() {
  const pathname = usePathname();
  const [isToolsOpen, setIsToolsOpen] = useState(false);
  const [isResourcesOpen, setIsResourcesOpen] = useState(false);
  const [isCompanyOpen, setIsCompanyOpen] = useState(false);

  return (
    <nav className="hidden items-center gap-8 rounded-md border border-white/40 bg-white/80 px-4 py-2 shadow-sm backdrop-blur supports-[backdrop-filter]:bg-white/60 md:flex">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative px-2 py-1 text-base font-semibold transition-colors duration-200 ${isActive ? "text-primary" : "hover:text-primary text-gray-700"} `}
          >
            {link.label}
            <span
              className={`bg-primary absolute -bottom-1 left-0 h-0.5 w-full rounded transition-all duration-300 ${isActive ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"} group-hover:scale-x-100 group-hover:opacity-100`}
              aria-hidden="true"
            />
          </Link>
        );
      })}

      {/* DMARC Tools Mega Menu */}
      <div
        className="relative"
        onMouseEnter={() => setIsToolsOpen(true)}
        onMouseLeave={() => setIsToolsOpen(false)}
      >
        <button
          className={`relative px-2 py-1 text-base font-semibold transition-colors duration-200 ${isToolsOpen ? "text-primary" : "hover:text-primary text-gray-700"} `}
        >
          Tools
          <span
            className={`bg-primary absolute -bottom-1 left-0 h-0.5 w-full rounded transition-all duration-300 ${isToolsOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"} `}
            aria-hidden="true"
          />
        </button>
        {/* Hover Bridge */}
        {isToolsOpen && (
          <div className="pointer-events-auto absolute top-full left-1/2 z-40 h-4 w-[1100px] -translate-x-1/2 bg-transparent" />
        )}
        {/* Mega Menu Dropdown */}
        {isToolsOpen && (
          <div className="border-border from-secondary absolute top-full left-1/2 z-50 mt-0 flex w-[900px] -translate-x-1/2 gap-4 rounded-md border bg-gradient-to-br via-white to-white px-4 py-4 shadow-xl">
            <MegaMenu
              isOpen={isToolsOpen}
              onClose={() => setIsToolsOpen(false)}
            />
          </div>
        )}
      </div>

      {/* Resources Mega Menu */}
      <div
        className="relative"
        onMouseEnter={() => setIsResourcesOpen(true)}
        onMouseLeave={() => setIsResourcesOpen(false)}
      >
        <button
          className={`relative px-2 py-1 text-base font-semibold transition-colors duration-200 ${isResourcesOpen ? "text-primary" : "hover:text-primary text-gray-700"} `}
        >
          Resources
          <span
            className={`bg-primary absolute -bottom-1 left-0 h-0.5 w-full rounded transition-all duration-300 ${isResourcesOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"} `}
            aria-hidden="true"
          />
        </button>
        {/* Hover Bridge */}
        {isResourcesOpen && (
          <div className="pointer-events-auto absolute top-full left-1/2 z-40 h-4 w-[1100px] -translate-x-1/2 bg-transparent" />
        )}
        {/* Resources Mega Menu Dropdown */}
        {isResourcesOpen && (
          <div className="border-border from-secondary absolute top-full left-1/2 z-50 mt-0 flex w-[1100px] -translate-x-1/2 gap-8 rounded-lg border bg-gradient-to-br via-white to-white px-10 py-10 pt-2 shadow-2xl">
            {/* Left: Columns */}
            <div className="grid min-w-0 flex-1 grid-cols-3 gap-8">
              {/* LEARN section spanning two columns */}
              <div className="col-span-2">
                <div className="mb-4">
                  <div className="mb-1 text-base font-bold text-gray-900">
                    LEARN
                  </div>
                  <div className="bg-primary mb-2 h-0.5 w-10 rounded" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {resourcesMenu[0].items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group hover:border-primary/20 hover:bg-secondary focus:ring-ring block min-h-[140px] rounded-md border border-gray-100 bg-white p-3 shadow-sm transition-all hover:shadow-lg focus:ring-2 focus:outline-none"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      <div className="bg-primary/10 group-hover:bg-primary mb-2 inline-block rounded-full p-2 transition-colors">
                        <span className="text-primary transition-colors group-hover:text-white">
                          {item.icon}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-base font-semibold text-gray-900">
                        {item.label}
                        <svg
                          className="text-primary/30 group-hover:text-primary h-4 w-4 transition-colors"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      {item.description && (
                        <div className="text-sm leading-snug text-gray-500">
                          {item.description}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
              {/* RESOURCES section */}
              <div>
                <div className="mb-4">
                  <div className="mb-1 text-base font-bold text-gray-900">
                    RESOURCES
                  </div>
                  <div className="bg-primary mb-2 h-0.5 w-10 rounded" />
                </div>
                <div className="flex h-full flex-col gap-2">
                  {resourcesMenu[1].items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group hover:border-primary/20 hover:bg-secondary focus:ring-ring block min-h-[140px] rounded-md border border-gray-100 bg-white p-3 shadow-sm transition-all hover:shadow-lg focus:ring-2 focus:outline-none"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      <div className="bg-primary/10 group-hover:bg-primary mb-2 inline-block rounded-full p-2 transition-colors">
                        <span className="text-primary transition-colors group-hover:text-white">
                          {item.icon}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-base font-semibold text-gray-900">
                        {item.label}
                        <svg
                          className="text-primary/30 group-hover:text-primary h-4 w-4 transition-colors"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      {item.description && (
                        <div className="text-sm leading-snug text-gray-500">
                          {item.description}
                        </div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* Right: Promo card */}
            <div className="to-accent-hover from-primary flex w-72 flex-shrink-0 flex-col justify-between rounded-lg bg-gradient-to-br p-6 text-white shadow-lg">
              <div>
                <div className="text-primary-foreground/80 mb-2 text-xs font-bold tracking-widest uppercase">
                  Featured
                </div>
                <div className="mb-2 text-lg font-semibold">
                  Explore Our Resources
                </div>
                <div className="text-primary-foreground/80 mb-4 text-sm">
                  Discover guides, webinars, and more to help you master email
                  security.
                </div>
                <a
                  href="/guides"
                  className="text-primary hover:bg-secondary mt-2 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold shadow transition-colors"
                >
                  Browse Guides
                </a>
              </div>
              <div className="mt-6 flex justify-end">
                <svg
                  width="80"
                  height="40"
                  viewBox="0 0 80 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="40"
                    cy="20"
                    rx="40"
                    ry="20"
                    fill="currentColor"
                    fillOpacity="0.15"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Company Mega Menu */}
      <div
        className="relative"
        onMouseEnter={() => setIsCompanyOpen(true)}
        onMouseLeave={() => setIsCompanyOpen(false)}
      >
        <button
          className={`relative px-2 py-1 text-base font-semibold transition-colors duration-200 ${isCompanyOpen ? "text-primary" : "hover:text-primary text-gray-700"} `}
        >
          Company
          <span
            className={`bg-primary absolute -bottom-1 left-0 h-0.5 w-full rounded transition-all duration-300 ${isCompanyOpen ? "scale-x-100 opacity-100" : "scale-x-0 opacity-0"} `}
            aria-hidden="true"
          />
        </button>
        {/* Hover Bridge */}
        {isCompanyOpen && (
          <div className="pointer-events-auto absolute top-full left-0 z-40 ml-[-640px] h-4 w-[1100px] bg-transparent" />
        )}
        {/* Company Mega Menu Dropdown */}
        {isCompanyOpen && (
          <div className="border-border from-secondary absolute top-full left-0 z-50 mt-0 ml-[-640px] flex w-[1100px] gap-8 rounded-lg border bg-gradient-to-br via-white to-white px-10 py-10 pt-2 shadow-2xl">
            {/* Left: Menu grid */}
            <div className="min-w-0 flex-1">
              <div className="mb-6 flex items-center gap-2">
                <span className="bg-primary inline-block h-6 w-1.5 rounded-full"></span>
                <span className="text-xl font-bold tracking-tight text-gray-900">
                  Explore TrustYourInbox
                </span>
              </div>
              <div className="grid grid-cols-2 gap-8 md:grid-cols-3 lg:grid-cols-4">
                {companyCategories.map((category) =>
                  category.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group hover:border-primary/20 hover:bg-secondary focus:ring-ring flex transform flex-col items-start gap-2 rounded-md border border-gray-100 bg-white p-3 shadow-sm transition-all hover:scale-[1.04] hover:shadow-lg focus:ring-2 focus:outline-none"
                    >
                      <div className="bg-primary/10 group-hover:bg-primary mb-2 rounded-full p-2 transition-colors">
                        <span className="text-primary transition-colors group-hover:text-white">
                          {item.icon}
                        </span>
                      </div>
                      <div className="flex items-center gap-1 text-base font-semibold text-gray-900">
                        {item.name}
                        <svg
                          className="text-primary/30 group-hover:text-primary h-4 w-4 transition-colors"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          viewBox="0 0 24 24"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M9 5l7 7-7 7"
                          />
                        </svg>
                      </div>
                      {item.description && (
                        <div className="text-sm leading-snug text-gray-500">
                          {item.description}
                        </div>
                      )}
                    </Link>
                  ))
                )}
              </div>
            </div>
            {/* Right: Promo card */}
            <div className="to-accent-hover from-primary flex w-72 flex-shrink-0 flex-col justify-between rounded-lg bg-gradient-to-br p-6 text-white shadow-lg">
              <div>
                <div className="text-primary-foreground/80 mb-2 text-xs font-bold tracking-widest uppercase">
                  Announcement
                </div>
                <div className="mb-2 text-lg font-semibold">
                  Securing Email in the AI Era
                </div>
                <div className="text-primary-foreground/80 mb-4 text-sm">
                  Join our upcoming webinar to learn how AI is changing email
                  security. <br />{" "}
                  <span className="font-semibold">June 20, 2025</span>
                </div>
                <a
                  href="/events"
                  className="text-primary hover:bg-secondary mt-2 inline-block rounded-full bg-white px-4 py-2 text-sm font-semibold shadow transition-colors"
                >
                  Register Now
                </a>
              </div>
              <div className="mt-6 flex justify-end">
                <svg
                  width="80"
                  height="40"
                  viewBox="0 0 80 40"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <ellipse
                    cx="40"
                    cy="20"
                    rx="40"
                    ry="20"
                    fill="currentColor"
                    fillOpacity="0.15"
                  />
                </svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
}
