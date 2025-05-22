import Image from "next/image"
import Link from "next/link"
import { Shield, Bell, BarChart3, Brain, Zap, Globe } from "lucide-react"

export default function FeaturesPage() {
  return (
    <div className="min-h-screen bg-white">
      {/* Navigation */}
      <header className="border-b border-gray-100">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex-shrink-0">
              <Link href="/" className="flex items-center">
                <Image
                  src="/images/logo.png"
                  alt="TrustYourInbox Logo"
                  width={200}
                  height={40}
                  style={{ height: 'auto' }}
                  className="h-8 w-auto"
                />
              </Link>
            </div>
            <nav className="hidden md:flex space-x-10">
              <Link href="/features" className="text-sm font-medium text-blue-600 border-b-2 border-blue-600 pb-1">
                Features
              </Link>
              <Link href="/pricing" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                Pricing
              </Link>
              <Link href="/about" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                About
              </Link>
            </nav>
            <div className="flex items-center space-x-4">
              <Link href="/login" className="text-sm font-medium text-gray-500 hover:text-gray-900">
                Login
              </Link>
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
              >
                Sign Up
              </Link>
            </div>
          </div>
        </div>
      </header>

      {/* Hero Section */}
      <section className="relative overflow-hidden py-16 sm:py-24">
        {/* Background with animated wave effect */}
        <div className="absolute inset-0 bg-gradient-to-b from-blue-50 to-white">
          <svg className="absolute bottom-0 left-0 right-0" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
            <path
              fill="#0066FF"
              fillOpacity="0.1"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
            <path
              fill="#0066FF"
              fillOpacity="0.05"
              d="M0,160L48,181.3C96,203,192,245,288,261.3C384,277,480,267,576,234.7C672,203,768,149,864,128C960,107,1056,117,1152,133.3C1248,149,1344,171,1392,181.3L1440,192L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <div className="inline-flex items-center px-4 py-2 rounded-full bg-blue-50 text-blue-700 mb-6">
                <svg
                  className="w-4 h-4 mr-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"
                  />
                </svg>
                <span className="text-sm font-medium">Trusted by 500+ Organizations</span>
              </div>
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 sm:text-5xl md:text-6xl">
                Powerful Features to <span className="text-blue-600">Secure</span> Your Email Domain
              </h1>
              <p className="mt-6 text-xl text-gray-500">
                TrustYourInbox provides a comprehensive suite of tools to automate DMARC, SPF, and DKIM, monitor your
                domain, and protect your organization from phishing and spoofing attacks.
              </p>
              <div className="mt-8 flex flex-wrap gap-4">
                <div className="inline-flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Enterprise-Grade Security</span>
                </div>
                <div className="inline-flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>Real-Time Monitoring</span>
                </div>
                <div className="inline-flex items-center text-gray-700">
                  <svg
                    className="w-5 h-5 mr-2 text-blue-600"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                  </svg>
                  <span>AI-Powered Protection</span>
                </div>
              </div>
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <Link
                  href="/signup"
                  className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Get Started Free
                </Link>
                <Link
                  href="/demo"
                  className="inline-flex items-center justify-center rounded-md border border-gray-300 bg-white px-6 py-3 text-base font-medium text-gray-700 shadow-sm hover:bg-gray-50 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
                >
                  Request Demo
                </Link>
              </div>
            </div>
            <div className="relative">
              <div className="absolute -top-6 -right-6 w-64 h-64 bg-blue-100 rounded-full opacity-30 blur-3xl"></div>
              <div className="absolute -bottom-8 -left-8 w-64 h-64 bg-blue-200 rounded-full opacity-30 blur-3xl"></div>
              <div className="relative rounded-xl overflow-hidden shadow-2xl">
                <Image
                  src="/placeholder.svg?height=500&width=600"
                  alt="Email Security Dashboard"
                  width={600}
                  height={500}
                  className="w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-tr from-blue-600/10 to-transparent"></div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trusted By Section */}
      <section className="bg-gray-50 py-12">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <p className="text-center text-base font-medium text-gray-500">Trusted by leading organizations</p>
          <div className="mt-8 flex flex-wrap justify-center gap-8 grayscale opacity-70">
            <div className="flex h-12 items-center justify-center">
              <span className="text-gray-400 font-medium">Salesforce</span>
            </div>
            <div className="flex h-12 items-center justify-center">
              <span className="text-gray-400 font-medium">Fortinet</span>
            </div>
            <div className="flex h-12 items-center justify-center">
              <span className="text-gray-400 font-medium">Google</span>
            </div>
            <div className="flex h-12 items-center justify-center">
              <span className="text-gray-400 font-medium">Microsoft</span>
            </div>
            <div className="flex h-12 items-center justify-center">
              <span className="text-gray-400 font-medium">IBM</span>
            </div>
          </div>
        </div>
      </section>

      {/* Features Overview */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
              All-in-One Email Security Platform
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-gray-500">
              Comprehensive protection for your email domain with powerful features designed to keep your communications
              secure.
            </p>
          </div>

          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {/* Feature 1 */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-6">
                <Shield className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Automated DMARC, SPF & DKIM</h3>
              <p className="mt-4 text-base text-gray-500">
                Effortlessly configure, monitor, and enforce DMARC, SPF, and DKIM records. Our automation ensures your
                domain is always protected and compliant.
              </p>
            </div>

            {/* Feature 2 */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-6">
                <Bell className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Real-Time Monitoring & Alerts</h3>
              <p className="mt-4 text-base text-gray-500">
                Get instant notifications about suspicious activity, authentication failures, or policy changes. Stay
                ahead of threats with proactive monitoring.
              </p>
            </div>

            {/* Feature 3 */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-6">
                <BarChart3 className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Advanced Analytics & Reporting</h3>
              <p className="mt-4 text-base text-gray-500">
                Visualize authentication results, sources, and trends. Generate detailed reports for compliance, audits,
                and executive insights.
              </p>
            </div>

            {/* Feature 4 */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-6">
                <Brain className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">AI-Powered Threat Detection</h3>
              <p className="mt-4 text-base text-gray-500">
                Leverage machine learning to identify phishing attempts, spoofing, and anomalous email behavior before
                it impacts your business.
              </p>
            </div>

            {/* Feature 5 */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-6">
                <Zap className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">One-Click Enforcement</h3>
              <p className="mt-4 text-base text-gray-500">
                Move from monitoring to enforcement with a single click. Instantly protect your domain with policy
                updates and automated remediation.
              </p>
            </div>

            {/* Feature 6 */}
            <div className="group relative rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition-all hover:shadow-md">
              <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-6">
                <Globe className="h-6 w-6" />
              </div>
              <h3 className="text-xl font-semibold text-gray-900">Global Threat Intelligence</h3>
              <p className="mt-4 text-base text-gray-500">
                Tap into a global network of threat data to block known bad actors and stay ahead of emerging phishing
                campaigns.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* DMARC Management Section */}
      <section className="bg-gray-50 py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-5">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Automated DMARC, SPF & DKIM Management
              </h2>
              <p className="mt-6 text-lg text-gray-500">
                TrustYourInbox simplifies the complex process of email authentication. Our platform automatically
                configures and maintains your DMARC, SPF, and DKIM records, ensuring continuous protection and
                compliance. No more manual DNS updates or guesswork—just secure, reliable email delivery.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-500">Guided setup and validation</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-500">Continuous monitoring for record changes</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-500">Automated remediation and enforcement</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-500">Expert support and best practices</p>
                </div>
              </div>
            </div>
            <div className="mt-12 lg:col-span-7 lg:mt-0">
              <div className="relative">
                <div className="aspect-[16/9] overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="/placeholder.svg?height=450&width=800"
                    alt="DMARC Management Dashboard"
                    width={800}
                    height={450}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Real-Time Monitoring Section */}
      <section className="py-16 sm:py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="lg:grid lg:grid-cols-12 lg:gap-8">
            <div className="lg:col-span-7">
              <div className="relative">
                <div className="aspect-[16/9] overflow-hidden rounded-xl shadow-xl">
                  <Image
                    src="/placeholder.svg?height=450&width=800"
                    alt="Real-Time Monitoring Dashboard"
                    width={800}
                    height={450}
                    className="w-full object-cover"
                  />
                </div>
              </div>
            </div>
            <div className="mt-12 lg:col-span-5 lg:mt-0">
              <h2 className="text-3xl font-bold tracking-tight text-gray-900 sm:text-4xl">
                Real-Time Monitoring & Analytics
              </h2>
              <p className="mt-6 text-lg text-gray-500">
                Instantly detect authentication failures, suspicious senders, and policy violations. Our real-time
                dashboard provides actionable insights and alerts to help you respond quickly to potential threats.
              </p>
              <div className="mt-8 space-y-4">
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-500">Live authentication monitoring</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-500">Customizable alert thresholds</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-500">Interactive data visualization</p>
                </div>
                <div className="flex items-start">
                  <div className="flex-shrink-0">
                    <svg className="h-6 w-6 text-green-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                  </div>
                  <p className="ml-3 text-base text-gray-500">Trend analysis and reporting</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-blue-600">
          <svg
            className="absolute top-0 left-0 right-0 transform rotate-180"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 1440 320"
          >
            <path
              fill="#ffffff"
              fillOpacity="0.1"
              d="M0,288L48,272C96,256,192,224,288,197.3C384,171,480,149,576,165.3C672,181,768,235,864,250.7C960,267,1056,245,1152,224C1248,203,1344,181,1392,170.7L1440,160L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z"
            ></path>
          </svg>
        </div>
        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold tracking-tight text-white sm:text-4xl">
              Ready to secure your email domain?
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-lg text-blue-100">
              Join thousands of organizations that trust TrustYourInbox for their email security needs.
            </p>
            <div className="mt-8 flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/signup"
                className="inline-flex items-center justify-center rounded-md bg-white px-6 py-3 text-base font-medium text-blue-600 shadow-sm hover:bg-blue-50 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                Get Started Free
              </Link>
              <Link
                href="/demo"
                className="inline-flex items-center justify-center rounded-md border border-white bg-transparent px-6 py-3 text-base font-medium text-white hover:bg-white/10 focus:outline-none focus:ring-2 focus:ring-white focus:ring-offset-2 focus:ring-offset-blue-600"
              >
                Request Demo
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-white border-t border-gray-200">
        <div className="mx-auto max-w-7xl px-4 py-12 sm:px-6 lg:px-8">
          <div className="md:flex md:items-center md:justify-between">
            <div className="flex justify-center space-x-6 md:order-2">
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">Twitter</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                </svg>
              </Link>
              <Link href="#" className="text-gray-400 hover:text-gray-500">
                <span className="sr-only">LinkedIn</span>
                <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                </svg>
              </Link>
            </div>
            <div className="mt-8 md:order-1 md:mt-0">
              <p className="text-center text-base text-gray-400">
                &copy; {new Date().getFullYear()} TrustYourInbox. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  )
}
