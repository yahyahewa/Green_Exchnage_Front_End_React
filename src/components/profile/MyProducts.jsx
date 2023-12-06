import emptyProduct from '../../assets/images/emptyProduct.svg';
import { useGetUserProductsQuery } from '../../app/api/profile';
import { RiDeleteBin6Line } from 'react-icons/ri';
import { BiSolidEdit } from 'react-icons/bi';
import { format } from 'date-fns';
import { useDispatch, useSelector } from 'react-redux';
import Modal from 'react-modal';
import UpdateForm from '../myDonate/UpdateForm';
import { Oval } from 'react-loader-spinner';
import { useDeleteProductMutation } from '../../app/api/products';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import { useEffect } from 'react';
import { useState } from 'react';
function MyProducts() {
  const dataUser = JSON.parse(localStorage.getItem('userData'));
  const id = dataUser?.data?._id;
  const token = dataUser.token;
  const [selectedProduct, setSelectedProduct] = useState(null);
  const notify = () => toast('Delete product!');
  const modal = useSelector((state) => state.modal.modal);
  const language = useSelector((state) => state.language.language);
  console.log(language);
  const dispatch = useDispatch();
  const {
    data: userProducts,
    error,
    isLoading,
  } = useGetUserProductsQuery(id, token);
  console.log(userProducts);
  const [
    deleteProduct,
    { isLoading: deleteLoading, isSuccess: deleteSuccess },
  ] = useDeleteProductMutation();
  if (error) {
    return (
      <>
        <p className="h-screen w-full font-semibold text-lg flex justify-center items-center text-neutral-500">
          Something went wrong!
        </p>
      </>
    );
  }

  useEffect(() => {
    if (deleteSuccess) {
      // Data is available, show success toast
      toast.success('Delete product successfully!');
    }
  }, [deleteSuccess]);
  if (isLoading) {
    return (
      <div className="h-screen w-full flex justify-center items-center">
        <Oval
          height={100}
          width={100}
          color="#4fa94d"
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
    <div
      className={`${
        language === 'kurdi' ? '' : ''
      } + w-full  text-neutral-500 min-h-screen`}
    >
      {deleteSuccess === true && (
        <ToastContainer
          position="bottom-center"
          autoClose={5000}
          hideProgressBar
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="light"
        />
      )}
      {userProducts?.data?.length === 0 ? (
        <div className="flex justify-center items-center w-full">
          <img src={emptyProduct} alt="empty product" className="h-[500px]" />
        </div>
      ) : (
        <div
          dir={`${language === 'kurdi' ? 'rtl' : 'ltr'}`}
          className={`${
            language === 'kurdi' ? ' ' : ''
          } grid  lg:grid-cols-2 xl:grid-cols-3  lg:mt-5 gap-5`}
        >
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
                  <div className="flex items-center">
                    <button onClick={() => setSelectedProduct(data)}>
                      <BiSolidEdit className="w-6 h-6 text-green" />
                    </button>

                    <div className="flex w-full flex-col justify-center items-center">
                      {selectedProduct && (
                        <Modal
                          isOpen={!!selectedProduct}
                          onRequestClose={() => setSelectedProduct(null)}
                          className="flex flex-col justify-center items-center min-h-screen"
                        >
                          <div className="flex justify-center items-center w-full">
                            <UpdateForm
                              onClose={setSelectedProduct}
                              productId={selectedProduct?._id}
                              userId={selectedProduct?.owner}
                              data={selectedProduct}
                            />
                          </div>
                        </Modal>
                      )}
                    </div>
                    <div className="ml-1">
                      <button
                        onClick={() => {
                          deleteProduct({ user: id, product: data?._id });
                        }}
                      >
                        {' '}
                        <RiDeleteBin6Line
                          className="w-6 h-6 text-red-500"
                          onClick={() => notify}
                        />
                      </button>
                    </div>
                  </div>
                </div>
                <img
                  src={`${import.meta.env.VITE_BACK_END}uploads/${
                    data?.images[0]
                  }`}
                  className="mt-2 border overflow-hidden flex object-cover w-full h-60 hover:scale-110 relative hover:duration-500 duration-500"
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
