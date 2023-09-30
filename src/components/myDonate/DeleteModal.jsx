import React from 'react';
import { IoIosCloseCircleOutline } from 'react-icons/io';
import { useDeleteProductFromMyDonateMutation } from '../../app/api/products';
import { useDispatch } from 'react-redux';
import { closeDeleteModal } from '../../app/api/ModalSlice';

function DeleteModal({ id, userId }) {
  const dispatch = useDispatch();
  const [deleteProduct] = useDeleteProductFromMyDonateMutation();
  const deleteProductHandler = () => {
    deleteProduct({
      product: id,
      user: userId,
    });
    dispatch(closeDeleteModal());
  };

  return (
    <div className="flex justify-center items-center flex-col bg-white shadow-lg px-5 pb-5">
      <div className="mt-5 mb-5  w-full flex justify-between items-center pt-3">
        <p className="flex text-neutral-600 font-semibold m-0 p-0">
          Update Product
        </p>
        <button onClick={() => dispatch(closeDeleteModal())}>
          <IoIosCloseCircleOutline className="w-7 h-7 text-neutral-600" />
        </button>
      </div>
      <p>Are you sure to delete this product ?</p>
      <button
        onClick={() => deleteProductHandler()}
        className="bg-red-500 px-8 py-1 hover:bg-red-400 text-white self-end mt-5 rounded "
      >
        Delete Product
      </button>
    </div>
  );
}

export default DeleteModal;
