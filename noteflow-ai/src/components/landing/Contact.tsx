import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Mail,
  MessageSquare,
  Phone,
  MapPin,
  Clock,
  Send,
  Users,
  HelpCircle,
  Building,
} from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const contactMethods = [
  {
    icon: Mail,
    title: "Email Support",
    description: "Get help with your account or technical issues",
    contact: "support@noteflow.ai",
    responseTime: "Within 24 hours",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: MessageSquare,
    title: "Live Chat",
    description: "Chat with our support team in real-time",
    contact: "Available in app",
    responseTime: "Instant response",
    color: "from-green-500 to-teal-500",
  },
  {
    icon: Phone,
    title: "Phone Support",
    description: "Talk to our team for complex issues",
    contact: "+1 (555) 123-4567",
    responseTime: "Mon-Fri, 9AM-6PM PST",
    color: "from-purple-500 to-pink-500",
  },
];

const departments = [
  {
    icon: Users,
    title: "Sales & Partnerships",
    email: "sales@noteflow.ai",
    description: "Enterprise solutions and partnership opportunities",
  },
  {
    icon: HelpCircle,
    title: "Customer Success",
    email: "success@noteflow.ai",
    description: "Onboarding, training, and account management",
  },
  {
    icon: Building,
    title: "Media & Press",
    email: "press@noteflow.ai",
    description: "Press inquiries and media resources",
  },
  {
    icon: Mail,
    title: "General Inquiries",
    email: "hello@noteflow.ai",
    description: "General questions and feedback",
  },
];

const offices = [
  {
    city: "San Francisco",
    address: "123 Innovation Drive, Suite 400, San Francisco, CA 94105",
    description: "Our headquarters and main engineering hub",
  },
  {
    city: "New York",
    address: "456 Tech Plaza, Floor 12, New York, NY 10001",
    description: "East coast operations and sales team",
  },
  {
    city: "Austin",
    address: "789 Startup Lane, Building C, Austin, TX 78701",
    description: "Marketing and customer success center",
  },
];

export default function Contact() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-br from-slate-50 to-violet-200">
        {/* Hero Section */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-900 mb-8">
              Get in{" "}
              <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
                Touch
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
              Have questions, feedback, or need support? We&apos;d love to hear
              from you. Our team is here to help you succeed with NoteFlow.
            </p>
          </div>
        </section>

        {/* Contact Methods */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-3 gap-8">
              {contactMethods.map((method, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <CardHeader className="text-center">
                    <div
                      className={`mx-auto mb-4 p-4 bg-gradient-to-r ${method.color} rounded-full w-fit`}
                    >
                      <method.icon className="h-8 w-8 text-white" />
                    </div>
                    <CardTitle className="text-xl">{method.title}</CardTitle>
                    <CardDescription>{method.description}</CardDescription>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="font-semibold text-gray-900 mb-2">
                      {method.contact}
                    </p>
                    <div className="flex items-center justify-center space-x-1 text-sm text-gray-600">
                      <Clock className="h-4 w-4" />
                      <span>{method.responseTime}</span>
                    </div>
                    <Button className="w-full mt-4 bg-purple-600 hover:bg-purple-700">
                      Contact Now
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-16 items-start">
              <div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                  Send us a message
                </h2>
                <p className="text-lg text-gray-600 mb-8">
                  Fill out the form and we&apos;ll get back to you as soon as
                  possible. For urgent matters, please use our live chat or
                  phone support.
                </p>

                <div className="space-y-6">
                  <h3 className="text-xl font-semibold text-gray-900">
                    Other ways to reach us:
                  </h3>
                  {departments.map((dept, index) => (
                    <div key={index} className="flex items-start space-x-3">
                      <div className="p-2 bg-purple-100 rounded-lg">
                        <dept.icon className="h-5 w-5 text-purple-600" />
                      </div>
                      <div>
                        <h4 className="font-semibold text-gray-900">
                          {dept.title}
                        </h4>
                        <p className="text-sm text-gray-600 mb-1">
                          {dept.description}
                        </p>
                        <a
                          href={`mailto:${dept.email}`}
                          className="text-purple-600 hover:text-purple-700 text-sm font-medium"
                        >
                          {dept.email}
                        </a>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <Card className="border-0 shadow-lg">
                <CardContent className="p-8">
                  <form className="space-y-6">
                    <div className="grid md:grid-cols-2 gap-4">
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          First Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-colors"
                          placeholder="John"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-gray-700 mb-2">
                          Last Name *
                        </label>
                        <input
                          type="text"
                          required
                          className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-colors"
                          placeholder="Doe"
                        />
                      </div>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        required
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-colors"
                        placeholder="john@company.com"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Subject *
                      </label>
                      <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-colors">
                        <option>General Inquiry</option>
                        <option>Technical Support</option>
                        <option>Sales & Pricing</option>
                        <option>Feature Request</option>
                        <option>Bug Report</option>
                        <option>Partnership</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Message *
                      </label>
                      <textarea
                        required
                        rows={6}
                        className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-purple-600 focus:border-transparent outline-none transition-colors resize-none"
                        placeholder="Tell us how we can help you..."
                      ></textarea>
                    </div>

                    <Button
                      type="submit"
                      className="w-full bg-purple-600 hover:bg-purple-700 text-white font-semibold py-3"
                    >
                      Send Message
                      <Send className="ml-2 h-4 w-4" />
                    </Button>
                  </form>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Office Locations */}
        <section className="py-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Our Offices
              </h2>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                While we&apos;re remote-first, we have physical locations where
                team members can collaborate and meet with local customers.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {offices.map((office, index) => (
                <Card
                  key={index}
                  className="border-0 shadow-lg hover:shadow-xl transition-shadow duration-300"
                >
                  <CardHeader className="text-center">
                    <div className="mx-auto mb-4 p-3 bg-gradient-to-r from-purple-100 to-blue-100 rounded-full w-fit">
                      <MapPin className="h-6 w-6 text-purple-600" />
                    </div>
                    <CardTitle className="text-xl">{office.city}</CardTitle>
                  </CardHeader>
                  <CardContent className="text-center">
                    <p className="text-gray-600 mb-3">{office.address}</p>
                    <p className="text-sm text-gray-500 mb-4">
                      {office.description}
                    </p>
                    <Button
                      variant="outline"
                      size="sm"
                      className="text-purple-600 border-purple-600 hover:bg-purple-50"
                    >
                      Get Directions
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
              Frequently Asked Questions
            </h2>
            <p className="text-lg text-gray-600 mb-12">
              Can&apos;t find what you&apos;re looking for? Check out our
              comprehensive FAQ section or contact our support team directly.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                size="lg"
                variant="outline"
                className="text-purple-600 border-purple-600 hover:bg-purple-50"
              >
                View FAQ
              </Button>
              <Button size="lg" className="bg-purple-600 hover:bg-purple-700">
                Contact Support
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
