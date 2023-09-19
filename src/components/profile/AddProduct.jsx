import { useState, useEffect } from 'react';
import {
  useAddProductMutation,
  useUploadsMutation,
} from '../../app/api/profile';
import { useGetCityQuery } from '../../app/api/city';
import { useGetCategorySubCategoryQuery } from '../../app/api/category';
import "./profile.style.css"

function AddProduct() {
  const [
    addProduct,
    { isError: addError, isLoading: addLoading },
  ] = useAddProductMutation();
  const [
    uploadImage,
    { data: imageData, isError: imageError, isLoading: imageLoading },
  ] = useUploadsMutation();
  const { data: catData } = useGetCategorySubCategoryQuery();
  const { data: cityData } = useGetCityQuery();
  const [images, setImages] = useState([]);
  const [imageFile, setImageFile] = useState([]);
  const [subCategories, setSubCategories] = useState([]);
  const [canAdd, setCanAdd] = useState(false);

  // Retrieve user info from localStorage
  const userInfo = JSON.parse(localStorage.getItem('userData')) || {};

  const [formData, setFormData] = useState({
    owner: userInfo?.data?._id,
    name: '',
    phone: '',
    category: '',
    city: '',
    address: '',
    images: [],
    description: '',
  });

  // Handle image upload
  const handleImageUpload = (e) => {
    const files = e.target.files;
    const allowedExtensions = ['jpg', 'jpeg', 'png'];

    // Check file extensions
    for (let i = 0; i < files.length; i++) {
      const file = files[i];
      const fileNameParts = file.name.split('.');
      const fileExtension =
        fileNameParts[fileNameParts.length - 1].toLowerCase();

      if (!allowedExtensions.includes(fileExtension)) {
        alert('Please upload only jpg, jpeg, and png files.');
        return; // Stop processing if an invalid file is found
      }
    }

    // Convert files to an array and set it in state
    setImageFile((prevImageFile) => [...prevImageFile, ...Array.from(files)]);

    // Process valid files
    for (let i = 0; i < files.length; i++) {
      const reader = new FileReader();

      reader.onload = (e) => {
        setImages((prevImages) => [...prevImages, e.target.result]);
      };
      reader.readAsDataURL(files[i]);
    }
  };

  // Handle removing images
  const removeImage = (e) => {
    const targetId = parseInt(e.target.id);

    // Remove item from imageFile and images arrays
    const updatedImageFile = imageFile.filter((_, index) => index !== targetId);
    const updatedImages = images.filter((_, index) => index !== targetId);

    setImageFile(updatedImageFile);
    setImages(updatedImages);
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    uploadImage(imageFile);
  };

  // Handle image upload response
  useEffect(() => {
    if (!imageError && !imageLoading && imageData?.status === 'success') {
      setFormData({ ...formData, images: imageData.data });
      setCanAdd(true);
    }
  }, [imageData, imageError, imageLoading]);

  // Handle adding product after image upload
  useEffect(() => {
    if (
      !imageError &&
      !imageLoading &&
      imageData?.status === 'success' &&
      canAdd
    ) {
      addProduct(formData);
      setFormData({
        owner: userInfo?.data._id,
        name: '',
        phone: '',
        category: '',
        city: '',
        address: '',
        images: [],
        description: '',
      });
      setImages([]);
      setImageFile([]);
      setCanAdd(false);
    }
  }, [formData.images]);

  // Handle form data changes
  const handleFormData = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  // Handle subcategory selection
  const subCategoryHandle = (e) => {
    const categoryId = e.target.value;
    const selectedCategory = catData?.data.find(
      (category) => category._id === categoryId,
    );

    if (selectedCategory) {
      const subCategoryOptions = selectedCategory.subCategory.map((value) => (
        <option key={value._id} value={value._id}>
          {value.name}
        </option>
      ));
      setSubCategories(subCategoryOptions);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-[2000px]
       flex flex-wrap justify-center 
       md:justify-between gap-x-2 
       gap-y-4 my-10"
    >
      {/* Product Name */}
      <div className="mt-1 w-full lg:w-[49%]">
        <label
          htmlFor="name"
          className="labels"
        >
          Product Name
        </label>
        <input
        id='name'
          value={formData.name}
          required={true}
          name="name"
          onChange={handleFormData}
          type="text"
          className="inputs outline-none"
        />
      </div>

      {/* Phone Number */}
      <div className="mt-1 w-full lg:w-[49%]">
        <label
          htmlFor="phoneNumber"
          className="labels"
        >
          Phone Number
        </label>
        <input
        id='phoneNumber'
          required={true}
          name="phone"
          value={formData.phone}
          onChange={handleFormData}
          type="tel"
          className="inputs outline-none"
        />
      </div>

      {/* Category */}
      <div className="mt-1 w-full lg:w-[49%]">
        <label
          htmlFor="category"
          className="labels"
        >
          Category
        </label>
        <select
        id='category'
          disabled={!catData}
          onChange={subCategoryHandle}
          required={true}
          className={`duration-500 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm focus:outline-none outline-none w-full text-neutral-600 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block px-1 py-2 ${
            catData
              ? 'hover:border-gray-600 focus:border-green border-gray-400'
              : 'bg-neutral-100'
          }`}
        >
          <option value="">Select category</option>
          {catData?.data.map((value) => (
            <option key={value._id} value={value._id}>
              {value.name}
            </option>
          ))}
        </select>
      </div>

      {/* Subcategory */}
      <div className="mt-1 w-full lg:w-[49%]">
        <label
          htmlFor="subcategory"
          className="labels"
        >
          Subcategory
        </label>
        <select
        id='subcategory'
          onChange={handleFormData}
          name="category"
          disabled={!catData}
          required={true}
          className={`duration-500 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm focus:outline-none outline-none w-full text-neutral-600 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block px-1 py-2 ${
            catData
              ? 'hover:border-gray-600 focus:border-green border-gray-400'
              : 'bg-neutral-100'
          }`}
        >
          <option value="">Select subcategory</option>
          {subCategories}
        </select>
      </div>

      {/* City */}
      <div className="mt-1 w-full lg:w-[49%]">
        <label
          htmlFor="city"
          className="labels"
        >
          City
        </label>
        <select
        id='city'
          name="city"
          onChange={handleFormData}
          disabled={!cityData}
          required={true}
          className={`duration-500 hover:duration-500 focus:duration-500 pl-3 border-2 rounded-sm focus:outline-none outline-none w-full text-neutral-600 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block px-1 py-2 ${
            cityData
              ? 'hover:border-gray-600 focus:border-green border-gray-400'
              : 'bg-neutral-100'
          }`}
        >
          <option value="">Select City</option>
          {cityData?.data.map((value) => (
            <option key={value._id} value={value._id}>
              {value.name}
            </option>
          ))}
        </select>
      </div>

      {/* Address */}
      <div className="mt-1 w-full lg:w-[49%]">
        <label
          htmlFor="address"
          className="labels"
        >
          Address
        </label>
        <input
        id='address'
          required={true}
          value={formData.address}
          name="address"
          onChange={handleFormData}
          type="text"
          className="inputs outline-none"
        />
      </div>

      {/* Images */}
      <div className="mt-1 w-full lg:w-[49%] h-[200px] overflow-hidden">
        <label
          htmlFor="image"
          className="labels"
        >
          Images
        </label>
        <div className="border-2 border-gray-400 w-[100%] h-[165px]">
          {images.length !== 0 && (
            <div className="overflow-auto p-1 flex flex-wrap justify-start gap-1 w-[100%] h-[110px]">
              {/* Image show */}
              {images.map((image, index) => (
                <div
                  key={index}
                  className="w-16 h-16 rounded-md overflow-hidden relative"
                >
                  <svg
                    onClick={removeImage}
                    id={index}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    strokeWidth={1.5}
                    stroke="currentColor"
                    className="w-5 h-5 absolute rounded-md p-[2px] bg-red-600 text-white left-[2px] right-[2px]"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                    />
                  </svg>
                  <img
                    key={index}
                    src={image}
                    className="w-full h-full"
                    alt={`Image ${index}`}
                  />
                </div>
              ))}
            </div>
          )}
          <input
            multiple={true}
            required={true}
            onChange={handleImageUpload}
            type="file"
            name="image"
            id="image"
            className="hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3 rounded-sm border-gray-400 focus:outline-none focus:border-green bg-gray-50 text-neutral-600 sm:text-sm focus:ring-primary-600 focus:border-primary-600 block px-1 py-2 w-full mt-1"
          />
        </div>
      </div>

      {/* Description */}
      <div className="mt-1 w-full lg:w-[49%] h-[200px] overflow-hidden">
        <label
          htmlFor="description"
          className="labels"
        >
          Description
        </label>
        <textarea
        id='description'
          required={true}
          name="description"
          onChange={handleFormData}
          value={formData.description}
          className="hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3 rounded-sm border-gray-400 focus:outline-none focus:border-green outline-none p-1 border-2 text-neutral-600 w-[100%] h-[165px]"
        ></textarea>
      </div>

      <button
        className={`mt-3 outline-none text-white bg-jade-700 
        font-medium 
        rounded px-1 py-2  text-center flex justify-center 
        gap-x-2 w-full lg:w-[49%] ${
          imageError || imageLoading || addError || addLoading
            ? 'opacity-40'
            : ''
        }`}
        disabled={imageError || imageLoading || addError || addLoading}
      >
        Add
      </button>
    </form>
  );
}

export default AddProduct;
