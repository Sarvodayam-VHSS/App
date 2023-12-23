// HomeServ.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const HomeServ = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Home Services Page</Text>
      {/* Add your HomeServ page content here */}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
  },
});

export default HomeServ;
