import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground } from 'react-native';
import Icon from 'react-native-vector-icons/Ionicons';

const HomeServ = () => {
  const serviceButtons = [
    { label: 'Auto', value: 'auto', icon: 'ios-taxi-outline' },
    { label: 'Taxi', value: 'taxi', icon: 'ios-car-outline' },
    { label: 'Ambulance', value: 'ambulance', icon: 'ios-medical-outline' },
    { label: 'Goods and Service', value: 'goodsandservice', icon: 'ios-bus-outline' }, 
  ];

  const handleButtonPress = (item) => {
    console.log('Button pressed: ${item.label}');
  };

  return (
    <ImageBackground
      source={require('../assets/bg.jpg')}
      style={styles.background}
    >
      <View style={styles.container}>
        <Text style={styles.text}>Vehicles and Services</Text>

        <View style={styles.buttonContainer}>
          {serviceButtons.map((item) => (
            <TouchableOpacity
              key={item.value}
              style={styles.button}
              onPress={() => handleButtonPress(item)}
            >
              <Icon name={item.icon} size={30} color="#001F3F" />

              <Text style={styles.buttonText}>{item.label}</Text>
            </TouchableOpacity>
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
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    fontSize: 20,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  buttonContainer: {
    width: '80%',
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  button: {
    padding: 15,
    marginVertical: 10,
    width: '32%',
    aspectRatio: 1,
    borderRadius: 25,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'rgba(255, 255, 255, 0.8)',
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default HomeServ;