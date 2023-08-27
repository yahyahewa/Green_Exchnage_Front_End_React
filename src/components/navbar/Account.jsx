import React from "react";
import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
function Account() {
  const [isUser, setIsUser] = useState(false);
  useEffect(() => {
    if (
      localStorage.getItem("userData") != "undefined" &&
      JSON.parse(localStorage.getItem("userData"))
    ) {
      setIsUser(true);
    }
  }, []);
  return isUser ? (
    <Link to="/profile">
      <img
        src={`https://img.freepik.com/free-icon/user_318-804790.jpg?w=2000`}
        className="w-8 h-8 rounded-[50%] border mr-3"
      />
    </Link>
  ) : (
    <Link
      to={"/login"}
      className="btn btn-primary py-1 text-base px-2 font-bold rounded-md btn-md bg-green
             text-neutral-100 border-0 mr-3 hover:bg-jade-600 transition-all"
    >
      Login
    </Link>
  );
}

export default Account;
