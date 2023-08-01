import { api } from "./api";

const authApi = api.injectEndpoints({
  endpoints: (builder) => ({
    // signup endpoint
    signup: builder.mutation({
      query: (body) => ({
        url: "api/user/signupauth/",
        method: "POST",
        body: body,
      }),
    }),
    // login endpoint
    login: builder.mutation({
      query: (body) => ({
        url: "api/user/loginauth/",
        method: "POST",
        body: body,
      }),
      invalidatesTags: ["userData"],
    }),
  }),
});

export const { useSignupMutation,useLoginMutation } = authApi;
