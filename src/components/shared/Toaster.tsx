import Toast from "react-native-toast-message";

export function showToast(type: string, text: string, position: string) {
  console.log(position);

  Toast.show({
    type: type,
    text1: text,
    position: position
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
