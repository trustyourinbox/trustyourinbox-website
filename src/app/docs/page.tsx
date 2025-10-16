"use client"

import Link from "next/link"
import { Code, Book, Zap, Shield, Key, Database, ArrowRight, CheckCircle } from "lucide-react"

const apiEndpoints = [
  {
    method: "GET",
    endpoint: "/api/v1/domains",
    description: "List all domains in your account",
    auth: "Required"
  },
  {
    method: "POST",
    endpoint: "/api/v1/domains",
    description: "Register a new domain",
    auth: "Required"
  },
  {
    method: "GET",
    endpoint: "/api/v1/reports",
    description: "Fetch DMARC aggregate reports",
    auth: "Required"
  },
  {
    method: "POST",
    endpoint: "/api/v1/reports/upload",
    description: "Upload DMARC reports programmatically",
    auth: "Required"
  },
  {
    method: "GET",
    endpoint: "/api/v1/analytics/{domain}",
    description: "Get analytics for a specific domain",
    auth: "Required"
  },
  {
    method: "GET",
    endpoint: "/api/v1/quota",
    description: "Check current usage and limits",
    auth: "Required"
  },
]

const features = [
  {
    icon: Zap,
    title: "RESTful API",
    description: "Simple, intuitive REST API with JSON responses"
  },
  {
    icon: Shield,
    title: "Secure Authentication",
    description: "API keys and OAuth 2.0 support"
  },
  {
    icon: Database,
    title: "Rate Limiting",
    description: "Fair usage limits to ensure reliability"
  },
  {
    icon: Code,
    title: "SDKs Available",
    description: "Python, Node.js, and PHP libraries"
  },
]

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
]

export default function DocsPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium mb-6">
              <Code className="h-4 w-4 mr-2 text-primary" />
              <span className="text-primary">API Documentation</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Build with <span className="text-primary">TrustYourInbox</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Integrate DMARC monitoring and email authentication into your applications with our powerful API
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="#quickstart"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get Started
              </Link>
              <Link
                href="#endpoints"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-sm font-semibold hover:bg-muted transition-colors"
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
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {features.map((feature) => {
              const Icon = feature.icon
              return (
                <div
                  key={feature.title}
                  className="p-6 rounded-xl border border-border bg-background"
                >
                  <div className="inline-flex p-3 rounded-lg bg-primary/10 mb-4">
                    <Icon className="h-6 w-6 text-primary" />
                  </div>
                  <h3 className="font-bold mb-2">{feature.title}</h3>
                  <p className="text-sm text-muted-foreground">{feature.description}</p>
                </div>
              )
            })}
          </div>
        </div>
      </section>

      {/* Quick Start */}
      <section id="quickstart" className="py-24 bg-secondary/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">Quick Start</h2>
            <p className="text-lg text-muted-foreground">
              Get up and running in minutes
            </p>
          </div>

          <div className="space-y-8">
            {quickStartSteps.map((step, index) => (
              <div
                key={index}
                className="flex gap-6 p-6 rounded-xl border border-border bg-background"
              >
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center font-bold text-primary">
                  {index + 1}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{step.title}</h3>
                  <p className="text-muted-foreground">{step.description}</p>
                </div>
              </div>
            ))}
          </div>

          {/* Code Example */}
          <div className="mt-12 rounded-xl border border-border bg-muted/30 overflow-hidden">
            <div className="px-6 py-4 bg-muted/50 border-b border-border">
              <div className="flex items-center gap-2">
                <div className="flex gap-1.5">
                  <div className="h-3 w-3 rounded-full bg-red-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-yellow-500/80"></div>
                  <div className="h-3 w-3 rounded-full bg-green-500/80"></div>
                </div>
                <span className="text-sm font-medium text-muted-foreground ml-4">Example Request</span>
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">API Endpoints</h2>
            <p className="text-lg text-muted-foreground">
              Core endpoints for DMARC monitoring and management
            </p>
          </div>

          <div className="space-y-4">
            {apiEndpoints.map((endpoint, index) => (
              <div
                key={index}
                className="group p-6 rounded-xl border border-border bg-background hover:shadow-lg hover:border-primary/30 transition-all"
              >
                <div className="flex items-start gap-4">
                  <div className={`px-3 py-1 rounded-md text-xs font-mono font-bold ${
                    endpoint.method === "GET"
                      ? "bg-blue-500/10 text-blue-600"
                      : "bg-green-500/10 text-green-600"
                  }`}>
                    {endpoint.method}
                  </div>
                  <div className="flex-1">
                    <div className="flex items-center justify-between mb-2">
                      <code className="font-mono text-sm font-semibold">{endpoint.endpoint}</code>
                      <span className="text-xs text-muted-foreground px-2 py-1 rounded border border-border">
                        {endpoint.auth}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground">{endpoint.description}</p>
                  </div>
                  <ArrowRight className="h-5 w-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Authentication */}
      <section className="py-24 bg-secondary/30">
        <div className="container max-w-4xl">
          <div className="text-center mb-12">
            <Key className="h-12 w-12 text-primary mx-auto mb-4" />
            <h2 className="text-4xl font-bold mb-4">Authentication</h2>
            <p className="text-lg text-muted-foreground">
              Secure your API requests with API keys or OAuth 2.0
            </p>
          </div>

          <div className="rounded-xl border border-border bg-background p-8">
            <h3 className="text-xl font-bold mb-4">Using API Keys</h3>
            <p className="text-muted-foreground mb-6">
              Include your API key in the Authorization header of every request:
            </p>
            <div className="rounded-lg bg-muted/50 p-4 font-mono text-sm mb-6">
              <code>Authorization: Bearer YOUR_API_KEY</code>
            </div>
            <div className="space-y-3">
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Generate API keys from your account settings
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
                  Keep your keys secure and never commit them to version control
                </p>
              </div>
              <div className="flex items-start gap-3">
                <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <p className="text-sm text-muted-foreground">
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
          <div className="text-center mb-12">
            <h2 className="text-4xl font-bold mb-4">SDKs & Libraries</h2>
            <p className="text-lg text-muted-foreground">
              Official client libraries for popular languages
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              { name: "Python", icon: "🐍", status: "Available" },
              { name: "Node.js", icon: "📦", status: "Available" },
              { name: "PHP", icon: "🐘", status: "Available" },
            ].map((sdk) => (
              <Link
                key={sdk.name}
                href="#"
                className="group p-6 rounded-xl border border-border bg-background hover:shadow-lg hover:border-primary/30 transition-all text-center"
              >
                <div className="text-4xl mb-4">{sdk.icon}</div>
                <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">{sdk.name}</h3>
                <p className="text-sm text-muted-foreground mb-4">{sdk.status}</p>
                <div className="inline-flex items-center text-sm font-medium text-primary">
                  <span>View Docs</span>
                  <ArrowRight className="h-4 w-4 ml-1 group-hover:translate-x-1 transition-transform" />
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Ready to start building?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Sign up for a free account and get your API key today
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Get Started Free
              </Link>
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-sm font-semibold hover:bg-muted transition-colors"
              >
                Contact Sales
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
