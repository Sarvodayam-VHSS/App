import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const navigation = useNavigation();

  useEffect(() => {
    // Load the 'Poppins' font
    const loadFonts = async () => {
      await Font.loadAsync({
        'poppins-medium': require('./Poppins-Medium.ttf'), // Adjust the path here
      });
    };

    loadFonts();
  }, []);

  const handleLogin = () => {
    // Perform login logic here
    if (username && password) {
      // Successful login, navigate to the Home screen and reset the navigation state
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } else {
      setError('Invalid username or password');
    }
  };

  const handleNavigateToRegistration = () => {
    // Navigate to the registration screen
    navigation.navigate('Register');
  };

  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      style={styles.backgroundImage}
      resizeMode="cover"
    >
      <View style={styles.container}>
        <View style={styles.loginBox}>
          <Text style={[styles.title, { fontFamily: 'poppins-medium' }]}>Login</Text>
          <Icon name="user" size={40} color="black" style={styles.profileIcon} />
          <TextInput
            style={styles.input}
            placeholder="Email"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={styles.input}
            placeholder="Password"
            secureTextEntry
            value={password}
            onChangeText={setPassword}
          />
          {error ? <Text style={styles.error}>{error}</Text> : null}
          <View style={styles.buttonContainer}>
            <TouchableOpacity
              style={[styles.button, { backgroundColor: 'blue' }]}
              onPress={handleLogin}
            >
              <Text style={[styles.buttonText, { color: 'white' }]}>Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.button, styles.registerButton, { backgroundColor: 'blue' }]}
              onPress={handleNavigateToRegistration}
            >
              <Text style={[styles.buttonText, { color: 'white' }]}>Register</Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginBox: {
    width: '80%',
    height: 400,
    padding: 40,
    borderRadius: 25,
    backgroundColor: 'rgba(255, 255, 255, 0.8)', // Set the alpha (fourth parameter) to control transparency
    borderColor: 'blue',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 1,
    shadowRadius: 5,
    elevation: 5,
    alignItems: 'center', // Center the items inside the login box
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 10, // Adjusted margin to separate the title and icon
    fontFamily: 'poppins-medium',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
    borderRadius: 15, // Add this line to make the input boxes rounded
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
    width: '100%', // Make sure the buttons take the full width
  },
  button: {
    borderRadius: 20,
    paddingVertical: 10,
    width: '48%',
  },
  registerButton: {},
  buttonText: {
    textAlign: 'center',
  },
  backgroundImage: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  profileIcon: {
    marginBottom: 20, // Add margin to separate the icon from the email input
  },
});

export default LoginScreen;
