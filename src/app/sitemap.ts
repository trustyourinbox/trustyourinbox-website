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
    priority: route === "/tools" ? 0.9 : 0.95,
  }));

  // Resource pages
  const resourcePages = ["/docs", "/guides", "/blog"].map((route) => ({
    url: `${baseUrl}${route}`,
    lastModified: new Date(),
    changeFrequency: "weekly" as const,
    priority: 0.7,
  }));

  return [...mainPages, ...solutionPages, ...toolPages, ...resourcePages];
}
