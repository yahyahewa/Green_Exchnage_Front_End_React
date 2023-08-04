import React, { useState, useEffect } from "react";
import { Navlink } from "../../assets/Data";
import { Link } from "react-router-dom";
import { useSignupMutation } from "../../app/api/auth";
const Navbar = () => {
  const [data] = useSignupMutation();
  const [showMenu, setShowMenu] = useState(false);
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    if (JSON.parse(localStorage.getItem("userData"))) {
      setIsUser(true);
    }
  }, []);
  const handleToggleMenu = () => {
    setShowMenu((prevShowMenu) => !prevShowMenu);
  };
  return (
    <nav className="flex justify-between  items-center py-1 px-2 relative">
      <Link to="/" className="flex sm:flex-row items-start justify-center ">
        <span className="self-center text-jade-600 text-3xl font-bold">G</span>
        <span className="text-black text-2xl pt-1 hidden sm:block">reen</span>
        <span className="text-jade-600 text-3xl font-bold">E</span>
        <span className="text-black text-2xl pt-1 hidden sm:block">
          xchange
        </span>
      </Link>
      {/* ------ humbergr menu , get start image account  ----------------- */}
      <article
        className={`flex flex-col absolute top-0 lg:top-auto lg:relative lg:left-auto 
         lg:flex-row lg:justify-between items-center p-1 gap-3 bg-jade-600 z-10
          lg:bg-white h-[100vh] lg:h-auto w-1/2 lg:w-auto text-gray-100 lg:text-gray-600 transition-all
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
              className={value.Style}
            >
              {value.Title}
            </Link>
          );
        })}
        <select className="outline-none font-bold font-kurdish pt-1 bg-jade-600 text-gray-100 lg:bg-white lg:text-gray-800">
          <option value="k">کوردی</option>
          <option value="a">عربي</option>
          <option value="e">English</option>
        </select>
      </article>
      {/* ------ humbergr menu , get start image account----------------- */}
      <article className="box-border flex  justify-center items-center gap-2 pt-1">
        <Link
          to={isUser ? "/donate" : "/signup"}
          className={`bg-jade-600 text-gray-100 p-2 py-[6px] rounded font-bold`}
        >
          {isUser ? "New Donate +" : "Get Start"}
        </Link>
        {isUser && (
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
