import React, { useRef } from 'react';

const ProductGallery = ({ images, productName, onImageClick }) => {
  const scrollContainerRef = useRef(null);

  const goToPrevious = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: -400, behavior: 'smooth' });
    }
  };

  const goToNext = () => {
    if (scrollContainerRef.current) {
      scrollContainerRef.current.scrollBy({ left: 400, behavior: 'smooth' });
    }
  };

  return (
    <div className="mb-20 md:mb-32 overflow-visible">
      <div className="px-5 md:px-12">
        <div ref={scrollContainerRef} className="flex gap-4 overflow-x-scroll snap-x snap-mandatory -mx-5 md:-mx-12 px-5 md:px-12 scrollbar-hide scroll-smooth">
          {images.map((image, index) => (
            <div 
              key={index}
              className="flex-shrink-0 w-80 md:w-96 snap-center"
            >
              <div 
                onClick={onImageClick}
                className="bg-blue-500 rounded-lg overflow-hidden aspect-square flex items-center justify-center cursor-pointer hover:opacity-90 transition-opacity"
              >
                <span className="text-white text-2xl font-bold">Image {index + 1}</span>
              </div>
            </div>
          ))}
        </div>
        
        {/* Navigation Controls */}
        <div className="flex justify-center mt-5">
          <div className="flex items-center gap-5 border border-gray-300 rounded-full p-1">
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
      </div>
    </div>
  );
};

export default ProductGallery;
