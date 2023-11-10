import { useState } from "react";
import { Link } from "react-router-dom";
import { BsArrowRight } from "react-icons/bs";
import { CiMenuBurger, CiMenuFries } from "react-icons/ci";

import NavLink from "../NavLink/NavLink";
import MenuOverlay from "../MenuOverlay/MenuOverlay";

const Header = () => {
  const NavLinks = [
    {
      title: "Accueil",
      to: "/",
    },
    {
      title: "Programme",
      to: "/program",
    },
    {
      title: "RSVP",
      to: "/booking",
    },
  ];
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <header>
      <nav
        className={`fixed top-0 left-0 right-0 md:relative md:bg-transparent bg-opacity-70 backdrop-blur-sm z-10 transition-all delay-0 duration-300 ${
          isMenuOpen && "h-screen"
        }`}
      >
        <div
          className="container w-11/12 md:w-4/6 mx-auto flex flex-wrap items-center justify-between py-4 md:py-6"
          id="home"
        >
          <Link to="/" className="text-3xl uppercase font-semibold z-50">
            AB
          </Link>
          <ul className="hidden md:flex gap-20">
            {NavLinks.map((link, index) => (
              <li key={index}>
                <NavLink key={index} href={link.to} title={link.title} />
              </li>
            ))}
          </ul>

          <div className="flex gap-4 md:gap-0 items-center">
            <p>בס׳׳ד</p>
            <div className="flex flex-col md:hidden gap-10 z-50">
              {!isMenuOpen ? (
                <button onClick={() => setIsMenuOpen(true)}>
                  <span className="text-2xl">
                    <CiMenuBurger />
                  </span>
                </button>
              ) : (
                <button onClick={() => setIsMenuOpen(false)}>
                  <span className="text-2xl">
                    <CiMenuFries />
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>
        <MenuOverlay
          links={NavLinks}
          setIsMenuOpen={setIsMenuOpen}
          isMenuOpen={isMenuOpen}
        />
      </nav>
    </header>
  );
};
export default Header;
