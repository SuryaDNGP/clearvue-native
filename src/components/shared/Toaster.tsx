import Toast from "react-native-toast-message";

export function showToast(type: string, text: string) {
  Toast.show({
    type: type,
    text1: text
  });
}

export function ExitApp() {
  Toast.show({
    type: "exitApp",
    position: "bottom",
    visibilityTime: 1500
    // text2: "This is some something"
  });
}
