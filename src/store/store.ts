import { configureStore } from "@reduxjs/toolkit";
import { authAPI } from "./services/authAPI";
import { fbAuthApi } from "./services/fbAuthAPI";
import authSlice from "./slices/authSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    [fbAuthApi.reducerPath]: fbAuthApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ serializableCheck: false }).concat(
      fbAuthApi.middleware
    ),
});
