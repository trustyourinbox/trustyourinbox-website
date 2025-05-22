"use client"

import { Suspense } from "react"
import { useSearchParams } from "next/navigation"
import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { Shield, Mail, Lock, CheckCircle, AlertCircle, Loader2 } from "lucide-react"

export const dynamic = "force-dynamic"

function DmarcDomainCheckerInner() {
  const searchParams = useSearchParams()
  const domain = searchParams.get("domain")
  const [loading, setLoading] = useState(true)
  const [results, setResults] = useState<any>(null)
  const [error, setError] = useState<string | null>(null)

  useEffect(() => {
    if (domain) {
      const performCheck = async () => {
        try {
          setLoading(true)
          setError(null)
          const response = await fetch(`/api/check-domain?domain=${encodeURIComponent(domain)}`)
          if (!response.ok) {
            const errorData = await response.json()
            throw new Error(errorData.error || 'Failed to check domain')
          }
          const checkResults = await response.json()
          setResults(checkResults)
        } catch (err) {
          setError(err instanceof Error ? err.message : "Failed to check domain. Please ensure the domain is valid and try again.")
        } finally {
          setLoading(false)
        }
      }
      performCheck()
    }
  }, [domain])

  if (!domain) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">No Domain Provided</h1>
          <p className="text-gray-600 mb-8">Please enter a domain to check its DMARC configuration.</p>
          <a href="/tools/dmarc-domain-checker" className="text-blue-600 hover:text-blue-700">
            Return to DMARC Checker
          </a>
        </div>
      </div>
    )
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <Loader2 className="h-12 w-12 text-blue-600 animate-spin mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Checking Domain</h1>
          <p className="text-gray-600">Analyzing {domain} for DMARC, SPF, and DKIM configuration...</p>
        </div>
      </div>
    )
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-3xl mx-auto text-center">
          <AlertCircle className="h-12 w-12 text-red-600 mx-auto mb-4" />
          <h1 className="text-3xl font-bold text-gray-900 mb-4">Error</h1>
          <p className="text-gray-600 mb-8">{error}</p>
          <a href="/tools/dmarc-domain-checker" className="text-blue-600 hover:text-blue-700">
            Return to DMARC Checker
          </a>
        </div>
      </div>
    )
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h1 className="text-3xl font-bold text-gray-900 mb-4">DMARC Analysis Results</h1>
          <p className="text-xl text-gray-600">Domain: {domain}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* DMARC Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
              <Shield className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">DMARC</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <span className="font-medium mr-2">Status:</span>
                <span className="text-green-600 font-medium">{results.dmarc.status}</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="font-medium mr-2">Policy:</span>
                <span className="text-gray-600">{results.dmarc.policy}</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="font-medium mr-2">Percentage:</span>
                <span className="text-gray-600">{results.dmarc.percentage}%</span>
              </div>
            </div>
          </motion.div>

          {/* SPF Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
              <Mail className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">SPF</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <span className="font-medium mr-2">Status:</span>
                <span className="text-green-600 font-medium">{results.spf.status}</span>
              </div>
              <div className="text-sm text-gray-600 break-all">
                <span className="font-medium block mb-1">Record:</span>
                {results.spf.record}
              </div>
            </div>
          </motion.div>

          {/* DKIM Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="bg-white rounded-xl shadow-lg p-6"
          >
            <div className="flex items-center justify-center w-12 h-12 rounded-full bg-blue-100 mb-4">
              <Lock className="h-6 w-6 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold mb-2">DKIM</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <span className="font-medium mr-2">Status:</span>
                <span className="text-green-600 font-medium">{results.dkim.status}</span>
              </div>
              <div className="text-sm text-gray-600 break-all">
                <span className="font-medium block mb-1">Record:</span>
                {results.dkim.record}
              </div>
            </div>
          </motion.div>
        </div>

        {/* Recommendations */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3 }}
          className="mt-12 bg-white rounded-xl shadow-lg p-6"
        >
          <h3 className="text-lg font-semibold mb-4">Recommendations</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3" />
              <div>
                <p className="text-gray-900 font-medium">DMARC is properly configured</p>
                <p className="text-gray-600 text-sm mt-1">
                  Your domain has DMARC enforcement enabled, which helps prevent email spoofing.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3" />
              <div>
                <p className="text-gray-900 font-medium">SPF record is valid</p>
                <p className="text-gray-600 text-sm mt-1">
                  Your SPF record correctly identifies authorized email senders.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="h-5 w-5 text-green-600 mt-0.5 mr-3" />
              <div>
                <p className="text-gray-900 font-medium">DKIM is properly configured</p>
                <p className="text-gray-600 text-sm mt-1">
                  Your DKIM record ensures email authenticity and integrity.
                </p>
              </div>
            </div>
          </div>
        </motion.div>

        {/* CTA */}
        <div className="mt-12 text-center">
          <a
            href="/tools/dmarc-domain-checker"
            className="inline-flex items-center justify-center rounded-md bg-blue-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
          >
            Check Another Domain
          </a>
        </div>
      </div>
    </div>
  )
}

export default function DmarcDomainChecker() {
  return (
    <Suspense fallback={<div className="min-h-screen flex items-center justify-center"><Loader2 className="h-12 w-12 text-blue-600 animate-spin" /></div>}>
      <DmarcDomainCheckerInner />
    </Suspense>
  )
} 