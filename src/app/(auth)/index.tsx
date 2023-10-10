import React, { useEffect } from "react";
import {
  Text,
  Box,
  Input,
  InputField,
  Button,
  ButtonText,
  Image,
  HStack,
  VStack,
} from "@gluestack-ui/themed";
import { SafeAreaView } from "react-native-safe-area-context";
import { useForm, Controller } from "react-hook-form";
import { LinearGradient } from "expo-linear-gradient";
import Spinner from "react-native-loading-spinner-overlay";
import {
  useFirebaseLoginMutation,
  useFirebaseRegisterMutation,
} from "../../store/services/fbAuthAPI";

export default function TabOneScreen() {
  const [firebaseLogin, { data, isLoading: loginLoading, error }] =
    useFirebaseLoginMutation();
  const [firebaseRegister, { isLoading: registerLoading }] =
    useFirebaseRegisterMutation();

  const {
    control,
    handleSubmit,
    reset,
    formState,
    formState: { errors, isSubmitSuccessful },
  } = useForm({
    defaultValues: {
      email: "",
      password: "",
    },
  });

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({ email: "", password: "" });
    }
  }, [formState, reset]);

  const handleSignIn = async (data: any) => {
    await firebaseLogin(data);
  };
  console.log("new:", data);

  const handleSignUp = async (data: any) => {
    await firebaseRegister(data).then(() => {
      console.log("Registered");
    });
  };

  return (
    <SafeAreaView
      style={{
        backgroundColor: "#000",
        flex: 1,
      }}
    >
      {loginLoading ||
        (registerLoading && <Spinner visible={loginLoading} size={50} />)}
      <Box height="$full" margin={24} justifyContent="space-between">
        <Box marginTop={130}>
          <HStack style={{ justifyContent: "center", marginBottom: 50 }}>
            <Image
              height={100}
              resizeMode="contain"
              source={require("../../assets/images/clearvuetext.png")}
              alt="logo"
            />
          </HStack>
          <VStack style={{ gap: 20 }}>
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <LinearGradient
                  style={{ borderRadius: 6 }}
                  colors={["#F2F2F21A", "#BEB5B51A"]}
                >
                  <Input
                    style={{ borderColor: "transparent" }}
                    height={48}
                    variant="outline"
                    size="md"
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                  >
                    <InputField
                      fontSize={14}
                      color="#A5ADBE"
                      onChangeText={onChange}
                      value={value}
                      onBlur={onBlur}
                      placeholder="Email"
                    />
                  </Input>
                </LinearGradient>
              )}
              name="email"
            />
            {errors.email && <Text>This is required.</Text>}
            <Controller
              control={control}
              rules={{
                required: true,
              }}
              render={({ field: { onChange, onBlur, value } }) => (
                <LinearGradient
                  style={{ borderRadius: 6 }}
                  colors={["#F2F2F21A", "#BEB5B51A"]}
                >
                  <Input
                    style={{ borderColor: "transparent" }}
                    variant="outline"
                    size="md"
                    height={48}
                    isDisabled={false}
                    isInvalid={false}
                    isReadOnly={false}
                  >
                    <InputField
                      fontSize={14}
                      color="#A5ADBE"
                      onChangeText={onChange}
                      value={value}
                      onBlur={onBlur}
                      placeholder="Password"
                    />
                  </Input>
                </LinearGradient>
              )}
              name="password"
            />
            {errors.password && <Text>This is required.</Text>}

            <LinearGradient
              style={{ borderRadius: 6, marginTop: 20 }}
              colors={["#0C67B2", "#195688"]}
            >
              <Button
                height={48}
                variant="outline"
                style={{ borderColor: "transparent" }}
                onPress={handleSubmit(handleSignIn)}
                sx={{
                  ":hover": {
                    bg: "transparent",
                  },
                }}
              >
                <ButtonText style={{ color: "white" }}>LOGIN </ButtonText>
              </Button>
            </LinearGradient>

            <LinearGradient
              style={{ borderRadius: 6, marginTop: 4 }}
              colors={["#0C67B2", "#195688"]}
            >
              <Button
                height={48}
                variant="outline"
                style={{ borderColor: "transparent" }}
                onPress={handleSubmit(handleSignUp)}
                sx={{
                  ":hover": {
                    bg: "transparent",
                  },
                }}
              >
                <ButtonText style={{ color: "white" }}>SIGN UP </ButtonText>
              </Button>
            </LinearGradient>
          </VStack>
        </Box>
        <Box alignItems="center" marginBottom={100}>
          <Text fontSize={12}>Powered by</Text>
          <Text fontSize={12}>Global Procurement Group</Text>
        </Box>
      </Box>
    </SafeAreaView>
  );
}
