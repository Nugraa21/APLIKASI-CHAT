import React, { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route, Link } from "react-router-dom";
import "./index.css";
import Home from "./Pages/Home.jsx";
import About from "./Pages/About.jsx";
import AnimatedBackground from "./components/Background.jsx";
import Navbar from "./components/Navbar.jsx";
import Portofolio from "./Pages/Portofolio.jsx"
import ContactPage from "./Pages/Contact.jsx";
import WelcomeScreen from "./Pages/WelcomeScreen.jsx";
import { AnimatePresence } from 'framer-motion';
import NotFound from "./NotFound.jsx";

// Di bagian atas untuk memasukan berberapa import librari / componentes
// Dan pada bagian bawah di di mana kita akan langsung memprogram structure nya satu persatu


const LandingPage = ({ showWelcome, setShowWelcome }) => {
  return (
    <>
      <AnimatePresence mode="wait">
        {showWelcome && (
          <WelcomeScreen onLoadingComplete={() => setShowWelcome(false)} />
        )}
      </AnimatePresence>

      {!showWelcome && (
        <div className="relative w-full min-h-screen overflow-x-hidden">
          <Navbar />
          <AnimatedBackground />
          <main className="flex flex-col">
            {/* Memasukan Componentes*/}
            <Home />
            <About />
            <Portofolio />
            <ContactPage />
          </main>

          {/* Footer */}
          <footer className="border-t-4 border-orange-500 mt-12 xs:mt-16 px-2 xs:px-4 sm:px-6 md:px-8 lg:px-12 py-8 xs:py-10 bg-orange-50 text-gray-800 text-[10px] xs:text-xs sm:text-sm font-medium">
            <div className="text-center mt-6 xs:mt-8 sm:mt-10 text-gray-500 text-[10px] xs:text-xs">
              © 2025 Ludang Prasetyo Nugroho. All rights reserved.
            </div>
          </footer>
        </div>
      )}
    </>
  );
};

function CustomCursor() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [hovered, setHovered] = useState(false);

  useEffect(() => {
    const moveCursor = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    const addHoverEvents = () => {
      const interactiveElements = document.querySelectorAll('a, button, input, textarea, select, label, [role="button"]');

      const handleMouseEnter = () => setHovered(true);
      const handleMouseLeave = () => setHovered(false);

      interactiveElements.forEach(el => {
        el.addEventListener('mouseenter', handleMouseEnter);
        el.addEventListener('mouseleave', handleMouseLeave);
      });

      return () => {
        interactiveElements.forEach(el => {
          el.removeEventListener('mouseenter', handleMouseEnter);
          el.removeEventListener('mouseleave', handleMouseLeave);
        });
      };
    };

    window.addEventListener("mousemove", moveCursor);
    const cleanupHover = addHoverEvents();

    return () => {
      window.removeEventListener("mousemove", moveCursor);
      cleanupHover();
    };
  }, []);

  return (
    <div
      className={`custom-cursor ${hovered ? 'custom-cursor-hover' : ''} hidden sm:block`}
      style={{
        left: `${position.x}px`,
        top: `${position.y}px`,
      }}
    />
  );
}

function App() {
  const [showWelcome, setShowWelcome] = useState(true);

  return (
    <div className="w-full min-h-screen overflow-x-hidden">
      <CustomCursor />
      <BrowserRouter>
        <Routes>
          <Route
            path="/"
            element={<LandingPage showWelcome={showWelcome} setShowWelcome={setShowWelcome} />}
          />
          {/* <Route path="/about" element={<About />} /> */}
          <Route path="/contact" element={<ContactPage />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;