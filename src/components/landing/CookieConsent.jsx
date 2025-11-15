'use client';

import { useState, useEffect } from 'react';

export default function CookieConsent() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const consent = localStorage.getItem('cookieConsent');
    if (!consent) setShow(true);
  }, []);

  const handleConsent = (value) => {
    localStorage.setItem('cookieConsent', value);
    setShow(false);
  };

  if (!show) return null;

  return (
    <div
      aria-label="We value your privacy"
      role="region"
      className="fixed box-border caret-transparent max-w-full w-full z-[9999999] rounded-md right-0 bottom-0 md:max-w-none md:w-[440px] md:right-10 md:bottom-10"
    >
      <div className="bg-white shadow-[rgba(172,171,171,0.3)_0px_-1px_10px_0px] box-border caret-transparent border border-zinc-100 px-0 py-5 rounded-md border-solid md:px-[26px]">
        <div className="box-border caret-transparent">
          <p
            role="heading"
            className="text-neutral-800 text-lg font-bold box-border caret-transparent break-words mb-3 px-6 md:px-0"
          >
            We value your privacy
          </p>
          <div className="text-neutral-800 text-sm box-border caret-transparent">
            <div className="box-border caret-transparent max-h-[400px] overflow-x-auto overflow-y-scroll px-6 md:max-h-none md:overflow-x-visible md:overflow-y-visible md:px-0">
              <p className="box-border caret-transparent leading-[16.8px]">
                We use cookies to enhance your browsing experience, serve
                personalised ads or content, and analyse our traffic. By
                clicking &quot;Accept All&quot;, you consent to our use of
                cookies.
              </p>
            </div>
            <div className="items-center box-border caret-transparent flex flex-col flex-wrap justify-start mt-0 px-6 md:flex-row md:mt-4 md:px-0">
              <button
                aria-label="Customise"
                onClick={() => handleConsent('customise')}
                className="text-neutral-900 font-medium bg-transparent caret-transparent block grow max-w-full order-2 break-words text-center w-full border-neutral-900 mr-0 mt-2.5 p-2 rounded-sm border-solid md:order-none md:w-auto md:mr-2 md:mt-0"
              >
                Customise
              </button>
              <button
                aria-label="Reject All"
                onClick={() => handleConsent('reject')}
                className="text-white font-medium bg-neutral-900 caret-transparent block grow max-w-full order-3 break-words text-center w-full border-neutral-900 mr-0 mt-2.5 p-2 rounded-sm border-solid md:order-none md:w-auto md:mr-2 md:mt-0"
              >
                Reject All
              </button>
              <button
                aria-label="Accept All"
                onClick={() => handleConsent('accept')}
                className="text-white font-medium bg-neutral-900 caret-transparent block grow max-w-full order-1 break-words text-center w-full border-neutral-900 mt-4 p-2 rounded-sm border-solid md:order-none md:w-auto md:mt-0"
              >
                Accept All
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
