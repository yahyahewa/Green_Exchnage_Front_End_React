import { NavLink } from 'react-router-dom';

const NavItem = ({ href, children, toggleDropDown }) => {
  return (
    <NavLink
      className={`text-neutral-500 hover:scale-105 
      transition-all text-md font-bold sm:text-base`}
      to={href}
      onClick={toggleDropDown}
    >
      {children}
    </NavLink>
  );
};

export default NavItem;
