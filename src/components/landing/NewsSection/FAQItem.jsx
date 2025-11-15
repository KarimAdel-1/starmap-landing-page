'use client';

import { useState } from 'react';
import { IoChevronForward } from 'react-icons/io5';

export default function FAQItem({ question, answer, bgColor }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="box-border caret-transparent mb-4">
      <button
        onClick={() => setIsOpen(!isOpen)}
        className={`${bgColor} w-full text-left text-stone-800 items-center box-border caret-transparent flex justify-between p-4 rounded-2xl md:p-6`}
      >
        <span className="text-xl font-black box-border caret-transparent tracking-[-0.6px] leading-4 font-venice_blvd md:text-2xl md:tracking-[-0.72px] md:leading-6">
          {question}
        </span>
        <div className="items-center aspect-square bg-stone-800 box-border caret-transparent flex justify-center w-5 rounded-md ml-4">
          <IoChevronForward className={`text-white transition-transform duration-300 ${isOpen ? 'rotate-90' : ''}`} />
        </div>
      </button>
      {isOpen && (
        <div className={`${bgColor} box-border caret-transparent mt-2 p-4 rounded-2xl md:p-6`}>
          <p className="text-base font-medium box-border caret-transparent tracking-[-0.18px] leading-[19.2px] font-degular md:text-lg md:leading-[21.6px]">
            {answer}
          </p>
        </div>
      )}
    </div>
  );
}
