"use client";

import { Suspense } from "react";
import { useSearchParams } from "next/navigation";
import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import {
  Shield,
  Mail,
  Lock,
  CheckCircle,
  AlertCircle,
  Loader2,
} from "lucide-react";

export const dynamic = "force-dynamic";

function DmarcDomainCheckerInner() {
  const searchParams = useSearchParams();
  const domain = searchParams.get("domain");
  const [loading, setLoading] = useState(true);
  const [results, setResults] = useState<any>(null);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    if (domain) {
      const performCheck = async () => {
        try {
          setLoading(true);
          setError(null);
          const response = await fetch(
            `/api/check-domain?domain=${encodeURIComponent(domain)}`
          );
          if (!response.ok) {
            const errorData = await response.json();
            throw new Error(errorData.error || "Failed to check domain");
          }
          const checkResults = await response.json();
          setResults(checkResults);
        } catch (err) {
          setError(
            err instanceof Error
              ? err.message
              : "Failed to check domain. Please ensure the domain is valid and try again."
          );
        } finally {
          setLoading(false);
        }
      };
      performCheck();
    }
  }, [domain]);

  if (!domain) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            No Domain Provided
          </h1>
          <p className="mb-8 text-gray-600">
            Please enter a domain to check its DMARC configuration.
          </p>
          <a
            href="/tools/dmarc-domain-checker"
            className="text-primary hover:text-primary"
          >
            Return to DMARC Checker
          </a>
        </div>
      </div>
    );
  }

  if (loading) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <Loader2 className="mx-auto mb-4 h-12 w-12 animate-spin text-primary" />
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            Checking Domain
          </h1>
          <p className="text-gray-600">
            Analyzing {domain} for DMARC, SPF, and DKIM configuration...
          </p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="min-h-screen bg-gray-50 px-4 py-12 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-3xl text-center">
          <AlertCircle className="mx-auto mb-4 h-12 w-12 text-red-600" />
          <h1 className="mb-4 text-3xl font-bold text-gray-900">Error</h1>
          <p className="mb-8 text-gray-600">{error}</p>
          <a
            href="/tools/dmarc-domain-checker"
            className="text-primary hover:text-primary"
          >
            Return to DMARC Checker
          </a>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-12">
      <div className="container">
        <div className="mb-12 text-center">
          <h1 className="mb-4 text-3xl font-bold text-gray-900">
            DMARC Analysis Results
          </h1>
          <p className="text-xl text-gray-600">Domain: {domain}</p>
        </div>

        <div className="grid gap-6 md:grid-cols-3">
          {/* DMARC Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="rounded-xl bg-white p-6 shadow-lg"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Shield className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">DMARC</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <span className="mr-2 font-medium">Status:</span>
                <span className="font-medium text-green-600">
                  {results.dmarc.status}
                </span>
              </div>
              <div className="flex items-center text-sm">
                <span className="mr-2 font-medium">Policy:</span>
                <span className="text-gray-600">{results.dmarc.policy}</span>
              </div>
              <div className="flex items-center text-sm">
                <span className="mr-2 font-medium">Percentage:</span>
                <span className="text-gray-600">
                  {results.dmarc.percentage}%
                </span>
              </div>
            </div>
          </motion.div>

          {/* SPF Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.1 }}
            className="rounded-xl bg-white p-6 shadow-lg"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Mail className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">SPF</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <span className="mr-2 font-medium">Status:</span>
                <span className="font-medium text-green-600">
                  {results.spf.status}
                </span>
              </div>
              <div className="break-all text-sm text-gray-600">
                <span className="mb-1 block font-medium">Record:</span>
                {results.spf.record}
              </div>
            </div>
          </motion.div>

          {/* DKIM Card */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.2 }}
            className="rounded-xl bg-white p-6 shadow-lg"
          >
            <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-full bg-primary/10">
              <Lock className="h-6 w-6 text-primary" />
            </div>
            <h3 className="mb-2 text-lg font-semibold">DKIM</h3>
            <div className="space-y-2">
              <div className="flex items-center text-sm">
                <span className="mr-2 font-medium">Status:</span>
                <span className="font-medium text-green-600">
                  {results.dkim.status}
                </span>
              </div>
              <div className="break-all text-sm text-gray-600">
                <span className="mb-1 block font-medium">Record:</span>
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
          className="mt-12 rounded-xl bg-white p-6 shadow-lg"
        >
          <h3 className="mb-4 text-lg font-semibold">Recommendations</h3>
          <div className="space-y-4">
            <div className="flex items-start">
              <CheckCircle className="mr-3 mt-0.5 h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-900">
                  DMARC is properly configured
                </p>
                <p className="mt-1 text-sm text-gray-600">
                  Your domain has DMARC enforcement enabled, which helps prevent
                  email spoofing.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="mr-3 mt-0.5 h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-900">SPF record is valid</p>
                <p className="mt-1 text-sm text-gray-600">
                  Your SPF record correctly identifies authorized email senders.
                </p>
              </div>
            </div>
            <div className="flex items-start">
              <CheckCircle className="mr-3 mt-0.5 h-5 w-5 text-green-600" />
              <div>
                <p className="font-medium text-gray-900">
                  DKIM is properly configured
                </p>
                <p className="mt-1 text-sm text-gray-600">
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
            className="inline-flex items-center justify-center rounded-md bg-primary px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-primary focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2"
          >
            Check Another Domain
          </a>
        </div>
      </div>
    </div>
  );
}

export default function DmarcDomainChecker() {
  return (
    <Suspense
      fallback={
        <div className="flex min-h-screen items-center justify-center">
          <Loader2 className="h-12 w-12 animate-spin text-primary" />
        </div>
      }
    >
      <DmarcDomainCheckerInner />
    </Suspense>
  );
}
