import { Link, Navigate } from 'react-router-dom';
import { useLoginMutation } from '../../app/api/auth';
import { useEffect } from 'react';
import * as Yup from 'yup';
import { Formik, Form, useFormik } from 'formik';
import InputField from '../InputField/InputField';
import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../../app/api/userSlice';
import { AiOutlineEyeInvisible, AiOutlineEye } from 'react-icons/ai';
function LoginForm() {
  const [login, { data, isError, isLoading, isSuccess }] = useLoginMutation();
  const [thereUSer, setThereUser] = useState('');
  const [showPassword, setShowPassword] = useState(false);
  const dispatch = useDispatch();
  const formik = useFormik({
    initialValues: {
      email: '',
      password: '',
    },
    onSubmit: (values, { resetForm }) => {
      login(values);

      resetForm({ values: '' });
    },
    validationSchema: Yup.object({
      email: Yup.string().email().required(),
      password: Yup.string().required(),
    }),
  });

  useEffect(() => {
    if (!isError && !isLoading && data) {
      data?.status == 'success'
        ? JSON.stringify(
            localStorage.setItem('userData', JSON.stringify(data?.data)),
          )
        : setThereUser('user not found');
    }
  }, [data, isError, isLoading]);
  if (isSuccess === true) {
    dispatch(addUser(true));
  }
  if (data?.status == 'success' && data?.data?.token)
    return <Navigate to="/profile" replace />;
  return (
    <Formik>
      <div className="w-full flex  flex-col items-center justify-center md:mt-28 mt-32 sm:mt-0">
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
              <span className="text-red-400 text-sm">
                {formik.errors.email}
              </span>
            ) : null}
          </div>

          <div className="mt-4 flex flex-col">
            <label className="text-gray-800 font-english">Password</label>
            <div
              className="w-full lg:w-80 2xl:w-96  pl-3 border-2 rounded-sm border-gray-400 focus:outline-none focus:border-green 
      mt-2 px-1 py-2 hover:border-gray-600 duration-500 hover:duration-500 focus:duration-500 flex justify-between items-center"
            >
              {' '}
              <input
                type={!showPassword ? 'password' : 'text'}
                name="password"
                placeholder="password"
                id="password"
                value={formik.values.password}
                onBlur={formik.handleBlur}
                onChange={formik.handleChange}
                className="focus:outline-none"
              />
              {showPassword ? (
                <button className="mr-2" onClick={() => setShowPassword(false)}>
                  <AiOutlineEyeInvisible className="w-6 h-6 text-neutral-500" />
                </button>
              ) : (
                <button className="mr-2" onClick={() => setShowPassword(true)}>
                  <AiOutlineEye className="w-6 h-6 text-neutral-500" />
                </button>
              )}
            </div>
            {/* <InputField
              name="password"
              placeholder="********"
              id="password"
              value={formik.values.password}
              onBlur={formik.handleBlur}
              onChange={formik.handleChange}
            /> */}
            {formik.touched.password && formik.errors.password ? (
              <div className="text-red-400 text-sm ">
                {formik.errors.password}
              </div>
            ) : null}
          </div>

          <p className="text-gray-800 text-sm mt-2">
            Dont have an account?{' '}
            <Link to="/signup" className="text-blue-500 ">
              Sign Up
            </Link>{' '}
          </p>
          <div className="mt-5">
            <button
              type="submit"
              disabled={isLoading}
              className="text-white bg-green py-2 w-full  rounded hover:bg-opacity-80 hover:duration-500 duration-500"
            >
              Login
            </button>
            <div className="text-red-400 text-sm mt-1">{thereUSer}</div>
          </div>
        </Form>
      </div>
    </Formik>
  );
}

export default LoginForm;
