"use client"

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
} from "lucide-react"
import { Badge } from "@/components/ui/Badge"
import { Button } from "@/components/ui/Button"
import { Card, CardContent, CardFooter, CardHeader, CardTitle } from "@/components/ui/Card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/Tabs"
import { useState } from "react"

export default function FeaturesPage() {
  const [activeTab, setActiveTab] = useState("learning")

  return (
    <div className="min-h-screen bg-background font-sans">
      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-b from-background to-muted/30 py-16 md:py-24">
        <div className="container relative z-10">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <Badge className="mb-4" variant="outline">
              Email Security Platform
            </Badge>
            <h1 className="text-4xl font-bold tracking-tight sm:text-5xl md:text-6xl bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent">
              Powerful Features for Email Security
            </h1>
            <p className="text-xl text-muted-foreground mb-8">
              Comprehensive tools and features to protect your domain from email spoofing and ensure secure email
              delivery.
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
        <div className="absolute inset-0 bg-grid-white/10 bg-[bottom_1px_center] [mask-image:linear-gradient(to_bottom,transparent,white)]"></div>
      </section>

      {/* Core Features Grid */}
      <section className="py-12 bg-background">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-center mb-8 bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent">Core Security Features</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
            {/* Feature 1 */}
            <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-lg bg-blue-50 flex items-center justify-center mb-3">
                  <Shield className="h-5 w-5 text-blue-600" />
                </div>
                <CardTitle className="text-lg">Email Authentication</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Comprehensive SPF and DKIM monitoring to ensure your emails are properly authenticated and delivered.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto text-blue-600 hover:text-blue-700">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Feature 2 */}
            <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-lg bg-purple-50 flex items-center justify-center mb-3">
                  <BarChart3 className="h-5 w-5 text-purple-600" />
                </div>
                <CardTitle className="text-lg">Real-time Analytics</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Get detailed insights into your email authentication status with our advanced analytics dashboard.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto text-purple-600 hover:text-purple-700">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Feature 3 */}
            <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-lg bg-red-50 flex items-center justify-center mb-3">
                  <AlertTriangle className="h-5 w-5 text-red-600" />
                </div>
                <CardTitle className="text-lg">Threat Detection</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Advanced detection of email spoofing attempts and potential security threats to your domain.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto text-red-600 hover:text-red-700">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Feature 4 */}
            <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-lg bg-amber-50 flex items-center justify-center mb-3">
                  <Zap className="h-5 w-5 text-amber-600" />
                </div>
                <CardTitle className="text-lg">Automated Monitoring</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  24/7 automated monitoring of your email authentication status with instant alerts.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto text-amber-600 hover:text-amber-700">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Feature 5 */}
            <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-lg bg-emerald-50 flex items-center justify-center mb-3">
                  <Lock className="h-5 w-5 text-emerald-600" />
                </div>
                <CardTitle className="text-lg">Security Compliance</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Meet industry standards and compliance requirements with our comprehensive security features.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto text-emerald-600 hover:text-emerald-700">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Feature 6 */}
            <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-lg bg-cyan-50 flex items-center justify-center mb-3">
                  <Users className="h-5 w-5 text-cyan-600" />
                </div>
                <CardTitle className="text-lg">Team Collaboration</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Work together with your team to manage and monitor email security effectively.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto text-cyan-600 hover:text-cyan-700">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>

            {/* Feature 7 */}
            <Card className="border border-slate-200 shadow-sm hover:shadow-md transition-shadow duration-300">
              <CardHeader className="pb-2">
                <div className="w-10 h-10 rounded-lg bg-slate-50 flex items-center justify-center mb-3">
                  <History className="h-5 w-5 text-slate-600" />
                </div>
                <CardTitle className="text-lg">Historical Analysis</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground text-sm">
                  Track and analyze historical data to identify patterns and improve your email security.
                </p>
              </CardContent>
              <CardFooter>
                <Button variant="ghost" className="p-0 h-auto text-slate-600 hover:text-slate-700">
                  Learn more <ArrowRight className="ml-1 h-4 w-4" />
                </Button>
              </CardFooter>
            </Card>
          </div>
        </div>
      </section>

      {/* Resource Hub Section */}
      <section className="py-12 bg-muted/30">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl mb-4 bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent">Email Security Resource Hub</h2>
            <p className="text-lg text-muted-foreground">
              Everything you need to know about email authentication and domain security
            </p>
          </div>

          <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
            <TabsList className="grid w-full grid-cols-3 mb-8">
              <TabsTrigger value="learning">Learning Center</TabsTrigger>
              <TabsTrigger value="tools">Tools & Calculators</TabsTrigger>
              <TabsTrigger value="compliance">Compliance & Standards</TabsTrigger>
            </TabsList>
            <TabsContent value="learning" className="p-6 bg-background rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-background rounded-lg shadow-sm p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-base">SPF & DKIM Best Practices</h3>
                    <p className="text-muted-foreground text-xs">
                      Learn how to properly configure SPF and DKIM for maximum security.
                    </p>
                  </div>
                </div>
                <div className="bg-background rounded-lg shadow-sm p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Mail className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-base">Email Authentication 101</h3>
                    <p className="text-muted-foreground text-xs">
                      The fundamentals of email authentication protocols explained.
                    </p>
                  </div>
                </div>
                <div className="bg-background rounded-lg shadow-sm p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-blue-100 flex items-center justify-center flex-shrink-0">
                    <Shield className="h-5 w-5 text-blue-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-base">Phishing Prevention Guide</h3>
                    <p className="text-muted-foreground text-xs">
                      Strategies to protect your organization from phishing attacks.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="tools" className="p-6 bg-background rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-background rounded-lg shadow-sm p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <FileCheck className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-base">SPF Record Validator</h3>
                    <p className="text-muted-foreground text-xs">
                      Check if your SPF record is correctly configured.
                    </p>
                  </div>
                </div>
                <div className="bg-background rounded-lg shadow-sm p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Calculator className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-base">Email Security Score Calculator</h3>
                    <p className="text-muted-foreground text-xs">
                      Get a security score for your domain&#39;s email configuration.
                    </p>
                  </div>
                </div>
                <div className="bg-background rounded-lg shadow-sm p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-purple-100 flex items-center justify-center flex-shrink-0">
                    <Calculator className="h-5 w-5 text-purple-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-base">ROI Calculator</h3>
                    <p className="text-muted-foreground text-xs">
                      Calculate the return on investment for email security measures.
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value="compliance" className="p-6 bg-background rounded-lg shadow-sm">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-background rounded-lg shadow-sm p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <FileCheck className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-base">GDPR Compliance Guide</h3>
                    <p className="text-muted-foreground text-xs">
                      How email authentication helps with GDPR compliance.
                    </p>
                  </div>
                </div>
                <div className="bg-background rounded-lg shadow-sm p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <FileCheck className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-base">HIPAA Email Requirements</h3>
                    <p className="text-muted-foreground text-xs">
                      Email security requirements for healthcare organizations.
                    </p>
                  </div>
                </div>
                <div className="bg-background rounded-lg shadow-sm p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <Lock className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-base">PCI DSS Email Security</h3>
                    <p className="text-muted-foreground text-xs">
                      Email security requirements for PCI DSS compliance.
                    </p>
                  </div>
                </div>
                <div className="bg-background rounded-lg shadow-sm p-4 flex items-start gap-3">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 flex items-center justify-center flex-shrink-0">
                    <CheckCircle className="h-5 w-5 text-emerald-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold mb-1 text-base">Industry Best Practices</h3>
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
      <section className="py-12 bg-background">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Success Stories */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8 bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent">Success Stories</h2>
              <div className="space-y-8">
                <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="italic text-muted-foreground mb-4">
                    &ldquo;TrustYourInbox helped us achieve 100% email authentication compliance within weeks, significantly reducing our
                    email spoofing incidents.&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-slate-200 mr-3"></div>
                    <div>
                      <p className="font-medium">Financial Services Company</p>
                    </div>
                  </div>
                </div>
                <div className="bg-muted/30 p-6 rounded-lg border-l-4 border-blue-500">
                  <p className="italic text-muted-foreground mb-4">
                    &ldquo;The automated monitoring and alerts have been invaluable in protecting our brand reputation.&rdquo;
                  </p>
                  <div className="flex items-center">
                    <div className="w-10 h-10 rounded-full bg-slate-200 mr-3"></div>
                    <div>
                      <p className="font-medium">E-commerce Platform</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            {/* Latest Updates */}
            <div>
              <h2 className="text-2xl font-bold tracking-tight sm:text-3xl mb-8 bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent">Latest Updates</h2>
              <div className="space-y-6">
                <div className="border-b pb-6">
                  <div className="flex items-center mb-2">
                    <Badge variant="outline" className="text-xs">
                      March 2024
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">New AI-Powered Threat Detection</h3>
                  <p className="text-muted-foreground">Enhanced machine learning algorithms for better phishing detection.</p>
                </div>
                <div className="border-b pb-6">
                  <div className="flex items-center mb-2">
                    <Badge variant="outline" className="text-xs">
                      February 2024
                    </Badge>
                  </div>
                  <h3 className="font-semibold text-lg mb-2">Advanced Analytics Dashboard</h3>
                  <p className="text-muted-foreground">New insights and reporting capabilities added.</p>
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
      <section className="py-12 bg-gradient-to-b from-muted/30 to-background">
        <div className="container max-w-7xl mx-auto px-4 md:px-6 lg:px-8">
          <h2 className="text-2xl font-bold tracking-tight sm:text-3xl md:text-4xl text-center mb-16 bg-gradient-to-r from-gray-900 via-primary to-gray-900 bg-clip-text text-transparent">Comprehensive Email Security Solution</h2>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl text-primary">Email Authentication Monitoring</h3>
              <p className="text-muted-foreground">
                Monitor your email authentication status with detailed reports and insights. Track authentication rates,
                identify issues, and improve your email deliverability.
              </p>
              <ul className="space-y-4">
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Real-time authentication analysis</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Detailed delivery metrics</span>
                </li>
                <li className="flex items-start">
                  <CheckCircle className="h-6 w-6 text-green-500 mr-2 flex-shrink-0" />
                  <span>Automated security recommendations</span>
                </li>
              </ul>
              <Button size="lg" className="rounded-full">
                Start Monitoring
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </div>
            <div className="bg-background p-8 rounded-xl shadow-lg">
              <div className="w-full h-64 bg-muted rounded-lg mb-6 flex items-center justify-center">
                <BarChart3 className="h-16 w-16 text-muted-foreground" />
              </div>
              <h3 className="text-2xl font-bold tracking-tight sm:text-3xl mb-4 text-primary">Analytics Dashboard</h3>
              <p className="text-muted-foreground">
                Get a comprehensive view of your email authentication status with our intuitive dashboard.
              </p>
              <Button variant="outline" className="mt-4 w-full">
                View Demo
              </Button>
            </div>
          </div>
        </div>
      </section>
    </div>
  )
} 