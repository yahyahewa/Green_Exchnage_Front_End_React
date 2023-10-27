import React, { useState } from 'react';
import { AiFillEdit } from 'react-icons/ai';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useUpdatePasswordMutation, useUpdateUserInfoMutation } from '../../app/api/profile';
import { LiaTimesSolid } from 'react-icons/lia';
import { BiSolidShow, BiShowAlt } from 'react-icons/bi';

const Setting = () => {
  const userData = JSON.parse(localStorage.getItem('userData'));
  const [userToken, setUserToken] = useState(userData?.data?.token);
  const [userId, setUserId] = useState(userData.data?._id);

  // User info state
  const [fullname, setFullname] = useState(userData?.data?.fullname);
  const [phone, setPhone] = useState(userData?.data?.phone);
  const [email, setEmail] = useState(userData?.data?.email);
  const [image, setImage] = useState(userData?.data?.image || '');

  // Password state
  const [oldPassword, setOldPassword] = useState('');
  const [newPassword, setNewPassword] = useState('');
  const [confirmNewPassword, setConfirmNewPassword] = useState('');

  const [showPassword, setShowPassword] = useState(false);
  const [showNewPassword, setShowNewPassword] = useState(false);
  const [showConfirmNewPassword, setShowConfirmNewPassword] = useState(false);

  const [isInputDisabled, setInputDisabled] = useState(true);
  const [showModal, setShowModal] = useState(false);

  // Function to handle the form submission for password update
  const handlePasswordUpdate = async (e) => {
    e.preventDefault();
    try {
      if (newPassword !== confirmNewPassword) {
        // Handle password confirmation mismatch
        toast.error('New password and confirmation password do not match.', {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 3000,
        });
        return;
      }

      const { data, error } = await updatePasswordMutation({
        id: userId,
        email: email,
        oldPassword: oldPassword,
        newPassword: newPassword,
        confirmNewPassword: confirmNewPassword,
      });
      if (error) {
        toast.error('GraphQL error:', {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 3000,
        });
      } else if (data) {
        if (data.updatePassword.success) {
          toast.success('Password updated successfully!', {
            position: toast.POSITION.TOP_LEFT,
            autoClose: 3000,
          });
        } else {
          toast.error(
            'Failed to update password: ' + data.updatePassword.message,
            {
              position: toast.POSITION.TOP_LEFT,
              autoClose: 3000,
            },
          );
        }
      }
    } catch (error) {
      console.error('Please Check your Connection', error);
    }
  };

  // Function to handle the form submission for user info update
  const handleUserinfoUpdate = async (e) => {
    e.preventDefault();

    const updatedData = {
      id: userId,
      fullname: fullname,
      phone: phone,
      email: email,
      image: image,
    };

    try {
      const { data, error } = await updateUserinfo({
        variables: { input: updatedData },
      });

      if (data && data.updateUserInfo) {
        toast.success('User information updated successfully!', {
          position: toast.POSITION.TOP_LEFT,
          autoClose: 3000,
        });
      } else {
        console.error('Failed to update user information:', data);
      }
    } catch (error) {
      console.error('An error occurred:', error);
    }
  };

  return (
    <>
      <form
        onSubmit={handleUserinfoUpdate}
        className="w-full  text-black flex flex-col justify-center items-center disabled:bg-gray-700 rounded"
      >
        {/* ... The rest of the form content ... */}
      </form>

      {/* Modal form for password update */}
      {showModal ? (
        <>
          <form
            onSubmit={handlePasswordUpdate}
            className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 px-2 outline-none focus:outline-none"
          >
            {/* ... Modal form content ... */}
          </form>
          <div className="opacity-60 fixed inset-0 z-40 bg-black"></div>
        </>
      ) : null}
    </>
  );
};

export default Setting;
