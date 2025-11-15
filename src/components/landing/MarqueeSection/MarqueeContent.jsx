'use client';

import { useEffect, useRef } from 'react';
import { gsap } from 'gsap';
import { IoStar } from 'react-icons/io5';

export default function MarqueeContent() {
  const marqueeRef = useRef(null);

  useEffect(() => {
    const marquee = marqueeRef.current;
    const items = marquee.children;
    const itemWidth = items[0].offsetWidth;
    
    gsap.to(marquee, {
      x: -itemWidth,
      duration: 20,
      ease: 'none',
      repeat: -1
    });
  }, []);

  return (
    <div className="text-stone-800 bg-white box-border caret-transparent uppercase pt-4 pb-8 md:pt-5 md:pb-9">
      <div className="relative box-border caret-transparent flex h-max overflow-x-hidden overflow-y-auto w-full">
        <div className="absolute box-border caret-transparent h-full w-full"></div>
        <div ref={marqueeRef} className="box-border caret-transparent flex">
          {[...Array(4)].map((_, i) => (
            <div key={i} className="items-center box-border caret-transparent flex shrink-0 min-h-[0%] min-w-[0%] z-[1]">
              <div className="items-center box-border caret-transparent gap-x-2.5 flex gap-y-2.5 text-nowrap overflow-hidden pr-2.5">
                <div className="items-center box-border caret-transparent flex text-nowrap">
                  <IoStar className="box-border caret-transparent h-3 w-3 text-nowrap mr-2.5" />
                  <div className="text-base font-medium box-border caret-transparent tracking-[-0.18px] leading-[19.2px] text-nowrap font-degular md:text-xl md:tracking-[-0.2px] md:leading-6">
                    <p className="text-base box-border caret-transparent tracking-[-0.18px] leading-[19.2px] max-w-[1100px] text-nowrap md:text-2xl md:tracking-[-0.24px] md:leading-[28.8px]">
                      <strong className="text-base font-bold box-border caret-transparent tracking-[-0.18px] leading-[19.2px] text-nowrap md:text-2xl md:tracking-[-0.24px] md:leading-[28.8px]">
                        Capture Your Special Moments in the Stars
                      </strong>
                    </p>
                  </div>
                </div>
                <div className="items-center box-border caret-transparent flex text-nowrap">
                  <IoStar className="box-border caret-transparent h-3 w-3 text-nowrap mr-2.5" />
                  <div className="text-base font-medium box-border caret-transparent tracking-[-0.18px] leading-[19.2px] text-nowrap font-degular md:text-xl md:tracking-[-0.2px] md:leading-6">
                    <p className="text-base box-border caret-transparent tracking-[-0.18px] leading-[19.2px] max-w-[1100px] text-nowrap md:text-2xl md:tracking-[-0.24px] md:leading-[28.8px]">
                      Custom Star Maps on Jewelry, Posters &amp; More!
                    </p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
