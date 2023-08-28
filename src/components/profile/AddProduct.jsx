import { useState, useEffect } from "react";
import {
  useUploadsMutation,
  useAddProductMutation,
} from "../../app/api/profile";
import { useGetCategorySubCategoryQuery } from "../../app/api/category";

function AddProduct() {
  const [
    addProduct,
    { data: prdData, isError: prdError, isLoading: prdLoading },
  ] = useAddProductMutation();
  let userInfo = {};
  if (
    localStorage.getItem("userData") &&
    localStorage.getItem("userData") != undefined
  ) {
    userInfo = JSON.parse(localStorage.getItem("userData"));
  }
  const [formData, setFormData] = useState({
    owner: userInfo?.data._id,
  });
  const [images, setImages] = useState([]);
  const [uploadImage, { data: UploadImage }] = useUploadsMutation();
  const { data: catData } = useGetCategorySubCategoryQuery();
  const [subCategories, setSubCategories] = useState();

  ///------------- make subcategory -------------///
  const subCategoryHandl = (e) => {
    let a;
    for (let i = 0; i < catData?.data.length; i++) {
      if (catData?.data[i]._id == e.target.value)
        a = catData.data[i].subCategory;
    }
    if (a) {
      const b = a.map((value) => {
        return (
          <option key={value._id} value={value._id}>
            {value.name}
          </option>
        );
      });
      setSubCategories(b);
    }
  };
  ///------------- handle data -------------///
  useEffect(() => {
    if (UploadImage?.status === "success") {
      setFormData({ ...formData, images: UploadImage?.data });
    }
  }, [UploadImage]);
  ///------------- handle data -------------///
  useEffect(() => {
    if (prdData?.status == "success") {
      setFormData({ owner: userInfo?.data._id });
      setImages([]);
    }
  }, [prdData]);
  ///------------- handle upload -------------///
  const handleImageUpload = (e) => {
    setImages([]);
    uploadImage(e.target.files);
    setFormData({ ...formData, image: e.target.files });
    const files = e.target.files;
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImages((prev) => [...prev, e.target.result]);
      };
      reader.readAsDataURL(files[i]);
    }
  };
  ///------------- handle submit -------------///
  const handleSubmit = (e) => {
    e.preventDefault();
    addProduct(formData);
  };

  ///------------- handle data -------------///
  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  ///------------- returen -------------///
  return (
      <form onSubmit={handleSubmit} className="w-full max-w-[2000px] flex flex-wrap justify-center md:justify-around gap-x-2 gap-y-4 my-10">
        {/* --------------------- name --------------------- */}
        <div className="mt-1 w-full lg:w-[45%]">
          <label
            htmlFor="name"
            className="block mb-2 text font-medium text-gray-900 "
          >
            Product Name
          </label>
          <input
            required={true}
            name="name"
            onChange={handleFormData}
            type="text"
            className=" hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500  pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green  outline-none w-full   text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block px-1 py-2 "
          />
        </div>
        {/* --------------------- phone --------------------- */}
        <div className="mt-1 w-full lg:w-[45%]">
          <label
            htmlFor="phoneNumber"
            className="block mb-2 text font-medium text-gray-900 "
          >
            Phone Number
          </label>
          <input
            required={true}
            name="phone"
            onChange={handleFormData}
            type="tel"
            className="hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green  outline-none w-full   text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block px-1 py-2"
          />
        </div>
        {/* --------------------- category --------------------- */}
        <div className="mt-1 w-full lg:w-[45%]">
          <label
            htmlFor="category"
            className="block mb-2 text font-medium text-gray-900 "
          >
            Category
          </label>
          <select
            onChange={subCategoryHandl}
            required={true}
            className="hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green  outline-none w-full   text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block px-1 py-2 "
          >
            <option value="">Select category</option>
            {catData?.data.map((value) => (
              <option key={value._id} value={value._id}>
                {value.name}
              </option>
            ))}
          </select>
        </div>
        {/* --------------------- subCategory --------------------- */}
        <div className="mt-1 w-full lg:w-[45%]">
          <label
            htmlFor="category"
            className="block mb-2 text font-medium text-gray-900 "
          >
            Subcategory
          </label>
          <select
            onChange={handleFormData}
            name="category"
            required={true}
            className="hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green  outline-none w-full   text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block px-1 py-2 "
          >
            <option value="">Select subcategory</option>
            {subCategories}
          </select>
        </div>
        {/* --------------------- city --------------------- */}
        <div className="mt-1 w-full lg:w-[45%]">
          <label
            htmlFor="address"
            className="block mb-2 text font-medium text-gray-900 "
          >
            City
          </label>
          <input
            required={true}
            name="city"
            onChange={handleFormData}
            type="text"
            className="hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green  outline-none w-full   text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block px-1 py-2 "
          />
        </div>
        {/* --------------------- address --------------------- */}
        <div className="mt-1 w-full lg:w-[45%]">
          <label
            htmlFor="address"
            className="block mb-2 text font-medium text-gray-900 "
          >
            Address
          </label>
          <input
            required={true}
            name="address"
            onChange={handleFormData}
            type="text"
            className="hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green  outline-none w-full   text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block px-1 py-2 "
          />
        </div>
        {/* --------------------- image --------------------- */}
        <div className="mt-1 w-full lg:w-[45%] h-[200px] overflow-hidden">
          <label
            htmlFor="image"
            className="block mb-2 text font-medium text-gray-900 "
          >
            Images
          </label><div className="border-2 border-gray-400 w-[100%] h-[165px]">
  {images.length !== 0 && (
    <div className="overflow-auto p-1 flex flex-wrap justify-start gap-1 w-[100%] h-[110px]">
      {/* --------------------- image show --------------------- */}
      {images.map((image, index) => (
        <img
          key={index}
          src={image}
          className="w-16 h-16 rounded-md"
          alt={`Image ${index}`}
        />
      ))}
    </div>
  )}
  <input
    multiple={true}
    required={true}
    onChange={handleImageUpload}
    type="file"
    name="image"
    className="hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3 rounded-sm
    border-gray-400 focus:outline-none focus:border-green bg-gray-50 text-gray-900 sm:text-sm
    focus:ring-primary-600 focus:border-primary-600 block px-1 py-2 w-full mt-1"
  />
</div>

        </div>
        {/* --------------------- description --------------------- */}
        <div className="mt-1 w-full lg:w-[45%] h-[200px] overflow-hidden">
          <label
            htmlFor="description"
            className="block mb-2 text font-medium text-gray-900 "
          >
            Description
          </label>
          <textarea
            required={true}
            name="description"
            onChange={handleFormData}
            className=" hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3
             rounded-sm border-gray-400 focus:outline-none focus:border-green ou1line-none p-1 border-2 text-gray-900 w-[100%] h-[165px]"
          ></textarea>
        </div>

        <button
          className={`mt-3 outline-none text-white bg-green font-medium rounded px-1 py-2 h-fit text-center flex justify-center items-center gap-x-2 w-full lg:w-[50%] `}
        >
          Add
        </button>
      </form>
  );
}

export default AddProduct;
