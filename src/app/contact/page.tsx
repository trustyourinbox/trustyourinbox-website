"use client"

import { useState } from "react"
import { Mail, Phone, MapPin, Send } from "lucide-react"
import { Button } from "@/components/ui/Button"

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  })

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    // TODO: Implement form submission
    console.log("Form submitted:", formData)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    })
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium mb-6">
              <Mail className="h-4 w-4 mr-2 text-primary" />
              <span className="text-primary">Get In Touch</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Contact <span className="text-primary">Our Team</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Have questions about TrustYourInbox? We&apos;re here to help. Reach out to our team and we&apos;ll get back to you as soon as possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label htmlFor="name" className="block text-sm font-medium mb-2">
                    Name
                  </label>
                  <input
                    type="text"
                    id="name"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    required
                    className="input w-full"
                    placeholder="Your name"
                  />
                </div>

                <div>
                  <label htmlFor="email" className="block text-sm font-medium mb-2">
                    Email
                  </label>
                  <input
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                    className="input w-full"
                    placeholder="your@email.com"
                  />
                </div>

                <div>
                  <label htmlFor="company" className="block text-sm font-medium mb-2">
                    Company
                  </label>
                  <input
                    type="text"
                    id="company"
                    name="company"
                    value={formData.company}
                    onChange={handleChange}
                    className="input w-full"
                    placeholder="Your company name"
                  />
                </div>

                <div>
                  <label htmlFor="message" className="block text-sm font-medium mb-2">
                    Message
                  </label>
                  <textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="input w-full resize-none"
                    placeholder="Tell us how we can help..."
                  />
                </div>

                <Button type="submit" size="lg" className="w-full gap-2">
                  <Send className="h-5 w-5" />
                  Send Message
                </Button>
              </form>
            </div>

            {/* Contact Info */}
            <div>
              <h2 className="text-3xl font-bold mb-6">Get In Touch</h2>
              <div className="space-y-6 mb-12">
                <div className="flex items-start gap-4">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Email</h3>
                    <a
                      href="mailto:support@trustyourinbox.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      support@trustyourinbox.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10">
                    <Phone className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Phone</h3>
                    <a
                      href="tel:+1-800-123-4567"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +1 (800) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="inline-flex p-3 rounded-xl bg-primary/10">
                    <MapPin className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1">Office</h3>
                    <p className="text-muted-foreground">
                      123 Security Street
                      <br />
                      San Francisco, CA 94105
                      <br />
                      United States
                    </p>
                  </div>
                </div>
              </div>

              {/* FAQ Quick Links */}
              <div className="rounded-2xl border border-border bg-secondary/30 p-8">
                <h3 className="text-xl font-bold mb-4">Looking for Quick Answers?</h3>
                <p className="text-muted-foreground mb-6">
                  Check out our resources for immediate help:
                </p>
                <div className="space-y-3">
                  <a
                    href="/docs"
                    className="block text-sm font-medium text-primary hover:underline"
                  >
                    → Documentation
                  </a>
                  <a
                    href="/guides"
                    className="block text-sm font-medium text-primary hover:underline"
                  >
                    → DMARC Guides
                  </a>
                  <a
                    href="/support"
                    className="block text-sm font-medium text-primary hover:underline"
                  >
                    → Support Center
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
}
