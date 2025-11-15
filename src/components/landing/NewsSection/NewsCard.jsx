import { IoChevronForward } from 'react-icons/io5';

export default function NewsCard(props) {
  return (
    <div
      className={`box-border caret-transparent block h-auto min-h-0 min-w-0 overflow-visible md:flex md:h-[450px] md:min-h-[auto] md:min-w-[auto] md:overflow-hidden ${props.containerVariant}`}
    >
      <div
        aria-label={`Open ${props.category} accordion`}
        className={`text-stone-800 items-center box-border caret-transparent gap-x-6 flex justify-between min-h-0 min-w-0 gap-y-6 text-left uppercase w-auto p-4 rounded-2xl md:gap-x-0 md:justify-center md:min-h-[auto] md:min-w-[auto] md:gap-y-0 md:text-center md:w-16 md:p-0 md:rounded-3xl ${props.categoryVariant}`}
      >
        <h6 className="text-xl font-black box-border caret-transparent tracking-[-0.6px] leading-4 min-h-0 min-w-0 text-left text-nowrap transform-none font-venice_blvd md:text-2xl md:tracking-[-0.72px] md:leading-6 md:min-h-[auto] md:min-w-[auto] md:text-center md:-rotate-90">
          {props.category}
        </h6>
      </div>
      <div className="box-border caret-transparent basis-[0%] grow min-h-0 min-w-0 overflow-hidden md:min-h-[auto] md:min-w-[auto]">
        <div
          className={`box-border caret-transparent h-auto overflow-hidden ml-0 mt-2 p-4 rounded-2xl md:h-full md:ml-2 md:mt-0 md:p-5 md:rounded-3xl ${props.categoryVariant}`}
        >
          <div className="[align-items:normal] box-border caret-transparent gap-x-[normal] block h-auto min-w-[1412px] gap-y-[normal] md:items-center md:gap-x-8 md:flex md:h-full md:gap-y-8">
            <div className="relative box-border caret-transparent h-auto min-h-0 min-w-0 w-auto md:h-full md:min-h-[auto] md:min-w-[auto] md:w-6/12">
              <div className="box-border caret-transparent h-full">
                <img
                  alt={props.imageAlt}
                  src={props.imageUrl}
                  className={`aspect-[3_/_2] box-border caret-transparent h-full object-cover w-full rounded-3xl${props.imageObjectPosition ? ` object-[${props.imageObjectPosition}]` : ""}`}
                />
              </div>
            </div>
            <div className="box-border caret-transparent basis-[0%] grow min-h-0 min-w-0 py-0 md:min-h-[auto] md:min-w-[auto] md:py-6">
              <p className="font-bold box-border caret-transparent tracking-[-0.32px] leading-4 mt-4 mb-3 font-degular md:mt-0 md:mb-6">
                {props.date}
              </p>
              <h5 className="text-[32px] font-black box-border caret-transparent tracking-[-0.96px] leading-[25.6px] uppercase mt-6 mb-4 font-venice_blvd md:mt-0">
                {props.title}
              </h5>
              <p className="text-base font-medium box-border caret-transparent flow-root tracking-[-0.18px] leading-[19.2px] overflow-hidden mb-6 font-degular md:text-lg md:leading-[21.6px]">
                {props.description}
              </p>
              <a href={props.linkUrl} className="box-border caret-transparent">
                <button className="text-stone-800 text-[13.3333px] items-center bg-stone-50 caret-transparent inline-flex leading-[normal] text-center px-4 py-3 rounded-lg font-arial">
                  <div className="box-border caret-transparent min-h-0 min-w-0 md:min-h-[auto] md:min-w-[auto]">
                    <div className="text-sm font-bold items-center box-border caret-transparent flex justify-center tracking-[-0.28px] leading-[14px] text-nowrap font-degular">
                      Read More
                      <div className="items-center aspect-square bg-stone-800 box-border caret-transparent flex justify-center min-h-0 min-w-0 text-nowrap w-[18px] ml-2 rounded-md md:min-h-[auto] md:min-w-[auto]">
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
