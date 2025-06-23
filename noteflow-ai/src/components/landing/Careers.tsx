import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  MapPin,
  Clock,
  Users,
  Heart,
  Coffee,
  Zap,
  Globe,
  Award,
  Briefcase,
  GraduationCap,
} from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const openings = [
  {
    title: "Senior Frontend Engineer",
    department: "Engineering",
    location: "Remote / San Francisco",
    type: "Full-time",
    description:
      "Join our frontend team to build beautiful, responsive user interfaces using React, TypeScript, and modern web technologies.",
    requirements: [
      "5+ years React experience",
      "TypeScript proficiency",
      "UI/UX sensibility",
      "Remote collaboration skills",
    ],
  },
  {
    title: "Backend Engineer",
    department: "Engineering",
    location: "Remote / New York",
    type: "Full-time",
    description:
      "Help us scale our backend infrastructure and build robust APIs that power collaborative experiences for thousands of users.",
    requirements: [
      "Node.js & TypeScript",
      "Database design",
      "Cloud platforms (AWS/GCP)",
      "Microservices architecture",
    ],
  },
  {
    title: "Product Designer",
    department: "Design",
    location: "Remote / Los Angeles",
    type: "Full-time",
    description:
      "Shape the future of collaborative tools by designing intuitive and delightful user experiences.",
    requirements: [
      "3+ years product design",
      "Figma expertise",
      "User research experience",
      "Design systems knowledge",
    ],
  },
  {
    title: "DevOps Engineer",
    department: "Engineering",
    location: "Remote",
    type: "Full-time",
    description:
      "Build and maintain the infrastructure that keeps NoteFlow running smoothly and securely at scale.",
    requirements: [
      "Kubernetes & Docker",
      "CI/CD pipelines",
      "Cloud infrastructure",
      "Security best practices",
    ],
  },
  {
    title: "Content Marketing Manager",
    department: "Marketing",
    location: "Remote / Austin",
    type: "Full-time",
    description:
      "Drive our content strategy and help us tell the NoteFlow story across multiple channels.",
    requirements: [
      "Content strategy",
      "SEO optimization",
      "Analytics tools",
      "B2B SaaS experience",
    ],
  },
  {
    title: "Customer Success Manager",
    department: "Customer Success",
    location: "Remote / Chicago",
    type: "Full-time",
    description:
      "Help our customers achieve their goals and maximize value from the NoteFlow platform.",
    requirements: [
      "Customer success experience",
      "SaaS platform knowledge",
      "Communication skills",
      "Problem-solving mindset",
    ],
  },
];

const benefits = [
  {
    icon: Heart,
    title: "Health & Wellness",
    description:
      "Comprehensive health, dental, and vision insurance plus wellness stipend",
  },
  {
    icon: Globe,
    title: "Remote First",
    description:
      "Work from anywhere with flexible hours and home office setup budget",
  },
  {
    icon: GraduationCap,
    title: "Learning & Growth",
    description:
      "Annual learning budget, conference attendance, and career development support",
  },
  {
    icon: Coffee,
    title: "Work-Life Balance",
    description:
      "Unlimited PTO, mental health days, and company-wide recharge weeks",
  },
  {
    icon: Award,
    title: "Equity & Compensation",
    description: "Competitive salary, equity package, and performance bonuses",
  },
  {
    icon: Users,
    title: "Inclusive Culture",
    description:
      "Diverse, inclusive environment with employee resource groups and mentorship",
  },
];

const values = [
  {
    title: "Innovation",
    description:
      "We constantly push boundaries and embrace new technologies to solve complex problems.",
  },
  {
    title: "Collaboration",
    description:
      "We believe the best ideas emerge when diverse perspectives come together.",
  },
  {
    title: "Transparency",
    description:
      "We share openly, give honest feedback, and maintain clear communication.",
  },
  {
    title: "Growth",
    description:
      "We invest in each other&apos;s development and celebrate both successes and failures.",
  },
];

export default function Careers() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-violet-200">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Join the{" "}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                NoteFlow
              </span>{" "}
              Team
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
              Help us build the future of collaborative productivity. Join a
              team that&apos;s passionate about creating tools that make people
              more creative and productive.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                View Open Positions
              </Button>
              <Button size="lg" variant="outline">
                Learn About Our Culture
              </Button>
            </div>
          </div>
        </section>

        {/* Company Values */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These principles guide how we work together and make decisions
                every day.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <div key={index} className="text-center">
                  <div className="mx-auto mb-4 p-4 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full w-fit">
                    <Zap className="h-8 w-8 text-purple-600" />
                  </div>
                  <h3 className="text-xl font-bold text-gray-900 mb-2">
                    {value.title}
                  </h3>
                  <p className="text-gray-600">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Benefits & Perks
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We believe in taking care of our team members so they can do
                their best work.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {benefits.map((benefit, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full w-fit">
                      <benefit.icon className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-lg">{benefit.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      {benefit.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Open Positions */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Open Positions
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                Find your next opportunity to make an impact and grow your
                career with us.
              </p>
            </div>

            <div className="space-y-6">
              {openings.map((job, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300"
                >
                  <CardHeader>
                    <div className="flex flex-col lg:flex-row lg:items-center lg:justify-between">
                      <div className="mb-4 lg:mb-0">
                        <CardTitle className="text-2xl mb-2">
                          {job.title}
                        </CardTitle>
                        <div className="flex flex-wrap gap-4 text-sm text-gray-600">
                          <div className="flex items-center space-x-1">
                            <Briefcase className="h-4 w-4" />
                            <span>{job.department}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <MapPin className="h-4 w-4" />
                            <span>{job.location}</span>
                          </div>
                          <div className="flex items-center space-x-1">
                            <Clock className="h-4 w-4" />
                            <span>{job.type}</span>
                          </div>
                        </div>
                      </div>
                      <Button className="bg-purple-600 hover:bg-purple-700 lg:ml-4">
                        Apply Now
                      </Button>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-gray-600 mb-4 text-base">
                      {job.description}
                    </CardDescription>
                    <div>
                      <h4 className="font-semibold text-gray-900 mb-2">
                        Key Requirements:
                      </h4>
                      <ul className="list-disc list-inside text-gray-600 space-y-1">
                        {job.requirements.map((req, reqIndex) => (
                          <li key={reqIndex}>{req}</li>
                        ))}
                      </ul>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-purple-600 to-blue-600">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Don&apos;t see the right role?
            </h2>
            <p className="text-xl text-purple-100 mb-8 max-w-3xl mx-auto">
              We&apos;re always looking for talented people who share our
              passion for building great products. Send us your resume and tell
              us how you&apos;d like to contribute.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="secondary"
                className="text-purple-600 font-semibold"
              >
                Send Us Your Resume
              </Button>
              <Button
                size="lg"
                variant="secondary"
                className="text-purple-600 font-semibold"
              >
                Learn More About Us
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
