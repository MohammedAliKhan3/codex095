import React from "react";

const Hero = () => {
  return (
    <section className="relative bg-gradient-to-r from-purple-900 to-indigo-800 text-white py-20 px-4 md:px-10 lg:px-20">
      <div className="max-w-6xl mx-auto text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4 animate-fadeIn">
          Elite Tech Freelancers at Your Service
        </h1>
        <p className="text-xl md:text-2xl mb-8 opacity-90">
          Hire top-tier developers, designers, and AI experts. Delivered with white-glove service.
        </p>
        <div className="space-x-4">
          <button className="bg-amber-500 hover:bg-amber-600 text-black font-bold py-3 px-8 rounded-full transition-all transform hover:scale-105">
            Hire Talent
          </button>
          <button className="bg-transparent border-2 border-white hover:bg-white hover:text-purple-900 font-bold py-3 px-8 rounded-full transition-all">
            Learn More
          </button>
        </div>
      </div>
      {/* Luxury decorative element (optional) */}
      <div className="absolute bottom-0 left-0 right-0 h-16 bg-white/10 backdrop-blur-sm"></div>
    </section>
  );
};

export default Hero;