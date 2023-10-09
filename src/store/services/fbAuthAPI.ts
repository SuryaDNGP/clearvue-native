import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { signInWithEmailAndPassword, getAuth } from 'firebase/auth';
import app from '../../utils/config/firebase';
const auth = getAuth(app);
export const fbAuthApi = createApi({
  reducerPath: 'fbAuthApi',
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
          console.log('res.user', res.user);
          return { data: res.user };
        } catch (error) {
          console.log('login error', error);
          return { error };
        }
      },
    }),
    firebaseRegister: builder.mutation({
      async queryFn(payload) {
        try {
          const res = await signInWithEmailAndPassword(
            auth,
            payload.email,
            payload.password
          );
          console.log('res.user', res.user);
          return { data: res.user };
        } catch (error) {
          console.log('login error', error);
          return { error };
        }
      },
    }),
  }),
});

export const { useFirebaseLoginMutation, useFirebaseRegisterMutation }: any =
  fbAuthApi;
