'use client';

import FloatingButton from '../components/landing/FloatingButton';
import CookieConsent from '../components/landing/CookieConsent';
import Header from '../components/landing/Header';
import MainLayout from '../components/landing/MainLayout';
import Footer from '../components/landing/Footer';

export default function LandingPage() {
  return (
    <div className="text-black text-base not-italic normal-nums font-normal accent-auto bg-stone-50 box-border caret-transparent block h-full tracking-[normal] leading-6 list-outside list-disc overflow-x-hidden overflow-y-auto pointer-events-auto text-start indent-[0px] normal-case visible w-full border-separate font-degular" data-scroll-container>
      <div className="fixed bg-black box-border caret-transparent hidden h-full opacity-40 w-full z-[99999999] left-0 top-0"></div>
      <FloatingButton />
      <CookieConsent />
      <div className="box-border caret-transparent">
        <div className="box-border caret-transparent">
          <div className="box-border caret-transparent"></div>
          <Header />
          <MainLayout />
          <Footer />
        </div>
      </div>
      <div className="box-border caret-transparent"></div>
    </div>
  );
}
