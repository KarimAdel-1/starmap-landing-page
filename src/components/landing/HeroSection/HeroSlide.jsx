export default function HeroSlide({ slide }) {
  return (
    <div className="box-border caret-transparent text-center">
      <h1 className="text-white text-[56px] font-black box-border caret-transparent tracking-[-2px] leading-[44.8px] max-w-[500px] uppercase mx-auto px-2 font-venice_blvd md:text-[100px] md:tracking-[-3px] md:leading-[80px] md:max-w-[877px]">
        {slide.title}
      </h1>
      <p className="text-white text-lg box-border caret-transparent mt-4 mx-auto max-w-[600px] px-4">
        {slide.description}
      </p>
    </div>
  );
}
