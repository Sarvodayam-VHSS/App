import React, { useState, useEffect } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/FontAwesome';
import { useNavigation } from '@react-navigation/native';
import * as Font from 'expo-font';

const LoginScreen = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [fontLoaded, setFontLoaded] = useState(false);
  const navigation = useNavigation();

  useEffect(() => {
    const loadFonts = async () => {
      await Font.loadAsync({
        'poppins-medium': require('./src/Poppins-Medium.ttf'),
      });
      setFontLoaded(true);
    };

    loadFonts();
  }, []);

  const handleLogin = () => {
    if (username && password) {
      navigation.reset({
        index: 0,
        routes: [{ name: 'Home' }],
      });
    } else {
      setError('Invalid username or password');
    }
  };

  const handleNavigateToRegistration = () => {
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
          <Text style={styles.title}>Login</Text>
          <View style={styles.profileContainer}>
            <View style={styles.profile}>
              <Icon name="user" size={40} color="black" />
              <Text style={styles.profileText}>Welcome, User!</Text>
            </View>
          </View>
          <TextInput
            style={[styles.input, styles.roundedInput]}
            placeholder="Email"
            value={username}
            onChangeText={setUsername}
          />
          <TextInput
            style={[styles.input, styles.roundedInput]}
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
    backgroundColor: 'rgba(255, 255, 255, 1)',
    borderColor: 'blue',
    borderWidth: 2,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 4,
    elevation: 5,
  },
  title: {
    textAlign: 'center',
    fontSize: 24,
    color: 'black',
    fontWeight: 'bold',
    marginBottom: 30,
    fontFamily: 'poppins-medium',
  },
  input: {
    height: 40,
    width: '100%',
    borderColor: 'gray',
    borderWidth: 1,
    marginBottom: 10,
    paddingLeft: 10,
  },
  roundedInput: {
    borderRadius: 20,
  },
  error: {
    color: 'red',
    marginBottom: 10,
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 10,
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
  profileContainer: {
    alignItems: 'center',
    marginBottom: 20,
  },
  profile: {
    alignItems: 'center',
  },
  profileText: {
    marginTop: 10,
    fontSize: 16,
    color: 'black',
  },
});

export default LoginScreen;
