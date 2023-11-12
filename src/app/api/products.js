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
    deleteProduct: builder.mutation({
      query: ({ user, product }) => ({
        url: `api/product/${user}/${product}`,
        method: 'DELETE',
        body: { user, product },
      }),
      invalidatesTags: ['products'],
    }),
  }),
});

export const {
  useGetProductsQuery,
  useGetSingleProductQuery,
  useAddProductUpdateMutation,
  useDeleteProductMutation,
} = products;
