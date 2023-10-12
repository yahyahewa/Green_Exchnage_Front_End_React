import signup from '../assets/images/signup.svg';
import SignUpForm from '../components/signup/SignUpForm';
const Singup = () => {
  return (
    <>
      <div className="px-6 sm:px-12 lg:mx-26 md:px-20 pt-10 grid  md:grid-cols-2 items-start gap-20 min-h-screen">
        <div className="hidden sm:flex justify-center ">
          <img
            src={signup}
            className="w-full h-72 sm:h-96 md:h-[500px] object-contain md:object-cover 2xl:object-contain mt-10"
          />
        </div>

        <SignUpForm />
      </div>
    </>
  );
};

export default Singup;
