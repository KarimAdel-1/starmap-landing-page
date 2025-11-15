export default function NewsletterForm() {
  return (
    <form className="box-border caret-transparent gap-x-3 flex flex-col justify-center gap-y-3 md:flex-row">
      <input
        placeholder="Full Name*"
        type="text"
        name="name"
        className="text-neutral-600 text-[13.3333px] bg-zinc-100/30 box-border caret-transparent block h-[42px] leading-[normal] text-start w-[331px] pt-[22px] pb-5 px-[15px] rounded-xl font-degular md:h-[52px] md:w-80"
      />
      <input
        placeholder="Email Address*"
        type="email"
        name="email"
        className="text-neutral-600 text-[13.3333px] bg-zinc-100/30 box-border caret-transparent block h-[42px] leading-[normal] text-start w-[331px] mb-[30px] pt-[22px] pb-5 px-[15px] rounded-xl font-degular md:h-[52px] md:w-80 md:mb-0"
      />
    </form>
  );
}
