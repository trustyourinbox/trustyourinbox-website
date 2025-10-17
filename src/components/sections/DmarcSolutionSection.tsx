import { Server, Building2, Settings, BarChart2, ShieldCheck, Globe, Tag, Database } from "lucide-react"

export default function DmarcSolutionSection() {
  return (
    <section className="py-16 px-4 md:py-24 bg-background">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 text-foreground">
            The Best DMARC Solution for MSPs and Small Businesses
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Whether you&apos;re managing one domain or fifty, we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* For IT Teams */}
          <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <Server className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">For IT Teams</h2>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="bg-secondary p-2 rounded-md mr-4">
                  <Settings className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-foreground font-medium">Built-in Analysis Tools</span>
                  <p className="text-muted-foreground text-sm mt-1">DMARC Analyzer, SPF Analyzer, and record generator all in one platform</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-secondary p-2 rounded-md mr-4">
                  <BarChart2 className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-foreground font-medium">Interactive Analytics Dashboards</span>
                  <p className="text-muted-foreground text-sm mt-1">Pie charts, area charts, and bar charts showing compliance, trends, and performance</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-secondary p-2 rounded-md mr-4">
                  <ShieldCheck className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-foreground font-medium">Bulk Report Processing</span>
                  <p className="text-muted-foreground text-sm mt-1">Upload multiple DMARC reports (XML, GZIP, ZIP) with progress tracking</p>
                </div>
              </li>
            </ul>
          </div>

          {/* For MSPs */}
          <div className="bg-card p-8 rounded-lg border border-border shadow-sm">
            <div className="flex items-center mb-6">
              <div className="bg-primary/10 p-3 rounded-lg mr-4">
                <Building2 className="h-6 w-6 text-primary" />
              </div>
              <h2 className="text-2xl font-bold text-card-foreground">For MSPs</h2>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="bg-secondary p-2 rounded-md mr-4">
                  <Globe className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-foreground font-medium">Multi-Domain Dashboard</span>
                  <p className="text-muted-foreground text-sm mt-1">Register, verify, and filter domains with status tracking and quota management</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-secondary p-2 rounded-md mr-4">
                  <Tag className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-foreground font-medium">Team Collaboration (RBAC)</span>
                  <p className="text-muted-foreground text-sm mt-1">Owner, Admin, Project Manager, Member, and Viewer roles with MFA support</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-secondary p-2 rounded-md mr-4">
                  <Database className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <span className="text-foreground font-medium">Bulk Import & Operations</span>
                  <p className="text-muted-foreground text-sm mt-1">Import multiple domains via CSV and process reports in bulk with progress tracking</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 