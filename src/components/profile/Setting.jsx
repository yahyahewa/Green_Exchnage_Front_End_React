import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useUpdatePasswordMutation } from "../../app/api/profile";
import { LiaTimesSolid } from "react-icons/lia";
import { BiSolidShow, BiShowAlt } from "react-icons/bi";
const Setting = () => {
  const [
    updatePassword,
    { data: dataPass, isError: errorPass, isLoading: loadPass },
  ] = useUpdatePasswordMutation();

  // Retrieve user data from local storage
  const userData = JSON.parse(localStorage.getItem("userData"));

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmPassword, setShowConfirmPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  const toggleNewPassword = () => {
    setShowNewPassword(!showNewPassword);
  };

  const toggleConfirmPassword = () => {
    setShowConfirmPassword(!showConfirmPassword);
  };

  // Initialize state with user data
  const [fullname, setFullname] = useState(userData?.data?.fullname);
  const [phone, setPhone] = useState(userData?.data?.phone);
  const [email, setEmail] = useState(userData?.data?.email);

  // password state
  const [currentPassword, setCurrentPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  // image state
  const [image, setImage] = useState(
    userData?.data?.image ||
      "https://virl.bc.ca/wp-content/uploads/2019/01/AccountIcon2.png"
  );

  const [selectedImage, setSelectedImage] = useState(null);
  const [isInputDisabled, setInputDisabled] = useState(true);
  const [showModal, setShowModal] = useState(false);

  const handleEnableInput = () => {
    setInputDisabled(!isInputDisabled);
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
        setImage(value);
        break;
      case "email":
        setEmail(value);
        break;
      case "currentPassword":
        setCurrentPassword(value);
        break;
      case "newPassword":
        setNewPassword(value);
        break;
      case "confirmPassword":
        setConfirmPassword(value);
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

  // Function to handle the form submission for user info
  const handleUserinfoSubmit = (event) => {
    event.preventDefault();

    // Validate fields
    if (!fullname) {
      toast.error("Full Name cannot be blank.", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 3000,
      });
      return;
    }

    if (!phone) {
      toast.error("Phone Number cannot be blank.", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 3000,
      });
      return;
    }

    if (!email) {
      toast.error("Email cannot be blank.", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 3000,
      });
      return;
    }

    // Here, you can send the updated data to your API or update local storage
    // Example: Update local storage
    const updatedUserData = {
      ...userData,
      data: { ...userData.data, fullname, phone, image, email },
    };
    localStorage.setItem("userData", JSON.stringify(updatedUserData));

    // Display a success toast message
    toast.success("Profile updated successfully!", {
      position: toast.POSITION.TOP_LEFT,
      autoClose: 3000,
    });

    setInputDisabled(true);
  };

  // Function to handle the form submission for password
  const handlePasswordSubmit = async (event) => {
    event.preventDefault();

    // Check if newPassword and confirmPassword match
    if (newPassword !== confirmPassword) {
      // Display an error toast message
      toast.error("New password and confirm password do not match!", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 3000,
      });
      return; // Exit the function without further processing
    } else if (!currentPassword) {
      // Display an error toast message
      toast.error("please write the curren password ", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 3000,
      });
      return; // Exit the function without further processing
    }

    try {
      // Here, you can send the updated password to your API
      await updatePassword({ password: newPassword });

      // Display a success toast message
      toast.success("Password updated successfully!", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 3000,
      });
    } catch (error) {
      // Handle the error here
      console.error("Password update failed:", error);
      toast.error("Password update failed!", {
        position: toast.POSITION.TOP_LEFT,
        autoClose: 3000,
      });
    }
  };

  return (
    <>
      <form
        onSubmit={handleUserinfoSubmit}
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

          <ToastContainer />
        </div>
      </form>

      {/* modal form */}
      {showModal ? (
        <>
          <form
            onSubmit={handlePasswordSubmit}
            className="justify-center items-center flex overflow-x-hidden  overflow-y-auto fixed inset-0 z-50 px-2 outline-none focus:outline-none"
          >
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
                    <div className="mt-2 flex justify-between ">
                      <div className="w-full ">
                        <input
                          autocomplete={currentPassword}
                          disabled={isInputDisabled}
                          type={showPassword ? "text" : "password"}
                          name="currentPassword"
                          value={currentPassword}
                          onChange={handleInputChange}
                          className="disabled:bg-gray-200 disabled:text-gray-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
                        />
                      </div>
                      <button
                        type="button"
                        className="text-2xl ml-2"
                        onClick={togglePasswordVisibility}
                      >
                        {showPassword ? <BiShowAlt /> : <BiSolidShow />}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative px-6 py-2 flex-auto">
                  <div className="col-span-full w-3/3 md:w-2/3 ">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      New Password
                    </label>
                    <div className="mt-2 flex justify-between ">
                      <div className="w-full ">
                        <input
                          autocomplete={newPassword}
                          disabled={isInputDisabled}
                          type={showNewPassword ? "text" : "password"}
                          name="newPassword"
                          value={newPassword}
                          onChange={handleInputChange}
                          className="disabled:bg-gray-200 disabled:text-gray-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
                        />
                      </div>
                      <button
                        type="button"
                        className="text-2xl ml-2"
                        onClick={toggleNewPassword}
                      >
                        {showNewPassword ? <BiShowAlt /> : <BiSolidShow />}
                      </button>
                    </div>
                  </div>
                </div>
                <div className="relative px-6 py-2 pb-8 flex-auto">
                  <div className="col-span-full w-3/3 md:w-2/3 ">
                    <label className="block text-sm font-medium leading-6 text-gray-900">
                      Confirm Password
                    </label>
                    <div className="mt-2 flex justify-between ">
                      <div className="w-full ">
                        <input
                          autocomplete={confirmPassword}
                          disabled={isInputDisabled}
                          type={showConfirmPassword ? "text" : "password"}
                          name="confirmPassword"
                          value={confirmPassword}
                          onChange={handleInputChange}
                          className="disabled:bg-gray-200 disabled:text-gray-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
                        />
                      </div>
                      <button
                        type="button"
                        className="text-2xl ml-2"
                        onClick={toggleConfirmPassword}
                      >
                        {showConfirmPassword ? <BiShowAlt /> : <BiSolidShow />}
                      </button>
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
                    type="submit"
                  >
                    Save
                  </button>
                </div>
              </div>
            </div>
          </form>
          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Setting;
