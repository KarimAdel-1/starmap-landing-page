import { IoChevronForward } from 'react-icons/io5';

export default function MobileNewsCard(props) {
  return (
    <div
      className={`box-border caret-transparent block basis-auto shrink h-auto overflow-visible md:flex md:basis-16 md:shrink-0 md:h-[450px] md:overflow-hidden ${props.contentVariant === "visible" ? "mb-1.5 md:mb-0" : ""}`}
    >
      <div
        className={`text-stone-800 items-center box-border caret-transparent gap-x-6 flex justify-between gap-y-6 text-left uppercase w-auto p-4 rounded-2xl md:gap-x-0 md:justify-center md:gap-y-0 md:text-center md:w-16 md:p-0 md:rounded-3xl ${props.categoryVariant}`}
      >
        <span className="font-black box-border caret-transparent block basis-[0%] grow tracking-[-0.48px] leading-4 min-h-[auto] min-w-[auto] text-left font-venice_blvd md:min-h-0 md:min-w-0 md:text-center">
          {props.categoryLabel}
        </span>
        <div className="items-center aspect-square bg-stone-800 box-border caret-transparent flex justify-center min-h-[auto] min-w-[auto] text-left w-5 rounded-md md:min-h-0 md:min-w-0 md:text-center">
          <IoChevronForward className={`text-white ${props.categoryVariant === "bg-amber-400" ? "-rotate-90" : "rotate-90"}`} />
        </div>
      </div>
      <div
        className={`box-border caret-transparent ${props.contentVariant === "hidden" ? "hidden" : ""}`}
      >
        <div
          className={`${props.cardBackgroundColor} box-border caret-transparent h-auto overflow-hidden ml-0 mt-2 p-4 rounded-2xl md:h-full md:ml-2 md:mt-0 md:p-5 md:rounded-3xl`}
        >
          <div className="[align-items:normal] box-border caret-transparent gap-x-[normal] block h-auto min-w-[1412px] gap-y-[normal] md:items-center md:gap-x-8 md:flex md:h-full md:gap-y-8">
            <div className="relative box-border caret-transparent h-auto w-auto md:h-full md:w-6/12">
              <div className="box-border caret-transparent h-full">
                <img
                  alt={props.imageAlt}
                  src={props.imageUrl}
                  className={`aspect-[3_/_2] box-border caret-transparent h-full object-cover w-full rounded-3xl ${props.imageObjectPosition || ""}`}
                />
              </div>
            </div>
            <div className="box-border caret-transparent basis-[0%] grow py-0 md:py-6">
              <p className="font-bold box-border caret-transparent tracking-[-0.32px] leading-4 mt-4 mb-3 font-degular md:mt-0 md:mb-6">
                {props.date}
              </p>
              <h5 className="text-[32px] font-black box-border caret-transparent tracking-[-0.96px] leading-[25.6px] uppercase mt-6 mb-4 font-venice_blvd md:mt-0">
                {props.title}
              </h5>
              <p className="text-base font-medium box-border caret-transparent flow-root tracking-[-0.18px] leading-[19.2px] overflow-hidden mb-6 font-degular md:text-lg md:leading-[21.6px]">
                {props.description}
              </p>
              <a
                href={props.articleUrl}
                className="box-border caret-transparent"
              >
                <button className="text-stone-800 text-[13.3333px] items-center bg-stone-50 caret-transparent inline-flex leading-[normal] text-center px-4 py-3 rounded-lg font-arial">
                  <div
                    className={`box-border caret-transparent ${props.contentVariant === "visible" ? "min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0" : ""}`}
                  >
                    <div className="text-sm font-bold items-center box-border caret-transparent flex justify-center tracking-[-0.28px] leading-[14px] text-nowrap font-degular">
                      Read More
                      <div
                        className={`items-center aspect-square bg-stone-800 box-border caret-transparent flex justify-center text-nowrap w-[18px] ml-2 rounded-md ${props.contentVariant === "visible" ? "min-h-[auto] min-w-[auto] md:min-h-0 md:min-w-0" : ""}`}
                      >
                        <IoChevronForward className="text-white" />
                      </div>
                    </div>
                  </div>
                </button>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
