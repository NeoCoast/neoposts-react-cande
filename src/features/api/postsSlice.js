import { index } from './index';

export const postsApi = index.injectEndpoints({
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
