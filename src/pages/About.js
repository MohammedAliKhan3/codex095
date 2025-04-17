import React from 'react';
import { motion } from 'framer-motion';
import TeamMemberCard from '../Components/TeamMemberCard/TeamMemberCard';

const teamMembers = [
  {
    name: "Your Name",
    role: "Founder & CEO",
    bio: "Identified the freelancing gap and assembled this talented team to solve it.",
    image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Tech Lead",
    role: "CTO",
    bio: "Building our platform to connect businesses with top freelance talent.",
    image: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Design Expert",
    role: "Creative Director",
    bio: "Creating intuitive interfaces for both freelancers and clients.",
    image: "https://images.unsplash.com/photo-1560250097-0b93528c311a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=987&q=80",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Operations",
    role: "COO",
    bio: "Ensuring smooth matches between clients and freelancers.",
    image: "https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=988&q=80",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  },
  {
    name: "Growth",
    role: "Marketing Lead",
    bio: "Connecting with both businesses and talented freelancers.",
    image: "https://images.unsplash.com/photo-1554151228-14d9def656e4?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=986&q=80",
    social: {
      linkedin: "#",
      twitter: "#"
    }
  }
];

const currentMonth = "Apr 2025";
const nextMonth = "May 2025";
const followingMonth = "Jun 2025";

const milestones = [
  { 
    date: `${currentMonth} - Week 1`, 
    title: "Company Founded", 
    description: "Officially launched CodeX095 to solve the professional freelancing shortage",
    status: "completed"
  },
  { 
    date: `${currentMonth} - Week 2`, 
    title: "Team Assembled", 
    description: "Brought together our core team of 5 professionals",
    status: "completed" 
  },
  { 
    date: `${currentMonth} - Week 3`, 
    title: "Platform Design", 
    description: "Finalized initial designs for our matching platform",
    status: "in-progress"
  },
  { 
    date: `${nextMonth}`, 
    title: "MVP Development", 
    description: "Building our minimum viable product with core features",
    status: "planned"
  },
  { 
    date: `${followingMonth}`, 
    title: "Beta Launch", 
    description: "Invite-only testing with select freelancers and clients",
    status: "planned"
  }
];

const AboutUs = () => {
  return (
    <div className="min-h-screen bg-gradient-to-br from-indigo-50 via-purple-50 to-blue-50">
      {/* Hero Section */}
      <section className="relative h-screen flex items-center justify-center text-center px-4 sm:px-6 lg:px-8 overflow-hidden">
        <div className="absolute inset-0 overflow-hidden">
          <motion.div 
            className="absolute inset-0 bg-gradient-to-br from-indigo-500/10 via-purple-500/10 to-blue-500/10"
            animate={{
              backgroundPosition: ['0% 0%', '100% 100%'],
            }}
            transition={{
              duration: 15,
              repeat: Infinity,
              repeatType: 'reverse',
              ease: 'linear'
            }}
          />
        </div>
        
        <div className="relative max-w-4xl mx-auto z-10">
          <motion.h1 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            className="text-5xl md:text-7xl font-bold text-gray-900 mb-6"
          >
            <span className="bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent">
              Just Getting Started
            </span>
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            className="text-xl md:text-2xl text-gray-700 max-w-2xl mx-auto"
          >
            Born in {currentMonth} to solve the professional freelancing shortage
          </motion.p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white/80 backdrop-blur-sm">
        <div className="max-w-6xl mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
            >
              <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-6">
                Why We Started in {currentMonth}
              </h2>
              <p className="text-lg text-gray-700 mb-6">
                In {currentMonth}, we recognized businesses were struggling more than ever to find reliable professional freelancers. The gap between demand and quality supply was growing exponentially.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We moved quickly to assemble our team and begin building the solution - because this problem can't wait.
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.8 }}
              viewport={{ once: true }}
              className="bg-gradient-to-br from-indigo-100 to-purple-100 rounded-2xl p-8 shadow-lg border border-white/20"
            >
              <h3 className="text-2xl font-bold text-gray-900 mb-4">Our {currentMonth} Progress</h3>
              <div className="space-y-6">
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Company Formed</h4>
                    <p className="text-gray-600">Established legal entity and infrastructure</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-green-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Team Hired</h4>
                    <p className="text-gray-600">Built our core team of 5 experts</p>
                  </div>
                </div>
                <div className="flex items-start">
                  <div className="bg-blue-100 p-2 rounded-full mr-4">
                    <svg className="w-5 h-5 text-blue-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-lg font-semibold text-gray-900">Design Phase</h4>
                    <p className="text-gray-600">Currently finalizing platform designs</p>
                  </div>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Timeline Section - Improved mobile layout */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-br from-blue-50 via-purple-50 to-indigo-50">
        <div className="max-w-4xl mx-auto">
          <motion.h2 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-center text-gray-900 mb-8 sm:mb-12"
          >
            Our {currentMonth} Journey
          </motion.h2>
          <div className="relative">
            {/* Vertical line - hidden on mobile */}
            <div className="hidden sm:block absolute left-1/2 w-0.5 h-full bg-gradient-to-b from-indigo-300 to-purple-300 transform -translate-x-1/2"></div>
            
            {/* Milestones */}
            <div className="space-y-6 sm:space-y-8">
              {milestones.map((milestone, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                  className="relative"
                >
                  {/* Mobile view - centered single column */}
                  <div className="sm:hidden flex justify-center">
                    <div className={`bg-white p-4 sm:p-5 rounded-lg shadow-md border w-full max-w-xs ${
                      milestone.status === "completed" ? "border-green-100" :
                      milestone.status === "in-progress" ? "border-blue-100" :
                      "border-gray-100"
                    }`}>
                      <div className="flex items-center mb-1">
                        {milestone.status === "completed" && (
                          <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                          </svg>
                        )}
                        {milestone.status === "in-progress" && (
                          <svg className="w-4 h-4 text-blue-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                          </svg>
                        )}
                        <span className={`text-xs font-semibold ${
                          milestone.status === "completed" ? "text-green-600" :
                          milestone.status === "in-progress" ? "text-blue-600" :
                          "text-purple-400"
                        }`}>
                          {milestone.status === "completed" ? "COMPLETED" :
                           milestone.status === "in-progress" ? "IN PROGRESS" : "PLANNED"}
                        </span>
                      </div>
                      <h3 className="text-xs sm:text-sm font-bold text-indigo-700">{milestone.date}</h3>
                      <h4 className="text-base sm:text-lg font-semibold text-gray-900 mt-1">{milestone.title}</h4>
                      <p className="text-xs sm:text-sm text-gray-600 mt-1 leading-tight">{milestone.description}</p>
                    </div>
                  </div>
                  
                  {/* Desktop view - unchanged alternating layout */}
                  <div className="hidden sm:flex flex-row items-center">
                    {/* Dot */}
                    <div className={`absolute left-1/2 w-4 h-4 rounded-full transform -translate-x-1/2 ${
                      milestone.status === "completed" ? "bg-green-500" :
                      milestone.status === "in-progress" ? "bg-blue-500" :
                      "bg-purple-300"
                    }`}></div>
                    
                    {/* Content */}
                    <div className={`w-5/12 p-4 rounded-xl ${index % 2 === 0 ? 'mr-auto text-right' : 'ml-auto text-left'}`}>
                      <div className={`bg-white p-5 rounded-lg shadow-md border ${
                        milestone.status === "completed" ? "border-green-100" :
                        milestone.status === "in-progress" ? "border-blue-100" :
                        "border-gray-100"
                      }`}>
                        <div className="flex items-center mb-1">
                          {milestone.status === "completed" && (
                            <svg className="w-4 h-4 text-green-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                            </svg>
                          )}
                          {milestone.status === "in-progress" && (
                            <svg className="w-4 h-4 text-blue-500 mr-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M13 10V3L4 14h7v7l9-11h-7z"></path>
                            </svg>
                          )}
                          <span className={`text-xs font-semibold ${
                            milestone.status === "completed" ? "text-green-600" :
                            milestone.status === "in-progress" ? "text-blue-600" :
                            "text-purple-400"
                          }`}>
                            {milestone.status === "completed" ? "COMPLETED" :
                             milestone.status === "in-progress" ? "IN PROGRESS" : "PLANNED"}
                          </span>
                        </div>
                        <h3 className="text-sm font-bold text-indigo-700">{milestone.date}</h3>
                        <h4 className="text-lg font-semibold text-gray-900 mt-1">{milestone.title}</h4>
                        <p className="text-gray-600 mt-1 text-sm">{milestone.description}</p>
                      </div>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-white">
        <div className="max-w-6xl mx-auto">
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-center mb-12"
          >
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">The {currentMonth} Team</h2>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              The five professionals who came together this month to build the solution
            </p>
          </motion.div>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-5 gap-6">
            {teamMembers.map((member, index) => (
              <TeamMemberCard 
                key={index}
                name={member.name}
                role={member.role}
                bio={member.bio}
                image={member.image}
                social={member.social}
                index={index}
              />
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 px-4 sm:px-6 lg:px-8 bg-gradient-to-r from-indigo-600 to-purple-600">
        <div className="max-w-4xl mx-auto text-center">
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="text-3xl md:text-4xl font-bold text-white mb-6"
          >
            Join Us From The Beginning
          </motion.h2>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.3, duration: 0.8 }}
            viewport={{ once: true }}
            className="text-xl text-indigo-100 mb-8 max-w-2xl mx-auto"
          >
            Be part of our story from these early days of {currentMonth}
          </motion.p>
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ delay: 0.6, duration: 0.8 }}
            viewport={{ once: true }}
            className="flex flex-col sm:flex-row justify-center gap-4"
          >
            <motion.a
              href="/early-access"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-white text-indigo-600 font-bold py-3 px-8 rounded-full shadow-lg hover:shadow-xl transition-all"
            >
              Get Early Access
            </motion.a>
            <motion.a
              href="/collaborate"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="bg-transparent border-2 border-white text-white font-bold py-3 px-8 rounded-full hover:bg-white/10 transition-all"
            >
              Collaborate With Us
            </motion.a>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default AboutUs;