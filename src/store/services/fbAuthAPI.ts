import { createApi, fakeBaseQuery } from "@reduxjs/toolkit/query/react";
import {
  signInWithEmailAndPassword,
  getAuth,
  createUserWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import app from "../../utils/config/firebase";
import { showToast } from "../../components/shared/Toaster";
const auth = getAuth(app);
export const fbAuthApi = createApi({
  reducerPath: "fbAuthApi",
  baseQuery: fakeBaseQuery(),
  endpoints: (builder) => ({
    firebaseLogin: builder.mutation({
      async queryFn(payload) {
        try {
          const res = await signInWithEmailAndPassword(
            auth,
            payload.email,
            payload.password
          );
          console.log("res.user", res.user);
          return { data: res.user };
        } catch (error) {
          console.log("login error", error);
          showToast('error','Invalid User')
          return { error };
        }
      },
    }),
    firebaseRegister: builder.mutation({
      async queryFn(payload) {
        try {
          const res = await createUserWithEmailAndPassword(
            auth,
            payload.email,
            payload.password
          );
          return { data: res.user };
        } catch (error) {
          console.log("login error", error);
          return { error };
        }
      },
    }),
    firebaseLogout: builder.mutation({
      async queryFn() {
        try {
          await signOut(auth);
          return { data: null };
        } catch (error) {
          console.log("login error", error);
          return { error };
        }
      },
    }),
  }),
});

export const {
  useFirebaseLoginMutation,
  useFirebaseRegisterMutation,
  useFirebaseLogoutMutation,
}: any = fbAuthApi;
