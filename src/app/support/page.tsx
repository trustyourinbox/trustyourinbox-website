"use client"

import { useState } from "react"
import Link from "next/link"
import { HelpCircle, Search, BookOpen, Mail, MessageCircle, ChevronDown, CheckCircle } from "lucide-react"

const faqCategories = [
  {
    title: "Getting Started",
    faqs: [
      {
        question: "How do I start using TrustYourInbox?",
        answer: "Sign up for a free account, verify your email, add your first domain, and start uploading DMARC reports. Our guided setup will walk you through each step."
      },
      {
        question: "Do I need technical knowledge to use TrustYourInbox?",
        answer: "While basic understanding of email and DNS is helpful, our platform is designed to be user-friendly. We provide guided workflows, tooltips, and comprehensive documentation to help you every step of the way."
      },
      {
        question: "How long does it take to see results?",
        answer: "You can start analyzing DMARC reports immediately. However, it typically takes 24-48 hours for DMARC reports to start arriving from email receivers after you publish your DMARC record."
      },
    ]
  },
  {
    title: "DMARC & Authentication",
    faqs: [
      {
        question: "What is DMARC and why do I need it?",
        answer: "DMARC (Domain-based Message Authentication, Reporting & Conformance) is an email authentication protocol that protects your domain from spoofing and phishing attacks. It helps ensure only authorized senders can use your domain name."
      },
      {
        question: "How do I create a DMARC record?",
        answer: "Use our free DMARC Policy Generator tool to create a record, then publish it as a TXT record in your DNS. Start with p=none for monitoring, then gradually move to p=quarantine and p=reject as you gain confidence."
      },
      {
        question: "What's the difference between SPF, DKIM, and DMARC?",
        answer: "SPF authorizes which servers can send email for your domain. DKIM adds a digital signature to verify email authenticity. DMARC builds on both to provide policy enforcement and reporting. All three work together for complete email authentication."
      },
      {
        question: "Can DMARC break my email?",
        answer: "If configured correctly with p=none initially, DMARC won't affect email delivery. Start in monitoring mode, analyze reports, whitelist legitimate senders, then gradually enforce policies. Our platform helps you do this safely."
      },
    ]
  },
  {
    title: "Reports & Analytics",
    faqs: [
      {
        question: "How do I upload DMARC reports?",
        answer: "Go to Reports → Upload, then drag and drop XML, GZIP, or ZIP files. You can also configure your DMARC record to send reports directly to our service for automatic processing."
      },
      {
        question: "What are aggregate vs forensic reports?",
        answer: "Aggregate reports (RUA) provide daily summaries of authentication results. Forensic reports (RUF) contain detailed information about specific failures. Most organizations start with aggregate reports only."
      },
      {
        question: "How often do I receive reports?",
        answer: "Most email receivers send DMARC aggregate reports once per day. The timing varies by provider, but you'll typically see reports within 24-48 hours of enabling DMARC."
      },
    ]
  },
  {
    title: "Plans & Billing",
    faqs: [
      {
        question: "What's included in the free plan?",
        answer: "The free plan includes 1 domain, 1 user, 100 emails per month, and access to our free tools. Perfect for small websites or testing before upgrading."
      },
      {
        question: "Can I upgrade or downgrade my plan?",
        answer: "Yes! You can upgrade or downgrade at any time. Changes take effect immediately for upgrades, or at the end of your billing cycle for downgrades."
      },
      {
        question: "Do you offer annual billing?",
        answer: "Yes, annual billing is available for Business and Enterprise plans with a 20% discount. Contact us for annual pricing details."
      },
      {
        question: "What happens if I exceed my plan limits?",
        answer: "We'll notify you at 80% and 100% usage. At 100%, you'll need to upgrade or wait until the next billing cycle. Your data remains safe and accessible."
      },
    ]
  },
  {
    title: "Account & Security",
    faqs: [
      {
        question: "Is my data secure?",
        answer: "Yes. We use enterprise-grade encryption, secure data centers, and follow industry best practices. All data is encrypted in transit and at rest. We're SOC 2 Type II compliant."
      },
      {
        question: "Can I add team members?",
        answer: "Yes! Business and Enterprise plans support multiple users with role-based access control. Add team members from Settings → Members."
      },
      {
        question: "Do you support SSO?",
        answer: "Enterprise plans include SSO support via SAML 2.0 and OAuth. Contact us to set up single sign-on for your organization."
      },
    ]
  },
]

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null)

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium mb-6">
              <HelpCircle className="h-4 w-4 mr-2 text-primary" />
              <span className="text-primary">Help Center</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              How can we <span className="text-primary">help</span> you?
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
              Search our knowledge base or browse frequently asked questions below
            </p>

            {/* Search Bar */}
            <div className="max-w-2xl mx-auto">
              <div className="relative">
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="w-full h-14 pl-12 pr-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="py-12 -mt-8">
        <div className="container">
          <div className="grid md:grid-cols-3 gap-6 max-w-4xl mx-auto">
            <Link
              href="/guides"
              className="group p-6 rounded-xl border border-border bg-background hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <BookOpen className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Documentation</h3>
              <p className="text-sm text-muted-foreground">Comprehensive guides and tutorials</p>
            </Link>

            <Link
              href="/contact"
              className="group p-6 rounded-xl border border-border bg-background hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <Mail className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Contact Support</h3>
              <p className="text-sm text-muted-foreground">Get help from our team</p>
            </Link>

            <Link
              href="/tools"
              className="group p-6 rounded-xl border border-border bg-background hover:shadow-lg hover:border-primary/30 transition-all"
            >
              <MessageCircle className="h-8 w-8 text-primary mb-4" />
              <h3 className="font-bold mb-2 group-hover:text-primary transition-colors">Free Tools</h3>
              <p className="text-sm text-muted-foreground">DMARC & SPF analyzers</p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
            <p className="text-lg text-muted-foreground">
              Find answers to common questions about TrustYourInbox
            </p>
          </div>

          <div className="space-y-12">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <h3 className="text-2xl font-bold mb-6 flex items-center gap-3">
                  <div className="h-1 w-8 bg-primary rounded"></div>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.faqs.map((faq, index) => {
                    const faqId = `${category.title}-${index}`
                    const isOpen = openFaq === faqId
                    return (
                      <div
                        key={index}
                        className="rounded-xl border border-border bg-background overflow-hidden"
                      >
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : faqId)}
                          className="w-full p-6 text-left flex items-start justify-between gap-4 hover:bg-muted/50 transition-colors"
                        >
                          <div className="flex items-start gap-3 flex-1">
                            <CheckCircle className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                            <span className="font-semibold">{faq.question}</span>
                          </div>
                          <ChevronDown
                            className={`h-5 w-5 text-muted-foreground flex-shrink-0 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6 pl-14">
                            <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                          </div>
                        )}
                      </div>
                    )
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help CTA */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Still need help?
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Our support team is here to help you succeed
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Link
                href="/contact"
                className="inline-flex items-center justify-center rounded-lg bg-primary px-8 py-3 text-sm font-semibold text-primary-foreground hover:bg-primary/90 transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/guides"
                className="inline-flex items-center justify-center rounded-lg border border-border px-8 py-3 text-sm font-semibold hover:bg-muted transition-colors"
              >
                Browse Guides
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
