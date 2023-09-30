import React, { useEffect } from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Mousewheel, Autoplay } from 'swiper/modules';
import { useActiveUserQuery } from '../../app/api/home';
import CircularProgress from '@mui/material/CircularProgress';

const SliderComponent = () => {
  const { data, isError, isLoading } = useActiveUserQuery(3);

  if (isLoading) {
    return (
      <div className="flex flex-col justify-center items-center pt-10">
        <CircularProgress color="success" />
      </div>
    );
  }

  if (isError) {
    return (
      <div className="flex flex-col gap-8 justify-center items-center text-red-700 text-xl">
        Something went wrong!
      </div>
    );
  }

  if (data) {
    return (
      <Swiper
        spaceBetween={30}
        centeredSlides={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        pagination={{
          bullet: {
            backgroundColor: 'green',
          },
          clickable: true,
        }}
        modules={[Mousewheel, Pagination, Autoplay]}
        className="mySwiper"
        navigation={true}
      >
        {data.data &&
          data.data.map((items) => {
            const { fullname, image, _id, product } = items;

            return (
              <SwiperSlide key={_id}>
                <div className="flex flex-col pb-4 justify-center items-center gap-2 pt-4">
                  <img
                    className="w-20 h-20 lg:w-28  lg:h-28 object-cover rounded-full shadow-sm lg:shadow-md "
                    src={`https://green-exchange-8qyw.onrender.com/uploads/users/${image}`}
                    alt={fullname}
                    onLoad={() =>
                      console.log(`Image for ${fullname} has loaded`)
                    }
                    onError={() =>
                      console.error(`Failed to load image for ${fullname}`)
                    }
                  />

                  <h3 className="font-bold text-gray-700 py-2">{fullname}</h3>
                  <span className="border-2 border-jade-500 px-4 text-sm py-1 rounded-2xl text-jade-600 capitalize">
                    for donate
                  </span>
                  <img
                    className="w-54 h-72 pt-4 hover:scale-110 relative hover:duration-500 duration-500 rounded sm:max-w-md object-cover"
                    src={`https://green-exchange-8qyw.onrender.com/uploads/${product[0]?.images[0]}`}
                    alt={`Product of ${fullname}`}
                  />
                </div>
              </SwiperSlide>
            );
          })}
      </Swiper>
    );
  }

  return null;
};

export default SliderComponent;
