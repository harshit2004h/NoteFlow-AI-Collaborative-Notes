import { Button } from "@/components/ui/button";
import { CheckCircle, Users, Zap, Heart, Star, TrendingUp } from "lucide-react";

const benefits = [
  {
    icon: TrendingUp,
    text: "Boost productivity by up to 40% with intelligent workflows",
    color: "text-indigo-600",
  },
  {
    icon: Heart,
    text: "Rediscover the joy of organized, purposeful note-taking",
    color: "text-rose-600",
  },
  {
    icon: Star,
    text: "Transform scattered thoughts into actionable insights",
    color: "text-amber-600",
  },
  {
    icon: Zap,
    text: "Experience lightning-fast performance across all devices",
    color: "text-blue-600",
  },
  {
    icon: Users,
    text: "Join a community of forward-thinking professionals",
    color: "text-purple-600",
  },
  {
    icon: CheckCircle,
    text: "Trusted by teams at leading companies worldwide",
    color: "text-emerald-600",
  },
];

export const Benefits = () => {
  return (
    <section className="py-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Professional dark background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900"></div>

        {/* Subtle accent elements */}
        <div className="absolute top-0 left-0 w-full h-full opacity-5">
          <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-indigo-400 rounded-full filter blur-3xl"></div>
          <div className="absolute bottom-1/4 right-1/4 w-80 h-80 bg-purple-400 rounded-full filter blur-3xl"></div>
        </div>
      </div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          {/* Content side */}
          <div className="text-white">
            <div className="inline-flex items-center px-4 py-2 rounded-full bg-white/10 backdrop-blur-sm border border-white/20 mb-8">
              <span className="text-sm font-medium text-indigo-200">
                Why professionals choose NoteFlow
              </span>
            </div>

            <h2 className="text-4xl md:text-5xl font-bold mb-6 tracking-tight">
              Work smarter,
              <span className="block bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent">
                not harder
              </span>
            </h2>

            <p className="text-xl text-slate-300 mb-10 leading-relaxed">
              Experience the perfect balance of
              <span className="font-semibold text-white">
                {" "}
                powerful functionality
              </span>{" "}
              and
              <span className="font-semibold text-white">
                {" "}
                intuitive design
              </span>
              .
            </p>

            {/* Benefits list */}
            <div className="space-y-4 mb-10">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start space-x-4 group">
                  <div className="flex-shrink-0 w-10 h-10 rounded-lg bg-white/10 backdrop-blur-sm border border-white/20 flex items-center justify-center group-hover:bg-white/20 transition-colors duration-300">
                    <benefit.icon className={`h-5 w-5 ${benefit.color}`} />
                  </div>
                  <span className="text-lg text-slate-200 group-hover:text-white transition-colors duration-300">
                    {benefit.text}
                  </span>
                </div>
              ))}
            </div>

            {/* Professional CTA */}
            <Button
              size="lg"
              className="bg-gradient-to-r from-indigo-600 to-purple-600 hover:from-indigo-700 hover:to-purple-700 text-white px-8 py-3.5 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:translate-y-[-1px]"
            >
              Start your free trial
            </Button>
          </div>

          {/* Visual side */}
          <div className="relative">
            {/* Clean interface mockup */}
            <div className="relative bg-white/10 backdrop-blur-xl rounded-2xl p-6 border border-white/20 shadow-2xl">
              {/* Window controls */}
              <div className="flex items-center space-x-2 mb-6">
                <div className="w-3 h-3 bg-red-400 rounded-full"></div>
                <div className="w-3 h-3 bg-yellow-400 rounded-full"></div>
                <div className="w-3 h-3 bg-green-400 rounded-full"></div>
                <div className="flex-1 ml-4 h-6 bg-white/20 rounded-md"></div>
              </div>

              {/* Interface content */}
              <div className="space-y-4">
                <div className="h-6 bg-gradient-to-r from-indigo-400 to-purple-400 rounded w-3/4"></div>
                <div className="grid grid-cols-2 gap-3">
                  <div className="h-4 bg-white/30 rounded"></div>
                  <div className="h-4 bg-white/30 rounded"></div>
                </div>
                <div className="space-y-2">
                  <div className="h-3 bg-white/30 rounded w-full"></div>
                  <div className="h-3 bg-white/30 rounded w-5/6"></div>
                  <div className="h-3 bg-white/30 rounded w-4/6"></div>
                </div>

                {/* Interactive cards */}
                <div className="mt-6 space-y-3">
                  {[1, 2, 3].map((i) => (
                    <div
                      key={i}
                      className="flex items-center space-x-3 p-3 bg-white/10 rounded-lg border border-white/10 hover:bg-white/20 transition-colors cursor-pointer"
                    >
                      <div
                        className={`w-8 h-8 bg-gradient-to-r ${
                          i === 1
                            ? "from-indigo-400 to-purple-400"
                            : i === 2
                            ? "from-blue-400 to-cyan-400"
                            : "from-emerald-400 to-teal-400"
                        } rounded-md`}
                      ></div>
                      <div className="flex-1 space-y-1">
                        <div className="h-3 bg-white/40 rounded w-2/3"></div>
                        <div className="h-2 bg-white/30 rounded w-1/2"></div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
