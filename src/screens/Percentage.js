import React from 'react';
import {View, Text, StyleSheet} from 'react-native';

function Percentage() {
  return (
    <View style={styles.rootContainer}>
      <View style={styles.viewOne}>
        <Text style={styles.text}> View 1</Text>
      </View>
      <View style={styles.viewTwo}>
        <Text style={styles.text}> View 2</Text>
      </View>
    </View>
  );
}

export default Percentage;

const styles = StyleSheet.create({
  rootContainer: {
    flex: 1,
    alignItems: 'center',
    flexDirection: 'row',
  },
  viewOne: {
    width: '25%',
    padding: 20,
    backgroundColor: '#f00',
  },
  viewTwo: {
    width: '75%',
    padding: 20,
    backgroundColor: '#0f0',
  },
  text: {
    color: '#fff',
  },
});
