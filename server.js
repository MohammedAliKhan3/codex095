const express = require('express');
const cors = require('cors');
const axios = require('axios');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Configuration
const config = {
  DEEPSEEK_API_KEY: process.env.DEEPSEEK_API_KEY || '3792d48d5bbd40befa33904d88d22aab7f735bd51c4614828cb9a350a131edb2',
  NODE_ENV: process.env.NODE_ENV || 'development'
};

// Middleware
app.use(express.json());
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
  methods: ['GET', 'POST', 'OPTIONS'],
  allowedHeaders: ['Content-Type', 'Authorization']
}));

// Serve static files from the React app's build folder
app.use(express.static(path.join(__dirname, 'build')));

// API Endpoint
app.post('/chat', async (req, res) => {
  try {
    console.log('Received POST request to /chat');
    const { userMessage, conversation = [] } = req.body;

    if (!userMessage?.trim()) {
      return res.status(400).json({ error: 'Message is required' });
    }

    const messages = [
      {
        role: "system",
        content: "You are a helpful assistant for Greenwood High School. Keep responses short (1-2 sentences)."
      },
      ...conversation.filter(msg => 
        msg?.role && ['system', 'user', 'assistant'].includes(msg.role) &&
        msg?.content?.trim()
      ),
      { role: "user", content: userMessage.trim() }
    ];

    const response = await axios.post('https://api.together.xyz/v1/chat/completions', {
      model: "meta-llama/Llama-Vision-Free",
      messages,
      temperature: 0.7,
      max_tokens: 150
    }, {
      headers: {
        'Authorization': `Bearer ${config.DEEPSEEK_API_KEY}`,
        'Content-Type': 'application/json'
      },
      timeout: 8000
    });

    const data = response.data;
    const reply = data.choices?.[0]?.message?.content?.trim();

    res.json({ 
      success: true,
      reply: reply || "I didn't get a response. Please try again.",
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    console.error('Error in /chat endpoint:', error.message);
    res.status(500).json({ 
      success: false,
      error: 'Chat service unavailable',
      ...(config.NODE_ENV === 'development' && { debug: error.message })
    });
  }
});

// Handle all other routes by serving the React app
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

// Start server
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});