import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';

import { saveUserData } from '../helpers/user.js';

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
          console.log("api if")
          return { type: 'backend', errors: response.data.errors };
        }
        console.log("api no if")
        return { type: 'unknown', raw: response };
      },
      transformResponse: (response, meta) => saveUserData(response, meta)
    }), 
    getPosts: builder.query({
      providesTags: ['Post'],
      query: (body) => ({
        body: body,
        url: 'posts'
      })
    })
  })
});

export const { useGetPostsQuery, useCreateUserMutation } = api;
