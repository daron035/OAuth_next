import { apiSlice } from "../services/apiSlice";

const authApiSlice = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    register: builder.mutation({
      query: ({ username, mail, password }) => ({
        url: "auth/register/",
        method: "POST",
        body: { username, mail, password },
      }),
    }),
  }),
});

export const { useRegisterMutation } = authApiSlice;
