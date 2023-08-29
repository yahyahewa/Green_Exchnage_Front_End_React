import React, { useState } from "react";
import { useGetUserProductsQuery } from "../../app/api/profile";
import { FaEdit } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
const Setting = () => {
  // Retrieve user data from local storage
  const userData = JSON.parse(localStorage.getItem("userData"));

  // Initialize state with user data
  const [fullname, setFullname] = useState(userData?.data?.fullname || "");
  const [phone, setPhone] = useState(userData?.data?.phone || "");
  const [password, setPassword] = useState(userData?.data?.password); // Never store passwords in state
  const [email, setEmail] = useState(userData?.data?.email || "");

  const [image, setImage] = useState(
    userData?.data?.image ||
      "https://virl.bc.ca/wp-content/uploads/2019/01/AccountIcon2.png"
  );

  const [selectedImage, setSelectedImage] = useState(null); // Define selectedImage state
  const [isInputDisabled, setInputDisabled] = useState(true);

  const handleEnableInput = () => {
    if (isInputDisabled == false) {
      setInputDisabled(true);
    } else setInputDisabled(false);
  };
  const handleInputChange = (event) => {
    const { name, value } = event.target;

    // Update the corresponding state variable
    switch (name) {
      case "fullname":
        setFullname(value);
        break;
      case "phone":
        setPhone(value);
        break;
      case "image":
        setImage(value); // Note: This line sets 'image' state to the value, which should be handled differently for images
        break;
      case "email":
        setEmail(value);
        break;
      case "password":
        setPassword(value);
        break;
      default:
        break;
    }
  };

  const handleImageChange = (event) => {
    const file = event.target.files[0];
    setSelectedImage(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  // Function to handle the form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    // Here, you can send the updated data to your API or update local storage
    // Example: Update local storage
    const updatedUserData = {
      ...userData,
      data: { ...userData.data, fullname, phone, image, email, password },
    };
    localStorage.setItem("userData", JSON.stringify(updatedUserData));

    // Provide user feedback for successful submission (you can add more)
    alert("Profile updated successfully!");
    setInputDisabled(true);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full  text-black flex flex-col justify-center items-center disabled:bg-gray-700 rounded    "
    >
      <div className=" flex md:w-4/12  flex-col justify-center items-center ">
        <div className=" flex justify-between w-full   ">
          <h2 className="text-xl capitalize font-semibold leading-7 my-8 text-center  text-gray-900">
            Profile
          </h2>
          <button
            type="button"
            onClick={handleEnableInput}
            className="text-2xl capitalize  my-8 text-center  text-gray-900   border-jade-600 focus:text-jade-600"
          >
            <AiFillEdit />
          </button>
        </div>
        <div className=" pb-12 ">
          <div className=" flex justify-center items-center flex-col gap-2">
            <img
              className=" rounded-full  w-28 h-28 object-cover shadow-md"
              src={image}
              alt="imageprofile"
            />

            <div className="flex items-center justify-center ">
              <h1 className="font-bold ">{fullname}</h1>
            </div>
          </div>
        </div>
        <div disabled className="col-span-full w-full pb-6 ">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Profile Image
          </label>
          <div className="mt-2 ">
            <input
              disabled={isInputDisabled}
              type="file"
              name="image"
              accept="image/*"
              onChange={handleImageChange}
              className=" disabled:bg-gray-200 disabled:text-gray-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
            />

            <div className="  col-span-full w-full py-6 ">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Full Name
              </label>
              <div className="mt-2">
                <input
                  disabled={isInputDisabled}
                  type="text"
                  name="fullname"
                  placeholder="name"
                  value={fullname}
                  onChange={handleInputChange}
                  className="   disabled:bg-gray-200 disabled:text-gray-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
                />
              </div>
            </div>

            <div className="col-span-full w-full pb-6">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Phone Number
              </label>
              <div className="mt-2">
                <input
                  disabled={isInputDisabled}
                  type="text"
                  name="phone"
                  value={phone}
                  placeholder="07xxxxxxxxx"
                  onChange={handleInputChange}
                  className="   disabled:bg-gray-200 disabled:text-gray-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
                />
              </div>
            </div>

            <div className="col-span-full w-full pb-6">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Email
              </label>
              <div className="mt-2">
                <input
                  disabled={isInputDisabled}
                  type="email"
                  name="email"
                  placeholder="example@example.com"
                  value={email}
                  onChange={handleInputChange}
                  className="   disabled:bg-gray-200 disabled:text-gray-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
                />
              </div>
            </div>
            <div className="col-span-full w-full pb-6">
              <label className="block text-sm font-medium leading-6 text-gray-900">
                Password
              </label>
              <div className="mt-2">
                <input
                  disabled={isInputDisabled}
                  type="password"
                  name="password"
                  placeholder="***********"
                  value={password}
                  onChange={handleInputChange}
                  className="disabled:bg-gray-200 disabled:text-gray-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
                />
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="flex flex-1 pb-10    gap-x-10">
        <button
          disabled={isInputDisabled}
          type="reset"
          className="rounded-sm disabled:bg-gray-400 bg-gray-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        >
          Cancel
        </button>
        <button
          disabled={isInputDisabled}
          type="submit"
          className="rounded-sm disabled:bg-slate-400 bg-jade-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-jade-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade-600"
        >
          Save
        </button>
      </div>
    </form>
  );
};

export default Setting;
