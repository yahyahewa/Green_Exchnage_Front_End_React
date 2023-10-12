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
  }),
});

export const { useGetProductsQuery, useGetSingleProductQuery } = products;
