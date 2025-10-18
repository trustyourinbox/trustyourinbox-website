"use client";

import { useState } from "react";
import Link from "next/link";
import {
  HelpCircle,
  Search,
  BookOpen,
  Mail,
  MessageCircle,
  ChevronDown,
  CheckCircle,
} from "lucide-react";

const faqCategories = [
  {
    title: "Getting Started",
    faqs: [
      {
        question: "How do I start using TrustYourInbox?",
        answer:
          "Sign up for a free account, verify your email, add your first domain, and start uploading DMARC reports. Our guided setup will walk you through each step.",
      },
      {
        question: "Do I need technical knowledge to use TrustYourInbox?",
        answer:
          "While basic understanding of email and DNS is helpful, our platform is designed to be user-friendly. We provide guided workflows, tooltips, and comprehensive documentation to help you every step of the way.",
      },
      {
        question: "How long does it take to see results?",
        answer:
          "You can start analyzing DMARC reports immediately. However, it typically takes 24-48 hours for DMARC reports to start arriving from email receivers after you publish your DMARC record.",
      },
    ],
  },
  {
    title: "DMARC & Authentication",
    faqs: [
      {
        question: "What is DMARC and why do I need it?",
        answer:
          "DMARC (Domain-based Message Authentication, Reporting & Conformance) is an email authentication protocol that protects your domain from spoofing and phishing attacks. It helps ensure only authorized senders can use your domain name.",
      },
      {
        question: "How do I create a DMARC record?",
        answer:
          "Use our free DMARC Policy Generator tool to create a record, then publish it as a TXT record in your DNS. Start with p=none for monitoring, then gradually move to p=quarantine and p=reject as you gain confidence.",
      },
      {
        question: "What's the difference between SPF, DKIM, and DMARC?",
        answer:
          "SPF authorizes which servers can send email for your domain. DKIM adds a digital signature to verify email authenticity. DMARC builds on both to provide policy enforcement and reporting. All three work together for complete email authentication.",
      },
      {
        question: "Can DMARC break my email?",
        answer:
          "If configured correctly with p=none initially, DMARC won't affect email delivery. Start in monitoring mode, analyze reports, whitelist legitimate senders, then gradually enforce policies. Our platform helps you do this safely.",
      },
    ],
  },
  {
    title: "Reports & Analytics",
    faqs: [
      {
        question: "How do I upload DMARC reports?",
        answer:
          "Go to Reports → Upload, then drag and drop XML, GZIP, or ZIP files. You can also configure your DMARC record to send reports directly to our service for automatic processing.",
      },
      {
        question: "What are aggregate vs forensic reports?",
        answer:
          "Aggregate reports (RUA) provide daily summaries of authentication results. Forensic reports (RUF) contain detailed information about specific failures. Most organizations start with aggregate reports only.",
      },
      {
        question: "How often do I receive reports?",
        answer:
          "Most email receivers send DMARC aggregate reports once per day. The timing varies by provider, but you'll typically see reports within 24-48 hours of enabling DMARC.",
      },
    ],
  },
  {
    title: "Plans & Billing",
    faqs: [
      {
        question: "What's included in the free plan?",
        answer:
          "The free plan includes 1 domain, 1 user, 100 emails per month, and access to our free tools. Perfect for small websites or testing before upgrading.",
      },
      {
        question: "Can I upgrade or downgrade my plan?",
        answer:
          "Yes! You can upgrade or downgrade at any time. Changes take effect immediately for upgrades, or at the end of your billing cycle for downgrades.",
      },
      {
        question: "Do you offer annual billing?",
        answer:
          "Yes, annual billing is available for Business and Enterprise plans with a 20% discount. Contact us for annual pricing details.",
      },
      {
        question: "What happens if I exceed my plan limits?",
        answer:
          "We'll notify you at 80% and 100% usage. At 100%, you'll need to upgrade or wait until the next billing cycle. Your data remains safe and accessible.",
      },
    ],
  },
  {
    title: "Account & Security",
    faqs: [
      {
        question: "Is my data secure?",
        answer:
          "Yes. We use enterprise-grade encryption, secure data centers, and follow industry best practices. All data is encrypted in transit and at rest. We're SOC 2 Type II compliant.",
      },
      {
        question: "Can I add team members?",
        answer:
          "Yes! Business and Enterprise plans support multiple users with role-based access control. Add team members from Settings → Members.",
      },
      {
        question: "Do you support SSO?",
        answer:
          "Enterprise plans include SSO support via SAML 2.0 and OAuth. Contact us to set up single sign-on for your organization.",
      },
    ],
  },
];

export default function SupportPage() {
  const [openFaq, setOpenFaq] = useState<string | null>(null);

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="from-background to-secondary/30 bg-gradient-to-b py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              <HelpCircle className="text-primary mr-2 h-4 w-4" />
              <span className="text-primary">Help Center</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
              How can we <span className="text-primary">help</span> you?
            </h1>
            <p className="text-muted-foreground mb-8 text-xl leading-relaxed">
              Search our knowledge base or browse frequently asked questions
              below
            </p>

            {/* Search Bar */}
            <div className="mx-auto max-w-2xl">
              <div className="relative">
                <Search className="text-muted-foreground absolute top-1/2 left-4 h-5 w-5 -translate-y-1/2" />
                <input
                  type="text"
                  placeholder="Search for help..."
                  className="border-border bg-background focus:ring-primary h-14 w-full rounded-lg border pr-4 pl-12 text-lg focus:border-transparent focus:ring-2 focus:outline-none"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Quick Links */}
      <section className="-mt-8 py-12">
        <div className="container">
          <div className="mx-auto grid max-w-4xl gap-6 md:grid-cols-3">
            <Link
              href="/guides"
              className="group border-border bg-background hover:border-primary/30 rounded-md border p-6 transition-all hover:shadow-lg"
            >
              <BookOpen className="text-primary mb-4 h-8 w-8" />
              <h3 className="group-hover:text-primary mb-2 font-bold transition-colors">
                Documentation
              </h3>
              <p className="text-muted-foreground text-sm">
                Comprehensive guides and tutorials
              </p>
            </Link>

            <Link
              href="/contact"
              className="group border-border bg-background hover:border-primary/30 rounded-md border p-6 transition-all hover:shadow-lg"
            >
              <Mail className="text-primary mb-4 h-8 w-8" />
              <h3 className="group-hover:text-primary mb-2 font-bold transition-colors">
                Contact Support
              </h3>
              <p className="text-muted-foreground text-sm">
                Get help from our team
              </p>
            </Link>

            <Link
              href="/tools"
              className="group border-border bg-background hover:border-primary/30 rounded-md border p-6 transition-all hover:shadow-lg"
            >
              <MessageCircle className="text-primary mb-4 h-8 w-8" />
              <h3 className="group-hover:text-primary mb-2 font-bold transition-colors">
                Free Tools
              </h3>
              <p className="text-muted-foreground text-sm">
                DMARC & SPF analyzers
              </p>
            </Link>
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-24">
        <div className="container max-w-4xl">
          <div className="mb-16 text-center">
            <h2 className="mb-4 text-4xl font-bold">
              Frequently Asked Questions
            </h2>
            <p className="text-muted-foreground text-lg">
              Find answers to common questions about TrustYourInbox
            </p>
          </div>

          <div className="space-y-12">
            {faqCategories.map((category) => (
              <div key={category.title}>
                <h3 className="mb-6 flex items-center gap-3 text-2xl font-bold">
                  <div className="bg-primary h-1 w-8 rounded"></div>
                  {category.title}
                </h3>
                <div className="space-y-4">
                  {category.faqs.map((faq, index) => {
                    const faqId = `${category.title}-${index}`;
                    const isOpen = openFaq === faqId;
                    return (
                      <div
                        key={index}
                        className="border-border bg-background overflow-hidden rounded-md border"
                      >
                        <button
                          onClick={() => setOpenFaq(isOpen ? null : faqId)}
                          className="hover:bg-muted/50 flex w-full items-start justify-between gap-4 p-6 text-left transition-colors"
                        >
                          <div className="flex flex-1 items-start gap-3">
                            <CheckCircle className="text-primary mt-0.5 h-5 w-5 flex-shrink-0" />
                            <span className="font-semibold">
                              {faq.question}
                            </span>
                          </div>
                          <ChevronDown
                            className={`text-muted-foreground h-5 w-5 flex-shrink-0 transition-transform ${
                              isOpen ? "rotate-180" : ""
                            }`}
                          />
                        </button>
                        {isOpen && (
                          <div className="px-6 pb-6 pl-14">
                            <p className="text-muted-foreground leading-relaxed">
                              {faq.answer}
                            </p>
                          </div>
                        )}
                      </div>
                    );
                  })}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help CTA */}
      <section className="bg-secondary/30 py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Still need help?
            </h2>
            <p className="text-muted-foreground mb-8 text-lg">
              Our support team is here to help you succeed
            </p>
            <div className="flex flex-col justify-center gap-4 sm:flex-row">
              <Link
                href="/contact"
                className="bg-primary text-primary-foreground hover:bg-primary/90 inline-flex items-center justify-center rounded-lg px-8 py-3 text-sm font-semibold transition-colors"
              >
                Contact Support
              </Link>
              <Link
                href="/guides"
                className="border-border hover:bg-muted inline-flex items-center justify-center rounded-lg border px-8 py-3 text-sm font-semibold transition-colors"
              >
                Browse Guides
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
