import { Box, Text, Avatar, AvatarFallbackText } from "@gluestack-ui/themed";
import { Drawer } from "expo-router/drawer";
import React from "react";
import { TouchableOpacity } from "react-native";

import {
  DrawerContentScrollView,
  DrawerItem,
  DrawerItemList
} from "@react-navigation/drawer";
import { useFirebaseLogoutMutation } from "../../store/services/fbAuthAPI";
import { Redirect, useRouter } from "expo-router";
const CustomDrawer = (props: any) => {
  const router = useRouter();
  const [firebaseLogout, { isLoading: logoutLoading }] =
    useFirebaseLogoutMutation();
  return (
    <DrawerContentScrollView {...props}>
      <DrawerItemList {...props} />
      <DrawerItem
        labelStyle={{ color: "white" }}
        label="Logout"
        onPress={() => {
          firebaseLogout().then(() => {
            router.replace("/(auth)/");
          });
        }}
      />
    </DrawerContentScrollView>
  );
};

const ScreensLayout = () => {
  return (
    <Drawer
      initialRouteName="dashboard"
      screenOptions={({ navigation }) => ({
        headerShadowVisible: false,
        headerStyle: {
          backgroundColor: "#000",
          height: 100
        },
        drawerStyle: {
          backgroundColor: "#000"
        },
        drawerLabelStyle: {
          color: "#fff"
        },
        drawerActiveBackgroundColor: "#98989837",
        headerTitle: "",
        drawerPosition: "right",
        headerLeft: () => (
          <Box ml={20}>
            <Text
              sx={{
                color: "#fff"
              }}
              size="md"
            >
              Hammersmith
            </Text>
            <Text
              sx={{
                color: "#B7B7B7"
              }}
              size="sm"
            >
              Tap to change your site
            </Text>
          </Box>
        ),
        headerRight: () => (
          <TouchableOpacity onPress={navigation.toggleDrawer}>
            <Avatar mr={20} bgColor="$amber600" size="md" borderRadius="$md">
              <AvatarFallbackText>Surya D</AvatarFallbackText>
            </Avatar>
          </TouchableOpacity>
        )
      })}
      drawerContent={(props) => <CustomDrawer {...props} />}
    >
      <Drawer.Screen name="dashboard" options={{ drawerLabel: "Dashboard" }} />
      <Drawer.Screen name="home" />
    </Drawer>
  );
};

export default ScreensLayout;
