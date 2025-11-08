import {
  Server,
  Building2,
  Settings,
  BarChart2,
  ShieldCheck,
  Globe,
  Tag,
  Database,
} from "lucide-react";

export default function DmarcSolutionSection() {
  return (
    <section className="bg-background px-4 py-16 md:py-24">
      <div className="mx-auto max-w-6xl">
        <div className="mb-12 text-center">
          <h1 className="text-foreground mb-4 text-4xl font-bold md:text-5xl">
            The Best DMARC Solution for MSPs and Small Businesses
          </h1>
          <p className="text-muted-foreground mx-auto max-w-3xl text-xl">
            Whether you&apos;re managing one domain or fifty, we&apos;ve got you
            covered.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* For IT Teams */}
          <div className="border-border bg-card rounded-lg border p-8 shadow-sm">
            <div className="mb-6 flex items-center">
              <div className="bg-primary/10 mr-4 rounded-lg p-3">
                <Server className="text-primary h-6 w-6" />
              </div>
              <h2 className="text-card-foreground text-2xl font-bold">
                For IT Teams
              </h2>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="bg-secondary mr-4 rounded-md p-2">
                  <Settings className="text-primary h-5 w-5" />
                </div>
                <div>
                  <span className="text-foreground font-medium">
                    Built-in Analysis Tools
                  </span>
                  <p className="text-muted-foreground mt-1 text-sm">
                    DMARC Analyzer, SPF Analyzer, and record generator all in
                    one platform
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-secondary mr-4 rounded-md p-2">
                  <BarChart2 className="text-primary h-5 w-5" />
                </div>
                <div>
                  <span className="text-foreground font-medium">
                    Interactive Analytics Dashboards
                  </span>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Pie charts, area charts, and bar charts showing compliance,
                    trends, and performance
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-secondary mr-4 rounded-md p-2">
                  <ShieldCheck className="text-primary h-5 w-5" />
                </div>
                <div>
                  <span className="text-foreground font-medium">
                    Bulk Report Processing
                  </span>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Upload multiple DMARC reports (XML, GZIP, ZIP) with progress
                    tracking
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* For MSPs */}
          <div className="border-border bg-card rounded-lg border p-8 shadow-sm">
            <div className="mb-6 flex items-center">
              <div className="bg-primary/10 mr-4 rounded-lg p-3">
                <Building2 className="text-primary h-6 w-6" />
              </div>
              <h2 className="text-card-foreground text-2xl font-bold">
                For MSPs
              </h2>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="bg-secondary mr-4 rounded-md p-2">
                  <Globe className="text-primary h-5 w-5" />
                </div>
                <div>
                  <span className="text-foreground font-medium">
                    Multi-Domain Dashboard
                  </span>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Register, verify, and filter domains with status tracking
                    and quota management
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-secondary mr-4 rounded-md p-2">
                  <Tag className="text-primary h-5 w-5" />
                </div>
                <div>
                  <span className="text-foreground font-medium">
                    Team Collaboration (RBAC)
                  </span>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Owner, Admin, Project Manager, Member, and Viewer roles with
                    MFA support
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-secondary mr-4 rounded-md p-2">
                  <Database className="text-primary h-5 w-5" />
                </div>
                <div>
                  <span className="text-foreground font-medium">
                    Bulk Import & Operations
                  </span>
                  <p className="text-muted-foreground mt-1 text-sm">
                    Import multiple domains via CSV and process reports in bulk
                    with progress tracking
                  </p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
