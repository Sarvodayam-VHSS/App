// ac.js
import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const ACComponent = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Air Conditioning Services</Text>
      <Text style={styles.description}>
        We provide professional air conditioning services for both residential and commercial spaces. Our experienced technicians ensure efficient installation, repair, and maintenance of air conditioning systems.
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    padding: 20,
    backgroundColor: '#F0F0F0', // Light gray background
    borderRadius: 10,
    marginTop: 20,
  },
  title: {
    fontSize: 18,
    fontWeight: 'bold',
    marginBottom: 10,
  },
  description: {
    fontSize: 16,
    color: '#333',
  },
});

export default ACComponent;
