import HeroSection from "@/components/HeroSection";
import FeatureGrid from "@/components/FeatureGrid";
import { FaBriefcase, FaUsers, FaRocket, FaHandshake } from "react-icons/fa";

export const metadata = {
  title: 'Careers | TrustYourInbox',
  description: 'Join our team and help shape the future of email security. Explore exciting career opportunities at TrustYourInbox.'
}

const jobListings = [
  {
    title: "Sales Director - East",
    location: "Remote (East Coast)",
    type: "Full-time",
    description: "Lead our sales efforts in the Eastern region, driving growth and building strong customer relationships.",
    responsibilities: [
      "Develop and execute sales strategies for the Eastern region",
      "Build and lead a high-performing sales team",
      "Drive revenue growth and meet/exceed sales targets",
      "Build and maintain relationships with key enterprise customers",
      "Collaborate with marketing and product teams to optimize sales processes"
    ],
    requirements: [
      "8+ years of enterprise sales experience in SaaS or cybersecurity",
      "Proven track record of exceeding sales targets",
      "Experience managing and growing sales teams",
      "Strong understanding of email security and DMARC",
      "Excellent communication and leadership skills"
    ]
  },
  {
    title: "Sales Director - West",
    location: "Remote (West Coast)",
    type: "Full-time",
    description: "Lead our sales efforts in the Western region, driving growth and building strong customer relationships.",
    responsibilities: [
      "Develop and execute sales strategies for the Western region",
      "Build and lead a high-performing sales team",
      "Drive revenue growth and meet/exceed sales targets",
      "Build and maintain relationships with key enterprise customers",
      "Collaborate with marketing and product teams to optimize sales processes"
    ],
    requirements: [
      "8+ years of enterprise sales experience in SaaS or cybersecurity",
      "Proven track record of exceeding sales targets",
      "Experience managing and growing sales teams",
      "Strong understanding of email security and DMARC",
      "Excellent communication and leadership skills"
    ]
  },
  {
    title: "Support Engineer",
    location: "Remote",
    type: "Full-time",
    description: "Provide exceptional technical support to our customers and help them maximize the value of our platform.",
    responsibilities: [
      "Provide technical support to enterprise customers",
      "Troubleshoot and resolve complex technical issues",
      "Create and maintain technical documentation",
      "Collaborate with product and engineering teams",
      "Contribute to knowledge base and support processes"
    ],
    requirements: [
      "3+ years of technical support experience in SaaS or cybersecurity",
      "Strong understanding of email protocols and security",
      "Experience with DMARC, SPF, and DKIM",
      "Excellent problem-solving and communication skills",
      "Ability to work independently and in a team"
    ]
  },
  {
    title: "Customer Success Manager",
    location: "Remote",
    type: "Full-time",
    description: "Ensure our customers achieve their goals and maximize the value of our platform.",
    responsibilities: [
      "Build and maintain strong customer relationships",
      "Drive customer adoption and success",
      "Conduct regular business reviews with customers",
      "Identify upsell and cross-sell opportunities",
      "Gather and share customer feedback with product team"
    ],
    requirements: [
      "5+ years of customer success experience in SaaS",
      "Strong understanding of email security",
      "Experience with enterprise customers",
      "Excellent communication and relationship-building skills",
      "Data-driven approach to customer success"
    ]
  }
];

export default function CareersPage() {
  return (
    <div className="min-h-screen bg-white">
      <HeroSection
        badge={<span>Join Our Team</span>}
        title={<>Build the Future of <span className="text-blue-600">Email Security</span></>}
        subtitle="Join us in our mission to make email security simple, effective, and accessible for everyone."
        ctaButtons={[
          { label: "View Open Positions", href: "#positions", variant: "primary" },
        ]}
        illustrationSrc="/placeholder.svg?height=500&width=600"
      />

      <FeatureGrid
        features={[
          {
            icon: <FaBriefcase className="h-6 w-6" />,
            title: "Meaningful Work",
            description: "Make a real impact in the fight against email fraud and cyber threats.",
          },
          {
            icon: <FaUsers className="h-6 w-6" />,
            title: "Great Team",
            description: "Work with talented, passionate people who are experts in their fields.",
          },
          {
            icon: <FaRocket className="h-6 w-6" />,
            title: "Growth Opportunities",
            description: "Learn, grow, and advance your career in a fast-paced environment.",
          },
          {
            icon: <FaHandshake className="h-6 w-6" />,
            title: "Work-Life Balance",
            description: "Enjoy flexible hours, remote work, and a supportive company culture.",
          },
        ]}
      />

      {/* Job Listings Section */}
      <section id="positions" className="py-16 bg-gray-50">
        <div className="container">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-gray-900 sm:text-4xl">
              Open Positions
            </h2>
            <p className="mt-4 text-lg text-gray-600">
              Join our team and help shape the future of email security
            </p>
          </div>

          <div className="grid gap-8 md:grid-cols-2">
            {jobListings.map((job, index) => (
              <div
                key={index}
                className="bg-white rounded-lg shadow-sm border border-gray-200 p-6 hover:shadow-md transition-shadow"
              >
                <h3 className="text-xl font-semibold text-gray-900 mb-2">
                  {job.title}
                </h3>
                <div className="flex items-center gap-4 text-sm text-gray-600 mb-4">
                  <span>{job.location}</span>
                  <span>•</span>
                  <span>{job.type}</span>
                </div>
                <p className="text-gray-600 mb-4">{job.description}</p>
                <div className="space-y-4">
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Responsibilities</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {job.responsibilities.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900 mb-2">Requirements</h4>
                    <ul className="list-disc list-inside text-gray-600 space-y-1">
                      {job.requirements.map((item, i) => (
                        <li key={i}>{item}</li>
                      ))}
                    </ul>
                  </div>
                </div>
                <div className="mt-6">
                  <a
                    href={`mailto:careers@trustyourinbox.com?subject=Application for ${job.title}`}
                    className="inline-flex items-center justify-center rounded-md bg-blue-600 px-4 py-2 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition-colors"
                  >
                    Apply Now
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
} 