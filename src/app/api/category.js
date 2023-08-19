import { api } from "./api";

const categoryApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCategorySubCategory: builder.query({
      query: (number) => `api/category`,
    }),
  }),
});

export const { useGetCategorySubCategoryQuery } = categoryApi;

// export const { useActiveUserQuery } = homeApi;
