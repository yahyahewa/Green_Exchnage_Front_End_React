import { Link } from "react-router-dom";
export default function Logo() {
  return (
    <Link className="text-xl" to="/">
      <span className="text-xl font-bold">
        <span className="text-green text-3xl">G</span>
        <span className="hidden sm:inline-block">reen</span>
        <span className="text-gray-700 sm:text-green text-3xl">E</span>
        <span className="hidden sm:inline-block">xchange</span>
      </span>
    </Link>
  );
}
