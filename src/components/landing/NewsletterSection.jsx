'use client';

import { useState } from 'react';
import { IoChevronForward } from 'react-icons/io5';
import { FaCheck } from 'react-icons/fa';
import NewsletterForm from './NewsletterForm';

export default function NewsletterSection() {
  const [isChecked, setIsChecked] = useState(false);
  return (
    <div className="relative text-stone-800 box-border caret-transparent max-w-[1228px] text-center w-full mx-auto px-2 md:px-10 before:accent-auto before:bg-stone-800 before:caret-transparent before:text-stone-800 before:block before:text-base before:not-italic before:normal-nums before:font-normal before:h-[calc(60%_+_1px)] before:tracking-[normal] before:leading-6 before:list-outside before:list-disc before:pointer-events-auto before:absolute before:text-center before:indent-[0px] before:normal-case before:translate-x-[-50%] before:visible before:w-screen before:z-[-1] before:rounded-t-2xl before:border-separate before:left-2/4 before:top-[40%] before:font-degular">
      <div className="relative bg-blue-100 box-border caret-transparent px-6 py-20 rounded-2xl md:pt-[110px] md:pb-[150px] md:px-12">
        <h3 className="text-[44px] font-black box-border caret-transparent tracking-[-1.44px] leading-[35.2px] max-w-[450px] uppercase mb-5 mx-auto font-venice_blvd md:text-[100px] md:tracking-[-3px] md:leading-[80px] md:max-w-[700px]">
          Stay Connected
        </h3>
        <p className="text-base font-medium box-border caret-transparent tracking-[-0.18px] leading-[19.2px] max-w-[450px] mx-auto font-degular md:text-2xl md:tracking-[-0.24px] md:leading-[28.8px] md:max-w-[700px]">
          Get exclusive offers, new designs, and celestial inspiration delivered to your inbox!
        </p>
        <div className="relative items-center box-border caret-transparent gap-x-[50px] flex flex-col justify-center gap-y-[50px] pt-10 md:flex-row">
          <NewsletterForm />
          <button
            aria-label="Submit"
            className="text-stone-50 text-[13.3333px] items-center bg-stone-800 caret-transparent flex h-auto justify-center leading-[normal] px-4 py-3 rounded-xl font-arial md:h-[52px]"
          >
            <div className="box-border caret-transparent">
              <div className="text-sm font-bold items-center box-border caret-transparent flex justify-center tracking-[-0.28px] leading-[14px] text-nowrap font-degular md:text-xl md:tracking-[-0.4px] md:leading-5">
                Submit
                <div className="text-sm items-center aspect-square bg-stone-50 box-border caret-transparent flex justify-center tracking-[-0.28px] leading-[14px] text-nowrap w-[18px] ml-2 rounded-md md:text-xl md:tracking-[-0.4px] md:leading-5">
                  <IoChevronForward className="text-stone-800" />
                </div>
              </div>
            </div>
          </button>
          <div className="absolute box-border caret-transparent gap-x-2.5 flex gap-y-2.5 text-left w-[325px] mr-0 bottom-[55px] md:bottom-[-45px] md:w-auto md:mr-[520px]">
            <button
              onClick={() => setIsChecked(!isChecked)}
              className={`items-center box-border caret-transparent flex shrink-0 h-5 justify-center w-5 border-stone-800 rounded border-2 border-solid cursor-pointer ${isChecked ? 'bg-stone-800' : 'bg-transparent'}`}
            >
              {isChecked && <FaCheck className="text-white text-xs" />}
            </button>
            <span className="text-xs font-light box-border caret-transparent block tracking-[-0.24px] leading-3 w-[90%] font-degular md:w-[260px]">
              *Yes, I would like to receive updates, promotions, and offers from
              Starmap. I understand I can unsubscribe at any time.
            </span>
          </div>
        </div>
        <div className="absolute aspect-square bg-blue-600 rounded-full bottom-[calc(100%_-_60px)] box-border caret-transparent hidden h-[100px] w-[100px] z-10 left-[2%] md:bottom-[calc(100%_-_80px)] md:block md:h-[140px] md:w-[140px]"></div>
        <div className="absolute aspect-square bg-blue-200 rounded-full bottom-[calc(100%_-_40px)] box-border caret-transparent h-[100px] w-[100px] z-10 right-[3%] md:bottom-[calc(100%_-_80px)] md:h-[140px] md:w-[140px]"></div>
        <div className="absolute aspect-square bg-blue-400 rounded-full top-[calc(100%_-_60px)] box-border caret-transparent h-[100px] w-[100px] z-10 left-[10%] md:top-[calc(100%_-_80px)] md:h-[140px] md:w-[140px]"></div>
      </div>
    </div>
  );
}
