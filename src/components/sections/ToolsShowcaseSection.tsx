import { Shield, Wrench, FileCode, Search } from "lucide-react"
import Image from "next/image"

export default function ToolsShowcaseSection() {
  return (
    <section className="py-20 bg-gradient-to-b from-white to-secondary">
      <div className="container">
        <div className="mx-auto max-w-[58rem] text-center mb-16">
          <div className="inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium bg-primary/10 text-primary mb-4">
            <Wrench className="h-4 w-4 mr-2" />
            Powerful Built-in Tools
          </div>
          <h2 className="text-3xl font-bold tracking-tight sm:text-4xl md:text-5xl text-foreground">
            Everything You Need to Secure Email
          </h2>
          <p className="mt-4 text-lg text-muted-foreground">
            Professional-grade tools for DMARC analysis, SPF validation, and record generation—all built right into the platform.
          </p>
        </div>

        <div className="space-y-24">
          {/* DMARC Analyzer Tool */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">DMARC Analyzer</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Validate your DMARC configuration instantly. Our analyzer checks your domain&apos;s DMARC and SPF records, shows policy status, coverage percentage, DNS lookup counts, and alignment details.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-foreground">Real-time domain validation with security status (SECURE/WARNING/FAIL)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-foreground">Policy analysis (none/quarantine/reject) with coverage metrics</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-foreground">Actionable recommendations for improving security</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              {/* TODO: Replace with actual dmarc-analyzer-tool.png screenshot */}
              <div className="relative rounded-xl border-2 border-primary/20 bg-background shadow-2xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-muted/30 to-background p-6 flex items-center justify-center">
                  <div className="text-center">
                    <Search className="h-16 w-16 text-primary/30 mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">DMARC Analyzer Tool Screenshot</p>
                    <p className="text-xs text-muted-foreground/60 mt-1">Coming from actual app</p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          {/* SPF Analyzer Tool */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              {/* TODO: Replace with actual spf-analyzer-tool.png screenshot */}
              <div className="relative rounded-xl border-2 border-primary/20 bg-background shadow-2xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-muted/30 to-background p-6 flex items-center justify-center">
                  <div className="text-center">
                    <Search className="h-16 w-16 text-primary/30 mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">SPF Analyzer Tool Screenshot</p>
                    <p className="text-xs text-muted-foreground/60 mt-1">Coming from actual app</p>
                  </div>
                </div>
              </div>
            </div>
            <div>
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <Shield className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">SPF Analyzer</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Deep dive into your SPF configuration. Analyze SPF records, break down mechanisms, count DNS lookups, identify authorized sources, and receive expert recommendations.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-foreground">Comprehensive mechanism breakdown and validation</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-foreground">DNS lookup counting to avoid the 10-lookup limit</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-foreground">Authorized source identification and analysis</span>
                </li>
              </ul>
            </div>
          </div>

          {/* DMARC Generator Tool */}
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div className="order-2 md:order-1">
              <div className="flex items-center gap-3 mb-4">
                <div className="bg-primary/10 p-3 rounded-lg">
                  <FileCode className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">DMARC Record Generator</h3>
              </div>
              <p className="text-lg text-muted-foreground mb-6">
                Generate properly configured DMARC DNS records in seconds. Set policies, configure reporting addresses, and get deployment instructions—all through a guided interface.
              </p>
              <ul className="space-y-3">
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-foreground">Guided policy configuration (monitoring, quarantine, reject)</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-foreground">RUA/RUF reporting address setup</span>
                </li>
                <li className="flex items-start gap-2">
                  <div className="mt-1 h-5 w-5 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <div className="h-2 w-2 rounded-full bg-primary"></div>
                  </div>
                  <span className="text-foreground">One-click DNS record generation</span>
                </li>
              </ul>
            </div>
            <div className="order-1 md:order-2">
              <div className="relative rounded-xl border-2 border-primary/20 bg-background shadow-2xl overflow-hidden">
                <div className="aspect-[4/3] bg-gradient-to-br from-muted/30 to-background p-6 flex items-center justify-center">
                  <div className="text-center">
                    <FileCode className="h-16 w-16 text-primary/30 mx-auto mb-3" />
                    <p className="text-sm text-muted-foreground">DMARC Generator Tool Screenshot</p>
                    <p className="text-xs text-muted-foreground/60 mt-1">Coming from actual app</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
