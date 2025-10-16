"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { FaInfoCircle, FaBullhorn, FaUserTie, FaHandshake, FaCalendarAlt, FaEnvelope, FaSearch, FaShieldAlt, FaMagic, FaSun, FaKey, FaCheckCircle, FaFileCode, FaBookOpen, FaNewspaper, FaBook, FaStar, FaLifeRing, FaVideo } from "react-icons/fa";
import { MegaMenu } from "@/components/MegaMenu"

const navLinks = [
  { href: "/features", label: "Features" },
  { href: "/pricing", label: "Pricing" },
];

const dmarcTools = [
  { href: "/tools/dmarc-analyzer", label: "DMARC Analyzer", description: "Analyze and understand your DMARC record", icon: <FaSearch className="h-6 w-6" /> },
  { href: "/tools/dmarc-domain-checker", label: "DMARC Domain Checker", description: "Check your domain's DMARC status", icon: <FaCheckCircle className="h-6 w-6" /> },
  { href: "/tools/spf-surveyor", label: "SPF Surveyor", description: "Analyze SPF records for your domain", icon: <FaSun className="h-6 w-6" /> },
  { href: "/tools/dkim-inspector", label: "DKIM Inspector", description: "Inspect DKIM records and selectors", icon: <FaKey className="h-6 w-6" /> },
  { href: "/tools/dkim-validator", label: "DKIM Validator", description: "Validate DKIM signatures", icon: <FaCheckCircle className="h-6 w-6" /> },
  { href: "/tools/xml-converter", label: "XML to Human Converter", description: "Convert DMARC XML to human-readable", icon: <FaFileCode className="h-6 w-6" /> },
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
      { label: "Email Security Guide", href: "/guides/email-security", description: "Complete guide to understanding and implementing email security", icon: <FaBookOpen className="h-6 w-6" /> },
      { label: "Support", href: "/support", description: "Get help with email security implementation", icon: <FaLifeRing className="h-6 w-6" /> },
    ],
  },
  {
    heading: "RESOURCES",
    items: [
      { label: "Blog", href: "/blog", description: "Latest insights on email security", icon: <FaNewspaper className="h-6 w-6" /> },
      { label: "Webinars", href: "/webinars", description: "Learn about email security best practices", icon: <FaVideo className="h-6 w-6" /> },
    ],
  },
];

const toolsCategories = [
  {
    title: "Core Tools",
    icon: <FaShieldAlt className="h-5 w-5 text-primary" />,
    items: [
      { name: "Domain Checker", href: "/tools/dmarc-domain-checker", icon: <FaSearch className="h-4 w-4" />, description: "Verify domain configuration" },
      { name: "DMARC Analyzer", href: "/tools/dmarc-analyzer", icon: <FaSearch className="h-4 w-4" />, description: "Analyze DMARC records and policies" },
      { name: "Policy Generator", href: "/tools/dmarc-policy-generator", icon: <FaFileCode className="h-4 w-4" />, description: "Create custom DMARC policies" },
      { name: "Policy Impact Simulator", href: "/tools/dmarc-policy-impact-simulator", icon: <FaMagic className="h-4 w-4" />, description: "Simulate policy changes" },
      { name: "Subdomain Checker", href: "/tools/dmarc-subdomain-checker", icon: <FaShieldAlt className="h-4 w-4" />, description: "Verify subdomain configuration" },
      { name: "Forensic DMARC Report Viewer", href: "/tools/forensic-report-viewer", icon: <FaFileCode className="h-4 w-4" />, description: "Parse and view forensic DMARC (ruf) reports" },
      { name: "XML Converter", href: "/tools/xml-converter", icon: <FaFileCode className="h-4 w-4" />, description: "Convert between formats" },
    ],
  },
  {
    title: "Authentication",
    icon: <FaKey className="h-5 w-5 text-primary" />,
    items: [
      { name: "DKIM Validator", href: "/tools/dkim-validator", icon: <FaCheckCircle className="h-4 w-4" />, description: "Validate DKIM signatures" },
      { name: "DKIM Inspector", href: "/tools/dkim-inspector", icon: <FaSearch className="h-4 w-4" />, description: "Inspect DKIM configuration" },
      { name: "SPF Surveyor", href: "/tools/spf-surveyor", icon: <FaSun className="h-4 w-4" />, description: "Analyze SPF records" },
    ],
  },
  {
    title: "Analysis",
    icon: <FaStar className="h-5 w-5 text-primary" />,
    items: [
      { name: "Domain Security Checker", href: "/tools/domain-security-checker", icon: <FaShieldAlt className="h-4 w-4" />, description: "Comprehensive security check" },
      { name: "DNSSEC Checker", href: "/tools/dnssec-checker", icon: <FaKey className="h-4 w-4" />, description: "Verify DNSSEC implementation" },
    ],
  },
];

const toolsFeaturedBox = {
  badge: "What&apos;s New",
  title: "Forensic DMARC Report Viewer",
  description: "Upload and analyze forensic (ruf) DMARC reports to investigate authentication failures.",
  buttonText: "Try it now",
  buttonHref: "/tools/forensic-report-viewer",
};

const resourcesCategories = [
  {
    title: "Learn",
    icon: <FaBookOpen className="h-5 w-5 text-primary" />,
    layout: "grid",
    items: [
      { name: "DMARC Guide", href: "/guides/dmarc", icon: <FaBookOpen className="h-4 w-4" />, description: "Complete guide to understanding and implementing DMARC" },
      { name: "DMARC Analyzer", href: "/tools/dmarc-analyzer", icon: <FaSearch className="h-4 w-4" />, description: "Analyze and understand your DMARC record" },
      { name: "DMARC Domain Checker", href: "/tools/dmarc-domain-checker", icon: <FaCheckCircle className="h-4 w-4" />, description: "Check your domain's DMARC status" },
      { name: "Support", href: "/support", icon: <FaLifeRing className="h-4 w-4" />, description: "Get help with DMARC implementation" },
    ],
  },
  {
    title: "Watch & Listen",
    icon: <FaVideo className="h-5 w-5 text-primary" />,
    layout: "stack",
    items: [
      { name: "Blog", href: "/blog", icon: <FaNewspaper className="h-4 w-4" />, description: "Latest insights on email security" },
      { name: "Webinars", href: "/webinars", icon: <FaVideo className="h-4 w-4" />, description: "Learn about email security best practices" },
    ],
  },
];

const resourcesFeaturedBox = {
  badge: "Featured",
  title: "Explore Our Resources",
  description: "Discover guides, webinars, and more to help you master email security.",
  buttonText: "Browse Guides",
  buttonHref: "/guides",
  gradient: true,
};

const companyCategories = [
  {
    title: "Company",
    icon: <FaInfoCircle className="h-5 w-5 text-primary" />,
    items: [
      { name: "About Us", href: "/company", icon: <FaInfoCircle className="h-4 w-4" />, description: "Who we are and what we stand for" },
      { name: "Press & Media", href: "/press", icon: <FaBullhorn className="h-4 w-4" />, description: "Hear what the world says about us in the news" },
      { name: "Careers", href: "/careers", icon: <FaUserTie className="h-4 w-4" />, description: "Learn about career opportunities at TrustYourInbox" },
      { name: "Partners", href: "/partners", icon: <FaHandshake className="h-4 w-4" />, description: "Our partner program and collaborations" },
      { name: "Events", href: "/events", icon: <FaCalendarAlt className="h-4 w-4" />, description: "Company events and webinars" },
      { name: "Contact Us", href: "/contact", icon: <FaEnvelope className="h-4 w-4" />, description: "How to reach us" },
    ],
  },
];

const companyFeaturedBox = {
  badge: "Announcement",
  title: "Securing Email in the AI Era",
  description: "Join our upcoming webinar to learn how AI is changing email security. June 20, 2025",
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
    <nav className="hidden md:flex items-center gap-8 px-4 py-2 rounded-xl bg-white/80 backdrop-blur supports-[backdrop-filter]:bg-white/60 shadow-sm border border-white/40">
      {navLinks.map((link) => {
        const isActive = pathname === link.href;
        return (
          <Link
            key={link.href}
            href={link.href}
            className={`relative text-base font-semibold transition-colors duration-200 px-2 py-1
              ${isActive ? "text-primary" : "text-gray-700 hover:text-primary"}
            `}
          >
            {link.label}
            <span
              className={`absolute left-0 -bottom-1 h-0.5 w-full rounded bg-primary transition-all duration-300
                ${isActive ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
                group-hover:opacity-100 group-hover:scale-x-100
              `}
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
          className={`relative text-base font-semibold transition-colors duration-200 px-2 py-1
            ${isToolsOpen ? "text-primary" : "text-gray-700 hover:text-primary"}
          `}
        >
          Tools
          <span
            className={`absolute left-0 -bottom-1 h-0.5 w-full rounded bg-primary transition-all duration-300
              ${isToolsOpen ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
            `}
            aria-hidden="true"
          />
        </button>
        {/* Hover Bridge */}
        {isToolsOpen && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-[1100px] h-4 bg-transparent z-40 pointer-events-auto" />
        )}
        {/* Mega Menu Dropdown */}
        {isToolsOpen && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[900px] rounded-xl bg-gradient-to-br from-secondary via-white to-white shadow-xl border border-border py-4 px-4 z-50 flex gap-4">
            <MegaMenu isOpen={isToolsOpen} onClose={() => setIsToolsOpen(false)} />
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
          className={`relative text-base font-semibold transition-colors duration-200 px-2 py-1
            ${isResourcesOpen ? "text-primary" : "text-gray-700 hover:text-primary"}
          `}
        >
          Resources
          <span
            className={`absolute left-0 -bottom-1 h-0.5 w-full rounded bg-primary transition-all duration-300
              ${isResourcesOpen ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
            `}
            aria-hidden="true"
          />
        </button>
        {/* Hover Bridge */}
        {isResourcesOpen && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full w-[1100px] h-4 bg-transparent z-40 pointer-events-auto" />
        )}
        {/* Resources Mega Menu Dropdown */}
        {isResourcesOpen && (
          <div className="absolute left-1/2 -translate-x-1/2 top-full mt-0 w-[1100px] rounded-2xl bg-gradient-to-br from-secondary via-white to-white shadow-2xl border border-border py-10 px-10 z-50 flex gap-8 pt-2">
            {/* Left: Columns */}
            <div className="flex-1 min-w-0 grid grid-cols-3 gap-8">
              {/* LEARN section spanning two columns */}
              <div className="col-span-2">
                <div className="mb-4">
                  <div className="text-base font-bold text-gray-900 mb-1">LEARN</div>
                  <div className="h-0.5 w-10 bg-primary rounded mb-2" />
                </div>
                <div className="grid grid-cols-2 gap-4">
                  {resourcesMenu[0].items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group block p-3 rounded-xl bg-white hover:bg-secondary shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-primary/20 focus:outline-none focus:ring-2 focus:ring-ring min-h-[140px]"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      <div className="bg-primary/10 group-hover:bg-primary p-2 rounded-full mb-2 transition-colors inline-block">
                        <span className="text-primary group-hover:text-white transition-colors">{item.icon}</span>
                      </div>
                      <div className="font-semibold text-gray-900 text-base flex items-center gap-1">
                        {item.label}
                        <svg className="w-4 h-4 text-primary/30 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                      </div>
                      {item.description && (
                        <div className="text-sm text-gray-500 leading-snug">{item.description}</div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
              {/* RESOURCES section */}
              <div>
                <div className="mb-4">
                  <div className="text-base font-bold text-gray-900 mb-1">RESOURCES</div>
                  <div className="h-0.5 w-10 bg-primary rounded mb-2" />
                </div>
                <div className="flex flex-col gap-2 h-full">
                  {resourcesMenu[1].items.map((item) => (
                    <Link
                      key={item.label}
                      href={item.href}
                      className="group block p-3 rounded-xl bg-white hover:bg-secondary shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-primary/20 focus:outline-none focus:ring-2 focus:ring-ring min-h-[140px]"
                      onClick={() => setIsResourcesOpen(false)}
                    >
                      <div className="bg-primary/10 group-hover:bg-primary p-2 rounded-full mb-2 transition-colors inline-block">
                        <span className="text-primary group-hover:text-white transition-colors">{item.icon}</span>
                      </div>
                      <div className="font-semibold text-gray-900 text-base flex items-center gap-1">
                        {item.label}
                        <svg className="w-4 h-4 text-primary/30 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                      </div>
                      {item.description && (
                        <div className="text-sm text-gray-500 leading-snug">{item.description}</div>
                      )}
                    </Link>
                  ))}
                </div>
              </div>
            </div>
            {/* Right: Promo card */}
            <div className="w-72 flex-shrink-0 flex flex-col justify-between bg-gradient-to-br from-primary to-accent-hover rounded-2xl shadow-lg p-6 text-white">
              <div>
                <div className="uppercase text-xs font-bold tracking-widest text-primary-foreground/80 mb-2">Featured</div>
                <div className="text-lg font-semibold mb-2">Explore Our Resources</div>
                <div className="text-sm text-primary-foreground/80 mb-4">Discover guides, webinars, and more to help you master email security.</div>
                <a href="/guides" className="inline-block mt-2 px-4 py-2 rounded-full bg-white text-primary font-semibold text-sm shadow hover:bg-secondary transition-colors">Browse Guides</a>
              </div>
              <div className="mt-6 flex justify-end">
                <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="40" cy="20" rx="40" ry="20" fill="currentColor" fillOpacity="0.15"/></svg>
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
          className={`relative text-base font-semibold transition-colors duration-200 px-2 py-1
            ${isCompanyOpen ? "text-primary" : "text-gray-700 hover:text-primary"}
          `}
        >
          Company
          <span
            className={`absolute left-0 -bottom-1 h-0.5 w-full rounded bg-primary transition-all duration-300
              ${isCompanyOpen ? "opacity-100 scale-x-100" : "opacity-0 scale-x-0"}
            `}
            aria-hidden="true"
          />
        </button>
        {/* Hover Bridge */}
        {isCompanyOpen && (
          <div className="absolute left-0 top-full w-[1100px] h-4 bg-transparent z-40 pointer-events-auto ml-[-640px]" />
        )}
        {/* Company Mega Menu Dropdown */}
        {isCompanyOpen && (
          <div className="absolute left-0 top-full mt-0 w-[1100px] rounded-2xl bg-gradient-to-br from-secondary via-white to-white shadow-2xl border border-border py-10 px-10 z-50 flex gap-8 ml-[-640px] pt-2">
            {/* Left: Menu grid */}
            <div className="flex-1 min-w-0">
              <div className="mb-6 flex items-center gap-2">
                <span className="inline-block w-1.5 h-6 bg-primary rounded-full"></span>
                <span className="text-xl font-bold text-gray-900 tracking-tight">Explore TrustYourInbox</span>
              </div>
              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
                {companyCategories.map((category) => (
                  category.items.map((item) => (
                    <Link
                      key={item.name}
                      href={item.href}
                      className="group flex flex-col items-start gap-2 p-3 rounded-xl bg-white hover:bg-secondary shadow-sm hover:shadow-lg transition-all border border-gray-100 hover:border-primary/20 transform hover:scale-[1.04] focus:outline-none focus:ring-2 focus:ring-ring"
                    >
                      <div className="bg-primary/10 group-hover:bg-primary p-2 rounded-full mb-2 transition-colors">
                        <span className="text-primary group-hover:text-white transition-colors">{item.icon}</span>
                      </div>
                      <div className="font-semibold text-gray-900 text-base flex items-center gap-1">
                        {item.name}
                        <svg className="w-4 h-4 text-primary/30 group-hover:text-primary transition-colors" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" /></svg>
                      </div>
                      {item.description && (
                        <div className="text-sm text-gray-500 leading-snug">{item.description}</div>
                      )}
                    </Link>
                  ))
                ))}
              </div>
            </div>
            {/* Right: Promo card */}
            <div className="w-72 flex-shrink-0 flex flex-col justify-between bg-gradient-to-br from-primary to-accent-hover rounded-2xl shadow-lg p-6 text-white">
              <div>
                <div className="uppercase text-xs font-bold tracking-widest text-primary-foreground/80 mb-2">Announcement</div>
                <div className="text-lg font-semibold mb-2">Securing Email in the AI Era</div>
                <div className="text-sm text-primary-foreground/80 mb-4">Join our upcoming webinar to learn how AI is changing email security. <br/> <span className="font-semibold">June 20, 2025</span></div>
                <a href="/events" className="inline-block mt-2 px-4 py-2 rounded-full bg-white text-primary font-semibold text-sm shadow hover:bg-secondary transition-colors">Register Now</a>
              </div>
              <div className="mt-6 flex justify-end">
                <svg width="80" height="40" viewBox="0 0 80 40" fill="none" xmlns="http://www.w3.org/2000/svg"><ellipse cx="40" cy="20" rx="40" ry="20" fill="currentColor" fillOpacity="0.15"/></svg>
              </div>
            </div>
          </div>
        )}
      </div>
    </nav>
  );
} 