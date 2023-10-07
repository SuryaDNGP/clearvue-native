import React from "react";
import { DashboardScreen } from "../../screens";
import { BackHandler, ToastAndroid } from "react-native";
import { useRoute } from "@react-navigation/native";
import { useFocusEffect, useNavigation } from "expo-router";
import { Box } from "@gluestack-ui/themed";
import { ExitApp } from "../../components/shared/Toaster";

export default function Dashboard() {
  let exitCount = 0;
  const route = useRoute();
  const navi = useNavigation();

  function backHandle(): boolean {
    setTimeout(() => {
      exitCount = 0;
    }, 2000);
    if (exitCount === 0) {
      exitCount = 1;
      ExitApp();
    } else if (exitCount == 1) {
      BackHandler.exitApp();
    }
    return true;
  }

  useFocusEffect(() => {
    BackHandler.addEventListener("hardwareBackPress", backHandle);
    return () => {
      BackHandler.removeEventListener("hardwareBackPress", backHandle);
    };
  });

  return (
    <>
      <DashboardScreen />
    </>
  );
}
