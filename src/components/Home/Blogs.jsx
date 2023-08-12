import React from "react";

const Blogs = () => {
  return (
    <>
      {/* ====== Blog Section Start */}
      <section className="pt-20 pb-10 px-3 lg:pt-[120px] lg:pb-20">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <h2 className="text-dark mb-4 text-3xl font-bold sm:text-4xl md:text-[40px]">
                  Save Our Planet
                </h2>
                <p className="text-body-color text-base">
                  Donating can indeed be a meaningful way to reduce waste and
                  help those in need. Here are some steps and ideas to consider
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mx-auto mb-10 max-w-[370px]">
                <div className="mb-8 overflow-hidden rounded">
                  <img
                    src="https://i0.wp.com/movingtips.wpengine.com/wp-content/uploads/2021/01/donation.jpg?fit=1200%2C800&ssl=1"
                    alt="image"
                    className="w-full"
                  />
                </div>
                <div className="text-center">
                  <h3>
                    <a
                      href=""
                      className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      Online Platforms
                    </a>
                  </h3>
                  <p className="text-body-color text-base">
                    Consider using online platforms to give away or sell items
                    you no longer need.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mx-auto mb-10 max-w-[370px]">
                <div className="mb-8 overflow-hidden rounded">
                  <img
                    src="https://assets.ey.com/content/dam/ey-sites/ey-com/en_us/topics/climate-change/ey-waste-bin-full-of-e-waste.jpg"
                    alt="image"
                    className="w-full"
                  />
                </div>
                <div className="text-center">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      Electronics Recycling
                    </a>
                  </h3>
                  <p className="text-body-color text-base">
                    For electronics you no longer need, consider recycling them
                    responsibly.
                  </p>
                </div>
              </div>
            </div>

            <div className="w-full px-4 md:w-1/2 lg:w-1/3">
              <div className="mx-auto mb-10 max-w-[370px]">
                <div className="mb-8 overflow-hidden rounded">
                  <img
                    src="https://us.123rf.com/450wm/zinkevych/zinkevych2201/zinkevych220100693/180330172-happy-lady-packing-her-clothes-for-donation.jpg?ver=6"
                    alt="image"
                    className="w-full"
                  />
                </div>
                <div className="text-center">
                  <h3>
                    <a
                      href="javascript:void(0)"
                      className="text-dark hover:text-primary mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl"
                    >
                      Organize Donation Drives
                    </a>
                  </h3>
                  <p className="text-body-color text-base">
                    Consider organizing donation drives within your community,
                    workplace, or social groups.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
