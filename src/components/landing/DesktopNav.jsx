import NavButton from './NavButton';

export default function DesktopNav() {
  return (
    <div className="items-center box-border caret-transparent flex basis-auto grow-0 justify-normal order-2 ml-auto md:basis-[0%] md:grow md:justify-end">
      <NavButton
        href="/create"
        text="Customize Now"
        caretImageSrc="https://c.animaapp.com/mhw34jjqRgJaRr/assets/image-1.svg"
        caretImageAlt="caret-off-white"
        buttonVariant="text-stone-50 flex md:text-stone-800 md:bg-stone-50 md:border-stone-800 md:border-0 md:border-none"
        textVariant="text-stone-50 md:text-stone-800"
        caretContainerVariant="bg-stone-800 hidden md:flex md:bg-stone-50 md:min-h-[auto] md:min-w-[auto]"
        caretSpanVariant="text-stone-50 inline md:block md:text-stone-800 md:min-h-[auto] md:min-w-[auto]"
        caretImageVariant="text-white md:text-stone-800"
      />
    </div>
  );
}
