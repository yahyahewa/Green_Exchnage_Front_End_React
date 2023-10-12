import PasswordStrengthBar from 'react-password-strength-bar';
import React, { useState } from 'react';

function Firstpage({ formData, setFormData, setWichPage }) {
  const [showPassword, setShowPassword] = useState(false);
  const handlePasswordToggle = () => {
    setShowPassword(!showPassword);
  };
  const handleNext = (e) => {
    e.preventDefault();
    setWichPage('second');
  };

  const handleInputChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };
  return (
    <form
      className="flex flex-col justify-center items-center w-full sm:w-2/3 md:w-1/2 "
      onSubmit={handleNext}
    >
      {/* -------------------- full name feild --------------------------------- */}
      <div className="flex flex-col w-[90%] my-2">
        <label className=" mx-1 text-lg text-gray-600">Full Name</label>
        <div className="m-1 border-2 border-jade-400 hover:border-jade-500 rounded-md transition-all">
          <input
            onChange={handleInputChange}
            required={true}
            type="text"
            name="fullname"
            className=" h-9 ml-1 outline-none px-2 py-2 w-[95%]"
          />
        </div>
      </div>
      {/* -------------------- email feild --------------------------------- */}
      <div className="flex flex-col w-[90%] my-2">
        <label className=" mx-1 text-lg text-gray-600">Email</label>
        <div className="m-1 border-2 border-jade-400 hover:border-jade-500 rounded-md transition-all">
          <input
            onChange={handleInputChange}
            required={true}
            type="email"
            name="email"
            className=" h-9 ml-1 outline-none px-2 py-2 w-[95%]"
          />
        </div>
      </div>
      {/* -------------------- phone feild --------------------------------- */}
      <div className="flex flex-col w-[90%] my-2">
        <label className=" mx-1 text-lg text-gray-600">Phone</label>
        <div className="m-1 border-2 border-jade-400 hover:border-jade-500 rounded-md transition-all">
          <input
            onChange={handleInputChange}
            required={true}
            type="tel"
            name="phone"
            className=" h-9 ml-1 outline-none px-2 py-2 w-[95%]"
          />
        </div>
      </div>
      {/* -------------------- passwordd feild --------------------------------- */}
      <div className="flex flex-col w-[90%] my-2 mb-0">
        <label className="mx-1 text-lg text-gray-600">Password</label>
        <div className="flex items-center m-1 border-2 border-jade-400 hover:border-jade-500 rounded-md transition-all">
          <input
            onChange={handleInputChange}
            required={true}
            type={showPassword ? 'text' : 'password'}
            name="password"
            className="h-9 ml-1 outline-none px-2 py-2 w-[90%]"
          />
          <i
            onClick={handlePasswordToggle}
            className={`m-auto fa-solid text-gray-700 ${
              showPassword ? 'fa-eye' : 'fa-eye-slash'
            }`}
          ></i>
        </div>
        <PasswordStrengthBar
          password={formData.password}
          className="m-auto w-[97%]"
        />
      </div>
      {/* -------------------- gender field --------------------------------- */}
      <div className="flex flex-col w-[90%] my-2 mt-0">
        <label className="mx-1 text-lg text-gray-600">Gender</label>
        <div className="m-1 border-2 border-jade-400 hover:border-jade-500 rounded-md transition-all">
          <select
            onChange={handleInputChange}
            required={true}
            name="gender"
            className="h-9 ml-1 outline-none px-2 py-2 w-[97%]"
          >
            <option value="">Select Gender</option>
            <option value="male">Male</option>
            <option value="female">Female</option>
            <option value="other">Other</option>
          </select>
        </div>
      </div>
      {/* -------------------- birthday field --------------------------------- */}
      <div className="flex flex-col w-[90%] my-2">
        <label className="mx-1 text-lg text-gray-600">Birthday</label>
        <div className="m-1 border-2 border-jade-400 hover:border-jade-500 rounded-md transition-all">
          <input
            onChange={handleInputChange}
            required={true}
            type="date"
            name="birthday"
            className="h-9 ml-1 outline-none px-2 py-2 w-[95%]"
          />
        </div>
      </div>
      {/* -------------------- next button --------------------------------- */}
      <div className="flex justify-center w-[90%] my-4">
        <button className="w-full px-4 py-2 bg-jade-500 hover:bg-jade-600 text-white rounded-md transition-all">
          Next
        </button>
      </div>
    </form>
  );
}

export default Firstpage;
