import { Link } from "react-router-dom";
import NavItem from "./NavItem";
import { LINKS } from "../../assets/Data";
import Logo from "./Logo";
import DropDownMenu from "./DropDownMenu";
import Account from "./Account";
const NavbarComponent = ({ toggleDropDown }) => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light flex justify-between items-center px-10 py-4 lg:max-w-[85rem] mx-auto ">
      <Link to="/" className="font-bold  text-md text-neutral-600">
        <Logo />
      </Link>

      <div className="md:hidden flex " onClick={toggleDropDown}>
        <Account />
        <DropDownMenu />
      </div>

      <div className=" hidden md:block">
        <div className="flex items-center sm:gap-8 md:gap-10 lg:gap-24 2xl:gap-32">
          <div
            className="flex flex-row justify-around gap-5 md:gap-8 lg:gap-12 font-medium
           text-neutral-700 mt-1"
          >
            {LINKS.map((link, index) => (
              <NavItem key={index} href={link.path}>
                {link.title}
              </NavItem>
            ))}
          </div>
          <Account />
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
