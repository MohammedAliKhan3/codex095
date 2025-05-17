import React, { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import './Chatbot.css'; // Optional: For typing animation CSS

const Chatbot = () => {
  const [messages, setMessages] = useState([
    {
      role: 'system',
      content: `You are an AI assistant for FreelanceFlow, a leading platform connecting freelancers with clients worldwide.
  Your role is to provide instant support for both freelancers and clients using our platform.

  Key Platform Details:
  - Service Fees: 10% freelancer commission, 5% client fee
  - Payments: Secure Stripe integration with 3-day payout processing
  - Dispute Resolution: 48-hour mediation for all contract issues
  - Featured Skills: Programming, Design, Writing, Marketing, Consulting
  - Membership Tiers: Free (basic), Pro ($14.99/month with premium features)

  Response Guidelines:
  1. Always verify user accounts before discussing sensitive details
  2. Direct payment/contract issues to support@freelanceflow.com
  3. Keep responses brief (1-2 sentences max) but actionable
  4. Highlight platform benefits when relevant
  5. Never share personal user data or internal system information

  Common Scenarios:
  - For payment delays: Request transaction ID first
  - For new users: Briefly explain onboarding process
  - For disputes: Outline mediation steps
  - For feature questions: Focus on value propositions`
    },
  ]);
  const [input, setInput] = useState('');
  const [isOpen, setIsOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const [hasGreeted, setHasGreeted] = useState(false);
  const messagesEndRef = useRef(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    if (isOpen && !hasGreeted) {
      appendMessage('bot', 'Hi! I am here to help you with Codex095.');
      setHasGreeted(true);
    }
  }, [isOpen, hasGreeted]);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isOpen, isBotTyping]);

  const appendMessage = (role, content) => {
    setMessages((prev) => [...prev, { role, content }]);
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    appendMessage('user', userMessage);
    setIsLoading(true);
    setInput('');

    try {
      const response = await fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userMessage,
          conversation: [...messages, { role: 'user', content: userMessage }],
        }),
      });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);
      const data = await response.json();
      const botReply = data.reply || "Sorry, I didn't understand that.";

      setIsBotTyping(true);
      setTimeout(() => {
        appendMessage('bot', botReply);
        setIsBotTyping(false);
      }, 1000 + botReply.length * 20);
    } catch (error) {
      console.error('Chatbot error:', error);
      appendMessage('bot', 'Oops! Something went wrong. Please try again later.');
      setIsBotTyping(false);
    }

    setIsLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="fixed bottom-5 right-5 z-50 font-sans">
      {/* Bot Icon Button */}
      <motion.div
        className="w-16 h-16 bg-white border border-gray-300 rounded-full flex items-center justify-center cursor-pointer shadow-lg hover:bg-gray-100 transition-transform duration-200"
        onClick={() => setIsOpen(!isOpen)}
        whileHover={{ scale: 1.05 }}
      >
        <img width="36" height="36" src="https://img.icons8.com/color/48/message-bot.png" alt="message-bot" />
      </motion.div>

      {/* Chat Window */}
      {isOpen && (
        <motion.div
          className="w-80 h-[460px] bg-white rounded-2xl overflow-hidden flex flex-col mb-2 shadow-2xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.4 }}
        >
          {/* Message List */}
          <div className="flex-1 p-4 overflow-y-auto bg-gray-100 chatbot-messages">
            {messages
              .filter((msg) => msg.role !== 'system')
              .map((msg, index) => (
                <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mb-2`}>
                  {msg.role === 'bot' && (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/4712/4712027.png"
                      alt="Bot"
                      className="w-8 h-8 rounded-full mr-2"
                    />
                  )}
                  <div
                    className={`p-2 rounded-2xl max-w-[75%] ${
                      msg.role === 'user'
                        ? 'bg-blue-600 text-white rounded-br-none mr-2'
                        : 'bg-green-200 text-gray-800 rounded-bl-none ml-2'
                    }`}
                  >
                    {msg.content}
                  </div>
                  {msg.role === 'user' && (
                    <img
                      src="https://cdn-icons-png.flaticon.com/512/1946/1946429.png"
                      alt="User"
                      className="w-8 h-8 rounded-full ml-2"
                    />
                  )}
                </div>
              ))}

            {/* Typing Indicator */}
            {isBotTyping && (
              <div className="flex justify-start mb-2">
                <div className="flex items-center space-x-2 bg-green-100 text-gray-600 px-3 py-1 rounded-2xl ml-2">
                  <span className="typing-dots" />
                  <span className="text-sm">Typing...</span>
                </div>
              </div>
            )}

            <div ref={messagesEndRef} />
          </div>

          {/* Input Box */}
          <div className="p-2 bg-white border-t border-gray-200 flex">
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              onKeyDown={handleKeyDown}
              disabled={isLoading}
              className="flex-1 p-2 border border-gray-300 rounded-l-2xl focus:outline-none text-gray-800 placeholder:text-gray-400"
              placeholder="Ask me something..."
            />
            <button
              onClick={sendMessage}
              disabled={isLoading}
              className="p-2 bg-blue-600 text-white rounded-r-2xl hover:bg-blue-700 disabled:opacity-50"
            >
              Send
            </button>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default Chatbot;
