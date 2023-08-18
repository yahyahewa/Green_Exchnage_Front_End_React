import React, { useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Mousewheel, Autoplay } from "swiper/modules";
import { SliderCards } from "../../assets/Data";
import { useActiveUserQuery } from "../../app/api/home";

const SliderComponent = () => {
  const { data, isError, isLoading } = useActiveUserQuery(3);
  useEffect(() => {
    if (data && !isError && !isLoading) console.log(data);
  }, [data]);
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
      {SliderCards.map((items) => {
        const { Donator, id, profile, Item } = items;
        return (
          <SwiperSlide key={id}>
            <div className="flex flex-col pb-4 justify-center items-center gap-2 md:pt-24 pt-8">
              <img
                className=" w-24 h-28 object-cover rounded-ee-3xl rounded-ss-3xl shadow-md shadow-jade-500"
                src={profile}
              />

              <h3 className="font-bold text-gray-700  py-2">{Donator}</h3>
              <span className=" border-2 border-jade-500 px-4 text-sm py-1 rounded-2xl text-jade-600 capitalize">
                for donate
              </span>
              <img
                className="w-54 h-72  my-10 hover:scale-110 relative hover:duration-500  duration-500  rounded    sm:max-w-md  object-cover"
                src={Item}
              />
            </div>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default SliderComponent;
