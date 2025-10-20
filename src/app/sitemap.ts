import { MetadataRoute } from "next";

export default function sitemap(): MetadataRoute.Sitemap {
  const baseUrl = "https://trustyourinbox.com";

  // Main pages
  const mainPages = [
    "",
    "/about",
    "/product",
    "/pricing",
    "/features",
    "/contact",
    "/demo",
    "/login",
    "/signup",
    "/privacy",
    "/terms",
    "/security",
    "/support",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "" ? 1 : 0.8,
  }));

  // Solution pages
  const solutionPages = [
    "/solutions/enterprise",
    "/solutions/msp",
    "/solutions/it-teams",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.9,
  }));

  // Tool pages (high priority for SEO)
  const toolPages = [
    "/tools",
    "/tools/overview",
    "/tools/dmarc-analyzer",
    "/tools/dmarc-domain-checker",
    "/tools/dmarc-subdomain-policy-checker",
    "/tools/dmarc-policy-generator",
    "/tools/dmarc-policy-impact-simulator",
    "/tools/spf-surveyor",
    "/tools/dkim-validator",
    "/tools/dkim-inspector",
    "/tools/domain-security-checker",
    "/tools/forensic-report-viewer",
    "/tools/xml-converter",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: route === "/tools" || route === "/tools/overview" ? 0.9 : 0.95,
  }));

  // Resource pages
  const resourcePages = ["/docs", "/guides", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  // Blog posts
  const blogPosts = [
    "/blog/dmarc-compliance-requirements-2025",
    "/blog/pci-dss-dmarc-compliance-2025",
    "/blog/implement-dmarc-large-organizations",
    "/blog/dmarc-policy-comparison",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.8,
  }));

  // Comparison pages
  const comparisonPages = [
    "/vs/powerdmarc",
    "/vs/easydmarc",
    "/vs/dmarcian",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority: 0.85,
  }));

  // Guide pages (all 28 guides)
  const guidePages = [
    // Phase 1: Repurposed blog posts (2)
    "/guides/what-is-dmarc",
    "/guides/why-dmarc-matters",
    // Phase 2: Foundational guides (8)
    "/guides/dmarc-quick-start-guide",
    "/guides/understanding-email-authentication",
    "/guides/dmarc-policy-levels-explained",
    "/guides/spf-record-basics",
    "/guides/what-is-dkim",
    "/guides/subdomain-dmarc-policies",
    "/guides/moving-to-p-reject-safely",
    "/guides/multi-tenant-dmarc",
    // Phase 3: Technical guides (10)
    "/guides/spf-include-chains",
    "/guides/spf-10-dns-lookup-limit",
    "/guides/spf-best-practices",
    "/guides/generating-dkim-keys",
    "/guides/dkim-selector-strategy",
    "/guides/dkim-troubleshooting",
    "/guides/third-party-email-services",
    "/guides/dmarc-for-email-marketing",
    // Phase 4: Advanced guides (6)
    "/guides/understanding-dmarc-reports",
    "/guides/reading-aggregate-reports",
    "/guides/forensic-report-analysis",
    "/guides/identifying-legitimate-senders",
    "/guides/bimi-implementation",
    "/guides/creating-your-first-dmarc-record",
    // Phase 5: Pillar guides (2)
    "/guides/complete-dmarc-implementation-guide",
    "/guides/dmarc-reports-practical-guide",
  ].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "monthly" as const,
    priority:
      route.includes("complete-dmarc") || route.includes("practical-guide")
        ? 0.9
        : 0.85,
  }));

  return [
    ...mainPages,
    ...solutionPages,
    ...toolPages,
    ...resourcePages,
    ...blogPosts,
    ...comparisonPages,
    ...guidePages,
  ];
}
