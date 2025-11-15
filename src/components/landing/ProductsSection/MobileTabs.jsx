import { IoChevronForward } from 'react-icons/io5';

export default function MobileTabs() {
  return (
    <div className="relative box-border caret-transparent block z-[11] md:static md:hidden md:z-auto">
      <div className="relative box-border caret-transparent">
        <button className="text-stone-50 font-bold items-center bg-stone-800 caret-transparent flex justify-between tracking-[-0.32px] leading-4 text-center w-[250px] mb-[50px] mx-auto px-[15px] py-2.5 rounded-lg font-degular">
          <span className="items-center box-border caret-transparent flex min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0">
            <div className="items-center aspect-square box-border caret-transparent flex h-3 min-h-[auto] min-w-[auto] w-3 mr-2.5 md:min-h-0 md:min-w-0">
              <img
                src="https://c.animaapp.com/mhw34jjqRgJaRr/assets/icon-6.svg"
                alt="Icon"
                className="box-border caret-transparent h-[22px] w-[23px]"
              />
            </div>
            Most Popular
          </span>
          <div className="items-center aspect-square bg-stone-50 box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] w-[25px] ml-5 rounded-md md:min-h-0 md:min-w-0">
            <IoChevronForward className="text-stone-800 rotate-90" />
          </div>
        </button>
      </div>
    </div>
  );
}
