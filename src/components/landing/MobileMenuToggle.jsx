export default function MobileMenuToggle({ isOpen, onClick }) {
  return (
    <button
      onClick={onClick}
      aria-label="Toggle navigation menu"
      aria-expanded={isOpen}
      className="relative text-stone-950/30 text-[13.3333px] items-center bg-stone-50 caret-transparent block h-[42px] justify-center leading-[normal] min-h-[auto] min-w-[auto] order-3 text-center w-[42px] rounded-xl font-arial lg:hidden"
    >
      <span className="absolute bg-stone-800 box-border caret-transparent block h-0.5 pointer-events-none w-5 rounded-lg left-[11px] top-[17px]"></span>
      <span className="absolute bg-stone-800 box-border caret-transparent block h-0.5 pointer-events-none w-5 rounded-lg left-[11px] top-[23px]"></span>
    </button>
  );
}
