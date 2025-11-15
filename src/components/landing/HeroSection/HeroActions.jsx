export default function HeroActions() {
  return (
    <div className="items-center box-border caret-transparent flex justify-center mt-[30px]">
      <a
        href="/create"
        className="box-border caret-transparent block"
      >
        <button className="text-stone-50 text-[13.3333px] items-center bg-stone-800 caret-transparent inline-flex leading-[normal] text-center px-4 py-3 rounded-lg font-arial">
          <div className="box-border caret-transparent">
            <div className="text-sm font-bold items-center box-border caret-transparent flex justify-center tracking-[-0.28px] leading-[14px] text-nowrap font-degular">
              {" "}
              Customize Now{" "}
              <div className="items-center aspect-square bg-stone-50 box-border caret-transparent flex justify-center text-nowrap w-[18px] ml-2 rounded-md">
                <span className="box-border caret-transparent block h-3/6 text-nowrap">
                  <img
                    src="https://c.animaapp.com/mhw34jjqRgJaRr/assets/image-2.svg"
                    alt="caret-almost-black"
                    className="box-border caret-transparent h-full text-nowrap"
                  />
                </span>
              </div>
            </div>
          </div>
        </button>
      </a>
    </div>
  );
}
