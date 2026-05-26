'use client';

import { useState, useEffect } from 'react';

export default function Navbar() {
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // If scrolling down, and we've scrolled past the first 50px, hide the navbar
      if (currentScrollY > lastScrollY && currentScrollY > 50) {
        setIsVisible(false);
      } else {
        // If scrolling up, show the navbar again
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [lastScrollY]);

  return (
    <nav 
      className={`fixed top-0 left-0 w-full p-8 z-50 flex justify-between items-center pointer-events-none transition-transform duration-500 ease-in-out ${
        isVisible ? 'translate-y-0' : '-translate-y-full'
      }`}
    >
      <div className="flex items-center gap-4">
        <img src="/yash-portfolio/logo.png" alt="Studio Logo" className="h-10 w-auto object-contain mix-blend-multiply" />
        <span className="font-medium tracking-widest uppercase text-sm text-[#1a1a1a]">Yash Yadav</span>
      </div>
      <div className="text-sm tracking-widest uppercase text-[#1a1a1a]">
        Jaipur, IN
      </div>
    </nav>
  );
}