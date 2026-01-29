import React, { useState, useEffect } from 'react';
import './ButtonToUp.css';

const ButtonToUp = () => {
  const [isVisible, setIsVisible] = useState(false);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  useEffect(() => {
    const toggleVisibility = () => {
      setIsVisible(window.scrollY > 300); // يظهر بعد التمرير 300px
    };

    window.addEventListener('scroll', toggleVisibility);
    return () => window.removeEventListener('scroll', toggleVisibility);
  }, []);

  return (
    <div className="button-to-up">
      <button
        onClick={scrollToTop}
        className={isVisible ? 'visible' : ''}
      >
        UP
      </button>
    </div>
  );
};

export default ButtonToUp;

