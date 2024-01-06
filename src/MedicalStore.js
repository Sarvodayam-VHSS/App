// HomeServ.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const MedicalStore = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Religious</Text>
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

export default MedicalStore;
