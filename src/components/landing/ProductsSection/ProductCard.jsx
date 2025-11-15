export default function ProductCard(props) {
  return (
    <div className="box-border caret-transparent text-center py-0 md:py-6">
      <a
        href={props.href}
        className="box-border caret-transparent inline-block"
      >
        <div className="relative items-center aspect-square box-border caret-transparent flex justify-center max-h-80 max-w-xs mb-5 mx-auto md:mb-10 after:accent-auto after:bg-stone-800/20 after:caret-transparent after:text-black after:block after:blur-md after:text-base after:not-italic after:normal-nums after:font-normal after:h-10 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-center after:indent-[0px] after:normal-case after:-translate-x-5 after:translate-y-[-28.8px] after:visible after:w-10 after:z-[-1] after:rounded-[30%] after:border-separate after:scale-[1.2px] after:left-2/4 after:top-[72%] after:font-degular after:md:h-20 after:md:-translate-x-10 after:md:translate-y-[-57.6px] after:md:w-20 after:md:scale-[1.2px]">
          <div
            className={
              props.imageWrapperClassName || "box-border caret-transparent"
            }
          >
            <img
              alt={props.imageAlt}
              src={props.imageUrl}
              className="box-border caret-transparent h-full object-cover w-full"
            />
          </div>
          <div className="absolute box-border caret-transparent z-[-1] inset-0">
            <div
              className={
                props.backgroundIconClassName ||
                "text-stone-200 box-border caret-transparent h-full w-full scale-[0.8px]"
              }
            >
              <img
                src={props.backgroundIconUrl}
                alt="Icon"
                className="box-border caret-transparent h-full w-full"
              />
            </div>
          </div>
        </div>
        <h4 className="text-[32px] font-black box-border caret-transparent tracking-[-0.96px] leading-[25.6px] uppercase px-2 font-venice_blvd">
          {props.title}
        </h4>
        <ul className="box-border caret-transparent gap-x-2 flex flex-wrap justify-center list-none gap-y-2 mt-[18px] pl-0">
          {props.badges.map((badge, index) => (
            <li
              key={index}
              className="text-sm font-bold items-center box-border caret-transparent flex tracking-[-0.28px] leading-[14px] font-degular md:text-xl md:tracking-[-0.4px] md:leading-5"
            >
              <img
                src={badge.iconUrl}
                alt="icon"
                className="text-sm box-border caret-transparent h-3 tracking-[-0.28px] leading-[14px] pr-[3px] md:text-xl md:h-[18px] md:tracking-[-0.4px] md:leading-5"
              />
              <span className="text-sm box-border caret-transparent block tracking-[-0.28px] leading-[14px] md:text-xl md:tracking-[-0.4px] md:leading-5">
                {badge.text}
              </span>
            </li>
          ))}
        </ul>
      </a>
    </div>
  );
}
