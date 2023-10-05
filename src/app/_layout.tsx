import FontAwesome from "@expo/vector-icons/FontAwesome";
import { useFonts } from "expo-font";
import { SplashScreen, Stack } from "expo-router";
import { useEffect } from "react";
import { GluestackUIProvider } from "@gluestack-ui/themed";
import { config } from "../../ gluestack-ui.config";

import AuthContextProvider from "../../src/components/context/AuthContext";
import { Provider } from "react-redux";
import { store } from "../../src/store/store";

export {
  // Catch any errors thrown by the Layout component.
  ErrorBoundary
} from "expo-router";

export const unstable_settings = {
  // Ensure that reloading on `/modal` keeps a back button present.
  initialRouteName: "(auth)"
};

// Prevent the splash screen from auto-hiding before asset loading is complete.
SplashScreen.preventAutoHideAsync();

export default function RootLayout() {
  const [loaded, error] = useFonts({
    Rubik: require("../assets/fonts/Rubik-VariableFont_wght.ttf"),
    ...FontAwesome.font
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
  return (
    <GluestackUIProvider config={config}>
      <AuthContextProvider>
        <Provider store={store}>
          <Stack initialRouteName="(auth)">
            <Stack.Screen name="(auth)" options={{ headerShown: false }} />
            <Stack.Screen
              name="(app)"
              options={{
                headerShown: false
                // headerTitle: "",
                // headerStyle: {
                //   backgroundColor: "#000"
                // },
                // headerLeft: () => (
                //   <Box style={{ marginVertical: 15 }}>
                //     <Text
                //       sx={{
                //         color: "#fff"
                //       }}
                //       size="md"
                //     >
                //       Hammersmith
                //     </Text>
                //     <Text
                //       sx={{
                //         color: "#B7B7B7"
                //       }}
                //       size="sm"
                //     >
                //       Tap to change your site
                //     </Text>
                //   </Box>
                // ),
                // headerRight: () => (
                //   <Avatar bgColor="$amber600" size="md" borderRadius="$md">
                //     <AvatarFallbackText>Surya D</AvatarFallbackText>
                //   </Avatar>
                // )
              }}
            />
          </Stack>
        </Provider>
      </AuthContextProvider>
    </GluestackUIProvider>
  );
}
