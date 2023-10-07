import { Box, Text } from "@gluestack-ui/themed";
import { Platform } from "react-native";
import Toast, {
  BaseToast,
  ErrorToast,
  InfoToast
} from "react-native-toast-message";
const toastConfig = {
  /*
      Overwrite 'success' type,
      by modifying the existing `BaseToast` component
    */
  success: (props) => (
    <BaseToast
      {...props}
      style={[
        {
          borderLeftColor: "#69C779",
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
      Overwrite 'error' type,
      by modifying the existing `ErrorToast` component
    */
  error: (props) => (
    <ErrorToast
      {...props}
      style={[
        {
          borderLeftColor: "#FE6301",
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
