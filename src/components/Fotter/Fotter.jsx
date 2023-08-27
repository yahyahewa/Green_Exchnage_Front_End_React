import { Link } from "react-router-dom";
import { Navlink } from "../../assets/Data";

const Fotter = () => {
  return (
    <footer className=" bg-opacity-80 text-gray-900    ">
      <div className="lg:mx-36 px-2 md:py-8">
        <div className="sm:flex sm:items-center sm:justify-between">
          <span className="text-md font-bold">
            <span className="text-jade-600 text-2xl">G</span>reen
            <span className="text-jade-600 text-2xl">E</span>xchange
          </span>

          <ul className="flex flex-wrap mt-2 items-center  text-md font-medium sm:mb-0 ">
            {Navlink.map((value) => {
              return (
                <li key={value.id}>
                  <Link
                    to={value.Link}
                    className="mr-4 hover:underline focus:underline md:mr-6 "
                  >
                    {value.Title}
                  </Link>
                </li>
              );
            })}
          </ul>
        </div>
        <hr className="my-4   border-gray-800 py-2 sm:mx-auto lg:my-2" />
        <span className=" text-base text-center flex flex-row justify-center my-4">
          © 2023
          <Link to="/" className="hover:underline  ">
            Green Exchange™
          </Link>
          . All Rights Reserved.
        </span>
      </div>
    </footer>
  );
};

export default Fotter;
