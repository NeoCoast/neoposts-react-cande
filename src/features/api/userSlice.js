import { index } from './index';
import { saveUserData, clearUserData } from '@helpers/auth.js';

export const userApi = index.injectEndpoints({
  endpoints: (builder) => ({
    createUser: builder.mutation({
      query: (data) => ({
        body: data,
        method: 'POST',
        url: 'users'
      }),
      transformErrorResponse: (response) => {
        if (response.data && response.data.errors) {
          return { errors: response.data.errors, type: 'backend' };
        }
        return { raw: response, type: 'unknown' };
      },
      transformResponse: (response, meta) => saveUserData(response, meta)
    }),
    login: builder.mutation({
      query: (data) => ({
        body: data,
        method: 'POST',
        url: 'users/sign_in'
      }),
      transformErrorResponse: (response) => {
        if (response.data && response.data.errors) {
          return { errors: response.data.errors, type: 'backend' };
        }
        return { raw: response, type: 'unknown' };
      },
      transformResponse: (response, meta) => saveUserData(response, meta)
    }),
    signOut: builder.mutation({
      async onQueryStarted(argument, { queryFulfilled }) {
        try {
          await queryFulfilled;
          clearUserData();
        } catch (error) {
          return { raw: error, type: 'unknown' };
        }
      },
      query: () => ({
        method: 'DELETE',
        url: 'users/sign_out'
      })
    })
  })
});

export const { useCreateUserMutation, useLoginMutation, useSignOutMutation } = userApi;
