import emptyProduct from '../../assets/images/emptyProduct.svg';
import { useGetUserProductsQuery } from '../../app/api/profile';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiSolidEdit } from 'react-icons/bi';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import { closeModal, openModal } from '../../app/api/ModalSlice';
import Modal from 'react-modal';
import UpdateForm from '../myDonate/UpdateForm';
import { Oval } from 'react-loader-spinner';
function MyProducts() {
  const dataUser = JSON.parse(localStorage.getItem('userData'));
  const id = dataUser?.data?._id;
  const token = dataUser.token;
  const modal = useSelector((state) => state.modal.modal);
  console.log('modal', modal);
  const dispatch = useDispatch();
  const {
    data: userProducts,
    error,
    isLoading,
  } = useGetUserProductsQuery(id, token);
  if (error) {
    return (
      <>
        <p className="h-screen w-full font-semibold text-lg flex justify-center items-center text-neutral-500">
          Something went wrong !
        </p>
      </>
    );
  }
  if (isLoading)
    return (
      <div className="h-screen w-full flex justify-center items-center">
        {' '}
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
      </div>
    );
  console.log('donate', userProducts);

  return (
    <div className=" w-full text-neutral-500 min-h-screen ">
      {userProducts?.data?.length === 0 ? (
        <div className="flex justify-center items-center w-full">
          {' '}
          <img src={emptyProduct} alt="empty product" className="h-[500px]" />
        </div>
      ) : (
        <div className="grid  lg:grid-cols-2 xl:grid-cols-3 lg:mt-5  gap-5">
          {userProducts?.data?.map((data) => {
            return (
              <div
                className="flex flex-col w-full justify-start relative overflow-hidden"
                key={data._id}
              >
                <div className="flex justify-between items-center p-1">
                  <div className="flex flex-col">
                    <div className="font-bold">{data.name}</div>
                    <div>{format(new Date(data?.createdAt), 'yyyy-MM-dd')}</div>
                  </div>
                  <div className="flex items-center ">
                    <button
                      onClick={() => {
                        dispatch(openModal());
                        console.log(modal);
                      }}
                      className="mx-2"
                    >
                      <BiSolidEdit className="w-6 h-6 text-green" />
                    </button>
                    {/* <div className=""> */}{' '}
                    <div className="flex w-full flex-col justify-center items-center">
                      {' '}
                      <Modal
                        isOpen={modal}
                        onRequestClose={() => {
                          dispatch(closeModal());
                        }}
                        className="flex flex-col  justify-center items-center min-h-screen "
                        contentLabel="EditModal"
                      >
                        {/* {/* <div className="flex m-5 w-full flex-col justify-center items-center"> */}
                        <div className="flex justify-center items-center">
                          <UpdateForm
                            productId={data._id}
                            userId={data?.owner}
                          />
                        </div>
                        {/* </div> */}
                      </Modal>
                      {/* </div> */}
                    </div>
                    <div className="ml-1">
                      <RiDeleteBin6Line className="w-6 h-6 text-red-500" />
                    </div>
                  </div>
                </div>
                <img
                  src={`${import.meta.env.VITE_BACK_END}uploads/${
                    data?.images[0]
                  }`}
                  className="mt-2 border overflow-hidden  flex object-cover w-full h-60 hover:scale-110 relative hover:duration-500 duration-500"
                />
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}

export default MyProducts;
