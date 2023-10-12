import { BlogsCard } from '../../assets/Data';
const Blogs = () => {
  return (
    <>
      <section className="2xl:container 2xl:mx-auto lg:py-16 lg:px-20 md:py-12 md:px-6 py-9 px-0">
        <div className="container mx-auto">
          <div className="-mx-4 flex flex-wrap justify-center">
            <div className="w-full px-4">
              <div className="mx-auto mb-[60px] max-w-[510px] text-center lg:mb-20">
                <h1 className="pb-4  px-5 leading-9  text-3xl  sm:text-4xl  font-extrabold text-center text-transparent bg-clip-text bg-gradient-to-r  from-neutral-800 to-neutral-400">
                  Save Our Planet
                </h1>
                <p className=" lg:text-lg text-center font-normal text-md  leading-8   text-neutral-500 ">
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
                        <p className="text-neutral-600  mb-4 inline-block text-xl font-semibold sm:text-2xl lg:text-xl xl:text-2xl">
                          {title}
                        </p>
                      </h3>
                      <p className=" lg:text-lg text-center font-normal text-md  leading-6   text-neutral-500">
                        {Desc}
                      </p>
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
