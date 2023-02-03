import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import Platform from './src/screens/PlatformEx';
// import AspectRatio from './src/screens/AspectRatio';
// import Percentage from './src/screens/Percentage';
// import FlexBox from './src/screens/FlexBox';
// import Dimensions from './src/screens/Dimensions';

const App = () => {
  return <Platform />;
};

export default App;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  heading: {
    color: '#000',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
