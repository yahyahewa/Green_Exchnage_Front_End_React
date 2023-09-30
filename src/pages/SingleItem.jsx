// import React, { useState } from "react";
import { useParams } from 'react-router-dom';
import { CgCalendarDates } from 'react-icons/cg';
import { IoLocationSharp } from 'react-icons/io5';

import SingleItemSlider from '../components/SingleItemSlider/SingleItemSlider';
import { useGetSingleProductQuery } from '../app/api/products';
import { format } from 'date-fns';
import { Oval } from 'react-loader-spinner';
function SingleItem() {
  const { id } = useParams();
  const { data: singleProduct, isLoading } = useGetSingleProductQuery({ id });

  if (isLoading) {
    return (
      <p className="h-screen flex justify-center items-center">
        <Oval
          height={80}
          width={80}
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
    );
  }
  return (
    <>
      <section className="px-6 sm:px-12 lg:mx-26 md:px-20 flex text-neutral-500">
        <div className="py-32 grid lg:grid-cols-2 gap-5 lg:gap-x-10">
          {singleProduct?.data?.images?.length > 1 ? (
            <SingleItemSlider images={singleProduct?.data?.images} />
          ) : (
            <img
              alt={''}
              className="w-[600px] h-[600px] object-cover rounded"
              src="https://codecondo.com/wp-content/uploads/2016/11/Metasploit-The-Penetration-Testers-Guide-e1598449869321.png"
            />
          )}

          <div className="flex flex-col justify-between  ">
            <div className="flex flex-col sm:flex-row lg:flex-col justify-between sm:items-end lg:items-start">
              <div>
                <h1 className="font-semibold text-xl sm:text-2xl lg:text-3xl text-neutral-600 mt-5 sm:mt-0 whitespace-nowrap">
                  {singleProduct?.data?.name
                    ? singleProduct?.data?.name
                    : 'product name'}
                </h1>
                <p className="lg:text-xl font-semibold mt-2 py-2 px-4 bg-gray-50 w-fit">
                  {singleProduct?.data?.category[0]?.name}
                </p>
                <h2 className="lg:text-xl font-semibold mt-2">
                  {singleProduct?.data?.owner?.fullname}
                </h2>
              </div>

              <div className=" flex mt-5 sm:mt-0 lg:mt-5">
                <div className="flex items-center">
                  <CgCalendarDates className="w-6 h-6" />{' '}
                  <span className="ml-2">
                    {' '}
                    {format(
                      new Date(singleProduct?.data?.createdAt),
                      'yyyy-MM-dd',
                    )}
                  </span>
                </div>

                <div className="ml-5 flex items-center">
                  {' '}
                  <IoLocationSharp className="mr-2 w-5 h-5" />
                  <span className="">{singleProduct?.data?.city?.name}</span>
                  <span>-{singleProduct?.data?.address}</span>{' '}
                </div>
              </div>
            </div>
            <p className="mt-5 lg:mt-2">
              {singleProduct?.data?.description.slice(0, 1000)}
            </p>
            <div className="flex flex-col mt-5 lg:mt-0">
              <div className="flex ">
                <span>Owner Phone number :</span>

                <span> {singleProduct?.data?.phone}</span>
              </div>
              <div className="flex ">
                <span>employee phone number :</span>
                <span>0770 111 11 11</span>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default SingleItem;
