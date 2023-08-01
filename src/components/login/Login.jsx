import { Link,Navigate } from 'react-router-dom';
import { useLoginMutation } from '../../app/api/auth';
import { useEffect, useState } from 'react';
function SignInPage() {
    const [formData,setFormData]=useState({});
    const [login,{data,isErro,isLoading}]=useLoginMutation();
    const handleInputChange = (e) => {
      setFormData({ ...formData, [e.target.name]: e.target.value });
    };
    const handleSubmite=(e)=>{
    e.preventDefault();
    login(formData);
    }
    useEffect(()=>{
        if(!isErro && !isLoading && data){
         JSON.stringify(localStorage.setItem("userData",JSON.stringify(data?.data)));
        }
    },[data])
    
    if (data && data?.data?.token)return <Navigate to={"/profile"} replace />;
  return (
    <div>
      <section className="bg-gray-50 dark:bg-gray-900">
        <div className="flex flex-col items-center justify-center px-6 py-8 mx-auto md:h-screen lg:py-0">
          <div className="w-full bg-white rounded-lg shadow dark:border md:mt-0 sm:max-w-md xl:p-0 dark:bg-gray-800 dark:border-gray-700">
            <div className="p-6 space-y-4 md:space-y-6 sm:p-8">
              <h1 className="text-xl font-bold leading-tight tracking-tight text-gray-900 md:text-2xl dark:text-white">
                Sign in to your account
              </h1>
              <p className="text-gray-600 dark:text-gray-400">
                Welcome back. Enter your credentials to access your account
              </p>
              <form onSubmit={handleSubmite} className="space-y-4 md:space-y-6" action="#">
                <div>
                    {/* ------------------- email feild ---------------------------- */}
                  <label htmlFor="email" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Your email
                  </label>
                  <input
                  onChange={handleInputChange}
                    type="email"
                    name="email"
                    id="email"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    placeholder="name@company.com"
                    required=""
                  />
                </div>
                <div>
                    {/* ------------------- password feild ---------------------------- */}
                  <label htmlFor="password" className="block mb-2 text-sm font-medium text-gray-900 dark:text-white">
                    Password
                  </label>
                  <input
                  onChange={handleInputChange}
                    type="password"
                    name="password"
                    placeholder="••••••••"
                    className="bg-gray-50 border border-gray-300 text-gray-900 sm:text-sm rounded-lg focus:ring-primary-600 focus:border-primary-600 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
                    required=""
                  />
                </div>
                <div className="flex items-center justify-between">
                  <div className="flex items-start">
                    <div className="flex items-center h-5">
                      <input
                        id="remember"
                        aria-describedby="remember"
                        type="checkbox"
                        className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3"
                        required=""
                      />
                    </div>
                    <div className="ml-3 text-sm">
                      <label htmlFor="remember" className="text-gray-500 dark:text-gray-300">
                        Keep me signed in
                      </label>
                    </div>
                  </div>
                  <Link to="/forgot-password" className="text-sm font-medium text-[#00AA7A] hover:underline dark:text-[#00674a]">
                    Forgot password?
                  </Link>
                </div>
                <button
                disabled={isErro?true:isLoading?true:false}
                  type="submit"
                  className={`w-full text-white  ${isErro ? 'bg-jade-200':isLoading?' bg-jade-200':' bg-jade-500 hover:bg-jade-600 '} focus:ring-4 focus:outline-none focus:ring-primary-300
                   font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-primary-600 dark:hover:bg-primary-700 dark:focus:ring-primary-800`}
                >
                  Sign in
                </button>
                <p className="text-sm font-light text-gray-500 dark:text-gray-400">
                  Don’t have an account yet?{' '}
                  <Link to="/signup" className="font-medium text-[#00AA7A] hover:underline dark:text-[#00674a]">
                    Sign up
                  </Link>
                </p>
              </form>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

export default SignInPage;
