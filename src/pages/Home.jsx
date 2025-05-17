import React, { useEffect, useState, useRef } from "react";
import { motion } from "framer-motion";
import Hero from "../Components/Hero/Hero";
import ServicesPreview from "../Components/ServicesPreview/ServicesPreview";
import LuxuryCTA from "../Components/LuxuryCTA/LuxuryCTA";
const cardData = [
  { title: "AI Design", subtitle: "Smart, adaptive UI/UX" },
  { title: "Automation", subtitle: "Boost efficiency 10x" },
  { title: "Web Apps", subtitle: "Modern and scalable" },
  { title: "Brand Strategy", subtitle: "Luxury aesthetics" },
  { title: "Data Visualization", subtitle: "Turn data into gold" },
  { title: "Cloud Deployments", subtitle: "Fast. Reliable. Global." }
];


// Change if deployed elsewhere


const Home = () => {
  const [backgroundColor, setBackgroundColor] = useState("from-indigo-50 via-purple-50 to-blue-50");
  const [textColor, setTextColor] = useState("text-gray-900");
  const [buttonColor, setButtonColor] = useState("from-violet-600 to-indigo-600");
  const [cardGradient, setCardGradient] = useState("from-indigo-100 to-purple-100");

  const handleScroll = () => {
    const scrollY = window.scrollY;
    const totalHeight = document.body.scrollHeight - window.innerHeight;
    const scrollPercentage = (scrollY / totalHeight) * 100;

    if (scrollPercentage < 15) {
      setBackgroundColor("from-indigo-50 via-purple-50 to-blue-50");
      setTextColor("text-gray-900");
      setButtonColor("from-violet-600 to-indigo-600");
      setCardGradient("from-indigo-100 to-purple-100");
    } else if (scrollPercentage >= 15 && scrollPercentage < 30) {
      setBackgroundColor("from-blue-100 via-indigo-100 to-purple-100");
      setTextColor("text-gray-800");
      setButtonColor("from-indigo-500 to-purple-500");
      setCardGradient("from-blue-100 to-indigo-100");
    } else if (scrollPercentage >= 30 && scrollPercentage < 45) {
      setBackgroundColor("from-purple-100 via-blue-100 to-indigo-100");
      setTextColor("text-gray-800");
      setButtonColor("from-purple-500 to-pink-500");
      setCardGradient("from-purple-100 to-pink-100");
    } else if (scrollPercentage >= 45 && scrollPercentage < 60) {
      setBackgroundColor("from-pink-100 via-purple-100 to-indigo-100");
      setTextColor("text-gray-800");
      setButtonColor("from-pink-500 to-rose-500");
      setCardGradient("from-pink-100 to-rose-100");
    } else if (scrollPercentage >= 60 && scrollPercentage < 75) {
      setBackgroundColor("from-rose-100 via-pink-100 to-purple-100");
      setTextColor("text-gray-800");
      setButtonColor("from-rose-500 to-red-500");
      setCardGradient("from-rose-100 to-red-100");
    } else {
      setBackgroundColor("from-red-100 via-rose-100 to-pink-100");
      setTextColor("text-gray-800");
      setButtonColor("from-red-500 to-orange-500");
      setCardGradient("from-red-100 to-orange-100");
    }
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div className={`min-h-screen flex flex-col bg-gradient-to-br ${backgroundColor} transition-colors duration-700`}>
      <div className="flex-grow">
        <Hero />

        {/* Horizontal Scrolling Cards Section */}
        <div className="overflow-hidden py-16">
          <div className="relative w-full">
            <motion.div
              className="flex space-x-8 px-8"
              animate={{ x: ["0%", "-100%"] }}
              transition={{
                repeat: Infinity,
                duration: 20,
                ease: "linear"
              }}
            >
              {[...cardData, ...cardData].map((card, idx) => (
                <motion.div
                  key={idx}
                  className={`min-w-[300px] bg-gradient-to-br ${cardGradient} shadow-xl rounded-2xl p-6 border border-white/20 hover:shadow-2xl transition-all ${textColor}`}
                  whileHover={{ 
                    y: -8, 
                    scale: 1.05,
                    boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                  }}
                >
                  <h4 className="text-xl font-semibold mb-2">{card.title}</h4>
                  <p className="text-gray-700">{card.subtitle}</p>
                  <div className="absolute inset-0 bg-white/10 backdrop-blur-sm rounded-2xl opacity-0 hover:opacity-100 transition-opacity duration-300" />
                </motion.div>
              ))}
            </motion.div>
          </div>
        </div>

        {/* Top Talent Section */}
        <section className="py-16 px-4 sm:px-6 lg:px-8">
          <div className="max-w-6xl mx-auto">
            <div className="text-center mb-12">
              <h2 className={`text-4xl md:text-5xl font-bold mb-4 ${textColor}`}>
                Top Talent
              </h2>
              <p className={`text-xl md:text-2xl max-w-4xl mx-auto ${textColor}`}>
                Get what you need faster from freelancers who trained their own personal AI Creation Models.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-12 items-center">
              <div>
                <p className={`text-lg mb-6 ${textColor}`}>
                  Now you can browse, prompt, and generate instantly. And if you need a tweak or change, 
                  the freelancer is always there to help you perfect it.
                </p>
                <motion.button 
                  className={`bg-gradient-to-r ${buttonColor} text-white font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all`}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Get started
                </motion.button>
              </div>

              <motion.div 
                className="bg-white/90 backdrop-blur-sm p-8 rounded-xl shadow-lg border border-white/20"
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.8 }}
                viewport={{ once: true }}
              >
                <div className="flex items-start mb-6">
                  <div className="bg-indigo-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-indigo-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">AI-Powered Speed</h3>
                    <p className="text-gray-600">Instant generation with human refinement</p>
                  </div>
                </div>

                <div className="flex items-start">
                  <div className="bg-purple-100 p-3 rounded-full mr-4">
                    <svg className="w-6 h-6 text-purple-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="text-xl font-bold text-gray-900">Secure Collaboration</h3>
                    <p className="text-gray-600">Protected by enterprise-grade security</p>
                  </div>
                </div>
              </motion.div>
            </div>
          </div>
        </section>

        <ServicesPreview />
        <LuxuryCTA />

        {/* Parallax Section */}
        <div className="relative h-[600px] overflow-hidden mt-16">
          <div 
            className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1551434678-e076c223a692?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=2070&q=80')] 
                      bg-cover bg-center bg-fixed"
          >
            <div className="absolute inset-0 bg-gradient-to-t from-gray-900/90 via-gray-900/70 to-transparent"></div>
          </div>

          <div className="relative h-full flex flex-col justify-center items-center text-center px-4">
            <motion.h2 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="text-4xl md:text-5xl font-bold text-white mb-6"
            >
              Ready to Transform Your Business?
            </motion.h2>
            <motion.p 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              transition={{ delay: 0.3, duration: 0.8 }}
              viewport={{ once: true }}
              className="text-xl text-gray-300 mb-8 max-w-2xl"
            >
              Join thousands of companies already leveraging our elite tech talent
            </motion.p>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className={`bg-gradient-to-r ${buttonColor} text-white font-bold py-3 px-8 rounded-full shadow-xl hover:shadow-2xl transition-all`}
            >
              Get Started Today
            </motion.button>
          </div>
        </div>
      </div>

      {/* Footer */}
      <footer className="bg-gradient-to-br from-gray-900 to-gray-800 text-white py-12 px-4 sm:px-6 lg:px-8">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          <div>
            <h3 className="text-2xl font-bold bg-gradient-to-r from-indigo-400 to-purple-400 bg-clip-text text-transparent mb-4">
              CodeX095
            </h3>
            <p className="text-gray-400 mb-4">
              Connecting businesses with elite tech talent worldwide.
            </p>
            <div className="flex space-x-4 mt-4">
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 4.043-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-4.043-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" clipRule="evenodd" />
                </svg>
              </a>
              <a href="https://youtube.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition">
                <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                  <path fillRule="evenodd" d="M19.812 5.418c.861.23 1.538.907 1.768 1.768C21.998 8.746 22 12 22 12s0 3.255-.418 4.814a2.504 2.504 0 0 1-1.768 1.768c-1.56.419-7.814.419-7.814.419s-6.255 0-7.814-.419a2.505 2.505 0 0 1-1.768-1.768C2 15.255 2 12 2 12s0-3.255.417-4.814a2.507 2.507 0 0 1 1.768-1.768C5.744 5 11.998 5 11.998 5s6.255 0 7.814.418ZM15.194 12 10 15V9l5.194 3Z" clipRule="evenodd" />
                </svg>
              </a>
            </div>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Company</h4>
            <ul className="space-y-2">
              <li><a href="/about" className="text-gray-400 hover:text-white transition">About</a></li>
              <li><a href="/careers" className="text-gray-400 hover:text-white transition">Careers</a></li>
              <li><a href="/press" className="text-gray-400 hover:text-white transition">Press</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Resources</h4>
            <ul className="space-y-2">
              <li><a href="/blog" className="text-gray-400 hover:text-white transition">Blog</a></li>
              <li><a href="/help" className="text-gray-400 hover:text-white transition">Help Center</a></li>
              <li><a href="/community" className="text-gray-400 hover:text-white transition">Community</a></li>
            </ul>
          </div>
          <div>
            <h4 className="text-lg font-semibold mb-4 text-white">Legal</h4>
            <ul className="space-y-2">
              <li><a href="/privacy" className="text-gray-400 hover:text-white transition">Privacy</a></li>
              <li><a href="/terms" className="text-gray-400 hover:text-white transition">Terms</a></li>
              <li><a href="/security" className="text-gray-400 hover:text-white transition">Security</a></li>
            </ul>
          </div>
        </div>
        <div className="max-w-7xl mx-auto mt-8 pt-8 border-t border-gray-700 text-center text-gray-500">
          <p>© {new Date().getFullYear()} CodeX095. All rights reserved.</p>
        </div>
      </footer>

      {/* Chatbot Component */}
      
    </div>
  );
};

export default Home;