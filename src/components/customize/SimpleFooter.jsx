import FooterNav from '../landing/FooterNav';
import FooterContact from '../landing/FooterContact';
import MobileSocial from '../landing/MobileSocial';

export default function SimpleFooter() {
  return (
    <footer className="text-stone-50 bg-stone-800 box-border caret-transparent text-center pt-20 pb-6 md:pb-20">
      <div className="relative box-border caret-transparent max-w-[1228px] w-full mx-auto px-2 md:px-10">
        <div className="box-border caret-transparent flex justify-center mb-6">
          <a
            href="/"
            aria-label="Back to home"
            className="self-center box-border caret-transparent flex order-1 md:order-2"
          >
            <span className="text-4xl font-black box-border caret-transparent uppercase font-venice_blvd md:text-5xl">
              Starmap
            </span>
          </a>
        </div>
        <h3 className="text-stone-400 text-[22.5px] font-black box-border caret-transparent hidden tracking-[-2px] leading-[18px] uppercase mt-5 mb-[60px] font-venice_blvd md:text-[76px] md:block md:tracking-[-3px] md:leading-[60.8px]">
          #capturethemoment
        </h3>
        <div className="box-border caret-transparent block md:hidden">
          <div className="relative box-border caret-transparent flex h-max overflow-x-hidden overflow-y-auto w-full">
            <div className="absolute box-border caret-transparent h-full w-full"></div>
            <div className="items-center box-border caret-transparent flex shrink-0 min-h-[0%] min-w-[0%] z-[1]">
              <h3 className="text-stone-400 text-[32px] font-black box-border caret-transparent tracking-[-0.96px] leading-[25.6px] min-h-[auto] min-w-[auto] uppercase mr-2.5 mt-5 mb-12 font-venice_blvd md:min-h-0 md:min-w-0">
                #capturethemoment
              </h3>
            </div>
            <div className="items-center box-border caret-transparent flex shrink-0 min-h-[0%] min-w-[0%] z-[1]">
              <h3 className="text-stone-400 text-[32px] font-black box-border caret-transparent tracking-[-0.96px] leading-[25.6px] min-h-[auto] min-w-[auto] uppercase mr-2.5 mt-5 mb-12 font-venice_blvd md:min-h-0 md:min-w-0">
                #capturethemoment
              </h3>
            </div>
          </div>
        </div>
        <div className="box-border caret-transparent gap-x-[normal] block justify-normal gap-y-[normal] text-center md:gap-x-[60px] md:flex md:justify-between md:gap-y-[60px] md:text-left">
          <FooterNav />
          <FooterContact />
          <MobileSocial />
        </div>
      </div>
    </footer>
  );
}
