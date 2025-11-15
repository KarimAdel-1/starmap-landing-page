'use client';

import React, { useState } from 'react';

const ImageLightbox = ({ images, productName, onClose }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const goToPrevious = () => {
    setCurrentIndex(currentIndex === 0 ? images.length - 1 : currentIndex - 1);
  };

  const goToNext = () => {
    setCurrentIndex(currentIndex === images.length - 1 ? 0 : currentIndex + 1);
  };

  return (
    <div className="fixed inset-0 bg-white z-50 flex flex-col items-center justify-center">
      {/* Header */}
      <div className="fixed top-10 left-10 z-10">
        <p className="text-lg">{productName}</p>
      </div>

      {/* Close Button */}
      <button
        onClick={onClose}
        className="fixed top-8 right-8 z-10 w-9 h-9 bg-yellow hover:bg-yellow-600 rounded-full flex items-center justify-center transition-colors"
      >
        <svg className="w-3 h-3" viewBox="0 0 12 12" fill="currentColor">
          <path d="M1.28 11.66L0.35 10.73L5.07 6.00L0.35 1.28L1.28 0.35L6.00 5.07L10.73 0.35L11.66 1.28L6.93 6.00L11.66 10.73L10.73 11.66L6.00 6.93L1.28 11.66Z"/>
        </svg>
      </button>

      {/* Image Display */}
      <div className="w-full max-w-4xl h-[70vh] flex items-center justify-center px-10">
        <div className="relative w-full h-full bg-blue-600 rounded-lg flex items-center justify-center">
          <span className="text-white text-6xl font-bold">Image {currentIndex + 1}</span>
        </div>
      </div>

      {/* Navigation */}
      <div className="fixed bottom-6 right-6 flex items-center gap-5 border border-gray-300 rounded-full p-1">
        <button
          onClick={goToPrevious}
          className="w-5 h-5 flex items-center justify-center rounded-full hover:bg-gray-100 transition-colors"
        >
          <svg className="w-2 h-3" viewBox="0 0 6 10" fill="currentColor">
            <path d="M5.2 9.71L0.49 5L5.2 0.29L5.97 1.06L2.04 5L5.97 8.94L5.2 9.71Z"/>
          </svg>
        </button>
        <button
          onClick={goToNext}
          className="w-5 h-5 flex items-center justify-center rounded-full bg-gray-100"
        >
          <svg className="w-2 h-3" viewBox="0 0 6 10" fill="currentColor">
            <path d="M3.96 5L0.03 1.06L0.8 0.29L5.51 5L0.8 9.71L0.03 8.94L3.96 5Z"/>
          </svg>
        </button>
      </div>
    </div>
  );
};

export default ImageLightbox;
