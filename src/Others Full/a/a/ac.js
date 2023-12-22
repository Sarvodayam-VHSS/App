// ac.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ACScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>A/C Service</Text>
      <Text style={styles.description}>
        Welcome to the A/C service screen. This is where you can provide details and information
        related to your A/C services.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    textAlign: 'center',
    paddingHorizontal: 20,
  },
});

export default ACScreen;
