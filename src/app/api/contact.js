import { api } from "./api";

const contact = api.injectEndpoints({
  endpoints: (builder) => ({
    contact: builder.mutation({
      query: (body) => ({
        url: "api/contact/send-email",
        method: "POST",
        body: body,
      }),
    }),
  }),
});

export const { useContactMutation } = contact;
