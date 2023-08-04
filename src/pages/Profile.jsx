import { useState } from "react";
import Navbar from "../components/navbar/Navbar";
import { Link } from "react-router-dom";
import Sidebar from "../components/profile/Sidebar";
import AddProduct from "../components/profile/AddProduct";
function Profile() {
  const [components, setComponents] = useState(<AddProduct />);
  return (
    <>
      <Navbar />
      <main
        className={`w-full flex justify-start items-start p-2 mt-10 h-screen max-w-[2000px] dark:text-white`}
      >
        <Sidebar component={components} setComponent={setComponents} />
        {components}
      </main>
    </>
  );
}

export default Profile;
