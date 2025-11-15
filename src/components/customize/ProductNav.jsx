'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';

export default function ProductNav() {
  const logoRef = useRef(null);
  const backRef = useRef(null);
  const cartRef = useRef(null);
  const lastScrollY = useRef(0);

  useEffect(() => {
    const checkScroll = () => {
      const currentScrollY = window.locomotiveScroll?.scroll?.instance?.scroll?.y || window.scrollY;

      if (currentScrollY > 5) {
        gsap.to(logoRef.current, {
          y: -100,
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to([backRef.current, cartRef.current], {
          backgroundColor: '#3b82f6',
          color: '#ffffff',
          duration: 0.3,
          ease: 'power2.out',
        });
      } else {
        gsap.to(logoRef.current, {
          y: 0,
          duration: 0.3,
          ease: 'power2.out',
        });
        gsap.to([backRef.current, cartRef.current], {
          backgroundColor: 'transparent',
          color: '#292524',
          duration: 0.3,
          ease: 'power2.out',
        });
      }
    };

    const interval = setInterval(checkScroll, 100);
    
    return () => {
      clearInterval(interval);
    };
  }, []);

  return (
    <header className="fixed box-border caret-transparent flex items-center justify-between max-w-[1728px] w-full z-[1000] px-4 md:px-8 py-8 top-0 inset-x-0 mx-auto">
      <a
        ref={backRef}
        href="/"
        className="flex items-center gap-2 text-stone-800 hover:opacity-70 transition-colors rounded-full px-4 py-2"
      >
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M10 19l-7-7m0 0l7-7m-7 7h18"
          />
        </svg>
        <span className="text-sm font-medium">Back</span>
      </a>

      <a
        ref={logoRef}
        href="/"
        className="absolute left-1/2 transform -translate-x-1/2"
      >
        <span className="text-2xl md:text-3xl font-black uppercase font-venice_blvd text-stone-800">
          Starmap
        </span>
      </a>

      <button ref={cartRef} className="flex items-center gap-2 text-stone-800 hover:opacity-70 transition-colors rounded-full px-4 py-2">
        <svg
          className="w-6 h-6"
          fill="none"
          stroke="currentColor"
          viewBox="0 0 24 24"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeWidth={2}
            d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
          />
        </svg>
        <span className="text-sm font-medium">Cart</span>
      </button>
    </header>
  );
}
