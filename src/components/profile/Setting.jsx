import React, { useState } from "react";
import { FaEdit } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import {
  useGetUserProductsQuery,
  useUploadsMutation,
  useAddProductMutation,
} from "../../app/api/profile";
import { LiaTimesSolid } from "react-icons/lia";
const Setting = () => {
  // Retrieve user data from local storage
  const userData = JSON.parse(localStorage.getItem("userData"));
  const data1 = useUploadsMutation();
  console.log("🚀 ~ file: Setting.jsx:14 ~ Setting ~ data1:", data1);

  // Initialize state with user data
  const [fullname, setFullname] = useState(userData?.data?.fullname);
  const [phone, setPhone] = useState(userData?.data?.phone);
  const [password, setPassword] = useState(userData?.data?.password); // Never store passwords in state
  const [email, setEmail] = useState(userData?.data?.email);

  const [image, setImage] = useState(
    userData?.data?.image ||
      "https://virl.bc.ca/wp-content/uploads/2019/01/AccountIcon2.png"
  );

  const [selectedImage, setSelectedImage] = useState(null); // Define selectedImage state
  const [isInputDisabled, setInputDisabled] = useState(true);
  const [showModal, setShowModal] = useState(false);
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
      <div className=" flex md:w-[45%] xsm:6/12 sm:6/12 lg:6/12 flex-col justify-center items-center ">
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
          </div>
        </div>
      </div>

      <div className="flex w-auto mb-8 justify-center">
        <button
          disabled={isInputDisabled}
          onClick={() => setShowModal(true)}
          type="button"
          className="rounded-sm disabled:bg-gray-400 mx-4 bg-gray-600 px-2 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
        >
          Change password
        </button>
        <button
          disabled={isInputDisabled}
          type="submit"
          className="rounded-sm disabled:bg-slate-400 bg-jade-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-jade-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade-600"
        >
          Save
        </button>
        {showModal ? (
          <>
            <div className="justify-center items-center flex overflow-x-hidden  overflow-y-auto fixed inset-0 z-50 px-2 outline-none focus:outline-none">
              <div className="relative w-full  mx-auto max-w-3xl">
                {/*content*/}
                <div className="border-0 rounded  relative flex flex-col w-full bg-white border-jade-500 border-b-4 shadow-sm outline-none focus:outline-none">
                  {/*header*/}
                  <div className="flex items-start justify-between p-2  border-b  border-solid border-slate-200 rounded-t">
                    <h3 className="text-xl ml-4 font-semibold">
                      Update Password
                    </h3>
                    <button
                      className="p-1  bg-transparent border-0 text-black  float-right   outline-none focus:outline-none"
                      onClick={() => setShowModal(false)}
                    >
                      <span className="  text-black  h-6 w-6 text-2xl block outline-none focus:outline-none ">
                        <LiaTimesSolid />
                      </span>
                    </button>
                  </div>
                  {/*body*/}
                  <div className="relative p-6 flex-auto">
                    <div className="col-span-full w-3/3 md:w-2/3">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Current
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
                  <div className="relative px-6 py-2 flex-auto">
                    <div className="col-span-full w-3/3 md:w-2/3 ">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        New Password
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
                  <div className="relative px-6 py-2 pb-8 flex-auto">
                    <div className="col-span-full w-3/3 md:w-2/3 ">
                      <label className="block text-sm font-medium leading-6 text-gray-900">
                        Confirm Password
                      </label>
                      <div className="mt-2">
                        <input
                          disabled={isInputDisabled}
                          type="password"
                          name="password"
                          placeholder="***********"
                          value={password}
                          onChange={handleInputChange}
                          className="disabled:bg-gray-200  disabled:text-gray-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
                        />
                      </div>
                    </div>
                  </div>
                  {/*footer*/}
                  <div className="flex mb-2 items-center justify-end pt-4 pr-1 border-t border-solid border-gray-200 rounded-b">
                    <button
                      onClick={() => {
                        setShowModal(false);
                      }}
                      className="text-red-500  background-transparent font-bold uppercase  px-8 py-2   text-sm outline-none focus:outline-none mr-1  ease-linear transition-all duration-150"
                      type="button"
                    >
                      Close
                    </button>
                    <button
                      className="bg-jade-600 text-white  active:bg-emerald-600 font-bold uppercase text-sm px-8 py-2 rounded  hover:shadow-lg outline-none focus:outline-none mr-1  ease-linear transition-all duration-150"
                      type="button"
                      onClick={() => setShowModal(false)}
                    >
                      Save
                    </button>
                  </div>
                </div>
              </div>
            </div>
            <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
          </>
        ) : null}
      </div>
    </form>
  );
};

export default Setting;
