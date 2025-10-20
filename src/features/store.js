import { configureStore } from '@reduxjs/toolkit';

import { api } from './api/api.js';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false
    }), api.middleware
  ],
  reducer: {
    [api.reducerPath]: api.reducer
  }
});
