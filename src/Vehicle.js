// Vehicle.js
import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity, ImageBackground, Image } from 'react-native';
import { useNavigation } from '@react-navigation/native';

const VehicleScreen = () => {
  const navigation = useNavigation();

  const serviceButtons = [
    // Replace 'ios-taxi-outline' with 'autoIcon' for the custom image
    { label: 'Auto', value: 'auto', icon: require('../assets/travel.png') },
    { label: 'Taxi', value: 'taxi', icon: require('../assets/taxi.png') },
    { label: 'Ambulance', value: 'ambulance', icon: require('../assets/ambulance.png') },
    { label: 'Goods and Service', value: 'goodsandservice', icon: require('../assets/delivery-truck.png') },
  ];

  const handleButtonPress = (item) => {
    console.log('Button pressed: ${item.label}');
    if (item.value === 'ambulance') {
      navigation.navigate('Ambulance');
    } else if (item.value === 'taxi') {
      navigation.navigate('Taxi');
    } else if (item.value === 'auto') {
      navigation.navigate('Auto');
    } else if (item.value === 'goodsandservice') {
      navigation.navigate('GoodsandService');
    } else {
      console.log('Button pressed: ${item.label}');
    }
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
              {/* Use Image component for custom image */}
              {typeof item.icon === 'string' ? (
                <Image source={{ uri: item.icon }} style={styles.customIcon} />
              ) : (
                <Image source={item.icon} style={styles.customIcon} />
              )}
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
  customIcon: {
    width: 50, // Adjust the width and height according to your image size
    height: 50,
    marginBottom: 8,
  },
  buttonText: {
    fontSize: 16,
    fontWeight: 'bold',
    textAlign: 'center',
  },
});

export default VehicleScreen;