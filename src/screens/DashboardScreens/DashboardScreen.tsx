import React, { useState } from "react";
import {
  Text,
  Box,
  Button,
  ButtonText,
  ButtonIcon,
  HStack,
  AddIcon,
  ToastTitle,
  ToastDescription,
  VStack,
  useToast,
  Toast
} from "@gluestack-ui/themed";
import { LinearGradient } from "expo-linear-gradient";
import { COLORS } from "../../constants";
import {
  FlatList,
  ScrollView,
  TouchableOpacity
} from "react-native-gesture-handler";
import DeviceDetailShared from "../../components/shared/DeviceDetailShared";
import SwipeCarousel from "./SwipeCarousel";

export default function DashboardScreen() {
  const [buttonType, setButtonType] = useState("Production Floor");
  const toast = useToast();
  const deviceList = [
    {
      status: "active",
      title: "S102",
      data: {
        temp: "24",
        pressure: "1004",
        humidity: "74",
        light: "74"
      }
    },
    {
      status: "inactive",
      title: "S103",
      data: {}
    },
    {
      status: "active",
      title: "S104",
      data: {
        temp: "24",
        pressure: "1004",
        humidity: "72",
        light: "720"
      }
    }
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
            marginHorizontal: 10
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
            {/* <ChartCarousel /> */}
            <SwipeCarousel />
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
            <Text
              sx={{
                ":hover": {
                  cursor: "none"
                }
              }}
              color={COLORS.green}
            >
              Show more
            </Text>
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
            borderRadius: 10
          }}
          colors={["#F2F2F21A", "#BEB5B51A"]}
        >
          <Button
            paddingVertical={8}
            sx={{
              _web: {
                height: "100%"
              },
              ":hover": {
                backgroundColor: "transparent"
              }
            }}
            variant="outline"
            action="primary"
            borderWidth={0}
            onPress={() => {
              toast.show({
                placement: "top",
                render: ({ id }) => {
                  return (
                    <Toast
                      nativeID={String(id)}
                      action="attention"
                      variant="solid"
                    >
                      <VStack space="xs">
                        <ToastTitle>New Message</ToastTitle>
                        <ToastDescription>
                          Hey, just wanted to touch base and see how you're
                          doing. Let's catch up soon!
                        </ToastDescription>
                      </VStack>
                    </Toast>
                  );
                }
              });
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
