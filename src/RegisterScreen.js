// RegisterScreen.js
import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, TouchableOpacity, ImageBackground, StyleSheet } from 'react-native';

const RegisterScreen = ({ navigation }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [error, setError] = useState('');

  useEffect(() => {
    if (error === 'Registration successful!') {
      // Redirect to the 'Login' screen after a successful registration
      // Replace 'Login' with the name of your login screen
      navigation.navigate('Login');
    }
  }, [error, navigation]);

  const handleRegister = () => {
    // Perform registration logic here
    // For simplicity, let's check if username, password, and confirmPassword are non-empty
    if (username && password && confirmPassword) {
      // Check if password and confirmPassword match
      if (password === confirmPassword) {
        // Registration successful, you can add your registration logic here
        // For this example, let's just display a success message
        setError('Registration successful!');
      } else {
        setError('Password and Confirm Password do not match');
      }
    } else {
      setError('Please fill in all fields');
    }
  };

  const navigateToLogin = () => {
    // Navigate to the 'Login' screen
    // Replace 'Login' with the name of your login screen
    navigation.navigate('Login');
  };

  return (
    <ImageBackground
      source={require('../assets/bg.jpg')} // Replace with the actual path to your image
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <TouchableOpacity
          style={[styles.button, { backgroundColor: 'blue' }]}
          onPress={handleRegister}
        >
          <Text style={[styles.buttonText, { color: 'white' }]}>Register</Text>
        </TouchableOpacity>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover', // or 'stretch'
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  button: {
    backgroundColor: 'blue',
    padding: 10,
    borderRadius: 20, // Adjust the value to change the roundness of the edges
    width: '80%', // Adjust the value to extend or reduce the width
  },
  buttonText: {
    color: 'white',
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default RegisterScreen;
