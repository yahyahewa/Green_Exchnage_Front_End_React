import { api } from './api';

const products = api.injectEndpoints({
  endpoints: (builder) => ({
    getProducts: builder.query({
      query: ({ search, category, page }) =>
        `api/product/product?page=${page}&search=${search}&category=${category}`,
      providesTags: ['products'],
    }),
    getSingleProduct: builder.query({
      query: ({ id }) => `api/product/product/${id}`,
      providesTags: ['products'],
    }),

    addProductUpdate: builder.mutation({
      query: (body, token) => ({
        url: 'api/product/',
        method: 'PATCH',
        headers: { Authorization: `Bearer ${token}` },
        body: body,
      }),
      invalidatesTags: ['products'],
    }),
    deleteProductFromMyDonate: builder.mutation({
      query: (body, token) => ({
        url: `api/product/${body.user}/${body.product}`,
        method: 'DELETE',
        headers: { Authorization: `Bearer ${token}` },
        body: body,
      }),
      invalidatesTags: ['products'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useAddProductUpdateMutation,
  useDeleteProductFromMyDonateMutation,
} = products;
