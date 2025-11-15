export default function RecipeCarouselControls() {
  return (
    <div className="items-center box-border caret-transparent flex flex-col justify-center w-auto mt-[50px] mx-auto p-2.5 rounded-xl md:flex-row md:w-fit">
      <div className="items-center box-border caret-transparent gap-x-2 flex justify-center min-w-[auto] gap-y-2 px-5 md:min-w-[257px]">
        <button
          aria-label="Go to previous slide"
          className="text-stone-950/30 text-[13.3333px] bg-transparent caret-transparent flex leading-[normal] text-center mr-5 font-arial"
        >
          <div className="items-center aspect-square bg-stone-800 box-border caret-transparent flex justify-center w-[35px] rounded-md">
            <span className="box-border caret-transparent block h-2/5 scale-x-[-1px] scale-y-[-1px]">
              <img
                src="https://c.animaapp.com/mhw34jjqRgJaRr/assets/image-3.svg"
                alt="arrow-off-white"
                className="box-border caret-transparent h-full"
              />
            </span>
          </div>
        </button>
        <button
          aria-label="Go to slide 1 "
          className="text-stone-950/30 text-[13.3333px] aspect-square bg-stone-800 caret-transparent flex basis-2 shrink-0 h-2.5 leading-[normal] opacity-30 text-center w-2.5 p-0 rounded-lg font-arial md:aspect-auto md:h-2 md:w-auto"
        ></button>
        <button
          aria-label="Go to slide 2 "
          className="text-stone-950/30 text-[13.3333px] aspect-square bg-stone-800 caret-transparent flex basis-2 shrink-0 h-2.5 leading-[normal] opacity-30 text-center w-2.5 p-0 rounded-lg font-arial md:aspect-auto md:h-2 md:w-auto"
        ></button>
        <button
          aria-label="Go to slide 3 "
          className="text-stone-950/30 text-[13.3333px] aspect-square bg-stone-800 caret-transparent flex basis-5 shrink-0 h-2.5 leading-[normal] text-center w-2.5 p-0 rounded-lg font-arial md:aspect-auto md:h-2 md:w-auto"
        ></button>
        <button
          aria-label="Go to slide 4 "
          className="text-stone-950/30 text-[13.3333px] aspect-square bg-stone-800 caret-transparent flex basis-2 shrink-0 h-2.5 leading-[normal] opacity-30 text-center w-2.5 p-0 rounded-lg font-arial md:aspect-auto md:h-2 md:w-auto"
        ></button>
        <button
          aria-label="Go to slide 5 "
          className="text-stone-950/30 text-[13.3333px] aspect-square bg-stone-800 caret-transparent flex basis-2 shrink-0 h-2.5 leading-[normal] opacity-30 text-center w-2.5 p-0 rounded-lg font-arial md:aspect-auto md:h-2 md:w-auto"
        ></button>
        <button
          aria-label="Go to slide 6 "
          className="text-stone-950/30 text-[13.3333px] aspect-square bg-stone-800 caret-transparent flex basis-2 shrink-0 h-2.5 leading-[normal] opacity-30 text-center w-2.5 p-0 rounded-lg font-arial md:aspect-auto md:h-2 md:w-auto"
        ></button>
        <button
          aria-label="Go to next slide"
          className="text-stone-950/30 text-[13.3333px] bg-transparent caret-transparent flex leading-[normal] text-center ml-5 font-arial"
        >
          <div className="items-center aspect-square bg-stone-800 box-border caret-transparent flex justify-center w-[35px] rounded-md">
            <span className="box-border caret-transparent block h-2/5">
              <img
                src="https://c.animaapp.com/mhw34jjqRgJaRr/assets/image-3.svg"
                alt="arrow-off-white"
                className="box-border caret-transparent h-full"
              />
            </span>
          </div>
        </button>
      </div>
    </div>
  );
}
