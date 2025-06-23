import { FileText } from "lucide-react";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-gray-900 text-white py-16 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Brand */}
          <div className="col-span-1 md:col-span-2">
            <Link href="/">
              <div className="flex items-center space-x-2 mb-4">
                <div className="p-2 rounded-lg bg-gradient-to-r from-purple-500 to-blue-500">
                  <FileText className="h-6 w-6 text-white" />
                </div>
                <span className="text-xl font-bold">NoteFlow</span>
              </div>
            </Link>
            <p className="text-gray-400 max-w-md mb-6">
              Transform your productivity with the most intuitive note-taking
              platform. Write, organize, and collaborate like never before.
            </p>
            <div className="flex space-x-4">
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <span className="text-xs">T</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <span className="text-xs">L</span>
              </div>
              <div className="w-8 h-8 bg-gray-700 rounded-full flex items-center justify-center hover:bg-purple-600 transition-colors cursor-pointer">
                <span className="text-xs">G</span>
              </div>
            </div>
          </div>

          {/* Product */}
          <div>
            <h3 className="font-semibold mb-4">Product</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a href="#" className="hover:text-white transition-colors">
                  Home
                </a>
              </li>
              <li>
                <a
                  href="#features"
                  className="hover:text-white transition-colors"
                >
                  Features
                </a>
              </li>
              <li>
                <a
                  href="#pricing"
                  className="hover:text-white transition-colors"
                >
                  Pricing
                </a>
              </li>
              <li>
                <a
                  href="#benefits"
                  className="hover:text-white transition-colors"
                >
                  Benefits
                </a>
              </li>
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="font-semibold mb-4">Company</h3>
            <ul className="space-y-2 text-gray-400">
              <li>
                <a
                  href="/landing/about"
                  className="hover:text-white transition-colors"
                >
                  About
                </a>
              </li>
              <li>
                <a
                  href="/landing/blog"
                  className="hover:text-white transition-colors"
                >
                  Blog
                </a>
              </li>
              <li>
                <a
                  href="/landing/careers"
                  className="hover:text-white transition-colors"
                >
                  Careers
                </a>
              </li>
              <li>
                <a
                  href="/landing/contact"
                  className="hover:text-white transition-colors"
                >
                  Contact
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-12 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-gray-400 text-sm">
            © 2024 NoteFlow. All rights reserved.
          </p>
          <div className="flex space-x-6 mt-4 md:mt-0">
            <div className="cursor-pointer text-gray-400 hover:text-white text-sm transition-colors">
              Privacy Policy
            </div>
            <div className="cursor-pointer text-gray-400 hover:text-white text-sm transition-colors">
              Terms of Service
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};
