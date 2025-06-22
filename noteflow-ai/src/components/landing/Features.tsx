import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import {
  FileText,
  Users,
  Zap,
  Shield,
  Smartphone,
  Palette,
  Database,
  Share,
  Clock,
} from "lucide-react";

const features = [
  {
    icon: FileText,
    title: "Rich Text Editor",
    description:
      "Write with a powerful editor that supports markdown, blocks, and multimedia content.",
    gradient: "from-purple-500 to-pink-500",
  },
  {
    icon: Users,
    title: "Real-time Collaboration",
    description:
      "Work together seamlessly with your team in real-time, just like Google Docs.",
    gradient: "from-blue-500 to-cyan-500",
  },
  {
    icon: Database,
    title: "Structured Data",
    description:
      "Organize your content with databases, tables, and custom properties.",
    gradient: "from-teal-500 to-green-500",
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description:
      "Experience instant loading and smooth performance across all devices.",
    gradient: "from-yellow-500 to-orange-500",
  },
  {
    icon: Shield,
    title: "Secure & Private",
    description:
      "Your data is encrypted and secure with enterprise-grade security.",
    gradient: "from-red-500 to-pink-500",
  },
  {
    icon: Smartphone,
    title: "Mobile Ready",
    description:
      "Access your notes anywhere with our responsive design and mobile apps.",
    gradient: "from-indigo-500 to-purple-500",
  },
  {
    icon: Palette,
    title: "Customizable",
    description:
      "Personalize your workspace with themes, templates, and custom layouts.",
    gradient: "from-pink-500 to-rose-500",
  },
  {
    icon: Share,
    title: "Easy Sharing",
    description:
      "Share your work with anyone using simple links and permission controls.",
    gradient: "from-cyan-500 to-blue-500",
  },
  {
    icon: Clock,
    title: "Version History",
    description:
      "Never lose your work with automatic saving and complete version history.",
    gradient: "from-violet-500 to-purple-500",
  },
];

export const Features = () => {
  return (
    <section id="features" className="py-20 px-4 sm:px-6 lg:px-8 bg-white">
      <div className="max-w-7xl mx-auto">
        {/* Section header */}
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
            Everything you need to
            <span className="bg-gradient-to-r from-purple-600 to-blue-600 bg-clip-text text-transparent">
              {" "}
              create
            </span>
          </h2>
          <p className="text-xl text-gray-600 max-w-3xl mx-auto">
            Powerful features designed to help you capture, organize, and share
            your ideas more effectively than ever before.
          </p>
        </div>

        {/* Features grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature, index) => (
            <Card
              key={index}
              className="group hover:shadow-xl transition-all duration-300 transform hover:-translate-y-2 border-0 shadow-lg bg-gradient-to-br from-white to-gray-50"
            >
              <CardHeader className="pb-4">
                <div
                  className={`w-12 h-12 rounded-xl bg-gradient-to-r ${feature.gradient} p-2.5 mb-4 group-hover:scale-110 transition-transform duration-300`}
                >
                  <feature.icon className="w-full h-full text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-gray-900 group-hover:text-purple-600 transition-colors">
                  {feature.title}
                </CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-600 text-base leading-relaxed">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};
