import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/api';
import userReducer from './api/userSlice';
import modalReducer from './api/ModalSlice';
import LanguageReducer from './api/LanguageSlice';
export default configureStore({
  reducer: {
    user: userReducer,
    language: LanguageReducer,
    modal: modalReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (gdmw) => gdmw().concat(api.middleware),
});
