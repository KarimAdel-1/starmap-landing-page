'use client';

import React, { useRef, useEffect } from 'react';
import { gsap } from 'gsap';
import CelestialMap from './CelestialMap';

const ProductHero = ({
  product,
  selectedPoster,
  selectedFrame,
  selectedLayout,
  selectedColor,
  displayOptions,
  showBorder,
  personalMessage,
  selectedDate,
  selectedTime,
  timezoneOffset,
  latitude,
  longitude,
  onGalleryClick,
  isFieldFocused,
}) => {
  const colorMap = {
    'Midnight Blue': '#0b1a26',
    Black: '#000000',
    'Dark Blue': '#1e3a5f',
    Teal: '#234955',
    Purple: '#9333ea',
    Mint: '#5eead4',
    Pink: '#ec4899',
    Orange: '#ea580c',
    White: '#ffffff',
    Green: '#16a34a',
    Yellow: '#eab308',
    Indigo: '#4f46e5',
  };

  const posterBg = colorMap[selectedColor] || '#ffffff';
  const textColor = selectedColor === 'White' ? '#000000' : '#ffffff';
  const posterRef = useRef(null);

  // Removed zoom effect on field focus
  const layoutAspects = {
    Portrait: 'aspect-[3/4]',
    Landscape: 'aspect-[4/3]',
    Square: 'aspect-square',
  };

  const frameImages = {
    'No Frame': null,
    'Black Frame': '/frames/frame-black.png',
    'White Frame': '/frames/frame-white.png',
    'Natural Wood Frame': '/frames/frame-natural-wood.png',
    'Dark Wood Frame': '/frames/frame-dark-wood.png',
    'Antique Gold Frame': '/frames/frame-antique-gold.png',
    'Antique Silver Frame': '/frames/frame-antique-silver.png',
  };
  return (
    <section className="relative w-full h-svh md:h-screen bg-tan flex justify-center items-center overflow-hidden bg-[#F4F2F0]">
      <div className="relative mb-20 md:mb-0">
        <div
          ref={posterRef}
          className={`h-[calc(100svh-20rem)] w-auto ${layoutAspects[selectedLayout]} max-h-[calc(100svh-20rem)] max-w-[calc(100vw-2.5rem)] md:max-h-[80vh] mx-auto flex flex-col items-center justify-between p-8 md:p-12 relative`}
          style={{
            backgroundColor: posterBg,
            ...(selectedFrame !== 'No Frame'
              ? {
                  borderImage: `url(${frameImages[selectedFrame]}) 13 32 26 / 1 / 0 stretch`,
                  borderStyle: 'solid',
                  borderWidth: '18px',
                  borderColor: '#ffffff',
                }
              : {}),
          }}
        >
          {showBorder && <div
            className="absolute inset-6 md:inset-8 border-2 pointer-events-none"
            style={{
              borderColor: selectedColor === 'White' ? '#000000' : '#ffffff',
            }}
          ></div>}
          <div className="flex-1 flex flex-col items-center justify-between w-full pt-6">
            <div className="w-[300px] h-[300px] rounded-full overflow-hidden flex items-center justify-center">
              <CelestialMap
                mapBackground={selectedPoster}
                displayOptions={displayOptions}
                selectedDate={selectedDate}
                selectedTime={selectedTime}
                timezoneOffset={timezoneOffset}
                latitude={latitude}
                longitude={longitude}
              />
            </div>
            <p
              className="text-[13px] font-medium uppercase"
              style={{ color: textColor }}
            >
              {personalMessage}
            </p>
            <div className="text-center">
              <p className="text-[10px] uppercase" style={{ color: textColor }}>
                {new Date(selectedDate).toLocaleDateString('en-US', {
                  year: 'numeric',
                  month: 'long',
                  day: 'numeric',
                })}
              </p>
              <p className="text-[10px] uppercase" style={{ color: textColor }}>
                {latitude}° N, {longitude}° W
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="absolute bottom-0 left-0 right-0 px-5 md:px-12 pb-20 md:pb-8">
        <div className="lg:flex items-center gap-6">
          <h1 className="text-xl lg:text-3xl font-bold mb-2 lg:mb-0">
            {product.name} - {product.color}
          </h1>
          <div className="flex items-center gap-4 mt-1">
            <span className="opacity-50 text-sm">{product.price}</span>
            <span className="w-px h-5 bg-gray-400"></span>
            <button
              onClick={onGalleryClick}
              className="flex items-center gap-1 text-sm opacity-50 hover:opacity-100 transition-opacity duration-300"
            >
              <svg className="w-5 h-5" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3.41663 9.50002V3.91669H8.99996V9.50002H3.41663ZM3.41663 17.0834V11.5H8.99996V17.0834H3.41663ZM11 9.50002V3.91669H16.5833V9.50002H11ZM11 17.0834V11.5H16.5833V17.0834H11Z" />
              </svg>
              <span>Gallery</span>
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProductHero;
