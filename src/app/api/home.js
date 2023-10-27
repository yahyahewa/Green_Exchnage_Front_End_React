import { api } from './api';

const homeApi = api.injectEndpoints({
  endpoints: (builder) => ({
    activeUser: builder.query({
      query: (number) => `api/product/${number}`,
    }),
  }),
});

export const { useActiveUserQuery } = homeApi;
