import type { Metadata } from 'next'
import Image from "next/image"
import Link from "next/link"

export const metadata: Metadata = {
  title: 'TrustYourInbox - DMARC Protection Made Simple',
  description: 'Implement DMARC authentication to protect your email domain and stop phishing attacks.',
}

const featureIcons = [
  '/images/icons/dmarc.svg',
  '/images/icons/monitoring.svg',
  '/images/icons/analytics.svg',
  '/images/icons/ai.svg',
  '/images/icons/enforcement.svg',
  '/images/icons/global.svg',
];

const featureTitles = [
  'Automated DMARC, SPF & DKIM',
  'Real-Time Monitoring & Alerts',
  'Advanced Analytics & Reporting',
  'AI-Powered Threat Detection',
  'One-Click Enforcement',
  'Global Threat Intelligence',
];

const featureDescriptions = [
  'Effortlessly configure, monitor, and enforce DMARC, SPF, and DKIM records. Our automation ensures your domain is always protected and compliant.',
  'Get instant notifications about suspicious activity, authentication failures, or policy changes. Stay ahead of threats with proactive monitoring.',
  'Visualize authentication results, sources, and trends. Generate detailed reports for compliance, audits, and executive insights.',
  'Leverage machine learning to identify phishing attempts, spoofing, and anomalous email behavior before it impacts your business.',
  'Move from monitoring to enforcement with a single click. Instantly protect your domain with policy updates and automated remediation.',
  'Tap into a global network of threat data to block known bad actors and stay ahead of emerging phishing campaigns.',
];

export default function Home() {
  return (
    <div className="min-h-screen bg-white">
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
                Stop Phishing with <span className="text-blue-600">DMARC Protection</span>
              </h1>
              <p className="mt-6 text-xl text-gray-500">
                TrustYourInbox automates DMARC implementation and enforcement to protect your email domain from spoofing and phishing attacks.
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
              Comprehensive protection for your email domain with powerful features designed to keep your communications secure.
            </p>
          </div>
          <div className="mt-16 grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featureIcons.map((icon, i) => (
              <div key={featureTitles[i]} className="group relative rounded-2xl border border-gray-200 bg-white p-8 shadow-sm transition-all hover:shadow-md flex flex-col">
                <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-blue-50 text-blue-600 mb-6">
                  <Image src={icon} alt={featureTitles[i]} width={32} height={32} />
                </div>
                <h3 className="text-xl font-semibold text-gray-900 mb-2">{featureTitles[i]}</h3>
                <p className="text-base text-gray-500">{featureDescriptions[i]}</p>
              </div>
            ))}
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
    </div>
  )
}
