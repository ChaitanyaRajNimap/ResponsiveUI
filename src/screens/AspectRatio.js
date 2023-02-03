import React from 'react';
import {View, Text, StyleSheet, Image} from 'react-native';
import {
  horizontalScale,
  verticalScale,
  moderateScale,
} from '../components/Metrics';

const AspectRatio = () => {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.imageConatiner}>
        <Image
          source={require('../assets/images/luffy.jpg')}
          style={styles.image}
        />
      </View>
    </View>
  );
};

export default AspectRatio;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  imageConatiner: {
    height: verticalScale(500),
    borderColor: '#f00',
    borderWidth: 2,
  },
  image: {
    flex: 1,
    aspectRatio: 1 / 2,
  },
});
