'use client';

import React, { useState, useRef, useEffect } from 'react';
import { gsap } from 'gsap';

const ProductToolbar = ({
  selectedColor,
  selectedPoster,
  selectedFrame,
  selectedLayout,
  colorOptions,
  posterOptions,
  quantity,
  displayOptions,
  showBorder,
  personalMessage,
  selectedDate,
  selectedTime,
  timezoneOffset,
  latitude,
  longitude,
  onColorChange,
  onPosterChange,
  onFrameChange,
  onLayoutChange,
  onQuantityChange,
  onDisplayOptionsChange,
  onShowBorderChange,
  onPersonalMessageChange,
  onDateChange,
  onTimeChange,
  onTimezoneOffsetChange,
  onLatitudeChange,
  onLongitudeChange,
  price,
  onFieldFocus,
}) => {
  const [showCustomizeDropdown, setShowCustomizeDropdown] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    if (dropdownRef.current) {
      gsap.to(dropdownRef.current, {
        height: showCustomizeDropdown ? 'auto' : 0,
        opacity: showCustomizeDropdown ? 1 : 0,
        duration: 0.5,
        ease: 'power2.inOut',
      });
    }
  }, [showCustomizeDropdown]);

  const handleQuantityIncrease = () => {
    onQuantityChange(quantity + 1);
  };

  const handleQuantityDecrease = () => {
    if (quantity > 1) {
      onQuantityChange(quantity - 1);
    }
  };

  const handleAddToBag = () => {
    console.log(`Adding ${quantity} ${selectedColor} to bag`);
    // Add to cart logic here
  };

  return (
    <div className="lg:w-[25%] fixed bottom-6 left-5 right-5 md:left-auto md:right-12 z-40">
      <div className="flex items-center gap-3 p-3 bg-gray-50 md:bg-tan rounded-full relative justify-between">
        {/* Customize Dropdown - Positioned relative to parent */}
        <div
          ref={dropdownRef}
          className="absolute bottom-full left-1/2 -translate-x-1/2 mb-6 bg-gray-50 rounded-2xl overflow-hidden w-[calc(100vw-2.5rem)] max-w-[400px] md:w-[420px] h-0 opacity-0"
        >
          <div className="flex justify-between items-center p-6 border-b">
            <p className="text-base">Customize</p>
            <button
              onClick={() => setShowCustomizeDropdown(false)}
              className="w-10 h-10 bg-gray-200 hover:bg-gray-300 rounded-full flex items-center justify-center"
            >
              <svg className="w-3 h-3" viewBox="0 0 10 10" fill="currentColor">
                <path d="M1.06 9.71L0.35 8.94L4.23 5L0.35 1.06L1.06 0.29L5 4.23L8.94 0.29L9.71 1.06L5.77 5L9.71 8.94L8.94 9.71L5 5.77L1.06 9.71Z" />
              </svg>
            </button>
          </div>
          <div className="max-h-[50vh] md:max-h-[600px] overflow-y-auto p-6" data-scroll-ignore>
            {/* Layout Section */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-3">Layout</p>
              <div className="grid grid-cols-3 gap-2">
                {['Portrait', 'Landscape', 'Square'].map((layout) => (
                  <button
                    key={layout}
                    onClick={() => onLayoutChange(layout)}
                    className={`px-4 py-2 rounded-lg border transition-colors ${
                      selectedLayout === layout
                        ? 'bg-black text-white border-black'
                        : 'bg-white border-gray-300 hover:border-gray-400'
                    }`}
                  >
                    {layout}
                  </button>
                ))}
              </div>
            </div>

            {/* Frame Section */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-3">Frame</p>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { name: 'No Frame', icon: null },
                  { name: 'Black Frame', icon: '/frames/icons/black-frame.png' },
                  { name: 'White Frame', icon: '/frames/icons/white-frame.png' },
                  { name: 'Natural Wood Frame', icon: '/frames/icons/natural-wood-frame.png' },
                  { name: 'Dark Wood Frame', icon: '/frames/icons/dark-wood-frame.png' },
                  { name: 'Antique Gold Frame', icon: '/frames/icons/antique-gold-frame.png' },
                  { name: 'Antique Silver Frame', icon: '/frames/icons/antique-silver-frame.png' },
                ].map(({ name, icon }) => (
                  <button
                    key={name}
                    onClick={() => onFrameChange(name)}
                    className={`w-16 h-16 rounded-lg border-2 transition-all flex items-center justify-center ${
                      selectedFrame === name
                        ? 'border-black bg-gray-100'
                        : 'border-gray-300 bg-white hover:border-gray-400'
                    }`}
                    title={name}
                  >
                    {icon ? (
                      <img src={icon} alt={name} className="w-full h-full object-cover rounded" />
                    ) : (
                      <svg className="w-8 h-8 text-gray-400" viewBox="0 0 24 24" fill="none" stroke="currentColor">
                        <line x1="2" y1="2" x2="22" y2="22" strokeWidth="2" />
                      </svg>
                    )}
                  </button>
                ))}
              </div>
            </div>

            {/* Background Color Section */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-3">Background Color</p>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { name: 'Midnight Blue', color: 'bg-blue-900' },
                  { name: 'Black', color: 'bg-black' },
                  { name: 'Dark Blue', color: 'bg-blue-800' },
                  { name: 'Teal', color: 'bg-teal-700' },
                  { name: 'Purple', color: 'bg-purple-400' },
                  { name: 'Mint', color: 'bg-teal-300' },
                  { name: 'Pink', color: 'bg-pink-500' },
                  { name: 'Orange', color: 'bg-orange-600' },
                  { name: 'White', color: 'bg-white' },
                  { name: 'Green', color: 'bg-green-600' },
                  { name: 'Yellow', color: 'bg-yellow-500' },
                  { name: 'Indigo', color: 'bg-indigo-600' },
                ].map(({ name, color }) => (
                  <button
                    key={name}
                    onClick={() => onColorChange(name)}
                    className={`w-12 h-12 rounded-full ${color} border-2 transition-all ${
                      selectedColor === name
                        ? 'border-black scale-110'
                        : 'border-gray-300'
                    }`}
                    title={name}
                  />
                ))}
              </div>
            </div>

            {/* Map Color Section */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-3">Map Color</p>
              <div className="grid grid-cols-4 gap-3">
                {[
                  { name: 'Midnight Blue', color: 'bg-blue-900' },
                  { name: 'Black', color: 'bg-black' },
                  { name: 'Dark Blue', color: 'bg-blue-800' },
                  { name: 'Teal', color: 'bg-teal-700' },
                  { name: 'Purple', color: 'bg-purple-400' },
                  { name: 'Mint', color: 'bg-teal-300' },
                  { name: 'Pink', color: 'bg-pink-500' },
                  { name: 'Orange', color: 'bg-orange-600' },
                  { name: 'White', color: 'bg-white' },
                  { name: 'Green', color: 'bg-green-600' },
                  { name: 'Yellow', color: 'bg-yellow-500' },
                  { name: 'Indigo', color: 'bg-indigo-600' },
                ].map(({ name, color }) => (
                  <button
                    key={name}
                    onClick={() => onPosterChange(name)}
                    className={`w-12 h-12 rounded-full ${color} border-2 transition-all ${
                      selectedPoster === name
                        ? 'border-black scale-110'
                        : 'border-gray-300'
                    }`}
                    title={name}
                  />
                ))}
              </div>
            </div>

            {/* Message Section */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-3">Personal Message</p>
              <textarea
                value={personalMessage}
                onChange={(e) => onPersonalMessageChange(e.target.value)}
                onFocus={() => onFieldFocus?.(true)}
                onBlur={() => onFieldFocus?.(false)}
                className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm resize-none"
                rows="3"
                placeholder="Enter your message..."
              />
            </div>

            {/* Date & Location Section */}
            <div className="mb-6">
              <p className="text-sm font-medium mb-3">Date & Location</p>
              <div className="space-y-2">
                <div className="grid grid-cols-3 gap-2">
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => onDateChange(e.target.value)}
                    onFocus={() => onFieldFocus?.(true)}
                    onBlur={() => onFieldFocus?.(false)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="Select date"
                  />
                  <input
                    type="time"
                    value={selectedTime}
                    onChange={(e) => onTimeChange(e.target.value)}
                    onFocus={() => onFieldFocus?.(true)}
                    onBlur={() => onFieldFocus?.(false)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="Select time"
                  />
                  <input
                    type="text"
                    value={timezoneOffset}
                    onChange={(e) => onTimezoneOffsetChange(e.target.value)}
                    onFocus={() => onFieldFocus?.(true)}
                    onBlur={() => onFieldFocus?.(false)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="+00:00"
                  />
                </div>
                <div className="grid grid-cols-2 gap-2">
                  <input
                    type="text"
                    value={latitude}
                    onChange={(e) => onLatitudeChange(e.target.value)}
                    onFocus={() => onFieldFocus?.(true)}
                    onBlur={() => onFieldFocus?.(false)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="Latitude"
                  />
                  <input
                    type="text"
                    value={longitude}
                    onChange={(e) => onLongitudeChange(e.target.value)}
                    onFocus={() => onFieldFocus?.(true)}
                    onBlur={() => onFieldFocus?.(false)}
                    className="w-full px-3 py-2 border border-gray-300 rounded-lg text-sm"
                    placeholder="Longitude"
                  />
                </div>
              </div>
            </div>

            {/* Advanced Options */}
            <div>
              <p className="text-sm font-medium mb-3">Display Options</p>
              <div className="space-y-2">
                <button
                  onClick={() => onShowBorderChange(!showBorder)}
                  className="flex items-center justify-between cursor-pointer w-full"
                >
                  <span className="text-sm">Show Border</span>
                  <div className={`w-11 h-6 rounded-full transition-colors ${
                    showBorder ? 'bg-black' : 'bg-gray-300'
                  } relative`}>
                    <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                      showBorder ? 'translate-x-6' : 'translate-x-1'
                    }`} />
                  </div>
                </button>
                {[
                  { label: 'Show Grid', id: 'grid' },
                  { label: 'Constellation Lines', id: 'lines' },
                  { label: 'Milky Way', id: 'milkyway' },
                ].map((option) => (
                  <button
                    key={option.id}
                    onClick={() => onDisplayOptionsChange(prev => ({ ...prev, [option.id]: !prev[option.id] }))}
                    className="flex items-center justify-between cursor-pointer w-full"
                  >
                    <span className="text-sm">{option.label}</span>
                    <div className={`w-11 h-6 rounded-full transition-colors ${
                      displayOptions[option.id] ? 'bg-black' : 'bg-gray-300'
                    } relative`}>
                      <div className={`absolute top-1 w-4 h-4 bg-white rounded-full transition-transform ${
                        displayOptions[option.id] ? 'translate-x-6' : 'translate-x-1'
                      }`} />
                    </div>
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Customize Selector */}
        <div className="relative">
          <button
            onClick={() => setShowCustomizeDropdown(!showCustomizeDropdown)}
            className="flex items-center gap-4 px-4 py-2 bg-white hover:bg-yellow rounded-full border border-white hover:border-yellow transition-colors min-w-[120px]"
          >
            <span className="flex-grow text-left">Customize</span>
            <svg
              className={`w-5 h-5 transition-transform ${
                showCustomizeDropdown ? 'rotate-180' : ''
              }`}
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path d="M10 13L5.5 8.5L6.3 7.7L10 11.4L13.7 7.7L14.5 8.5L10 13Z" />
            </svg>
          </button>
        </div>

        {/* Add to Bag Button */}
        <button
          onClick={handleAddToBag}
          className="px-4 py-2 bg-black hover:bg-yellow text-white hover:text-black rounded-full transition-colors"
        >
          Add To Bag
        </button>
      </div>
    </div>
  );
};

export default ProductToolbar;
