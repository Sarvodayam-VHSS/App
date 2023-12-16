import React from 'react';
import { View, Text, ImageBackground, Image, StyleSheet } from 'react-native';

const HomeServ = () => {
  const backgroundImage = require('/assets/abhiss.png');
  const logo = require('/assets/logo.png');

  const inventors = [
    'ABHISHEK P',
    'ABHISHEK CS',
    'RAM SUNDAR HARIKUMAR',
    'AGNEL',
    'ARJUN',
    'ATHUL',
  ];

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Image source={logo} style={styles.logo} />
        <Text style={styles.title}>About Us</Text>

        <View style={styles.inventorsContainer}>
          {inventors.map((inventor, index) => (
            <Text key={index} style={styles.inventorText}>
              {inventor}
            </Text>
          ))}
        </View>
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  background: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    padding: 20,
  },
  logo: {
    width: 150,
    height: 150,
    marginBottom: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 20,
    fontFamily: 'poppins-medium',
  },
  inventorsContainer: {
    marginTop: 10,
    alignItems: 'center',
  },
  inventorText: {
    fontSize: 18,
    color: 'white',
    marginBottom: 10,
    fontFamily: 'poppins-medium',
  },
});

export default HomeServ;
