import React, { useEffect, useState } from "react";
import { getAuth, onAuthStateChanged, User } from "firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { showToast } from "../components/shared/Toaster";
import { useRouter } from "expo-router";
const auth = getAuth();

export const useAuth = () => {
  const router = useRouter()
  const [user, setUser] = useState<User>();
  const [authLoading, setAuthLoading] = useState(false);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        console.log("is user available", user);
      
        setUser(user);
        setAuthLoading(false);
        router.replace("/dashboard")
        showToast("success", "Logged in !!");
      } else {
        console.log("is user unavailable", user);
        setUser(undefined);
      }
    });
    return unsubscribe;
  }, []);

  return { user, authLoading, setAuthLoading };
};
