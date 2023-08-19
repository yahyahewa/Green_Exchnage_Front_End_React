import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_BACK_END,
    tagTypes: ["userData","products"],
    prepareHeaders: (headers) => {
      const data=JSON.parse(localStorage.getItem("userData"));
      const token=data?.token
      if (token) {
        headers.set("Authorization", `Bearer ${token}`);
      }

      return headers;
    },
  }),
  endpoints: () => ({}),
});
