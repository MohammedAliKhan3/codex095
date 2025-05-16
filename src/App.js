import { Routes, Route } from 'react-router-dom';
import { useEffect } from 'react';
import Home from './pages/Home';
import About from './pages/About';
import Services from './pages/Services';
import Contact from './pages/Contact';
import Navbar from './Components/Navbar/Navbar';
import Chatbot from './Components/Chatbot/Chatbot';

function App() {
  useEffect(() => {
    // Test route to verify backend connection
    fetch('/test')
      .then(res => res.text())
      .then(data => console.log('Test route response:', data))
      .catch(err => console.error('Test route error:', err));
  }, []);

  return (
    <div className="min-h-screen bg-gray-900 text-white relative overflow-visible">
      {/* Navbar - make sure it has lower z-index than Chatbot */}
      <Navbar className="relative z-10" />
      
      {/* Main content area */}
      <main className="container mx-auto px-4 pt-20 pb-20 relative z-0">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/services" element={<Services />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
      </main>

      {/* Chatbot with forced high z-index and debug border */}
      <div className="fixed">
        <Chatbot />
      </div>

      {/* Debug overlay - uncomment to check layout */}
      {/* <div className="fixed inset-0 bg-black bg-opacity-10 pointer-events-none z-[99999]"></div> */}
    </div>
  );
}

export default App;