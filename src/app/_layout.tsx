import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { ErrorBoundaryProps, SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
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
import { useAuth } from "../hooks/useAuth";
import AuthContextProvider from "../../src/components/context/AuthContext";
import { Provider } from "react-redux";
import { store } from "../../src/store/store";
import { registerRootComponent } from "expo";
import Toast from "react-native-toast-message";
import { ExpoRoot } from "expo-router";
import { toastConfig } from "../utils/config/toaster.config";
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

export function FallBack(props: any) {
  return (
    <View>
      <Text>Hello</Text>
      <Text>{props.error.toString()}</Text>
    </View>
  );
}

function RootLayoutNav() {
  const { user } = useAuth();
  console.log("layour uswer", user);

  return (
    <GluestackUIProvider config={config}>
      <AuthContextProvider>
        <Provider store={store}>
          <Stack
            screenOptions={{
              contentStyle: {
                overflow: "hidden",
              },
            }}
          >
            {user ? (
              <Stack.Screen
                name='(app)'
                options={{
                  headerShown: false,
                }}
              />
            ) : (
              <Stack.Screen name='(auth)' options={{ headerShown: false }} />
            )}
          </Stack>
        </Provider>
      </AuthContextProvider>
      <Toast config={toastConfig} />
    </GluestackUIProvider>
  );
}
