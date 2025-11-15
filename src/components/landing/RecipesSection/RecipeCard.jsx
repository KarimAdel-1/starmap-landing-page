export default function RecipeCard(props) {
  return (
    <a
      href={props.href}
      aria-label="View Recipe"
      className="box-border caret-transparent"
    >
      <div
        className={`relative ${props.bgColor} box-border caret-transparent flex flex-col h-full w-[calc(100%_-_16px)] overflow-hidden p-5 rounded-3xl md:w-full ${props.scale || ""}`}
      >
        <div className="absolute aspect-square box-border caret-transparent max-w-[380px] opacity-10 w-full z-0 mx-auto -top-10 inset-x-0 md:top-0">
          <div className="box-border caret-transparent">
            <img
              src={props.iconUrl}
              alt="Icon"
              className="box-border caret-transparent h-full w-full"
            />
          </div>
        </div>
        <div className="relative box-border caret-transparent z-[1]">
          <div className="aspect-[6_/_4] box-border caret-transparent object-cover w-full overflow-hidden rounded-xl">
            <img
              alt={props.imageAlt}
              src={props.imageUrl}
              className={`box-border caret-transparent h-full object-cover w-full rounded-xl ${props.imageObjectPosition || ""}`}
            />
          </div>
          <p className="absolute text-sm font-bold bg-zinc-100 box-border caret-transparent tracking-[-0.28px] leading-[14px] p-2 rounded-lg right-2.5 top-2.5 font-degular md:text-base md:tracking-[-0.32px] md:leading-4">
            {props.prepTime}
          </p>
        </div>
        <div
          className={`relative ${props.textColor || ""} box-border caret-transparent flex basis-[0%] flex-col grow z-10`}
        >
          <ul className="box-border caret-transparent flex flex-wrap list-none mt-5 pl-0">
            {props.tags.map((tag, index) => (
              <li
                key={index}
                className="text-xs font-bold items-center box-border caret-transparent flex tracking-[-0.24px] leading-3 mr-2 font-degular md:text-base md:tracking-[-0.32px] md:leading-4"
              >
                <img
                  src={tag.checkmarkIcon}
                  alt="checkmark"
                  className="text-xs box-border caret-transparent tracking-[-0.24px] leading-3 w-3.5 mr-1 md:text-base md:tracking-[-0.32px] md:leading-4"
                />
                <span className="text-xs box-border caret-transparent block tracking-[-0.24px] leading-3 md:text-base md:tracking-[-0.32px] md:leading-4">
                  {tag.label}
                </span>
              </li>
            ))}
          </ul>
          <h5 className="text-[32px] font-black box-border caret-transparent tracking-[-0.96px] leading-[25.6px] uppercase my-5 font-venice_blvd">
            {props.title}
          </h5>
          <button className="text-stone-800 text-[13.3333px] items-center bg-stone-50 caret-transparent flex leading-[normal] text-center w-max mt-auto px-4 py-3 rounded-lg font-arial">
            <div className="box-border caret-transparent">
              <div className="text-sm font-bold items-center box-border caret-transparent flex justify-center tracking-[-0.28px] leading-[14px] text-nowrap font-degular">
                View Recipe
                <div className="items-center aspect-square bg-stone-800 box-border caret-transparent flex justify-center text-nowrap w-[18px] ml-2 rounded-md">
                  <span className="box-border caret-transparent block h-3/6 text-nowrap">
                    <img
                      src="https://c.animaapp.com/mhw34jjqRgJaRr/assets/image-1.svg"
                      alt="caret-off-white"
                      className="box-border caret-transparent h-full text-nowrap"
                    />
                  </span>
                </div>
              </div>
            </div>
          </button>
        </div>
      </div>
    </a>
  );
}
