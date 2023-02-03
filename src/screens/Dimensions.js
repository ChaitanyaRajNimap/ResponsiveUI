import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../components/Metrics';

const Dimensions = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.containerText}>Dimensions example</Text>
    </View>
  );
};

export default Dimensions;

const styles = StyleSheet.create({
  container: {
    height: verticalScale(100),
    width: horizontalScale(250),
    marginTop: verticalScale(100),
    marginHorizontal: horizontalScale(60),
    backgroundColor: '#0f0',
  },
  containerText: {
    color: '#000',
    paddingHorizontal: horizontalScale(20),
    paddingVertical: verticalScale(20),
    marginVertical: verticalScale(20),
    fontSize: moderateScale(18),
    backgroundColor: '#f00',
    textAlign: 'center',
  },
});
