import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

const FlexBox = () => {
  return (
    <View style={styles.container}>
      <View style={styles.textContainer}>
        <Text style={styles.text}>FlexBox View 1</Text>
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.text}>FlexBox View 2</Text>
      </View>
    </View>
  );
};

export default FlexBox;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
    justifyContent: 'space-around',
  },
  textContainer: {
    padding: 20,
    backgroundColor: '#f00',
  },
  text: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});
