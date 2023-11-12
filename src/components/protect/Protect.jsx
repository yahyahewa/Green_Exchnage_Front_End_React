import { Navigate, Outlet } from "react-router";

function Protect({ type }) {
  if (JSON.parse(localStorage.getItem("userData")) && type == "acc")
    return <Outlet />;
  if (!JSON.parse(localStorage.getItem("userData")) && type == "reg")
    return <Outlet />;
  return <Navigate to="/" replace />;
}

export default Protect;
