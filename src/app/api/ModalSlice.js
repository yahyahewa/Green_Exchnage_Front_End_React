import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  modal: false,
  deleteModal: false,
};

const modalSlice = createSlice({
  name: 'modalSlice',
  initialState,
  reducers: {
    openModal: (state) => {
      state.modal = true;
    },
    closeModal: (state) => {
      state.modal = false;
    },
    openDeleteModal: (state) => {
      state.deleteModal = true;
    },
    closeDeleteModal: (state) => {
      state.deleteModal = false;
    },
  },
});

export const { openModal, closeModal, openDeleteModal, closeDeleteModal } =
  modalSlice.actions;
export default modalSlice.reducer;
