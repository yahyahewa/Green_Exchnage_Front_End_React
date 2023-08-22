import { useState, useEffect } from "react";
import { Navlink } from "../../assets/Data";
import { Link, NavLink } from "react-router-dom";
// import { useSignupMutation } from "../../app/api/auth";
const Navbar = () => {
  // const [data] = useSignupMutation();
  const [showMenu, setShowMenu] = useState(false);
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    if (
      localStorage.getItem("userData") != "undefined" &&
      JSON.parse(localStorage.getItem("userData"))
    ) {
      setIsUser(true);
    }
  }, []);
  const handleToggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };
  return (
    <nav className="lg:mx-36 flex items-center relative py-4">
      <Link to="/" className="flex   ">
        <span className=" text-green text-3xl font-bold">G</span>
        <span className="text-black text-2xl pt-1 hidden sm:block ">reen</span>
        <span className="text-green text-3xl font-bold">E</span>
        <span className="text-black text-2xl pt-1 hidden sm:block">
          xchange
        </span>
      </Link>
      {/* ------ humbergr menu , get start image account  ----------------- */}
      <article
        className={`flex flex-col absolute   top-0 lg:top-1 lg:relative lg:left-auto   bg-white text-gray-900
         lg:flex-row lg:justify-between py-2  items-center px-4 gap-1 lg:gap-4 lg:pl-4  z-10
          lg:bg-white  h-[100vh] lg:h-auto w-1/2 lg:w-auto  lg:text-gray-900 transition-all
          ${showMenu ? "-left-0" : "-left-[100%]"}`}
      >
        {Navlink.map((value) => {
          return (
            <>
              <NavLink
                onClick={() => {
                  setShowMenu(false);
                }}
                to={value.Link}
                key={value.id}
                className={({ isActive }) =>
                  (isActive
                    ? "text-green focus:outline-none focus:text-green"
                    : "text-gray-800") +
                  "px-3 py-2 text-xl font-semibold hover:text-green "
                }
              >
                {value.Title}
              </NavLink>
            </>
          );
        })}
        {/* TODO: add language by icon  */}
        {/* <select className="outline-none font-bold font-kurdish pt-1 bg-jade-600 text-gray-100 lg:bg-white lg:text-gray-800">
          <option value="k">کوردی</option>
          <option value="a">عربي</option>
          <option value="e">English</option>
        </select> */}
      </article>
      {/* ------ humbergr menu , get start image account----------------- */}
      <article className="box-border flex flex-row w-full  justify-end  items-center gap-2 pt-1">
        {/* <Link
          to="/login"
          className={`bg-green text-white px-6 p-2 py-[6px] rounded font-bold`}
        >
          Login
        </Link> */}
        {isUser ? (
          <Link to="/profile">
            <img
              src={
                JSON.parse(localStorage.getItem("userData"))?.data?.image
                  ? `${import.meta.env.VITE_BACK_END}uploads/users/${
                      JSON.parse(localStorage.getItem("userData"))?.data?.image
                    }`
                  : `${
                      import.meta.env.VITE_BACK_END
                    }uploads/users/defaultuser.png`
              }
              className="w-8 rounded-full"
            />
          </Link>
        ) : (
          <Link
            to="/login"
            className={`bg-green text-white px-6 p-2 py-[6px] rounded font-bold hover:bg-opacity-70 duration-500 hover:duration-500`}
          >
            Login
          </Link>
        )}
        <article
          className={`lg:hidden flex flex-col justify-evenly gap-1`}
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
