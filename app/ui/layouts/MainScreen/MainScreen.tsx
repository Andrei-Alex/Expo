import React from 'react';
import { SafeAreaView, View } from 'react-native';
import { styles, Props } from '.';

const MainScreen: React.FC<Props> = ({ children, style }) => {
  return (
    <SafeAreaView style={[styles.screen, style]}>
      <View style={style}>{children}</View>
    </SafeAreaView>
  );
};

export default MainScreen;
