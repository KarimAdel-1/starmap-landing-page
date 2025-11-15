'use client';

import { useState } from 'react';
import { IoChevronForward } from 'react-icons/io5';
import StepsGrid from './StepsGrid';

export default function HowItWorksSection() {
  const [currentSlide, setCurrentSlide] = useState(0);
  const totalSlides = 3;

  return (
    <div className="relative bg-blue-50 box-border caret-transparent z-10 overflow-hidden -mt-5 pt-[46px] pb-[30px] rounded-xl md:pt-[60px] md:pb-10 md:rounded-3xl">
      <h2 className="text-[32px] font-black box-border caret-transparent tracking-[-0.96px] leading-[25.6px] max-w-none uppercase mb-5 font-venice_blvd md:text-[62px] md:tracking-[-1.86px] md:leading-[49.6px] md:max-w-[800px] md:mb-8 mx-auto text-center">How It Works</h2>
      <div className="box-border caret-transparent overflow-hidden md:overflow-visible">
        <div className="box-border caret-transparent">
          <StepsGrid currentSlide={currentSlide} />
          <div className="items-center bg-transparent box-border caret-transparent flex flex-col justify-center w-auto mt-[30px] mx-auto p-2.5 rounded-xl lg:flex-row lg:w-fit">
            <div className="items-center box-border caret-transparent gap-x-2 flex justify-center min-w-[auto] gap-y-2 mr-0 px-5 lg:hidden">
              <button
                onClick={() => setCurrentSlide(currentSlide > 0 ? currentSlide - 1 : totalSlides - 1)}
                aria-label="Go to previous slide"
                className="text-stone-950/30 text-[13.3333px] bg-transparent caret-transparent flex leading-[normal] text-center mr-[30px] font-arial"
              >
                <div className="items-center aspect-square bg-stone-50 box-border caret-transparent flex justify-center w-[25px] rounded-md">
                  <IoChevronForward className="text-stone-800 rotate-180" />
                </div>
              </button>
              {[...Array(totalSlides)].map((_, index) => (
                <button
                  key={index}
                  onClick={() => setCurrentSlide(index)}
                  aria-label={`Go to slide ${index + 1}`}
                  className={`text-stone-950/30 text-[13.3333px] aspect-square caret-transparent flex shrink-0 h-2.5 leading-[normal] text-center w-2.5 p-0 rounded-lg font-arial ${currentSlide === index ? 'bg-neutral-900 basis-5' : 'bg-stone-800 basis-2 opacity-30'}`}
                ></button>
              ))}
              <button
                onClick={() => setCurrentSlide(currentSlide < totalSlides - 1 ? currentSlide + 1 : 0)}
                aria-label="Go to next slide"
                className="text-stone-950/30 text-[13.3333px] bg-transparent caret-transparent flex leading-[normal] text-center ml-5 font-arial"
              >
                <div className="items-center aspect-square bg-stone-50 box-border caret-transparent flex justify-center w-[25px] rounded-md">
                  <IoChevronForward className="text-stone-800" />
                </div>
              </button>
            </div>
            <a href="/create" className="box-border caret-transparent block">
              <button className="text-stone-50 text-[13.3333px] items-center bg-stone-800 caret-transparent flex leading-[normal] text-center mt-5 px-4 py-3 rounded-lg font-arial lg:mt-0">
                <div className="box-border caret-transparent">
                  <div className="text-sm font-bold items-center box-border caret-transparent flex justify-center tracking-[-0.28px] leading-[14px] text-nowrap font-degular">
                    CAPTURE A MEMORY
                    <div className="items-center aspect-square bg-stone-50 box-border caret-transparent flex justify-center text-nowrap w-[18px] ml-2 rounded-md">
                      <IoChevronForward className="text-stone-800" />
                    </div>
                  </div>
                </div>
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
