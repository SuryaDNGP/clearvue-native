import { configureStore } from '@reduxjs/toolkit';
import { authAPI } from './services/authAPI';
import { fbAuthApi } from './services/fbAuthAPI';

export const store = configureStore({
  reducer: {
    [fbAuthApi.reducerPath]: fbAuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      fbAuthApi.middleware
    ),
});
