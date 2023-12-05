import { Form, Formik, useFormik } from 'formik';
import React, { useState } from 'react';
import * as Yup from 'yup';
import PreviewImage from './PreviewImage';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useGetCategorySubCategoryQuery } from '../../app/api/category';
import { useEffect } from 'react';
import { useGetCityQuery } from '../../app/api/city';
import { useAddProductUpdateMutation } from '../../app/api/products';
import { ToastContainer, toast } from 'react-toastify';
import { useUploadsMutation } from '../../app/api/profile';
import { useSelector } from 'react-redux';
function UpdateForm({ userId, data, onClose }) {
  console.log(data);
  const [uploadedImage, setUploadedImage] = useState(null);
  console.log('uploaded image', uploadedImage);
  const [subCategories, setSubCategories] = useState([]);
  const notify = () => toast('Update product!');
  const { data: category } = useGetCategorySubCategoryQuery();
  const { data: city } = useGetCityQuery();
  const language = useSelector((state) => state.language.language);
  const [
    uploadImage,
    { data: imageData, isSuccess: imageSuccess, isLoading: imageLoading },
  ] = useUploadsMutation();
  console.log(imageData, imageSuccess, imageLoading, 'image');
  const [updateProduct, { isSuccess: updateSuccess }] =
    useAddProductUpdateMutation();
  const formik = useFormik({
    initialValues: {
      id: data._id,
      owner: userId,
      name: data.name,
      phone: data.phone,
      category: data?.category[0],
      city: data?.city,
      address: data.address,
      images: data.images,
      description: data.description,
    },
    validationSchema: Yup.object({
      name: Yup.string().required('Required'),
      phone: Yup.string()
        .matches(/^[0-9]+$/, 'Please enter a valid phone number')
        .required('Required'),
      category: Yup.string().required('Required'),
      city: Yup.string().required('Required'),
      address: Yup.string().required('Required'),
      images: Yup.array()
        .required('Required')
        .test('fileType', 'Invalid file type', (value) => {
          if (!value) return true; // Allow empty values
          const acceptedExtensions = ['png', 'jpg', 'jpeg'];
          for (let i = 0; i < value.length; i++) {
            const fileExtension = value[i].split('.').pop().toLowerCase();
            if (!acceptedExtensions.includes(fileExtension)) {
              return false;
            }
          }

          return true;
        }),

      description: Yup.string().required('Required'),
    }),
    onSubmit: (values, { resetForm }) => {
      if (imageLoading) {
        if (imageSuccess) {
          updateProduct(values);
          resetForm();
        }
      } else {
        updateProduct(values);
        resetForm();
      }
    },
  });

  const handleImageUpload = async (event) => {
    const selectedImages = Array.from(event.currentTarget.files);
    const result = await uploadImage(selectedImages);

    if (result) {
      formik.setFieldValue('images', result?.data?.data); // Update formik values with new images
      setUploadedImage(result?.data?.data[0]); // Set the newly uploaded image for preview
    }
  };
  const subCategoryHandle = (e) => {
    const categoryId = e.target.value;
    const selectedCategory = category?.data.find(
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
  if (updateSuccess) {
    onClose(null);
  }
  useEffect(() => {
    if (updateSuccess) {
      toast.success('update product successfully!');
    }
  }, [updateSuccess]);

  return (
    <Formik>
      <Form onSubmit={formik.handleSubmit}>
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
        <div
          className="w-full flex flex-col items-center fixed top-24 left-0 sm:left-1/4 sm:w-2/4 lg:left-1/3 h-2/3  lg:w-1/3 
        overflow-y-auto shadow-lg  pb-10 bg-white px-2"
        >
          <div className="mt-5 mb-5  w-full flex justify-between px-2">
            <p className="flex text-neutral-600 font-semibold m-0 p-0">
              Update Product
            </p>
            <button type="button" onClick={() => onClose(null)}>
              <IoIosCloseCircleOutline className="w-7 h-7 text-neutral-600" />
            </button>
          </div>

          <div className="flex  mt-3 flex-col ">
            {/* /////////name////// */}
            <div className="flex flex-col">
              <label htmlFor="name" className="text-neutral-600 ">
                Product name:
              </label>
              <input
                className=" text-neutral-500 w-full pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green
                mt-2 px-1 py-2 hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500"
                name="name"
                placeholder="Product name"
                id="name"
                value={formik.values.name}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.name && formik.errors.name && (
                <p className="text-red-500 px-2">{formik.errors.name}</p>
              )}
            </div>
            {/* ///////phone////////// */}
            <div className="mt-2 flex flex-col">
              {' '}
              <label htmlFor="phone" className="text-neutral-600 ">
                Phone Number:
              </label>
              <input
                className=" text-neutral-500 w-full pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green
                mt-2 px-1 py-2 hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500"
                name="phone"
                placeholder="Phone number"
                id="phone"
                value={formik.values.phone}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.phone && formik.errors.phone && (
                <p className="text-red-500 px-2">{formik.errors.phone}</p>
              )}
            </div>
            {/* ///////al category// */}
            <div className="mt-3 flex flex-col">
              {' '}
              <label htmlFor="allcategory" className="text-neutral-600 ">
                Category
              </label>
              <select
                id="allcategory"
                name="allcategory"
                onChange={(e) => subCategoryHandle(e)}
                className=" text-neutral-500 w-full pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green
                mt-2 px-1 py-2 hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500"
              >
                <option value="">Select a category</option>
                {category?.data?.map((option) => (
                  <option key={option._id} value={option._id}>
                    {option.name}
                  </option>
                ))}
              </select>
            </div>
            {/* ////////subcategory//////// */}
            <div className="mt-3 flex flex-col">
              {' '}
              <label htmlFor="category" className="text-neutral-600 ">
                SubCategory
              </label>{' '}
              <select
                id="category"
                name="category"
                onChange={formik.handleChange}
                value={formik.values.category}
                className=" text-neutral-500 w-full pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green
                mt-2 px-1 py-2 hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500"
              >
                <option value="">Select a SubCategory</option>
                {subCategories?.map((option) => (
                  <option key={option.key} value={option.key}>
                    {option.props.children}
                  </option>
                ))}
              </select>
              {formik.touched.category && formik.errors.category && (
                <p className="text-red-500 px-2">{formik.errors.category}</p>
              )}
            </div>

            {/* //////////city ////////////////////////////////// */}
            <div className="mt-3 flex flex-col">
              {' '}
              <label htmlFor="city" className="text-neutral-600 ">
                City
              </label>
              <select
                id="city"
                name="city"
                onChange={formik.handleChange}
                value={formik.values.city}
                className=" text-neutral-500 w-full pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green 
                mt-2 px-1 py-2 hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500"
              >
                <option value="">Select a City</option>
                {city?.data?.map((option) => (
                  <option key={option._id} value={option._id}>
                    {option.name}
                  </option>
                ))}
              </select>{' '}
              {formik.touched.city && formik.errors.city && (
                <p className="text-red-500 px-2">{formik.errors.city}</p>
              )}
            </div>

            {/* ////////address/ */}
            <div className="mt-3 flex flex-col">
              {' '}
              <label htmlFor="address" className="text-neutral-600 ">
                Address:
              </label>
              <input
                className=" text-neutral-500 w-full pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green 
                mt-2 px-1 py-2 hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500"
                name="address"
                placeholder="Address"
                id="address"
                value={formik.values.address}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
              />
              {formik.touched.address && formik.errors.address && (
                <p className="text-red-500 px-2">{formik.errors.address}</p>
              )}
            </div>

            {/* //////////iamges//////////// */}
            <div className="mt-3 flex flex-col">
              {' '}
              <label htmlFor="images" className="text-neutral-600 ">
                Upload images:
              </label>
              <div
                className="w-full pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green
                 px-1 py-2 hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 h-[200px] "
              >
                <input
                  type="file"
                  id="images"
                  name="images"
                  onBlur={formik.handleBlur}
                  multiple
                  onChange={handleImageUpload}
                />

                {
                  <PreviewImage
                    files={formik.values.images}
                    images={data?.images}
                    uploadedImage={uploadedImage}
                  />
                }
              </div>
              {formik.touched.images && formik.errors.images && (
                <p className="text-red-500 px-2">{formik.errors.images}</p>
              )}
            </div>

            <div className="mt-3 flex flex-col">
              <label htmlFor="description" className="text-neutral-600 ">
                Description:
              </label>
              <textarea
                name="description"
                placeholder="Description"
                id="description"
                value={formik.values.description}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="w-full  pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green
                 px-1 py-2 hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 h-[200px]"
                // className="mx-2 hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 pl-3 rounded-sm border-gray-400 focus:outline-none focus:border-green outline-none p-1 border-2 text-neutral-600 w-full h-[200px]"
              />
              {formik.touched.description && formik.errors.description && (
                <p className="text-red-500 px-2">{formik.errors.description}</p>
              )}
            </div>
            <div onClick={() => notify}>
              <button
                disabled={imageLoading}
                type="submit"
                className="text-white bg-green py-2 w-full rounded-sm hover:bg-opacity-80 hover:duration-500 duration-500 mt-5 "
              >
                {imageLoading ? (
                  <span className="text-neutral-200">Loading</span>
                ) : (
                  'submit'
                )}
              </button>
            </div>
          </div>
        </div>{' '}
      </Form>
    </Formik>
  );
}

export default UpdateForm;
