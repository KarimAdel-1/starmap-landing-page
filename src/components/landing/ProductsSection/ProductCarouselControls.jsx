import { IoChevronForward } from 'react-icons/io5';

export default function ProductCarouselControls() {
  return (
    <div className="items-center bg-transparent box-border caret-transparent flex flex-col justify-center w-auto mt-[30px] mx-auto p-2.5 rounded-xl md:bg-stone-800 md:flex-row md:w-fit">
      <div className="items-center box-border caret-transparent gap-x-2 flex justify-center min-w-[auto] gap-y-2 mr-0 px-5 md:min-w-[257px] md:mr-5">
        <button
          aria-label="Go to previous slide"
          className="text-stone-950/30 text-[13.3333px] bg-transparent caret-transparent flex leading-[normal] text-center mr-[30px] font-arial md:mr-0"
        >
          <div className="items-center aspect-square bg-stone-50 box-border caret-transparent flex justify-center w-[25px] rounded-md">
            <IoChevronForward className="text-stone-800 rotate-180" />
          </div>
        </button>
        <button
          aria-label="Go to slide 1 "
          className="text-stone-950/30 text-[13.3333px] aspect-square bg-stone-800 caret-transparent flex basis-2 shrink-0 h-2.5 leading-[normal] opacity-30 text-center w-2.5 p-0 rounded-lg font-arial md:aspect-auto md:bg-stone-50 md:h-2 md:w-auto"
        ></button>
        <button
          aria-label="Go to slide 2 "
          className="text-stone-950/30 text-[13.3333px] aspect-square bg-stone-800 caret-transparent flex basis-2 shrink-0 h-2.5 leading-[normal] opacity-30 text-center w-2.5 p-0 rounded-lg font-arial md:aspect-auto md:bg-stone-50 md:h-2 md:w-auto"
        ></button>
        <button
          aria-label="Go to slide 3 "
          className="text-stone-950/30 text-[13.3333px] aspect-square bg-neutral-900 caret-transparent flex basis-5 shrink-0 h-2.5 leading-[normal] text-center w-2.5 p-0 rounded-lg font-arial md:aspect-auto md:bg-white md:h-2 md:w-auto"
        ></button>
        <button
          aria-label="Go to slide 4 "
          className="text-stone-950/30 text-[13.3333px] aspect-square bg-stone-800 caret-transparent flex basis-2 shrink-0 h-2.5 leading-[normal] opacity-30 text-center w-2.5 p-0 rounded-lg font-arial md:aspect-auto md:bg-stone-50 md:h-2 md:w-auto"
        ></button>
        <button
          aria-label="Go to slide 5 "
          className="text-stone-950/30 text-[13.3333px] aspect-square bg-stone-800 caret-transparent flex basis-2 shrink-0 h-2.5 leading-[normal] opacity-30 text-center w-2.5 p-0 rounded-lg font-arial md:aspect-auto md:bg-stone-50 md:h-2 md:w-auto"
        ></button>
        <button
          aria-label="Go to slide 6 "
          className="text-stone-950/30 text-[13.3333px] aspect-square bg-stone-800 caret-transparent flex basis-2 shrink-0 h-2.5 leading-[normal] opacity-30 text-center w-2.5 p-0 rounded-lg font-arial md:aspect-auto md:bg-stone-50 md:h-2 md:w-auto"
        ></button>
        <button
          aria-label="Go to slide 7 "
          className="text-stone-950/30 text-[13.3333px] aspect-square bg-stone-800 caret-transparent flex basis-2 shrink-0 h-2.5 leading-[normal] opacity-30 text-center w-2.5 p-0 rounded-lg font-arial md:aspect-auto md:bg-stone-50 md:h-2 md:w-auto"
        ></button>
        <button
          aria-label="Go to next slide"
          className="text-stone-950/30 text-[13.3333px] bg-transparent caret-transparent flex leading-[normal] text-center ml-5 font-arial md:ml-0"
        >
          <div className="items-center aspect-square bg-stone-50 box-border caret-transparent flex justify-center w-[25px] rounded-md">
            <IoChevronForward className="text-stone-800" />
          </div>
        </button>
      </div>
      <a
        href="https://www.brars.com/products"
        className="box-border caret-transparent block"
      >
        <button className="text-stone-800 text-[13.3333px] items-center bg-stone-50 caret-transparent flex leading-[normal] text-center mt-5 px-4 py-3 rounded-lg font-arial md:mt-0">
          <div className="box-border caret-transparent">
            <div className="text-sm font-bold items-center box-border caret-transparent flex justify-center tracking-[-0.28px] leading-[14px] text-nowrap font-degular">
              View All{" "}
              <div className="items-center aspect-square bg-stone-800 box-border caret-transparent flex justify-center text-nowrap w-[18px] ml-2 rounded-md">
                <IoChevronForward className="text-white" />
              </div>
            </div>
          </div>
        </button>
      </a>
    </div>
  );
}
