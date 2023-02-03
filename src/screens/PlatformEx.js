import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Platform} from 'react-native';
import {verticalScale} from '../components/Metrics';

const PlatformEx = () => {
  return (
    <View style={styles.rootConatiner}>
      <Text style={styles.text}>Platform Example</Text>
    </View>
  );
};

export default PlatformEx;

const styles = StyleSheet.create({
  rootConatiner: {
    flex: 1,
    alignItems: 'center',
    // justifyContent: 'center',
  },
  text: {
    padding: 20,
    marginTop: Platform.OS === 'ios' ? verticalScale(160) : verticalScale(50),
    backgroundColor: '#f00',
    color: '#fff',
    fontSize: 25,
    fontWeight: 'bold',
  },
});
