import React, { useState, useRef, useEffect } from 'react';
import './Chatbot.css'; // Optional CSS for typing dots

const Chat = () => {
  const [messages, setMessages] = useState([]);
  const [input, setInput] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const [isBotTyping, setIsBotTyping] = useState(false);
  const messagesEndRef = useRef(null);

  useEffect(() => {
    scrollToBottom();
  }, [messages, isBotTyping]);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const appendMessage = (role, content) => {
    setMessages((prev) => [...prev, { role, content }]);
  };

  const sendMessage = async () => {
    if (!input.trim() || isLoading) return;

    const userMessage = input;
    appendMessage('user', userMessage);
    setInput('');
    setIsLoading(true);

    try {
      const response = await fetch('/chat', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          userMessage,
          conversation: [...messages, { role: 'user', content: userMessage }]
        })
      });

      if (!response.ok) throw new Error(`HTTP error! Status: ${response.status}`);

      const data = await response.json();
      const botReply = data.reply || "Sorry, I didn't get that.";

      setIsBotTyping(true);
      setTimeout(() => {
        appendMessage('bot', botReply);
        setIsBotTyping(false);
      }, 1000 + botReply.length * 20);
    } catch (error) {
      console.error('Chatbot error:', error);
      appendMessage('bot', 'Oops! Something went wrong. Try again later.');
      setIsBotTyping(false);
    }

    setIsLoading(false);
  };

  const handleKeyDown = (e) => {
    if (e.key === 'Enter') sendMessage();
  };

  return (
    <div className="min-h-screen bg-gray-50 flex flex-col items-center justify-center p-4">
      <div className="w-full max-w-xl bg-white shadow-lg rounded-xl overflow-hidden">
        <div className="bg-blue-600 text-white px-4 py-3 font-bold text-lg">
          💬 FreelanceFlow AI Assistant
        </div>

        <div className="h-[500px] overflow-y-auto p-4 bg-gray-100 chatbot-messages">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'} mb-3`}>
              <div
                className={`max-w-xs px-4 py-2 rounded-2xl ${
                  msg.role === 'user'
                    ? 'bg-blue-600 text-white rounded-br-none'
                    : 'bg-green-200 text-gray-800 rounded-bl-none'
                }`}
              >
                {msg.content}
              </div>
            </div>
          ))}

          {isBotTyping && (
            <div className="flex justify-start mb-3">
              <div className="flex items-center space-x-2 bg-green-100 px-3 py-1 rounded-2xl text-gray-600">
                <span className="typing-dots" />
                <span className="text-sm">Typing...</span>
              </div>
            </div>
          )}

          <div ref={messagesEndRef} />
        </div>

        <div className="flex border-t border-gray-300 p-2">
          <input
            type="text"
            className="flex-1 px-4 py-2 border border-gray-300 rounded-l-2xl focus:outline-none"
            placeholder="Ask a question..."
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyDown={handleKeyDown}
            disabled={isLoading}
          />
          <button
            onClick={sendMessage}
            disabled={isLoading}
            className="px-4 py-2 bg-blue-600 text-white rounded-r-2xl hover:bg-blue-700 disabled:opacity-50"
          >
            Send
          </button>
        </div>
      </div>
    </div>
  );
};

export default Chat;
