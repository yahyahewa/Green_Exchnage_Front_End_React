import { FiMenu } from "react-icons/fi";

const Humberger = ({ openDrawer }) => {
  return (
    <div
      onClick={openDrawer}
      className="  md:hidden cursor-pointer text-xl md:text-xl text-gray-500"
    >
      <FiMenu className="fill-current" />
    </div>
  );
};

export default Humberger;
