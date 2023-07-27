import React from "react";

function Secondpage({ formData, setFormData }) {
  const handleSubmit = (e) => {
    e.preventDefault();
  };
  return (
    <form
      onSubmit={handleSubmit}
      className="flex flex-col justify-center items-center w-full sm:w-2/3 md:w-1/2"
    >
      <div className="flex flex-col w-[90%] my-2">
        <label className="mx-1 text-lg text-gray-600">Upload Image</label>
        <div className="m-1 border-2 border-jade-400 hover:border-jade-500 rounded-md transition-all">
          <input
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.files[0] })
            }
            required={true}
            type="file"
            name="image"
            accept="image/*"
            className="h-9 ml-1 outline-none  py-1 w-[95%]"
          />
        </div>
      </div>
      <div className="flex flex-col w-[90%] my-2">
        <label className="mx-1 text-lg text-gray-600">Country</label>
        <div className="m-1 border-2 border-jade-400 hover:border-jade-500 rounded-md transition-all">
          <select
            disabled
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            required={true}
            name="country"
            className="h-9 ml-1 outline-none px-2 py-2 w-[95%]"
          >
            <option value="iraq">Iraq</option>
          </select>
        </div>
      </div>
      <div className="flex flex-col w-[90%] my-2">
        <label className="mx-1 text-lg text-gray-600">City</label>
        <div className="m-1 border-2 border-jade-400 hover:border-jade-500 rounded-md transition-all">
          <select
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            required={true}
            name="city"
            className="h-9 ml-1 outline-none px-2 py-2 w-[95%]"
          >
            <option value="">Select City</option>
            <option value="city1">City 1</option>
            <option value="city2">City 2</option>
            {/* Add more options as needed */}
          </select>
        </div>
      </div>
      <div className="flex flex-col w-[90%] my-2">
        <label className="mx-1 text-lg text-gray-600">Neighborhood</label>
        <div className="m-1 border-2 border-jade-400 hover:border-jade-500 rounded-md transition-all">
          <input
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            required={true}
            type="text"
            name="neighborhood"
            className="h-9 ml-1 outline-none px-2 py-2 w-[95%]"
          />
        </div>
      </div>
      <div className="flex flex-col w-[90%] my-2">
        <label className="mx-1 text-lg text-gray-600">Street Number</label>
        <div className="m-1 border-2 border-jade-400 hover:border-jade-500 rounded-md transition-all">
          <input
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            required={true}
            type="number"
            name="streetNumber"
            className="h-9 ml-1 outline-none px-2 py-2 w-[95%]"
          />
        </div>
      </div>
      <div className="flex flex-col w-[90%] my-2">
        <label className="mx-1 text-lg text-gray-600">House Number</label>
        <div className="m-1 border-2 border-jade-400 hover:border-jade-500 rounded-md transition-all">
          <input
            onChange={(e) =>
              setFormData({ ...formData, [e.target.name]: e.target.value })
            }
            required={true}
            type="text"
            name="houseNumber"
            className="h-9 ml-1 outline-none px-2 py-2 w-[95%]"
          />
        </div>
      </div>
      {/* -------------------- submit button --------------------------------- */}
      <div className="flex justify-center w-[90%] my-4">
        <button
          //   onClick={handleSubmit}
          className="px-4 py-2 bg-jade-500 hover:bg-jade-600 text-white rounded-md transition-all w-full"
        >
          Submit
        </button>
      </div>
    </form>
  );
}

export default Secondpage;
