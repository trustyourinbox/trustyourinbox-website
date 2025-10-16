"use client"

import Link from "next/link"
import { FileText, Calendar, Clock, ArrowRight, Shield, TrendingUp, AlertTriangle } from "lucide-react"

const featuredPost = {
  title: "DMARC Enforcement in 2025: What You Need to Know",
  excerpt: "Major email providers are tightening DMARC requirements. Learn how to prepare your domains and avoid email deliverability issues.",
  date: "2025-01-15",
  readTime: "8 min read",
  category: "Industry News",
  image: "/images/blog/featured.jpg",
}

const blogPosts = [
  {
    title: "How to Fix SPF 10 DNS Lookup Limit Errors",
    excerpt: "SPF records hitting the 10 DNS lookup limit? Here's how to optimize your SPF configuration and avoid authentication failures.",
    date: "2025-01-10",
    readTime: "6 min read",
    category: "Technical Guide",
    icon: AlertTriangle,
  },
  {
    title: "Understanding DMARC Aggregate Reports",
    excerpt: "Learn how to read and interpret DMARC aggregate reports to identify legitimate senders and potential threats.",
    date: "2025-01-05",
    readTime: "10 min read",
    category: "Best Practices",
    icon: Shield,
  },
  {
    title: "Email Authentication Trends 2025",
    excerpt: "The latest statistics on DMARC adoption, email spoofing attacks, and what businesses are doing to protect their domains.",
    date: "2024-12-28",
    readTime: "7 min read",
    category: "Industry News",
    icon: TrendingUp,
  },
  {
    title: "DKIM Signature Failures: Common Causes",
    excerpt: "Troubleshoot DKIM authentication failures with our comprehensive guide to common configuration mistakes and fixes.",
    date: "2024-12-20",
    readTime: "9 min read",
    category: "Technical Guide",
    icon: AlertTriangle,
  },
  {
    title: "Moving to DMARC p=reject: A Step-by-Step Guide",
    excerpt: "Ready to enforce DMARC? Follow our proven process to move from p=none to p=reject without breaking legitimate email flow.",
    date: "2024-12-15",
    readTime: "12 min read",
    category: "Best Practices",
    icon: Shield,
  },
  {
    title: "Third-Party Email Services and DMARC",
    excerpt: "Configure your marketing automation, CRM, and support platforms to work seamlessly with DMARC authentication.",
    date: "2024-12-10",
    readTime: "8 min read",
    category: "Technical Guide",
    icon: TrendingUp,
  },
]

const categories = ["All Posts", "Industry News", "Technical Guide", "Best Practices", "Case Studies"]

export default function BlogPage() {
  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="py-24 md:py-32 bg-gradient-to-b from-background to-secondary/30">
        <div className="container">
          <div className="mx-auto max-w-3xl text-center">
            <div className="inline-flex items-center rounded-full border border-primary/20 bg-primary/5 px-4 py-1.5 text-sm font-medium mb-6">
              <FileText className="h-4 w-4 mr-2 text-primary" />
              <span className="text-primary">Blog & Updates</span>
            </div>
            <h1 className="text-5xl md:text-6xl font-bold tracking-tight mb-6">
              Email Security <span className="text-primary">Insights</span>
            </h1>
            <p className="text-xl text-muted-foreground leading-relaxed">
              Stay updated with the latest in DMARC, email authentication, and domain security. Expert guides, industry news, and best practices.
            </p>
          </div>
        </div>
      </section>

      {/* Featured Post */}
      <section className="py-12 -mt-12">
        <div className="container">
          <Link
            href="#"
            className="group relative block overflow-hidden rounded-2xl border-2 border-primary/20 bg-gradient-to-br from-background/50 to-background backdrop-blur-xl shadow-2xl hover:border-primary/40 transition-all"
          >
            <div className="grid lg:grid-cols-2 gap-8 p-8 md:p-12">
              {/* Content */}
              <div className="flex flex-col justify-center">
                <div className="inline-flex items-center gap-2 text-sm font-medium text-primary mb-4">
                  <div className="h-2 w-2 rounded-full bg-primary animate-pulse"></div>
                  Featured Post
                </div>
                <h2 className="text-3xl md:text-4xl font-bold mb-4 group-hover:text-primary transition-colors">
                  {featuredPost.title}
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  {featuredPost.excerpt}
                </p>
                <div className="flex items-center gap-6 text-sm text-muted-foreground">
                  <div className="flex items-center gap-2">
                    <Calendar className="h-4 w-4" />
                    <span>{new Date(featuredPost.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' })}</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Clock className="h-4 w-4" />
                    <span>{featuredPost.readTime}</span>
                  </div>
                </div>
                <div className="mt-6 inline-flex items-center text-primary font-medium group-hover:gap-3 transition-all">
                  <span>Read Article</span>
                  <ArrowRight className="h-5 w-5 ml-2 group-hover:translate-x-1 transition-transform" />
                </div>
              </div>

              {/* Image Placeholder */}
              <div className="relative rounded-xl bg-gradient-to-br from-primary/10 to-accent-hover/10 aspect-video lg:aspect-auto min-h-[300px] overflow-hidden">
                <div className="absolute inset-0 flex items-center justify-center">
                  <Shield className="h-24 w-24 text-primary/20" />
                </div>
              </div>
            </div>
          </Link>
        </div>
      </section>

      {/* Category Filter */}
      <section className="py-8 border-y border-border">
        <div className="container">
          <div className="flex items-center justify-center gap-4 flex-wrap">
            {categories.map((category) => (
              <button
                key={category}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all ${
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
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => {
              const Icon = post.icon
              return (
                <Link
                  key={post.title}
                  href="#"
                  className="group flex flex-col rounded-2xl border border-border bg-background p-6 transition-all duration-300 hover:shadow-xl hover:border-primary/30 hover:-translate-y-1"
                >
                  {/* Icon & Category */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="inline-flex p-2 rounded-lg bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <Icon className="h-5 w-5 text-primary" />
                    </div>
                    <span className="text-xs font-medium text-muted-foreground px-3 py-1 rounded-full border border-border">
                      {post.category}
                    </span>
                  </div>

                  {/* Content */}
                  <h3 className="text-xl font-bold mb-3 group-hover:text-primary transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-muted-foreground mb-4 flex-grow">
                    {post.excerpt}
                  </p>

                  {/* Meta */}
                  <div className="flex items-center gap-4 text-sm text-muted-foreground pt-4 border-t border-border">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-3 w-3" />
                      <span>{new Date(post.date).toLocaleDateString('en-US', { month: 'short', day: 'numeric' })}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{post.readTime}</span>
                    </div>
                  </div>

                  {/* Read More */}
                  <div className="mt-4 inline-flex items-center text-sm font-medium text-primary opacity-0 group-hover:opacity-100 transition-opacity">
                    <span>Read more</span>
                    <ArrowRight className="h-4 w-4 ml-1 transition-transform group-hover:translate-x-1" />
                  </div>
                </Link>
              )
            })}
          </div>

          {/* Load More */}
          <div className="mt-12 text-center">
            <button className="px-8 py-3 rounded-lg border border-border hover:bg-muted transition-colors font-medium">
              Load More Posts
            </button>
          </div>
        </div>
      </section>

      {/* Newsletter CTA */}
      <section className="py-24 bg-secondary/30">
        <div className="container">
          <div className="mx-auto max-w-2xl text-center">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">
              Stay Updated
            </h2>
            <p className="text-lg text-muted-foreground mb-8">
              Get the latest email security insights, DMARC updates, and best practices delivered to your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 h-12 px-4 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-primary focus:border-transparent"
              />
              <button className="px-6 h-12 rounded-lg bg-primary text-primary-foreground font-medium hover:bg-primary/90 transition-colors">
                Subscribe
              </button>
            </div>
            <p className="text-xs text-muted-foreground mt-4">
              No spam. Unsubscribe anytime.
            </p>
          </div>
        </div>
      </section>
    </div>
  )
}
