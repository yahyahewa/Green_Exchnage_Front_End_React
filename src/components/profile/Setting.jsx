import React, { useState } from "react";
import { useGetUserProductsQuery } from "../../app/api/profile";
import { FaEdit } from "react-icons/fa";

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
      data: { ...userData.data, fullname, phone, image, email },
    };
    localStorage.setItem("userData", JSON.stringify(updatedUserData));

    // Provide user feedback for successful submission (you can add more)
    alert("Profile updated successfully!");
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="container  text-black  rounded ml-96 p-4"
    >
      <div className=" flex flex-col justify-center items-center  ">
        <div className=" pb-12 ">
          <h2 className="text-xl capitalize font-semibold leading-7  mb-8 text-center  text-gray-900">
            Profile
          </h2>

          <div className=" flex justify-center items-center     flex-col gap-2">
            <img
              className=" rounded-full relative shadow-md w-28 h-28 object-cover shadow-jade-300"
              src={image}
              alt="imageprofile"
            />

            <div className="flex items-center justify-center ">
              <h1 className="font-bold ">{fullname}</h1>
            </div>
          </div>
        </div>
        <div className="col-span-full w-1/3 pb-4">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            update your profile Image
          </label>
          <div className="mt-2">
            <input
              type="file" // Input type for file upload
              name="image"
              accept="image/*" // Specify accepted file types (images in this case)
              onChange={handleImageChange} // Handle image file selection
              className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
            />
          </div>
        </div>

        <div className="col-span-full w-1/3 pb-4">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Full Name
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="fullname"
              value={fullname}
              onChange={handleInputChange}
              className="bg-gray-100 appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
            />
          </div>
        </div>

        <div className="col-span-full w-1/3 pb-4">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Phone Number
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="phone"
              value={phone}
              onChange={handleInputChange}
              className="bg-gray-100 peer appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
            />
          </div>
        </div>

        <div className="col-span-full w-1/3 pb-4">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Email
          </label>
          <div className="mt-2">
            <input
              type="text"
              name="email"
              value={email}
              onChange={handleInputChange}
              className="bg-gray-100 peer appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
            />
          </div>
        </div>
        <div className="col-span-full w-1/3 pb-4">
          <label className="block text-sm font-medium leading-6 text-gray-900">
            Password
          </label>
          <div className="mt-2">
            <input
              type="password"
              name="password"
              value={password}
              onChange={handleInputChange}
              className="bg-gray-100 peer appearance-none border-2 border-gray-200 rounded w-full py-2 px-4 text-gray-700 leading-tight focus:outline-none focus:bg-white focus:border-jade-500"
            />
          </div>
        </div>

        <div className="mt-6 flex flex-1  items-center  justify-end   gap-x-8">
          <button
            type="button"
            className="rounded-md bg-gray-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-gray-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-600"
          >
            Cancel
          </button>
          <button
            type="submit"
            className="rounded-md bg-jade-600 px-8 py-2 text-sm font-semibold text-white shadow-sm hover:bg-jade-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-jade-600"
          >
            Save
          </button>
        </div>
      </div>
    </form>
  );
};

export default Setting;
