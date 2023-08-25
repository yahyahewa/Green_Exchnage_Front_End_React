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
  const [loading, setLoading] = useState(false);
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
    <div className="w-full lg:mx-36 pl-40">
      <p>Add Product</p>
      {/* <div className="flex flex-col  px-6 py-8 lg:py-0"> */}
      {/* <div className="w-full   md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700"> */}
      <form onSubmit={handleSubmit} className="grid grid-cols-2 pb-6 ">
        <div className="w-96 mt-4">
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
            className=" hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500  pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green  outline-none w-full   text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block px-1 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-green dark:focus:border-green"
          />
        </div>
        <div className="w-96 mt-4">
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
            className="hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green  outline-none w-full   text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block px-1 py-2 dark:bg-gray-700 dark:border-gray-400   dark:focus:ring-green dark:focus:border-green"
          />
        </div>
        <div className="w-96 mt-4">
          <label
            htmlFor="category"
            className="block mb-2 text font-medium text-gray-900 "
          >
            Category
          </label>
          <select
            onChange={subCategoryHandl}
            required={true}
            className="hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green  outline-none w-full   text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block px-1 py-2 dark:bg-gray-700 dark:border-green dark:placeholder-gray-400  dark:focus:ring-green dark:focus:border-green"
          >
            <option value="">Select category</option>
            {catData?.data.map((value) => (
              <option key={value._id} value={value._id}>
                {value.name}
              </option>
            ))}
          </select>
        </div>
        <div className="w-96 mt-4">
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
            className="hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green  outline-none w-full   text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block px-1 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-green dark:focus:border-green"
          >
            <option value="">Select subcategory</option>
            {subCategories}
          </select>
        </div>
        <div className="w-96 mt-4">
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
            className="hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green  outline-none w-full   text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block px-1 py-2 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400  dark:focus:ring-green dark:focus:border-green"
          />
        </div>
        <div className="w-96 mt-4">
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
          <input
            multiple={true}
            required={true}
            onChange={handleImageUpload}
            type="file"
            name="image"
            className="hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green   w-96 bg-gray-50 text-gray-900 sm:text-sm  focus:ring-primary-600 focus:border-primary-600 block px-1 py-2 dark:bg-gray-700 dark:border-gray-400 dark:hover:placeholder-gray-600  dark:focus:ring-green dark:focus:border-green"
          />
        </div>
        <div className="w-96 mt-4">
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
            className=" hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green  w-96  outline-none h-20 p-1   text-gray-900 dark:bg-gray-700 dark:border-gray-600 resize-none dark:placeholder-gray-400  dark:focus:ring-green dark:focus:border-green"
          ></textarea>
        </div>

        <button
          className={`w-96 mt-20 outline-none text-white ${
            loading ? "bg-jade-200" : "bg-jade-600"
          } font-medium rounded px-1 py-2 h-fit text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800 flex justify-center items-center gap-x-2`}
          onClick={() => setLoading((prevLoading) => !prevLoading)}
        >
          {!loading ? (
            <span>Add</span>
          ) : (
            <div className="flex items-center justify-center animate-spin rounded-full h-6 w-6 border-t-2 border-jade-700 border-solid"></div>
          )}
        </button>
      </form>
    </div>
    // </div>
    // </div>
  );
}

export default AddProduct;
