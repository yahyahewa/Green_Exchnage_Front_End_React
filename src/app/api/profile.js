import { api } from './api';

const userApi = api.injectEndpoints({
  endpoints: (builder) => ({
    uploads: builder.mutation({
      query: (files, token) => {
        const formData = new FormData();
        if (files.length > 0) {
          for (let file of files) {
            formData.append('photos', file);
          }
          return {
            url: 'api/product/uploads',
            method: 'POST',
            headers: { Authorization: `Bearer ${token}` },
            body: formData,
          };
        }
      },
      invalidatesTags: ['products'],
    }),

    upload: builder.mutation({
      query: (file, token) => {
        const formData = new FormData();
        formData.append('photo', file);
        return {
          url: 'api/user/upload',
          method: 'POST',
          headers: { Authorization: `Bearer ${token}` },
          body: formData,
        };
      },
      invalidatesTags: ['products'],
    }),
    getUserProducts: builder.query({
      query: (id, token) => ({
        url: `api/product/user/${id}`,
        headers: {
          Authorization: `Bearer ${token}`,
        },
      }),
      providesTags: ['products'],
    }),
    addProduct: builder.mutation({
      query: (body, token) => ({
        url: 'api/product/',
        method: 'POST',
        headers: { Authorization: `Bearer ${token}` },
        body: body,
      }),
      invalidatesTags: ['products'],
    }),
    updateUserInfo: builder.mutation({
      query: (body, token) => ({
        url: `api/user/update`,
        method: 'PATCH',
        headers: { Authorization: `Bearer ${token}` },
        body: body,
      }),
    }),
    updatePassword: builder.mutation({
      query: (body, token) => ({
        url: `api/user/`,
        method: 'PATCH',
        headers: { Authorization: `Bearer ${token}` },
        body: body,
      }),
    }),
  }),
});

export const {
  useGetUserProductsQuery,
  useUploadsMutation,
  useUploadMutation,
  useAddProductMutation,
  useUpdateUserInfoMutation,
  useUpdatePasswordMutation,
} = userApi;
