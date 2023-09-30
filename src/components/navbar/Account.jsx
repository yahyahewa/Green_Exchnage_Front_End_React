import { Link } from 'react-router-dom';
import { useSelector } from 'react-redux';
function Account() {
  const user = useSelector((state) => state.user.user);

  return user || localStorage.getItem('userData') !== null ? (
    <Link to="/profile">
      <img
        src={`https://img.freepik.com/free-icon/user_318-804790.jpg?w=2000`}
        className="w-8 h-8 rounded-[50%] border mr-3"
      />
    </Link>
  ) : (
    <Link
      to={'/login'}
      className="btn btn-primary py-1 text-base px-2 font-bold rounded-md btn-md bg-jade-700
             text-neutral-100 border-0 mr-3 hover:bg-jade-600 transition-all"
    >
      Login
    </Link>
  );
}

export default Account;
