"use client";

import {
  BarChart3,
  BookOpen,
  Calculator,
  FileCheck,
  History,
  Lock,
  Mail,
  Shield,
  Users,
  Zap,
  AlertTriangle,
  CheckCircle,
  ArrowRight,
} from "lucide-react";
import { Badge } from "@/components/ui/Badge";
import { Button } from "@/components/ui/Button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/Card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs";
import { useState } from "react";

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState("learning");

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
        <div className="container relative z-10">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge className="mb-4" variant="outline">
              Email Security Platform
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight text-foreground sm:text-5xl md:text-6xl">
              Powerful Features for Email Security
            </h1>
            <p className="mb-8 text-xl text-muted-foreground">
              Comprehensive tools and features to protect your domain from email
              spoofing and ensure secure email delivery.
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              <Button size="lg" className="rounded-full">
                Get Started
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
              <Button size="lg" variant="outline" className="rounded-full">
                Schedule Demo
              </Button>
            </div>
          </div>
        </div>
        <div className="bg-grid-white/10 absolute inset-0 bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,white)]"></div>
      </section>

      {/* Core Features Grid */}
      <section className="bg-background py-12">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="mb-8 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Core Security Features
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 */}
            <Card className="border border-slate-200 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-secondary">
                  <Shield className="h-5 w-5 text-primary" />
                </div>
                <CardTitle className="text-lg">Email Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Comprehensive SPF and DKIM monitoring to ensure your emails
                  are properly authenticated and delivered.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="h-auto p-0 text-primary hover:text-primary"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Feature 2 */}
            <Card className="border border-slate-200 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-purple-50">
                  <BarChart3 className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Real-time Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Get detailed insights into your email authentication status
                  with our advanced analytics dashboard.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="h-auto p-0 text-purple-600 hover:text-purple-700"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Feature 3 */}
            <Card className="border border-slate-200 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-red-50">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
                <CardTitle className="text-lg">Threat Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Advanced detection of email spoofing attempts and potential
                  security threats to your domain.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="h-auto p-0 text-red-600 hover:text-red-700"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Feature 4 */}
            <Card className="border border-slate-200 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-amber-50">
                  <Zap className="h-5 w-5 text-amber-600" />
                </div>
                <CardTitle className="text-lg">Automated Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  24/7 automated monitoring of your email authentication status
                  with instant alerts.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="h-auto p-0 text-amber-600 hover:text-amber-700"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Feature 5 */}
            <Card className="border border-slate-200 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-emerald-50">
                  <Lock className="h-5 w-5 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">Security Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Meet industry standards and compliance requirements with our
                  comprehensive security features.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="h-auto p-0 text-emerald-600 hover:text-emerald-700"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Feature 6 */}
            <Card className="border border-slate-200 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-cyan-50">
                  <Users className="h-5 w-5 text-cyan-600" />
                </div>
                <CardTitle className="text-lg">Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Work together with your team to manage and monitor email
                  security effectively.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="h-auto p-0 text-cyan-600 hover:text-cyan-700"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Feature 7 */}
            <Card className="border border-slate-200 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="mb-3 flex h-10 w-10 items-center justify-center rounded-lg bg-slate-50">
                  <History className="h-5 w-5 text-slate-600" />
                </div>
                <CardTitle className="text-lg">Historical Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">
                  Track and analyze historical data to identify patterns and
                  improve your email security.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="h-auto p-0 text-slate-600 hover:text-slate-700"
                >
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Resource Hub Section */}
      <section className="bg-muted/30 py-12">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <h2 className="mb-4 text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
              Email Security Resource Hub
            </h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about email authentication and domain
              security
            </p>
          </div>

          <Tabs
            value={activeTab}
            onValueChange={setActiveTab}
            className="w-full"
          >
            <TabsList className="mb-8 grid w-full grid-cols-3">
              <TabsTrigger value="learning">Learning Center</TabsTrigger>
              <TabsTrigger value="tools">Tools & Calculators</TabsTrigger>
              <TabsTrigger value="compliance">
                Compliance & Standards
              </TabsTrigger>
            </TabsList>
            <TabsContent
              value="learning"
              className="rounded-lg bg-background p-6 shadow-sm"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex items-start gap-3 rounded-lg bg-background p-4 shadow-sm">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <CheckCircle className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold">
                      SPF & DKIM Best Practices
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Learn how to properly configure SPF and DKIM for maximum
                      security.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg bg-background p-4 shadow-sm">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Mail className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold">
                      Email Authentication 101
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      The fundamentals of email authentication protocols
                      explained.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg bg-background p-4 shadow-sm">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-primary/10">
                    <Shield className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold">
                      Phishing Prevention Guide
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Strategies to protect your organization from phishing
                      attacks.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tools"
              className="rounded-lg bg-background p-6 shadow-sm"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex items-start gap-3 rounded-lg bg-background p-4 shadow-sm">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
                    <FileCheck className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold">
                      SPF Record Validator
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Check if your SPF record is correctly configured.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg bg-background p-4 shadow-sm">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
                    <Calculator className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold">
                      Email Security Score Calculator
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Get a security score for your domain&#39;s email
                      configuration.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg bg-background p-4 shadow-sm">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
                    <Calculator className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold">
                      ROI Calculator
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Calculate the return on investment for email security
                      measures.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="compliance"
              className="rounded-lg bg-background p-6 shadow-sm"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="flex items-start gap-3 rounded-lg bg-background p-4 shadow-sm">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <FileCheck className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold">
                      GDPR Compliance Guide
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      How email authentication helps with GDPR compliance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg bg-background p-4 shadow-sm">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <FileCheck className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold">
                      HIPAA Email Requirements
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Email security requirements for healthcare organizations.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg bg-background p-4 shadow-sm">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <Lock className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold">
                      PCI DSS Email Security
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Email security requirements for PCI DSS compliance.
                    </p>
                  </div>
                </div>
                <div className="flex items-start gap-3 rounded-lg bg-background p-4 shadow-sm">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold">
                      Industry Best Practices
                    </h3>
                    <p className="text-xs text-muted-foreground">
                      Email security best practices across different industries.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </section>

      {/* Success Stories & Updates */}
      <section className="bg-background py-12">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Success Stories */}
            <div>
              <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Success Stories
              </h2>
              <div className="space-y-8">
                <div className="rounded-lg border-l-4 border-primary bg-muted/30 p-6">
                  <p className="mb-4 italic text-muted-foreground">
                    &ldquo;TrustYourInbox helped us achieve 100% email
                    authentication compliance within weeks, significantly
                    reducing our email spoofing incidents.&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="mr-3 h-10 w-10 rounded-full bg-slate-200"></div>
                    <div>
                      <p className="font-medium">Financial Services Company</p>
                    </div>
                  </div>
                </div>
                <div className="rounded-lg border-l-4 border-primary bg-muted/30 p-6">
                  <p className="mb-4 italic text-muted-foreground">
                    &ldquo;The automated monitoring and alerts have been
                    invaluable in protecting our brand reputation.&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="mr-3 h-10 w-10 rounded-full bg-slate-200"></div>
                    <div>
                      <p className="font-medium">E-commerce Platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Latest Updates */}
            <div>
              <h2 className="mb-8 text-2xl font-bold tracking-tight text-foreground sm:text-3xl">
                Latest Updates
              </h2>
              <div className="space-y-6">
                <div className="border-b pb-6">
                  <div className="mb-2 flex items-center">
                    <Badge variant="outline" className="text-xs">
                      March 2024
                    </Badge>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    New AI-Powered Threat Detection
                  </h3>
                  <p className="text-muted-foreground">
                    Enhanced machine learning algorithms for better phishing
                    detection.
                  </p>
                </div>
                <div className="border-b pb-6">
                  <div className="mb-2 flex items-center">
                    <Badge variant="outline" className="text-xs">
                      February 2024
                    </Badge>
                  </div>
                  <h3 className="mb-2 text-lg font-semibold">
                    Advanced Analytics Dashboard
                  </h3>
                  <p className="text-muted-foreground">
                    New insights and reporting capabilities added.
                  </p>
                </div>
                <div>
                  <Button variant="outline" className="w-full">
                    View All Updates
                  </Button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Comprehensive Solution */}
      <section className="bg-gradient-to-b from-muted/30 to-background py-12">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="mb-16 text-center text-2xl font-bold tracking-tight text-foreground sm:text-3xl md:text-4xl">
            Comprehensive Email Security Solution
          </h2>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                Email Authentication Monitoring
              </h3>
              <p className="text-muted-foreground">
                Monitor your email authentication status with detailed reports
                and insights. Track authentication rates, identify issues, and
                improve your email deliverability.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-6 w-6 flex-shrink-0 text-green-500" />
                  <span>Real-time authentication analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-6 w-6 flex-shrink-0 text-green-500" />
                  <span>Detailed delivery metrics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="mr-2 h-6 w-6 flex-shrink-0 text-green-500" />
                  <span>Automated security recommendations</span>
                </li>
              </ul>
              <Button size="lg" className="rounded-full">
                Start Monitoring
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="rounded-xl bg-background p-8 shadow-lg">
              <div className="mb-6 flex h-64 w-full items-center justify-center rounded-lg bg-muted">
                <BarChart3 className="h-16 w-16 text-muted-foreground" />
              </div>
              <h3 className="mb-4 text-2xl font-bold tracking-tight text-primary sm:text-3xl">
                Analytics Dashboard
              </h3>
              <p className="text-muted-foreground">
                Get a comprehensive view of your email authentication status
                with our intuitive dashboard.
              </p>
              <Button variant="outline" className="mt-4 w-full">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
