import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
import { useEffect, useState } from 'react';

function Account() {
  const user = useSelector((state) => state.user.user);

  const userData = JSON.parse(localStorage.getItem('userData'));
  const [forceRender, setForceRender] = useState(false);

  const [imageProfile, setImageProfile] = useState({
    image: userData?.data?.image,
  });

  useEffect(() => {
    setImageProfile({
      image: userData?.data?.image,
    });
    setForceRender((prevState) => !prevState);
    return;
  }, [userData?.data?.image]);

  return user || userData ? (
    <Link to="/profile">
      <img
        key={forceRender}
        alt="profile"
        src={`${import.meta.env.VITE_BACK_END}uploads/users/${
          userData?.data?.image
        }`}
        className="w-8 h-8  bg rounded-[50%] border mr-3"
      />
    </Link>
  ) : (
    <Link
      to={'/login'}
      className="py-1 md:py-2 md:px-8 text-base px-2 font-bold rounded-md btn-md bg-jade-700
             text-neutral-100 border-0 mr-3 hover:bg-jade-600 transition-all"
    >
      Login
    </Link>
  );
}

export default Account;
