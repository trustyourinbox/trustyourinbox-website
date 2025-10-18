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
    <div className="bg-background min-h-screen font-sans">
      {/* Hero Section */}
      <section className="from-background to-muted/30 relative overflow-hidden bg-gradient-to-b py-16 md:py-24">
        <div className="relative z-10 container">
          <div className="mx-auto mb-16 max-w-3xl text-center">
            <Badge className="mb-4" variant="outline">
              Email Security Platform
            </Badge>
            <h1 className="text-foreground text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl">
              Powerful Features for Email Security
            </h1>
            <p className="text-muted-foreground mb-8 text-xl">
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
        <div className="bg-grid-white/10 absolute inset-0 [mask-image:linear-gradient(to_bottom,transparent,white)] bg-[bottom_1px_center]"></div>
      </section>

      {/* Core Features Grid */}
      <section className="bg-background py-12">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-foreground mb-8 text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Core Security Features
          </h2>
          <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-4">
            {/* Feature 1 */}
            <Card className="border border-slate-200 shadow-sm transition-shadow duration-300 hover:shadow-md">
              <CardHeader className="pb-2">
                <div className="bg-secondary mb-3 flex h-10 w-10 items-center justify-center rounded-lg">
                  <Shield className="text-primary h-5 w-5" />
                </div>
                <CardTitle className="text-lg">Email Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Comprehensive SPF and DKIM monitoring to ensure your emails
                  are properly authenticated and delivered.
                </p>
              </CardContent>
              <CardFooter>
                <Button
                  variant="ghost"
                  className="text-primary hover:text-primary h-auto p-0"
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
                <p className="text-muted-foreground text-sm">
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
                <p className="text-muted-foreground text-sm">
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
                <p className="text-muted-foreground text-sm">
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
                <p className="text-muted-foreground text-sm">
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
                <p className="text-muted-foreground text-sm">
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
                <p className="text-muted-foreground text-sm">
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
            <h2 className="text-foreground mb-4 text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
              Email Security Resource Hub
            </h2>
            <p className="text-muted-foreground text-lg">
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
              className="bg-background rounded-lg p-6 shadow-sm"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="bg-background flex items-start gap-3 rounded-lg p-4 shadow-sm">
                  <div className="bg-primary/10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full">
                    <CheckCircle className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold">
                      SPF & DKIM Best Practices
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      Learn how to properly configure SPF and DKIM for maximum
                      security.
                    </p>
                  </div>
                </div>
                <div className="bg-background flex items-start gap-3 rounded-lg p-4 shadow-sm">
                  <div className="bg-primary/10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full">
                    <Mail className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold">
                      Email Authentication 101
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      The fundamentals of email authentication protocols
                      explained.
                    </p>
                  </div>
                </div>
                <div className="bg-background flex items-start gap-3 rounded-lg p-4 shadow-sm">
                  <div className="bg-primary/10 flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full">
                    <Shield className="text-primary h-5 w-5" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold">
                      Phishing Prevention Guide
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      Strategies to protect your organization from phishing
                      attacks.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="tools"
              className="bg-background rounded-lg p-6 shadow-sm"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="bg-background flex items-start gap-3 rounded-lg p-4 shadow-sm">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
                    <FileCheck className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold">
                      SPF Record Validator
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      Check if your SPF record is correctly configured.
                    </p>
                  </div>
                </div>
                <div className="bg-background flex items-start gap-3 rounded-lg p-4 shadow-sm">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
                    <Calculator className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold">
                      Email Security Score Calculator
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      Get a security score for your domain&#39;s email
                      configuration.
                    </p>
                  </div>
                </div>
                <div className="bg-background flex items-start gap-3 rounded-lg p-4 shadow-sm">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-purple-100">
                    <Calculator className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold">
                      ROI Calculator
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      Calculate the return on investment for email security
                      measures.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent
              value="compliance"
              className="bg-background rounded-lg p-6 shadow-sm"
            >
              <div className="grid grid-cols-1 gap-8 md:grid-cols-2">
                <div className="bg-background flex items-start gap-3 rounded-lg p-4 shadow-sm">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <FileCheck className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold">
                      GDPR Compliance Guide
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      How email authentication helps with GDPR compliance.
                    </p>
                  </div>
                </div>
                <div className="bg-background flex items-start gap-3 rounded-lg p-4 shadow-sm">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <FileCheck className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold">
                      HIPAA Email Requirements
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      Email security requirements for healthcare organizations.
                    </p>
                  </div>
                </div>
                <div className="bg-background flex items-start gap-3 rounded-lg p-4 shadow-sm">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <Lock className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold">
                      PCI DSS Email Security
                    </h3>
                    <p className="text-muted-foreground text-xs">
                      Email security requirements for PCI DSS compliance.
                    </p>
                  </div>
                </div>
                <div className="bg-background flex items-start gap-3 rounded-lg p-4 shadow-sm">
                  <div className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-emerald-100">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="mb-1 text-base font-semibold">
                      Industry Best Practices
                    </h3>
                    <p className="text-muted-foreground text-xs">
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
              <h2 className="text-foreground mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
                Success Stories
              </h2>
              <div className="space-y-8">
                <div className="border-primary bg-muted/30 rounded-lg border-l-4 p-6">
                  <p className="text-muted-foreground mb-4 italic">
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
                <div className="border-primary bg-muted/30 rounded-lg border-l-4 p-6">
                  <p className="text-muted-foreground mb-4 italic">
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
              <h2 className="text-foreground mb-8 text-2xl font-bold tracking-tight sm:text-3xl">
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
      <section className="from-muted/30 to-background bg-gradient-to-b py-12">
        <div className="container mx-auto max-w-7xl px-4 md:px-6 lg:px-8">
          <h2 className="text-foreground mb-16 text-center text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl">
            Comprehensive Email Security Solution
          </h2>
          <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-2">
            <div className="space-y-8">
              <h3 className="text-primary text-2xl font-bold tracking-tight sm:text-3xl">
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
            <div className="bg-background rounded-md p-8 shadow-lg">
              <div className="bg-muted mb-6 flex h-64 w-full items-center justify-center rounded-lg">
                <BarChart3 className="text-muted-foreground h-16 w-16" />
              </div>
              <h3 className="text-primary mb-4 text-2xl font-bold tracking-tight sm:text-3xl">
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
