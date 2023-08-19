import { api } from "./api";

const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategorySubCategory: builder.query({
      query: () => `api/category`,
    }),
  }),
});

export const { useGetCategorySubCategoryQuery } = categoryApi;
