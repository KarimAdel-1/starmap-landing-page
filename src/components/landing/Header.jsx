'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import Navbar from './Navbar';

export default function Header() {
  const headerRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;
      
      if (currentScrollY > lastScrollY.current && currentScrollY > 100) {
        gsap.to(headerRef.current, {
          y: -100,
          duration: 0.3,
          ease: 'power2.out'
        });
      } else {
        gsap.to(headerRef.current, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out'
        });
      }
      
      lastScrollY.current = currentScrollY;
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header ref={headerRef} className="fixed box-border caret-transparent flex justify-between max-w-[1728px] w-full z-[1000] mx-auto px-2 py-4 top-0 inset-x-0 md:px-4">
      <Navbar />
    </header>
  );
}
