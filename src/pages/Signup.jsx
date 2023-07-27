import React from "react";
import { useState } from "react";
import PasswordStrengthBar from "react-password-strength-bar";

const Signup = () => {
  const [errors, setErrors] = useState([]);
  const [user, setUser] = useState({
    name: "",
    email: "",
    password: "",
    Phone: "",
    Location: "",
    confirmPassword: "",
  });

  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <section className="bg-white  p-2 pt-24  ">
      <div className="flex justify-center max-h-screen ">
        <div className="flex items-center w-full max-w-3xl  mx-auto ">
          <div className="w-full">
            <p className=" text-center text-2xl pt-16  md:font-bold ">
              Sign Up
            </p>
            {/* {auth.registerStatus === "rejected" ? (
              <p className="text-red-900 text-2xl pt-4">{auth.registerError}</p>
            ) : null}
            {errors.length > 0 ? (
              <p className="text-red-900 text-2xl pt-4">{errors[0]}</p>
            ) : null} */}

            <form
              className="grid grid-cols-1 gap-12 mt-8 md:grid-cols-1 text-xl"
              onSubmit={handleSubmit}
            >
              <div>
                <label className="block mb-2 text  text-gray-800 text-xl">
                  Name
                </label>
                <input
                  onChange={(e) => setUser({ ...user, name: e.target.value })}
                  type="text"
                  placeholder="John"
                  className="w-full py-2 px-3 border-2 text-xl border-gray-500 rounded shadow-sm focus:outline-none focus:border-jade-600"
                />
              </div>
              <div>
                <label className="block mb-2 text  text-gray-800 text-xl">
                  Phone Number
                </label>
                <input
                  onChange={(e) => setUser({ ...user, Phone: e.target.value })}
                  type="text"
                  placeholder="07xxxxxxxx"
                  className="w-full py-2 px-3 border-2 text-xl border-gray-500 rounded shadow-sm focus:outline-none focus:border-jade-600"
                />
              </div>
              <div>
                <label className="block mb-2 text  text-gray-800 text-xl">
                  Location
                </label>
                <input
                  onChange={(e) =>
                    setUser({ ...user, Location: e.target.value })
                  }
                  type="text"
                  placeholder="Sulaymaniyah"
                  className="w-full py-2 px-3 border-2 text-xl border-gray-500 rounded shadow-sm focus:outline-none focus:border-jade-600"
                />
              </div>
              <div>
                <label className="block mb-2 text-xl  text-gray-800">
                  Email address
                </label>
                <input
                  onChange={(e) => setUser({ ...user, email: e.target.value })}
                  type="email"
                  placeholder="********@example.com"
                  className="w-full py-2 px-3 border-2 text-xl border-gray-500 rounded shadow-sm focus:outline-none focus:border-jade-600"
                />
              </div>
              <div className="p-0">
                <label className="block mb-2 text-xl  text-gray-800">
                  Password
                </label>

                <input
                  onChange={(e) =>
                    setUser({ ...user, password: e.target.value })
                  }
                  type="password"
                  placeholder="Enter your password"
                  className="w-full py-2 px-3 border-2 text-xl border-gray-500 rounded shadow-sm focus:outline-none focus:border-jade-600"
                />
                <PasswordStrengthBar
                  password={user.password}
                  className="mt-1"
                />
              </div>

              <div className="flex justify-center ">
                <button className="flex  text-xl mb-8  px-24 py-3  tracking-wide text-white capitalize transition-colors duration-300 transform bg-jade-600 rounded hover:bg-jade-400 focus:outline-none focus:ring focus:ring-jade-300 focus:ring-opacity-50">
                  Sign Up
                </button>
              </div>
              {/* <span className="text-xl ">
                  {auth.registerStatus === "pendding"
                    ? "Submitting"
                    : "Sign Up"}
                </span>
                {auth.registerStatus === "rejected"? (
                  <p className="text-red-900 text-2xl pt-4">{auth.registerError}</p>
                ) : null} */}
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Signup;
