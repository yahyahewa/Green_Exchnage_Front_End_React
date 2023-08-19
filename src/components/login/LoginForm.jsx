import { Link, Navigate } from "react-router-dom";
import { useLoginMutation } from "../../app/api/auth";
import { useEffect } from "react";
import * as Yup from "yup";
import { Formik, Form, useFormik } from "formik";
import InputField from "../InputField/InputField";

function LoginForm() {
  const [login, { data, isError, isLoading }] = useLoginMutation()
  console.log(data)
  const formik = useFormik({
    initialValues: {
      email: "",
      password: "",
    },
    onSubmit: (values, { resetForm }) => {
      // console.log(values)
      login(values)
      resetForm({ values: "" });
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
  });
  // const [formData, setFormData] = useState({});
  // const [login, { data, isErro, isLoading }] = useLoginMutation();
  // const handleInputChange = (e) => {
  //   setFormData({ ...formData, [e.target.name]: e.target.value });
  // };
  // const handleSubmite = (e) => {
  //   e.preventDefault();
  //   login(formData);
  // };
  useEffect(() => {
    if (!isError && !isLoading && data) {
      JSON.stringify(
        localStorage.setItem("userData", JSON.stringify(data?.data))
      );
    }
  }, [data, isError, isLoading]);

  if (data && data?.data?.token) return <Navigate to="/" replace />;
  return (
        <Formik >
        <div className="w-full flex  flex-col items-center justify-center mt-28">
          <p className="font-semibold text-lg text-gray-800 ">Log In </p>
        <Form
          onSubmit={formik.handleSubmit}
          className="grid grid-cols-1 mb-10 w-full lg:w-fit"
          >
            <div className="flex flex-col ">
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
          
<p className="text-gray-800 text-sm mt-2"  >Dont have an account? <Link to="/signup" className="text-blue-500 ">Sign Up</Link> </p>
          <div className="mt-5">
            {" "}
            <button type="submit" className="text-white bg-green py-2 w-full  rounded hover:bg-opacity-80 hover:duration-500 duration-500">submit </button>
              
          </div>
        </Form>
      </div>
    </Formik>
  
    // <div className="grid grid-cols-2">
    //   <div></div>
    //   <section className=" dark:bg-gray-900">
    //     <div className="flex flex-col items-center justify-center">
    //       <div className="dark:bg-gray-800 dark:border-gray-700">
    //         <div className="">
    //           <h1 className="">
    //             Sign in 
    //           </h1>
    //           <p className="">
    //             Welcome back. Enter your credentials to access your account
    //           </p>
    //           <form
    //             onSubmit={handleSubmite}
    //             className=""
    //             action="#"
    //           >
    //             <div>
    //               {/* ------------------- email feild ---------------------------- */}
    //               <label
    //                 htmlFor="email"
    //                 className="font-semibold text-gray-800 my-1"
    //               >
    //                Email
    //               </label>
    //               <input
    //                 onChange={handleInputChange}
    //                 type="email"
    //                 name="email"
    //                 id="email"
    //                 className="text-gray-800 p-2 w-full outline-none border-2 rounded border-gray-200 focus:border-green focus:outline-none active:outline-none"
    //                 placeholder="name@company.com"
    //                 required=""
    //               />
    //             </div>
    //             <div className="flex flex-col">
    //               {/* ------------------- password feild ---------------------------- */}
    //               <label
    //                 htmlFor="password"
    //                 className="font-semibold text-gray-800 my-1"
    //               >
    //                 Password
    //               </label>
    //               <input
    //                 onChange={handleInputChange}
    //                 type="password"
    //                 name="password"
    //                 placeholder="••••••••"
    //                 className="text-gray-800 p-2 w-full outline-none border-2 rounded border-gray-200 focus:border-green focus:outline-none active:outline-none"
    //                 required=""
    //               />
    //             </div>
    //             <div className="flex items-center justify-between">
    //               <div className="flex items-start">
    //                 <div className="flex items-center h-5">
    //                   <input
    //                     id="remember"
    //                     aria-describedby="remember"
    //                     type="checkbox"
    //                     className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3"
    //                     required=""
    //                   />
    //                 </div>
    //                 <div className="ml-3 text-sm">
    //                   <label
    //                     htmlFor="remember"
    //                     className="text-gray-500 dark:text-gray-300"
    //                   >
    //                     Keep me signed in
    //                   </label>
    //                 </div>
    //               </div>
    //               <Link
    //                 to="/forgot-password"
    //                 className="text-sm font-medium text-[#00AA7A] hover:underline dark:text-[#00674a]"
    //               >
    //                 Forgot password?
    //               </Link>
    //             </div>
    //             <button
    //               disabled={isErro ? true : isLoading ? true : false}
    //               type="submit"
    //               className={`w-full text-white  ${
    //                 isErro
    //                   ? "bg-jade-200"
    //                   : isLoading
    //                   ? " bg-jade-200"
    //                   : " bg-jade-500 hover:bg-jade-600 "
    //               } focus:ring-4 focus:outline-none focus:ring-primary-300
    //                font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
    //             >
    //               {isErro ? (
    //                 <div className="flex items-center justify-center">
    //                   <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-jade-700 border-solid"></div>
    //                 </div>
    //               ) : isLoading ? (
    //                 <div className="flex items-center justify-center">
    //                   <div className="animate-spin rounded-full h-5 w-5 border-t-2 border-jade-700 border-solid"></div>
    //                 </div>
    //               ) : (
    //                 "Sign in"
    //               )}
    //             </button>
    //             <p className="text-sm font-light text-gray-500 dark:text-gray-400">
    //               Don’t have an account yet?
    //               <Link
    //                 to="/signup"
    //                 className="font-medium text-[#00AA7A] hover:underline dark:text-[#00674a]"
    //               >
    //                 Sign up
    //               </Link>
    //             </p>
    //           </form>
    //         </div>
    //       </div>
    //     </div>
    //   </section>
    // </div>
  );
}

export default LoginForm;
