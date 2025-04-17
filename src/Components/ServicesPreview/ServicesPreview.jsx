import React from "react";

const services = [
  {
    title: "Full-Stack Development",
    desc: "React, Node.js, MongoDB, and scalable architectures.",
    icon: "💻",
  },
  {
    title: "AI & Machine Learning",
    desc: "Custom models, data pipelines, and deployment.",
    icon: "🤖",
  },
  {
    title: "Database Engineering",
    desc: "SQL, NoSQL, optimization, and cloud solutions.",
    icon: "🗃️",
  },
  {
    title: "Luxury Web Design",
    desc: "Figma-to-code, animations, and premium UX.",
    icon: "🎨",
  },
];

const ServicesPreview = () => {
  return (
    <section className="max-w-6xl mx-auto py-16 px-4">
      <h2 className="text-3xl font-bold text-center mb-12 text-gray-900">
        Our <span className="text-purple-600">Premium</span> Services
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-xl shadow-lg hover:shadow-xl border border-gray-100 transition-all hover:-translate-y-2"
          >
            <div className="text-4xl mb-4">{service.icon}</div>
            <h3 className="text-xl font-bold mb-2 text-gray-800">
              {service.title}
            </h3>
            <p className="text-gray-600">{service.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default ServicesPreview;