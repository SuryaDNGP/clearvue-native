import React, { useEffect, useState, useContext } from "react";
import { StyleSheet } from "react-native";
import {
  Text,
  Box,
  Input,
  InputField,
  Button,
  ButtonText,
  ButtonIcon,
  Avatar,
  AvatarFallbackText,
  VStack,
  HStack,
  Badge,
  BadgeText,
  EditIcon,
  AddIcon,
} from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { SafeAreaView } from "react-native-safe-area-context";
import { Stack } from "expo-router";
import { AuthContext } from "../../components/context/AuthContext";
import { COLORS } from "../../constants";
import {
  FlatList,
  ScrollView,
  TouchableOpacity,
} from "react-native-gesture-handler";
import DeviceDetailShared from "../../components/shared/DeviceDetailShared";
import InteractiveChart from "./charts";
import ChartCarousel from "./Carousel";
import { ProgressCircle } from "react-native-svg-charts";
export default function DashboardScreen() {
  const { signOutAction } = useContext(AuthContext);
  const [buttonType, setButtonType] = useState("Production Floor");
  const deviceList = [
    {
      status: "active",
      title: "S102",
      data: {
        temp: "24",
        pressure: "1004",
        humidity: "74",
        light: "74",
      },
    },
    {
      status: "inactive",
      title: "S103",
      data: {},
    },
    {
      status: "active",
      title: "S104",
      data: {
        temp: "24",
        pressure: "1004",
        humidity: "72",
        light: "720",
      },
    },
  ];

  return (
    <ScrollView style={{ backgroundColor: COLORS.background, flex: 1 }}>
      <Box mt={10}>
        {/* ----Header Profile---- */}

        {/* ---- Badges ---- */}
        <HStack mb={5}>
          <FlatList
            style={{ paddingHorizontal: 10 }}
            showsHorizontalScrollIndicator={false}
            horizontal
            data={["Production Floor", "Warehouse", "Boiler Room"]}
            renderItem={({ item }) => (
              <Button
                marginRight={12}
                variant="solid"
                bg={item === buttonType ? COLORS.purple : COLORS.secondaryBlack}
                borderRadius="$full"
                paddingVertical={6}
                paddingHorizontal={20}
                onPress={(e) => {
                  setButtonType(item);
                }}
                minWidth={160}
              >
                <ButtonText marginTop={2} fontSize="$sm">
                  {item}
                </ButtonText>
              </Button>
            )}
          />
        </HStack>
        <LinearGradient
          style={{
            borderRadius: 10,
            marginBottom: 10,
            marginTop: 12,
            marginHorizontal: 10,
          }}
          colors={["#F2F2F21A", "#BEB5B51A"]}
        >
          <Box margin={8}>
            <HStack
              marginTop={22}
              marginHorizontal={8}
              justifyContent="space-between"
            >
              <Text fontSize="$lg" fontWeight="bold">
                Activity
              </Text>
              <TouchableOpacity>
                <Text color={COLORS.green}>Show more</Text>
              </TouchableOpacity>
            </HStack>
            <ChartCarousel />
          </Box>
        </LinearGradient>
        {/* ---- Sensors ---- */}
        <HStack
          marginHorizontal={16}
          marginTop={8}
          marginBottom={12}
          justifyContent="space-between"
        >
          <Text fontSize="$lg" fontWeight="bold">
            Sensors
          </Text>
          <TouchableOpacity>
            <Text color={COLORS.green}>Show more</Text>
          </TouchableOpacity>
        </HStack>
        <FlatList
          style={{ marginTop: 12 }}
          data={deviceList}
          renderItem={({ item }) => (
            <DeviceDetailShared device={item} title="S102" status="active" />
          )}
        />
      </Box>
      <Box alignItems="center" marginBottom={16} marginTop={8}>
        {/* <TouchableOpacity> */}
        <LinearGradient
          style={{
            borderRadius: 10,
            width: 200,
            paddingVertical: 4,
          }}
          colors={["#F2F2F21A", "#BEB5B51A"]}
        >
          <Button
            variant="outline"
            action="primary"
            borderWidth={0}
            sx={{
              ":hover": {
                _text: {
                  color: "red",
                },
              },
            }}
          >
            <ButtonIcon color="white" as={AddIcon} mr="$2" />
            <ButtonText color="white">Add new device</ButtonText>
          </Button>
        </LinearGradient>
        {/* </TouchableOpacity> */}
      </Box>
      {/* <Text>Home Page</Text>
      <Button
        onPress={() => {
          signOutAction();
        }}
      >
        <ButtonText>LOGOUT</ButtonText>
      </Button> */}
    </ScrollView>
  );
}
