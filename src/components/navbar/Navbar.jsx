import Menu from "../../assets/Icons/hamburger.png";
import { Navlink } from "../../assets/Data";
const Navbar = () => {
  return (
    <nav className="bg-white  fixed w-full z-20 top-0 left-0 font-sans px-8">
      <div className="max-w-screen-full   flex  items-center justify-between  p-4">
        <a href="#" className="flex items-center">
          <span className="self-center text-jade-600 text-3xl font-bold">
            G
          </span>
          <span className="text-black text-2xl pt-1">reen</span>
          <span className="text-jade-600 text-3xl font-bold">E</span>
          <span className="text-black text-2xl  pt-1">xchange</span>
        </a>
        <div className="flex md:order-2">
          <button
            type="button"
            className="text-white bg-jade-600   hover:bg-jade-800 focus:ring-4 focus:outline-none focus:ring-jade-300 font-bold rounded text-md px-4 py-2 text-center mr-3 md:mr-0   "
          >
            Get started
          </button>
          <button
            data-collapse-toggle="navbar-sticky"
            type="button"
            className="inline-flex items-center p-2 w-10 h-10 justify-center text-sm  rounded-lg md:hidden hover:bg-jade-100 focus:outline-none focus:ring-2 focus:ring-jade-200   "
          >
            <img src={Menu} alt="" />
          </button>
        </div>
        <div
          className="items-center justify-between active:text-jade-800 hidden w-full md:flex md:w-auto md:order-1"
          id="navbar-sticky"
        >
          <ul className="tracking-wide text-xl  font-bold flex flex-col p-8 md:p-0 mt-0 md:flex-row md:space-x-16 md:mt-0 md:border-0 md:bg-white ">
            {Navlink.map((link) => {
              const { Title, Link, Style, id } = link;
              return (
                <li key={id}>
                  <a href={Link} className={Style}>
                    {Title}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
