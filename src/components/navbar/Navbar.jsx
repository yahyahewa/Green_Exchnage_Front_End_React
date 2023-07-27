import { useState } from "react";
import Menu from "../../assets/Icons/hamburger.png";
import { Navlink } from "../../assets/Data";
import { NavLink, Link } from "react-router-dom";
const Navbar = () => {
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <nav className="bg-white fixed w-full z-20 top-0 left-0 font-sans">
      <div className="max-w-screen-full flex items-center justify-between p-4">
        <a href="#" className="flex items-center">
          <span className="self-center text-jade-600 text-3xl font-bold">
            G
          </span>
          <span className="text-black text-2xl pt-1">reen</span>
          <span className="text-jade-600 text-3xl font-bold">E</span>
          <span className="text-black text-2xl pt-1">xchange</span>
        </a>
        <div className="flex md:order-2 ">
          <NavLink
            to="/signup"
            className="text-white bg-jade-600 hover:bg-jade-700 focus:ring-2 focus:outline-none focus:ring-jade-300 font-bold rounded md:text-xl md:px-4 md:py-3 sm:px-1 sm:mr-4 text-center mr-0 sm:text-sm sm:p-0"
          >
            Get started
          </NavLink>
          <button
            onClick={handleToggleMenu}
            type="button"
            className="inline-flex items-center p-0 w-8 h-8 justify-center text-sm rounded md:hidden hover:bg-jade-100  "
          >
            <img className="" src={Menu} alt="Menu" />
          </button>
        </div>
        <div
          className={`${
            showMenu ? "block" : "hidden"
          } items-center justify-between  sm:flex   bg-gray-100 `}
        >
          <ul className="tracking-wide text-xl font-bold flex flex-col  md:p-0 mt-0 md:flex-row md:space-x-16 md:mt-0 md:border-0 md:bg-white">
            {Navlink.map((link) => {
              const { Title, Link, Style, id } = link;
              return (
                <li key={id}>
                  <a href={Link} className={Style}>
                    {Title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
