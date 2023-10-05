import { Box, Text, Avatar, AvatarFallbackText } from "@gluestack-ui/themed";
import { Stack } from "expo-router";
import { Drawer } from "expo-router/drawer";

import React, { useContext } from "react";
import { TouchableOpacity } from "react-native";
import { AuthContext } from "../../components/context/AuthContext";
import {
  createDrawerNavigator,
  DrawerContentScrollView,
  DrawerItemList,
  DrawerItem
} from "@react-navigation/drawer";

const ScreensLayout = () => {
  const { signOutAction } = useContext(AuthContext);

  function CustomDrawerContent(props: any) {
    return (
      <DrawerContentScrollView {...props}>
        <DrawerItemList {...props} />
        <DrawerItem
          label="Logout"
          labelStyle={{ color: "#fff" }}
          onPress={() => signOutAction()}
        />
      </DrawerContentScrollView>
    );
  }
  return (
    <>
      <Drawer
        initialRouteName="dashboard"
        drawerContent={(props) => <CustomDrawerContent {...props} />}
        screenOptions={({ navigation }) => ({
          headerStyle: {
            backgroundColor: "#000",
            height: 100
          },
          headerShadowVisible: false,
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
            <Box style={{ marginVertical: 15 }} ml={15}>
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
              <Avatar mr={15} bgColor="$amber600" size="md" borderRadius="$md">
                <AvatarFallbackText>Surya D</AvatarFallbackText>
              </Avatar>
            </TouchableOpacity>
          )
        })}
      >
        <Drawer.Screen
          name="dashboard"
          options={{ drawerLabel: "Dashboard" }}
        />
        <Drawer.Screen
          name="home"
          options={{
            drawerLabel: "Logout"
            // drawerItemStyle: { display: "none" }
          }}
        />
      </Drawer>
    </>
  );
};

export default ScreensLayout;
