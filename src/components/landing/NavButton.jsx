import { IoChevronForward } from 'react-icons/io5';

export default function NavButton(props) {
  return (
    <button
      className={`text-[13.3333px] items-center bg-transparent caret-transparent leading-[normal] text-center border border-stone-50 px-4 py-3 rounded-lg border-solid font-arial ${props.buttonVariant}`}
    >
      <div className={`box-border caret-transparent ${props.textVariant}`}>
        <div
          className={`text-sm font-bold items-center box-border caret-transparent flex justify-center tracking-[-0.28px] leading-[14px] text-nowrap font-degular ${props.textVariant}`}
        >
          <a
            href={props.href}
            className={`box-border caret-transparent block text-nowrap ${props.textVariant}`}
          >
            {props.text}
          </a>
          <div
            className={`items-center aspect-square bg-stone-50 box-border caret-transparent flex justify-center min-h-0 min-w-0 text-nowrap w-[18px] ml-2 rounded-md md:min-h-[auto] md:min-w-[auto] ${props.caretContainerVariant}`}
          >
            <IoChevronForward className={`text-stone-800 ${props.caretImageVariant}`} />
          </div>
        </div>
      </div>
    </button>
  );
}
