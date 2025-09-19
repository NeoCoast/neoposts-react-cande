import { createApi } from '@reduxjs/toolkit/query/react';
import { fetchBaseQuery } from '@reduxjs/toolkit/query';

export const api = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL
  }),
  endpoints: (builder) => ({
    getPosts: builder.query({
      providesTags: ['Post'],
      query: (body) => ({
        body: body,
        url: 'posts'
      })
    })
  })
});

export const { useGetPostsQuery } = api;
