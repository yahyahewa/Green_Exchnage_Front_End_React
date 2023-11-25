import { useParams } from 'react-router-dom';
import { CgCalendarDates } from 'react-icons/cg';
import { IoLocationSharp } from 'react-icons/io5';
import SingleItemSlider from '../components/SingleItemSlider/SingleItemSlider';
import { useGetSingleProductQuery } from '../app/api/products';
import { format } from 'date-fns';
import { Oval } from 'react-loader-spinner';
import { useSelector } from 'react-redux';
// import { stat } from 'fs';

function SingleItem() {
  const { id } = useParams();
  const { data: singleProduct, isLoading } = useGetSingleProductQuery({ id });
  const language = useSelector((state) => state.language.language);
  console.log('lan', language);
  if (isLoading) {
    return (
      <div className="h-screen flex justify-center items-center">
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
      </div>
    );
  }
  return (
    <>
      <section className="px-6 sm:px-12 lg:mx-26 md:px-20  text-neutral-500 w-full">
        <div
          className={`${
            language === 'en' ? '' : ''
          }+ py-32 grid lg:grid-cols-2 gap-5 lg:gap-x-10 `}
        >
          <div className="w-full">
            {singleProduct?.data?.images?.length > 1 ? (
              <SingleItemSlider images={singleProduct?.data?.images} />
            ) : (
              <img
                alt={''}
                className="w-full h-[500px] lg:w-full lg:h-[600px] object-cover rounded"
                src={`${import.meta.env.VITE_BACK_END}uploads/${
                  singleProduct?.data?.images[0]
                }`}
              />
            )}
          </div>

          <div className="flex flex-col justify-between w-full">
            <div
              className={`${
                language === 'ku' ? '' : 'items-end'
              } + flex flex-col sm:flex-row lg:flex-col justify-between sm:items-end lg:items-start`}
            >
              <div className="w-full">
                <h1
                  className={`${
                    language === 'ku' ? 'flex-row-reverse' : ''
                  } + w-full font-semibold text-xl flex  sm:text-2xl lg:text-3xl text-neutral-600 mt-5 sm:mt-0 `}
                >
                  {singleProduct?.data?.name
                    ? singleProduct?.data?.name
                    : 'product name'}
                </h1>
                <p className="lg:text-xl font-semibold mt-2 py-2 px-4 bg-gray-50 w-fit">
                  {/* {singleProduct?.data?.category[0]?.name} */}
                </p>
                <h2
                  className={`${
                    language === 'ku' ? 'flex-row-reverse' : 'flex-row'
                  }  flex  w-full lg:text-xl font-semibold mt-2`}
                >
                  {singleProduct?.data?.owner?.fullname}
                </h2>
              </div>

              <div
                className={`${
                  language === 'ku' ? 'flex-row-reverse' : 'flex-row'
                } flex w-full mt-5 sm:mt-0 lg:mt-5`}
              >
                <div className={` flex items-center`}>
                  <CgCalendarDates
                    className={`${language === 'ku' ? '' : 'ml-2'} w-6 h-6`}
                  />
                  <span className={`${language === 'ku' ? '' : 'ml-2'} `}>
                    {format(
                      new Date(singleProduct?.data?.createdAt),
                      'yyyy-MM-dd',
                    )}
                  </span>
                </div>

                <div
                  className={`${
                    language === 'ku' ? 'mr-2' : ''
                  } ml-5 flex sm:flex-col md:flex-row items-center`}
                >
                  <IoLocationSharp className="mr-2 w-5 h-5" />
                  {/* <span className="">{singleProduct?.data?.city?.name}</span> */}
                  <span>{singleProduct?.data?.address}</span>{' '}
                </div>
              </div>
            </div>
            <p
              className={`${
                language === 'ku' ? 'flex-row-reverse' : ''
              }  flex w-full mt-5 lg:mt-2`}
            >
              {singleProduct?.data?.description.slice(0, 1000)}
            </p>
            <div
              className={`${
                language === 'ku' ? 'flex-row-reverse' : ''
              } w-full flex flex-col mt-5 lg:mt-0`}
            >
              <div
                className={`${
                  language === 'ku' ? 'flex-row-reverse ' : ''
                } flex `}
              >
                <span>Owner Phone number </span>
                <span>:</span>

                <span> {singleProduct?.data?.phone}</span>
              </div>
              <div
                className={`${
                  language === 'ku' ? 'flex-row-reverse ' : ''
                } flex `}
              >
                <span>employee phone number</span>
                <span> :</span>
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
