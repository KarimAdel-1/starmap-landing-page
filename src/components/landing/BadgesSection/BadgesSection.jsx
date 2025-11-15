'use client';

import { useState } from 'react';

export default function BadgesSection() {
  const [hoveredIndex, setHoveredIndex] = useState(0);
  const badges = ['Birthday Gift', 'Wedding', 'Engagement', 'Graduation', 'Friendship', 'New Baby'];
  const colors = ['bg-blue-600', 'bg-blue-700', 'bg-blue-800', 'bg-blue-900', 'bg-black', 'bg-gray-800'];

  return (
    <section className="relative box-border caret-transparent my-[60px] px-6 py-[100px] md:my-[180px]">
      <div className="relative box-border caret-transparent text-center z-10">
        {badges.map((badge, index) => (
          <h2
            key={index}
            onMouseEnter={() => setHoveredIndex(index)}

            className={`text-[44px] font-black box-border caret-transparent tracking-[-1.44px] leading-[35.2px] uppercase w-max mx-auto font-venice_blvd md:text-8xl md:font-bold md:tracking-[-2.88px] md:leading-[76.8px] cursor-pointer transition-colors duration-300 ${hoveredIndex === index ? 'text-blue-600' : ''}`}
          >
            {badge}
          </h2>
        ))}
      </div>
      <div className="absolute box-border caret-transparent h-full w-full left-0 top-0">
        <div className="absolute box-border caret-transparent h-full pointer-events-none w-full z-[2] left-0 top-0">
          {hoveredIndex !== null && (
            <>
              <div className={`absolute h-[100px] w-[100px] rounded-lg ${colors[hoveredIndex]} transition-transform duration-500 ease-out scale-110 sm:h-[140px] sm:w-[140px] md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px] ${hoveredIndex % 2 === 0 ? 'top-[-30px] -left-3 sm:top-[-50px] sm:-left-5 lg:top-[-100px] lg:-left-10 rotate-[-10deg]' : 'top-[-30px] -right-3 sm:top-[-50px] sm:-right-5 lg:top-[-100px] lg:-right-10 rotate-[10deg]'}`}></div>
              <div className={`absolute h-[100px] w-[100px] rounded-lg ${colors[hoveredIndex]} transition-transform duration-500 ease-out scale-110 sm:h-[140px] sm:w-[140px] md:h-[200px] md:w-[200px] lg:h-[300px] lg:w-[300px] ${hoveredIndex % 2 === 0 ? '-right-8 -bottom-3 sm:-right-10 sm:-bottom-5 lg:bottom-[-100px] rotate-[10deg]' : '-left-8 -bottom-3 sm:-left-10 sm:-bottom-5 lg:bottom-[-100px] rotate-[-10deg]'}`}></div>
            </>
          )}
        </div>
      </div>
    </section>
  );
}
