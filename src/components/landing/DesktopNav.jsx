import NavButton from './NavButton';

export default function DesktopNav() {
  return (
    <div className="items-center box-border caret-transparent hidden basis-auto grow-0 justify-normal ml-auto lg:flex lg:basis-[0%] lg:grow lg:justify-end lg:order-3">
      <NavButton
        href="/create"
        text="Customize Now"
        caretImageSrc="https://c.animaapp.com/mhw34jjqRgJaRr/assets/image-1.svg"
        caretImageAlt="caret-off-white"
        buttonVariant="bg-white border-0"
        textVariant="text-stone-800"
        caretContainerVariant="bg-stone-800"
        caretSpanVariant=""
        caretImageVariant="text-white"
      />
    </div>
  );
}
