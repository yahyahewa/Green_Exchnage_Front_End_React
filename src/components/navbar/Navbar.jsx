import { Link } from 'react-router-dom';
import NavItem from './NavItem';
import { LINKS } from '../../assets/Data';
import Logo from './Logo';
import DropDownMenu from './DropDownMenu';
import Account from './Account';
import LanguageSelector from './LanguageSelector';

// eslint-disable-next-line react/prop-types
const NavbarComponent = ({ toggleDropDown }) => {
  return (
    <nav className="px-6 sm:px-12  lg:mx-26 md:px-20 navbar navbar-expand-lg navbar-light bg-light flex justify-between items-center  py-4  ">
      <Link to="/" className="font-bold  text-md text-neutral-600">
        <Logo />
      </Link>

      <div className="md:hidden flex " onClick={toggleDropDown}>
        <Account />
        <DropDownMenu />
      </div>

      <div className=" hidden md:block">
        <div className="flex items-center justify-start sm:gap-8 md:gap-10 ">
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
          <LanguageSelector />
          <Account />
        </div>
      </div>
    </nav>
  );
};

export default NavbarComponent;
