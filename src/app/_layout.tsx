import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { ErrorBoundaryProps, SplashScreen, Stack, router } from "expo-router";
import { useEffect, useState } from "react";
import { Drawer } from "expo-router/drawer";
import {
  Avatar,
  AvatarFallbackText,
  Box,
  GluestackUIProvider,
  Text,
  Theme,
  View,
} from "@gluestack-ui/themed";
import { config } from "../../ gluestack-ui.config";

import { Provider } from "react-redux";
import { store } from "../../src/store/store";
import Toast from "react-native-toast-message";
import { toastConfig } from "../utils/config/toaster.config";
import { User, getAuth, onAuthStateChanged } from "firebase/auth";
import app from "../utils/config/firebase";
import { showToast } from "../components/shared/Toaster";
// import ErrorBoundary from 'react-native-error-boundary';

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary,
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(auth)",
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Rubik: require("../assets/fonts/Rubik-VariableFont_wght.ttf"),
    ...FontAwesome.font,
  });

  // Expo Router uses Error Boundaries to catch errors in the navigation tree.
  useEffect(() => {
    if (error) throw error;
  }, [error]);

  useEffect(() => {
    if (loaded) {
      SplashScreen.hideAsync();
    }
  }, [loaded]);

  if (!loaded) {
    return null;
  }

  return <RootLayoutNav />;
}

function RootLayoutNav() {
  const [user, setUser] = useState<User | null>(null);
  const auth = getAuth(app);
  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      console.log("Root user", user);
      setUser(user);
      if (user) {
        router.replace("/dashboard");
        showToast("success", "Logged in !!", "toast");
      }
    });
  }, []);
  return (
    <GluestackUIProvider config={config}>
      <Provider store={store}>
        <Stack
          screenOptions={{
            contentStyle: {
              overflow: "hidden",
            },
            headerShown: false,
          }}
        >
          {user ? (
            <Stack.Screen
              name="(app)"
              options={{
                headerShown: false,
              }}
            />
          ) : (
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
          )}
        </Stack>
      </Provider>

      <Toast config={toastConfig} />
    </GluestackUIProvider>
  );
}
