import { Button } from "@/components/ui/button";
import { ArrowRight, Github, Play } from "lucide-react";
import Link from "next/link";

export const Hero = () => {
  return (
    <section className="pt-32 pb-20 px-4 sm:px-6 lg:px-8 relative overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-purple-50 via-blue-50 to-teal-50"></div>

      {/* Animated background elements */}
      <div className="absolute top-20 left-10 w-72 h-72 bg-purple-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"></div>
      <div
        className="absolute top-40 right-10 w-72 h-72 bg-blue-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
        style={{ animationDelay: "2s" }}
      ></div>
      <div
        className="absolute bottom-20 left-1/2 w-72 h-72 bg-teal-300 rounded-full mix-blend-multiply filter blur-xl opacity-70 animate-float"
        style={{ animationDelay: "4s" }}
      ></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="text-center">
          {/* Badge */}
          <div className="inline-flex items-center px-4 py-2 rounded-full bg-gradient-to-r from-purple-100 to-blue-100 border border-purple-200 mb-8 animate-fade-in-up">
            <span className="text-sm font-medium text-purple-700">
              ✨ New: Real-time collaboration is here!
            </span>
          </div>

          {/* Main heading */}
          <h1
            className="text-4xl md:text-6xl lg:text-7xl font-bold text-gray-900 mb-8 animate-fade-in-up"
            style={{ animationDelay: "0.2s" }}
          >
            Your thoughts,
            <br />
            <span className="bg-gradient-to-r from-purple-600 via-blue-600 to-teal-600 bg-clip-text text-transparent">
              beautifully organized
            </span>
          </h1>

          {/* Subtitle */}
          <p
            className="text-xl md:text-2xl text-gray-600 max-w-3xl mx-auto mb-12 animate-fade-in-up"
            style={{ animationDelay: "0.4s" }}
          >
            Experience the next generation of note-taking with NoteFlow. Write,
            organize, and collaborate like never before with our intuitive
            Notion-inspired platform.
          </p>

          {/* CTA buttons */}
          <div
            className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in-up"
            style={{ animationDelay: "0.6s" }}
          >
            <Link href={"/dashboard"}>
              <Button
                size="lg"
                className="bg-gradient-to-r from-purple-600 to-blue-600 hover:from-purple-700 hover:to-blue-700 text-white px-8 py-4 text-lg rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 transform hover:scale-105"
              >
                Start for free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>

            <Link rel="noopener noreferrer" target="_blank" href="https://github.com/harshit2004h/NoteFlow-AI-Collaborative-Notes.git">
              <Button
                variant="outline"
                size="lg"
                className="px-8 py-4 text-lg rounded-xl border-2 border-gray-300 hover:border-purple-400 transition-all duration-300"
              >
                <Github className="mr-2 h-5 w-5 font-bold" />
                Github Repo
              </Button>
            </Link>
          </div>

          {/* Social proof */}
          <div
            className="mt-16 animate-fade-in-up"
            style={{ animationDelay: "0.8s" }}
          >
            <p className="text-sm text-gray-500 mb-4">Trusted by teams at</p>
            <div className="flex justify-center items-center space-x-8 opacity-60">
              <div className="h-8 w-20 bg-gray-300 rounded flex items-center justify-center text-xs font-medium">
                ACME
              </div>
              <div className="h-8 w-20 bg-gray-300 rounded flex items-center justify-center text-xs font-medium">
                CORP
              </div>
              <div className="h-8 w-20 bg-gray-300 rounded flex items-center justify-center text-xs font-medium">
                TECH
              </div>
              <div className="h-8 w-20 bg-gray-300 rounded flex items-center justify-center text-xs font-medium">
                FLOW
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
