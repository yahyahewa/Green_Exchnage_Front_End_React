import {useEffect} from 'react'
import * as Yup from "yup";
import { Formik, Form, useFormik } from "formik";
import InputField from '../InputField/InputField';
import { useSignupMutation } from '../../app/api/auth';
import { Navigate } from 'react-router';
function SignUpForm() {
  
  const [signup,{data,isError,isLoading}]=useSignupMutation()
   const formik = useFormik({
     initialValues: {
      fullname:"",
      email: "",
      password: "",
    },
    onSubmit: (values) => {
      signup(values)
   
    },
     validationSchema: Yup.object({
      fullname: Yup.string().required(),
      email: Yup.string().email().required(),
      password: Yup.string().required().min(8),
    }),
  });


  useEffect(() => {
    if (!isError && !isLoading && data) {
      JSON.stringify(
        localStorage.setItem("userData", JSON.stringify(data?.data))
      );
    }
  }, [data, isError, isLoading]);

  if (data && data?.data?.token) return <Navigate to={"/"} replace />;
  
  return (
    <Formik >
        <div className="w-full flex  flex-col items-center justify-center mt-28">
          <p className="font-semibold text-lg text-gray-800 ">Create Account </p>
        <Form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 mb-10 w-full lg:w-fit"
        >
             <div className="flex flex-col mt-5">
              <label className="text-gray-800 font-english">Full name</label>
              <InputField
            name="fullname"
            placeholder="your name"
            id="fullname"
            value={formik.values.fullname}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
              />
              {formik.touched.fullname && formik.errors.fullname ? (
            <span className="text-red-400 text-sm">{formik.errors.fullname}</span>
            ) : null}
            </div>
         
            <div className="flex flex-col mt-4">
              <label className="text-gray-800 font-english">Email</label>
              <InputField
            name="email"
            placeholder="Example@gmail.com"
            id="email"
            value={formik.values.email}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
              />
              {formik.touched.email && formik.errors.email ? (
            <span className="text-red-400 text-sm">{formik.errors.email}</span>
            ) : null}
            </div>
         
           
          
        
            <div className="mt-4 flex flex-col">
              <label className="text-gray-800 font-english">Password</label>
          <InputField
            name="password"
            placeholder="********"
            id="password"
            value={formik.values.password}
            onBlur={formik.handleBlur}
            onChange={formik.handleChange}
          />
          {formik.touched.password && formik.errors.password ? (
            <div className="text-red-400 text-sm ">
              {formik.errors.password}
            </div>
          ) : null}</div>
          

          <div className="mt-5">
            {" "}
            <button type="submit" className="text-white bg-green py-2 w-full  rounded hover:bg-opacity-80 hover:duration-500 duration-500">Create </button>
              
          </div>
        </Form>
      </div>
    </Formik>
  )
}

export default SignUpForm
