import React, { useState, useEffect } from 'react';
import { motion } from 'framer-motion';

const Contact = () => {
  const [serviceType, setServiceType] = useState('');
  const [isPriority, setIsPriority] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    setServiceType(params.get('service') || 'our services');
    setIsPriority(params.get('priority') === 'true');
  }, []);

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.target;
    const formData = new FormData(form);
    const data = new URLSearchParams(formData).toString();

    try {
      const response = await fetch(form.action, {
        method: form.method,
        body: data,
        headers: {
          'Content-Type': 'application/x-www-form-urlencoded',
          Accept: 'application/json',
        },
      });

      if (response.ok) {
        setIsSubmitted(true);
        form.reset();
      } else {
        const result = await response.json();
        alert(`Form submission error: ${result.message || 'Unknown error'}`);
      }
    } catch (error) {
      console.error('Submission error:', error);
      alert('There was a problem submitting your form.');
    }
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-2xl mx-auto"
      >
        <div className="text-center mb-12">
          <motion.h1
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            className="text-4xl font-bold text-gray-900 mb-4 font-serif"
          >
            Get in Touch
          </motion.h1>
          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.3 }}
            className="text-lg text-gray-600 max-w-lg mx-auto"
          >
            Have questions about {serviceType}? We'd love to hear from you.
          </motion.p>
        </div>

        {isPriority && (
          <motion.div
            initial={{ scale: 0.9, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-gradient-to-r from-amber-400 to-amber-500 text-white p-5 rounded-xl shadow-lg mb-8 flex items-center"
          >
            <div className="mr-4 text-2xl">⚡</div>
            <div>
              <h3 className="font-bold text-lg">Priority Support Activated</h3>
              <p>Your request will get a response within 1 hour</p>
            </div>
          </motion.div>
        )}

        <motion.div whileHover={{ y: -5 }} className="bg-white rounded-2xl shadow-xl overflow-hidden">
          <div className="p-8">
            {isSubmitted ? (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="text-center py-12"
              >
                <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6">
                  <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M5 13l4 4L19 7"></path>
                  </svg>
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Message Sent!</h3>
                <p className="text-gray-600 mb-6">We'll get back to you soon.</p>
                <button
                  onClick={() => setIsSubmitted(false)}
                  className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                >
                  Send Another Message
                </button>
              </motion.div>
            ) : (
              <form
                action="https://submit-form.com/YRrJh2Wfb"
                method="POST"
                onSubmit={handleSubmit}
                className="space-y-6"
              >
                {/* Hidden fields for Formspark */}
                <input type="hidden" name="_email.template.title" value="New Contact Form Submission" />
                <input type="hidden" name="_email.template.auto_response" value="Thank you for contacting us! We will get back to you soon." />
                <input type="hidden" name="service" value={serviceType} />

                <h3 className="font-semibold text-gray-800"> Information</h3>
                <div className="flex gap-4">
                  <input
                    type="text"
                    name="first_name"
                    placeholder="Enter first name"
                    required
                    className="w-1/2 px-4 py-3 border border-gray-300 rounded-lg text-black placeholder-gray-500"
                  />
                  <input
                    type="text"
                    name="last_name"
                    placeholder="Enter last name"
                    required
                    className="w-1/2 px-4 py-3 border border-gray-300 rounded-lg text-black placeholder-gray-500"
                  />
                </div>

                <h3 className="font-semibold text-gray-800">Email</h3>
                <input
                  type="email"
                  name="email"
                  required
                  placeholder="e.g : example@email.com"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black placeholder-gray-500"
                />

                <h3 className="font-semibold text-gray-800">Phone</h3>
                <input
                  type="tel"
                  name="phone"
                  required
                  placeholder="Enter your phone number"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black placeholder-gray-500"
                />

                <h3 className="font-semibold text-gray-800">Message</h3>
                <textarea
                  name="description"
                  required
                  rows="4"
                  placeholder="Enter your message"
                  className="w-full px-4 py-3 border border-gray-300 rounded-lg text-black placeholder-gray-500"
                />

                <motion.button
                  whileHover={{ scale: 1.02 }}
                  whileTap={{ scale: 0.98 }}
                  type="submit"
                  className="w-full px-6 py-3 bg-gradient-to-r from-blue-600 to-blue-700 text-white font-medium rounded-lg shadow-lg hover:shadow-xl transition-all"
                >
                  Send Message
                </motion.button>
              </form>
            )}
          </div>
        </motion.div>
      </motion.div>
    </div>
  );
};

export default Contact;
