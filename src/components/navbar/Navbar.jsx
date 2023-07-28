import { useState } from "react";
import { Navlink } from "../../assets/Data";
import { Link } from "react-router-dom";
const Navbar = () => {
  localStorage.clear("isUser", "yahya");
  const [showMenu, setShowMenu] = useState(false);

  const handleToggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };

  return (
    <nav className="flex justify-between items-center py-1 px-2 relative">
      <Link to="/" className="flex sm:flex-row items-start justify-center">
        <span className="self-center text-jade-600 text-3xl font-bold">G</span>
        <span className="text-black text-2xl pt-1 hidden sm:block">reen</span>
        <span className="text-jade-600 text-3xl font-bold">E</span>
        <span className="text-black text-2xl pt-1 hidden sm:block">
          xchange
        </span>
      </Link>
      {/* ------ humbergr menu , get start image account  ----------------- */}
      <article
        className={`flex flex-col absolute top-0 md:top-auto md:relative md:left-auto
         md:flex-row md:justify-between items-center p-1 gap-3 bg-jade-600
          md:bg-white h-[100vh] md:h-auto w-1/2 md:w-auto text-gray-100 md:text-gray-600 transition-all
          ${showMenu ? "-left-0" : "-left-[100%]"}`}
      >
        {Navlink.map((value) => {
          return (
            <Link
              onClick={() => {
                setShowMenu(false);
              }}
              to={value.Link}
              key={value.id}
              className="text-lg font-bold"
            >
              {value.Title}
            </Link>
          );
        })}
        <select className="outline-none font-bold font-kurdish pt-1">
          <option value="k">کوردی</option>
          <option value="a">عربي</option>
          <option value="e">English</option>
        </select>
      </article>
      {/* ------ humbergr menu , get start image account----------------- */}
      <article className="box-border flex justify-center items-center gap-2 pt-1">
        <Link
          to="/"
          className={`bg-jade-600 text-gray-100 p-2 py-[6px] rounded font-bold`}
        >
          {localStorage.getItem("isUser") ? "New Donate +" : "Get Start"}
        </Link>
        {localStorage.getItem("isUser") && (
          <img
            src="https://img.freepik.com/free-icon/user_318-804790.jpg"
            className="w-8 rounded-full"
          />
        )}
        <article
          className={`md:hidden flex flex-col justify-evenly gap-1`}
          onClick={handleToggleMenu}
        >
          <div className="w-[30px] h-1 bg-slate-500 rounded"></div>
          <div className="w-[30px] h-1 bg-slate-500 rounded"></div>
          <div className="w-[30px] h-1 bg-slate-500 rounded"></div>
        </article>
      </article>
    </nav>
  );
};

export default Navbar;
