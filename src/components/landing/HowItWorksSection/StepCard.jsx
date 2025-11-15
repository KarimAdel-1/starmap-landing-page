export default function StepCard(props) {
  return (
    <div className="box-border caret-transparent text-center py-0 md:py-6">
      <div className="relative items-center aspect-square bg-blue-100 box-border caret-transparent flex justify-center max-h-80 max-w-xs mb-5 mx-auto rounded-2xl md:mb-10 after:accent-auto after:bg-stone-800/20 after:caret-transparent after:text-black after:block after:blur-md after:text-base after:not-italic after:normal-nums after:font-normal after:h-10 after:tracking-[normal] after:leading-6 after:list-outside after:list-disc after:pointer-events-auto after:absolute after:text-center after:indent-[0px] after:normal-case after:-translate-x-5 after:translate-y-[-28.8px] after:visible after:w-10 after:z-[-1] after:rounded-[30%] after:border-separate after:scale-[1.2px] after:left-2/4 after:top-[72%] after:font-degular after:md:h-20 after:md:-translate-x-10 after:md:translate-y-[-57.6px] after:md:w-20 after:md:scale-[1.2px]">
      </div>
      <h4 className="text-[32px] font-black box-border caret-transparent tracking-[-0.96px] leading-[25.6px] uppercase px-2 font-venice_blvd">
        {props.title}
      </h4>
      <p className="text-lg box-border caret-transparent mt-4 px-2 font-degular">
        {props.description}
      </p>
    </div>
  );
}
