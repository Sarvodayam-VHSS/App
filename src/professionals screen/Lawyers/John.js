import React from 'react';
import { View, Text, StyleSheet, ImageBackground, Image } from 'react-native';

const John = ({ route }) => {
  return (
    <ImageBackground
      source={require('../pfp/gradient.png')}
      style={styles.backgroundImage}
    >
      <View style={styles.container}>
        <Text style={styles.text}>John</Text>
        <Text style={styles.phone}>999XXXXX95</Text>
        <Image
          source={require('../pfp/ronaldo.jpg')}
          style={styles.circleImage}
        />
        {/* Display more details about the person */}
      </View>
    </ImageBackground>
  );
};

const styles = StyleSheet.create({
  backgroundImage: {
    flex: 1,
    resizeMode: 'cover',
    justifyContent: 'center',
  },
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: '10%',
  },
  circleImage: {
    width: 100,
    height: 100,
    borderRadius: 50,
    borderWidth: 3,
    borderColor: 'black',
    marginTop: '20%', // Set marginTop to 40% of the screen height
  },
  text: {
    fontSize: 30,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
  phone: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'white',
    marginBottom: 10,
    textShadowColor: 'black',
    textShadowOffset: { width: 0, height: 0 },
    textShadowRadius: 10,
  },
});

export default John;
