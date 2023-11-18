import { LiaTimesSolid } from 'react-icons/lia';
import { BiSolidShow, BiShowAlt } from 'react-icons/bi';
import React, { useEffect, useState } from 'react';
import { useUpdatePasswordMutation } from '../../app/api/profile';
import { ToastContainer, toast } from 'react-toastify';

const PassowrdModal = ({ showModal, setShowModal }) => {
  const [isInputDisabled, setInputDisabled] = useState(false);

  const userData = JSON.parse(localStorage.getItem('userData'));

  const [password, setPassword] = useState({
    id: userData?.data?._id,
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  const handlePassswordData = (e) => {
    setPassword({ ...password, [e.target.name]: e.target.value });
  };
  // *********************password********************
  const [
    updatePassword,
    { data: passwordData, isError: passwordError, isLoading: passwordLoading },
  ] = useUpdatePasswordMutation();

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  // Function to handle the form submission for password update
  const handlePasswordUpdate = (e) => {
    try {
      e.preventDefault();
      if (password.newPassword !== password.confirmNewPassword) {
        // Handle password confirmation mismatch
        toast.error('New password and confirmation password do not match.');
        return;
      }
      if (password.oldPassword === password.newPassword) {
        toast.error('Old password and new password cannot be same.');
        return;
      }
      updatePassword(password);
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };
  useEffect(() => {
    try {
      if (!passwordError && !passwordLoading && passwordData) {
        if (passwordData?.message == 'success') {
          toast.success('Password updated successfully!');
          setPassword({
            id: userData?.data?._id,
            oldPassword: '',
            newPassword: '',
            confirmNewPassword: '',
          });
          setShowModal(false);
          return;
        }
        if (passwordData?.message == 'failed') {
          toast.error('Failed to update password!');
          return;
        }
        if (passwordData?.message == 'invalid') {
          toast.error('Invalid current password!');
          return;
        }
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  }, [passwordData?.message]);
  return (
    <form
      onSubmit={handlePasswordUpdate}
      className="justify-center items-center jus flex overflow-x-hidden  overflow-y-auto fixed inset-0 z-50 px-2 outline-none focus:outline-none"
    >
      <div className="  relative w-full   mx-auto max-w-3xl z-50">
        {/*content*/}
        <div className="border-0 rounded   relative flex flex-col w-full bg-white border-jade-500 border-b-4 shadow-sm outline-none focus:outline-none">
          {/*header*/}
          <div className="flex   items-start justify-between p-2  border-b  border-solid border-slate-200 rounded-t">
            <h3 className="text-xl ml-4 font-semibold">Update Password</h3>
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
          <div className="relative p-6 flex-auto ">
            <div className="col-span-full w-3/3 md:w-2/3">
              <div className=" flex justify-between ">
                <div className="w-full ">
                  <input
                    placeholder="Current Password"
                    disabled={isInputDisabled}
                    type={showPassword ? 'text' : 'password'}
                    name="oldPassword"
                    value={password.oldPassword}
                    onChange={handlePassswordData}
                    minLength={8}
                    required
                    className="disabled:bg-gray-200 disabled:text-gray-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
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
              <div className=" flex justify-between ">
                <div className="w-full ">
                  <input
                    placeholder=" New Password"
                    disabled={isInputDisabled}
                    type={showNewPassword ? 'text' : 'password'}
                    name="newPassword"
                    minLength={8}
                    required
                    value={password.newPassword}
                    onChange={handlePassswordData}
                    className="disabled:bg-gray-200 disabled:text-gray-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
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
          <div className="relative px-6  pb-8 flex-auto">
            <div className="col-span-full w-3/3 md:w-2/3 ">
              <div className=" flex justify-between ">
                <div className="w-full ">
                  <input
                    placeholder="Confirm Password"
                    minLength={8}
                    required
                    disabled={isInputDisabled}
                    type={showConfirmNewPassword ? 'text' : 'password'}
                    name="confirmNewPassword"
                    value={password.confirmNewPassword}
                    onChange={handlePassswordData}
                    className="disabled:bg-gray-200 disabled:text-gray-400 appearance-none border-2 border-gray-200 rounded w-full py-2 px-2 text-gray-900 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
                  />
                </div>
                <button
                  type="button"
                  className="text-2xl ml-2"
                  onClick={() => {
                    setShowConfirmNewPassword(!showConfirmNewPassword);
                  }}
                >
                  {showConfirmNewPassword ? <BiShowAlt /> : <BiSolidShow />}
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
              className="rounded mx-2 disabled:bg-slate-400 bg-white border border-jade-600 px-8 py-2 text-sm  font-semibold text-jade-600 shadow-sm hover:bg-gray-100 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
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
    </form>
  );
};

export default PassowrdModal;
