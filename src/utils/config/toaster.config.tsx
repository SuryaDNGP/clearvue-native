import { Box, CheckCircleIcon, CloseIcon, Text } from "@gluestack-ui/themed";
import { Platform } from "react-native";
import Toast, {
  BaseToast,
  ErrorToast,
  InfoToast
} from "react-native-toast-message";
import { Icon } from "@gluestack-ui/themed";
const toastConfig = {
  /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
  success: (props) => (
    <BaseToast
      {...props}
      renderLeadingIcon={() => {
        return (
          <Box ml={Platform.OS === "web" ? 55 : 33}>
            <Icon as={CheckCircleIcon} size="xl" color="#fff" />
          </Box>
        );
      }}
      style={[
        {
          borderLeftColor: "#69C779",
          backgroundColor: "#3a3a3a",
          alignItems: "center"
        },
        Platform.OS == "web" ? { width: 250 } : { maxWidth: 200 }
      ]}
      contentContainerStyle={{
        paddingHorizontal: 10
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
        color: "#fff"
      }}
    />
  ),
  /*
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
      */
  error: (props) => (
    <ErrorToast
      {...props}
      renderLeadingIcon={() => {
        return (
          <Box ml={Platform.OS === "web" ? 55 : 35}>
            <Icon as={CloseIcon} size="xl" color="#fff" />
          </Box>
        );
      }}
      style={[
        {
          borderLeftColor: "#FE6301",
          alignItems: "center",
          backgroundColor: "#3a3a3a"
        },
        Platform.OS == "web" ? { width: 250 } : { maxWidth: 200 }
      ]}
      contentContainerStyle={{
        paddingHorizontal: 10
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
        color: "#fff"
      }}
    />
  ),
  info: (props) => (
    <InfoToast
      {...props}
      style={[
        {
          borderLeftColor: "#87CEFA",
          backgroundColor: "#3a3a3a"
        },
        Platform.OS == "web" ? { width: 250 } : { maxWidth: 300 }
      ]}
      contentContainerStyle={{
        paddingHorizontal: 10
      }}
      text1Style={{
        fontSize: 15,
        fontWeight: "400",
        display: "flex",
        justifyContent: "center",
        color: "#fff"
      }}
    />
  ),
  /*
      Or create a completely new type - `tomatoToast`,
      building the layout from scratch.
  
      I can consume any custom `props` I want.
      They will be passed when calling the `show` method (see below)
    */

  exitApp: () => (
    <Box bg="#232323" px={12} py={12} borderRadius={10}>
      <Text fontSize={14}>Press back again to exit</Text>
    </Box>
  )
};

export { toastConfig };
