'use client';

import { useEffect, useRef, useState } from 'react';
import { gsap } from 'gsap';
import { FaInstagram } from 'react-icons/fa';

export default function SocialGallery() {
  const galleryRef = useRef(null);
  const animationRef = useRef(null);
  const [isPaused, setIsPaused] = useState(false);
  const images = [
    {
      href: '#',
      alt: 'Image 1',
      bgColor: 'bg-white',
      aspect: 'aspect-[4_/_5]',
    },
    {
      href: '#',
      alt: 'Image 2',
      bgColor: 'bg-white',
      aspect: 'aspect-[4_/_5]',
    },
    {
      href: '#',
      alt: 'Image 3',
      bgColor: 'bg-white',
      aspect: 'aspect-[4_/_5]',
    },
    {
      href: '#',
      alt: 'Image 4',
      bgColor: 'bg-white',
      aspect: 'aspect-[4_/_5]',
    },
    {
      href: '#',
      alt: 'Image 5',
      bgColor: 'bg-white',
      aspect: 'aspect-[4_/_5]',
    },
  ];

  useEffect(() => {
    const gallery = galleryRef.current;
    const items = gallery.children;
    const itemWidth = items[0].offsetWidth;

    animationRef.current = gsap.to(gallery, {
      x: -itemWidth,
      duration: 30,
      ease: 'none',
      repeat: -1,
    });

    return () => animationRef.current?.kill();
  }, []);

  useEffect(() => {
    if (!animationRef.current) return;

    if (isPaused) {
      animationRef.current.pause();
    } else {
      animationRef.current.play();
    }
  }, [isPaused]);

  return (
    <div
      className="relative box-border caret-transparent flex h-max overflow-x-hidden overflow-y-auto w-full"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
    >
      <div className="absolute box-border caret-transparent h-full w-full"></div>
      <div ref={galleryRef} className="box-border caret-transparent flex">
        {[...Array(4)].map((_, groupIndex) => (
          <div
            key={groupIndex}
            className="items-center box-border caret-transparent flex shrink-0 min-h-[0%] min-w-[0%] z-[1]"
          >
            {images.map((image, index) => (
              <div
                key={index}
                className="relative box-border caret-transparent"
              >
                <a href={image.href} className="box-border caret-transparent">
                  <button className="absolute text-[13.3333px] items-center bg-stone-800 caret-transparent flex leading-[normal] px-4 py-3 rounded-lg left-5 top-3 font-arial">
                    <div className="box-border caret-transparent">
                      <div className="text-sm font-bold items-center box-border caret-transparent flex justify-center tracking-[-0.28px] leading-[14px] text-nowrap font-degular">
                        <FaInstagram className="box-border caret-transparent text-nowrap w-4 pr-1" />
                        Instagram
                      </div>
                    </div>
                  </button>
                  <div
                    className={`${image.bgColor} ${image.aspect} box-border caret-transparent h-full w-[250px] mx-[5px] rounded-lg md:w-[300px] md:mx-2 md:rounded-xl`}
                  ></div>
                </a>
              </div>
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}
