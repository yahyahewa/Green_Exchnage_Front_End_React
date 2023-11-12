
import { Routes, Route } from 'react-router-dom';
import Navbar from '../../components/navbar/Navbar';
import Fotter from '../../components/Fotter/Fotter';
import { Oval } from 'react-loader-spinner';
import { Suspense, lazy } from 'react';
import Protect from '../../components/protect/Protect';

const Home = lazy(() => import('../Home'));
const Products = lazy(() => import('../Products'));
const SingleItem = lazy(() => import('../SingleItem'));
const Contact = lazy(() => import('../Contact'));
const Signup = lazy(() => import('../Singup'));
const Login = lazy(() => import('../Login'));
const Profile = lazy(() => import('../Profile'));
const NotFound = lazy(() => import('../../components/NotFound'));
const Router = () => {
  return (
    <div className="min-h-screen">
      <Navbar />
      <Suspense
        fallback={
          <p className="h-screen flex justify-center items-center">
            <Oval
              height={100}
              width={100}
              color="#4fa94d"
              wrapperStyle={{}}
              wrapperClass=""
              visible={true}
              ariaLabel="oval-loading"
              secondaryColor="#4fa94d"
              strokeWidth={2}
              strokeWidthSecondary={2}
            />
          </p>
        }
      >
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/products" element={<Products />} />
          <Route path="/products/:id" element={<SingleItem />} />
          <Route path="/contact" element={<Contact />} />
          <Route element={<Protect type="reg" />}>
          <Route path="/signup" element={<Signup />} />
          <Route path="/login" element={<Login />} />
          </Route>
          <Route element={<Protect type="acc" />}>
          <Route path="/profile" element={<Profile />} />
          </Route>
          <Route path="*" element={<NotFound />} />
        </Routes>
      </Suspense>
      <Fotter />
    </div>
  );
};

export default Router;
