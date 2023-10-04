import { Platform } from 'react-native';

export const CarouselGesture = () => {
  if (Platform.OS === 'web') {
    return false;
  }
  return true;
};
