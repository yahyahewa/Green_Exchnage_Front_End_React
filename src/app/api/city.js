import { api } from './api';

const cityApi = api.injectEndpoints({
  endpoints: (builder) => ({
    getCity: builder.query({
      query: () => `api/city`,
    }),
  }),
});

export const { useGetCityQuery } = cityApi;
