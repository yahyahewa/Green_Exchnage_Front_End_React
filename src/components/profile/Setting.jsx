import React, { useState } from "react";
import { AiFillEdit } from "react-icons/ai";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import {
  useUpdatePasswordMutation,
  useUpdateUserInfoMutation,
} from "../../app/api/profile";
import { LiaTimesSolid } from "react-icons/lia";
import { BiSolidShow, BiShowAlt } from "react-icons/bi";

const Setting = () => {
  const userData = JSON.parse(localStorage.getItem("userData"));
  const [userToken, setUserToken] = useState(userData?.data?.token);
  const [userId, setUserId] = useState(userData.data?._id);

  // *********************UserInfo********************
  const [fullname, setFullname] = useState(userData?.data?.fullname);
  const [phone, setPhone] = useState(userData?.data?.phone);
  const [email, setEmail] = useState(userData?.data?.email);

  // *********************ImageProfile********************
  const [image, setImage] = useState(userData?.data?.image || "");
  const [selectedImage, setSelectedImage] = useState(null);

  const [isInputDisabled, setInputDisabled] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // *********************password********************
  const [
    updatePasswordMutation,
    { data: passwordData, isError: passwordError, isLoading: passwordLoading },
  ] = useUpdatePasswordMutation();

  const [oldPassword, setOldPassword] = useState("");
  const [newPassword, setNewPassword] = useState("");
  const [confirmNewPassword, setConfirmNewPassword] = useState("");

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  // Function to handle the form submission for password update
  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    try {
      if (newPassword !== confirmNewPassword) {
        // Handle password confirmation mismatch
        toast.error("New password and confirmation password do not match.", {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 3000,
        });
        return;
      }

      const { data, error } = await updatePasswordMutation({
        variables: {
          id: userId,
          email: email,
          oldPassword: oldPassword,
          newPassword: newPassword,
          confirmNewPassword: confirmNewPassword,
        },
      });
      if (error) {
        toast.error("GraphQL error:", {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 3000,
        });
      } else if (data) {
        if (data.updatePassword.success) {
          toast.success("Password updated successfully!", {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 3000,
          });
        } else {
          toast.error(
            "Failed to update password: " + data.updatePassword.message,
            {
              position: toast.POSITION.TOP_LEFT,
              autoClose: 3000,
            }
          );
        }
      }
    } catch (error) {
      console.error("Please Check your Connection", error);
    }
  };

  // Rest of your component code here...

  // Function to handle the form submission for user info
  const handleUserinfoUpdate = async (e) => {
    e.preventDefault();
    if (!fullname || !phone || !email || !image) {
      if (!fullname) {
        toast.error("Full Name cannot be blank.", {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 3000,
        });
      }

      if (!phone || !email) {
        toast.error("Phone Number or email cannot be blank.", {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 3000,
        });
      }
      return;
    }
    const updatedData = {
      id: id,
      fullname: fullname,
      phone: phone,
      email: email,
      image: image,
    };

    try {
      const { data, error } = await updateUserinfo({
        variables: { input: updatedData },
      });

      console.error("Error:", error);

      if (data && data.updateUserInfo) {
        toast.success("User information updated successfully!", {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 3000,
        });
      } else {
        console.error("Failed to update user information:", data);
      }
    } catch (error) {
      console.error("An error occurred:", error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleUserinfoUpdate}
        className="w-full  text-black flex flex-col justify-center items-center disabled:bg-gray-700 rounded    "
      >
        <div className=" flex md:w-[45%] xsm:6/12 sm:6/12 lg:6/12 flex-col justify-center items-center ">
          <div className=" flex justify-between w-full   ">
            <h2 className="text-xl capitalize font-semibold leading-7 my-8 text-center  text-gray-900">
              Profile
            </h2>
            <button
              type="button"
              onClick={() => {
                setInputDisabled(!isInputDisabled);
              }}
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
                <h1 className="font-bold ">{userData?.data?.fullname}</h1>
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
                onChange={(event) => {
                  const file = event.target.files[0];
                  setSelectedImage(file);
                  const reader = new FileReader();
                  reader.onload = (e) => {
                    setImage(e.target.result);
                  };
                  reader.readAsDataURL(file);
                }}
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
                    onChange={(event) => setFullname(event.target.value)}
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
                    onChange={(event) => setPhone(event.target.value)}
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
                    onChange={(event) => setEmail(event.target.value)}
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
            onSubmit={handlePasswordUpdate}
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
                          autocomplete={oldPassword}
                          disabled={isInputDisabled}
                          type={showPassword ? "text" : "password"}
                          name="oldPassword"
                          value={oldPassword}
                          onChange={(event) =>
                            setOldPassword(event.target.value)
                          }
                          className="disabled:bg-gray-200 disabled:text-gray-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
                        />
                      </div>
                      <button
                        type="button"
                        className="text-2xl ml-2"
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}
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
                          onChange={(event) =>
                            setNewPassword(event.target.value)
                          }
                          className="disabled:bg-gray-200 disabled:text-gray-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
                        />
                      </div>
                      <button
                        type="button"
                        className="text-2xl ml-2"
                        onClick={() => {
                          setShowNewPassword(!showNewPassword);
                        }}
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
                          autocomplete={confirmNewPassword}
                          disabled={isInputDisabled}
                          type={showConfirmNewPassword ? "text" : "password"}
                          name="confirmNewPassword"
                          value={confirmNewPassword}
                          onChange={(event) =>
                            setConfirmNewPassword(event.target.value)
                          }
                          className="disabled:bg-gray-200 disabled:text-gray-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
                        />
                      </div>
                      <button
                        type="button"
                        className="text-2xl ml-2"
                        onClick={() => {
                          setShowConfirmNewPassword(!showConfirmNewPassword);
                        }}
                      >
                        {showConfirmNewPassword ? (
                          <BiShowAlt />
                        ) : (
                          <BiSolidShow />
                        )}
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
