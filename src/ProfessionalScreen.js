// ProfessionalScreen.js
import React from 'react';
import { View, Text, StyleSheet, ImageBackground } from 'react-native';

const ProfessionalScreen = () => {
  return (
    <ImageBackground
      source={require('../assets/bg.jpg')} // Update with the actual path to your image
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Professional Screen</Text>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch' or 'contain'
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    color: '#fff', // Set the text color to be visible against the background
  },
});

export default ProfessionalScreen;
