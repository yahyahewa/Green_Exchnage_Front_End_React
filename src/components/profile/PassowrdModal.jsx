import { LiaTimesSolid } from 'react-icons/lia';
import { BiSolidShow, BiShowAlt } from 'react-icons/bi';
import React, { useEffect, useState } from 'react';
import { useUpdatePasswordMutation } from '../../app/api/profile';
import { ToastContainer, toast } from 'react-toastify';
import { useSelector } from 'react-redux';

const PassowrdModal = ({ showModal, setShowModal }) => {
  const [isInputDisabled, setInputDisabled] = useState(false);

  const userData = JSON.parse(localStorage.getItem('userData'));

  const [password, setPassword] = useState({
    id: userData?.data?._id,
    oldPassword: '',
    newPassword: '',
    confirmNewPassword: '',
  });
  const language = useSelector((state) => state.language.language);

  const handlePasswordData = (e) => {
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
      className="justify-center items-center   flex overflow-x-hidden  overflow-y-auto fixed inset-0 0 px-2 outline-none focus:outline-none"
    >
      <div className="  relative w-full flex items-center justify-center   z-50">
        {/*content*/}
        <div className="border-0 rounded   justify-center w-full sm:w-5/6 md:w-4/6 lg:w-4/6 2xl:w-2/6    relative flex flex-col bg-white border-green border-b-4 shadow-sm outline-none focus:outline-none">
          {/*header*/}
          <div
            className={`flex flex-row items-start justify-between p-2  border-b  border-solid border-slate-200 rounded-t ${
              language != 'english' && 'flex-row-reverse'
            }`}
          >
            <h3 className="text-xl ml-4 font-semibold">
              {language == 'kurdi'
                ? 'نوێکردنەوەی وشەی نهێنی'
                : language == 'arabic'
                ? 'تحديث كلمة المرور'
                : 'Password Update'}
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
          <div className="w-full bg-red-900 gap-4 flex flex-wrap flex-row justify-center items-center">
            <div
              className={`relative flex  pt-4 py-2 w-5/6 
              ${language == 'english' ? 'flex-row-reverse' : 'flex-row'} `}
            >
              <input
                placeholder={
                  language == 'kurdi'
                    ? 'تێپەڕەوشەی ئێستا'
                    : language == 'arabic'
                    ? 'كلمة السر الحالية'
                    : 'Current Password'
                }
                disabled={isInputDisabled}
                type={showPassword ? 'text' : 'password'}
                name="oldPassword"
                value={password.oldPassword}
                onChange={handlePasswordData}
                minLength={8}
                required
                className={`absolute disabled:bg-gray-200 
                disabled:text-gray-400 appearance-none 
                border-2 border-gray-200  w-full py-2 px-2
                 text-gray-900 leading-tight focus:outline-none
                  focus:bg-white focus:border-green ${
                    language != 'english' && 'text-right'
                  }`}
              />

              <button
                type="button"
                className="text-2xl ml-2 relative top-2 right-1"
                onClick={() => {
                  setShowPassword(!showPassword);
                }}
              >
                {showPassword ? <BiShowAlt /> : <BiSolidShow />}
              </button>
            </div>
            <div
              className={`relative flex  pt-4 py-2 w-5/6 
              ${language == 'english' ? 'flex-row-reverse' : 'flex-row'} `}
            >
              <input
                placeholder={
                  language == 'kurdi'
                    ? 'تێپەڕەوشەی نوێ'
                    : language == 'arabic'
                    ? 'كلمة المرور الجديدة'
                    : 'NewPassword'
                }
                disabled={isInputDisabled}
                type={showNewPassword ? 'text' : 'password'}
                name="newPassword"
                minLength={8}
                required
                value={password.newPassword}
                onChange={handlePasswordData}
                className={`absolute disabled:bg-gray-200 
                disabled:text-gray-400 appearance-none 
                border-2 border-gray-200  w-full py-2 px-2
                 text-gray-900 leading-tight focus:outline-none
                  focus:bg-white focus:border-green ${
                    language != 'english' && 'text-right'
                  }`}
              />

              <button
                type="button"
                className="text-2xl ml-2 relative top-2 right-1"
                onClick={() => {
                  setShowNewPassword(!showNewPassword);
                }}
              >
                {showNewPassword ? <BiShowAlt /> : <BiSolidShow />}
              </button>
            </div>
            <div
              className={`relative flex  pt-4 py-2 w-5/6 
              ${language == 'english' ? 'flex-row-reverse' : 'flex-row'} `}
            >
              <input
                placeholder={
                  language == 'kurdi'
                    ? 'دووبارە کردنەوە ووشەى نهێنى نوێ'
                    : language == 'arabic'
                    ? 'تأكيد كلمة المرور الجديدة'
                    : 'Confirm new Password'
                }
                minLength={8}
                required
                disabled={isInputDisabled}
                type={showConfirmNewPassword ? 'text' : 'password'}
                name="confirmNewPassword"
                value={password.confirmNewPassword}
                onChange={handlePasswordData}
                className={`absolute disabled:bg-gray-200 
                disabled:text-gray-400 appearance-none 
                border-2 border-gray-200  w-full py-2 px-2
                 text-gray-900 leading-tight focus:outline-none
                  focus:bg-white focus:border-green ${
                    language != 'english' && 'text-right'
                  }`}
              />

              <button
                type="button"
                className="text-2xl ml-2 relative top-2 right-1"
                onClick={() => {
                  setShowConfirmNewPassword(!showConfirmNewPassword);
                }}
              >
                {showConfirmNewPassword ? <BiShowAlt /> : <BiSolidShow />}
              </button>
            </div>
          </div>

          {/*footer*/}
          <div
            className={` flex mb-2 items-center justify-end pt-4 pr-1 border-t border-solid border-gray-200 rounded-b  ${
              language != 'english' && 'flex-row-reverse '
            }`}
          >
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
