export default function NavList() {

  return (
    <ul className="items-center box-border caret-transparent gap-x-2 hidden flex-col h-full list-none gap-y-2 z-[1001] pl-0 md:gap-x-4 md:flex md:flex-row md:h-auto md:gap-y-4">
      <li className="box-border caret-transparent max-w-xs min-h-0 min-w-0 w-full py-0 md:max-w-none md:min-h-[auto] md:min-w-[auto] md:w-auto md:py-2">
        <a href="#" className="text-orange-600 text-[44px] font-black box-border caret-transparent block tracking-[-1.44px] leading-[35.2px] min-h-0 min-w-0 uppercase font-venice_blvd md:text-stone-50 md:text-base md:font-bold md:tracking-[-0.32px] md:leading-4 md:min-h-[auto] md:min-w-[auto] md:normal-case md:font-degular">
          Products
        </a>
      </li>
      <li className="box-border caret-transparent max-w-xs min-h-0 min-w-0 w-full py-0 md:max-w-none md:min-h-[auto] md:min-w-[auto] md:w-auto md:py-2">
        <div className="items-center box-border caret-transparent inline-flex w-full">
          <span className="text-orange-600 text-[44px] font-black items-center box-border caret-transparent flex tracking-[-1.44px] leading-[35.2px] min-h-0 min-w-0 uppercase w-full font-venice_blvd md:text-stone-50 md:text-base md:font-bold md:tracking-[-0.32px] md:leading-4 md:min-h-[auto] md:min-w-[auto] md:normal-case md:font-degular">
            <a href="#" className="text-orange-600 text-[44px] font-black box-border caret-transparent block tracking-[-1.44px] leading-[35.2px] min-h-0 min-w-0 uppercase font-venice_blvd md:text-stone-50 md:text-base md:font-bold md:tracking-[-0.32px] md:leading-4 md:min-h-[auto] md:min-w-[auto] md:normal-case md:font-degular">
              About Us
            </a>
          </span>
        </div>
      </li>
      <li className="box-border caret-transparent max-w-xs min-h-0 min-w-0 w-full py-0 md:max-w-none md:min-h-[auto] md:min-w-[auto] md:w-auto md:py-2">
        <div className="items-center box-border caret-transparent inline-flex w-full">
          <span className="text-orange-600 text-[44px] font-black items-center box-border caret-transparent flex tracking-[-1.44px] leading-[35.2px] min-h-0 min-w-0 uppercase w-full font-venice_blvd md:text-stone-50 md:text-base md:font-bold md:tracking-[-0.32px] md:leading-4 md:min-h-[auto] md:min-w-[auto] md:normal-case md:font-degular">
            <a href="#" className="text-orange-600 text-[44px] font-black box-border caret-transparent block tracking-[-1.44px] leading-[35.2px] min-h-0 min-w-0 uppercase font-venice_blvd md:text-stone-50 md:text-base md:font-bold md:tracking-[-0.32px] md:leading-4 md:min-h-[auto] md:min-w-[auto] md:normal-case md:font-degular">
              Contact Us
            </a>
          </span>
        </div>
      </li>
    </ul>
  );
}
