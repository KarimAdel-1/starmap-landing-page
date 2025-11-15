import NavList from './NavList';

export default function NavMenu({ isOpen }) {
  return (
    <nav
      role="navigation"
      className={`absolute bg-stone-50 box-border caret-transparent basis-auto grow-0 min-h-0 min-w-0 w-full border-stone-800 overflow-hidden rounded-2xl border-[6px] border-solid left-0 top-[70px] transition-opacity lg:static lg:bg-transparent lg:basis-[0%] lg:grow lg:min-h-[auto] lg:min-w-[auto] lg:opacity-100 lg:w-auto lg:border-stone-50 lg:rounded-none lg:border-0 lg:border-none lg:left-auto lg:top-auto ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none lg:opacity-100 lg:pointer-events-auto'}`}
    >
      <NavList />
    </nav>
  );
}
