import { Link } from 'react-router-dom';
import { useState, useEffect } from 'react';

function Account() {
  const [userInfo, setUserInfo] = useState(localStorage.getItem('userData'));
  console.log(userInfo);

  const handleLogOut = () => {
    localStorage.removeItem('userData');
    window.location.reload();
  };

  return !userInfo ? (
    <Link
      to="/login"
      className="btn btn-primary py-2 text-base px-6 font-bold rounded-md btn-md bg-jade-700
               text-neutral-100 border-0 mr-3 hover:bg-jade-600 transition-all"
    >
      Login
    </Link>
  ) : (
    <div className="flex">
      <Link
        to="/"
        onClick={handleLogOut}
        className="btn btn-primary py-2 text-base px-6 font-bold rounded-md btn-md bg-jade-700
         text-neutral-100 border-0 mr-3 hover:bg-jade-600 transition-all"
      >
        LogOut
      </Link>
      <Link to="/profile">
        <img
          src={`https://img.freepik.com/free-icon/user_318-804790.jpg?w=2000`}
          className="w-8 h-8 rounded-[50%] border mr-3"
          alt="User Profile"
        />
      </Link>
    </div>
  );
}

export default Account;
