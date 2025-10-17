"use client";

import Link from "next/link";
import {
  FileText,
  Calendar,
  Clock,
  ArrowRight,
  Shield,
  TrendingUp,
  AlertTriangle,
} from "lucide-react";

const featuredPost = {
  title: "DMARC Enforcement in 2025: What You Need to Know",
  excerpt:
    "Major email providers are tightening DMARC requirements. Learn how to prepare your domains and avoid email deliverability issues.",
  date: "2025-01-15",
  readTime: "8 min read",
  category: "Industry News",
  image: "/images/blog/featured.jpg",
};

const blogPosts = [
  {
    title: "How to Fix SPF 10 DNS Lookup Limit Errors",
    excerpt:
      "SPF records hitting the 10 DNS lookup limit? Here's how to optimize your SPF configuration and avoid authentication failures.",
    date: "2025-01-10",
    readTime: "6 min read",
    category: "Technical Guide",
    icon: AlertTriangle,
  },
  {
    title: "Understanding DMARC Aggregate Reports",
    excerpt:
      "Learn how to read and interpret DMARC aggregate reports to identify legitimate senders and potential threats.",
    date: "2025-01-05",
    readTime: "10 min read",
    category: "Best Practices",
    icon: Shield,
  },
  {
    title: "Email Authentication Trends 2025",
    excerpt:
      "The latest statistics on DMARC adoption, email spoofing attacks, and what businesses are doing to protect their domains.",
    date: "2024-12-28",
    readTime: "7 min read",
    category: "Industry News",
    icon: TrendingUp,
  },
  {
    title: "DKIM Signature Failures: Common Causes",
    excerpt:
      "Troubleshoot DKIM authentication failures with our comprehensive guide to common configuration mistakes and fixes.",
    date: "2024-12-20",
    readTime: "9 min read",
    category: "Technical Guide",
    icon: AlertTriangle,
  },
  {
    title: "Moving to DMARC p=reject: A Step-by-Step Guide",
    excerpt:
      "Ready to enforce DMARC? Follow our proven process to move from p=none to p=reject without breaking legitimate email flow.",
    date: "2024-12-15",
    readTime: "12 min read",
    category: "Best Practices",
    icon: Shield,
  },
  {
    title: "Third-Party Email Services and DMARC",
    excerpt:
      "Configure your marketing automation, CRM, and support platforms to work seamlessly with DMARC authentication.",
    date: "2024-12-10",
    readTime: "8 min read",
    category: "Technical Guide",
    icon: TrendingUp,
  },
];

const categories = [
  "All Posts",
  "Industry News",
  "Technical Guide",
  "Best Practices",
  "Case Studies",
];

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="bg-gradient-to-b from-background to-secondary/30 py-24 md:py-32">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="mb-6 inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium">
              <FileText className="mr-2 h-4 w-4 text-primary" />
              <span className="text-primary">Blog & Updates</span>
            </div>
            <h1 className="mb-6 text-5xl font-bold tracking-tight md:text-6xl">
              Email Security <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl leading-relaxed text-muted-foreground">
              Stay updated with the latest in DMARC, email authentication, and
              domain security. Expert guides, industry news, and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="-mt-12 py-12">
        <div className="container">
          <Link
            href="#"
            className="group relative block overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-background/50 to-background shadow-2xl backdrop-blur-xl transition-all hover:border-primary/40"
          >
            <div className="grid gap-8 p-8 md:p-12 lg:grid-cols-2">
              {/* Content */}
              <div className="flex flex-col justify-center">
                <div className="mb-4 inline-flex items-center gap-2 text-sm font-medium text-primary">
                  <div className="h-2 w-2 animate-pulse rounded-full bg-primary"></div>
                  Featured Post
                </div>
                <h2 className="mb-4 text-3xl font-bold transition-colors group-hover:text-primary md:text-4xl">
                  {featuredPost.title}
                </h2>
                <p className="mb-6 text-lg text-muted-foreground">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>
                      {new Date(featuredPost.date).toLocaleDateString("en-US", {
                        month: "long",
                        day: "numeric",
                        year: "numeric",
                      })}
                    </span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <div className="mt-6 inline-flex items-center font-medium text-primary transition-all group-hover:gap-3">
                  <span>Read Article</span>
                  <ArrowRight className="ml-2 h-5 w-5 transition-transform group-hover:translate-x-1" />
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="to-accent-hover/10 relative aspect-video min-h-[300px] overflow-hidden rounded-xl bg-gradient-to-br from-primary/10 lg:aspect-auto">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="h-24 w-24 text-primary/20" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Category Filter */}
      <section className="border-y border-border py-8">
        <div className="container">
          <div className="flex flex-wrap items-center justify-center gap-4">
            {categories.map((category) => (
              <button
                key={category}
                className={`rounded-lg px-4 py-2 text-sm font-medium transition-all ${
                  category === "All Posts"
                    ? "bg-primary text-primary-foreground"
                    : "bg-secondary hover:bg-secondary/80"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Grid */}
      <section className="py-24">
        <div className="container">
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {blogPosts.map((post) => {
              const Icon = post.icon;
              return (
                <Link
                  key={post.title}
                  href="#"
                  className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:-translate-y-1 hover:border-primary/30 hover:shadow-xl"
                >
                  {/* Icon & Category */}
                  <div className="mb-4 flex items-center justify-between">
                    <div className="inline-flex rounded-lg bg-primary/10 p-2 transition-colors group-hover:bg-primary/20">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="rounded-full border border-border px-3 py-1 text-xs font-medium text-muted-foreground">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="mb-3 text-xl font-bold transition-colors group-hover:text-primary">
                    {post.title}
                  </h3>
                  <p className="mb-4 flex-grow text-muted-foreground">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 border-t border-border pt-4 text-sm text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>
                        {new Date(post.date).toLocaleDateString("en-US", {
                          month: "short",
                          day: "numeric",
                        })}
                      </span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="mt-4 inline-flex items-center text-sm font-medium text-primary opacity-0 transition-opacity group-hover:opacity-100">
                    <span>Read more</span>
                    <ArrowRight className="ml-1 h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              );
            })}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="rounded-lg border border-border px-8 py-3 font-medium transition-colors hover:bg-muted">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="bg-secondary/30 py-24">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="mb-4 text-3xl font-bold md:text-4xl">
              Stay Updated
            </h2>
            <p className="mb-8 text-lg text-muted-foreground">
              Get the latest email security insights, DMARC updates, and best
              practices delivered to your inbox.
            </p>
            <div className="mx-auto flex max-w-md flex-col justify-center gap-4 sm:flex-row">
              <input
                type="email"
                placeholder="Enter your email"
                className="h-12 flex-1 rounded-lg border border-border bg-background px-4 focus:border-transparent focus:outline-none focus:ring-2 focus:ring-primary"
              />
              <button className="h-12 rounded-lg bg-primary px-6 font-medium text-primary-foreground transition-colors hover:bg-primary/90">
                Subscribe
              </button>
            </div>
            <p className="mt-4 text-xs text-muted-foreground">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
