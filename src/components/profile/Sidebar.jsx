import { useState } from "react";
import AddProduct from "./AddProduct";
import MyProducts from "./MyProducts";
import Setting from "./Setting";
import { Link } from "react-router-dom";
function Sidebar({ setComponent }) {
  const [btnBg, setBtnBg] = useState(1);
  return (
    <aside
      className={`w-8 sm:w-36 flex flex-col justify-between items-start
        font-kurdish rounded-md overflow-hidden h-[60%]`}
    >
      <section
        className={`flex flex-col justify-center items-center gap-y-[10px] py-2 w-full`}
      >
        <article
          className={`flex justify-center sm:justify-start items-center gap-x-2 p-1 
          rounded-md cursor-default w-full mb-4 font-bold text-lg text-gray-700`}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-7 h-7 scale-125 sm:scale-110"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M10.5 6h9.75M10.5 6a1.5 1.5 0 11-3 0m3 0a1.5 1.5 0 10-3 0M3.75 6H7.5m3 12h9.75m-9.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-3.75 0H7.5m9-6h3.75m-3.75 0a1.5 1.5 0 01-3 0m3 0a1.5 1.5 0 00-3 0m-9.75 0h9.75"
            />
          </svg>
          <span className="hidden sm:block pt-[2px]">Menu</span>
        </article>
        {/* ------------------- New Donate ------------------- */}
        <article
          className={`flex justify-center text-gray-600 font-bold sm:justify-start items-center gap-x-2 p-1 
          rounded-md cursor-pointer w-full ${
            btnBg == 1 && `bg-jade-200 text-jade-700 transition-all`
          }`}
          onClick={() => {
            setBtnBg(1);
            setComponent(<AddProduct />);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 scale-110 sm:scale-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
            />
          </svg>
          <span className="hidden sm:block pt-1">New Donate</span>
        </article>
        {/* ------------------- My Donate ------------------- */}
        <article
          className={`flex justify-center text-gray-600 font-bold sm:justify-start items-center gap-x-2 p-1 
          rounded-md cursor-pointer w-full ${
            btnBg == 2 && `bg-jade-200 text-jade-700 transition-all`
          }`}
          onClick={() => {
            setBtnBg(2);
            setComponent(<MyProducts />);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 scale-110 sm:scale-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M20.25 7.5l-.625 10.632a2.25 2.25 0 01-2.247 2.118H6.622a2.25 2.25 0 01-2.247-2.118L3.75 7.5M10 11.25h4M3.375 7.5h17.25c.621 0 1.125-.504 1.125-1.125v-1.5c0-.621-.504-1.125-1.125-1.125H3.375c-.621 0-1.125.504-1.125 1.125v1.5c0 .621.504 1.125 1.125 1.125z"
            />
          </svg>

          <span className="hidden sm:block pt-1">My Donate</span>
        </article>
        {/* ------------------- My Donate ------------------- */}
        <article
          className={`flex justify-center text-gray-600 font-bold sm:justify-start items-center gap-x-2 p-1 
          rounded-md cursor-pointer w-full ${
            btnBg == 3 && `bg-jade-200 text-jade-700 transition-all`
          }`}
          onClick={() => {
            setBtnBg(3);
            setComponent(<Setting />);
          }}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-6 h-6 scale-110 sm:scale-100"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M9.594 3.94c.09-.542.56-.94 1.11-.94h2.593c.55 0 1.02.398 1.11.94l.213 1.281c.063.374.313.686.645.87.074.04.147.083.22.127.324.196.72.257 1.075.124l1.217-.456a1.125 1.125 0 011.37.49l1.296 2.247a1.125 1.125 0 01-.26 1.431l-1.003.827c-.293.24-.438.613-.431.992a6.759 6.759 0 010 .255c-.007.378.138.75.43.99l1.005.828c.424.35.534.954.26 1.43l-1.298 2.247a1.125 1.125 0 01-1.369.491l-1.217-.456c-.355-.133-.75-.072-1.076.124a6.57 6.57 0 01-.22.128c-.331.183-.581.495-.644.869l-.213 1.28c-.09.543-.56.941-1.11.941h-2.594c-.55 0-1.02-.398-1.11-.94l-.213-1.281c-.062-.374-.312-.686-.644-.87a6.52 6.52 0 01-.22-.127c-.325-.196-.72-.257-1.076-.124l-1.217.456a1.125 1.125 0 01-1.369-.49l-1.297-2.247a1.125 1.125 0 01.26-1.431l1.004-.827c.292-.24.437-.613.43-.992a6.932 6.932 0 010-.255c.007-.378-.138-.75-.43-.99l-1.004-.828a1.125 1.125 0 01-.26-1.43l1.297-2.247a1.125 1.125 0 011.37-.491l1.216.456c.356.133.751.072 1.076-.124.072-.044.146-.087.22-.128.332-.183.582-.495.644-.869l.214-1.281z"
            />
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
            />
          </svg>

          <span className="hidden sm:block pt-1">Setting</span>
        </article>
      </section>
      {/* ------------------- Logout ------------------- */}
      <Link
        to={"/login"}
        className={`flex justify-center sm:justify-start items-center gap-x-2 p-1 
        rounded-md cursor-pointer w-full px-2 py-1 my-1 font-bold text-gray-100 text-sm 
        bg-jade-600 `}
        onClick={() => {
          localStorage.removeItem("userData");
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth={1.5}
          stroke="currentColor"
          className="w-6 h-6"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M15.75 9V5.25A2.25 2.25 0 0013.5 3h-6a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 007.5 21h6a2.25 2.25 0 002.25-2.25V15m3 0l3-3m0 0l-3-3m3 3H9"
          />
        </svg>

        <span className="hidden sm:block pt-1">Logout</span>
      </Link>
    </aside>
  );
}

export default Sidebar;