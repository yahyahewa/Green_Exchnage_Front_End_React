import { Link } from "react-router-dom";
import { LINKS } from "../../assets/Data";
import Logo from "../navbar/Logo";
const Fotter = () => {
  return (
    <footer className=" bg-opacity-80 text-gray-900    ">
      <div className="lg:mx-36 px-2 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <Link to="/" className="font-bold  text-md text-neutral-600">
            <Logo />
          </Link>

          <div className="flex flex-wrap mt-2 items-center  text-md font-medium sm:mb-0 ">
            {LINKS.map((value) => {
              return (
                <Link
                  to={value.title}
                  className="mr-4 hover:underline md:mr-6 "
                >
                  {value.title}
                </Link>
              );
            })}
          </div>
        </div>
        <hr className="my-6   border-gray-800 py-2 sm:mx-auto lg:my-4" />
        <span className=" text-base sm:text-center flex flex-row justify-center my-4">
          © 2023
          <Link to="/" className="hover:underline pr-2  ">
            Green Exchange™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Fotter;
