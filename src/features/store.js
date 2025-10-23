import { configureStore } from '@reduxjs/toolkit';

import { index } from './api';

export const store = configureStore({
  middleware: (getDefaultMiddleware) => [
    ...getDefaultMiddleware({
      serializableCheck: false
    }), index.middleware
  ],
  reducer: {
    [index.reducerPath]: index.reducer
  }
});
