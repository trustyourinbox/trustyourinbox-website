"use client";

import { useState } from "react";
import { Mail, Phone, MapPin, Send } from "lucide-react";
import { Button } from "@/components/ui/Button";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    company: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement form submission
    console.log("Form submitted:", formData);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Hero Section */}
      <section className="from-background to-secondary/30 bg-gradient-to-b py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="border-primary/20 bg-primary/5 mb-6 inline-flex items-center rounded-full border px-4 py-1.5 text-sm font-medium">
              <Mail className="text-primary mr-2 h-4 w-4" />
              <span className="text-primary">Get In Touch</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
              Contact <span className="text-primary">Our Team</span>
            </h1>
            <p className="text-muted-foreground text-xl leading-relaxed">
              Have questions about TrustYourInbox? We&apos;re here to help.
              Reach out to our team and we&apos;ll get back to you as soon as
              possible.
            </p>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-12 lg:grid-cols-2">
            {/* Contact Form */}
            <div>
              <h2 className="mb-6 text-3xl font-bold">Send Us a Message</h2>
              <form onSubmit={handleSubmit} className="space-y-6">
                <div>
                  <label
                    htmlFor="name"
                    className="mb-2 block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="email"
                    className="mb-2 block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="company"
                    className="mb-2 block text-sm font-medium"
                  >
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
                  <label
                    htmlFor="message"
                    className="mb-2 block text-sm font-medium"
                  >
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
              <h2 className="mb-6 text-3xl font-bold">Get In Touch</h2>
              <div className="mb-12 space-y-6">
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 inline-flex rounded-md p-3">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Email</h3>
                    <a
                      href="mailto:support@trustyourinbox.com"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      support@trustyourinbox.com
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 inline-flex rounded-md p-3">
                    <Phone className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Phone</h3>
                    <a
                      href="tel:+1-800-123-4567"
                      className="text-muted-foreground hover:text-primary transition-colors"
                    >
                      +1 (800) 123-4567
                    </a>
                  </div>
                </div>

                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 inline-flex rounded-md p-3">
                    <MapPin className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 font-semibold">Office</h3>
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
              <div className="border-border bg-secondary/30 rounded-lg border p-8">
                <h3 className="mb-4 text-xl font-bold">
                  Looking for Quick Answers?
                </h3>
                <p className="text-muted-foreground mb-6">
                  Check out our resources for immediate help:
                </p>
                <div className="space-y-3">
                  <a
                    href="/docs"
                    className="text-primary block text-sm font-medium hover:underline"
                  >
                    → Documentation
                  </a>
                  <a
                    href="/guides"
                    className="text-primary block text-sm font-medium hover:underline"
                  >
                    → DMARC Guides
                  </a>
                  <a
                    href="/support"
                    className="text-primary block text-sm font-medium hover:underline"
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
  );
}
