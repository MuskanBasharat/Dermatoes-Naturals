import React, { useState, useEffect } from 'react';
import './FloatingButtons.css'
function FloatingButtons() {
  const [showScrollButton, setShowScrollButton] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollButton(window.scrollY > 300);
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  return (
    <div className="floating-buttons">
     
      
      {showScrollButton && (
        <button className="scroll-top-button" onClick={scrollToTop}>
          <i className="fas fa-arrow-up"></i>
        </button>
      )}
       <a 
        href="https://wa.me/923026673345?text=Hello%2C%20I%20would%20like%20to%20inquire%20about%20your%20products." 
        className="whatsapp-button"
        target="_blank" 
        rel="noopener noreferrer"
      >
        <i className="fab fa-whatsapp"></i>
      </a>
    </div>
  );
}

export default FloatingButtons;