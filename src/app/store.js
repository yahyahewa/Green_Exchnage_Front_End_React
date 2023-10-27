import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/api';
import userReducer from './api/userSlice';
import modalReducer from './api/ModalSlice';
export default configureStore({
  reducer: {
    user: userReducer,
    modal: modalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (gdmw) => gdmw().concat(api.middleware),
});
