export default function CarouselDots() {
  return (
    <div className="box-border caret-transparent flex-col mt-[30px] mx-auto p-2.5 md:flex-row">
      <div className="items-center box-border caret-transparent gap-x-2 flex justify-center min-w-0 gap-y-2 px-5 md:min-w-[257px]">
        <button
          aria-label="Go to slide 1 "
          className="relative text-stone-950/30 text-[13.3333px] aspect-square bg-stone-800/30 caret-transparent block basis-5 shrink-0 h-2 leading-[normal] text-center w-2.5 overflow-hidden p-0 rounded-lg font-arial md:aspect-auto md:w-auto after:accent-auto after:bg-stone-800 after:caret-transparent after:text-stone-950/30 after:block after:text-[13.3333px] after:not-italic after:normal-nums after:font-normal after:h-2 after:tracking-[normal] after:leading-[normal] after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-center after:indent-[0px] after:normal-case after:origin-[0%_50%] after:visible after:w-full after:rounded-lg after:border-separate after:left-0 after:top-0 after:font-arial"
        ></button>
        <button
          aria-label="Go to slide 2 "
          className="relative text-stone-950/30 text-[13.3333px] aspect-square bg-stone-800/30 caret-transparent block basis-2 shrink-0 h-2 leading-[normal] text-center w-2.5 overflow-hidden p-0 rounded-lg font-arial md:aspect-auto md:w-auto"
        ></button>
        <button
          aria-label="Go to slide 3 "
          className="relative text-stone-950/30 text-[13.3333px] aspect-square bg-stone-800/30 caret-transparent block basis-2 shrink-0 h-2 leading-[normal] text-center w-2.5 overflow-hidden p-0 rounded-lg font-arial md:aspect-auto md:w-auto"
        ></button>
        <button
          aria-label="Go to slide 4 "
          className="relative text-stone-950/30 text-[13.3333px] aspect-square bg-stone-800/30 caret-transparent block basis-2 shrink-0 h-2 leading-[normal] text-center w-2.5 overflow-hidden p-0 rounded-lg font-arial md:aspect-auto md:w-auto"
        ></button>
      </div>
    </div>
  );
}
