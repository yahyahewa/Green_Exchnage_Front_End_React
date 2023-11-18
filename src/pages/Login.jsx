import login from '../assets/images/login.svg';
import LoginForm from '../components/login/LoginForm';

function Login() {
  window.scrollTo({ top: 0 });
  return (
    <>
      <div className="px-6 sm:px-12 lg:mx-26 md:px-20 pt-10 grid  md:grid-cols-2 items-start gap-20  min-h-screen">
        <div className=" justify-center hidden sm:flex">
          <img
            src={login}
            className="w-full h-72 sm:h-96 md:h-[500px] object-contain md:object-cover"
          />
        </div>
        <LoginForm />
      </div>
    </>
  );
}

export default Login;
