import React, { useEffect, useState, useContext } from 'react';
import { StyleSheet } from 'react-native';
import { View } from '@gluestack-ui/themed';
import { SafeAreaView } from 'react-native-safe-area-context';
import SwipeCarousel from '../../screens/DashboardScreens/SwipeCarousel';

export default function TabOneScreen() {
  return (
    <SafeAreaView>
      <View style={{ width: 600, height: 600 }}>
        <SwipeCarousel />
      </View>
    </SafeAreaView>
  );
}
