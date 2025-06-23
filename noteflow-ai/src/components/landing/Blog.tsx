import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Calendar, Clock, User, ArrowRight, Tag } from "lucide-react";
import { Navbar } from "./Navbar";
import { Footer } from "./Footer";

const featuredPost = {
  title: "Introducing Real-Time Collaboration: The Future of Team Productivity",
  excerpt:
    "We&apos;re excited to announce our biggest feature release yet - real-time collaboration that transforms how teams work together.",
  author: "Harshit Srivastava",
  date: "June 20, 2025",
  readTime: "5 min read",
  category: "Product Updates",
  image: "/api/placeholder/800/400",
  featured: true,
};

const blogPosts = [
  {
    title: "10 Tips for Better Note Organization",
    excerpt:
      "Master the art of organizing your thoughts with these proven strategies for digital note-taking.",
    author: "Harshit Srivastava",
    date: "June 18, 2025",
    readTime: "3 min read",
    category: "Productivity",
    image: "/api/placeholder/400/200",
  },
  {
    title: "The Science Behind Effective Collaboration",
    excerpt:
      "Research-backed insights into what makes teams more productive and creative.",
    author: "Harshit Srivastava",
    date: "June 15, 2025",
    readTime: "7 min read",
    category: "Research",
    image: "/api/placeholder/400/200",
  },
  {
    title: "Building NoteFlow: Our Technical Journey",
    excerpt:
      "A deep dive into the technology stack and architecture decisions that power NoteFlow.",
    author: "Harshit Srivastava",
    date: "June 12, 2025",
    readTime: "8 min read",
    category: "Engineering",
    image: "/api/placeholder/400/200",
  },
  {
    title: "From Idea to Launch: The NoteFlow Story",
    excerpt:
      "The inspiring journey of how NoteFlow went from a simple idea to a platform used by thousands.",
    author: "Harshit Srivastava",
    date: "June 10, 2025",
    readTime: "6 min read",
    category: "Company",
    image: "/api/placeholder/400/200",
  },
  {
    title: "Why Remote Teams Need Better Tools",
    excerpt:
      "Exploring the challenges of remote work and how the right tools can bridge the gap.",
    author: "Harshit Srivastava",
    date: "June 8, 2025",
    readTime: "4 min read",
    category: "Remote Work",
    image: "/api/placeholder/400/200",
  },
  {
    title: "The Future of Knowledge Management",
    excerpt:
      "Predictions and trends shaping how we&apos;ll organize and share information in the coming years.",
    author: "Harshit Srivastava",
    date: "June 5, 2025",
    readTime: "5 min read",
    category: "Future Tech",
    image: "/api/placeholder/400/200",
  },
];

const categories = [
  "All",
  "Product Updates",
  "Productivity",
  "Engineering",
  "Research",
  "Company",
  "Remote Work",
  "Future Tech",
];

export default function Blog() {
  return (
    <>
      <Navbar />
      <div className="min-h-screen bg-gradient-to-b from-violet-100 via-white to-violet-200">
        {/* Header */}
        <section className="pt-32 pb-16 px-4 sm:px-6 lg:px-8 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold text-gray-800 mb-8">
              <span className="bg-gradient-to-r from-slate-600 via-gray-600 to-slate-700 bg-clip-text text-transparent">
                NoteFlow
              </span>{" "}
              Blog
            </h1>
            <p className="text-xl md:text-2xl text-gray-600 max-w-4xl mx-auto mb-12">
              Insights, updates, and stories from the world of collaborative
              productivity
            </p>
          </div>
        </section>{" "}
        {/* Featured Post */}
        <section className="pb-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <Card className="overflow-hidden border shadow-lg bg-white">
              <div className="grid lg:grid-cols-2 gap-0">
                <div className="p-8 lg:p-12 bg-gradient-to-br from-slate-700 to-gray-800 text-white">
                  <div className="flex items-center space-x-2 mb-4">
                    <Tag className="h-4 w-4" />
                    <span className="text-sm font-medium bg-white/20 px-2 py-1 rounded-full">
                      {featuredPost.category}
                    </span>
                    <span className="text-sm bg-amber-200 text-amber-900 px-2 py-1 rounded-full font-medium">
                      Featured
                    </span>
                  </div>
                  <CardTitle className="text-3xl md:text-4xl font-bold mb-4 text-white">
                    {featuredPost.title}
                  </CardTitle>
                  <CardDescription className="text-lg text-gray-200 mb-6">
                    {featuredPost.excerpt}
                  </CardDescription>
                  <div className="flex items-center space-x-6 mb-8 text-sm text-gray-300">
                    <div className="flex items-center space-x-2">
                      <User className="h-4 w-4" />
                      <span>{featuredPost.author}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Calendar className="h-4 w-4" />
                      <span>{featuredPost.date}</span>
                    </div>
                    <div className="flex items-center space-x-2">
                      <Clock className="h-4 w-4" />
                      <span>{featuredPost.readTime}</span>
                    </div>
                  </div>
                  <Button
                    variant="secondary"
                    className="text-slate-700 font-semibold bg-white hover:bg-gray-100"
                  >
                    Read Full Article
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </div>
                <div className="bg-gradient-to-br from-gray-100 to-slate-200 lg:min-h-full flex items-center justify-center p-8">
                  <div className="w-full h-64 lg:h-full bg-white/60 rounded-lg flex items-center justify-center border">
                    <span className="text-gray-500 text-sm">
                      Featured Article Image
                    </span>
                  </div>
                </div>
              </div>
            </Card>
          </div>
        </section>{" "}
        {/* Categories Filter */}
        <section className="pb-8 px-4 sm:px-6 lg:px-8 bg-white/60 backdrop-blur-sm">
          <div className="max-w-7xl mx-auto">
            <div className="flex flex-wrap gap-3 justify-center">
              {categories.map((category, index) => (
                <Button
                  key={index}
                  variant={index === 0 ? "default" : "outline"}
                  size="sm"
                  className={
                    index === 0
                      ? "bg-slate-700 hover:bg-slate-800 text-white"
                      : "border-gray-300 hover:bg-gray-50 text-gray-700"
                  }
                >
                  {category}
                </Button>
              ))}
            </div>
          </div>
        </section>
        {/* Blog Posts Grid */}
        <section className="pb-20 px-4 sm:px-6 lg:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {blogPosts.map((post, index) => (
                <Card
                  key={index}
                  className="overflow-hidden border-0 shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-1"
                >
                  <div className="aspect-video bg-gradient-to-br from-purple-100 to-blue-100 flex items-center justify-center">
                    <span className="text-gray-400 text-sm">Article Image</span>
                  </div>
                  <CardHeader>
                    <div className="flex items-center space-x-2 mb-2">
                      <Tag className="h-3 w-3 text-purple-600" />
                      <span className="text-xs font-medium text-purple-600 bg-purple-50 px-2 py-1 rounded-full">
                        {post.category}
                      </span>
                    </div>
                    <CardTitle className="text-lg line-clamp-2 hover:text-purple-600 transition-colors cursor-pointer">
                      {post.title}
                    </CardTitle>
                    <CardDescription className="line-clamp-2">
                      {post.excerpt}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <div className="flex items-center justify-between text-xs text-gray-500">
                      <div className="flex items-center space-x-4">
                        <div className="flex items-center space-x-1">
                          <User className="h-3 w-3" />
                          <span>{post.author}</span>
                        </div>
                        <div className="flex items-center space-x-1">
                          <Clock className="h-3 w-3" />
                          <span>{post.readTime}</span>
                        </div>
                      </div>
                      <div className="flex items-center space-x-1">
                        <Calendar className="h-3 w-3" />
                        <span>{post.date}</span>
                      </div>
                    </div>
                    <Button
                      variant="ghost"
                      className="w-full mt-4 text-purple-600 hover:text-purple-700 hover:bg-purple-50"
                    >
                      Read More
                      <ArrowRight className="ml-2 h-3 w-3" />
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>{" "}
        {/* Newsletter Signup */}
        <section className="py-20 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-slate-700 to-gray-800">
          <div className="max-w-4xl mx-auto text-center">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-6">
              Stay Updated
            </h2>
            <p className="text-xl text-gray-200 mb-8">
              Get the latest insights, tips, and product updates delivered to
              your inbox.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
              <input
                type="email"
                placeholder="Enter your email"
                className="flex-1 px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-slate-500 focus:outline-none focus:border-slate-500"
              />
              <Button
                variant="secondary"
                className="text-slate-700 font-semibold p-6 bg-white hover:bg-gray-100"
              >
                Subscribe
              </Button>
            </div>
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
