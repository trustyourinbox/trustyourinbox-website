import { Server, Building2, Settings, BarChart2, ShieldCheck, Globe, Tag, Database } from "lucide-react"

export default function DmarcSolutionSection() {
  return (
    <section className="py-16 px-4 md:py-24 bg-white">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent">
            The Best DMARC Solution for MSPs and Small Businesses
          </h1>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Whether you&apos;re managing one domain or fifty, we&apos;ve got you covered.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 mt-16">
          {/* For IT Teams */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Server className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">For IT Teams</h2>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-md mr-4">
                  <Settings className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <span className="text-gray-700 font-medium">Simple setup and maintenance</span>
                  <p className="text-gray-500 text-sm mt-1">Get up and running quickly with minimal configuration</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-md mr-4">
                  <BarChart2 className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <span className="text-gray-700 font-medium">Clear reporting and analytics</span>
                  <p className="text-gray-500 text-sm mt-1">Gain insights with comprehensive dashboards</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-md mr-4">
                  <ShieldCheck className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <span className="text-gray-700 font-medium">Automated policy management</span>
                  <p className="text-gray-500 text-sm mt-1">Set it and forget it with smart automation</p>
                </div>
              </li>
            </ul>
          </div>

          {/* For MSPs */}
          <div className="bg-white p-8 rounded-lg border border-gray-200 shadow-sm">
            <div className="flex items-center mb-6">
              <div className="bg-blue-100 p-3 rounded-lg mr-4">
                <Building2 className="h-6 w-6 text-blue-600" />
              </div>
              <h2 className="text-2xl font-bold text-gray-900">For MSPs</h2>
            </div>
            <ul className="space-y-5">
              <li className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-md mr-4">
                  <Globe className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <span className="text-gray-700 font-medium">Multi-domain management</span>
                  <p className="text-gray-500 text-sm mt-1">Manage all your clients from a single dashboard</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-md mr-4">
                  <Tag className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <span className="text-gray-700 font-medium">White-label reporting</span>
                  <p className="text-gray-500 text-sm mt-1">Customize reports with your brand</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-blue-50 p-2 rounded-md mr-4">
                  <Database className="h-5 w-5 text-blue-500" />
                </div>
                <div>
                  <span className="text-gray-700 font-medium">Bulk domain operations</span>
                  <p className="text-gray-500 text-sm mt-1">Apply changes across multiple domains at once</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  )
} 