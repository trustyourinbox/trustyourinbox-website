"use client";

import Link from "next/link";
import {
  Code,
  Book,
  Zap,
  Shield,
  Key,
  Database,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

const apiEndpoints = [
  {
    method: "GET",
    endpoint: "/api/v1/domains",
    description: "List all domains in your account",
    auth: "Required",
  },
  {
    method: "POST",
    endpoint: "/api/v1/domains",
    description: "Register a new domain",
    auth: "Required",
  },
  {
    method: "GET",
    endpoint: "/api/v1/reports",
    description: "Fetch DMARC aggregate reports",
    auth: "Required",
  },
  {
    method: "POST",
    endpoint: "/api/v1/reports/upload",
    description: "Upload DMARC reports programmatically",
    auth: "Required",
  },
  {
    method: "GET",
    endpoint: "/api/v1/analytics/{domain}",
    description: "Get analytics for a specific domain",
    auth: "Required",
  },
  {
    method: "GET",
    endpoint: "/api/v1/quota",
    description: "Check current usage and limits",
    auth: "Required",
  },
];

const features = [
  {
    icon: Zap,
    title: "RESTful API",
    description: "Simple, intuitive REST API with JSON responses",
  },
  {
    icon: Shield,
    title: "Secure Authentication",
    description: "API keys and OAuth 2.0 support",
  },
  {
    icon: Database,
    title: "Rate Limiting",
    description: "Fair usage limits to ensure reliability",
  },
  {
    icon: Code,
    title: "SDKs Available",
    description: "Python, Node.js, and PHP libraries",
  },
];

const quickStartSteps = [
  {
    title: "Get Your API Key",
    description: "Generate an API key from your account settings",
  },
  {
    title: "Make Your First Request",
    description: "Use the API key in the Authorization header",
  },
  {
    title: "Start Building",
    description: "Integrate DMARC data into your workflows",
  },
];

export default function DocsPage() {
  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="from-background to-secondary/30 bg-gradient-to-b py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              <Code className="text-primary mr-2 h-4 w-4" />
              <span className="text-primary">API Documentation</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
              Build with <span className="text-primary">TrustYourInbox</span>
            </h1>
            <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
              Integrate DMARC monitoring and email authentication into your
              applications with our powerful API
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="#quickstart"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-semibold transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="#endpoints"
                className="border-border hover:bg-muted inline-flex items-center justify-center rounded-lg border px-8 py-3 text-sm font-semibold transition-colors"
              >
                View Endpoints
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* API Features */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
            {features.map((feature) => {
              const Icon = feature.icon;
              return (
                <div
                  key={feature.title}
                  className="border-border bg-background rounded-md border p-6"
                >
                  <div className="bg-primary/10 mb-4 inline-flex rounded-lg p-3">
                    <Icon className="text-primary h-6 w-6" />
                  </div>
                  <h3 className="mb-2 font-bold">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">
                    {feature.description}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section id="quickstart" className="bg-secondary/30 py-24">
        <div className="container max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">Quick Start</h2>
            <p className="text-muted-foreground text-lg">
              Get up and running in minutes
            </p>
          </div>

          <div className="space-y-8">
            {quickStartSteps.map((step, index) => (
              <div
                key={index}
                className="border-border bg-background flex gap-6 rounded-md border p-6"
              >
                <div className="bg-primary/10 text-primary flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full font-bold">
                  {index + 1}
                </div>
                <div>
                  <h3 className="mb-2 text-xl font-bold">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Code Example */}
          <div className="border-border bg-muted/30 mt-12 overflow-hidden rounded-md border">
            <div className="border-border bg-muted/50 border-b px-6 py-4">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-muted-foreground ml-4 text-sm font-medium">
                  Example Request
                </span>
              </div>
            </div>
            <div className="p-6 font-mono text-sm">
              <pre className="text-foreground">
                {`curl -X GET "https://api.trustyourinbox.com/v1/domains" \\
  -H "Authorization: Bearer YOUR_API_KEY" \\
  -H "Content-Type: application/json"`}
              </pre>
            </div>
          </div>
        </div>
      </section>

      {/* API Endpoints */}
      <section id="endpoints" className="py-24">
        <div className="container max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">API Endpoints</h2>
            <p className="text-muted-foreground text-lg">
              Core endpoints for DMARC monitoring and management
            </p>
          </div>

          <div className="space-y-4">
            {apiEndpoints.map((endpoint, index) => (
              <div
                key={index}
                className="group border-border bg-background hover:border-primary/30 rounded-md border p-6 transition-all hover:shadow-lg"
              >
                <div className="flex items-start gap-4">
                  <div
                    className={`rounded-md px-3 py-1 font-mono text-xs font-bold ${
                      endpoint.method === "GET"
                        ? "bg-blue-500/10 text-blue-600"
                        : "bg-green-500/10 text-green-600"
                    }`}
                  >
                    {endpoint.method}
                  </div>
                  <div className="flex-1">
                    <div className="mb-2 flex items-center justify-between">
                      <code className="font-mono text-sm font-semibold">
                        {endpoint.endpoint}
                      </code>
                      <span className="border-border text-muted-foreground rounded border px-2 py-1 text-xs">
                        {endpoint.auth}
                      </span>
                    </div>
                    <p className="text-muted-foreground text-sm">
                      {endpoint.description}
                    </p>
                  </div>
                  <ArrowRight className="text-muted-foreground group-hover:text-primary h-5 w-5 flex-shrink-0 transition-all group-hover:translate-x-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="bg-secondary/30 py-24">
        <div className="container max-w-4xl">
          <div className="mb-12 text-center">
            <Key className="text-primary mx-auto mb-4 h-12 w-12" />
            <h2 className="mb-4 text-4xl font-bold">Authentication</h2>
            <p className="text-muted-foreground text-lg">
              Secure your API requests with API keys or OAuth 2.0
            </p>
          </div>

          <div className="border-border bg-background rounded-md border p-8">
            <h3 className="mb-4 text-xl font-bold">Using API Keys</h3>
            <p className="text-muted-foreground mb-6">
              Include your API key in the Authorization header of every request:
            </p>
            <div className="bg-muted/50 mb-6 rounded-lg p-4 font-mono text-sm">
              <code>Authorization: Bearer YOUR_API_KEY</code>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  Generate API keys from your account settings
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  Keep your keys secure and never commit them to version control
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                <p className="text-muted-foreground text-sm">
                  Rotate keys regularly for enhanced security
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SDKs & Libraries */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="mb-12 text-center">
            <h2 className="mb-4 text-4xl font-bold">SDKs & Libraries</h2>
            <p className="text-muted-foreground text-lg">
              Official client libraries for popular languages
            </p>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            {[
              { name: "Python", icon: "🐍", status: "Available" },
              { name: "Node.js", icon: "📦", status: "Available" },
              { name: "PHP", icon: "🐘", status: "Available" },
            ].map((sdk) => (
              <Link
                key={sdk.name}
                href="#"
                className="group border-border bg-background hover:border-primary/30 rounded-md border p-6 text-center transition-all hover:shadow-lg"
              >
                <div className="mb-4 text-4xl">{sdk.icon}</div>
                <h3 className="group-hover:text-primary mb-2 font-bold transition-colors">
                  {sdk.name}
                </h3>
                <p className="text-muted-foreground mb-4 text-sm">
                  {sdk.status}
                </p>
                <div className="text-primary inline-flex items-center text-sm font-medium">
                  <span>View Docs</span>
                  <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="bg-secondary/30 py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Ready to start building?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Sign up for a free account and get your API key today
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/signup"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-semibold transition-colors"
              >
                Get Started Free
              </Link>
              <Link
                href="/contact"
                className="border-border hover:bg-muted inline-flex items-center justify-center rounded-lg border px-8 py-3 text-sm font-semibold transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
