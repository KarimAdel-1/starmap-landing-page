'use client';

import { useState } from 'react';
import Logo from './Logo';
import DesktopNav from './DesktopNav';
import MobileMenuToggle from './MobileMenuToggle';
import NavMenu from './NavMenu';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="relative text-stone-50 [align-items:normal] self-stretch bg-stone-800 box-border caret-transparent flex justify-normal w-full p-3 rounded-2xl md:items-center md:justify-between md:px-10 md:py-5 md:rounded-3xl">
      <Logo />
      <DesktopNav />
      <MobileMenuToggle isOpen={isOpen} onClick={() => setIsOpen(!isOpen)} />
      <NavMenu isOpen={isOpen} />
    </div>
  );
}
