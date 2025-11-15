export default function SubscribeForm() {
  return (
    <form className="box-border caret-transparent flex flex-col justify-center text-center md:text-left">
      <input
        value=""
        placeholder="Full Name*"
        type="text"
        name="name"
        className="text-zinc-100 text-[13.3333px] bg-transparent box-border caret-transparent block h-[63px] leading-[normal] text-start w-[327px] border-zinc-100 mt-3 border-t-0 border-x-0 font-degular md:h-[55px] md:w-[450px] md:mt-5"
      />
      <input
        value=""
        placeholder="Email Address*"
        type="text"
        name="email"
        className="text-zinc-100 text-[13.3333px] bg-transparent box-border caret-transparent block h-[63px] leading-[normal] text-start w-[327px] border-zinc-100 mt-3 border-t-0 border-x-0 font-degular md:h-[55px] md:w-[450px] md:mt-5"
      />
      <div
        aria-label="Submit"
        className="items-center self-end aspect-square bg-stone-50 box-border caret-transparent flex justify-center mt-[-45px] text-center w-[22px] z-[500] rounded-md md:text-left md:-mt-10"
      >
        <span className="box-border caret-transparent block h-2/5 text-center md:text-left">
          <img
            src="https://c.animaapp.com/mhw34jjqRgJaRr/assets/image-9.svg"
            alt="arrow-almost-black"
            className="box-border caret-transparent h-full text-center md:text-left"
          />
        </span>
      </div>
    </form>
  );
}
