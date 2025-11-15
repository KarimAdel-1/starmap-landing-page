export default function NavList() {

  return (
    <ul className="items-center box-border caret-transparent gap-x-2 flex flex-col h-full list-none gap-y-2 z-[1001] pl-0 md:gap-x-4 lg:flex lg:flex-row lg:h-auto lg:gap-y-4">
      <li className="box-border caret-transparent max-w-xs min-h-0 min-w-0 w-full py-0 md:max-w-none md:min-h-[auto] md:min-w-[auto] md:w-auto md:py-2">
        <a href="#" className="text-blue-600 text-[44px] font-black box-border caret-transparent block tracking-[-1.44px] leading-[35.2px] min-h-0 min-w-0 uppercase font-venice_blvd lg:text-stone-50 lg:text-base lg:font-bold lg:tracking-[-0.32px] lg:leading-4 lg:min-h-[auto] lg:min-w-[auto] lg:normal-case lg:font-degular">
          Products
        </a>
      </li>
      <li className="box-border caret-transparent max-w-xs min-h-0 min-w-0 w-full py-0 md:max-w-none md:min-h-[auto] md:min-w-[auto] md:w-auto md:py-2">
        <div className="items-center box-border caret-transparent inline-flex w-full">
          <span className="text-blue-600 text-[44px] font-black items-center box-border caret-transparent flex tracking-[-1.44px] leading-[35.2px] min-h-0 min-w-0 uppercase w-full font-venice_blvd lg:text-stone-50 lg:text-base lg:font-bold lg:tracking-[-0.32px] lg:leading-4 lg:min-h-[auto] lg:min-w-[auto] lg:normal-case lg:font-degular">
            <a href="#" className="text-blue-600 text-[44px] font-black box-border caret-transparent block tracking-[-1.44px] leading-[35.2px] min-h-0 min-w-0 uppercase font-venice_blvd lg:text-stone-50 lg:text-base lg:font-bold lg:tracking-[-0.32px] lg:leading-4 lg:min-h-[auto] lg:min-w-[auto] lg:normal-case lg:font-degular">
              About Us
            </a>
          </span>
        </div>
      </li>
      <li className="box-border caret-transparent max-w-xs min-h-0 min-w-0 w-full py-0 md:max-w-none md:min-h-[auto] md:min-w-[auto] md:w-auto md:py-2">
        <div className="items-center box-border caret-transparent inline-flex w-full">
          <span className="text-blue-600 text-[44px] font-black items-center box-border caret-transparent flex tracking-[-1.44px] leading-[35.2px] min-h-0 min-w-0 uppercase w-full font-venice_blvd lg:text-stone-50 lg:text-base lg:font-bold lg:tracking-[-0.32px] lg:leading-4 lg:min-h-[auto] lg:min-w-[auto] lg:normal-case lg:font-degular">
            <a href="#" className="text-blue-600 text-[44px] font-black box-border caret-transparent block tracking-[-1.44px] leading-[35.2px] min-h-0 min-w-0 uppercase font-venice_blvd lg:text-stone-50 lg:text-base lg:font-bold lg:tracking-[-0.32px] lg:leading-4 lg:min-h-[auto] lg:min-w-[auto] lg:normal-case lg:font-degular">
              Contact Us
            </a>
          </span>
        </div>
      </li>
    </ul>
  );
}
