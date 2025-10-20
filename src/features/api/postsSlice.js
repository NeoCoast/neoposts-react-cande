import { api } from './api';

export const postsApi = api.injectEndpoints({
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

export const { useGetPostsQuery } = postsApi;
