'use client';

import { useState, useEffect } from 'react';
import { IoChevronForward } from 'react-icons/io5';
import HeroSlide from './HeroSlide';

const slides = [
  { id: 1, bgColor: 'bg-blue-600', title: 'Slide 1', description: 'Description 1' },
  { id: 2, bgColor: 'bg-blue-700', title: 'Slide 2', description: 'Description 2' },
  { id: 3, bgColor: 'bg-blue-800', title: 'Slide 3', description: 'Description 3' },
  { id: 4, bgColor: 'bg-blue-900', title: 'Slide 4', description: 'Description 4' }
];

export default function HeroCarousel() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    setProgress(0);
    const progressTimer = setInterval(() => {
      setProgress((prev) => {
        if (prev >= 100) return 100;
        return prev + 2;
      });
    }, 100);

    const slideTimer = setTimeout(() => {
      setCurrentSlide((prev) => (prev + 1) % slides.length);
    }, 5000);

    return () => {
      clearInterval(progressTimer);
      clearTimeout(slideTimer);
    };
  }, [currentSlide]);

  return (
    <>
      <div className={`absolute inset-0 ${slides[currentSlide].bgColor} transition-colors duration-500`}></div>
      <div className="relative box-border caret-transparent z-[11] flex flex-col h-full">
        <div className="box-border caret-transparent flex-grow relative z-10 flex items-center justify-center">
          <HeroSlide slide={slides[currentSlide]} />
        </div>
        <div className="box-border caret-transparent pb-8 relative z-20">
        <div className="box-border caret-transparent flex-col mx-auto p-2.5 md:flex-row">
          <div className="items-center box-border caret-transparent gap-x-2 flex justify-center min-w-0 gap-y-2 px-5 md:min-w-[257px]">
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentSlide(index)}
                aria-label={`Go to slide ${index + 1}`}
                className={`relative text-stone-950/30 text-[13.3333px] aspect-square bg-white/30 caret-transparent block shrink-0 h-2 leading-[normal] text-center w-2.5 overflow-hidden p-0 rounded-lg font-arial md:aspect-auto md:w-auto ${currentSlide === index ? 'basis-5' : 'basis-2'}`}
              >
                {currentSlide === index && (
                  <div 
                    className="absolute left-0 top-0 h-full bg-white rounded-lg transition-all duration-100 ease-linear"
                    style={{ width: `${progress}%` }}
                  ></div>
                )}
              </button>
            ))}
          </div>
        </div>
        <div className="items-center box-border caret-transparent flex justify-center mt-[30px]">
          <a href="/create" className="text-stone-50 text-[13.3333px] items-center bg-stone-800 caret-transparent inline-flex leading-[normal] text-center px-4 py-3 rounded-lg font-arial">
            <div className="box-border caret-transparent">
              <div className="text-sm font-bold items-center box-border caret-transparent flex justify-center tracking-[-0.28px] leading-[14px] text-nowrap font-degular">
                Customize Now
                <div className="items-center aspect-square bg-stone-50 box-border caret-transparent flex justify-center text-nowrap w-[18px] ml-2 rounded-md">
                  <IoChevronForward className="text-stone-800" />
                </div>
              </div>
            </div>
          </a>
        </div>
      </div>
    </div>
    </>
  );
}
