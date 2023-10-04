import React, { useRef, useState } from 'react';
// import InteractiveChart from './charts';
import InteractiveChart from './AlternateChart';
import { COLORS } from '../../constants';
import { Dimensions } from 'react-native';
import Swiper from 'react-native-web-swiper';
import { Platform } from 'react-native';
import { TouchableOpacity, StyleSheet, Image } from 'react-native';
import { CarouselGesture } from '../../utils/helpers';
import { Box } from '@gluestack-ui/themed';
import { ProgressCircle } from 'react-native-svg-charts';
import { Text, View } from '@gluestack-ui/themed';
// const Item = ({ item }: any) => {
//   return <InteractiveChart chartColor={item.chartColor} />;
// };

const data = [
  { chartColor: COLORS.chartLinePink, bgColor: '#b91e7a66' },
  { chartColor: COLORS.chartLineBlue, bgColor: '#0C66B166' },
  { chartColor: COLORS.chartLinePurple, bgColor: '#9368FB66' },
  { chartColor: COLORS.chartLineRed, bgColor: '#F44C4566' },
];
// const DeviceWidth = Dimensions.get('window').width;

const SwipeCarousel = () => {
  return (
    <View style={{ flex: 1 }}>
      <Swiper
        gesturesEnabled={CarouselGesture}
        from={1}
        minDistanceForAction={0.1}
        controlsProps={{
          prevPos: false,
          nextPos: false,
          dotsTouchable: true,
          dotsPos: 'bottom',
          dotActiveStyle: { backgroundColor: COLORS.grey },
        }}
      >
        {data.map((item, index) => (
          <View style={styles.slide}>
            <Box flexDirection="row" mt={20}>
              <Box position="relative">
                <ProgressCircle
                  style={{ height: 100, width: 100 }}
                  progress={0.8}
                  progressColor={item.chartColor}
                  backgroundColor={item.bgColor}
                />
                <Box position="absolute" left={32} top={30}>
                  <Text fontWeight="$bold">24&deg;C</Text>
                  <Text fontSize="$sm" color="#B7B7B7">
                    Temp
                  </Text>
                </Box>
              </Box>
              <Box ml={30} mt={20}>
                <Text>30% Lower Today</Text>
                <Text fontSize="$sm" color="#B7B7B7">
                  Updated 10mins ago
                </Text>
              </Box>
            </Box>
            <InteractiveChart chartColor={item.chartColor} />
          </View>
        ))}
      </Swiper>
    </View>
  );
};

export default SwipeCarousel;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  heading: {
    fontSize: 44,
  },
  wrapper: {},
  slide: {},
  slide1: {},
  slide2: {},
  slide3: {},
  text: {
    color: '#fff',
    fontSize: 30,
    fontWeight: 'bold',
  },
  img: {
    width: 310,
    height: 350,
  },
});
