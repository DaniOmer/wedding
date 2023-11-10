import NavLink from "../NavLink/NavLink";

const MenuOverlay = ({ links, setIsMenuOpen, isMenuOpen }) => {
  return (
    <ul
      className={`md:hidden absolute top-0 w-screen flex flex-col py-4 items-center gap-20 pt-32 bg-rose-200 h-screen ${
        isMenuOpen
          ? "transition-all delay-0 duration-1000 left-0 opacity-100"
          : "transition-all delay-0 duration-300 left-[150%] opacity-0"
      }`}
    >
      {links.map((link, index) => (
        <li key={index} onClick={() => setIsMenuOpen(false)}>
          <NavLink href={link.to} title={link.title} />
        </li>
      ))}
    </ul>
  );
};
export default MenuOverlay;
