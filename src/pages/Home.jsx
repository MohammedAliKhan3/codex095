// In Home.jsx
import React from "react";
import Hero from "../Components/Hero/Hero";
import ServicesPreview from "../Components/ServicesPreview/ServicesPreview";
import LuxuryCTA from "../Components/LuxuryCTA/LuxuryCTA";

const Home = () => {
  return (
    <div className="bg-white min-h-screen flex flex-col">
      <div className="flex-grow">
        <Hero />

        {/* New Top Talent Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-indigo-50 to-purple-50">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">
                Top Talent
              </h2>
              <p className="text-xl md:text-2xl text-gray-700 max-w-4xl mx-auto">
                Get what you need faster from freelancers who trained their own personal AI Creation Models.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className="text-lg text-gray-700 mb-6">
                  Now you can browse, prompt, and generate instantly. And if you need a tweak or change, 
                  the freelancer is always there to help you perfect it.
                </p>
                <button className="bg-gradient-to-r from-purple-600 to-indigo-600 text-white font-bold py-3 px-8 rounded-full hover:from-purple-700 hover:to-indigo-700 transition-all transform hover:scale-105 shadow-lg">
                  Get started
                </button>
              </div>

              <div className="bg-white p-8 rounded-xl shadow-lg border border-gray-100">
                <div className="flex items-start mb-4">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">AI-Powered Speed</h3>
                    <p className="text-gray-600">Instant generation with human refinement</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Secure Collaboration</h3>
                    <p className="text-gray-600">Protected by enterprise-grade security</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        <ServicesPreview />
        <LuxuryCTA />
      </div>

      {/* Footer */}
      <footer className="bg-gray-900 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-cyan-400 to-blue-500 bg-clip-text text-transparent mb-4">
              CodeX095
            </h3>
            <p className="text-gray-400">
              Connecting businesses with elite tech talent worldwide.
            </p>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-white transition">Careers</a></li>
              <li><a href="/press" className="text-gray-400 hover:text-white transition">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="/help" className="text-gray-400 hover:text-white transition">Help Center</a></li>
              <li><a href="/community" className="text-gray-400 hover:text-white transition">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white transition">Terms</a></li>
              <li><a href="/security" className="text-gray-400 hover:text-white transition">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-800 text-center text-gray-500">
          <p>© {new Date().getFullYear()} CodeX095. All rights reserved.</p>
        </div>
      </footer>
    </div>
  );
};

export default Home;
