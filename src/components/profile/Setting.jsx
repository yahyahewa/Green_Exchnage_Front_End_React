import React, { useEffect, useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import {
  useUpdateUserInfoMutation,
  useUploadMutation,
} from '../../app/api/profile';
import PassowrdModal from './PassowrdModal';

import { AiFillEdit } from 'react-icons/ai';
import { Link, Navigate } from 'react-router-dom';
const Setting = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const [
    uploadImage,
    { data: imageData, isError: imageError, isLoading: imageLoading },
  ] = useUploadMutation();
  const [
    updateUserInfo,
    { data: userInfoData, isError: userError, isLoading: userLoading },
  ] = useUpdateUserInfoMutation();
  const [isInputDisabled, setInputDisabled] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [image, setImage] = useState();

  const [userInfo, setUserInfo] = useState({
    id: userData?.data?._id,
    fullname: userData?.data?.fullname || '',
    email: userData?.data?.email || '',
    phone: userData?.data?.phone || '',
    image: userData?.data?.image,
  });
  const [selectedImage, setSelectedImage] = useState([]);
  // Function to handle the form submission for user info
  const handleUserinfoUpdate = (e) => {
    try {
      e.preventDefault();
      if (selectedImage?.name) {
        uploadImage(selectedImage);
        return;
      }
      updateUserInfo(userInfo);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  //
  const [canUpdate, setCanUpdate] = useState(false);
  useEffect(() => {
    if (!imageLoading && !imageError && imageData?.path) {
      setUserInfo({ ...userInfo, image: imageData?.path });
      setCanUpdate(true);
    }
  }, [imageData?.path]);

  useEffect(() => {
    if (canUpdate) {
      updateUserInfo(userInfo);
      setSelectedImage([]);
      setCanUpdate(false);
    }
  }, [canUpdate]);

  useEffect(() => {
    if (!imageLoading && !imageError && imageData?.path) {
      setUserInfo({ ...userInfo, image: imageData?.path });
    }
  }, [imageData]);
  useEffect(() => {
    if (!userLoading && !userError && userInfoData?.data) {
      localStorage.setItem('userData', JSON.stringify(userInfoData?.data));
      setInputDisabled(true);
      toast.success('Profile updated successfully');
      return;
    }
  }, [userInfoData?.data]);
  const handleData = (e) => {
    setUserInfo({ ...userInfo, [e.target.name]: e.target.value });
  };
  const handleImageUpload = (e) => {
    const file = e.target.files[0];

    setSelectedImage(file);
    const reader = new FileReader();
    reader.onload = (e) => {
      setImage(e.target.result);
    };
    reader.readAsDataURL(file);
  };

  return (
    <>
      <form
        onSubmit={handleUserinfoUpdate}
        className="w-full  text-black  flex flex-col justify-center items-center disabled:bg-gray-700 rounded"
      >
        <div className=" flex xsm:6/12 md:w-7/12  sm:8/12 lg:6/12 xl:8/12 flex-col justify-center items-center ">
          <div className=" flex justify-between w-full ">
            <h2 className="text-xl capitalize font-semibold leading-7 my-8 text-center  text-gray-900">
              My Profile
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
                className=" rounded-full  w-36 h-36 object-cover shadow-md"
                src={
                  image ||
                  `${import.meta.env.VITE_BACK_END}uploads/users/${
                    userInfo.image
                  }`
                }
                alt="ImageProfile"
              />

              <div className="flex items-center justify-center ">
                <h1 className="font-bold capitalize text-xl">
                  {userData?.data?.fullname}
                </h1>
              </div>
            </div>
          </div>
          <div disabled className="col-span w-full pb-6  ">
            <label className="block text-sm font-medium leading-6 text-gray-900">
              Profile Image
            </label>
            <div className="mt-2 ">
              <input
                disabled={isInputDisabled}
                type="file"
                name="image"
                accept="image/*"
                onChange={handleImageUpload}
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
                    required
                    name="fullname"
                    placeholder="name"
                    value={userInfo.fullname}
                    onChange={handleData}
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
                    type="tel"
                    name="phone"
                    value={userInfo.phone}
                    placeholder="07xxxxxxxxx"
                    onChange={handleData}
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
                    required
                    placeholder="example@example.com"
                    value={userInfo.email}
                    onChange={handleData}
                    className="   disabled:bg-gray-200 disabled:text-gray-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex xsm:6/12 md:w-7/12  px-4   sm:8/12 lg:6/12 xl:8/12  justify-center items-center flex-row  w-full">
          <button
            disabled={isInputDisabled}
            onClick={() => setShowModal(true)}
            type="button"
            className={`rounded  disabled:bg-gray-100 bg-white border border-jade-600  px-2 py-2 text-sm font-semibold text-jade-600 shadow-sm hover:bg-gray-100 focus-visible:outline mx-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade-600  ${
              isInputDisabled ||
              imageError ||
              imageLoading ||
              userError ||
              userLoading
                ? 'opacity-40 '
                : ''
            }`}
          >
            Change password
          </button>
          <button
            className={`bg-jade-600 text-white capitalize active:bg-jade-600 font-bold  text-sm px-8 py-2 rounded    mr-1  ease-linear transition-all duration-150   ${
              isInputDisabled ||
              imageError ||
              imageLoading ||
              userError ||
              userLoading
                ? 'opacity-40'
                : ''
            }`}
            disabled={
              isInputDisabled ||
              imageError ||
              imageLoading ||
              userError ||
              userLoading
            }
          >
            save
          </button>
          <div className="flex justify-evenly">
            <Link
              onClick={() => (
                localStorage.removeItem('userData'), Navigate('/')
              )}
              className={`bg-red-500 text-white capitalize  font-bold  text-sm px-4 py-2 rounded    mr-1  ease-linear transition-all duration-150   ${
                isInputDisabled ||
                imageError ||
                imageLoading ||
                userError ||
                userLoading
                  ? 'opacity-40'
                  : ''
              }`}
              disabled={
                isInputDisabled ||
                imageError ||
                imageLoading ||
                userError ||
                userLoading
              }
            >
              LogOut
            </Link>
          </div>
        </div>
      </form>

      {/* modal form */}
      {showModal && (
        <div className="fixed inset-0 flex items-center justify-center z-50">
          <div className="fixed inset-0 bg-black opacity-70"></div>
          <PassowrdModal showModal={showModal} setShowModal={setShowModal} />
        </div>
      )}
      <ToastContainer
        position="top-center"
        autoClose={5000}
        hideProgressBar={false}
        newestOnTop={false}
        closeOnClick
        rtl={false}
        pauseOnFocusLoss
        draggable
        pauseOnHover
      />
    </>
  );
};

export default Setting;
