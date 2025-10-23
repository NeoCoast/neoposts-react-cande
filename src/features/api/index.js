import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

import { getAuthHeaders } from '@helpers/auth.js';

export const index = createApi({
  baseQuery: fetchBaseQuery({
    baseUrl: import.meta.env.VITE_API_URL,
    prepareHeaders: (headers) => {
      const authHeaders = getAuthHeaders();

      for (const [key, value] of Object.entries(authHeaders)) {
        headers.set(key, value);
      }
      return headers;
    }
  }),
  endpoints: () => ({}),
  tagTypes: ['User', 'Post']
});
