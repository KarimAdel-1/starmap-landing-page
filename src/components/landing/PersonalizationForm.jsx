'use client';

import React, { useState } from 'react';

const PersonalizationForm = ({ onConfigChange }) => {
  const [theme, setTheme] = useState('Classic');
  const [color, setColor] = useState('Midnight Blue');
  const [style, setStyle] = useState(0);
  const [latitude, setLatitude] = useState('36.525321');
  const [longitude, setLongitude] = useState('-121.815916');
  const [placeName, setPlaceName] = useState('Your Moment');
  const [year, setYear] = useState('2024');
  const [month, setMonth] = useState('1');
  const [day, setDay] = useState('1');
  const [message, setMessage] = useState('');
  const [advancedOptions, setAdvancedOptions] = useState(false);
  const [showGrid, setShowGrid] = useState(false);
  const [showConstellation, setShowConstellation] = useState(true);
  const [showLine, setShowLine] = useState(true);
  const [showMilkyway, setShowMilkyway] = useState(true);

  const [showEcliptic, setShowEcliptic] = useState(false);

  const themes = ['Classic', 'Technical', 'Legends', 'Minimal'];
  const colors = [
    { name: 'Midnight Blue', value: '#121824' },
    { name: 'Black', value: '#111111' },
    { name: 'Dark Blue', value: '#3b4655' },
    { name: 'Teal', value: '#234955' },
    { name: 'Purple', value: '#c0a6bf' },
    { name: 'Mint', value: '#97c9bd' },
    { name: 'Pink', value: '#ee337d' },
    { name: 'Orange', value: '#ff4f00' }
  ];



  const updateConfig = () => {
    const config = {
      theme,
      color: colors.find(c => c.name === color)?.value || '#121824',
      style,
      lat: parseFloat(latitude),
      lon: parseFloat(longitude),
      placeName,
      date: `${year}-${month.padStart(2, '0')}-${day.padStart(2, '0')}`,
      message,
      advancedOptions,
      showGrid,
      showConstellation,
      showLine,
      showMilkyway,

      showEcliptic
    };
    onConfigChange?.(config);
  };

  React.useEffect(() => {
    updateConfig();
  }, [theme, color, style, year, month, day, latitude, longitude, placeName, showGrid, showConstellation, showLine, showMilkyway, showEcliptic]);

  return (
    <div className="bg-gray-50 p-5 font-sans">
      <div className="max-w-2xl mx-auto">
        {/* Header */}
        <div className="border-b border-gray-400 pb-5 mb-5">
          <div className="flex items-center gap-2.5 mb-2.5">
            <div className="w-7 h-7 border border-gray-900 rounded-full flex items-center justify-center">
              <img src="https://framerusercontent.com/images/91Rxl7JuV9feL6ZCxCH0bp2j5CQ.svg" alt="" className="w-3.5 h-3.5" />
            </div>
            <h1 className="m-0 text-2xl text-gray-900">Personalise</h1>
          </div>
          <p className="m-0 text-xs text-gray-900 font-light">
            A Custom Night Sky printed on museum grade art matte paper and printed using archival inks.
          </p>
          <div className="flex items-center gap-1 mt-2.5">
            <div className="w-2.5 h-2.5 bg-green-500 rounded-full"></div>
            <span className="text-xs text-green-500">In Stock</span>
          </div>
        </div>

        {/* Theme Selection */}
        <div className="mb-5">
          <div className="flex justify-between items-center mb-2.5">
            <p className="m-0 text-sm text-gray-900">Choose Your Theme</p>
            <span className="text-xs text-gray-900 font-light">{theme}</span>
          </div>
          <div className="flex border border-gray-500">
            {themes.map((t, index) => (
              <button
                key={t}
                onClick={() => setTheme(t)}
                className={`flex-1 h-10 border-none ${index < themes.length - 1 ? 'border-r border-gray-500' : ''} ${
                  theme === t ? 'bg-white text-gray-900' : 'bg-transparent text-gray-500'
                } text-xs cursor-pointer`}
              >
                {t}
              </button>
            ))}
          </div>
        </div>

        {/* Color Selection */}
        <div className="mb-5">
          <div className="flex justify-between items-center mb-2.5">
            <p className="m-0 text-sm text-gray-900">Choose Your Color</p>
            <span className="text-xs text-gray-900 font-light">{color}</span>
          </div>
          <div className="flex flex-wrap gap-2.5 justify-between">
            {colors.map((c, index) => (
              <div
                key={c.name}
                onClick={() => setColor(c.name)}
                className={`w-10 h-10 rounded-full cursor-pointer flex items-center justify-center ${
                  color === c.name ? 'border-2 border-gray-900 p-0.5' : 'p-1'
                }`}
              >
                <div className="w-7 h-7 rounded-full" style={{ backgroundColor: c.value }}></div>
              </div>
            ))}
          </div>
        </div>

        {/* Style Selection */}
        <div className="mb-5">
          <h3 className="text-sm text-gray-900 m-0 mb-2.5">Choose Map Style</h3>
          <div className="flex gap-2.5">
            {[0, 1, 2, 3].map((s) => (
              <div
                key={s}
                onClick={() => setStyle(s)}
                className={`w-10 h-10 rounded-full p-1 cursor-pointer flex items-center justify-center ${
                  style === s ? 'border-2 border-gray-900' : ''
                }`}
              >
                <div className={`w-8 h-8 rounded-2xl flex items-center justify-center ${
                  s % 2 === 0 ? 'bg-slate-700' : 'bg-white'
                } ${s > 1 ? 'border border-slate-700' : ''}`}>
                  <div className={`w-4 h-4 rounded-lg ${
                    s === 0 ? 'bg-slate-700' : s === 1 ? 'bg-white' : s === 2 ? 'bg-slate-700' : 'bg-white'
                  } ${s > 1 ? 'border border-slate-700' : ''}`}></div>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Location */}
        <div className="mb-5">
          <p className="text-xs text-gray-900 mb-1">Choose a time and place and we will render the stars for that moment.</p>
          <p className="text-sm text-gray-900 my-2.5">Where was your moment?</p>
          <div className="flex gap-2">
            <input
              type="number"
              placeholder="Latitude"
              value={latitude}
              onChange={(e) => setLatitude(e.target.value)}
              className="flex-1 h-10 px-2 border border-gray-900 text-xs font-light"
            />
            <input
              type="number"
              placeholder="Longitude"
              value={longitude}
              onChange={(e) => setLongitude(e.target.value)}
              className="flex-1 h-10 px-2 border border-gray-900 text-xs font-light"
            />
          </div>
          <input
            type="text"
            placeholder="Place name"
            value={placeName}
            onChange={(e) => setPlaceName(e.target.value)}
            className="w-full h-10 px-2 border border-gray-900 text-xs font-light mt-2"
          />
        </div>

        {/* Date */}
        <div className="mb-5">
          <p className="text-sm text-gray-900 m-0 mb-2.5">When was your moment?</p>
          <div className="flex gap-2">
            <select
              value={year}
              onChange={(e) => setYear(e.target.value)}
              className="w-20 h-10 px-2 border border-gray-900 text-xs font-light text-gray-500"
            >
              {Array.from({ length: 201 }, (_, i) => 1900 + i).map(y => (
                <option key={y} value={y}>{y}</option>
              ))}
            </select>
            <select
              value={month}
              onChange={(e) => setMonth(e.target.value)}
              className="flex-1 h-10 px-2 border border-gray-900 text-xs font-light text-gray-500"
            >
              {['January', 'February', 'March', 'April', 'May', 'June', 'July', 'August', 'September', 'October', 'November', 'December'].map((m, i) => (
                <option key={i + 1} value={i + 1}>{m}</option>
              ))}
            </select>
            <input
              type="number"
              min="1"
              max="31"
              placeholder="1"
              value={day}
              onChange={(e) => setDay(e.target.value)}
              className="w-12 h-10 px-2 border border-gray-900 text-xs font-light text-gray-500"
            />
          </div>
        </div>

        {/* Message */}
        <div className="mb-5">
          <p className="text-sm text-gray-900 m-0 mb-2.5">Enter a Personal Message</p>
          <textarea
            placeholder="Enter message"
            value={message}
            onChange={(e) => setMessage(e.target.value)}
            className="w-full h-24 p-3 border border-gray-500 resize-none font-sans"
          />
        </div>

        {/* Advanced Options Toggle */}
        <div className="mb-5">
          <div
            onClick={() => setAdvancedOptions(!advancedOptions)}
            className="flex justify-between items-center cursor-pointer"
          >
            <span className="text-sm text-gray-900">Advanced Options</span>
            <div className={`w-12 h-6 rounded-full border border-gray-500 relative transition-all duration-300 ${
              advancedOptions ? 'bg-gray-900' : 'bg-white'
            }`}>
              <div className={`w-5 h-5 rounded-full absolute top-0.5 transition-all duration-300 ${
                advancedOptions ? 'bg-white left-6' : 'bg-gray-500 left-0.5'
              }`}></div>
            </div>
          </div>
          
          {advancedOptions && (
            <div className="mt-4 pl-2.5">
              {[
                { label: 'Grid', state: showGrid, setter: setShowGrid },
                { label: 'Constellation Lines', state: showLine, setter: setShowLine },
                { label: 'Milky Way', state: showMilkyway, setter: setShowMilkyway },
                { label: 'Ecliptic', state: showEcliptic, setter: setShowEcliptic }
              ].map((option) => (
                <div key={option.label} className="flex justify-between items-center mb-2.5">
                  <span className="text-xs text-gray-900">{option.label}</span>
                  <div
                    onClick={() => option.setter(!option.state)}
                    className={`w-10 h-5 rounded-full border border-gray-500 relative cursor-pointer transition-all duration-300 ${
                      option.state ? 'bg-gray-900' : 'bg-white'
                    }`}
                  >
                    <div className={`w-4 h-4 rounded-full absolute top-0.5 transition-all duration-300 ${
                      option.state ? 'bg-white left-5' : 'bg-gray-500 left-0.5'
                    }`}></div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Submit Button */}
        <button
          onClick={updateConfig}
          className="w-full h-15 bg-gray-900 text-white border-none text-sm font-semibold tracking-widest cursor-pointer flex items-center justify-center gap-2"
        >
          UPDATE MAP
          <img src="https://framerusercontent.com/images/SsXWcFRKkxVsWoQRxA6jzOYQWCA.svg" alt="" className="w-2.5 h-3" />
        </button>

        {/* Footer */}
        <div className="border-t border-gray-400 pt-5 mt-5">
          <div className="flex justify-between items-center text-xs text-gray-500">
            <div className="flex items-center gap-2.5">
              <span>Free Shipping with</span>
              <img src="https://framerusercontent.com/images/4CVbmW8fYi3hXLTo3bOPDJGk5tw.svg" alt="" className="h-5" />
            </div>
            <div className="flex items-center gap-1">
              <img src="https://framerusercontent.com/images/ww8DSUywO5XIQzJVLa13exBFJvU.svg" alt="" className="w-4 h-4" />
              <span>Carbon Neutral</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PersonalizationForm;