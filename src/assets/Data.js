import { NavLink } from "react-router-dom";

export const Navlink = [
  {
    id: 1,
    Title: "Home",
    Style:
      "block px-3 py-2 rounded active:text-jade-200  hover:text-white hover:text-jade-400 focus:outline-none focus:text-white focus:bg-jade-700",
    Link: "/",
  },
  {
    id: 2,
    Title: "Items",
    Style:
      "block px-3 py-2 rounded active:text-jade-200 hover:text-white hover:text-jade-400 focus:outline-none focus:text-white focus:bg-jade-700",
    Link: "/items",
  },
  {
    id: 3,
    Title: "About",
    Style:
      "block px-3 py-2 rounded active:text-jade-200 hover:text-white hover:text-jade-400 focus:outline-none focus:text-white focus:bg-jade-700",
    Link: "/about",
  },
  {
    id: 4,
    Title: "Support",
    Style:
      "block px-3 py-2 rounded hover:text-white active:text-jade-200 hover:text-jade-400 focus:outline-none focus:text-white focus:bg-jade-700",
    Link: "/support",
  },
];
