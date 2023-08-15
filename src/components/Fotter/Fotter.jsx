

const Fotter = () => {
  return (
   
      <footer className="bg-green bg-opacity-80 text-white  shadow dark:bg-gray-900 ">
        <div className="lg:mx-36  md:py-8">
          <div className="sm:flex sm:items-center sm:justify-between">
          
              <span className="text-base font-bold">
                <span className="text-green-600 text-2xl">G</span>reen{" "}
                <span className="text-green-600 text-2xl">E</span>xchange
              </span>
       
            <ul className="flex flex-wrap items-center mb-6 text-sm font-medium sm:mb-0 ">
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  Home
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6">
                  Items{" "}
                </a>
              </li>
              <li>
                <a href="#" className="mr-4 hover:underline md:mr-6 ">
                  About
                </a>
              </li>
              <li>
                <a href="#" className="hover:underline">
                  F&Q
                </a>
              </li>
            </ul>
          </div>
          <hr className="my-6 border-gray-200 sm:mx-auto dark:border-gray-700 lg:my-8" />
          <span className="block text-sm sm:text-center ">
            © 2023{" "}
            <a href="https://flowbite.com/" className="hover:underline">
              Green Exchange™
            </a>
            . All Rights Reserved.
          </span>
        </div>
      </footer>

  );
};

export default Fotter;
