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
import { useSelector } from 'react-redux';
import image_svg from '../../assets/images/contact.svg';
import { Button } from '@mantine/core';
const Setting = () => {
  const language = useSelector((state) => state.language.language);
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
  const [showModal, setShowModal] = useState(true);
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
  const handleLogout = () => {
    // Handle logout logic here
    localStorage.removeItem('userData');
    Navigate('/');
  };
  // alert(window.innerWidth);
  return (
    <>
      <form
        onSubmit={handleUserinfoUpdate}
        className="grid grid-cols-1 md:grid-cols-2 w-full gap-4"
      >
        <div className="w-full hidden md:block">
          <img
            src={image_svg}
            className="hidden sm:flex w-full h-72 md:h-[500px] object-contain sm:object-cover"
          />
        </div>
        <div className="lg-py-12">
          <div
            className={`flex  justify-between items-center ${
              language != 'english' && 'flex-row-reverse'
            }`}
          >
            <h2 className="text-xl capitalize font-semibold my-8 text-center  text-gray-900 ">
              {language == 'kurdi'
                ? 'پڕۆفایلی من'
                : language == 'arabic'
                ? 'الملف الشخصي'
                : 'My Profile'}
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
          <div className="flex justify-center">
            <div className="rounded-full relative">
              <input
                disabled={isInputDisabled}
                id="image"
                accept="image/*"
                name="image"
                onChange={handleImageUpload}
                type="file"
                className="w-10 h-10 rounded-full absolute 
                -bottom-1 left-1/2 transform -translate-x-1/2 
                bg-green  disabled:bg-teal-500"
              />
              <button
                disabled={isInputDisabled}
                onClick={() => {
                  document.getElementById('image').click();
                }}
                type="button"
                className={`w-10 h-10 rounded-full absolute 
                -bottom-1 left-1/2 transform -translate-x-1/2 
                bg-red-900 disabled:bg-gray-500`}
              ></button>
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
            </div>
          </div>
          <div className="flex justify-center flex-wrap gap-y-5">
            <div className="mt-1 w-full md:w-[80%]">
              <label
                htmlFor="fullname"
                className={`block mb-2 text font-medium text-neutral-500 ${
                  language != 'english' && 'text-right'
                }`}
              >
                {language == 'kurdi'
                  ? 'ناوى تەواو'
                  : language == 'arabic'
                  ? 'الاسم الكامل'
                  : 'Full Name'}
              </label>
              <input
                disabled={isInputDisabled}
                id="fullname"
                value={userInfo?.fullname}
                required={true}
                name="fullname"
                onChange={handleData}
                type="text"
                className={`hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm border-gray-400 focus:outline-none disabled:bg-gray-300 disabled:text-gray-400 focus:border-green outline-none w-full text-neutral-600 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block px-1 py-2
           ${language != 'english' && 'text-right'}`}
              />
            </div>
            <div className="mt-1 w-full md:w-[80%]">
              <label
                htmlFor="email"
                className={`block mb-2 text font-medium text-neutral-500 ${
                  language != 'english' && 'text-right'
                }`}
              >
                {language == 'kurdi'
                  ? 'ئیمەیڵ'
                  : language == 'arabic'
                  ? 'بريد إلكتروني'
                  : 'Email'}
              </label>
              <input
                disabled={isInputDisabled}
                id="email"
                value={userInfo?.email}
                required={true}
                name="email"
                onChange={handleData}
                type="email"
                className={`hover:border-gray-600 duration-500 disabled:bg-gray-300 disabled:text-gray-400 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green outline-none w-full text-neutral-600 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block px-1 py-2
           ${language != 'english' && 'text-right'}`}
              />
            </div>
            <div className="mt-1 w-full md:w-[80%]">
              <label
                htmlFor="phone"
                className={`block mb-2 text font-medium text-neutral-500 ${
                  language != 'english' && 'text-right'
                }`}
              >
                {language == 'kurdi'
                  ? 'ژمارەی تەلەفۆن'
                  : language == 'arabic'
                  ? 'رقم التليفون'
                  : 'Phone Number'}
              </label>
              <input
                disabled={isInputDisabled}
                id="phone"
                value={userInfo?.phone}
                name="phone"
                onChange={handleData}
                type="tel"
                className={`hover:border-gray-600 disabled:bg-gray-300 disabled:text-gray-400 duration-500 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green outline-none w-full text-neutral-600 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block px-1 py-2
           ${language != 'english' && 'text-right'}`}
              />
            </div>
            <div
              className={`mt-1 w-full md:w-[80%] flex flex-col gap-5 lg:gap-3  md:flex-col ${
                language == 'english'
                  ? 'sm:flex-row 2xl:flex-row'
                  : 'sm:flex-row-reverse 2xl:flex-row-reverse'
              }`}
            >
              <button
                type="submit"
                className={` w-full bg-green text-white px-4 py-2  ${`language!='english' &&'text-right'`} active:bg-green font-bold   px-8 py-2     mr-1  ease-linear transition-all duration-150   ${
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
                {language == 'english'
                  ? 'Update'
                  : language == 'kurdi'
                  ? 'نوێکردنەوە'
                  : 'تحديث'}
              </button>
              <button
                disabled={isInputDisabled}
                onClick={() => setShowModal(true)}
                type="button"
                className={`  disabled:bg-gray-100 w-full border text-green  text-center py-2${`language!='english' &&'text-right'`} border border-green  px-2 py-2   hover:bg-gray-100 focus-visible:outline mx-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green  ${
                  isInputDisabled ||
                  imageError ||
                  imageLoading ||
                  userError ||
                  userLoading
                    ? 'opacity-40 '
                    : ''
                }`}
              >
                {language == 'kurdi'
                  ? 'گۆڕینی ژمارەی نهێنی'
                  : language == 'arabic'
                  ? 'تغيير كلمة المرور'
                  : 'Change Password'}
              </button>
              <Link
                Navigate
                to="/"
                onClick={handleLogout}
                className={`  disabled:bg-gray-100 w-full border bg-red-600 text-white text-center py-2${`language!='english' &&'text-right'`} border   px-2 py-2   hover:bg-red-500 focus-visible:outline mx-2 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-green  ${
                  isInputDisabled ||
                  imageError ||
                  imageLoading ||
                  userError ||
                  userLoading
                    ? 'opacity-40 '
                    : ''
                }`}
              >
                {language === 'kurdi'
                  ? 'چوونە دەرەوە'
                  : language === 'arabic'
                  ? 'تسجيل خروج'
                  : 'Logout'}
              </Link>
            </div>
          </div>
          {/* <div
            className={`flex gap-2 flex-wrap  ${
              language != 'english' && 'flex-row-reverse'
            }   mt-5 flex-col w-[80%]"`}
          >
           

            <button
              type="submit"
              className={`bg-green text-white capitalize${`language!='english' &&'text-right'`} active:bg-green font-bold  text-sm px-8 py-2 rounded    mr-1  ease-linear transition-all duration-150   ${
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
              {language == 'kurdi'
                ? 'هەڵگرتن'
                : language == 'arabic'
                ? 'يحفظ'
                : 'Save'}
            </button>

            {isInputDisabled ||
            imageError ||
            imageLoading ||
            userError ||
            userLoading ? (
              <div className="bg-red-500 text-white capitalize text-right font-bold text-sm px-4 py-2 rounded mr-1 ease-linear transition-all duration-150 opacity-40">
                {language === 'kurdi'
                  ? 'چوونە دەرەوە'
                  : language === 'arabic'
                  ? 'تسجيل خروج'
                  : 'Logout'}
              </div>
            ) : (
              <Link
                onClick={handleLogout}
                className={`bg-red-500 text-white capitalize ${
                  language !== 'english' && 'text-right'
                } font-bold text-sm px-4 py-2 rounded mr-1 ease-linear transition-all duration-150`}
              >
               
              </Link>
            )}
          </div> */}
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
