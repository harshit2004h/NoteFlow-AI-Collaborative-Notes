import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Users, Target, Heart, Lightbulb, Award, Globe } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const values = [
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We constantly push the boundaries of what's possible in collaborative note-taking.",
  },
  {
    icon: Users,
    title: "Collaboration",
    description:
      "We believe that the best ideas emerge when people work together seamlessly.",
  },
  {
    icon: Heart,
    title: "User-Centric",
    description:
      "Every feature we build is designed with our users' needs and experiences in mind.",
  },
  {
    icon: Globe,
    title: "Accessibility",
    description:
      "We're committed to making powerful tools accessible to everyone, everywhere.",
  },
];

const team = [
  {
    name: "Harshit Srivastava",
    role: "Founder & CEO",
    description:
      "Former product lead at Notion, passionate about reimagining how we organize thoughts.",
  },
  {
    name: "Harshit Srivastava",
    role: "CTO",
    description:
      "Full-stack engineer with 10+ years building collaborative software at scale.",
  },
  {
    name: "Harshit Srivastava",
    role: "Head of Design",
    description:
      "UX designer focused on creating intuitive and beautiful user experiences.",
  },
  {
    name: "Harshit Srivastava",
    role: "VP of Engineering",
    description:
      "Infrastructure expert ensuring NoteFlow scales seamlessly across the globe.",
  },
];

export default function About() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-blue-50">
        {/* Hero Section */}
        <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 bg-violet-100">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              About{" "}
              <span className="bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600 bg-clip-text text-transparent">
                NoteFlow
              </span>
            </h1>{" "}
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
              We&apos;re building the future of collaborative note-taking, where
              ideas flow freely and teams create together in real-time.
            </p>
          </div>
        </section>{" "}
        {/* Mission Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-gray-50 to-blue-50">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-center">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Our Mission
                </h2>{" "}
                <p className="text-lg text-gray-600 mb-6">
                  At NoteFlow, we believe that great ideas shouldn&apos;t be
                  trapped in silos. Our mission is to create a platform where
                  thoughts, knowledge, and creativity can flow seamlessly
                  between individuals and teams.
                </p>
                <p className="text-lg text-gray-600 mb-8">
                  We&apos;re not just building another note-taking app –
                  we&apos;re crafting an experience that enhances how people
                  think, collaborate, and turn ideas into reality.
                </p>
                <div className="flex items-center space-x-4">
                  <Target className="h-8 w-8 text-emerald-600" />
                  <span className="text-lg font-semibold text-emerald-600">
                    Empowering minds, connecting ideas
                  </span>
                </div>
              </div>
              <div className="relative">
                <div className="absolute inset-0 bg-gradient-to-r from-emerald-200 to-cyan-200 rounded-2xl transform rotate-3"></div>
                <div className="relative bg-white border border-gray-200 rounded-2xl p-8 shadow-xl">
                  <div className="text-center">
                    <Award className="h-16 w-16 text-emerald-600 mx-auto mb-4" />
                    <h3 className="text-2xl font-bold text-gray-900 mb-2">
                      Recognition
                    </h3>
                    <p className="text-gray-600">
                      Trusted by over 100,000+ users worldwide and featured in
                      major tech publications.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>{" "}
        {/* Values Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Values
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                These principles guide everything we do, from product
                development to customer support.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card
                  key={index}
                  className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-emerald-300"
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-emerald-100 to-cyan-100 rounded-full w-fit border border-emerald-200">
                      <value.icon className="h-8 w-8 text-emerald-600" />
                    </div>
                    <CardTitle className="text-xl text-gray-900">
                      {value.title}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-center text-gray-600">
                      {value.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>{" "}
        {/* Team Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-slate-50 to-gray-100">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Meet Our Team
              </h2>{" "}
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                We&apos;re a diverse group of creators, engineers, and dreamers
                united by our passion for building exceptional user experiences.
              </p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {team.map((member, index) => (
                <Card
                  key={index}
                  className="bg-white border-gray-200 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1 hover:border-cyan-300"
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 w-20 h-20 bg-gradient-to-r from-emerald-500 to-cyan-500 rounded-full flex items-center justify-center shadow-lg">
                      <span className="text-white font-bold text-xl">
                        {member.name
                          .split(" ")
                          .map((n) => n[0])
                          .join("")}
                      </span>
                    </div>
                    <CardTitle className="text-lg text-gray-900">
                      {member.name}
                    </CardTitle>
                    <CardDescription className="text-emerald-600 font-medium">
                      {member.role}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-center text-gray-600 text-sm">
                      {member.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>{" "}
        {/* CTA Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-emerald-600 via-cyan-600 to-blue-600">
          <div className="max-w-7xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Ready to join our journey?
            </h2>{" "}
            <p className="text-xl text-emerald-100 mb-8 max-w-3xl mx-auto">
              Be part of the community that&apos;s shaping the future of
              collaborative productivity.
            </p>
            <Button
              size="lg"
              variant="secondary"
              className="bg-white text-gray-900 font-semibold hover:bg-gray-100 transition-colors duration-200 shadow-lg hover:shadow-xl"
            >
              Get Started Today
            </Button>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
