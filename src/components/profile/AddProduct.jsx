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
    <div className="w-full">
      <form onSubmit={handleSubmit} className="grid justify-center items-start
       grid-cols-1 lg:grid-cols-2 pb-6 h-screen">
        {/* --------------------- name --------------------- */}
        <div className="mt-1">
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
        <div className="mt-1">
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
        <div className="mt-1">
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
        <div className="mt-1">
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
        <div className="mt-1">
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
        {/* --------------------- image show --------------------- */}
        <div className="mt-1">
          <label
            htmlFor="image"
            className="block mb-2 text font-medium text-gray-900 "
          >
            Images
          </label>
          {images.length !== 0 && (
            <div className="w-full border rounded-md outline-none p-1 flex flex-wrap justify-start gap-1">
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
          {/* --------------------- upload image --------------------- */}
          <input
            multiple={true}
            required={true}
            onChange={handleImageUpload}
            type="file"
            name="image"
            className="hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green   bg-1ray-50 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block px-1 py-2 "
          />
        </div>
        {/* --------------------- category --------------------- */}
        <div className="mt-1">
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
            className=" hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green   ou1line-none h-20 p-1   text-gray-900 "
          ></textarea>
        </div>

        <button
          className={`mt-10 outline-none text-white bg-green font-medium rounded px-1 py-2 h-fit text-center flex justify-center items-center gap-x-2`}
        >
          Add
        </button>
      </form>
    </div>
  );
}

export default AddProduct;
