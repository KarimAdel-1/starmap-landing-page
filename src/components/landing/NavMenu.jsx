import NavList from './NavList';

export default function NavMenu({ isOpen }) {
  return (
    <nav
      role="navigation"
      className={`absolute bg-stone-50 box-border caret-transparent basis-auto grow-0 min-h-0 min-w-0 w-full border-stone-800 overflow-hidden rounded-2xl border-[6px] border-solid left-0 top-[70px] transition-opacity md:static md:bg-transparent md:basis-[0%] md:grow md:min-h-[auto] md:min-w-[auto] md:opacity-100 md:w-auto md:border-stone-50 md:rounded-none md:border-0 md:border-none md:left-auto md:top-auto ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
    >
      <NavList />
    </nav>
  );
}
