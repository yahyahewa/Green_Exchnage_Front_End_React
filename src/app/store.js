import { configureStore } from '@reduxjs/toolkit';
import { api } from './api/api';
import userReducer from './api/userSlice';
export default configureStore({
  reducer: {
    user: userReducer,
    [api.reducerPath]: api.reducer,
  },
  middleware: (gdmw) => gdmw().concat(api.middleware),
});
