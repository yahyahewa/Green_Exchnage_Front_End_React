import React from "react";
import { useSelector } from "react-redux";
function Select
({ name, type, Label, require, data, setData, value, disable, options, select }) {
  const language = useSelector((state) => state.language.language);
  const handleData = (e) => {
    try {
      setData({ ...data, [e.target.name]: e.target.value });
    } catch (error) {
      console.error("Error handling data:", error);
    }
  };  const animationStyle = {
    animation: 'colorAnimation 2s infinite alternate',
    backgroundColor: 'var(--bg-neutral-100)',
  };
  return (
   <><div className="mt-1 w-full lg:w-[49%]">
      <label
        htmlFor={name}
        className={`block mb-2 text font-medium text-neutral-500 ${language!="english"&&"text-right"}`}
      >
        {Label}
      </label>
        <select
          disabled={disable}
          onChange={handleData}
          id={name}
          name={name}
          type={type}
          required={require}
          value={value}
          className={`duration-500 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm focus:outline-none outline-none 
          w-full text-neutral-600 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block px-1 py-2 ${
            !disable
              ? 'hover:border-gray-600 focus:border-green border-gray-400 '
              : 'bg-neutral-300 animate-pulse'
          } ${language!="english"&&"text-right"}` }
        >
          <option value="">{select}</option>
          {options && options.map((option) => (
            <option key={option?._id} value={option?._id}>
              {option?.name}
            </option>
          ))}
        </select>
    </div>
    </> 
  );
}

export default Select;
