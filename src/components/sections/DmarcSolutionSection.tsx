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
          <h1 className="mb-4 text-4xl font-bold text-foreground md:text-5xl">
            The Best DMARC Solution for MSPs and Small Businesses
          </h1>
          <p className="mx-auto max-w-3xl text-xl text-muted-foreground">
            Whether you&apos;re managing one domain or fifty, we&apos;ve got you
            covered.
          </p>
        </div>

        <div className="mt-16 grid gap-8 md:grid-cols-2">
          {/* For IT Teams */}
          <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
            <div className="mb-6 flex items-center">
              <div className="mr-4 rounded-lg bg-primary/10 p-3">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">
                For IT Teams
              </h2>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="mr-4 rounded-md bg-secondary p-2">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="font-medium text-foreground">
                    Built-in Analysis Tools
                  </span>
                  <p className="mt-1 text-sm text-muted-foreground">
                    DMARC Analyzer, SPF Analyzer, and record generator all in
                    one platform
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 rounded-md bg-secondary p-2">
                  <BarChart2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="font-medium text-foreground">
                    Interactive Analytics Dashboards
                  </span>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Pie charts, area charts, and bar charts showing compliance,
                    trends, and performance
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 rounded-md bg-secondary p-2">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="font-medium text-foreground">
                    Bulk Report Processing
                  </span>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Upload multiple DMARC reports (XML, GZIP, ZIP) with progress
                    tracking
                  </p>
                </div>
              </li>
            </ul>
          </div>

          {/* For MSPs */}
          <div className="rounded-lg border border-border bg-card p-8 shadow-sm">
            <div className="mb-6 flex items-center">
              <div className="mr-4 rounded-lg bg-primary/10 p-3">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">
                For MSPs
              </h2>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="mr-4 rounded-md bg-secondary p-2">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="font-medium text-foreground">
                    Multi-Domain Dashboard
                  </span>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Register, verify, and filter domains with status tracking
                    and quota management
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 rounded-md bg-secondary p-2">
                  <Tag className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="font-medium text-foreground">
                    Team Collaboration (RBAC)
                  </span>
                  <p className="mt-1 text-sm text-muted-foreground">
                    Owner, Admin, Project Manager, Member, and Viewer roles with
                    MFA support
                  </p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="mr-4 rounded-md bg-secondary p-2">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="font-medium text-foreground">
                    Bulk Import & Operations
                  </span>
                  <p className="mt-1 text-sm text-muted-foreground">
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
