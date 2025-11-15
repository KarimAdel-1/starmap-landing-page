import React from 'react';

const ProductVideo = ({ onPlayClick }) => {
  return (
    <section className="px-5 md:px-12 mb-20 md:mb-32">
      <div className="relative w-full aspect-video rounded-2xl overflow-hidden bg-blue-800 flex items-center justify-center">
        <span className="text-white text-5xl font-bold">Video Preview</span>
        
        <button
          onClick={onPlayClick}
          className="absolute bottom-5 left-6 bg-yellow hover:bg-yellow-600 rounded-full px-4 py-2 flex items-center gap-2 transition-colors"
        >
          <svg className="w-2 h-3" viewBox="0 0 8 10" fill="currentColor">
            <path d="M0.42 9.75V0.25L7.73 5L0.42 9.75Z"/>
          </svg>
          <span className="text-sm font-medium">Watch</span>
        </button>
      </div>
    </section>
  );
};

export default ProductVideo;
