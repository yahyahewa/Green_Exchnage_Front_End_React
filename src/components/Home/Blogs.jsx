
import { BlogsCard } from "../../assets/Data";
const Blogs = () => {
  return (
    <>
      {/* ====== Blog Section Start */}
      <section className="pt-20 pb-10 px-3 lg:pt-[120px] lg:pb-20">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <h2 className="pb-4 text-3xl sm:text-4xl font-extrabold text-center  from-gray-800">
                  Save Our Planet
                </h2>
                <p className=" text-lg  text-gray-900">
                  Donating can indeed be a meaningful way to reduce waste and
                  help those in need. Here are some steps and ideas to consider
                </p>
              </div>
            </div>
          </div>
          <div className="-mx-4 flex flex-wrap">
            {BlogsCard.map((blog) => {
              const { id, title, image, Desc } = blog;
              return (
                <div
                  key={id}
                  className="w-full px-8 md:w-1/2 lg:w-1/3 shadow-sm "
                >
                  <div className="mx-auto mb-10 max-w-[370px]">
                    <div className="mb-8 overflow-hidden rounded ">
                      <img src={image} alt={title} className="w-full" />
                    </div>
                    <div className="text-center">
                      <h3>
                        <p className="text-dark  mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                          {title}
                        </p>
                      </h3>
                      <p className="text-body-color text-base">{Desc}</p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
    </>
  );
};

export default Blogs;
