import { IoChevronForward } from 'react-icons/io5';

export default function AboutSection() {
  return (
    <section className="items-center box-border caret-transparent gap-x-[normal] flex flex-col justify-normal max-w-none gap-y-[normal] mx-auto px-2 py-[60px] md:gap-x-6 md:flex-row md:justify-center md:max-w-[1540px] md:gap-y-6 md:px-6 md:py-[120px]">
      <div className="relative box-border caret-transparent max-w-[1080px] w-full md:w-[70%]">
        <h2 className="relative text-[32px] sm:text-[56px] font-black box-border caret-transparent tracking-[-1.5px] sm:tracking-[-2px] leading-[28px] sm:leading-[44.8px] text-center uppercase w-full z-10 font-venice_blvd md:text-8xl md:font-bold md:tracking-[-2.88px] md:leading-[76.8px] md:text-left md:w-min">
          <span className="text-[32px] sm:text-[56px] font-black box-border caret-transparent block tracking-[-1.5px] sm:tracking-[-2px] leading-[28px] sm:leading-[44.8px] text-center w-auto z-10 mx-auto md:text-8xl md:font-bold md:tracking-[-2.88px] md:leading-[76.8px] md:text-left md:ml-10 md:w-min">
            Made from<br />Moments,
          </span>
        </h2>
        <div className="relative box-border caret-transparent">
          <div className="aspect-[32_/_15] bg-blue-100 box-border caret-transparent min-h-[120px] sm:min-h-[186px] object-cover w-full z-[1] overflow-hidden mx-auto -my-5 rounded-2xl">
          </div>
          <div className="absolute box-border caret-transparent h-full w-full left-0 top-0">
            <div className="absolute aspect-square bg-blue-600 box-border caret-transparent top-[calc(100%_-_60px)] sm:top-[calc(100%_-_100px)] w-[80px] sm:w-[120px] z-[1] -left-5 sm:-left-10 rounded-full md:w-[180px] md:top-[calc(100%_-_100px)]">
            </div>
            <div className="absolute aspect-square bg-blue-200 box-border caret-transparent w-[80px] sm:w-[120px] z-[1] -right-3 sm:-right-5 -top-16 sm:-top-32 rounded-full md:right-[-50px] md:top-[-100px] md:w-[180px]">
            </div>
          </div>
        </div>
        <h2 className="relative text-[32px] sm:text-[56px] font-black box-border caret-transparent tracking-[-1.5px] sm:tracking-[-2px] leading-[28px] sm:leading-[44.8px] text-center uppercase w-full z-10 font-venice_blvd md:text-8xl md:font-bold md:tracking-[-2.88px] md:leading-[76.8px] md:text-left md:w-min">
          <span className="text-[32px] sm:text-[56px] font-black box-border caret-transparent block tracking-[-1.5px] sm:tracking-[-2px] leading-[28px] sm:leading-[44.8px] max-w-screen-sm text-center w-auto z-10 mx-auto md:text-8xl md:font-bold md:tracking-[-2.88px] md:leading-[76.8px] md:text-left md:w-max md:ml-40">
            Shared with<br />Love
          </span>
        </h2>
      </div>
      <div className="box-border caret-transparent max-w-[273px] text-center pt-8 pb-4 md:max-w-[424px] md:text-left md:py-6">
        <p className="font-medium box-border caret-transparent tracking-[-0.18px] leading-[19.2px] text-center origin-[211.805px_48px] font-degular md:text-left">
          We're on a mission to turn life's unforgettable moments into art you can hold forever. Every design we make is personal, just like the memories that inspire it.
        </p>
        <button className="text-stone-50 text-[13.3333px] items-center bg-stone-800 caret-transparent inline-flex leading-[normal] text-center origin-[82.4453px_26px] mt-3 px-4 py-3 rounded-lg font-arial md:mt-6">
          <div className="box-border caret-transparent">
            <div className="text-sm font-bold items-center box-border caret-transparent flex justify-center tracking-[-0.28px] leading-[14px] text-nowrap font-degular">
              Learn More
              <div className="items-center aspect-square bg-stone-50 box-border caret-transparent flex justify-center text-nowrap w-[18px] ml-2 rounded-md">
                <IoChevronForward className="text-stone-800" />
              </div>
            </div>
          </div>
        </button>
      </div>
    </section>
  );
}
