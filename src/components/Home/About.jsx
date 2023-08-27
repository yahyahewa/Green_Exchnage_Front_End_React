import React from "react";
import { AboutUs } from "../../assets/Data";
const About = () => {
  return (
    <div className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-4 pt-8">
      <div className="flex flex-col lg:flex-row justify-between gap-8">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className=" lg:text-4xl   leading-9 text-gray-800  pb-4 text-3xl px-5 sm:text-4xl text-to font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-400">
            About Us
          </h1>
          <p className="font-normal text-md  leading-6 text-lg  text-gray-900 text-justify ">
            We are a group of four individuals with a shared vision of using our
            skills and expertise to make a positive impact on the planet. At the
            core of our mission is the belief that technology can be a powerful
            force for good. We are dedicated to developing innovative solutions
            that contribute to a greener, cleaner, and more sustainable world.
            Our goal is to harness the potential of software to address pressing
            environmental challenges and promote eco-conscious living.
          </p>
        </div>
        <div className="w-full lg:w-8/12">
          <img
            className="w-full h-full sm:shadow-md shadow-sm rounded-md"
            src="https://clockwise.software/img/blog/software-development-team-structure/header-background.jpg"
            alt="our team"
          />
        </div>
      </div>
      <div className="flex lg:flex-row flex-col justify-between gap-8 pt-12">
        <div className="w-full lg:w-5/12 flex flex-col justify-center">
          <h1 className="lg:text-4xl   leading-9 text-gray-800  pb-4 text-3xl px-5 sm:text-4xl text-to font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r from-neutral-800 to-neutral-400">
            Our Story
          </h1>
          <p className="text-lg  text-gray-900 leading-6  text-justify ">
            Our journey began with a shared vision and a chance encounter at a
            coding boot camp. Four like-minded technical individuals, each with
            their unique skills and expertise, converged at this pivotal moment
            in our lives. Little did we know that this meeting would be the
            vision for an inspiring collaboration that would shape our future.
          </p>
        </div>
        <div className="w-full lg:w-8/12 lg:pt-8">
          <div className="grid md:grid-cols-4 sm:grid-cols-2 grid-cols-1 lg:gap-4 sm:shadow-md shadow-sm rounded-md">
            {AboutUs.map((team) => {
              const { id, image, name } = team;
              return (
                <div
                  key={id}
                  className="p-4 pb-6 flex justify-center flex-col items-center "
                >
                  <img
                    className="md:block hidden object-cover"
                    src={image}
                    alt={name}
                  />
                  <img
                    className="md:hidden block object-cover w-full"
                    src={image}
                    alt={name}
                  />
                  <p className="font-medium text-xl leading-5 text-gray-800  mt-4">
                    {name}
                  </p>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
