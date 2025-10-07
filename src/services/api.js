import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';

import { saveUserData } from '../helpers/auth.js';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
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
    getPosts: builder.query({
      providesTags: ['Post'],
      query: (body) => ({
        body: body,
        url: 'posts'
      })
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
      query: () => {
        const storedUser = JSON.parse(localStorage.getItem('user-profile-data'));

        return {
          headers: storedUser
            ? {
              'access-token': storedUser.accessToken,
              client: storedUser.client,
              uid: storedUser.email
            }
            : {},
          method: 'DELETE',
          url: 'users/sign_out'
        };
      }
    })
  })
});

export const { useGetPostsQuery, useCreateUserMutation, useLoginMutation, useSignOutMutation } = api;
