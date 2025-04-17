import React from "react";

const LuxuryCTA = () => {
  return (
    <section className="bg-gray-50 py-16 px-4">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-3xl font-bold mb-6 text-gray-900">
          Ready to Elevate Your Project?
        </h2>
        <p className="text-xl mb-8 text-gray-600">
          Join 10,000+ clients who trust us for mission-critical work.
        </p>
        <button className="bg-purple-600 hover:bg-purple-700 text-white font-bold py-4 px-12 rounded-full transition-all transform hover:scale-105 shadow-lg">
          Get a Confidential Consultation
        </button>
        <div className="mt-8 flex justify-center space-x-8">
          <span className="text-sm text-gray-500">⭐ 5.0 Avg. Rating</span>
          <span className="text-sm text-gray-500">🔒 NDAs Available</span>
          <span className="text-sm text-gray-500">🚀 24h Delivery</span>
        </div>
      </div>
    </section>
  );
};

export default LuxuryCTA;