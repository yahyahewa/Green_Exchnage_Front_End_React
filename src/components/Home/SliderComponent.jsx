import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";
import { useActiveUserQuery } from "../../app/api/home";
import CircularProgress from "@mui/material/CircularProgress";

const SliderComponent = () => {
  const { data, isError, isLoading } = useActiveUserQuery(3);

  useEffect(() => {
    if (data && !isError && !isLoading);
  }, [data, isError, isLoading]);

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

  const dataArray = data.data;

  return (
    <Swiper
      spaceBetween={30}
      centeredSlides={true}
      autoplay={{
        delay: 4500,
        disableOnInteraction: false,
      }}
      pagination={{
        clickable: true,
        className: "bg-red-900",
      }}
      modules={[Mousewheel, Pagination, Autoplay]}
      className="mySwiper"
      navigation={true}
    >
      {dataArray &&
        dataArray.map((items) => {
          const { fullname, image, _id, product } = items;
          console.log(
            "🚀 ~ file: SliderComponent.jsx:53 ~ SliderComponent ~ items:",
            items
          );
          return (
            <SwiperSlide key={_id}>
              <div className="flex flex-col pb-4 justify-center items-center gap-2 md:pt-24 pt-8">
                <img
                  className="w-24 h-28 object-cover rounded-ee-3xl rounded-ss-3xl shadow-md shadow-jade-500"
                  src={`https://green-exchange-8qyw.onrender.com/uploads/users/${image}`}
                  alt={fullname}
                />

                <h3 className="font-bold text-gray-700 py-2">{fullname}</h3>
                <span className="border-2 border-jade-500 px-4 text-sm py-1 rounded-2xl text-jade-600 capitalize">
                  for donate
                </span>
                <img
                  className="w-54 h-72 my-10 hover:scale-110 relative hover:duration-500 duration-500 rounded sm:max-w-md object-cover"
                  src={`https://green-exchange-8qyw.onrender.com/uploads/${product[0]?.images[0]}`}
                  alt={`Product of ${fullname}`}
                />
              </div>
            </SwiperSlide>
          );
        })}
    </Swiper>
  );
};

export default SliderComponent;
